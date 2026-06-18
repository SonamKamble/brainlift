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

Also generate:

1. A relatable analogy for the topic:
   - Compare the topic to something from everyday life
   - Include a short explanation of why the analogy works

2. Three real-life examples showing where this topic applies in practice:
   - Each should have a short scenario title and a 1-2 sentence description

3. Three quiz questions to test understanding:
   - Mix of easy and hard questions
   - Provide a concise answer for each

4. A Mermaid.js diagram that visually explains the topic:
   - Use a flowchart (graph TD) or mindmap
   - Keep it simple with 5-8 nodes max
   - Use short labels
   - Do NOT wrap the diagram in markdown code fences — return raw mermaid syntax only

Return JSON in this exact format:
{
  "topic": "the topic",
  "explanations": [
    { "level": "child", "title": "Age 5", "content": "...", "example": "..." },
    { "level": "beginner", "title": "Beginner", "content": "...", "example": "..." },
    { "level": "intermediate", "title": "Intermediate", "content": "...", "example": "..." },
    { "level": "expert", "title": "Expert", "content": "...", "example": "..." }
  ],
  "analogy": {
    "analogy": "The topic is like ...",
    "explanation": "This works because ..."
  },
  "realLifeExamples": [
    { "scenario": "Short title", "description": "1-2 sentence description" }
  ],
  "quiz": [
    { "question": "...", "answer": "..." }
  ],
  "mermaidDiagram": "graph TD\\n  A[Topic] --> B[Concept1]\\n  A --> C[Concept2]"
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
