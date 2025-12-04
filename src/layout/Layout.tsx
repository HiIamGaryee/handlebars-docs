import React, { useState, useEffect } from 'react'
import MenuOpenRoundedIcon from '@mui/icons-material/MenuOpenRounded'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import { TableOfContents } from '../components/TableOfContents'
import type { SidebarSection, TocItem } from '../types/navigation'

type LayoutProps = {
  children: React.ReactNode
  tableOfContents?: TocItem[]
  sidebarTitle?: string
  sidebarSubtitle?: string
}

const BASE_SIDEBAR_SECTIONS: SidebarSection[] = [
  {
    heading: 'Pages',
    links: [
      { label: 'Introduction', href: '/introduction' },
      { label: 'Installation', href: '/installation' },
    ],
  },
  {
    heading: 'Examples',
    links: [
      { label: '13YAO Example', href: '/example-13yao' },
    ],
  },
  {
    heading: 'Clone',
    links: [
      { label: 'Clone Page', href: '/clone' },
    ],
  },
  {
    heading: 'Functions',
    links: [
      { label: 'New HTML Function', href: '/new-html-function' },
      { label: 'New CSS Function', href: '/new-css-function' },
      { label: 'New Script Function', href: '/new-script-function' },
      { label: 'Font Family Link', href: '/font-family-link' },
    ],
  },
  {
    heading: 'Layout',
    links: [
      { label: 'Header', href: '/header' },
      { label: 'Footer', href: '/footer' },
      { label: 'Contact Sidebar', href: '/contact-sidebar' },
      { label: 'Theme Styling', href: '/theme-styling' },
    ],
  },
  {
    heading: 'Components',
    links: [
      { label: 'All Blog Page', href: '/all-blog' },
      { label: 'Home Banner', href: '/home-banner' },
      { label: 'Back to Top Button', href: '/back-to-top' },
      { label: 'Ensure Section ID Map', href: '/ensure-section-id-map' },
      { label: 'Casino CTA Buttons', href: '/casino-cta-buttons' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Category Grid Each', href: '/category-grid-each' },
      { label: 'Landing Banner V1', href: '/landing-banner-v1' },
      { label: 'Promotion Grid', href: '/promotion-grid' },
      { label: 'Category Grid', href: '/category-grid' },
    ],
  },
]

export function Layout({
  children,
  tableOfContents = [],
  sidebarTitle = 'Handlebars',
  sidebarSubtitle = 'Language Guide',
}: LayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isTocOpen, setIsTocOpen] = useState(true)
  const [isTocMobile, setIsTocMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      const isSmallScreen = window.innerWidth < 768
      setIsMobile(isSmallScreen)
      if (!isSmallScreen) {
        setIsSidebarOpen(true)
      } else {
        setIsSidebarOpen(false)
      }
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    const checkTocMobile = () => {
      const isSmallScreen = window.innerWidth < 1200
      setIsTocMobile(isSmallScreen)
      if (isSmallScreen) {
        setIsTocOpen(false)
      } else {
        setIsTocOpen(true)
      }
    }

    checkTocMobile()
    window.addEventListener('resize', checkTocMobile)
    return () => window.removeEventListener('resize', checkTocMobile)
  }, [])

  useEffect(() => {
    if (isMobile && isSidebarOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobile, isSidebarOpen])

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const closeSidebar = () => {
    setIsSidebarOpen(false)
  }

  const toggleTOC = () => {
    setIsTocOpen(!isTocOpen)
  }

  const tocToggleButton = isTocMobile && !isTocOpen && tableOfContents.length > 0 ? (
    <button
      className="toc-toggle-button"
      onClick={toggleTOC}
      aria-label="Open table of contents"
    >
      <MenuOpenRoundedIcon />
    </button>
  ) : null

  return (
    <>
      <Header onMenuClick={toggleSidebar} right={tocToggleButton} />
      {isMobile && isSidebarOpen && (
        <div className="sidebar-backdrop" onClick={closeSidebar} aria-hidden="true" />
      )}
      <div className="app-shell">
        <Sidebar
          sections={BASE_SIDEBAR_SECTIONS}
          productTitle={sidebarTitle}
          productSubtitle={sidebarSubtitle}
          isOpen={isSidebarOpen}
          onClose={isMobile ? closeSidebar : undefined}
        />
        <main className="main-content">{children}</main>
        {tableOfContents.length > 0 ? (
          <TableOfContents
            items={tableOfContents}
            isOpen={isTocOpen}
            onToggle={toggleTOC}
            isMobile={isTocMobile}
          />
        ) : null}
      </div>
    </>
  )
}

export default Layout
