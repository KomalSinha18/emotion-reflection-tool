// src/api.ts
import axios from 'axios';

export const analyzeEmotion = async (text: string) => {
  const response = await axios.post('http://127.0.0.1:8000/analyze', { text });
  return response.data;
};
