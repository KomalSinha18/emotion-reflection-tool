// src/components/EmotionForm.tsx
import React, { useState } from 'react';
import { analyzeEmotion } from '../src/api';  

const EmotionForm = () => {
  const [text, setText] = useState('');
  const [result, setResult] = useState<{ emotion: string; confidence: number } | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const data = await analyzeEmotion(text);
      setResult(data);
    } catch (err) {
      setError('Failed to analyze emotion.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="How are you feeling?"
          rows={4}
          cols={40}
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Analyzing...' : 'Submit'}
        </button>
      </form>

      {result && (
        <div>
          <h3>Emotion: {result.emotion}</h3>
          <p>Confidence: {(result.confidence * 100).toFixed(1)}%</p>
        </div>
      )}

      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default EmotionForm;
