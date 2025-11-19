import React from "react";

export default function ContactHero() {
    return (
        <section className="relative h-[90vh] sm:h-screen py-20 px-4 sm:px-8 md:px-12">
            <div className="relative rounded-xl inset-0 h-full z-10 flex flex-col justify-center px-4 sm:px-10 md:px-10">
                <div
                    className="absolute inset-0 bg-cover bg-center hidden md:block"
                    style={{
                        backgroundImage: 'url("/img/contacthero.png")',
                    }}
                />

                <div
                    className="absolute inset-0 bg-cover bg-center md:hidden"
                    style={{
                        backgroundImage: 'url("/img/contactheromobile.jpg")',
                    }}
                />
                <div className="relative z-10 max-w-full sm:max-w-[500px] flex flex-col justify-center h-full px-1 sm:px-8 md:px-20 text-white">
                    <h2
                        className="text-2xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-wide mb-4"
                        style={{ fontFamily: "Manrope" }}
                    >
                        We’re Here to Help
                    </h2>

                    <p
                        className="text-sm sm:text-lg md:text-2xl tracking-wider opacity-90 mb-6 max-w-[240px] sm:max-w-[350px]"
                        style={{ fontFamily: "Inter" }}
                    >
                        Questions, bookings, partnerships reach out anytime.
                    </p>
                </div>

            </div>

            <div
                className="
    absolute 
    left-1/2 -translate-x-1/2 bottom-8
    sm:left-16 sm:translate-x-0 sm:bottom-14
    md:left-24 md:bottom-16
    z-10
  "
            >
                <button
                    className="
      flex items-center justify-center gap-3
      px-10 py-4
      text-white font-semibold
      text-lg sm:text-xl md:text-lg  
      transition-all
      hover:bg-[#0B1C33CC]
    "
                    style={{
                        backgroundColor: "#0B1C33",
                        width: "300px",    
                        height: "70px",   
                        borderRadius: "60px",
                    }}
                >
                    <img
                        src="/Logo/Whatsapp.png"
                        alt="contact icon"
                        className="w-8 h-8 sm:w-10 sm:h-10"
                    />
                    <span className="text-xl sm:text-2xl">Start chat</span>
                </button>
            </div>

        </section>
    );
}
