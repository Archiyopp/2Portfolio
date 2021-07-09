import Title from '../components/utilities/title';
import useTitle from '../hooks/useTitle';

export default function About() {
  useTitle('About');
  return (
    <section className="flex flex-col items-center mx-auto px-2 my-2 max-w-7xl text-base-content min-h-screen">
      <Title>About me</Title>
      <p className="mb-4 text-lg md:text-xl font-sans">
        I'm a web developer and geologist from Colombia, graduated in 2020. My
        interests in geology are hydrogeology and urban subsidence, specifically
        about groundwater flow modeling and how groundwater has an impact in
        urban subsidence. And my interests in web developing mostly revolves
        around React and its surrounding libraries.
      </p>
      <p className="mb-4 text-lg md:text-xl font-sans">
        Right now I've been learning React, Tailwind CSS, Firebase, React Hook
        Forms and a bit of TypeScript, and I have an interest in Svelte, Chakra
        UI, and Next.js which I will probably try after I get more proficient
        React and its surrounding libraries.
      </p>
      <p className="mb-4 text-lg md:text-xl font-sans">
        In this website I used React, Tailwind CSS with Daisy UI, TypeScript,
        and some cool React libraries for routing and icons.
      </p>
    </section>
  );
}
