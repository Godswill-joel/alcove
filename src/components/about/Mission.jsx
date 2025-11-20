import React from "react";
import StoryImage from "../../../public/img/Mission.webp";

export default function OurMission() {
    return (
        <section className="px-6 md:px-16 lg:px-24 py-16">
            <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div className="order-2 md:order-1">
                    <div className=" md:pr-10">
                        <h3
                            className="text-4xl md:text-7xl lg:text-8xl font-bold text-[#222] mb-6"
                            style={{ fontFamily: "Manrope" }}
                        >
                            Mission
                        </h3>
                        <p
                            className="text-lg font-light tracking-wider  md:text-3xl text-gray-700 mb-10 leading-relaxed"
                            style={{ fontFamily: "Inter, sans-serif" }}
                        >
                            To provide exceptional shortlet experiences through verified
                            apartments, seamless booking, and trusted service
                        </p>
                        <h3
                            className="text-4xl md:text-7xl lg:text-8xl font-bold text-[#222] mb-6 mt-4"
                            style={{ fontFamily: "Manrope, sans-serif" }}
                        >
                            Vision
                        </h3>
                        <p
                            className="text-lg font-light tracking-wider md:text-3xl text-gray-700 mb-6 leading-relaxed"
                            style={{ fontFamily: "Inter, sans-serif" }}
                        >
                            To be Africa’s most reliable platform for modern, comfortable
                            shortlet living
                        </p>
                    </div>
                </div>
                <div className="order-1 md:order-2 w-full flex justify-center md:justify-end">

                    <div className="overflow-hidden rounded-2xl ">
                        <img
                            src={StoryImage}
                            alt="Our story"
                            loading="lazy"
                            className="object-cover w-full h-[75vh]"
                            style={{ display: "block" }}
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}
