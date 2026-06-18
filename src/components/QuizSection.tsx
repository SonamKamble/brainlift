import { useState } from 'react';
import type { QuizQuestion } from '../types';
import './QuizSection.css';

interface QuizSectionProps {
  questions: QuizQuestion[];
}

export default function QuizSection({ questions }: QuizSectionProps) {
  const [revealed, setRevealed] = useState<Set<number>>(new Set());

  const toggleAnswer = (index: number) => {
    setRevealed((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  return (
    <div className="quiz-card">
      <div className="quiz-header">
        <span className="quiz-icon">🧠</span>
        <h3 className="quiz-title">Quiz Me</h3>
      </div>
      <ol className="quiz-list">
        {questions.map((q, i) => (
          <li key={i} className="quiz-item">
            <p className="quiz-question">{q.question}</p>
            <button
              type="button"
              className="quiz-reveal"
              onClick={() => toggleAnswer(i)}
            >
              {revealed.has(i) ? 'Hide Answer' : 'Show Answer'}
            </button>
            {revealed.has(i) && (
              <p className="quiz-answer">{q.answer}</p>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}
