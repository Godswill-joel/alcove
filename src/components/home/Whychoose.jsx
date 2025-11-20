import React from "react";
import { features } from "../../constants/data";

export default function WhyChoose() {
    return (
        <section className="py-20 px-4 sm:px-6 md:px-18 lg:px-20 bg-white">
            <div className="mx-auto">
                <div className="mb-8 md:mb-12 text-left">
                    <h2
                        className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide text-[#333333]"
                        style={{ fontFamily: "Manrope" }}
                    >
                        Why Choose Alcove
                    </h2>

                    <p
                        className="mt-1 tracking-wide text-lg sm:text-xl md:text-xl text-[#000000]"
                        style={{ fontFamily: "Inter" }}
                    >
                        Why guests love alcove
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 
    gap-y-10 gap-x-6 sm:gap-x-8 justify-items-center">
                    {features.map((feat) => (
                        <article
                            key={feat.id}
                            className="relative bg-gray-100 rounded-xl  p-6 sm:p-8 md:p-10  pl-20 sm:pl-24 md:pl-32 shadow-sm overflow-hidden flex flex-col justify-center w-full max-w-[600px] md:w-[598.16px] md:h-[206.82px]">
                            <div className="absolute left-4 sm:left-4 md:left-8 top-6 sm:top-6 md:top-8 md:translate-y-0  w-14 h-14 sm:w-16 sm:h-16 md:w-16 md:h-16 bg-white rounded-md shadow-md  flex items-center justify-center md:p-3 " >
                                <img
                                    src={feat.icon}
                                    alt={`${feat.title} icon`}
                                    className="w-10 h-10 sm:w-12 sm:h-12 md:w-12 md:h-12 object-contain"
                                />
                            </div>
                            <h3
                                className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 mb-2"
                                style={{ fontFamily: "Manrope" }}
                            >
                                {feat.title}
                            </h3>
                            <p
                                className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed"
                                style={{ fontFamily: "Inter" }}
                            >
                                {feat.description}
                            </p>
                        </article>
                    ))}
                </div>

            </div>
        </section>
    );
}

