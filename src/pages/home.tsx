import { useEffect } from 'react';
import HomePage from '../components/home/index';
export default function Home() {
  useEffect(() => {
    document.title = 'Home | Cristian Fernandez';
  }, []);
  return (
    <div className="flex flex-col items-center min-h-screen">
      <HomePage />
    </div>
  );
}
