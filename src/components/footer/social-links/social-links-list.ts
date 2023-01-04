// Social Links interface
export interface ISocialLink {
  id: number;
  href: string;
  url: string;
  alt: string;
}

// Exports the list of links to be rendered in SocialLink.tsx
export const socialLinksList: ISocialLink[] = [
  { id: 0, href: 'facebook', url: 'fa fa-facebook', alt: 'facebook-logo' },
  { id: 1, href: 'instagram', url: 'fa fa-instagram', alt: 'instagram-logo' },
  { id: 2, href: 'twitter', url: 'fa fa-twitter', alt: 'twitter-logo' },
  { id: 3, href: 'youtube', url: 'fa fa-youtube', alt: 'youtube-logo' },
]
