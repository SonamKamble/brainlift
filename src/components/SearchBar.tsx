import { useState } from 'react';
import './SearchBar.css';

interface SearchBarProps {
  onSearch: (topic: string) => void;
  isLoading: boolean;
}

export default function SearchBar({ onSearch, isLoading }: SearchBarProps) {
  const [topic, setTopic] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = topic.trim();
    if (trimmed) onSearch(trimmed);
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        type="text"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        placeholder="Enter any topic... e.g. What is Kubernetes?"
        disabled={isLoading}
        className="search-input"
      />
      <button
        type="submit"
        disabled={isLoading || !topic.trim()}
        className="search-button"
      >
        {isLoading ? 'Thinking...' : 'Explain'}
      </button>
    </form>
  );
}
