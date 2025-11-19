import React, { useState, useEffect } from "react";
import backgroundImg from "../../public/img/Callto.webp";
import backgroundImgMobile from "../../public/img/calltomobile.webp";
import { Link } from "react-router-dom";

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
                loading="lazy"
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
                    <p className="text-lg md:text-2xl tracking-wider opacity-90 mb-6  max-w-sm" style={{ fontFamily: "Inter" }}>
                        {subtitle}
                    </p>
                </div>
            </div>

            <div className="absolute left-1/2 transform -translate-x-1/2 bottom-12 sm:left-16 sm:translate-x-0 sm:bottom-14 md:left-24 md:bottom-16 z-10 ">

                <Link
                    to="/apartments"
                    onClick={onButtonClick}
                    className="inline-flex items-center justify-center text-white font-bold bg-[#0B1C33] hover:bg-[#0B1C33CC] transition-all w-[300px] h-[70px] rounded-[60px]"
                >
                    {buttonText}
                </Link>
            </div>
        </section>
    );
}
