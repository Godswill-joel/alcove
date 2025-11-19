import React, { useState, useEffect } from "react";
import backgroundImg from "../../public/img/Callto.png";
import backgroundImgMobile from "../../public/img/calltomobile.jpg";

export default function CallToAction({
    backgroundImage = backgroundImg,
    title = "Ready For Your Next Stay?",
    subtitle = "Book A Premium Shortlet With Alcove Today",
    buttonText = "Book Now",
    onButtonClick,
}) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const update = () => setIsMobile(window.innerWidth < 768);
        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, []);

    const bgImage = isMobile ? backgroundImgMobile : backgroundImage;

    return (
        <section className="relative h-screen py-24 px-12">
            <div
                className="
                    absolute inset-0 
                    rounded-xl
                    bg-cover bg-center py-24 px-12
                "
                style={{ backgroundImage: `url(${bgImage})` }}
            />
            <div
                className="relative rounded-xl
                    inset-0 h-full z-10 flex flex-col justify-center px-6 sm:px-10 md:px-10">
                <div className="relative z-10 flex flex-col justify-center h-full text-white px-6 sm:px-12 md:px-20">
                    <h2
                        className="
                            text-4xl 
                            tracking-wide 
                            md:text-5xl 
                            font-bold 
                            leading-tight 
                            mb-4 
                            max-w-3xl
                        "
                        style={{ fontFamily: "Manrope" }}
                    >
                        {title}
                    </h2>

                    <p
                        className="
                            text-lg 
                            md:text-2xl 
                            tracking-wider 
                            opacity-90 
                            mb-6 
                            max-w-sm
                        "
                        style={{ fontFamily: "Inter" }}
                    >
                        {subtitle}
                    </p>
                </div>
            </div>

            <div className="absolute left-1/2 transform -translate-x-1/2 bottom-12 sm:left-16 sm:translate-x-0 sm:bottom-14 md:left-24 md:bottom-16 z-10 ">
                <button onClick={onButtonClick}
                    className=" hover:bg-[#0B1C33CC] text-white font-semibold text-lg md:text-xl rounded-full transition-all"
                    style={{
                        backgroundColor: "#0B1C33",
                        width: isMobile ? "260px" : "380px",
                        height: isMobile ? "60px" : "80px",
                        borderRadius: "60px",
                    }}
                >
                    {buttonText}
                </button>
            </div>
        </section>
    );
}
