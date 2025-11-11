import React from 'react'
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
    heading: 'Components',
    links: [
      { label: 'All Blog Page', href: '/all-blog' },
      { label: 'Contact Sidebar', href: '/contact-sidebar' },
      { label: 'Back to Top Button', href: '/back-to-top' },
      { label: 'Footer', href: '/footer' },
      { label: 'Font Family Link', href: '/font-family-link' },
      { label: 'Header', href: '/header' },
      { label: 'Home Banner', href: '/home-banner' },
      { label: 'New HTML Function', href: '/new-html-function' },
      { label: 'New CSS Function', href: '/new-css-function' },
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
  return (
    <>
      <Header />
      <div className="app-shell">
        <Sidebar sections={BASE_SIDEBAR_SECTIONS} productTitle={sidebarTitle} productSubtitle={sidebarSubtitle} />
        <main className="main-content">{children}</main>
        {tableOfContents.length > 0 ? <TableOfContents items={tableOfContents} /> : null}
      </div>
    </>
  )
}

export default Layout
