import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import Bedroom from "../../../public/assets/Bedroom.png";
import Bathroom from "../../../public/assets/Bathroom.png";
import Guests from "../../../public/assets/Guests.png";
import Location from "../../../public/assets/Location.png";
import Available from "../../../public/assets/Available.png";
import { apartments } from "../../constants/data";

const FILTERS = [
  { id: "one", label: "One Bedroom", type: "1" },
  { id: "studio", label: "Studio Room", type: "studio" },
  { id: "two", label: "Two Bedroom", type: "2" },
  { id: "three", label: "Three Bedroom", type: "3" },
];

const Features = ({ limit }) => {
  const [activeFilter, setActiveFilter] = useState("one");

  // Filter apartments based on selected category
  const filteredApts = apartments.filter((apt) => {
    const selected = FILTERS.find((f) => f.id === activeFilter);

    if (!selected) return true;

    if (selected.type === "studio") return apt.type === "studio";

    return apt.beds?.toString() === selected.type;
  });

  // Limit if needed
  const displayedApts = limit ? filteredApts.slice(0, limit) : filteredApts;

  return (
    <section className="py-10 px-4 md:px-12 bg-white">
     
      <div className="flex items-center gap-4 mb-10 overflow-x-auto">
        {FILTERS.map((filter) => (
          <button
            key={filter.id}
            onClick={() => setActiveFilter(filter.id)}
            className={`px-5 py-2 rounded-2xl border text-sm font-medium transition-all
              ${
                activeFilter === filter.id
                  ? "bg-[#0B1C33] text-white border-[#0B1C33]"
                  : "text-[#0B1C33] border-[#0B1C33]"
              }
            `}
            style={{ fontFamily: "Manrope" }}
          >
            {filter.label}
          </button>
        ))}
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">

        {displayedApts.length === 0 && (
          <p className="text-center text-lg text-gray-500 col-span-full">
            No apartments available in this category.
          </p>
        )}

        {displayedApts.map((apt) => (
          <div
            key={apt.id}
            className="bg-[#F5F5F6] rounded-2xl shadow-sm transition-all duration-300 overflow-hidden flex flex-col justify-between mx-auto"
            style={{
              width: "537.16px",
              height: "522.82px",
            }}
          >
            <div>
              {/* Image + Availability */}
              <div className="relative">
                <img
                  src={apt.image}
                  alt={apt.title}
                  className="w-full h-[260px] object-cover rounded-t-2xl"
                />

                {apt.available && (
                  <span className="absolute right-3 text-[#000000] text-sm font-semibold flex items-center gap-1 px-2 py-3 rounded-lg">
                    Available
                    <img src={Available} alt="available icon" className="w-4 h-4" />
                  </span>
                )}
              </div>

              <div className="px-7 py-2 flex flex-col justify-between h-[calc(532.82px-260px)]">
                <div>
                  <h3 className="text-lg font-semibold text-[#0B1C33]">
                    {apt.title}
                  </h3>

                  <div className="flex items-center gap-2 mt-8 text-[#000]">
                    <img src={Location} alt="location icon" className="w-4 h-4" />
                    <p className="text-sm">{apt.location}</p>
                  </div>

                  <div className="flex items-center justify-between mt-12 text-[#000] text-sm">
                    <div className="flex items-center gap-1">
                      <img src={Bedroom} className="w-4 h-4" alt="bedroom" />
                      <span>{apt.beds} Bedroom</span>
                    </div>

                    <div className="flex items-center gap-1">
                      <img src={Bathroom} className="w-4 h-4" alt="bathroom" />
                      <span>{apt.baths} Bathroom</span>
                    </div>

                    <div className="flex items-center gap-1">
                      <img src={Guests} className="w-4 h-4" alt="guests" />
                      <span>{apt.guests} Guests</span>
                    </div>
                  </div>
                </div>

                <p className="text-xl font-bold text-[#0B1C33] mt-4 mb-8">
                  {apt.price}
                </p>
              </div>
            </div>
          </div>
        ))}

        {/* Bottom Right Arrow */}
        <div className="flex justify-end px-5 pb-5">
          <button className="bg-[#0B1C33] text-white p-3 rounded-full hover:bg-[#1B2C43] transition">
            <ArrowUpRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;

// import React from "react";
// import { Link } from "react-router-dom";
// import { ArrowUpRight } from "lucide-react";

// import Bedroom from "../../../public/assets/Bedroom.png";
// import Bathroom from "../../../public/assets/Bathroom.png";
// import Guests from "../../../public/assets/Guests.png";
// import Location from "../../../public/assets/Location.png";
// import Available from "../../../public/assets/Available.png";

// import { apartments } from "../../constants/data";

// const Features = ({ limit }) => {
//     const displayedApts = limit ? apartments.slice(0, limit) : apartments;

//     return (
//         <section className="py-10 px-4 md:px-12 bg-white">
//             {/* Title */}
//             <div className="flex w-full px-7 items-center justify-between mb-8">
//                 <div>
//                     <h2
//                         className="text-5xl tracking-wide font-bold text-[#0B1C33]"
//                         style={{ fontFamily: "Manrope" }}
//                     >
//                         Featured Apartments
//                     </h2>

//                     <p
//                         className="text-[#000000] text-xl tracking-wide mt-1"
//                         style={{ fontFamily: "inter" }}
//                     >
//                         Explore Our Premium Spaces
//                     </p>
//                 </div>

//                 <Link
//                     to="/apartments"
//                     className="text-[#0B1C33] text-5xl font-medium hover:underline"
//                     style={{ fontFamily: "Manrope" }}
//                 >
//                     See all
//                 </Link>
//             </div>

//             {/* Grid */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
//                 {displayedApts.map((apt) => (
//                     <div
//                         key={apt.id}
//                         className="bg-[#F5F5F6] rounded-2xl shadow-sm transition-all duration-300 overflow-hidden flex flex-col justify-between mx-auto relative"
//                         style={{
//                             width: "537.16px",
//                             height: "522.82px",
//                         }}
//                     >
//                         {/* Apartment Image */}
//                         <div>
//                             <div className="relative">
//                                 <img
//                                     src={apt.image}
//                                     alt={apt.title}
//                                     className="w-full h-[260px] object-cover rounded-t-2xl"
//                                 />

//                                 {apt.available && (
//                                     <span className="absolute right-3 top-3 text-[#000000] text-sm font-semibold flex items-center gap-1 px-2 py-1 rounded-lg bg-white/80 backdrop-blur-sm">
//                                         Available
//                                         <img src={Available} alt="available icon" className="w-4 h-4" />
//                                     </span>
//                                 )}
//                             </div>

//                             {/* Content */}
//                             <div className="px-7 py-2 flex flex-col justify-between h-[calc(522.82px-260px)] w-full">
//                                 <div>
//                                     <h3 className="text-lg font-semibold text-[#0B1C33]">
//                                         {apt.title}
//                                     </h3>

//                                     <div className="flex items-center gap-2 mt-8 text-[#000]">
//                                         <img src={Location} alt="location icon" className="w-4 h-4" />
//                                         <p className="text-sm">{apt.location}</p>
//                                     </div>

//                                     <div className="flex items-center justify-between mt-12 text-[#000] text-sm">
//                                         <div className="flex items-center gap-1">
//                                             <img src={Bedroom} className="w-4 h-4" alt="bedroom" />
//                                             <span>{apt.beds} Bedroom</span>
//                                         </div>

//                                         <div className="flex items-center gap-1">
//                                             <img src={Bathroom} className="w-4 h-4" alt="bathroom" />
//                                             <span>{apt.baths} Bathroom</span>
//                                         </div>

//                                         <div className="flex items-center gap-1">
//                                             <img src={Guests} className="w-4 h-4" alt="guests" />
//                                             <span>{apt.guests} Guests</span>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 <p className="text-xl font-bold text-[#0B1C33] mt-4">
//                                     {apt.price}
//                                 </p>
//                             </div>
//                         </div>

//                         {/* Bottom Arrow (INSIDE each card) */}
//                         <div className="absolute bottom-5 right-5">
//                             <Link>
//                                 <button className="bg-[#0B1C33] text-white p-3 rounded-full hover:bg-[#1B2C43] transition">
//                                     <ArrowUpRight size={20} />
//                                 </button>
//                             </Link>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </section>
//     );
// };

// export default Features;
