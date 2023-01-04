// Interface of the navigation link object
interface INavigationOption {
  id: number,
  name: string,
  link: string,
}

// Exports the list of links to be handled by PrimaryNavigation.tsx
export const primaryLinks: INavigationOption[] = [
  { id: 0, name: "Home", link: "/" },
  { id: 1, name: "TV Shows", link: "/" },
  { id: 2, name: "Movies", link: "/" },
  { id: 3, name: "New & Popular", link: "/" },
  { id: 4, name: "My List", link: "/" },
  { id: 5, name: "Browse by Languages", link: "/" },
]
