import { useRef } from 'react';

export default function SearchForm({ setMeals }: any) {
  const searchRef = useRef<HTMLInputElement>(null);
  const handleSubmit = (e: any) => {
    e.preventDefault();
  };
  return (
    <div className="text-base-content">
      <form onSubmit={handleSubmit}>
        <label className="form-control mb-6" htmlFor="search">
          <h2 className="text-2xl mb-3 tracking-wide">
            Search for your favorite meal
          </h2>
          <input
            type="text"
            ref={searchRef}
            onChange={() => setMeals(searchRef.current?.value)}
            className="input input-primary bg-primary text-primary-content text-lg border-2 border-opacity-60 border-base-content border-solid focus:border-opacity-100"
            id="search"
          />
        </label>
      </form>
    </div>
  );
}
