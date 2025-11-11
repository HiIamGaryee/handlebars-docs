import { CodeExample } from './CodeExample'
import { useExpandableCode } from '../hooks/useExpandableCode'

type ExpandableCodeExampleProps = {
  code: string
  language?: string
  downloadButton?: {
    filename: string
    contentType?: string
    label?: string
  }
  maxLines?: number
  expandThreshold?: number
}

export function ExpandableCodeExample({
  code,
  language = 'text',
  downloadButton,
  maxLines = 5,
  expandThreshold = 30,
}: ExpandableCodeExampleProps) {
  const { displayCode, isExpanded, shouldTruncate, totalLines, toggleExpand } = useExpandableCode(
    code,
    { maxLines, expandThreshold }
  )

  return (
    <div className="expandable-code-example">
      <div className={shouldTruncate && !isExpanded ? 'expandable-code-wrapper' : ''}>
        <CodeExample code={displayCode} language={language} downloadButton={downloadButton} />
        {shouldTruncate && !isExpanded && (
          <div className="expandable-code-blur" />
        )}
      </div>
      {shouldTruncate && (
        <div className="expandable-code-overlay">
          <button
            type="button"
            className="expandable-code-button"
            onClick={toggleExpand}
            aria-label={isExpanded ? 'Collapse code' : 'Expand code'}
          >
            {isExpanded ? (
              <>
                <span>Show less</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 10L8 6L4 10"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </>
            ) : (
              <>
                <span>Show more ({totalLines - maxLines} more lines)</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 6L8 10L12 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </>
            )}
          </button>
        </div>
      )}
    </div>
  )
}

export default ExpandableCodeExample

