// Const
import { otherLinksList } from './other-links/other-links-list';
import { socialLinksList } from './social-links/social-links-list';

// Components
import Copyright from './copyright/Copyright';
import FooterButton from './footer-button/FooterButton';
import OtherLinks from './other-links/OtherLinks';
import SocialLinks from './social-links/SocialLinks';

// Footer main function
export default function Footer() {

  // Returns the whole footer to App.tsx
  return (
    <footer className="relative inset-x-0 h-auto w-screen text-center text-netflix-gray-footer">
      <SocialLinks iconList={socialLinksList}></SocialLinks>
      <OtherLinks list={otherLinksList}></OtherLinks>
      <FooterButton content={'Service Code'} onClickHandler={() => null}></FooterButton>
      <Copyright></Copyright>
    </footer>
  );
}
