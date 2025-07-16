'use client';

import { useState } from 'react';

export default function ChatbotTest() {
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const testAPI = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [
            { role: 'user', content: 'Tell me about Lewis Hamilton.' }
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

  return (
    <div className="p-4 border border-gray-600 rounded-lg bg-gray-800">
      <h3 className="text-lg font-semibold mb-4">Chatbot API Test</h3>
      <button
        onClick={testAPI}
        disabled={loading}
        className="bg-red-600 hover:bg-red-700 disabled:bg-gray-600 text-white px-4 py-2 rounded-lg"
      >
        {loading ? 'Testing...' : 'Test Chatbot API'}
      </button>
      {response && (
        <div className="mt-4 p-3 bg-gray-700 rounded-lg">
          <p className="text-sm">{response}</p>
        </div>
      )}
    </div>
  );
}
