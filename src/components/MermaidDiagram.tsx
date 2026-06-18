import { useEffect, useRef, useState } from 'react';
import mermaid from 'mermaid';
import './MermaidDiagram.css';

mermaid.initialize({
  startOnLoad: false,
  theme: 'default',
  securityLevel: 'loose',
});

interface MermaidDiagramProps {
  chart: string;
}

export default function MermaidDiagram({ chart }: MermaidDiagramProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const render = async () => {
      if (!containerRef.current) return;

      try {
        const id = `mermaid-${Date.now()}`;
        const { svg } = await mermaid.render(id, chart);
        containerRef.current.innerHTML = svg;
        setError(false);
      } catch {
        setError(true);
      }
    };

    render();
  }, [chart]);

  if (error) return null;

  return (
    <div className="mermaid-card">
      <div className="mermaid-header">
        <span className="mermaid-icon">📊</span>
        <h3 className="mermaid-title">Visual Overview</h3>
      </div>
      <div className="mermaid-container" ref={containerRef} />
    </div>
  );
}
