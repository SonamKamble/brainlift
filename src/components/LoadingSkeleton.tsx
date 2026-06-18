import './LoadingSkeleton.css';

export default function LoadingSkeleton() {
  const levels = ['child', 'beginner', 'intermediate', 'expert'];

  return (
    <div className="skeleton-container">
      <div className="skeleton-topic" />
      {levels.map((level) => (
        <div key={level} className="skeleton-card">
          <div className="skeleton-header">
            <div className="skeleton-icon" />
            <div className="skeleton-title" />
          </div>
          <div className="skeleton-line skeleton-line-full" />
          <div className="skeleton-line skeleton-line-full" />
          <div className="skeleton-line skeleton-line-short" />
          <div className="skeleton-example" />
        </div>
      ))}
    </div>
  );
}
