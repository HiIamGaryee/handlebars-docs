import { useDownloadFile } from '../hooks/useDownloadFile'

type DownloadButtonProps = {
  content: string
  filename: string
  contentType?: string
  label?: string
  className?: string
}

export function DownloadButton({
  content,
  filename,
  contentType,
  label = 'Download',
  className = '',
}: DownloadButtonProps) {
  const { downloadFile } = useDownloadFile()

  const handleDownload = () => {
    downloadFile(content, { filename, contentType })
  }

  return (
    <button
      type="button"
      onClick={handleDownload}
      className={`download-button ${className}`}
      aria-label={`Download ${filename}`}
    >
      <svg
        className="download-icon"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 11V1M8 11L4 7M8 11L12 7M2 13H14"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span>{label}</span>
    </button>
  )
}

export default DownloadButton

