import './ErrorMessage.css';

interface ErrorMessageProps {
  message: string;
  onRetry?: () => void;
}

function getFriendlyMessage(message: string): { title: string; detail: string } {
  if (message.includes('API key') || message.includes('.env.local')) {
    return {
      title: 'API Key Missing',
      detail: 'Please add your OpenAI API key to the .env.local file.',
    };
  }
  if (message.includes('429') || message.includes('quota') || message.includes('rate')) {
    return {
      title: 'Rate Limit Exceeded',
      detail: 'You\'ve hit the OpenAI usage limit. Check your plan and billing at platform.openai.com.',
    };
  }
  if (message.includes('401') || message.includes('Incorrect API key') || message.includes('invalid')) {
    return {
      title: 'Invalid API Key',
      detail: 'Your OpenAI API key appears to be invalid. Please check it in .env.local.',
    };
  }
  if (message.includes('Failed to fetch') || message.includes('NetworkError') || message.includes('network')) {
    return {
      title: 'Network Error',
      detail: 'Could not reach the OpenAI API. Please check your internet connection.',
    };
  }
  if (message.includes('JSON') || message.includes('parse')) {
    return {
      title: 'Unexpected Response',
      detail: 'The API returned an unexpected format. Please try again.',
    };
  }
  return {
    title: 'Something Went Wrong',
    detail: message,
  };
}

export default function ErrorMessage({ message, onRetry }: ErrorMessageProps) {
  const { title, detail } = getFriendlyMessage(message);

  return (
    <div className="error-box">
      <div className="error-icon">!</div>
      <div className="error-text">
        <p className="error-title">{title}</p>
        <p className="error-detail">{detail}</p>
      </div>
      {onRetry && (
        <button type="button" className="error-retry" onClick={onRetry}>
          Try Again
        </button>
      )}
    </div>
  );
}
