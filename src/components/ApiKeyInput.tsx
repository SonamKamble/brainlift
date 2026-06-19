import { useState } from 'react';
import './ApiKeyInput.css';

interface ApiKeyInputProps {
  onSave: (key: string) => void;
  savedKey: string;
}

export default function ApiKeyInput({ onSave, savedKey }: ApiKeyInputProps) {
  const [key, setKey] = useState(savedKey);
  const [isEditing, setIsEditing] = useState(!savedKey);

  const handleSave = () => {
    const trimmed = key.trim();
    if (trimmed) {
      onSave(trimmed);
      setIsEditing(false);
    }
  };

  const handleClear = () => {
    setKey('');
    onSave('');
    setIsEditing(true);
  };

  if (!isEditing && savedKey) {
    return (
      <div className="apikey-bar">
        <span className="apikey-status">API Key: ••••••••{savedKey.slice(-4)}</span>
        <button type="button" className="apikey-change" onClick={() => setIsEditing(true)}>Change</button>
        <button type="button" className="apikey-clear" onClick={handleClear}>Remove</button>
      </div>
    );
  }

  return (
    <div className="apikey-box">
      <p className="apikey-label">Enter your OpenAI API key to try the app live. Your key stays in your browser only.</p>
      <div className="apikey-form">
        <input
          type="password"
          value={key}
          onChange={(e) => setKey(e.target.value)}
          placeholder="sk-..."
          className="apikey-input"
          onKeyDown={(e) => e.key === 'Enter' && handleSave()}
        />
        <button type="button" className="apikey-save" onClick={handleSave} disabled={!key.trim()}>
          Save Key
        </button>
      </div>
      <p className="apikey-hint">Get your key at <a href="https://platform.openai.com/api-keys" target="_blank" rel="noopener noreferrer">platform.openai.com/api-keys</a></p>
    </div>
  );
}
