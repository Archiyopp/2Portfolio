import useMeals from '../../hooks/useMeals';
import Loader from '../Loader';
import Title from '../utilities/title';
import MealThumb from './mealThumb';
import SearchForm from './searchForm';
export default function Games() {
  const [
    isLoading,
    isError,
    isFetching,
    isSuccess,
    setMealSearch,
    meals,
  ] = useMeals();
  let mealsList;
  if (Array.isArray(meals)) {
    console.log(meals);
    mealsList = meals.map((meal: any): JSX.Element => {
      const {
        idMeal,
        strMeal,
        strCategory,
        strMealThumb,
        strTags,
        strArea,
      } = meal;
      const mealProps = {
        strMeal,
        strCategory,
        strMealThumb,
        strTags,
        strArea,
      };

      return <MealThumb key={idMeal} {...mealProps} />;
    });
  }
  return (
    <section className="flex flex-col items-center min-h-screen">
      <Title>Meals Database</Title>
      <SearchForm setMeals={setMealSearch} />
      {isError && <p>An error occurred fetching the meals</p>}
      {isLoading ? (
        <Loader />
      ) : isSuccess ? (
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 place-items-center gap-5 max-w-7xl">
          {mealsList}
        </ul>
      ) : null}
      {isFetching && <Loader />}
    </section>
  );
}
