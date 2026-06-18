export interface Explanation {
  level: 'child' | 'beginner' | 'intermediate' | 'expert';
  title: string;
  content: string;
  example: string;
}

export interface ExplanationResponse {
  topic: string;
  explanations: Explanation[];
}
