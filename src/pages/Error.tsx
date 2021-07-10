import { useLocation } from 'react-router-dom';
import Title from '../components/utilities/title';
import useTitle from '../hooks/useTitle';
export default function Error() {
  const { pathname } = useLocation();
  useTitle('Not Found');
  return (
    <section className="min-h-screen">
      <Title>Oops! There is no page here!</Title>
      <p className="text-lg text-center mx-auto my-4 text-base-content">
        Sorry, the page {pathname} could not be found.
      </p>
      <div className="mx-auto flex justify-center">
        <button className="btn btn-info hover:bg-blue-500 mx-auto font-semibold text-xl">
          Go Back Home
        </button>
      </div>
    </section>
  );
}
