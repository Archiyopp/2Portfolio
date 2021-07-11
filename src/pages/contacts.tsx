import { social } from '../data';
import Title from '../components/utilities/title';
import useTitle from '../hooks/useTitle';
import { useState } from 'react';

export default function Contacts() {
  useTitle('Contact');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function encode(data: any) {
    return Object.keys(data)
      .map(
        (key) =>
          encodeURIComponent(key) +
          '=' +
          encodeURIComponent(data[key])
      )
      .join('&');
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    fetch('/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: encode({ 'form-name': 'contact', name, email, message }),
    })
      .then(() => alert('Message sent!'))
      .catch((error) => alert(error));
  }

  return (
    <>
      <section className="flex flex-col items-center mx-auto px-2 my-2 max-w-7xl text-base-content font-sans">
        <Title>Contact</Title>
        <p className="mb-5 text-lg md:text-xl font-sans">
          I'm seeking job opportunities as a geologist or as a web
          developer, hopefully one where I can integrate both areas,
          feel free to reach out to me through the contact form or
          through one of the platforms below:
        </p>
        <ul className="flex">
          {social.map((socialLink) => (
            <li key={socialLink.id} className="mx-1 md:mx-2">
              <a
                href={socialLink.url}
                aria-label={socialLink.label}
                className="btn btn-circle bg-transparent border-none hover:bg-transparent text-3xl md:text-5xl text-secondary transition-colors duration-300 hover:text-secondary-focus focus:text-secondary-focus"
              >
                {socialLink.icon}
              </a>
            </li>
          ))}
        </ul>
      </section>
      <section id="contact" className="relative">
        <div className="px-5 py-10 mx-auto flex md:flex-nowrap flex-wrap justify-center max-w-7xl">
          <div className="w-full md:w-3/5 lg:w-2/3 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              width="100%"
              height="100%"
              title="map"
              className="absolute inset-0"
              frameBorder={0}
              marginHeight={0}
              marginWidth={0}
              style={{ filter: 'opacity(0.7)' }}
              src="https://www.google.com/maps/embed/v1/place?q=bogota,+puente+aranda&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
            />
            <div className="bg-gray-900 bg-opacity-30 md:bg-opacity-80 relative flex flex-wrap py-6 rounded shadow-md">
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="font-semibold text-black md:text-white text-sm">
                  EMAIL
                </h2>
                <p className="text-black md:text-gray-300 font-medium">
                  crafernandezbe@unal.edu.co
                </p>
                <h2 className="font-semibold text-black md:text-white tracking-wide text-sm mt-4">
                  PHONE
                </h2>
                <p className="text-black md:text-gray-300 font-medium">
                  +57 3178740165
                </p>
              </div>
            </div>
          </div>
          <form
            name="contact"
            className="md:w-2/5 lg:w-1/3 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
            onSubmit={handleSubmit}
            data-netlify={true}
          >
            <h2 className="text-base-content sm:text-4xl text-3xl mb-1 font-medium title-font">
              Hire Me
            </h2>
            <p className="leading-relaxed mb-5 text-base-content text-lg">
              Send me a message if you are interested in my skills!
            </p>
            <div className="relative mb-4">
              <label
                htmlFor="name"
                className="leading-7 text-md text-base-content font-sans"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-base-content rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-base-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-md text-base-content"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-base-content tracking-wide rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-base-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-md text-base-content"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-base-content rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-base-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out tracking-wide"
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="text-primary-content bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-primary-focus rounded text-lg font-semibold"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
