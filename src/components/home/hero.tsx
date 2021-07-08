import selfiej from './../../images/selfie2j.jpg';
import selfiew from './../../images/selfie2.webp';
export default function Hero() {
  return (
    <section className="hero min-h-screen my-2">
      <div className="flex-col hero-content lg:flex-row-reverse">
        <picture className="">
          <source type="image/webp" srcSet={selfiew} />
          <img
            src={selfiej}
            className="max-w-sm mask mask-squircle "
            alt="me smiling"
            height="400"
            width="400"
          />
        </picture>
        <div className="text-base-content">
          <h1 className="mb-5 text-5xl font-bold">
            Hello there, I'm Cristian Fernandez
          </h1>
          <p className="mb-5 text-lg">
            I'm a web developer and geologist from Colombia. I'm currently
            improving on my programming with the MinTic so I can become a better
            web developer.
          </p>
        </div>
      </div>
    </section>
  );
}
