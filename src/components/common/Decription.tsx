import React from "react";

interface DescriptionProps {
  title: string;
  customClass?: string; 
}

const Description: React.FC<DescriptionProps> = ({ title,customClass }) => {
  return (
    <p className={`sm:text-base text-sm sm:leading-custom-xl font-normal opacity-90 text-white font-poppins ${customClass || ""}`}>
      {title} 
    </p>
  );
};

export default Description;
