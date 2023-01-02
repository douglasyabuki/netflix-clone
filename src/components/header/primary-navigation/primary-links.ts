// Interface of the navigation link object
interface INavigationOption {
  id: number,
  name: string,
  link: string,
}

// Exports the list of links to be handled by PrimaryNavigation.tsx
export const primaryLinks: INavigationOption[] = [
  { id: 0, name: "Home", link: "/browse" },
  { id: 1, name: "TV Shows", link: "/browse" },
  { id: 2, name: "Movies", link: "/browse" },
  { id: 3, name: "New & Popular", link: "/browse" },
  { id: 4, name: "My List", link: "/browse" },
  { id: 5, name: "Browse by Languages", link: "/browse" },
]
