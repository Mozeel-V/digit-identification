import { useState } from "react";
import { useAuth } from "../AuthContext";

export default function AuthModal({ open, onClose }) {
  const { login, signup } = useAuth();
  const [mode, setMode] = useState("login"); // "login" | "signup"
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  if (!open) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      if (mode === "login") {
        await login(email, password);
      } else {
        await signup(email, password);
      }
      onClose(); // close modal on success
      setEmail("");
      setPassword("");
    } catch (err) {
      setError(err.message || "Authentication failed");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="auth-backdrop">
      <div className="auth-modal">
        <div className="auth-modal-header">
          <h2>{mode === "login" ? "Log in" : "Sign up"}</h2>
          <button className="auth-close-btn" onClick={onClose} type="button">
            ✕
          </button>
        </div>

        <div className="auth-toggle">
          <button
            type="button"
            className={
              "auth-toggle-btn " + (mode === "login" ? "auth-toggle-active" : "")
            }
            onClick={() => setMode("login")}
          >
            Login
          </button>
          <button
            type="button"
            className={
              "auth-toggle-btn " +
              (mode === "signup" ? "auth-toggle-active" : "")
            }
            onClick={() => setMode("signup")}
          >
            Sign up
          </button>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          <label className="auth-label">
            Email
            <input
              className="auth-input"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="you@example.com"
            />
          </label>
          <label className="auth-label">
            Password
            <input
              className="auth-input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="At least 6 characters"
            />
          </label>

          {error && <div className="auth-error">{error}</div>}

          <button
            className="auth-submit-btn"
            type="submit"
            disabled={submitting}
          >
            {submitting
              ? mode === "login"
                ? "Logging in..."
                : "Creating account..."
              : mode === "login"
              ? "Log in"
              : "Sign up"}
          </button>
        </form>
      </div>
    </div>
  );
}
