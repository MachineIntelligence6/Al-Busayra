import React from "react";
// import  page  from "./page";

const EmptyScreenView = ({
  image,
  altText,
  title,
  description,
  buttonText,
  onButtonClick,
}) => {
  return (
    <>
      <div className=" w-fit ">
        <img src={image} alt={altText} />
      </div>
      <div className="flex flex-col gap-3 justify-center items-center">
        <h3 className="text-[rgba(16,71,116,1)] text-xl font-semibold ">
          {title}
        </h3>
        <p className="text-[#4B465C] text-center">{description}</p>
        <div className="bg-[#104774] flex gap-2 rounded-[6px] py-[10px] px-[20px] text-[#FFF] font-medium text-[15px]">
          <img src="/resuable/plus.svg" alt="plus" />
          <button onClick={onButtonClick}>{buttonText}</button>
        </div>
      </div>
    </>
  );
};

export default EmptyScreenView;