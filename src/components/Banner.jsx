import React from "react";

export function Banner(props) {
  return (
    <div
      className={`flex flex-row justify-between h-32 ${
        props.dark ? "bg-black" : ""
      }`}
    >
      <img
        src={`images/${props.dark ? "black" : "white"}-logo.svg`}
        className="m-2"
        alt=""
      />
      <div className="flex -left-0 p-2 font-semibold">
        <a href="https://twitter.com/irisvanollefen" className="p-3 m-1">
          <img alt="" src={`images/twitter${props.dark ? "-white" : ""}.svg`} />
        </a>
        <a href="https://github.com/IrisvanOllefen" className="p-3 m-1">
          <img alt="" src={`images/github${props.dark ? "-white" : ""}.svg`} />
        </a>
        <a
          href="https://www.linkedin.com/in/iris-van-ollefen-38346417b/"
          className="p-3 m-1"
        >
          <img
            alt=""
            src={`images/linkedin${props.dark ? "-white" : ""}.svg`}
          />
        </a>
      </div>
    </div>
  );
}
