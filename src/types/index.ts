export interface Explanation {
  level: 'child' | 'beginner' | 'intermediate' | 'expert';
  title: string;
  content: string;
  example: string;
}

export interface Analogy {
  analogy: string;
  explanation: string;
}

export interface RealLifeExample {
  scenario: string;
  description: string;
}

export interface QuizQuestion {
  question: string;
  answer: string;
}

export interface ExplanationResponse {
  topic: string;
  explanations: Explanation[];
  analogy: Analogy;
  realLifeExamples: RealLifeExample[];
  quiz: QuizQuestion[];
  mermaidDiagram: string;
}
