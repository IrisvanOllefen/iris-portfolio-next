import React from "react";

import {ProgressBar} from "./ProgressBar.jsx"

export function SkillCard({name, rating}) {
    return <div className="my-12 text-xl font-medium flex flex-col bg-purple-200 p-6 rounded-xl shadow-xl md:my-8">
    <p className="self-center pb-3">{name}</p> 
    <ProgressBar rating={rating} />
  </div>
  }
