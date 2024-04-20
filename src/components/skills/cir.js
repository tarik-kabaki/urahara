import React from "react";
import nest from "../intro/assets/nest.png";
import js from "../intro/assets/js.png";
import react from "../intro/assets/react.png";
import nxt from "../intro/assets/nxt.png";
import rdx from "../intro/assets/rdx.png";
import node from "../intro/assets/node.png";
import html from "../intro/assets/html.png";
import css from "../intro/assets/css.png";
import pg from "../intro/assets/pg.png";
import tl from "../intro/assets/tl.png";

const Cir = () => {
  return (
    <div className="w-[700px] h-[700px] absolute flex items-center justify-center left-[-50px]">
      <div className="relative w-full h-full">
        <div className="absolute w-full h-[150px] border-b-2 border-gray-600 border-opacity-50 drop">
          <div className="relative w-full h-full">
            <div className="absolute w-[150px] h-[150px] sq_bg left-0 flex items-center justify-center">
              <img src={nest} className="object-contain w-[100px] h-[100px]" />
            </div>
            <div className="absolute w-[150px] h-[150px] sq_bg left-[450px] flex items-center justify-center">
              <img src={node} className="object-contain w-[100px] h-[100px]" />
            </div>
          </div>
        </div>
        <div className="absolute w-full h-[150px] border-b-2 border-gray-600 border-opacity-50 top-[150px]">
          <div className="relative w-full h-full flex items-center ">
            <div className="absolute w-[150px] h-[150px] sq_bg left-[300px] flex items-center justify-center tt">
              <img src={rdx} className="object-contain w-[100px] h-[100px]" />
            </div>

            <div className="absolute w-[150px] h-[150px] sq_bg left-[600px] flex items-center justify-center">
              <img src={js} className="object-contain w-[100px] h-[100px]" />
            </div>
          </div>
        </div>
        <div className="absolute w-full h-[150px] border-b-2 border-gray-600 border-opacity-50 top-[300px]">
          <div className="relative w-full h-full">
            <div className="absolute w-[150px] h-[150px] sq_bg left-[150px] flex items-center justify-center">
              <img src={react} className="object-contain w-[100px] h-[100px]" />
            </div>

            <div className="absolute w-[150px] h-[150px] sq_bg left-[450px] flex items-center justify-center">
              <img src={tl} className="object-contain w-[100px] h-[100px]" />
            </div>
          </div>
        </div>
        <div className="absolute w-full h-[150px] border-b-2 border-gray-600 border-opacity-50 top-[450px]">
          <div className="relative w-full h-full">
            <div className="absolute w-[150px] h-[150px] sq_bg left-[300px] flex items-center justify-center">
              <img src={pg} className="object-contain w-[100px] h-[100px]" />
            </div>
            <div className="absolute w-[150px] h-[150px] sq_bg left-0 flex items-center justify-center">
              <img src={nxt} className="object-contain w-[100px] h-[100px]" />
            </div>
            <div className="absolute w-[150px] h-[150px] sq_bg left-[600px] bottom-[-150px] flex items-center justify-center">
              <img src={html} className="object-contain w-[100px] h-[100px]" />
            </div>
            <div className="absolute w-[150px] h-[150px] sq_bg left-[150px] bottom-[-150px] flex items-center justify-center">
              <img src={css} className="object-contain w-[100px] h-[100px]" />
            </div>
          </div>
        </div>
        <div className="absolute w-[150px] h-full border-r-2 border-gray-600 border-opacity-50"></div>

        <div className="absolute w-[150px] h-full border-r-2 border-gray-600 border-opacity-50 left-[150px]"></div>
        <div className="absolute w-[150px] h-full border-r-2 border-gray-600 border-opacity-50 left-[300px]"></div>
        <div className="absolute w-[150px] h-full border-r-2 border-gray-600 border-opacity-50 left-[450px]"></div>
      </div>
    </div>
  );
};

export default Cir;
