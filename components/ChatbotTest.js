'use client';

import { useState } from 'react';

export default function ChatbotTest() {
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState('');

  const quickQuestions = [
    { label: "What is Formula 1?", question: "What is Formula 1? Give me a comprehensive overview." },
    { label: "Current F1 Champions", question: "Who are the current F1 World Champions for drivers and constructors?" },
    { label: "How does F1 scoring work?", question: "How does the F1 points system work?" },
    { label: "What is DRS?", question: "What is DRS in Formula 1 and how does it work?" },
    { label: "F1 Season Format", question: "How is an F1 season structured? Explain practice, qualifying, and race format." },
    { label: "About this website", question: "Tell me about the Formula One Codex website. What features and information does it provide?" },
    { label: "Greatest F1 drivers", question: "Who are considered the greatest Formula 1 drivers of all time?" },
    { label: "F1 Team Info", question: "Tell me about the current F1 teams and their history." }
  ];

  const testAPI = async (question = null) => {
    const queryQuestion = question || selectedQuestion || 'Tell me about Lewis Hamilton.';
    setLoading(true);
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [
            { role: 'user', content: queryQuestion }
          ]
        }),
      });

      const data = await res.json();
      setResponse(data.message || data.error);
    } catch (error) {
      setResponse('Error: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleQuickQuestion = (question) => {
    setSelectedQuestion(question);
    testAPI(question);
  };

  // Function to clean and format AI responses
  const formatMessage = (content) => {
    return content
      // Remove markdown bold (**text**)
      .replace(/\*\*(.*?)\*\*/g, '$1')
      // Remove markdown headers (###, ##, #)
      .replace(/^#{1,6}\s+/gm, '')
      // Remove markdown italic (*text*)
      .replace(/\*(.*?)\*/g, '$1')
      // Clean up extra spaces and line breaks
      .replace(/\n{3,}/g, '\n\n')
      .trim();
  };

  return (
    <div className="p-6 border border-gray-600 rounded-lg bg-gray-800 max-w-4xl mx-auto">
      <h3 className="text-xl font-semibold mb-6 text-center">Formula 1 AI Assistant Test</h3>
      
      {/* Quick Reply Buttons */}
      <div className="mb-6">
        <h4 className="text-lg font-medium mb-3">Quick Questions:</h4>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {quickQuestions.map((item, index) => (
            <button
              key={index}
              onClick={() => handleQuickQuestion(item.question)}
              disabled={loading}
              className="bg-red-600 hover:bg-red-700 disabled:bg-gray-600 text-white text-xs px-3 py-2 rounded-lg transition-colors text-left"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Custom Question Input */}
      <div className="mb-4">
        <h4 className="text-lg font-medium mb-2">Or ask your own question:</h4>
        <div className="flex gap-2">
          <input
            type="text"
            value={selectedQuestion}
            onChange={(e) => setSelectedQuestion(e.target.value)}
            placeholder="Type your F1 question here..."
            className="flex-1 bg-gray-700 text-white border border-gray-600 rounded-lg px-3 py-2 focus:outline-none focus:border-red-500"
            onKeyPress={(e) => e.key === 'Enter' && testAPI()}
            disabled={loading}
          />
          <button
            onClick={() => testAPI()}
            disabled={loading || !selectedQuestion.trim()}
            className="bg-red-600 hover:bg-red-700 disabled:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors"
          >
            {loading ? 'Asking...' : 'Ask'}
          </button>
        </div>
      </div>

      {/* Response Display */}
      {response && (
        <div className="mt-4 p-4 bg-gray-700 rounded-lg">
          <h5 className="font-semibold mb-2 text-red-400">AI Response:</h5>
          <div className="text-sm leading-relaxed whitespace-pre-wrap">{formatMessage(response)}</div>
        </div>
      )}
      
      {loading && (
        <div className="mt-4 p-4 bg-gray-700 rounded-lg">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 border-2 border-red-500 border-t-transparent rounded-full animate-spin"></div>
            <span className="text-sm">Thinking about your F1 question...</span>
          </div>
        </div>
      )}
    </div>
  );
}
