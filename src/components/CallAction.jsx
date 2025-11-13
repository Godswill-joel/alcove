import React from "react";
import backgroundImg from "../../public/img/Callto.png";

export default function CallToAction({
    backgroundImage = backgroundImg,
    title = "Ready For Your Next Stay?",
    subtitle = "Book A Premium Shortlet With Alcove Today",
    buttonText = "Book Now",
    onButtonClick,
}) {
    return (
        <section className="relative h-screen py-24 px-12">
            <div
                className="relative inset-0 h-full z-10 flex flex-col justify-center px-6 sm:px-10 md:px-20"
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <div className="relative z-10 flex flex-col justify-center h-full px-6 sm:px-12 md:px-20 text-white max-w-xl">
                    <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4"
                        style={{
                            fontFamily: "Manrope"
                        }}>
                        {title}
                    </h2>
                    <p className="text-lg md:text-xl opacity-90 mb-6" style={{
                        fontFamily: "Inter"
                    }}>
                        {subtitle}
                    </p>
                </div>
            </div>


            <div className="absolute left-24  bottom-16 z-10">
                <button
                    onClick={onButtonClick}
                    className="px-10 py-4  hover:bg-[#0B1C33CC] text-white font-semibold text-lg rounded-full transition-all"
                    style={{
                        backgroundColor: "#0B1C33",
                        width: "380px",
                        height: "80px",
                        borderRadius: "60px",
                    }}
                >
                    {buttonText}
                </button>
            </div>
        </section>
    );
}
