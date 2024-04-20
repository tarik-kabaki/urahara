import { Container } from "@mui/material";
import frm_4 from "../about/assets/frm_4.png";
import frm_9 from "../about/assets/frm_9.png";
import frm_11 from "../about/assets/frm_11.png";
import frm_12 from "../about/assets/frm_12.png";
import frm_13 from "../about/assets/frm_13.png";
import "../about/about.css";
import React from "react";
import { FaCode } from "react-icons/fa6";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { HiOutlineServerStack } from "react-icons/hi2";
import { LiaHubspot } from "react-icons/lia";
import { CgIfDesign } from "react-icons/cg";
import { MdWeb } from "react-icons/md";

const Services = () => {
  return (
    <div className="w-full h-full bg-slate-800 bg-opacity-90">
      <Container maxWidth="xl">
        <section className="flex w-full h-full pt-32">
          <div className=" relative w-full h-full ">
            <h1 className="text-slate-200 font-bold text-8xl">
              <span className="text-dsg">Services</span>
              <span className="text-yellow-500"> I belive in 💪</span>
            </h1>

            <section className="flex items-center gap-3 mb-10">
              <div className="w-[350px] h-[50px] bg-yellow-500"></div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 17 17"
                fill="none"
              >
                <path
                  d="M16.1895 1.17999L1.01953 16.35"
                  stroke="orange"
                  stroke-miterlimit="10"
                />
                <path
                  d="M16.1895 16.35L1.01953 1.17999"
                  stroke="yellow"
                  stroke-miterlimit="10"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 17 17"
                fill="none"
              >
                <path
                  d="M16.1895 1.17999L1.01953 16.35"
                  stroke="yellow"
                  stroke-miterlimit="10"
                />
                <path
                  d="M16.1895 16.35L1.01953 1.17999"
                  stroke="orange"
                  stroke-miterlimit="10"
                />
              </svg>
              <div className="w-full h-full relative flex items-center">
                <img src={frm_4} />
              </div>
            </section>
            <div className="mb-14 flex">
              <section className="relative w-[850px] h-[200px]">
                <img src={frm_4} className="absolute left-[180px] bottom-5" />

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  viewBox="0 0 17 17"
                  fill="none"
                  className="absolute left-[300px] bottom-4"
                >
                  <path
                    d="M16.1895 1.17999L1.01953 16.35"
                    stroke="yellow"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M16.1895 16.35L1.01953 1.17999"
                    stroke="orange"
                    stroke-miterlimit="10"
                  />
                </svg>

                <p className="text-5xl font-bold text-slate-100">
                  🔥 It is easier to entrust the work to the experts because
                  they are able to provide the best results reliable quality
                </p>
              </section>
            </div>
            <div className="w-full flex justify-center flex-wrap gap-10 mb-8">
              <section className="relative w-[350px] h-[250px]">
                <img
                  src={frm_9}
                  className="absolute right-[-30px] w-[100px] h-[100px] "
                />
                <div className="w-full h-full flex items-center justify-center flex-col rounded-2xl absolute z-10 bg-gray-300 hover:translate-x-[-20px] hover:translate-y-[20px] duration-300 cursor-pointer hover:bg-yellow-400">
                  <FaCode className="mb-5 w-[50px] h-[50px] text-slate-500" />
                  <h1 className="text-xl font-[700] mb-5 text-gray-900">
                    Front-End Develoment
                  </h1>
                  <p className="text-gray-800 font-[500] text-center">
                    i am an expert in HTML5, CSS3, javascript, React, Next.js
                  </p>
                </div>
                <div className="w-full h-full bg-gray-800 bg-opacity-50 rounded-2xl absolute right-[20px] top-[20px] z-0"></div>
              </section>
              <section className="relative w-[350px] h-[250px]">
                <img
                  src={frm_12}
                  className="absolute right-[-30px] w-[100px] h-[100px] "
                />
                <div className="w-full h-full flex items-center justify-center flex-col rounded-2xl absolute z-10 bg-gray-300 hover:translate-x-[-20px] hover:translate-y-[20px] duration-300 cursor-pointer hover:bg-yellow-400">
                  <LiaLaptopCodeSolid className="mb-5 w-[50px] h-[50px] text-slate-700" />
                  <h1 className="text-xl font-[700] mb-5 text-gray-800">
                    Back-End Develoment
                  </h1>
                  <p className="text-gray-800 font-[500] text-center">
                    i am an expert & doing Node.js n Express & Nest.js
                  </p>
                </div>
                <div className="w-full h-full bg-gray-800 bg-opacity-50 rounded-2xl absolute right-[20px] top-[20px] z-0"></div>
              </section>
              <section className="relative w-[350px] h-[250px]">
                <img
                  src={frm_11}
                  className="absolute right-[-50px] w-[100px] h-[100px] "
                />
                <div className="w-full h-full flex items-center justify-center flex-col rounded-2xl absolute z-10 bg-gray-300 hover:translate-x-[-20px] hover:translate-y-[20px] duration-300 cursor-pointer hover:bg-yellow-400">
                  <HiOutlineServerStack className="mb-5 w-[50px] h-[50px] text-slate-700" />
                  <h1 className="text-xl font-[700] mb-5 text-gray-900">
                    Database Managment
                  </h1>
                  <p className="text-gray-800 font-[500] text-center w-[90%]">
                    i am an expert & doing Postgress and My SQL , MongoDB
                  </p>
                </div>
                <div className="w-full h-full bg-gray-800 bg-opacity-50 rounded-2xl absolute right-[20px] top-[20px] z-0"></div>
              </section>
            </div>

            <div className="w-full flex justify-center flex-wrap gap-10 mb-24">
              <section className="relative w-[350px] h-[250px]">
                <img
                  src={frm_13}
                  className="absolute right-[-50px] w-[100px] h-[100px] "
                />
                <div className="w-full h-full flex items-center justify-center flex-col rounded-2xl absolute z-10 bg-gray-300 hover:translate-x-[-20px] hover:translate-y-[20px] duration-300 cursor-pointer hover:bg-yellow-400">
                  <LiaHubspot className="mb-5 w-[50px] h-[50px] text-slate-700" />
                  <h1 className="text-xl font-[700] mb-5 text-gray-900">
                    Version Control
                  </h1>
                  <p className="text-gray-800 font-[500] text-center">
                    i am an expert & doing Git and Github , providing the best
                  </p>
                </div>
                <div className="w-full h-full bg-gray-800 bg-opacity-50 rounded-2xl absolute right-[20px] top-[20px] z-0"></div>
              </section>
              <section className="relative w-[350px] h-[250px]">
                <img
                  src={frm_9}
                  className="absolute right-[-50px] w-[100px] h-[100px] "
                />
                <div className="w-full h-full flex items-center justify-center flex-col rounded-2xl absolute z-10 bg-gray-300 hover:translate-x-[-20px] hover:translate-y-[20px] duration-300 cursor-pointer hover:bg-yellow-400">
                  <CgIfDesign className="mb-5 w-[50px] h-[50px] text-slate-700" />
                  <h1 className="text-xl font-[700] mb-5 text-gray-900">
                    Responsive Design
                  </h1>
                  <p className="text-gray-800 font-[500] text-center">
                    Creating visually appealing and functional websites across
                    devices
                  </p>
                </div>
                <div className="w-full h-full bg-gray-800 bg-opacity-50 rounded-2xl absolute right-[20px] top-[20px] z-0"></div>
              </section>
              <section className="relative w-[350px] h-[250px]">
                <img
                  src={frm_12}
                  className="absolute right-[-50px] w-[100px] h-[100px] "
                />
                <div className="w-full h-full flex items-center justify-center flex-col rounded-2xl absolute z-10 bg-gray-300 hover:translate-x-[-20px] hover:translate-y-[20px] duration-300 cursor-pointer hover:bg-yellow-400">
                  <MdWeb className="mb-5 w-[50px] h-[50px] text-slate-700" />
                  <h1 className="text-xl font-[700] mb-5 text-gray-900">
                    UI/UX Integrator
                  </h1>
                  <p className="text-gray-800 font-[500] text-center">
                    Wirefarming, prototyping , user flow anaysis
                  </p>
                </div>
                <div className="w-full h-full bg-gray-800 bg-opacity-50 rounded-2xl absolute right-[20px] top-[20px] z-0"></div>
              </section>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default Services;

/* <p className="text-5xl font-bold ">
                It is easier to entrust the work to the experts because they are
                able to provide the best results reliable quality
              </p> */
