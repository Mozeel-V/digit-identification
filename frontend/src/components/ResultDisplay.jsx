export default function ResultDisplay({ digit, rawResponse, error }) {
  if (error) {
    return (
      <div className="error-box">
        <strong>Something went wrong:</strong>
        <div>{error}</div>
      </div>
    );
  }

  if (digit === null || digit === undefined) return null;

  return (
    <div className="result-box">
      <div>
        Predicted digit: <span className="result-digit">{digit}</span>
      </div>
    </div>
  );
}
