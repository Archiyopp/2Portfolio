import { useLocation } from 'react-router-dom';
import useTitle from '../hooks/useTitle';
export default function Error() {
  const { pathname } = useLocation();
  useTitle('Not Found');
  return (
    <>
      <p className="text-4xl text-center my-6 mx-auto font-semibold">
        Oops! There is no page here!
      </p>
      <p className="text-lg text-center mx-auto my-4">
        Sorry, the page {pathname} could not be found.
      </p>
      <div className="mx-auto flex justify-center">
        <button className="btn btn-info hover:bg-blue-500 mx-auto font-semibold text-xl">
          Go Back Home
        </button>
      </div>
    </>
  );
}
