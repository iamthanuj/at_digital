import React from "react";
import logo from "../assets/White Logo.svg";

function CtaSection() {
  return (
    <div className="w-full bg-primaryColor p-7 mt-20">
      <div className="container flex flex-col gap-[60px] lg:flex-row md:justify-between mx-auto">
        <div className="flex flex-col gap-5">
          <img src={logo} alt="footer logo" className="w-[239px]" />
          <p className="text-white font-lato md:max-w-[413px]">
            Your goal is our target. Not anything in between. We use online
            marketing platforms and tools to achieve single objective - your
            business results.
          </p>
        </div>
        <div className="flex flex-col gap-10 md:flex-row md:gap-20 text-white font-inter">
          <div className="flex flex-col gap-3">
            <h1 className="font-semibold text-[21px]">Our Technologies</h1>
            <ul className="flex flex-col gap-3">
              <li className="cursor-pointer">ReactJS</li>
              <li className="cursor-pointer">Gatsby</li>
              <li className="cursor-pointer">NextJS</li>
              <li className="cursor-pointer">NodeJS</li>
              <li className="cursor-pointer">GraphQL</li>
              <li className="cursor-pointer">Laravel</li>
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <h1 className="font-semibold text-[21px]">Our Services</h1>
            <ul className="flex flex-col gap-3">
              <li>Social media Marketing</li>
              <li>Web & Mobile App Development</li>
              <li>Data & Analytics</li>
              <li>Google Marketing solutions</li>
              <li>Search Engine Optimization</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-10 flex flex-col items-center gap-2">
        <div className="container h-[1px] md:w-[630px] bg-white mx-auto"></div>
        <div>
           <p className="text-white font-medium">Privacy Policyc&emsp;|&emsp;Terms & Conditions</p>
        </div>
      </div>
    </div>
  );
}

export default CtaSection;
