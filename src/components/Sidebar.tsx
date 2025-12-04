import { Link, useLocation } from 'react-router-dom'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import type { SidebarSection } from '../types/navigation'

type SidebarProps = {
  sections: SidebarSection[]
  productTitle?: string
  productSubtitle?: string
  isOpen?: boolean
  onClose?: () => void
}

export function Sidebar({
  sections,
  productTitle = 'Handlebars',
  productSubtitle = 'Language Guide',
  isOpen = true,
  onClose,
}: SidebarProps) {
  const location = useLocation()

  return (
    <>
      <aside className={`sidebar ${isOpen ? 'is-open' : 'is-closed'}`}>
        <div className="sidebar-header">
          <div className="product-brand">
            <span className="product-pill">{productTitle}</span>
            <span className="product-subtitle">{productSubtitle}</span>
          </div>
          {onClose && (
            <button
              className="sidebar-close-button"
              onClick={onClose}
              aria-label="Close sidebar"
            >
              <CloseRoundedIcon />
            </button>
          )}
        </div>

        {sections.map((section) => (
          <div className="sidebar-section" key={section.heading}>
            <p className="sidebar-heading">{section.heading}</p>
            <ul className="sidebar-links">
              {section.links.map((link) => {
                const isActive = location.pathname === link.href
                return (
                  <li key={link.label}>
                    {link.isDisabled ? (
                      <span
                        className={[
                          'sidebar-link',
                          'is-disabled',
                        ].join(' ')}
                      >
                        {link.label}
                      </span>
                    ) : (
                      <Link
                        className={[
                          'sidebar-link',
                          isActive ? 'is-active' : '',
                        ].join(' ')}
                        to={link.href}
                        onClick={onClose}
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                )
              })}
            </ul>
          </div>
        ))}
      </aside>
    </>
  )
}

export default Sidebar
