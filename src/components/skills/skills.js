import { Container } from "@mui/material";
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
import "./skills.css";
import { TfiWorld } from "react-icons/tfi";

import React from "react";
import Cir from "./cir";

const Skills = () => {
  return (
    <div className="w-full h-auto bg-slate-800 bg-opacity-90">
      <Container maxWidth="xl" className="w-full h-full">
        <div className="relative h-[150px] mb-5">
          <h1 className="text-9xl font-bold tracking-wider absolute z-10 text-yellow-500">
            SKILLS
          </h1>
          <div className="absolute z-10 bg-yellow-500 w-[600px] h-[40px] left-[500px] top-[40px]"></div>
        </div>
        <section className="flex">
          <section className="flex-1">
            <div className="w-[550px] h-[250px] relative mt-24">
              <div className="absolute w-[100px] h-[20px] bg-yellow-500 right-[30px] top-[25px]"></div>
              <div className="w-full h-full absolute">
                <h1 className="text-7xl text-white font-bold">
                  FRONT END <span className="text-dsg">DEVELOMENT</span>
                </h1>
              </div>
              <div className="absolute bottom-0 flex flex-wrap gap-3">
                <div className="w-[120px] h-[40px] rounded-full border-[1px] border-yellow-400 flex items-center justify-center text-white gap-2">
                  <TfiWorld />
                  <span>React Js</span>
                </div>
                <div className="w-[120px] h-[40px] rounded-full border-[1px] border-yellow-400 flex items-center justify-center text-white gap-2">
                  <TfiWorld />
                  <span>Next Js</span>
                </div>
                <div className="w-[140px] h-[40px] rounded-full border-[1px] border-yellow-400 flex items-center justify-center text-white gap-2">
                  <TfiWorld />
                  <span>React Native</span>
                </div>
                <div className="w-[120px] h-[40px] rounded-full border-[1px] border-yellow-400 flex items-center justify-center text-white gap-2">
                  <TfiWorld />
                  <span>HTML 5</span>
                </div>
                <div className="w-[100px] h-[40px] rounded-full border-[1px] border-yellow-400 flex items-center justify-center text-white gap-2">
                  <TfiWorld />
                  <span>CSS 3</span>
                </div>
                <div className="w-[130px] h-[40px] rounded-full border-[1px] border-yellow-400 flex items-center justify-center text-white gap-2">
                  <TfiWorld />
                  <span>Javascript</span>
                </div>
                <div className="w-[150px] h-[40px] rounded-full border-[1px] border-yellow-400 flex items-center justify-center text-white gap-2">
                  <TfiWorld />
                  <span>Tailwind CSS</span>
                </div>
              </div>
            </div>

            <div className="w-[500px] h-[250px] relative mt-24">
              <div className="absolute w-[100px] h-[20px] bg-yellow-500 right-[20px] top-[25px]"></div>
              <div className="w-full h-full absolute">
                <h1 className="text-7xl text-white font-bold">
                  BACK END <span className="text-dsg">DEVELOMENT</span>
                </h1>
              </div>
              <div className="absolute bottom-0 flex flex-wrap gap-3">
                <div className="w-[120px] h-[40px] rounded-full border-[1px] border-yellow-400 flex items-center justify-center text-white gap-2">
                  <TfiWorld />
                  <span>Node Js</span>
                </div>
                <div className="w-[110px] h-[40px] rounded-full border-[1px] border-yellow-400 flex items-center justify-center text-white gap-2">
                  <TfiWorld />
                  <span>Nest Js</span>
                </div>
                <div className="w-[120px] h-[40px] rounded-full border-[1px] border-yellow-400 flex items-center justify-center text-white gap-2">
                  <TfiWorld />
                  <span>Express</span>
                </div>
                <div className="w-[130px] h-[40px] rounded-full border-[1px] border-yellow-400 flex items-center justify-center text-white gap-2">
                  <TfiWorld />
                  <span>Postgress</span>
                </div>
                <div className="w-[130px] h-[40px] rounded-full border-[1px] border-yellow-400 flex items-center justify-center text-white gap-2">
                  <TfiWorld />
                  <span>MongoDB</span>
                </div>
                <div className="w-[130px] h-[40px] rounded-full border-[1px] border-yellow-400 flex items-center justify-center text-white gap-2">
                  <TfiWorld />
                  <span>API Rest</span>
                </div>
              </div>
            </div>
          </section>

          <section className="flex-1 relative flex items-center justify-start">
            <Cir />
          </section>
        </section>
      </Container>
    </div>
  );
};

