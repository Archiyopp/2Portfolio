import * as PATHS from '../../constants/paths';
import Logo from '../../images/logo.svg';
import { FaBars } from 'react-icons/fa';

interface Props {
  toggleTheme: any;
  setShowLinks: any;
  showLinks: boolean;
}

export default function NavHeader({
  toggleTheme,
  setShowLinks,
  showLinks,
}: Props) {
  return (
    <div className="flex items-center justify-between ">
      <a
        href={PATHS.Home}
        className="bg-primary rounded-full transition-colors duration-300 hover:bg-primary-focus focus:bg-primary-focus"
      >
        <img src={Logo} alt="" className="p-2 h-12 sm:h-14 md:h-16" />
      </a>
      <div className="flex flex-row sm:hidden">
        <label className="cursor-pointer label">
          <input className="toggle" type="checkbox" onClick={toggleTheme} />
          <span className="toggle-mark bg-primary bg-opacity-60"></span>
        </label>
      </div>
      <button
        type="button"
        onClick={() => setShowLinks(!showLinks)}
        aria-label="toggle nav button"
        className="block sm:hidden text-xl text-primary cursor-pointer transition-all duration-300 bg-transparent border-transparent transform hover:rotate-90 hover:text-primary-focus ml-4"
      >
        <FaBars />
      </button>
    </div>
  );
}
