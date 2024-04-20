import React from "react";
import frame_3 from "../intro/assets/frame_3.png";
import Container from "@mui/material/Container";
import fmr_1 from "./assets/fmr_1.png";
import frm_2 from "./assets/frm_2.png";
import frm_3 from "./assets/frm_3.png";
import frm_4 from "./assets/frm_4.png";
import frm_5 from "./assets/frm_5.png";
import frm_7 from "./assets/frm_7.png";
import frm_8 from "./assets/frm_8.png";
import kabaki_pic from "./assets/kabaki_pic.png";
import { PiHandWavingBold } from "react-icons/pi";
import "./about.css";

const About = () => {
  return (
    <div className="w-full h-[900px] bg-gray-900 bg-opacity-90 ">
      <Container maxWidth="xl" className="w-full h-full relative">
        <div className="w-full h-full pt-32 ">
          <section>
            <section className="w-[1050px] h-[300px] relative">
              <div className="w-full h-full absolute z-10">
                <h1 className="font-bold text-8xl text-slate-200">
                  <span className="text-dsg">WHAT TO KNOW ABOUT </span> TARIK
                  KABAKI
                </h1>
                <div className="w-[350px] h-[50px] bg-yellow-500"></div>
              </div>
              <div className="w-[100px] h-[100px] absolute z-0 right-56 top-0">
                <div className="w-full h-full relative">
                  <img src={frm_4} className=" object-contain absolute top-5" />
                  <img
                    src={fmr_1}
                    className=" object-contain absolute top-12"
                  />
                  <img
                    src={fmr_1}
                    className="object-contain absolute top-16 left-5"
                  />
                </div>
              </div>

              <div className="w-[300px] h-[50px] absolute z-0 right-96 bottom-14">
                <div className="w-full h-full relative flex items-center">
                  <img src={frm_4} />
                </div>
              </div>
            </section>
            <div className="font-[500] text-slate-300 w-[700px] mb-10 leading-8">
              👋 Hi, I'm Tarik Kabaki, a dynamic Full Stack Web Developer. With
              expertise in front-end technologies like HTML, CSS, and
              JavaScript, I craft seamless user interfaces. On the back-end, I
              excel in building scalable server-side solutions using Node.js and
              Python. Proficient in React.js and Express.js, I create
              interactive web applications with a focus on performance and user
              experience. Experienced in cross-functional collaboration, I
              communicate technical concepts effectively. Always eager to
              embrace new technologies, I stay current with industry trends. My
              goal is to deliver robust and maintainable code for optimal
              functionality. Let's connect and explore how my skills can elevate
              your projects to new heights! 🚀
            </div>
            <div className="flex items-center">
              <div className="w-[180px] h-[70px] rounded-full bg-yellow-500 flex items-center justify-center gap-3">
                <div className="w-[50px] h-[50px] rounded-full bg-white flex items-center justify-center">
                  <PiHandWavingBold className="text-2xl" />
                </div>
                <span className="text-gray-800 font-bold">Let's Talk</span>
              </div>
            </div>
          </section>
        </div>
        <div className="w-[600px] h-[750px] bg-gradient-to-r from-yellow-500 to-orange-400 rounded-3xl absolute right-14 bottom-[-50px] border-2 border-yellow-500 rotate-6 z-0">
          <div className="w-full h-full relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="100"
              viewBox="0 0 41 41"
              fill="none"
              className="absolute top-[500px] left-[-50px] z-20"
            >
              <path
                d="M27.6914 38.9296C37.7487 34.8221 42.5721 23.3392 38.4646 13.2818C34.3571 3.22447 22.8743 -1.59889 12.8169 2.50858C2.75954 6.61605 -2.0638 18.0989 2.04367 28.1563C6.15114 38.2137 17.634 43.037 27.6914 38.9296Z"
                stroke="#C5C5C5"
                stroke-miterlimit="10"
                stroke-dasharray="5 5"
              />
            </svg>

            <img
              src={kabaki_pic}
              className="w-[750px] h-[900px] object-contain absolute bottom-0 rounded-3xl"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