export default Skills;

/*<div className="w-[700px] h-[700px] flex justify-center items-center relative">
              <div className="absolute w-[100px] h-[100px] border-[1px] border-gray-500 rounded-full circle">
                <section className="w-full h-full relative">
                  <div className="w-[60px] h-[60px] bg-gray-800 absolute rounded-full left-[-15px] flex items-center justify-center">
                    <img src={tl} className="w-[80%] h-[80%] object-contain" />
                  </div>
                </section>
              </div>
              <div className="absolute w-[250px] h-[250px] border-[1px] border-gray-500 rounded-full circle_2">
                <section className="w-full h-full relative">
                  <div className="w-[60px] h-[60px] bg-gray-800 absolute rounded-full right-[20px] bottom-0 flex items-center justify-center">
                    {" "}
                    <img src={pg} className="w-[70%] h-[70%] object-contain" />
                  </div>
                </section>
              </div>
              <div className="absolute w-[350px] h-[350px] border-[1px] border-gray-600 rounded-full circle">
                <section className="w-full h-full relative">
                  <div className="w-[60px] h-[60px] bg-gray-800 absolute rounded-full left-[-25px] bottom-[150px] flex items-center justify-center">
                    <img
                      src={html}
                      className="w-[50%] h-[50%] object-contain"
                    />
                  </div>
                  <div className="w-[60px] h-[60px] bg-gray-800 absolute rounded-full right-[-25px] bottom-[150px] flex items-center justify-center">
                    <img src={css} className="w-[50%] h-[50%] object-contain" />
                  </div>
                </section>
              </div>
              <div className="absolute w-[450px] h-[450px] border-[1px] border-gray-600 rounded-full circle_2">
                <section className="w-full h-full relative">
                  <div className="w-[70px] h-[70px] bg-gray-800 absolute rounded-full right-0 bottom-[70px] flex items-center justify-center">
                    <img src={rdx} className="w-[50%] h-[50%] object-contain" />
                  </div>
                  <div className="w-[70px] h-[70px] bg-gray-800 absolute rounded-full left-0 bottom-[70px] flex items-center justify-center">
                    <img
                      src={node}
                      className="w-[60%] h-[60%] object-contain"
                    />
                  </div>
                  <div className="w-[70px] h-[70px] bg-gray-800 absolute rounded-full left-[190px] top-[-30px] flex items-center justify-center">
                    <img src={nxt} className="w-[60%] h-[60%] object-contain" />
                  </div>
                </section>
              </div>
              <div className="absolute w-[600px] h-[600px] border-[1px] border-gray-500 rounded-full circle">
                <section className="w-full h-full relative">
                  <div className="w-[80px] h-[80px] bg-gray-800 absolute rounded-full left-[110px] flex items-center justify-center">
                    <img
                      src={react}
                      className="w-[80%] h-[80%] object-contain"
                    />
                  </div>
                  <div className="w-[80px] h-[80px] bg-gray-800 absolute rounded-full left-[110px] bottom-0 flex items-center justify-center">
                    <img
                      src={nest}
                      className="w-[80%] h-[80%] object-contain"
                    />
                  </div>
                  <div className="w-[80px] h-[80px] bg-gray-800 absolute rounded-full right-[-40px] bottom-[260px] flex items-center justify-center ">
                    <img src={js} className="w-[80%] h-[80%] object-contain" />
                  </div>
                </section>
              </div>
            </div> */
