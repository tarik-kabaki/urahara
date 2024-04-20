import { Container } from "@mui/material";
import "./navbar.css";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[150px] flex items-center absolute top-0 z-10 left-0">
      <Container maxWidth="xl">
        <div className="flex w-full h-full items-center">
          <section className="w-[60%]">
            <div className="icon_shape w-[90px] h-[90px] bg-yellow-500  flex justify-center items-center">
              <div className="icon_shape_inside w-[50px] h-[50px] bg-gray-800"></div>
            </div>
          </section>
          <section className="w-[40%]">
            <ul className="flex gap-8 font-bold text-4xl">
              <div className="flex flex-col items-center">
                <button className="text-white">Services</button>
              </div>
              <div className="flex flex-col items-center">
                <button className="text-white hover:text-blue-500 duration-300">
                  Work
                </button>
              </div>
              <div className="flex flex-col items-center">
                <button className="text-white hover:text-blue-500 duration-300">
                  About Me
                </button>
              </div>
            </ul>
          </section>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
