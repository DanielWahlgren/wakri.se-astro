/**
 * Navigation Configuration
 *
 * Defines which pages appear in the site navigation and their display order.
 * Astro handles routing via the filesystem — this only controls nav menus.
 */

export interface NavItem {
  label: string;
  href: string;
  order: number;
}

export const navItems: NavItem[] = [
  { label: 'Om oss', href: '/about', order: 1 },
  { label: 'Kalendarium', href: '/calendar', order: 2 },
  { label: 'Våra slöjdare', href: '/creators', order: 3 },
  { label: 'Bli medlem', href: '/membership', order: 4 },
  { label: 'Blog', href: '/blog', order: 5 },
  { label: 'Kontakt', href: '/contact', order: 6 },
];

/**
 * Get navigation items sorted by order
 */
export function getNavItems(): NavItem[] {
  return [...navItems].sort((a, b) => a.order - b.order);
}
