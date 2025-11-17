import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";

import Bedroom from "../../../public/assets/Bedroom.png";
import Bathroom from "../../../public/assets/Bathroom.png";
import Guests from "../../../public/assets/Guests.png";
import Location from "../../../public/assets/Location.png";
import Available from "../../../public/assets/Available.png";
import { apartment } from "../../constants/data";
import { Link } from "react-router-dom";

const FILTERS = [
  { id: "one", label: "One Bedroom", type: "1" },
  { id: "studio", label: "Studio Room", type: "studio" },
  { id: "two", label: "Two Bedroom", type: "2" },
  { id: "three", label: "Three Bedroom", type: "3" },
];

export default function Features() {
  const [activeFilter, setActiveFilter] = useState("one");

  const filteredApts = apartment.filter((apt) => {
    const selected = FILTERS.find((f) => f.id === activeFilter);
    if (!selected) return true;

    if (selected.type === "studio") return apt.type === "studio";
    return apt.beds?.toString() === selected.type;
  });

  const displayedApts = filteredApts.slice(0, 6);

  return (
    <section className="py-10 px-4 sm:px-6 md:px-12 bg-white">

      <div className="flex items-center gap-4 mb-10 overflow-x-auto no-scrollbar pb-2">
        {FILTERS.map((filter) => (
          <button
            key={filter.id}
            onClick={() => setActiveFilter(filter.id)}
            className={`
              px-5 py-2 whitespace-nowrap rounded-2xl border text-sm font-medium transition-all
              ${activeFilter === filter.id
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

      <div className="
        grid 
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3 
        gap-6
      ">

        {displayedApts.map((apt) => (
          <div
            key={apt.id}
            className="bg-[#F5F5F6] rounded-2xl shadow-sm transition-all duration-300 relative flex flex-col w-full md:w-[537.16px] md:h-[522.82px]">
            <div className="relative">
              <img
                src={apt.image}
                alt={apt.title}
                className="
                  w-full 
                  h-[230px] sm:h-[250px] md:h-[260px]
                  object-cover 
                  rounded-t-2xl
                "
              />

              {apt.available && (
                <span className="
                  absolute right-3  backdrop-blur-sm 
                  text-black text-xs sm:text-sm font-semibold 
                  flex items-center gap-1 px-2 py-5 rounded-lg
                ">
                  Available
                  <img src={Available} className="w-4 h-4" alt="available" />
                </span>
              )}
            </div>

            {/* CONTENT */}
            <div className="px-5 sm:px-6 md:px-7 py-3 flex flex-col justify-between flex-grow">

              <div>
                <h3 className="text-lg font-semibold text-[#0B1C33]">
                  {apt.title}
                </h3>

                <div className="flex items-center gap-2 mt-5 sm:mt-6 md:mt-8 text-black">
                  <img src={Location} className="w-4 h-4" />
                  <p className="text-sm">{apt.location}</p>
                </div>

                {/* AMENITIES ROW */}
                <div className="
                  flex items-center justify-between 
                  mt-8 sm:mt-10 md:mt-12 
                  text-black text-sm
                ">
                  <div className="flex items-center gap-1">
                    <img src={Bedroom} className="w-4 h-4" />
                    <span>{apt.beds} Bedroom</span>
                  </div>

                  <div className="flex items-center gap-1">
                    <img src={Bathroom} className="w-4 h-4" />
                    <span>{apt.baths} Bathroom</span>
                  </div>

                  <div className="flex items-center gap-1">
                    <img src={Guests} className="w-4 h-4" />
                    <span>{apt.guests} Guests</span>
                  </div>
                </div>
              </div>

              <p className="text-lg sm:text-xl font-bold text-[#0B1C33] mt-3 sm:mt-4">
                {apt.price}
              </p>
            </div>
            <Link
              to="/details"
              className="
                absolute
                bottom-2 right-2
                sm:bottom-5 sm:right-5
                bg-[#0B1C33] text-white p-3 rounded-full 
                hover:bg-[#1B2C43] transition
              "
            >
              <ArrowUpRight size={20} />
            </Link>

          </div>
        ))}

      </div>
    </section>
  );
}

// import React, { useState } from "react";
// import { ArrowUpRight } from "lucide-react";

// import Bedroom from "../../../public/assets/Bedroom.png";
// import Bathroom from "../../../public/assets/Bathroom.png";
// import Guests from "../../../public/assets/Guests.png";
// import Location from "../../../public/assets/Location.png";
// import Available from "../../../public/assets/Available.png";
// import { apartment } from "../../constants/data";
// import { Link } from "react-router-dom";

// const FILTERS = [
//   { id: "one", label: "One Bedroom", type: "1" },
//   { id: "studio", label: "Studio Room", type: "studio" },
//   { id: "two", label: "Two Bedroom", type: "2" },
//   { id: "three", label: "Three Bedroom", type: "3" },
// ];

// export default function Features() {
//   const [activeFilter, setActiveFilter] = useState("one");

//   const filteredApts = apartment.filter((apt) => {
//     const selected = FILTERS.find((f) => f.id === activeFilter);
//     if (!selected) return true;

//     if (selected.type === "studio") return apt.type === "studio";
//     return apt.beds?.toString() === selected.type;
//   });

//   const displayedApts = filteredApts.slice(0, 6);

//   return (
//     <section className="py-10 px-4 md:px-12 bg-white">

//       <div className="flex items-center gap-4 mb-10 overflow-x-auto">
//         {FILTERS.map((filter) => (
//           <button
//             key={filter.id}
//             onClick={() => setActiveFilter(filter.id)}
//             className={`
//               px-5 py-2 rounded-2xl border text-sm font-medium transition-all
//               ${activeFilter === filter.id
//                 ? "bg-[#0B1C33] text-white border-[#0B1C33]"
//                 : "text-[#0B1C33] border-[#0B1C33]"
//               }
//             `}
//             style={{ fontFamily: "Manrope" }}
//           >
//             {filter.label}
//           </button>
//         ))}
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

//         {displayedApts.map((apt) => (
//           <div
//             key={apt.id}
//             className="
//               bg-[#F5F5F6] rounded-2xl shadow-sm 
//               transition-all duration-300 relative flex flex-col
//               mx-auto w-full
//               md:w-[537.16px] md:h-[522.82px]     /* desktop locked */
//             "
//           >


//             <div className="relative">
//               <img
//                 src={apt.image}
//                 alt={apt.title}
//                 className="w-full h-[260px] object-cover rounded-t-2xl"
//               />

//               {apt.available && (
//                 <span className="absolute right-3 bg-white/80 backdrop-blur-sm 
//                                  text-black text-sm font-semibold flex items-center 
//                                  gap-1 px-2 py-1 rounded-lg">
//                   Available
//                   <img src={Available} className="w-4 h-4" alt="available" />
//                 </span>
//               )}
//             </div>

//             <div className="px-7 py-2 flex flex-col justify-between flex-grow">

//               <div>
//                 <h3 className="text-lg font-semibold text-[#0B1C33]">
//                   {apt.title}
//                 </h3>

//                 <div className="flex items-center gap-2 mt-8 text-black">
//                   <img src={Location} className="w-4 h-4" />
//                   <p className="text-sm">{apt.location}</p>
//                 </div>

//                 <div className="flex items-center justify-between mt-12 text-black text-sm">

//                   <div className="flex items-center gap-1">
//                     <img src={Bedroom} className="w-4 h-4" />
//                     <span>{apt.beds} Bedroom</span>
//                   </div>

//                   <div className="flex items-center gap-1">
//                     <img src={Bathroom} className="w-4 h-4" />
//                     <span>{apt.baths} Bathroom</span>
//                   </div>

//                   <div className="flex items-center gap-1">
//                     <img src={Guests} className="w-4 h-4" />
//                     <span>{apt.guests} Guests</span>
//                   </div>

//                 </div>
//               </div>

//               <p className="text-xl font-bold text-[#0B1C33] mt-4">
//                 {apt.price}
//               </p>
//             </div>


//             <Link to="/details" className="absolute bottom-5 right-5 bg-[#0B1C33] text-white p-3 rounded-full hover:bg-[#1B2C43] transition">
//               <ArrowUpRight size={20} />
//             </Link>

//           </div>
//         ))}

//       </div>
//     </section>
//   );
// }
