import { Link, useLocation } from 'react-router-dom'
import type { SidebarSection } from '../types/navigation'

type SidebarProps = {
  sections: SidebarSection[]
  productTitle?: string
  productSubtitle?: string
}

export function Sidebar({
  sections,
  productTitle = 'Handlebars',
  productSubtitle = 'Language Guide',
}: SidebarProps) {
  const location = useLocation()

  return (
    <aside className="sidebar">
      <div className="product-brand">
        <span className="product-pill">{productTitle}</span>
        <span className="product-subtitle">{productSubtitle}</span>
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
  )
}

export default Sidebar
