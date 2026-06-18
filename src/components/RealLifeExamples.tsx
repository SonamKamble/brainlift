import type { RealLifeExample } from '../types';
import './RealLifeExamples.css';

interface RealLifeExamplesProps {
  examples: RealLifeExample[];
}

export default function RealLifeExamples({ examples }: RealLifeExamplesProps) {
  return (
    <div className="examples-card">
      <div className="examples-header">
        <span className="examples-icon">🌍</span>
        <h3 className="examples-title">Real-Life Examples</h3>
      </div>
      <ul className="examples-list">
        {examples.map((ex, i) => (
          <li key={i} className="examples-item">
            <span className="examples-scenario">{ex.scenario}</span>
            <span className="examples-description">{ex.description}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
