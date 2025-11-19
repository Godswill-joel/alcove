import React from "react";
import { values } from "../../constants/data";
import ValuesImage from "../../../public/img/values.webp";

export default function OurValues() {

  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 lg:px-20 py-16 bg-white">
      <div className="w-full md:w-1/2 flex justify-center md:justify-start mb-10 md:mb-0">
        <img
          src={ValuesImage}
          alt="Interior showing Alcove values"
          className="rounded-[22px] object-cover w-full md:w-[95%] lg:w-[90%] h-[70vh] md:h-[75vh]"
        />
      </div>

      <div className="w-full h-[70vh] md:w-1/2 flex flex-col justify-center text-center md:text-left">
        <h2
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#333333] mb-8"
          style={{ fontFamily: "Manrope" }}
        >
          Our Values
        </h2>

        <ul className="space-y-6">
          {values.map((value, index) => (
            <li key={index}>
              <p
                className="text-lg md:text-5xl lg:text-4xl text-gray-700 leading-relaxed font-light"
                style={{ fontFamily: "Inter" }}
              >
                <span className="font-semibold text-3xl text-black tracking-wider ">{value.title}:</span>{" "}
                {value.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
