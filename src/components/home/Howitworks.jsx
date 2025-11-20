import React from "react";
import { steps } from "../../constants/data";

export default function HowItWorks() {
    return (
        <section className="py-24 px-6 md:px-16 bg-white">
            <div className="mb-16">
                <h2
                    className="text-4xl md:text-5xl font-bold text-gray-900"
                    style={{ fontFamily: "Manrope, sans-serif" }}
                >
                    How It Works
                </h2>

                <p
                    className="mt-3 text-lg md:text-xl text-gray-600"
                    style={{ fontFamily: "Inter, sans-serif" }}
                >
                    Booking Made Easy
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
                {steps.map((step) => (
                    <div
                        key={step.id}
                        className="
                relative bg-[#F8F8F9] rounded-2xl shadow-sm 
                p-6 sm:p-8 md:p-12 
                transition-all duration-300 
                h-[270px] md:h-[420px]
                flex flex-col
            "
                    >
                        <div className="
                absolute 
                bottom-1 sm:bottom-6 md:bottom-8 
                left-2 sm:left-3 md:left-1 
                bg-[#0A1A33] text-white 
                text-lg sm:text-xl md:text-2xl 
                font-semibold 
                w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 
                rounded-full flex items-center justify-center
            ">
                            {step.id}
                        </div>
                        <h3
                            className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4"
                            style={{ fontFamily: "Manrope, sans-serif" }}
                        >
                            {step.title}
                        </h3>
                        <p
                            className="text-gray-600 
                    text-base sm:text-lg md:text-xl 
                    tracking-wide leading-relaxed"
                            style={{ fontFamily: "Inter" }}
                        >
                            {step.description}
                        </p>
                    </div>
                ))}
            </div>

        </section>
    );
}


