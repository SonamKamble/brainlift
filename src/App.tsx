import { useState, useRef } from 'react';
import SearchBar from './components/SearchBar';
import ExplanationCard from './components/ExplanationCard';
import LoadingSkeleton from './components/LoadingSkeleton';
import ErrorMessage from './components/ErrorMessage';
import AnalogyCard from './components/AnalogyCard';
import RealLifeExamples from './components/RealLifeExamples';
import QuizSection from './components/QuizSection';
import MermaidDiagram from './components/MermaidDiagram';
import { getExplanations } from './services/openai';
import type { ExplanationResponse } from './types';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<ExplanationResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const lastTopicRef = useRef('');

  const handleSearch = async (topic: string) => {
    const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
    if (!apiKey || apiKey === 'your-api-key-here') {
      setError('Please set your OpenAI API key in .env.local');
      return;
    }

    lastTopicRef.current = topic;
    setIsLoading(true);
    setError(null);
    setResult(null);

    try {
      const data = await getExplanations(topic, apiKey);
      setResult(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setIsLoading(false);
    }
  };

  const handleRetry = () => {
    if (lastTopicRef.current) {
      handleSearch(lastTopicRef.current);
    }
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1 className="app-title">BrainLift</h1>
        <p className="app-subtitle">
          Understand anything — from age 5 to expert
        </p>
      </header>
      <main className="app-main">
        <div className="search-wrapper">
          <SearchBar onSearch={handleSearch} isLoading={isLoading} />
          {error && <ErrorMessage message={error} onRetry={handleRetry} />}
        </div>

        {isLoading && <LoadingSkeleton />}

        {result && (
          <div className="results-container">
            <h2 className="results-topic">{result.topic}</h2>
            <div className="grid-2col">
              {result.explanations.map((exp) => (
                <ExplanationCard key={exp.level} explanation={exp} />
              ))}
              {result.analogy && <AnalogyCard analogy={result.analogy} />}
              {result.realLifeExamples?.length > 0 && <RealLifeExamples examples={result.realLifeExamples} />}
              {result.quiz?.length > 0 && <QuizSection questions={result.quiz} />}
              {result.mermaidDiagram && <MermaidDiagram chart={result.mermaidDiagram} />}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
