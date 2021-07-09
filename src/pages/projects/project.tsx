import { Link } from 'react-router-dom';

type Props = {
  text: string;
  url: string;
  imgUrl: string;
  title: string;
  imgUrlw: string;
};

export default function Project({ text, imgUrl, url, imgUrlw, title }: Props) {
  return (
    <article className="flex flex-col items-center bg-secondary p-4 shadow-inner rounded-xl ">
      <h2 className="text-xl lg:text-2xl mb-3 font-medium text-primary-content">
        {title}
      </h2>
      <div className="relative">
        <picture>
          <source srcSet={imgUrlw} type="image/webp" />
          <img src={imgUrl} alt="" className="rounded-xl" />
        </picture>
        <Link to={url}>
          <div className="rounded-xl absolute bottom-0 left-0 w-full opacity-0 flex items-center h-full px-4 cursor-pointer bg-gray-300 hover:opacity-70">
            <p className="text-black text-xl font-semibold">{text}</p>
          </div>
        </Link>
      </div>
    </article>
  );
}
