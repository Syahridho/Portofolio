import { ReactNode } from "react";

type PropsTypes = {
  img: string;
  alt: string;
  title: string;
  study: ReactNode;
};

const ImgSkill = (props: PropsTypes) => {
  const { img, alt, title, study } = props;
  return (
    <div className="relative flex justify-center items-center group">
      <img
        src={img}
        alt={alt}
        className={`w-8 h-8 ${study && "animate-pulse"}`}
      />
      <div className="absolute text-nowrap  bg-gray-500 px-2 py-1 -top-5 text-white rounded text-sm transiton-all duration-500 ease-in-out opacity-0 group-hover:opacity-100 group-hover:-top-10">
        <h1>
          {title} {study && "studied"}
        </h1>
      </div>
    </div>
  );
};

export default ImgSkill;
