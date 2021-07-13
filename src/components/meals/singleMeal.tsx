import { useQuery } from 'react-query';
import { useParams } from 'react-router';
import Title from '../utilities/title';
import Loader from '../Loader';
import { Meals } from '../../constants/paths';
import { Link } from 'react-router-dom';
interface singleMeal {
  strArea: string;
  strCategory: string;
  strMeal: string;
  strMealThumb: string;
  strInstructions: string | null;
  strIngredient1: string | null;
  strIngredient2: string | null;
  strIngredient3: string | null;
  strIngredient4: string | null;
  strIngredient5: string | null;
  strIngredient6: string | null;
  strIngredient7: string | null;
  strIngredient8: string | null;
  strIngredient9: string | null;
}

interface data {
  meals: singleMeal[];
}

export default function SingleMeal() {
  const { name } = useParams<{ name?: string }>();
  let title: string = 'None';
  let url: string;
  if (name) {
    if (Array.isArray(name.split('_'))) {
      title = name.split('_').join(' ');
    } else {
      title = name;
    }
    url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${title}`;
  }
  const { isLoading, isError, data, isSuccess } = useQuery<
    data,
    Error
  >('meal', () => fetch(url).then((res) => res.json().catch()));
  let mealJsx: JSX.Element = <p>Whoops</p>;
  if (typeof data !== 'undefined') {
    const { meals } = data;
    const meal = meals[0];
    const {
      strMeal,
      strMealThumb,
      strCategory,
      strArea,
      strInstructions,
      strIngredient1,
      strIngredient2,
      strIngredient3,
      strIngredient4,
      strIngredient5,
      strIngredient6,
      strIngredient7,
      strIngredient8,
      strIngredient9,
    } = meal;
    const ingredients = [
      strIngredient1,
      strIngredient2,
      strIngredient3,
      strIngredient4,
      strIngredient5,
      strIngredient6,
      strIngredient7,
      strIngredient8,
      strIngredient9,
    ];
    console.log(meal);
    mealJsx = (
      <>
        <img
          src={strMealThumb}
          alt=""
          width="430"
          height="430"
          className="col-span-2 rounded-lg"
        />
        <div className="col-span-3">
          <p className="text-lg mb-2">
            <span className="mr-2 bg-primary text-primary-content px-2 py-1 rounded-lg">
              Name:
            </span>
            {strMeal}
          </p>
          <p className="text-lg mb-2">
            <span className="mr-2 bg-primary text-primary-content px-2 py-1 rounded-lg">
              Category:
            </span>
            {strCategory}
          </p>
          <p className="text-lg mb-2">
            <span className="mr-2 bg-primary text-primary-content px-2 py-1 rounded-lg">
              Area:
            </span>
            {strArea}
          </p>

          <span className="mr-2 bg-primary text-primary-content px-2 py-1 rounded-lg text-lg text-center">
            Instructions:
          </span>
          <p>{strInstructions}</p>
          <p className="text-lg my-2 bg-primary text-primary-content px-2 py-1 rounded-lg w-32">
            Ingredients:
          </p>
          <ul className="flex flex-row flex-wrap">
            {ingredients.map((ingredient) => {
              if (ingredient) {
                return (
                  <li
                    key={ingredient}
                    className="border border-solid border-primary mr-2 px-1 mb-2 rounded-md"
                  >
                    {ingredient + ' '}
                  </li>
                );
              } else {
                return null;
              }
            })}
          </ul>
        </div>
      </>
    );
  }

  return (
    <section className="flex flex-col items-center min-h-screen text-base-content">
      <Link
        to={Meals}
        className="bg-info text-base-300 text-2xl py-2 px-3 rounded-lg my-2"
      >
        Back to the database
      </Link>
      <Title>{title}</Title>
      {isLoading && <Loader />}
      {isError && <p>Error occurred, this meal was not found!</p>}
      {isSuccess && (
        <article className="flex flex-col items-center lg:grid lg:grid-cols-5 gap-6 max-w-7xl px-6 place-items-center">
          {mealJsx}
        </article>
      )}
    </section>
  );
}
