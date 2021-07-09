import Title from '../../components/utilities/title';
import InstagramJ from '../../images/instagramlogin.jpg';
import InstagramW from '../../images/instagramlogin.webp';
import Project from './project';
import { Calculator } from '../../constants/paths';
import CalculatorJ from '../../images/calculatorj.jpg';
import CalculatorW from '../../images/calculatorw.webp';
import useTitle from '../../hooks/useTitle';

export default function Projects() {
  useTitle('Projects');
  return (
    <section className="flex flex-col items-center mx-auto px-2 my-2 max-w-7xl text-base-content min-h-screen">
      <Title>Projects</Title>
      <p className="mb-4 text-lg md:text-xl font-sans">
        Check out some of my projects:
      </p>
      <div className="grid sm:grid-cols-2 gap-4">
        <article className="flex flex-col items-center bg-secondary p-4 shadow-inner rounded-xl ">
          <h2 className="text-xl lg:text-2xl mb-3 font-medium text-primary-content">
            Instagram Clone
          </h2>
          <div className="relative">
            <picture>
              <source type="image/webp" srcSet={InstagramW} />
              <img
                src={InstagramJ}
                alt="Instagram login page"
                className="rounded-xl"
              />
            </picture>
            <a
              href="https://instagram-clone-arch.vercel.app/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <div className="rounded-xl absolute bottom-0 left-0 w-full opacity-0 flex items-center h-full px-4 cursor-pointer bg-gray-300 hover:opacity-70">
                <p className="text-black text-xl font-semibold">
                  Instagram clone using React, Tailwind, and Firebase
                  authentication and database.
                </p>
              </div>
            </a>
          </div>
        </article>
        <Project
          text="Basic calculator done with basic react"
          url={Calculator}
          imgUrl={CalculatorJ}
          title="Calculator"
          imgUrlw={CalculatorW}
        />
      </div>
    </section>
  );
}
