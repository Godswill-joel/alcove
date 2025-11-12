import { useState } from "react";
import Background from "../../public/img/tinywow_Subtract_85900651.png";
import SearchIcon from "../../public/img/Vector.png";

export default function Hero() {
    const [min, setMin] = useState(50000);
    const [max, setMax] = useState(1000000);

    const MIN_LIMIT = 50000;
    const MAX_LIMIT = 1000000;

    return (
        <section className="h-screen py-24 px-12">

            {/* Content Wrapper */}
            <div className="relative h-full inset-0 z-10 flex flex-col justify-center px-6 sm:px-10 md:px-20 text-white"
                style={{
                    backgroundImage: `url(${Background})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                {/* Text Section */}
                <div className="max-w-2xl">
                    <h1
                        className="mt-10 font-bold"
                        style={{
                            fontFamily: "Manrope, sans-serif",
                            fontSize: "60px",
                            lineHeight: "100%",
                            letterSpacing: "2px",
                        }}
                    >
                        Luxury Shortlets,
                        <br /> Made Simple
                    </h1>

                    <p
                        className="mt-10 opacity-90"
                        style={{
                            fontFamily: "Inter, sans-serif",
                            fontSize: "35px",
                            lineHeight: "120%",
                            letterSpacing: "3px",
                        }}
                    >
                        Redefining how you stay — premium comfort, modern design, and
                        effortless booking
                    </p>
                </div>

                {/* Glass Search Box */}
                <div
                    className="
            absolute h-50px right-4 sm:right-10 md:right-16 lg:right-24 lg:bottom-8
            w-[92%] sm:w-[380px] md:w-[450px]
            bg-white/15 backdrop-blur-2xl border border-white/30 
            shadow-[0_8px_32px_rgba(0,0,0,0.25)]
            rounded-2xl p-6 space-y-5
          "
                >
                    {/* Location */}
                    <div>
                        <label className="text-xs text-white/90 mb-1 block font-medium">
                            Location
                        </label>
                        <select className="w-full bg-white/10 border border-white/40 text-white/95 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-white/50">
                            <option className="text-black"> Location</option>
                            <option className="text-black">Lagos</option>
                            <option className="text-black">Abuja</option>
                        </select>
                    </div>

                    {/* Dates */}
                    <div className="grid grid-cols-2 gap-3">
                        <div>
                            <label className="text-xs text-white/90 mb-1 block font-medium">
                                Check In
                            </label>
                            <select className="w-full bg-white/10 border border-white/40 text-white/95 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-white/50">
                                <option className="text-black">Select date</option>
                            </select>
                        </div>

                        <div>
                            <label className="text-xs text-white/90 mb-1 block font-medium">
                                Check Out
                            </label>
                            <select className="w-full bg-white/10 border border-white/40 text-white/95 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-white/50">
                                <option className="text-black">Select date</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label className="text-xs text-white/90 mb-2 block font-medium">
                            Price Range
                        </label>
                        <div className="flex justify-between text-[11px] text-white/85 mb-1 px-1">
                            <span>Min</span>
                            <span>Max</span>
                        </div>

                        <div className="relative h-10 mb-2">
                            <div className="absolute w-full h-1.5 bg-white/30 top-4 rounded-full"></div>
                            <div
                                className="absolute h-1.5 bg-white/70 top-4 rounded-full"
                                style={{
                                    left: `${((min - MIN_LIMIT) / (MAX_LIMIT - MIN_LIMIT)) * 100}%`,
                                    right: `${100 - ((max - MIN_LIMIT) / (MAX_LIMIT - MIN_LIMIT)) * 100}%`,
                                }}
                            ></div>

                          
                            <input
                                type="range"
                                min={MIN_LIMIT}
                                max={MAX_LIMIT}
                                value={min}
                                onChange={(e) => {
                                    const val = Number(e.target.value);
                                    if (val < max) setMin(val);
                                }}
                                className="absolute w-full top-3 accent-white cursor-pointer"
                            />

                            <input
                                type="range"
                                min={MIN_LIMIT}
                                max={MAX_LIMIT}
                                value={max}
                                onChange={(e) => {
                                    const val = Number(e.target.value);
                                    if (val > min) setMax(val);
                                }}
                                className="absolute w-full top-3 accent-white cursor-pointer"
                            />
                        </div>

                        <div className="flex justify-between text-xs text-white/90">
                            <span>₦{min.toLocaleString()}</span>
                            <span>₦{max.toLocaleString()}</span>
                        </div>
                    </div>

            
                    <button className="w-full bg-[#0A1A33]/90 hover:bg-[#132a54] transition text-white py-3 rounded-xl font-medium flex justify-between items-center gap-2 shadow-lg text-sm">
                        Search
                        <img src={SearchIcon} alt="search" className="w-5" />
                    </button>
                </div>
            </div>

            <div className="absolute left-24 bottom-3 z-10">
                <button
                    className="text-white font-bold hover:bg-[#0B1C33CC] transition-all"
                    style={{
                        backgroundColor: "#0B1C33",
                        width: "380px",
                        height: "80px",
                        borderRadius: "60px",
                    }}
                >
                    Book Now
                </button>
            </div>
        </section>
    );
}
