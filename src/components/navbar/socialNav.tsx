import { social } from '../../data';

export default function SocialNav() {
  return (
    <ul className="hidden md:flex">
      {social.map((socialLink) => (
        <li key={socialLink.id} className="lg:mr-1">
          <a
            href={socialLink.url}
            aria-label={socialLink.label}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-circle bg-transparent border-none hover:bg-transparent h-6 w-6 lg:h-10 lg:w-10 text-base lg:text-xl xl:text-2xl text-secondary transition-colors duration-300 hover:text-secondary-focus focus:text-secondary-focus"
          >
            {socialLink.icon}
          </a>
        </li>
      ))}
    </ul>
  );
}
