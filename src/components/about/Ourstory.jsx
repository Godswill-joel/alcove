import React from "react";
import StoryImage from "../../../public/img/Story.png";

export default function OurStory() {
    return (
        <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 lg:px-16 py-16 md:py-13 bg-white">
            <div className="w-full flex justify-center md:justify-start">
                <img
                    src={StoryImage}
                    alt="Story image"
                    className="rounded-[22px] object-cover w-full md:w-screen h-[75vh]"
                />
            </div>

            
            <div className="w-screen h-dvh  flex flex-col justify-center md:pl-16 text-center md:text-left">
                <h2
                    className="text-4xl tracking-wide md:text-7xl lg:text-7xl font-bold text-[#333333] mb-6"
                    style={{ fontFamily: "Manrope" }}
                >
                    Our Story
                </h2>

                <p
                    className="text-lg md:text-5xl tracking-wider font-light text-gray-700 leading-relaxed mx-auto md:mx-0"
                    style={{ fontFamily: "Inter" }}
                >
                    Born from a passion for modern living, Alcove was created to make
                    finding premium shortlets simple, secure, and satisfying. We believe
                    every traveler deserves a space that feels both luxurious and familiar
                     whether for a night or a few months.
                </p>
            </div>

        </section>
    );
}
