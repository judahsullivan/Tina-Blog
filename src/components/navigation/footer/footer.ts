import { IconType } from 'react-icons';
import { SiGithub, SiGmail, SiLinkedin, SiIndeed, SiYoutube } from 'react-icons/si';

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
        { key: 'home', name: 'Home', url: '/' },
        { key: 'about', name: 'About', url: '/about' },
        { key: 'blog', name: 'Blog', url: '/blog' },
        { key: 'projects', name: 'Projects', url: '/projects' },
        { key: 'contact', name: 'Contact Me', url: '/contact' }
      ]
    },
    externalLinks: {
      sectionName: 'Social',
      links: [
        { key: 'github', name: 'GitHub', url: 'https://github.com/judahsullivan', icon: SiGithub },
        {
          key: 'indeed',
          name: 'Indeed',
          url: 'https://profile.indeed.com/?hl=en_US&co=US&from=gnav-homepage&_ga=2.149244277.296854731.1699557307-493382719.1695926166',
          icon: SiIndeed
        },
        { key: 'gmail', name: 'Gmail', url: 'mailto:judahsullivan.dev@gmail.com', icon: SiGmail },
        {
          key: 'linkedin',
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/judahsullivan',
          icon: SiLinkedin
        },
        {
          key: 'youtube',
          name: 'Youtube',
          url: 'https://www.youtube.com/channel/UCG0Jz5Ibm4kaX_TKQ2DtxfA',
          icon: SiYoutube
        }
      ]
    }
  }
];
