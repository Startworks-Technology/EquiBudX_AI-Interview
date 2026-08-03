import { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import { ArrowLeft, Mic, MicOff, Send, Bot, Loader2, AlertTriangle, Clock, Camera, CameraOff, Video, Download, SkipForward } from 'lucide-react';
import { interviewModules } from '../../../data/interviews';
import { saveInterviewRecord } from './InterviewDashboard';
import { API_BASE_URL } from '../../../config/api';

export default function InterviewRoom() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const skillId = searchParams.get('skill') || 'general';
  const roundType = (searchParams.get('round') || 'tech_domain') as string;
  const experienceLevel = searchParams.get('level') || 'fresher';
  const candidateBio = searchParams.get('bio') || '';

  const moduleId = id || 'javascript';
  const currentModule = interviewModules.find(m => m.id === moduleId) || interviewModules[0];
  const currentSkill = currentModule.skills?.find(s => s.id === skillId) || currentModule.skills?.[0] || { title: 'General', questions: [] };


  const [questions, setQuestions] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  const [isRecording, setIsRecording] = useState(false);
  const [textInput, setTextInput] = useState('');
  const [timeLeft, setTimeLeft] = useState(60);
  const [warnings, setWarnings] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Webcam & Recording state
  const [cameraActive, setCameraActive] = useState(false);
  const [cameraError, setCameraError] = useState<string | null>(null);
  const [isVideoRecording, setIsVideoRecording] = useState(false);
  const [showDownloadModal, setShowDownloadModal] = useState(false);
  const [pendingFeedbackNav, setPendingFeedbackNav] = useState<{
    report: string;
    qaPairs: { question: string; answer: string }[];
    score?: number;
    correct?: number;
    wrong?: number;
    roleTitle?: string;
  } | null>(null);

  const recognitionRef = useRef<any>(null);
  const timerRef = useRef<any>(null);
  const webcamRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const recordedChunksRef = useRef<Blob[]>([]);

  // Initialize Webcam & MediaRecorder
  useEffect(() => {
    const initCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        streamRef.current = stream;
        if (webcamRef.current) {
          webcamRef.current.srcObject = stream;
        }
        setCameraActive(true);

        // Setup MediaRecorder
        const options = MediaRecorder.isTypeSupported('video/webm;codecs=vp9,opus')
          ? { mimeType: 'video/webm;codecs=vp9,opus' }
          : { mimeType: 'video/webm' };

        const recorder = new MediaRecorder(stream, options);
        recorder.ondataavailable = (event) => {
          if (event.data && event.data.size > 0) {
            recordedChunksRef.current.push(event.data);
          }
        };
        mediaRecorderRef.current = recorder;
        // Start recording immediately without timeslice to ensure proper video duration headers
        recorder.start();
        setIsVideoRecording(true);
      } catch (err: any) {
        console.warn('Camera access denied:', err);
        setCameraError('Camera permission denied. You can continue without video.');
      }
    };

    initCamera();

    return () => {
      // Cleanup stream on unmount
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
      }
      if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
        mediaRecorderRef.current.stop();
      }
    };
  }, []);

  // Anti-Cheat: Tab Switching
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden && questions.length > 0) {
        setWarnings(prev => {
          const newWarnings = prev + 1;
          alert(`WARNING (${newWarnings}/3): You switched tabs! This is a mock interview violation.`);
          if (newWarnings >= 3) {
            navigate('/student/interview'); // Kick them out
          }
          return newWarnings;
        });
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('blur', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('blur', handleVisibilityChange);
    };
  }, [questions, navigate]);

  const getRoundLabel = () => {
    if (roundType === 'full_drive') {
      if (currentIndex < 2) return '👔 Round 1/3: Recruiter HR Screening';
      if (currentIndex < 5) return '💻 Round 2/3: Technical Domain';
      return '🏗️ Round 3/3: Behavioral STAR';
    }
    if (roundType === 'hr_screen') return '👔 Recruiter HR Screening';
    if (roundType === 'tech_domain') return '💻 Technical Domain Round';
    if (roundType === 'managerial') return '🏗️ Behavioral STAR Round';
    return '🎯 Practice Round';
  };

  // Load Questions & Setup Speech
  useEffect(() => {
    let q: string[] = [];
    if (currentModule.roundQuestions) {
      if (roundType === 'hr_screen') {
        q = currentModule.roundQuestions.hrScreen;
      } else if (roundType === 'tech_domain') {
        q = currentModule.roundQuestions.techDomain;
      } else if (roundType === 'managerial') {
        q = currentModule.roundQuestions.managerial;
      } else if (roundType === 'full_drive') {
        q = [
          ...currentModule.roundQuestions.hrScreen.slice(0, 2),
          ...currentModule.roundQuestions.techDomain.slice(0, 3),
          ...currentModule.roundQuestions.managerial.slice(0, 2)
        ];
      }
    }
    if (!q || q.length === 0) {
      q = currentSkill.questions || ["Tell me about your technical background and experience."];
    }
    setQuestions(q);
    setAnswers(new Array(q.length).fill(""));


    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.continuous = true; // Keep listening until they submit
      recognition.interimResults = true;
      recognition.lang = 'en-US';

      recognition.onresult = (event: any) => {
        let finalTranscript = '';
        for (let i = event.resultIndex; i < event.results.length; ++i) {
          if (event.results[i].isFinal) {
            finalTranscript += event.results[i][0].transcript + ' ';
          }
        }
        if (finalTranscript) {
          setTextInput(prev => (prev + ' ' + finalTranscript).trim());
        }
      };

      recognition.onend = () => {
        setIsRecording(false);
      };

      recognitionRef.current = recognition;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [moduleId]);

  // Read current question & start timer
  useEffect(() => {
    if (questions.length > 0 && currentIndex < questions.length) {
      speakText(questions[currentIndex]);
      setTextInput(''); // Clear previous answer

      // Start 60s timer
      setTimeLeft(60);
      if (timerRef.current) clearInterval(timerRef.current);
      timerRef.current = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            clearInterval(timerRef.current);
            handleNextQuestion();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex, questions]);

  const speakText = (text: string) => {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    const voices = window.speechSynthesis.getVoices();
    const englishVoice = voices.find(v => v.lang.startsWith('en-') && v.name.includes('Google')) || voices[0];
    if (englishVoice) utterance.voice = englishVoice;

    window.speechSynthesis.speak(utterance);
  };

  const toggleRecording = () => {
    if (isRecording) {
      recognitionRef.current?.stop();
    } else {
      window.speechSynthesis.cancel();
      recognitionRef.current?.start();
      setIsRecording(true);
    }
  };

  const handleNextQuestion = () => {
    // Save current answer
    const newAnswers = [...answers];
    newAnswers[currentIndex] = textInput || "No answer provided within time limit.";
    setAnswers(newAnswers);

    if (isRecording) {
      recognitionRef.current?.stop();
    }
    window.speechSynthesis.cancel();

    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      // Finish interview
      submitInterview(newAnswers);
    }
  };

  const submitInterview = async (finalAnswers: string[]) => {
    setIsSubmitting(true);
    if (timerRef.current) clearInterval(timerRef.current);

    try {
      const response = await fetch(`${API_BASE_URL}/api/interview/evaluate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          roleType: currentModule.title,
          branch: currentModule.branch,
          roundType,
          experienceLevel,
          candidateBio,
          qaPairs: questions.map((q, i) => ({ question: q, answer: finalAnswers[i] }))
        })
      });

      const data = await response.json();

      // Save to backend database
      try {
        await fetch(`${API_BASE_URL}/api/interview/record`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('EquiBudX_token') || localStorage.getItem('token')}`
          },
          body: JSON.stringify({
            roleType: moduleId,
            score: data.score,
            correctAnswers: data.correct,
            wrongAnswers: data.wrong,
            feedbackReport: data.report,
            qaPairs: data.qaPairs
          })
        });
      } catch (dbErr) {
        console.error("Failed to save to database:", dbErr);
      }

      // Save to localStorage history
      saveInterviewRecord({
        id: `interview_${Date.now()}`,
        roleType: moduleId,
        roleTitle: `${currentModule.title} - ${currentSkill.title}`,
        mode: 'structured',
        date: new Date().toISOString(),
        questionCount: questions.length,
        report: data.report,
        qaPairs: data.qaPairs
      });

      // Stop recording and show download modal if recording was active
      if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
        mediaRecorderRef.current.stop();
        setIsVideoRecording(false);
      }

      // Store feedback data and show modal
      setPendingFeedbackNav({
        report: data.report,
        qaPairs: data.qaPairs,
        score: data.score,
        correct: data.correct,
        wrong: data.wrong,
        roleTitle: `${currentModule.title} — ${currentSkill.title}`
      });
      setShowDownloadModal(true);
      setIsSubmitting(false);
    } catch (error) {
      console.error("Failed to submit", error);
      alert("Failed to submit interview for evaluation.");
      setIsSubmitting(false);
    }
  };

  const handleDownloadRecording = () => {
    const blob = new Blob(recordedChunksRef.current, { type: 'video/webm' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `EquiBudX_interview_${moduleId}_${Date.now()}.webm`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    // Navigate to feedback after a short delay for download to start
    setTimeout(() => {
      navigateToFeedback();
    }, 500);
  };

  const handleSkipDownload = () => {
    recordedChunksRef.current = [];
    navigateToFeedback();
  };

  const navigateToFeedback = () => {
    if (pendingFeedbackNav) {
      navigate(`/student/interview/${moduleId}/feedback`, { state: pendingFeedbackNav });
    }
  };



  if (questions.length === 0) {
    return <div className="h-full flex items-center justify-center bg-slate-50"><Loader2 className="w-12 h-12 text-primary animate-spin" /></div>;
  }

  return (
    <div className="h-full flex flex-col bg-slate-50 select-none" onContextMenu={(e) => e.preventDefault()}>
      {/* Top Bar */}
      <header className="h-16 border-b border-slate-200 bg-white flex items-center justify-between px-6 flex-shrink-0 z-10 shadow-sm">
        <div className="flex items-center gap-4">
          <button onClick={() => { window.speechSynthesis.cancel(); navigate('/student/interview'); }} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
            <ArrowLeft className="w-5 h-5 text-slate-600" />
          </button>
          <div>
            <h1 className="font-bold text-slate-900">{currentModule.title} Interview</h1>
            <p className="text-xs font-bold text-primary flex items-center gap-2">
              <span>{currentSkill.title}</span>
              <span className="text-slate-300">•</span>
              <span className="text-purple-600 bg-purple-50 px-2 py-0.5 rounded-full border border-purple-100">{getRoundLabel()}</span>
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          {isVideoRecording && (
            <span className="flex items-center gap-2 px-3 py-1.5 bg-red-50 text-red-700 rounded-full text-xs font-bold border border-red-200 animate-pulse">
              <Video className="w-4 h-4" /> REC
            </span>
          )}
          {warnings > 0 && (
            <span className="flex items-center gap-2 px-3 py-1.5 bg-red-50 text-red-700 rounded-full text-xs font-bold border border-red-200">
              <AlertTriangle className="w-4 h-4" /> Warnings: {warnings}/3
            </span>
          )}
          <span className="flex items-center gap-2 px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-xs font-bold border border-blue-200">
            <Clock className="w-4 h-4" /> {timeLeft}s
          </span>
          <span className="flex items-center gap-2 px-3 py-1.5 bg-emerald-50 text-emerald-700 rounded-full text-xs font-bold border border-emerald-200">
            Q {currentIndex + 1} of {questions.length}
          </span>
        </div>
      </header>

      {/* 3-Round Stepper Banner for Full Placement Drive */}
      {roundType === 'full_drive' && (
        <div className="bg-slate-900 text-white px-6 py-2.5 flex flex-wrap items-center justify-between shadow-inner flex-shrink-0 text-xs font-bold gap-3">
          <div className="flex items-center gap-2">
            <span className="bg-primary text-white text-[10px] uppercase font-black px-2.5 py-0.5 rounded tracking-wider shadow-sm">
              Full Placement Drive
            </span>
            <span className="text-slate-400 hidden sm:inline">• 3 Rounds (7 Questions Total)</span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
            {/* Round 1 */}
            <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full transition-all ${
              currentIndex < 2 ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 font-black ring-2 ring-amber-500/20' : 'text-slate-400'
            }`}>
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black ${
                currentIndex < 2 ? 'bg-amber-500 text-slate-950' : currentIndex >= 2 ? 'bg-emerald-500 text-white' : 'bg-slate-800 text-slate-400'
              }`}>
                {currentIndex >= 2 ? '✓' : '1'}
              </span>
              <span>Round 1: HR (2 Qs)</span>
            </div>

            <span className="text-slate-600">→</span>

            {/* Round 2 */}
            <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full transition-all ${
              currentIndex >= 2 && currentIndex < 5 ? 'bg-blue-500/20 text-blue-300 border border-blue-500/40 font-black ring-2 ring-blue-500/20' : 'text-slate-400'
            }`}>
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black ${
                currentIndex >= 2 && currentIndex < 5 ? 'bg-blue-500 text-white' : currentIndex >= 5 ? 'bg-emerald-500 text-white' : 'bg-slate-800 text-slate-400'
              }`}>
                {currentIndex >= 5 ? '✓' : '2'}
              </span>
              <span>Round 2: Tech (3 Qs)</span>
            </div>

            <span className="text-slate-600">→</span>

            {/* Round 3 */}
            <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full transition-all ${
              currentIndex >= 5 ? 'bg-purple-500/20 text-purple-300 border border-purple-500/40 font-black ring-2 ring-purple-500/20' : 'text-slate-400'
            }`}>
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black ${
                currentIndex >= 5 ? 'bg-purple-500 text-white' : 'bg-slate-800 text-slate-400'
              }`}>
                3
              </span>
              <span>Round 3: Behavioral (2 Qs)</span>
            </div>
          </div>
        </div>
      )}

      {/* Main Workspace */}
      <div className="flex-1 flex flex-col md:flex-row overflow-hidden">

        {/* Left Panel: Visuals & Controls */}
        <div className="w-full md:w-1/2 md:border-r border-slate-200 bg-slate-100 flex flex-col p-8 items-center justify-center relative">
          {/* AI Avatar */}
          <div className="w-48 h-48 rounded-full bg-gradient-to-b from-indigo-500 to-purple-600 shadow-2xl flex items-center justify-center relative mb-12">
            <div className={`absolute inset-0 rounded-full border-2 border-indigo-400 opacity-20 ${isSubmitting ? 'animate-ping' : ''}`}></div>
            <div className={`absolute -inset-4 rounded-full border border-purple-300 opacity-30 ${isSubmitting ? 'animate-pulse' : ''}`}></div>
            {isSubmitting ? <Loader2 className="w-20 h-20 text-white animate-spin" /> : <Bot className="w-20 h-20 text-white" />}
          </div>

          <h2 className="text-2xl font-black text-slate-800 mb-2">Senior {currentModule.title} AI</h2>
          <p className="text-slate-500 mb-12 text-center max-w-sm h-12">
            {isSubmitting ? "Evaluating your answers..." : isRecording ? "Listening..." : "Click the microphone to record your answer."}
          </p>

          <button
            onClick={toggleRecording}
            disabled={isSubmitting}
            className={`w-20 h-20 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${isRecording
                ? 'bg-red-500 hover:bg-red-600 text-white animate-bounce'
                : isSubmitting
                  ? 'bg-slate-200 border-4 border-slate-300 text-slate-400 cursor-not-allowed'
                  : 'bg-white hover:bg-slate-50 border-4 border-primary text-primary'
              }`}
          >
            {isRecording ? <MicOff className="w-8 h-8" /> : <Mic className="w-8 h-8" />}
          </button>

          {/* Webcam Preview */}
          <div className="absolute bottom-4 right-4">
            {cameraActive ? (
              <div className="relative">
                <video
                  ref={webcamRef}
                  autoPlay
                  muted
                  playsInline
                  style={{ width: 160, height: 120, objectFit: 'cover' }}
                  className="rounded-xl border-2 border-white shadow-lg"
                />
                {isVideoRecording && (
                  <div className="absolute top-2 left-2 flex items-center gap-1 bg-red-500/80 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full backdrop-blur-sm">
                    <Camera className="w-3 h-3" />
                    <span className="animate-pulse">●</span>
                  </div>
                )}
              </div>
            ) : cameraError ? (
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-xl px-3 py-2 shadow-md border border-slate-200 text-xs text-slate-500 max-w-[180px]">
                <CameraOff className="w-4 h-4 text-slate-400 flex-shrink-0" />
                <span>{cameraError}</span>
              </div>
            ) : null}
          </div>
        </div>

        {/* Right Panel: Question & Answer */}
        <div className="w-full md:w-1/2 bg-white flex flex-col border-t md:border-t-0 border-slate-200">
          <div className="p-8 border-b border-slate-100 flex-shrink-0 bg-slate-50">
            <div className="flex items-center justify-between mb-4">
              <span className="font-extrabold text-slate-500 uppercase tracking-wider text-xs">
                Question {currentIndex + 1} of {questions.length}
              </span>
              {roundType === 'full_drive' && (
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-bold text-xs border border-primary/20">
                  {currentIndex < 2 ? 'Round 1 Q' + (currentIndex + 1) + ' of 2 (HR Screening)' : 
                   currentIndex < 5 ? 'Round 2 Q' + (currentIndex - 1) + ' of 3 (Technical Domain)' : 
                   'Round 3 Q' + (currentIndex - 4) + ' of 2 (Behavioral STAR)'}
                </span>
              )}
            </div>
            <p className="text-2xl font-bold text-slate-900 leading-snug">
              {questions[currentIndex]}
            </p>
          </div>

          <div className="flex-1 p-6 flex flex-col">
            <h3 className="font-bold text-slate-500 uppercase tracking-wider text-xs mb-4 flex items-center gap-2">
              <Mic className="w-4 h-4 text-primary" />
              Your Answer (Speak or Type)
            </h3>
            <div className="flex-1 w-full rounded-xl border border-slate-200 bg-slate-50 relative flex flex-col focus-within:ring-2 focus-within:ring-primary focus-within:border-transparent transition-all overflow-hidden">
              <textarea
                value={textInput}
                onChange={(e) => setTextInput(e.target.value)}
                placeholder={isRecording ? "Listening to your answer..." : "Click the microphone to speak, or just start typing your answer here..."}
                className="flex-1 w-full h-full p-6 bg-transparent resize-none outline-none text-slate-800 font-medium leading-relaxed placeholder:text-slate-400"
              />

              {isRecording && (
                <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-primary/10 text-primary px-3 py-1.5 rounded-full text-xs font-bold animate-pulse">
                  <div className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce" style={{ animationDelay: '0ms' }}></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce" style={{ animationDelay: '150ms' }}></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce" style={{ animationDelay: '300ms' }}></span>
                  </div>
                  Recording
                </div>
              )}
            </div>
          </div>

          <div className="p-6 border-t border-slate-100 bg-slate-50 flex justify-end">
            <button
              onClick={handleNextQuestion}
              disabled={isSubmitting}
              className="bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-primary/90 transition-colors shadow-sm flex items-center gap-2 disabled:bg-slate-300 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <><Loader2 className="w-5 h-5 animate-spin" /> Evaluating...</>
              ) : (
                <>{currentIndex === questions.length - 1 ? 'Submit Interview' : 'Next Question'} <Send className="w-5 h-5" /></>
              )}
            </button>
          </div>
        </div>

      </div>

      {/* Download Recording Modal */}
      {showDownloadModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 text-center animate-in">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Video className="w-8 h-8 text-emerald-600" />
            </div>
            <h3 className="text-2xl font-black text-slate-900 mb-3">Interview Complete!</h3>
            <p className="text-slate-500 mb-8 leading-relaxed">
              {recordedChunksRef.current.length > 0
                ? "Your interview was recorded. Would you like to download the recording?"
                : "Your interview has been evaluated. Proceed to view your feedback."}
            </p>
            <div className="flex flex-col gap-3">
              {recordedChunksRef.current.length > 0 && (
                <button
                  onClick={handleDownloadRecording}
                  className="w-full bg-emerald-600 text-white font-bold py-3 px-6 rounded-xl hover:bg-emerald-700 transition-colors shadow-sm flex items-center justify-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  Download Recording
                </button>
              )}
              <button
                onClick={handleSkipDownload}
                className="w-full bg-slate-100 text-slate-700 font-bold py-3 px-6 rounded-xl hover:bg-slate-200 transition-colors flex items-center justify-center gap-2"
              >
                <SkipForward className="w-5 h-5" />
                {recordedChunksRef.current.length > 0 ? 'Skip & View Feedback' : 'View Feedback'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
