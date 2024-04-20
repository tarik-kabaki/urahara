import { Container } from "@mui/material";
import Navbar from "../navbar/navbar";
import ai_k from "./assets/ai_k.png";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { RxInstagramLogo } from "react-icons/rx";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import frm_4 from "../about/assets/frm_4.png";

const Main = () => {
  return (
    <div className="w-full h-[900px] bg-gray-900 bg-opacity-90">
      <Container maxWidth="xl" className="w-full h-full relative">
        <div className="absolute bottom-[-5px] flex items-center gap-5">
          <div className="w-[480px] h-[40px] bg-yellow-500"></div>
          <h1 className="text-white font-bold text-7xl ">
            <span className="text-dsg"> Everybody's</span> Got a story
          </h1>
        </div>

        <Navbar />
        <div className="w-full h-full flex">
          <section className="flex-1 mt-[180px]">
            <div className="w-[900px] h-[200px] absolute z-20">
              <div className="w-full h-full relative mb-5">
                <p className="font-bold text-8xl text-slate-100 mb-14">
                  Nice to meet you! <br />
                  I'm <span className="text-dsg"> Tarik Kabaki</span>
                </p>
                <div className="w-[550px] h-[10px] bg-yellow-500 absolute right-[170px] bottom-0"></div>
              </div>

              <section className="w-[450px] h-[450px] absolute  z-10 ">
                <div className="w-full h-full relative">
                  <h1 className="text-2xl text-gray-500 font-serif mb-8">
                    - Introduction
                  </h1>
                  <p className="text-slate-200 font-bold text-4xl leading-normal">
                    Full Stack Web Developer and UI/UX Integrator .
                  </p>
                  <hr className="border-[10px] border-yellow-500 w-[80px] mb-10" />
                  <p className="text-md font-[300] text-slate-300 leading-normal mb-10 tracking-wider">
                    Based in Morroco , I'm a Full Stack Dveloper <br />{" "}
                    Passionate about building accessible web apps <br /> that
                    users loves
                  </p>
                  <section className="flex items-center gap-10">
                    <div className="flex items-center relative w-[50px]">
                      <button className="w-[50px] h-[50px] rounded-full  flex items-center justify-center text-gray-700  bg-yellow-500 font-bold absolute z-20">
                        <FaArrowRight />
                      </button>
                      <div className="w-[50px] h-[50px] rounded-full bg-gray-900 absolute z-10 right-[-30px]"></div>
                    </div>
                    <h1 className="font-[500] text-white">Download CV</h1>
                  </section>
                </div>
              </section>
            </div>
          </section>

          <section className="flex-1 w-full flex justify-center">
            <div className="absolute w-[500px] h-[800px] bg-yellow-400 top-0 z-0">
              <div className="w-full h-full relative">
                <div className="w-[80px] h-[350px] absolute left-[-100px] bottom-[-45px]">
                  <button className="hover:bg-yellow-500 hover:text-gray-800 duration-300 w-[60px] h-[60px] border-[2px]  text-yellow-400 rounded-full mb-5 flex justify-center items-center">
                    <FaFacebookF className="text-xl" />
                  </button>
                  <button className="hover:bg-yellow-500 hover:text-gray-800 duration-300 w-[60px] h-[60px] border-[2px]  text-white rounded-full mb-5 flex justify-center items-center">
                    <RxInstagramLogo className="text-xl" />
                  </button>
                  <button className="hover:bg-yellow-500 hover:text-gray-800 duration-300 w-[60px] h-[60px] border-[2px]  text-yellow-400 rounded-full mb-5 flex justify-center items-center">
                    <FaXTwitter className="text-xl" />
                  </button>
                  <button className="hover:bg-yellow-500 hover:text-gray-800 duration-300 w-[60px] h-[60px] border-[2px] text-white rounded-full mb-5 flex justify-center items-center">
                    <FaLinkedinIn className="text-xl" />
                  </button>
                </div>
                <img
                  src={ai_k}
                  className="w-full h-[90%] object-cover absolute bottom-0 filter grayscale-[50%] z-10"
                />
                <h1 className="absolute bottom-12 left-[-180px] font-bold rotate-[-90deg] text-white">
                  FOLLOW ME
                </h1>
                <img
                  src={frm_4}
                  className="absolute bottom-[160px] left-[-190px] font-bold rotate-[-90deg] text-yellow-400"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 17 17"
                  fill="none"
                  className="absolute bottom-[230px] left-[-150px] font-bold rotate-[-90deg]"
                >
                  <path
                    d="M16.4498 0.809998L1.27979 15.98"
                    stroke="orange"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M16.4498 15.98L1.27979 0.809998"
                    stroke="yellow"
                    stroke-miterlimit="10"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 17 17"
                  fill="none"
                  className="absolute bottom-[270px] left-[-150px] font-bold rotate-[-90deg]"
                >
                  <path
                    d="M16.4498 0.809998L1.27979 15.98"
                    stroke="yellow"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M16.4498 15.98L1.27979 0.809998"
                    stroke="orange"
                    stroke-miterlimit="10"
                  />
                </svg>
              </div>
            </div>
          </section>
        </div>
      </Container>
    </div>
  );
};

export default Main;
