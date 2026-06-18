import OpenAI from 'openai';
import type { ExplanationResponse } from '../types';

export async function getExplanations(topic: string, apiKey: string): Promise<ExplanationResponse> {
  const client = new OpenAI({ apiKey, dangerouslyAllowBrowser: true });

  const response = await client.chat.completions.create({
    model: 'gpt-4o',
    response_format: { type: 'json_object' },
    messages: [
      {
        role: 'system',
        content: `You are an educational expert.

Explain the given topic at 4 levels. For each level:
- Use language appropriate for that level
- Include one example
- Keep each explanation under 150 words

Return JSON in this exact format:
{
  "topic": "the topic",
  "explanations": [
    { "level": "child", "title": "Age 5", "content": "...", "example": "..." },
    { "level": "beginner", "title": "Beginner", "content": "...", "example": "..." },
    { "level": "intermediate", "title": "Intermediate", "content": "...", "example": "..." },
    { "level": "expert", "title": "Expert", "content": "...", "example": "..." }
  ]
}`,
      },
      {
        role: 'user',
        content: `Explain the topic: ${topic}`,
      },
    ],
  });

  const text = response.choices[0].message.content;
  if (!text) throw new Error('No response from API');

  return JSON.parse(text) as ExplanationResponse;
}
