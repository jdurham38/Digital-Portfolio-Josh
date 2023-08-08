import React from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { RainbowHighlight } from "./RainbowHighlight";
import userData from "@constants/data";

export default function Hero() {
  const colors = ["#73AB84", "#99D19C", "#79C7C5", "#98DADE"];

  return (
    <div className="flex flex-col-reverse lg:flex-row space-y-10 lg:space-y-0 justify-center items-center overflow-hidden">
      {/* Image container */}
      <div className="relative w-full md:w-1/2 mb-6 lg:mb-0">
        <div className="w-3/4 mx-auto lg:mr-0">
          <img src={userData.avatarUrl} alt="avatar" className="shadow" />
          <div className="flex flex-row justify-between mt-4">
            <div className="flex flex-row space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-90deg-up"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M4.854 1.146a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L4 2.707V12.5A2.5 2.5 0 0 0 6.5 15h8a.5.5 0 0 0 0-1h-8A1.5 1.5 0 0 1 5 12.5V2.707l3.146 3.147a.5.5 0 1 0 .708-.708l-4-4z"
                />
              </svg>
              <p className="font-mono">That's me & Sasha</p>
            </div>
          </div>
        </div>
      </div>
      {/* Text container */}
      <div className="w-full md:w-1/2 mx-auto text-center md:text-left lg:p-20 grid md:grid-cols-1 gap-11 space-y-20 md:-mt-20 pb-20 relative z-10">
        <RoughNotationGroup show={true}>
          <RainbowHighlight color={colors[0]}>
            <h1 className="text-4xl md:text-8xl font-bold text-[#151415] dark:text-[#FFFCF2] my-2">
              Engineer.
            </h1>
          </RainbowHighlight>
          <RainbowHighlight color={colors[1]}>
            <h1 className="text-4xl md:text-8xl font-bold text-[#151415] dark:text-[#FFFCF2] my-2">
              Business Analyst.
            </h1>
          </RainbowHighlight>
          <RainbowHighlight color={colors[2]}>
            <h1 className="text-4xl md:text-8xl font-bold text-[#151415] dark:text-[#FFFCF2] my-2">
              Developer.
            </h1>
          </RainbowHighlight>
          <RainbowHighlight color={colors[3]}>
            <h1 className="text-4xl md:text-8xl font-bold text-[#151415] dark:text-[#FFFCF2] my-2">
              Business Owner.
            </h1>
          </RainbowHighlight>
        </RoughNotationGroup>
      </div>
    </div>
  );
}
