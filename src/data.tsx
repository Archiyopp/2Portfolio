import { FaFacebook, FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';
import {
  IoLogoJavascript,
  IoLogoPython,
  IoLogoReact,
  IoLogoHtml5,
  IoLogoCss3,
} from 'react-icons/io5';
import {
  GiVampireDracula,
  GiEmerald,
  GiForest,
  GiCupcake,
} from 'react-icons/gi';
import * as PATHS from './constants/paths';

interface pageLink {
  id: number;
  url: string;
  text: string;
}
interface socialLink {
  id: number;
  url: string;
  icon: any;
  label: string;
  color: string;
}
interface ability {
  skill: string;
  icon: any;
  text: string;
}
interface ThemeBtn {
  theme: string;
  icon: any;
}

type pageLinks = Array<pageLink>;
type socialLinks = Array<socialLink>;
type abilitiesType = Array<ability>;
type ThemeButtons = Array<ThemeBtn>;

export const links: pageLinks = [
  {
    id: 1,
    url: PATHS.Home,
    text: 'Home',
  },
  {
    id: 2,
    url: PATHS.About,
    text: 'About',
  },
  {
    id: 3,
    url: PATHS.Projects,
    text: 'Projects',
  },
  {
    id: 4,
    url: PATHS.Contact,
    text: 'Contact',
  },
];

export const social: socialLinks = [
  {
    id: 1,
    url: 'https://www.facebook.com/cristianandres.fernandezbermudez',
    icon: <FaFacebook />,
    label: 'Facebook',
    color: '#3b5998',
  },
  {
    id: 2,
    url: 'https://twitter.com/Archiyopp',
    icon: <FaTwitter />,
    label: 'Twitter',
    color: '#00acee',
  },
  {
    id: 3,
    url: 'https://www.linkedin.com/in/cristian-andres-fernandez-bermudez/',
    icon: <FaLinkedin />,
    label: 'Linkedin',
    color: '#0e76a8',
  },
  {
    id: 4,
    url: 'https://github.com/Archiyopp',
    icon: <FaGithub />,
    label: 'Github',
    color: '#211F1F',
  },
];
export const abilities: abilitiesType = [
  {
    skill: 'HTML',
    icon: <IoLogoHtml5 aria-label="logo" />,
    text: 'Strong knowledge of HTML5, accessibility, and semantics.',
  },
  {
    skill: 'CSS',
    icon: <IoLogoCss3 aria-label="logo" />,
    text: 'Good knowledge of layouts, positioning, styling and some cool tricks.',
  },
  {
    skill: 'Javascript',
    icon: <IoLogoJavascript aria-label="logo" />,
    text: 'Knowledgeable about Javascript fundamentals, asynchronous concepts, and use of APIs.',
  },
  {
    skill: 'Python',
    icon: <IoLogoPython aria-label="logo" />,
    text: 'Strong fundamentals, some knowledge about data analisis using pandas and numpy libraries.',
  },
  {
    skill: 'React',
    icon: <IoLogoReact aria-label="logo" />,
    text: 'Very knowledgeable about react hooks, jsx, data fetching and use of some react libraries.',
  },
];

export const themeButtons: ThemeButtons = [
  { theme: 'emerald', icon: <GiEmerald /> },
  { theme: 'forest', icon: <GiForest /> },
  { theme: 'cupcake', icon: <GiCupcake /> },
  { theme: 'dracula', icon: <GiVampireDracula /> },
];
