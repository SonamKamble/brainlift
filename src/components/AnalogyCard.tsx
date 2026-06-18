import type { Analogy } from '../types';
import './AnalogyCard.css';

interface AnalogyCardProps {
  analogy: Analogy;
}

export default function AnalogyCard({ analogy }: AnalogyCardProps) {
  return (
    <div className="analogy-card">
      <div className="analogy-header">
        <span className="analogy-icon">💡</span>
        <h3 className="analogy-title">Analogy</h3>
      </div>
      <p className="analogy-text">{analogy.analogy}</p>
      <p className="analogy-explanation">{analogy.explanation}</p>
    </div>
  );
}
