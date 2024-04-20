import React from "react";
import frame_1 from "../assets/frame_1.png";
import frame_3 from "../assets/frame_3.png";
import frame_6 from "../assets/frame_6.png";
import frame_4 from "../assets/frame_4.png";

const Frame = () => {
  return (
    <div className="absolute w-full h-[800px] overflow-hidden -z-10">
      <div className="w-[700px] h-[700px] absolute bottom-[-50px] left-[-50px]">
        <div className="w-full h-full relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="450"
            height="450"
            viewBox="0 0 363 361"
            fill="none"
            className=" absolute bottom-[-100px] left-[-100px] filter grayscale"
          >
            <path
              d="M26.9795 261.6C62.4295 306.2 91.0895 290.91 132.609 317.05C156.27 331.94 172.629 362.97 205.909 360.53C230.939 358.69 253.699 339.61 264.919 317.99C270.159 307.89 269.439 292.66 275.149 283.31C286.939 264.02 306.399 259.31 325.029 246.93C346.499 232.65 363.95 214.32 362.56 184.23C361.21 154.88 337.96 134.08 329.799 106.74C321.259 78.12 330.44 55.68 301.5 35.62C278.48 19.67 252.619 29.09 228.689 23.22C167.519 8.23 134.099 -25.75 88.1295 35.92C68.8995 61.72 60.2095 94.37 39.5495 117.74C2.82947 159.31 -20.0505 202.43 26.9795 261.6Z"
              fill="url(#paint0_linear_5_2467)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_5_2467"
                x1="84.071"
                y1="33.4267"
                x2="286.657"
                y2="317.165"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FCEE21" />
                <stop offset="1" stop-color="#00A99D" />
              </linearGradient>
            </defs>
          </svg>
          <img
            src={frame_6}
            className="w-[150px] h-[150px] absolute left-[180px] top-[10px]"
          />
          <img
            src={frame_6}
            className="w-[180px] h-[180px] absolute bottom-[180px] right-[50px]"
          />
          <img
            src={frame_4}
            className="w-[130px] h-[130px] absolute top-[-30px] right-[50px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Frame;
