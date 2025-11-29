import { useRef } from "react";

export default function ImageUpload({
  onFileSelected,
  previewUrl,
  disabled,
}) {
  const inputRef = useRef(null);

  const handleChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    onFileSelected(file);
  };

  return (
    <div>
      <div
        className="dropzone"
        style={disabled ? { opacity: 0.5, cursor: "not-allowed" } : {}}
        onClick={() => !disabled && inputRef.current?.click()}
      >
        <input
          ref={inputRef}
          type="file"
          accept="image/png,image/jpeg"
          style={{ display: "none" }}
          onChange={handleChange}
          disabled={disabled}
        />
        <div className="dropzone-title">Click to choose a file</div>
        <div className="dropzone-sub">
          or drag &amp; drop PNG / JPG here
        </div>
      </div>

      {previewUrl && (
        <div className="preview-block">
          <div className="preview-label">Preview</div>
          <div className="preview-frame">
            <img src={previewUrl} alt="Preview" className="preview-img" />
          </div>
        </div>
      )}
    </div>
  );
}
