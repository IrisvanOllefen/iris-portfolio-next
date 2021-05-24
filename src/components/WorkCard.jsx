import React from "react";

export function WorkCard({ content }) {
  return (
    <div className="bg-purple-200 px-5 py-5 mx-4 my-6 rounded-xl shadow-xl">
      <h3 className="text-2xl font-semibold text-center">{content.title}</h3>
      <h4 className="text-lg font-medium text-center">{content.subTitle}</h4>
      <h4 className="text-center text-base">{content.productType}</h4>
      <div className="md:flex lg:flex lg:flex-col">
        <img
          src={content.productImg}
          alt="Picture of Product"
          className="py-4 sm:w-full md:w-1/2 md:h-auto md:self-start lg:w-full"
        />
        <div className="md:p-5 ">
          <a href={content.productUrl} className="font-semibold underline ">
            {content.urlName}
          </a>
          <h5 className="pt-3 font-semibold">Focus Points</h5>
          <ul className="pt-1">
            <li className="pt-1 pb-1">{content.focusPointOne}</li>
            <li className="pt-1 pb-1">{content.focusPointTwo}</li>
            <li className="pt-1 pb-1">{content.focusPointThree}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
