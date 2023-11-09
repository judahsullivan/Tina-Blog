import { IconType } from "react-icons";
import {SiGithub, SiGmail, SiLinkedin, SiYoutube} from 'react-icons/si'

type Link = {
  name?: string;
  url: string;
  icon?: IconType;
};

type FooterSection = {
  sectionName: string;
  links: Link[];
};

export type FooterProps = {
  pageLinks: FooterSection;
  externalLinks: FooterSection;
};

export const footerData: FooterProps = {
  pageLinks: {
    sectionName: 'Site',
    links: [
      { name: 'Home', url: '/home' },
      { name: 'About', url: '/about' },
      { name: 'Blog', url: '/about' },
      { name: 'Projects', url: '/about' }
    ]
  },
  externalLinks: {
    sectionName: 'Social',
    links: [
      { name: 'GitHub', url: 'https://github.com', icon:SiGithub  },
      { name: 'Gmail', url: 'https://www.google.com', icon: SiGmail },
      { name: 'LinkedIn', url: 'https://www.google.com', icon: SiLinkedin },
      { name: 'Youtube', url: 'https://www.google.com', icon:SiYoutube }
    ]
  }
};



