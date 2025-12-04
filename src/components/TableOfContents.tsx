import React from 'react'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import type { TocItem } from '../types/navigation'

type TableOfContentsProps = {
  items: TocItem[]
  title?: string
  isOpen: boolean
  onToggle: () => void
  isMobile: boolean
}

export function TableOfContents({
  items,
  title = 'On this page',
  isOpen,
  onToggle,
  isMobile,
}: TableOfContentsProps) {
  return (
    <>
      {isMobile && isOpen && (
        <div className="toc-backdrop" onClick={onToggle} aria-hidden="true" />
      )}
      <aside className={`table-of-contents ${isOpen ? 'is-open' : 'is-closed'}`}>
        {isMobile && (
          <button
            className="toc-close-button"
            onClick={onToggle}
            aria-label="Close table of contents"
          >
            <CloseRoundedIcon />
          </button>
        )}
        <p className="toc-title">{title}</p>
        <ul>
          {items.map((item) => (
            <li key={item.href}>
              <a href={item.href} onClick={() => isMobile && onToggle()}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </aside>
    </>
  )
}

