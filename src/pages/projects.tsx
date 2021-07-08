import { useEffect } from 'react';

export default function Projects() {
  useEffect(() => {
    document.title = 'Home | Cristian Fernandez';
  }, []);
  return <div>Projects</div>;
}
