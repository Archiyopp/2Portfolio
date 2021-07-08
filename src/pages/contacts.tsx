import { useEffect } from 'react';
import { social } from '../data';

export default function Contacts() {
  useEffect(() => {
    document.title = 'Contact | Cristian Fernandez';
  }, []);
  return (
    <section className="flex flex-col items-center mx-auto px-2 my-2 max-w-7xl text-base-content min-h-screen">
      <h1 className="mb-5 text-5xl font-bold my-6 tracking-wide">Contact</h1>
      <p className="mb-5 text-lg md:text-xl tracking-wider">
        I'm seeking job opportunities as a geologist or as a web developer,
        hopefully one where I can integrate both areas, feel free to reach out
        to me with my email (crafernandezbe@unal.edu.co) or through one of the
        platforms below:
      </p>
      <ul className="flex">
        {social.map((socialLink) => (
          <li key={socialLink.id} className="mx-1 md:mx-2">
            <a
              href={socialLink.url}
              aria-label={socialLink.label}
              className="btn btn-circle btn-ghost text-3xl md:text-5xl text-secondary transition-colors duration-300 hover:text-secondary-focus focus:text-secondary-focus"
            >
              {socialLink.icon}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
