import { lazy, Suspense, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AccessibleNavigationAnnouncer from './components/AccesibleNavigationAnnouncer';
import Loader from './components/Loader';
import Navbar from './components/navbar';
import * as PATHS from './constants/paths';

const Home = lazy(() => import('./pages/home'));
const About = lazy(() => import('./pages/about'));
const Contacts = lazy(() => import('./pages/contacts'));
const Projects = lazy(() => import('./pages/projects'));
const Error = lazy(() => import('./pages/Error'));

const getTheme = (): string => {
  let theme = 'emerald';
  if (localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme') || 'emerald';
  }
  return theme;
};

function App() {
  const [theme, setTheme] = useState(getTheme());
  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);
  const toggleTheme = (): void => {
    if (theme === 'forest' || theme === 'dracula') {
      setTheme('emerald');
    } else {
      setTheme('forest');
    }
  };
  return (
    <main data-theme={theme}>
      <Router>
        <AccessibleNavigationAnnouncer />
        <Navbar setTheme={setTheme} toggleTheme={toggleTheme} />
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route exact path={PATHS.Home}>
              <Home />
            </Route>
            <Route path={PATHS.About}>
              <About />
            </Route>
            <Route path={PATHS.Contact}>
              <Contacts />
            </Route>
            <Route path={PATHS.Projects}>
              <Projects />
            </Route>
            <Route path={PATHS.Error}>
              <Error />
            </Route>
          </Switch>
        </Suspense>
      </Router>
    </main>
  );
}

export default App;
