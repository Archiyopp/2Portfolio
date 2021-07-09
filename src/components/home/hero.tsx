import selfiej from './../../images/selfie2j.jpg';
import selfiew from './../../images/selfie2.webp';
import Title from '../utilities/title';
export default function Hero() {
  return (
    <section className="hero my-3 md:my-4 lg:my-6">
      <div className="flex-col hero-content lg:flex-row-reverse">
        <picture className="">
          <source type="image/webp" srcSet={selfiew} />
          <img
            src={selfiej}
            className=" max-w-xs sm:max-w-sm mask mask-squircle "
            alt="me smiling"
            height="400"
            width="400"
          />
        </picture>
        <div className="text-base-content">
          <Title>Hello there, I'm Cristian Fernandez</Title>
          <p className="mb-5 text-lg md:text-xl font-sans">
            I'm a web developer and geologist from Colombia. I'm very passionate
            about developing web pages, and I'm currently improving on my
            programming skills with the Ministry of Information Technologies of
            Colombia so I can become a better web developer.
          </p>
        </div>
      </div>
    </section>
  );
}
