import { Link } from 'react-router-dom';

interface mealProps {
  strMeal: string;
  strCategory: string;
  strMealThumb: string;
  strTags: string;
  strArea: string;
}
export default function MealThumb({
  strMeal,
  strCategory,
  strMealThumb,
  strTags,
  strArea,
}: mealProps) {
  return (
    <li
      key={strMeal}
      className="flex flex-col font-sans text-base-content bg-base-300 rounded-t-xl shadow-lg border-2 border-solid border-primar transition-shadow duration-300 hover:shadow-2xl"
    >
      <h3 className="text-2xl lg:text-3xl my-4 font-medium text-center tracking-wide">
        {strMeal}
      </h3>
      <img
        src={strMealThumb}
        alt=""
        width="300"
        height="300"
        loading="lazy"
      />
      <p className="text-xl pl-3 my-3 tracking-wider">
        {strCategory}
      </p>
      <p className="text-md lg:text-lg pl-3 mb-2 tracking-wide">
        {strTags
          ? strTags.split(',').map((string) => (
              <span
                key={string}
                className="bg-accent hover:bg-accent-focus transition-colors duration-300 mr-2 px-1 rounded-md text-accent-content"
              >
                {string + ' '}
              </span>
            ))
          : 'No Tags'}
      </p>
      <p className="text-md pl-3 mb-2 tracking-wide">{strArea}</p>
      <Link
        to={`/projects/meals/${
          Array.isArray(strMeal.split(' '))
            ? strMeal.split(' ').join('_')
            : strMeal
        }`}
        className="text-md lg:text-lg pl-3 ml-3 py-1 mb-2 tracking-wide bg-primary text-primary-content rounded-xl w-2/3 transition-colors duration-300 hover:bg-primary-focus"
      >
        View More Details
      </Link>
    </li>
  );
}
