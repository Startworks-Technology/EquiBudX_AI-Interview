import { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { API_BASE_URL } from '../../../config/api';
import { ArrowLeft, Mic, MicOff, Settings, Send, Bot, User, Loader2 } from 'lucide-react';

interface Message {
  role: 'system' | 'user';
  content: string;
}

export default function InterviewRoom() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [isRecording, setIsRecording] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [transcript, setTranscript] = useState<Message[]>([]);
  const [textInput, setTextInput] = useState('');
  
  const transcriptEndRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<any>(null);
  
  // Auto-scroll transcript
  useEffect(() => {
    transcriptEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [transcript]);

  // Setup Speech Recognition
  useEffect(() => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = 'en-US';

      recognition.onresult = (event: any) => {
        const text = event.results[0][0].transcript;
        handleUserSubmit(text);
      };

      recognition.onend = () => {
        setIsRecording(false);
      };

      recognition.onerror = (event: any) => {
        console.error("Speech recognition error:", event.error);
        setIsRecording(false);
      };

      recognitionRef.current = recognition;
    } else {
      console.warn("Speech Recognition API not supported in this browser.");
    }
  }, []);

  // Initial AI greeting
  useEffect(() => {
    const initialGreeting = `Welcome to your ${titleMap[id || '']} mock interview. Whenever you are ready, introduce yourself and tell me a bit about your background.`;
    setTranscript([{ role: 'system', content: initialGreeting }]);
    speakText(initialGreeting);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const toggleRecording = () => {
    if (isRecording) {
      recognitionRef.current?.stop();
    } else {
      // Stop any ongoing AI speech before listening
      window.speechSynthesis.cancel();
      recognitionRef.current?.start();
      setIsRecording(true);
    }
  };

  const speakText = (text: string) => {
    if (!window.speechSynthesis) return;
    
    // Cancel any ongoing speech
    window.speechSynthesis.cancel();
    
    const utterance = new SpeechSynthesisUtterance(text);
    // Try to find a good English voice
    let voices = window.speechSynthesis.getVoices();
    
    // Try to find ANY Indian voice, prioritizing female
    const indianVoice = voices.find(v => (v.lang === 'en-IN' || v.lang === 'hi-IN') && (v.name.toLowerCase().includes('female') || v.name.toLowerCase().includes('heera') || v.name.toLowerCase().includes('neerja')))
                     || voices.find(v => v.lang === 'en-IN' || v.lang === 'hi-IN')
                     || voices.find(v => v.name.toLowerCase().includes('india'))
                     || voices.find(v => v.lang.startsWith('en-') && v.name.toLowerCase().includes('female'))
                     || voices[0];
                           
    if (indianVoice) utterance.voice = indianVoice;
    
    utterance.rate = 0.95;
    utterance.pitch = 1.1;
    window.speechSynthesis.speak(utterance);
  };

  const handleUserSubmit = async (text: string) => {
    if (!text.trim()) return;
    
    const newUserMessage: Message = { role: 'user', content: text };
    const updatedTranscript = [...transcript, newUserMessage];
    
    setTranscript(updatedTranscript);
    setTextInput('');
    setIsProcessing(true);

    try {
      const response = await fetch(`${API_BASE_URL}/api/interview/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: updatedTranscript,
          roleType: titleMap[id || ''] || 'Engineer'
        })
      });

      const data = await response.json();
      
      if (data.reply) {
        setTranscript(prev => [...prev, { role: 'system', content: data.reply }]);
        speakText(data.reply);
      }
    } catch (error) {
      console.error("Failed to fetch AI response:", error);
      setTranscript(prev => [...prev, { role: 'system', content: "I'm having trouble connecting to my server. Let's pause for a moment." }]);
    } finally {
      setIsProcessing(false);
    }
  };

  const titleMap: Record<string, string> = {
    frontend: "Frontend Engineer",
    backend: "Backend Engineer",
    database: "Database Admin"
  };

  return (
    <div className="h-full flex flex-col bg-slate-50">
      {/* Top Bar */}
      <header className="h-16 border-b border-slate-200 bg-white flex items-center justify-between px-6 flex-shrink-0 z-10 shadow-sm">
        <div className="flex items-center gap-4">
          <button onClick={() => { window.speechSynthesis.cancel(); navigate('/student/interview'); }} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
            <ArrowLeft className="w-5 h-5 text-slate-600" />
          </button>
          <h1 className="font-bold text-slate-900">{titleMap[id || '']} Interview</h1>
        </div>
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-2 px-3 py-1.5 bg-emerald-50 text-emerald-700 rounded-full text-xs font-bold border border-emerald-200">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
            Session Active
          </span>
          <button className="p-2 text-slate-400 hover:bg-slate-100 rounded-full transition-colors">
            <Settings className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Main Workspace */}
      <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
        
        {/* Left Panel: Visuals & Controls */}
        <div className="w-full md:w-1/2 md:border-r border-slate-200 bg-slate-100 flex flex-col p-8 items-center justify-center relative">
          
          {/* AI Avatar Placeholder */}
          <div className="w-48 h-48 rounded-full bg-gradient-to-b from-indigo-500 to-purple-600 shadow-2xl flex items-center justify-center relative mb-12">
            {/* Pulse effect rings */}
            <div className={`absolute inset-0 rounded-full border-2 border-indigo-400 opacity-20 ${isProcessing ? 'animate-ping' : ''}`}></div>
            <div className={`absolute -inset-4 rounded-full border border-purple-300 opacity-30 ${isProcessing ? 'animate-pulse' : ''}`}></div>
            {isProcessing ? <Loader2 className="w-20 h-20 text-white animate-spin" /> : <Bot className="w-20 h-20 text-white" />}
          </div>
          
          <h2 className="text-2xl font-black text-slate-800 mb-2">Senior {titleMap[id || '']} AI</h2>
          <p className="text-slate-500 mb-12 text-center max-w-sm h-12">
            {isProcessing ? "Thinking about your response..." : isRecording ? "Listening..." : "I'm ready when you are. Click the microphone to speak."}
          </p>

          {/* Microphone Control */}
          <button 
            onClick={toggleRecording}
            disabled={isProcessing}
            className={`w-20 h-20 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
              isRecording 
                ? 'bg-red-500 hover:bg-red-600 text-white animate-bounce' 
                : isProcessing 
                  ? 'bg-slate-200 border-4 border-slate-300 text-slate-400 cursor-not-allowed'
                  : 'bg-white hover:bg-slate-50 border-4 border-primary text-primary'
            }`}
          >
            {isRecording ? <MicOff className="w-8 h-8" /> : <Mic className="w-8 h-8" />}
          </button>
        </div>

        {/* Right Panel: Transcript & Chat */}
        <div className="w-full md:w-1/2 bg-white flex flex-col border-t md:border-t-0 border-slate-200">
          <div className="p-4 border-b border-slate-100 flex justify-between items-center">
            <h3 className="font-bold text-slate-800 uppercase tracking-wider text-xs">Live Transcript</h3>
            {isProcessing && <span className="text-xs font-bold text-primary flex items-center gap-1"><Loader2 className="w-3 h-3 animate-spin" /> AI is typing...</span>}
          </div>
          
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {transcript.map((msg, idx) => (
              <div key={idx} className={`flex gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  msg.role === 'system' ? 'bg-indigo-100 text-indigo-600' : 'bg-slate-100 text-slate-600'
                }`}>
                  {msg.role === 'system' ? <Bot className="w-5 h-5" /> : <User className="w-5 h-5" />}
                </div>
                <div className={`p-4 rounded-2xl max-w-[80%] ${
                  msg.role === 'system' 
                    ? 'bg-indigo-50 border border-indigo-100 text-indigo-900 rounded-tl-sm' 
                    : 'bg-slate-50 border border-slate-200 text-slate-800 rounded-tr-sm'
                }`}>
                  <p className="text-sm leading-relaxed font-medium">{msg.content}</p>
                </div>
              </div>
            ))}
            <div ref={transcriptEndRef} />
          </div>

          {/* Text Fallback Input */}
          <div className="p-6 border-t border-slate-100 bg-slate-50">
            <div className="flex gap-3">
              <input 
                type="text" 
                value={textInput}
                onChange={(e) => setTextInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleUserSubmit(textInput)}
                disabled={isProcessing || isRecording}
                placeholder={isRecording ? "Microphone active..." : "Type your answer if you can't use a microphone..."}
                className="flex-1 px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all bg-white disabled:bg-slate-100"
              />
              <button 
                onClick={() => handleUserSubmit(textInput)}
                disabled={!textInput.trim() || isProcessing || isRecording}
                className="bg-primary text-white px-6 py-3 rounded-xl font-bold hover:bg-primary/90 transition-colors shadow-sm flex items-center gap-2 disabled:bg-slate-300 disabled:cursor-not-allowed"
              >
                {isProcessing ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />} Send
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
