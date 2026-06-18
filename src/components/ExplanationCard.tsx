import type { Explanation } from '../types';
import './ExplanationCard.css';

const levelIcons: Record<Explanation['level'], string> = {
  child: '🧒',
  beginner: '🌱',
  intermediate: '📚',
  expert: '🎓',
};

const levelColors: Record<Explanation['level'], string> = {
  child: 'card-child',
  beginner: 'card-beginner',
  intermediate: 'card-intermediate',
  expert: 'card-expert',
};

interface ExplanationCardProps {
  explanation: Explanation;
}

export default function ExplanationCard({ explanation }: ExplanationCardProps) {
  const { level, title, content, example } = explanation;

  return (
    <div className={`explanation-card ${levelColors[level]}`}>
      <div className="explanation-header">
        <span className="explanation-icon">{levelIcons[level]}</span>
        <h3 className="explanation-title">{title}</h3>
      </div>
      <p className="explanation-content">{content}</p>
      <div className="explanation-example">
        <strong>Example: </strong>{example}
      </div>
    </div>
  );
}
