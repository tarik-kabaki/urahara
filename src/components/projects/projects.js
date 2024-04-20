import { Container } from "@mui/material";
import { IoIosArrowRoundDown } from "react-icons/io";
import dots from "./assets/dots.png";
import frm_4 from "../about/assets/frm_4.png";
import frm_9 from "../about/assets/frm_9.png";
import React from "react";

const Projects = () => {
  return (
    <div className="w-full h-auto bg-slate-800 bg-opacity-90">
      <Container maxWidth="xl">
        <section className="w-full h-full">
          <div className="relative mb-24">
            <h1 className="text-8xl font-bold text-yellow-400">
              My Recent <span className="text-dsg">Work</span>
            </h1>
          </div>
          <Container maxWidth="lg">
            <section className="relative mb-24">
              <div className=" absolute bottom-[-230px] left-0">
                <div className="w-[400px] h-[200px] relative overflow-hidden">
                  <img src={dots} className="opacity-60" />
                </div>
              </div>
              <div className="w-[600px] h-[300px] rounded-2xl relative bg-slate-300 bg-opacity-50">
                <h1 className="absolute right-[-300px] top-[60px] text-6xl font-bold text-white">
                  Music Player
                </h1>
                <span className="absolute right-[-90px] top-[130px] text-4xl font-[400] text-slate-200">
                  Aug 2022
                </span>
              </div>
            </section>

            <section className="relative flex justify-end mb-24">
              <div className=" absolute bottom-[-320px] right-[-100px] rotate-90">
                <div className="w-[400px] h-[200px] relative overflow-hidden">
                  <img src={dots} className="opacity-60 absolute" />
                </div>
              </div>

              <div className="absolute top-[-50px] w-[100px] right-0">
                <div className="relative">
                  <img src={frm_4} className="absolute" />
                </div>
              </div>
              <div className="absolute top-[-100px] w-[100px] right-0">
                <div className="relative">
                  <img src={frm_4} className="absolute" />
                </div>
              </div>
              <div className="absolute top-[-200px] w-[100px] right-[150px]">
                <div className="relative">
                  <img src={frm_9} className="absolute" />
                </div>
              </div>
              <div className="w-[450px] h-[500px] rounded-2xl relative bg-gray-500 bg-opacity-50">
                <h1 className="absolute left-[-300px] bottom-[130px] text-6xl font-bold text-white">
                  Music Player
                </h1>
                <span className="absolute left-[-100px] bottom-[80px] text-4xl font-[400] text-slate-200">
                  Aug 2022
                </span>
              </div>
            </section>

            <section className="relative mb-24">
              <div className="absolute top-[-350px]">
                <div className="h-[300px] w-[50px] rounded-3xl bg-orange-400 relative"></div>
              </div>
              <div className="absolute top-[-150px] w-[200px]  left-[350px]">
                <div className="relative">
                  <img src={frm_9} className="absolute" />
                </div>
              </div>
              <div className="w-[450px] h-[400px] rounded-2xl relative bg-yellow-300 bg-opacity-50">
                <h1 className="absolute right-[-300px] bottom-[130px] text-6xl font-bold text-white">
                  Music Player
                </h1>
                <span className="absolute right-[-90px] bottom-[80px] text-4xl font-[400] text-slate-200">
                  Aug 2022
                </span>
              </div>
            </section>

            <section className="relative flex justify-end">
              <div className="w-[800px] h-[300px] rounded-2xl relative bg-gray-500 bg-opacity-50">
                <h1 className="absolute left-[-300px] bottom-[130px] text-6xl font-bold text-white">
                  Music Player
                </h1>
                <span className="absolute left-[-100px] bottom-[80px] text-4xl font-[400] text-slate-200">
                  Aug 2022
                </span>
              </div>
            </section>
          </Container>
        </section>
      </Container>
    </div>
  );
};

export default Projects;
