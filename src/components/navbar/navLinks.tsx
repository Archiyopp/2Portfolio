import { NavLink as Link } from 'react-router-dom';
import { links } from '../../data';
export default function NavLinks() {
  return (
    <>
      {links.map((link) => {
        const { id, url, text } = link;
        return (
          <li key={id}>
            <Link
              to={url}
              className="text-base-content font-sans font-normal text-sm sm:text-base lg:text-xl block px-1 lg:px-2 py-1 capitalize tracking-wide transition-all duration-300 hover:text-primary-focus focus:text-primary-focus"
              activeStyle={{ color: '#df00ff' }}
              exact
              aria-current="page"
            >
              {text}
            </Link>
          </li>
        );
      })}
    </>
  );
}
