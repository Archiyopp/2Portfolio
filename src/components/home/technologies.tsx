import { abilities } from '../../data';

export default function Technologies() {
  return (
    <section className="px-4 max-w-7xl">
      <h2 className="text-5xl text-base-content font-bold my-4 tracking-wide">
        Technologies
      </h2>
      <ul className="grid sm:grid-cols-2 gap-4 my-2 min-w-full ">
        {abilities.map((ability) => (
          <li>
            <div className="flex text-2xl sm:text-3xl">
              <div className="mr-2 mt-1 text-secondary">{ability.icon}</div>
              <h3 className="text-primary-focus ">{ability.skill}</h3>
            </div>
            <p className="text-base-content text-lg md:text-xl py-2 font-sans">
              {ability.text}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
