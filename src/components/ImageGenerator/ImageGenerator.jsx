import React from "react";

import default_image from "../Assets/default_image.webp";

let ImageGenerator = () => {
    return (
        <div className="ai-image-generator flex flex-col m-auto items-center my-11 mb-20 gap-10">
            <div className="header text-4xl font-bold">AI Image <span className="text-pink-600">Generator</span></div>
            <div className="img-loading">
                <div className="image    overflow-hidden  max-w-md
                "><img src= {default_image} alt="" /> </div>
            </div>
                <div className="search-box">
                    <input type="text" className="input font-medium h-10 w-96  border-collapse  text-black  shadow-sm border-slate-300 placeholder-slate-400 focus:outline-indigo-800 focus:border-x-sky-900 focus:ring-sky-800 block  rounded-md focus:ring-1 text-lg" 
                     placeholder="Describe what you want to seen..."/>
                </div>
                <button className="bg-pink-700 hover:bg-pink-500 w-40 text-2xl rounded-lg  font-semibold  h-10 ">Generate</button>
        </div>
    )
}
export default ImageGenerator;