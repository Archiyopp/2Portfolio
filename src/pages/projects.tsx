import { useEffect } from 'react';
import Instagramj from '../images/instagramlogin.jpg';

export default function Projects() {
  useEffect(() => {
    document.title = 'Home | Cristian Fernandez';
  }, []);
  return (
    <section className="flex flex-col items-center mx-auto px-2 my-2 max-w-7xl text-base-content min-h-screen">
      <h1 className="mb-5 text-5xl font-bold my-6 font-sans">Projects</h1>
      <p className="mb-3 text-lg md:text-xl font-sans">
        Check out some of my projects
      </p>
      <div className="grid sm:grid-cols-2 gap-4">
        <article className="flex flex-col items-center">
          <h2 className="text-xl lg:text-2xl mb-2 font-medium">
            Instagram Clone
          </h2>
          <div className="relative">
            <img src={Instagramj} alt="Instagram login page" />
            <a
              href="https://instagram-clone-arch.vercel.app/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <div className="absolute bottom-0 left-0 w-full opacity-0 flex items-center h-full px-4 cursor-pointer bg-gray-300 hover:opacity-70">
                <p className="text-black text-xl font-semibold">
                  Instagram clone using React, Tailwind, and Firebase
                  authentication and database.
                </p>
              </div>
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
