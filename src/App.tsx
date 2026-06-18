import { useState } from 'react';
import SearchBar from './components/SearchBar';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = (topic: string) => {
    setIsLoading(true);
    console.log('Searching for:', topic);
    // TODO: Wire up OpenAI service in step 6
    setTimeout(() => setIsLoading(false), 1000);
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
        <SearchBar onSearch={handleSearch} isLoading={isLoading} />
      </main>
    </div>
  );
}

export default App;
