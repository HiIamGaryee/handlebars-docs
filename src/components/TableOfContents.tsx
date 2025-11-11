import type { TocItem } from '../types/navigation'

type TableOfContentsProps = {
  items: TocItem[]
  title?: string
}

export function TableOfContents({
  items,
  title = 'On this page',
}: TableOfContentsProps) {
  return (
    <aside className="table-of-contents">
      <p className="toc-title">{title}</p>
      <ul>
        {items.map((item) => (
          <li key={item.href}>
            <a href={item.href}>{item.label}</a>
          </li>
        ))}
      </ul>
    </aside>
  )
}

