import HomePage from '../components/home/index';
import useTitle from '../hooks/useTitle';
export default function Home() {
  useTitle('Home');
  return (
    <div className="flex flex-col items-center min-h-screen">
      <HomePage />
    </div>
  );
}
