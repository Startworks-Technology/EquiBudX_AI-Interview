import React from 'react';
import { MessageSquarePlus } from 'lucide-react';

const FloatingFeedback = () => {
  return (
    <a
      href="https://docs.google.com/forms/d/e/1FAIpQLSeUF4WKWAx7yn85lcgjXgpoULK_-R-8fbVjEjX2w0B0g-3mDA/viewform?usp=dialog"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center gap-2 bg-primary text-primary-foreground px-4 py-3 rounded-full shadow-lg hover:bg-primary/90 hover:shadow-xl transition-all duration-300 group"
      aria-label="Give Feedback"
    >
      <MessageSquarePlus className="w-5 h-5" />
      <span className="font-medium">Feedback</span>
    </a>
  );
};

export default FloatingFeedback;
