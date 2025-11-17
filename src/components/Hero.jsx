import { useState } from "react";
import Background from "../../public/img/Homehero.png";
import SearchIcon from "../../public/img/Vector.png";

export default function Hero() {
    const [min, setMin] = useState(50000);
    const [max, setMax] = useState(1000000);

    const MIN_LIMIT = 50000;
    const MAX_LIMIT = 1000000;

    return (
        <section className="h-screen px-4 sm:px-8 md:px-12 py-16 md:py-24 relative overflow-hidden">

            {/* Background + Content */}
            <div
                className="
                    relative rounded-xl h-full inset-0 z-10
                    flex flex-col justify-center
                    px-4 sm:px-8 md:px-16 lg:px-20
                    text-white
                "
                style={{
                    backgroundImage: `url(${Background})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                {/* ------------------------------------
                    TEXT SECTION (Responsive)
                ------------------------------------ */}
                <div className="max-w-2xl">
                    <h1
                        className="
                            font-bold mt-8
                            text-4xl sm:text-5xl md:text-[60px]
                        "
                        style={{
                            fontFamily: "Manrope, sans-serif",
                            lineHeight: "100%",
                            letterSpacing: "2px",
                        }}
                    >
                        Luxury Shortlets,
                        <br /> Made Simple
                    </h1>

                    <p
                        className="
                            mt-6 sm:mt-8 md:mt-10 
                            text-lg sm:text-2xl md:text-[35px]
                        "
                        style={{
                            fontFamily: "Inter, sans-serif",
                            lineHeight: "120%",
                            letterSpacing: "3px",
                        }}
                    >
                        Redefining how you stay — premium comfort, modern design, and effortless booking
                    </p>
                </div>

                {/* ------------------------------------
                    SEARCH BOX — Responsive
                    (Centered on mobile, fixed on desktop)
                ------------------------------------ */}
                <div
                    className="
                        absolute 
                        w-[92%] sm:w-[360px] md:w-[420px] lg:w-[460px]

                        left-1/2 -translate-x-1/2         /* MOBILE center */
                        bottom-6 sm:bottom-10

                        md:right-12 md:left-auto md:translate-x-0   /* DESKTOP fix back to position */

                        bg-white/10 backdrop-blur-md border border-white/30
                        rounded-2xl p-6 space-y-5
                        shadow-[0_8px_32px_rgba(0,0,0,0.25)]
                    "
                >
                    {/* Location */}
                    <div>
                        <label className="text-xs text-white/90 mb-1 block font-medium">Location</label>
                        <select className="w-full bg-white/10 border border-white/40 text-white rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-white/50 outline-none">
                            <option className="text-black">Location</option>
                            <option className="text-black">Lagos</option>
                            <option className="text-black">Abuja</option>
                        </select>
                    </div>

                    {/* Dates */}
                    <div className="grid grid-cols-2 gap-3">
                        <div>
                            <label className="text-xs text-white/90 mb-1 block font-medium">Check In</label>
                            <select className="w-full bg-white/10 border border-white/40 text-white rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-white/50 outline-none">
                                <option className="text-black">Select date</option>
                            </select>
                        </div>

                        <div>
                            <label className="text-xs text-white/90 mb-1 block font-medium">Check Out</label>
                            <select className="w-full bg-white/10 border border-white/40 text-white rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-white/50 outline-none">
                                <option className="text-black">Select date</option>
                            </select>
                        </div>
                    </div>

                    {/* Price Range */}
                    <div>
                        <label className="text-xs text-white/90 mb-2 block font-medium">Price Range</label>

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

                            {/* Min Input */}
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

                            {/* Max Input */}
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

                    {/* Button */}
                    <button className="w-full bg-[#0A1A33]/90 hover:bg-[#132a54] transition text-white py-3 rounded-xl font-medium flex justify-between items-center text-sm shadow-lg">
                        Search
                        <img src={SearchIcon} alt="search" className="w-5" />
                    </button>
                </div>
            </div>

           
            <div className="
                absolute 
                left-1/2 lg:left-24 bottom-5 
                -translate-x-1/2 lg:translate-x-0
                z-10
            ">
                <button
                    className="text-white font-bold hover:bg-[#0B1C33CC] transition-all"
                    style={{
                        backgroundColor: "#0B1C33",
                        width: "300px",
                        height: "70px",
                        borderRadius: "60px",
                    }}
                >
                    Book Now
                </button>
            </div>
        </section>
    );
}

// import { useState } from "react";
// import Background from "../../public/img/Homehero.png";
// import SearchIcon from "../../public/img/Vector.png";

// export default function Hero() {
//     const [min, setMin] = useState(50000);
//     const [max, setMax] = useState(1000000);

//     const MIN_LIMIT = 50000;
//     const MAX_LIMIT = 1000000;

//     return (
//         <section className="h-screen px-4 sm:px-8 md:px-12 py-16 md:py-24 relative overflow-hidden">

//             <div
//                 className="
//                     relative rounded-xl h-full inset-0 z-10 flex flex-col justify-center
//                     px-4 sm:px-8 md:px-16 lg:px-20 text-white
//                 "
//                 style={{
//                     backgroundImage: `url(${Background})`,
//                     backgroundSize: "cover",
//                     backgroundPosition: "center",
//                 }}
//             >
//                 {/* TEXT SECTION */}
//                 <div className="max-w-2xl">
//                     <h1
//                         className="
//                             font-bold mt-8
//                             text-4xl sm:text-5xl md:text-[60px]
//                         "
//                         style={{
//                             fontFamily: "Manrope, sans-serif",
//                             lineHeight: "100%",
//                             letterSpacing: "2px",
//                         }}
//                     >
//                         Luxury Shortlets,
//                         <br /> Made Simple
//                     </h1>

//                     <p
//                         className="
//                             mt-6 sm:mt-8 md:mt-10 
//                             text-lg sm:text-2xl md:text-[35px]
//                         "
//                         style={{
//                             fontFamily: "Inter, sans-serif",
//                             lineHeight: "120%",
//                             letterSpacing: "3px",
//                         }}
//                     >
//                         Redefining how you stay — premium comfort, modern design, and
//                         effortless booking
//                     </p>
//                 </div>

//                 {/* SEARCH BOX */}
//                 <div
//                     className="
//                         absolute 
//                         w-[92%] sm:w-[360px] md:w-[420px] lg:w-[460px]

//                         left-1/2 -translate-x-1/2
//                         bottom-6 sm:bottom-10 md:right-12 md:left-auto md:translate-x-0
                        
//                         bg-white/10 backdrop-blur-md border border-white/30
//                         rounded-2xl p-6 space-y-5 shadow-[0_8px_32px_rgba(0,0,0,0.25)]
//                     "
//                 >
//                     {/* Location */}
//                     <div>
//                         <label className="text-xs text-white/90 mb-1 block font-medium">Location</label>
//                         <select className="w-full bg-white/10 border border-white/40 text-white rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-white/50 outline-none">
//                             <option className="text-black">Location</option>
//                             <option className="text-black">Lagos</option>
//                             <option className="text-black">Abuja</option>
//                         </select>
//                     </div>

//                     {/* Dates */}
//                     <div className="grid grid-cols-2 gap-3">
//                         <div>
//                             <label className="text-xs text-white/90 mb-1 block font-medium">Check In</label>
//                             <select className="w-full bg-white/10 border border-white/40 text-white rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-white/50 outline-none">
//                                 <option className="text-black">Select date</option>
//                             </select>
//                         </div>

//                         <div>
//                             <label className="text-xs text-white/90 mb-1 block font-medium">Check Out</label>
//                             <select className="w-full bg-white/10 border border-white/40 text-white rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-white/50 outline-none">
//                                 <option className="text-black">Select date</option>
//                             </select>
//                         </div>
//                     </div>

//                     {/* Price Range */}
//                     <div>
//                         <label className="text-xs text-white/90 mb-2 block font-medium">Price Range</label>

//                         <div className="flex justify-between text-[11px] text-white/85 mb-1 px-1">
//                             <span>Min</span>
//                             <span>Max</span>
//                         </div>

//                         <div className="relative h-10 mb-2">
//                             <div className="absolute w-full h-1.5 bg-white/30 top-4 rounded-full"></div>
                            
//                             <div
//                                 className="absolute h-1.5 bg-white/70 top-4 rounded-full"
//                                 style={{
//                                     left: `${((min - MIN_LIMIT) / (MAX_LIMIT - MIN_LIMIT)) * 100}%`,
//                                     right: `${100 - ((max - MIN_LIMIT) / (MAX_LIMIT - MIN_LIMIT)) * 100}%`,
//                                 }}
//                             ></div>

//                             {/* Ranges */}
//                             <input
//                                 type="range"
//                                 min={MIN_LIMIT}
//                                 max={MAX_LIMIT}
//                                 value={min}
//                                 onChange={(e) => {
//                                     const val = Number(e.target.value);
//                                     if (val < max) setMin(val);
//                                 }}
//                                 className="absolute w-full top-3 accent-white cursor-pointer"
//                             />

//                             <input
//                                 type="range"
//                                 min={MIN_LIMIT}
//                                 max={MAX_LIMIT}
//                                 value={max}
//                                 onChange={(e) => {
//                                     const val = Number(e.target.value);
//                                     if (val > min) setMax(val);
//                                 }}
//                                 className="absolute w-full top-3 accent-white cursor-pointer"
//                             />
//                         </div>

//                         <div className="flex justify-between text-xs text-white/90">
//                             <span>₦{min.toLocaleString()}</span>
//                             <span>₦{max.toLocaleString()}</span>
//                         </div>
//                     </div>

//                     {/* Button */}
//                     <button className="w-full bg-[#0A1A33]/90 hover:bg-[#132a54] transition text-white py-3 rounded-xl font-medium flex justify-between items-center text-sm shadow-lg">
//                         Search
//                         <img src={SearchIcon} alt="search" className="w-5" />
//                     </button>
//                 </div>
//             </div>
//             <div className="absolute left-1/2 -translate-x-1/2 md:left-24 md:translate-x-0 bottom-16 z-10">
//                 <button
//                     className="
//                         text-white font-bold hover:bg-[#0B1C33CC] transition-all
//                         w-[260px] sm:w-[300px] md:w-[380px]
//                         h-[60px] sm:h-[70px] md:h-[80px]
//                         rounded-full
//                     "
//                     style={{ backgroundColor: "#0B1C33" }}
//                 >
//                     Book Now
//                 </button>
//             </div>
//         </section>
//     );
// }
