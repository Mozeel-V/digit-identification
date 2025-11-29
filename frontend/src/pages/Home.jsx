import { useState } from "react";
import ImageUpload from "../components/ImageUpload";
import ResultDisplay from "../components/ResultDisplay";
import Loader from "../components/Loader";
import { predictDigit } from "../utils/api";
import logo from "../assets/logo.png"; 

export default function Home() {
  const [previewUrl, setPreviewUrl] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [digit, setDigit] = useState(null);
  const [rawResponse, setRawResponse] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFileSelected = (file) => {
    setError("");
    setDigit(null);
    setRawResponse("");

    if (!file.type.startsWith("image/")) {
      setError("Please upload a valid image file (PNG or JPG).");
      return;
    }

    setSelectedFile(file);

    const reader = new FileReader();
    reader.onloadend = () => setPreviewUrl(reader.result);
    reader.readAsDataURL(file);
  };

  const handlePredict = async () => {
    if (!selectedFile || !previewUrl) {
      setError("Please select an image first.");
      return;
    }

    setLoading(true);
    setError("");
    setDigit(null);
    setRawResponse("");

    try {
      const mimeType = selectedFile.type;
      const imageBase64 = previewUrl;
      const result = await predictDigit(imageBase64, mimeType);
      setDigit(result.digit);
      setRawResponse(result.rawResponse || "");
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* header */}
      <header className="app-header">
        <div className="app-header-inner">
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div className="logo-badge">
              <img src={logo} alt="Digit Identifier logo" className="logo-img" />
            </div>
            <div>
              <div className="logo-text-main">Digit Identifier</div>
            </div>
          </div>
          <div className="header-chip">
            Built with React · Firebase · Gemini
          </div>
        </div>
      </header>

      {/* main */}
      <main className="app-main">
        {/* left column */}
        <section>
          <h1 className="hero-title">
            Handwritten <span>Number Identifier</span>
          </h1>
          <p className="hero-text">
            Upload an image containing a single handwritten digit (0–9). We send
            it securely to a Generative AI model and show you the detected
            number in seconds.
          </p>

          <div className="hero-list">
            <div className="hero-list-item">
              <div
                className="hero-list-icon"
                style={{ background: "#dcfce7", color: "#166534" }}
              >
                ✓
              </div>
              <span>Supports PNG &amp; JPG image formats</span>
            </div>
            <div className="hero-list-item">
              <div
                className="hero-list-icon"
                style={{ background: "#fef3c7", color: "#b45309" }}
              >
                ⚡
              </div>
              <span>Powered by Google Gemini API</span>
            </div>
            <div className="hero-list-item">
              <div
                className="hero-list-icon"
                style={{ background: "#e5e7eb", color: "#374151" }}
              >
                ☁
              </div>
              <span>Serverless backend on Firebase Functions</span>
            </div>
          </div>
        </section>

        {/* right column */}
        <section>
          <div className="card">
            <div className="card-top">
              <div className="card-top-title">Upload your digit image</div>
              <div className="card-top-sub">
                Drag &amp; drop or click the dropzone to select a PNG / JPG file
                containing a single handwritten digit.
              </div>
              <div className="card-dropzone-wrap">
                <ImageUpload
                  onFileSelected={handleFileSelected}
                  previewUrl={previewUrl}
                  disabled={loading}
                />
              </div>
            </div>
            <div className="card-bottom">
              <button
                onClick={handlePredict}
                disabled={loading || !selectedFile}
                className={
                  "primary-btn " +
                  (loading || !selectedFile ? "disabled" : "active")
                }
              >
                {loading ? "Analyzing image…" : "Identify digit"}
              </button>

              {loading && <Loader />}

              <ResultDisplay
                digit={digit}
                error={error}
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="app-footer">
        <div className="app-footer-inner">
          <span>This is a demo project. Do not upload sensitive data.</span>
          <span>&copy; {new Date().getFullYear()} · Mozeel-V</span>
        </div>
      </footer>
    </>
  );
}
