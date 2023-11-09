import { IconType } from "react-icons";
import { SiGithub, SiGmail, SiLinkedin, SiYoutube } from 'react-icons/si';

type Link = {
  key: string;
  name?: string;
  url: string;
  icon?: IconType;
};

type FooterSection = {
  sectionName: string;
  links: Link[];
};

export type FooterProps = {
  id: string; // Main key for the array
  pageLinks: FooterSection;
  externalLinks: FooterSection;
};

export const footerData: FooterProps[] = [
  {
    id: 'footer',
    pageLinks: {
      sectionName: 'Site',
      links: [
        { key: 'home', name: 'Home', url: '/home' },
        { key: 'about', name: 'About', url: '/about' },
        { key: 'blog', name: 'Blog', url: '/blog' },
        { key: 'projects', name: 'Projects', url: '/projects' }
      ]
    },
    externalLinks: {
      sectionName: 'Social',
      links: [
        { key: 'github', name: 'GitHub', url: 'https://github.com', icon: SiGithub },
        { key: 'gmail', name: 'Gmail', url: 'https://www.google.com', icon: SiGmail },
        { key: 'linkedin', name: 'LinkedIn', url: 'https://www.linkedin.com', icon: SiLinkedin },
        { key: 'youtube', name: 'Youtube', url: 'https://www.youtube.com', icon: SiYoutube }
      ]
    }
  },
];

