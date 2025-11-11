import { useCopyToClipboard } from "../hooks/useCopyToClipboard";
import { DownloadButton } from "./DownloadButton";

type CodeExampleProps = {
  code: string;
  language?: string;
  downloadButton?: {
    filename: string;
    contentType?: string;
    label?: string;
  };
};

export function CodeExample({
  code,
  language = "text",
  downloadButton,
}: CodeExampleProps) {
  const { copied, copyToClipboard } = useCopyToClipboard();

  const handleCopy = () => {
    copyToClipboard(code);
  };

  return (
    <div className="code-example">
      <div className="code-toolbar">
        <span className="code-title">{language}</span>
        <div className="code-toolbar-actions">
          {downloadButton && (
            <DownloadButton
              content={code}
              filename={downloadButton.filename}
              contentType={downloadButton.contentType}
              label={downloadButton.label}
              className="code-download-button"
            />
          )}
          <button
            type="button"
            className={`ghost-button ${copied ? "is-copied" : ""}`}
            onClick={handleCopy}
            aria-label="Copy code to clipboard"
          >
            <span className="copy-button-content">
              {copied ? (
                <>
                  <svg
                    className="check-icon"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.6667 3.5L5.25 9.91667L2.33334 7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="copy-text">Copied!</span>
                </>
              ) : (
                <>
                  <svg
                    className="copy-icon"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.33333 5.25H11.6667C12.1269 5.25 12.5 5.6231 12.5 6.08333V11.6667C12.5 12.1269 12.1269 12.5 11.6667 12.5H6.08333C5.6231 12.5 5.25 12.1269 5.25 11.6667V9.33333"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.75 5.25H2.33333C1.8731 5.25 1.5 4.8769 1.5 4.41667V2.33333C1.5 1.8731 1.8731 1.5 2.33333 1.5H4.41667C4.8769 1.5 5.25 1.8731 5.25 2.33333V4.41667"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="copy-text">Copy</span>
                </>
              )}
            </span>
          </button>
        </div>
      </div>
      <pre>
        <code>{code}</code>
      </pre>
    </div>
  );
}

export default CodeExample;
