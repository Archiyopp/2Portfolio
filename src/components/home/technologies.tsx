import { abilities } from '../../data';

export default function Technologies() {
  return (
    <section className="px-4">
      <h2 className="text-5xl text-base-content font-bold my-4">
        Technologies
      </h2>
      <ul className="grid sm:grid-cols-2 gap-3 my-2 min-w-full ">
        {abilities.map((ability) => (
          <li>
            <div className="flex">
              <h3 className="text-primary-focus text-3xl">{ability.skill}</h3>
              <div className="mx-2 mt-1 text-3xl text-secondary">
                {ability.icon}
              </div>
              <p className="text-base-content"></p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
