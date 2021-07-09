import { themeButtons } from '../../data';

interface TProps {
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}
export default function NavThemes({ setTheme }: TProps) {
  return (
    <ul className="hidden sm:flex">
      {themeButtons.map((themeBtn) => (
        <li key={themeBtn.theme}>
          <button
            className="btn btn-circle bg-transparent hover:bg-transparent border-none h-6 w-6 lg:mr-1 lg:h-10 lg:w-10 text-lg lg:text-2xl xl:text-3xl text-primary transition-colors duration-300 hover:text-primary-focus focus:text-primary-focus"
            onClick={() => setTheme(themeBtn.theme)}
            aria-label={`${themeBtn.theme} theme`}
          >
            {themeBtn.icon}
          </button>
        </li>
      ))}
    </ul>
  );
}
