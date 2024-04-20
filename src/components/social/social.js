import React from "react";
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaSlack } from "react-icons/fa";
import { BsMouse } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";

const Social = () => {
  return (
    <div className="absolute w-[120px] h-[120px] rounded-full bg-gray-800 border-4 border-gray-600 bottom-[-60px] right-[20%] z-50 drop-shadow-xl">
      <div className="w-full h-full flex-col flex justify-center items-center text-yellow-500">
        <BsMouse className="text-4xl" />
        <IoIosArrowDown className="text-4xl" />
      </div>
    </div>
  );
};

export default Social;

/* <div className="absolute w-[80%] h-[150px] bg-gray-600 bottom-[-75px] z-50 drop-shadow-xl">
      <section className="w-full h-full flex items-center justify-center font-bold text-4xl text-gray-300">
        <div className="flex-1 w-full h-full flex justify-center items-center">
          <button className=" ">Google</button>
        </div>
        <div className="flex-1 w-full h-full flex justify-center items-center">
          <button className="">facebook</button>
        </div>
        <div className="flex-1 w-full h-full flex justify-center items-center">
          <button className="flex items-center justify-center gap-2">
            <FaDiscord />
            <span>Discord</span>
          </button>
        </div>
        <div className="flex-1 w-full h-full flex justify-center items-center">
          <button className="">Slack</button>
        </div>
      </section>
    </div> */
