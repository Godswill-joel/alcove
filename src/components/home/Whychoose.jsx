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

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-8 justify-items-center">
                    {features.map((feat) => (
                        <article
                            key={feat.id}
                            className="relative bg-gray-100 rounded-xl p-6 sm:p-8 pl-16 sm:pl-20 md:pl-34 shadow-sm overflow-visible flex flex-col justify-center w-full max-w-[600px] md:w-[598.16px] md:h-[206.82px]"
                        >
                            {/* Icon Bubble */}
                            <div className="absolute left-3 sm:left-1 -top-8 sm:-top-6 md:top-1/2 md:-translate-y-1/2 w-14 h-14 sm:w-16 sm:h-16 rounded-md bg-white flex items-center justify-center shadow-md">
                                <img
                                    src={feat.icon}
                                    alt={`${feat.title} icon`}
                                    className="w-10 h-10 sm:w-14 sm:h-14 object-cover"
                                />
                            </div>

                            {/* Content */}
                            <h3
                                className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 mb-2"
                                style={{ fontFamily: "Manrope" }}
                            >
                                {feat.title}
                            </h3>

                            <p
                                className="text-base sm:text-lg md:text-2xl text-gray-600 leading-relaxed"
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

// import React from "react";
// import { features } from "../../constants/data";


// export default function WhyChoose() {
//     return (
//         <section className="py-20 px-6 md:px-18 lg:px-20 bg-white">
//             <div className="mx-auto ">
//                 <div className="mb-8 md:mb-12 text-left">
//                     <h2 className="text-5xl md:text-5xl font-bold tracking-wide  text-[#333333]"
//                         style={{
//                             fontFamily: "Manrope",
//                         }}>
//                         Why Choose Alcove
//                     </h2>
//                     <p className="mt-1  tracking-wide   text-xl  md:text-xl text-[#000000]" style={{
//                         fontFamily: "Inter",
//                     }}>
//                         Why guests love alcove
//                     </p>
//                 </div>

//                 {/* Grid */}
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-8 justify-items-center">
//                         {features.map((feat) => (
//                             <article
//                                 key={feat.id}
//                                 className="relative bg-gray-100 rounded-xl p-8 pl-20 md:pl-34 shadow-sm overflow-visible flex flex-col justify-center"
//                                 style={{
//                                     width: "598.16px",
//                                     height: "206.82px",
//                                 }}
//                             >

//                                 {/* Icon Bubble */}
//                                 <div className="absolute left-1   -translate-y-1/2 w-16 h-16 rounded-md bg-white flex items-center justify-center shadow-md">
//                                     <img
//                                         src={feat.icon}
//                                         alt={`${feat.title} icon`}
//                                         className="w-14 h-14 object-cover"
//                                     />
//                                 </div>

//                                 {/* Content */}
//                                 <h3 className="text-lg md:text-3xl font-semibold text-gray-900 mb-2" style={{
//                                     fontFamily: "Manrope",
//                                 }}>
//                                     {feat.title}
//                                 </h3>

//                                 <p className="text-xl md:text-2xl text-gray-600 leading-relaxed" style={{
//                                     fontFamily: "Inter",
//                                 }}>
//                                     {feat.description}
//                                 </p>
//                             </article>
//                         ))}
//                     </div>
//             </div>
//         </section>
//     );
// }
