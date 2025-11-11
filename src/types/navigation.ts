export type SidebarLink = {
  label: string
  href: string
  isActive?: boolean
  isDisabled?: boolean
}

export type SidebarSection = {
  heading: string
  links: SidebarLink[]
}

export type TocItem = {
  label: string
  href: string
}

