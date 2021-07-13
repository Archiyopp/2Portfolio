import { useState } from 'react';
import { useQuery } from 'react-query';
interface mealsType {
  meals: any[];
}
export default function useMeals() {
  const [mealSearch, setMealSearch] = useState('a');
  const fetchMeals = (meals: string) => {
    return fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealSearch}`
    ).then((res) => res.json());
  };
  const query = useQuery<mealsType, any>(['meals', mealSearch], () =>
    fetchMeals(mealSearch)
  );
  const { isLoading, isError, data, isFetching, isSuccess } = query;
  let meals;
  if (data) {
    meals = data.meals;
  }
  return [
    isLoading,
    isError,
    isFetching,
    isSuccess,
    setMealSearch,
    meals,
  ];
}
