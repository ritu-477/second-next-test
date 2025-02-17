import React from "react";

interface HeadingProps {
  title: string;
  highlightedText?: string;
  customClass?: string; 
  titleTwo?:string
}

const Heading: React.FC<HeadingProps> = ({ title, highlightedText, customClass,titleTwo }) => {
  return (
    <h2 className={`lg:text-5xl font-medium lg:leading-custom-3xl md:text-4xl text-3xl  text-light-white ${customClass || ""}`}>
      {title}
      <span className="bg-gradient-to-r from-purple-500 to-blue-400 bg-clip-text text-transparent">
        {highlightedText}
      </span>
      {titleTwo}
    </h2>
  );
};

export default Heading;
