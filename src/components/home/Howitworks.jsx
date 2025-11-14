import React from "react";
import { steps } from "../../constants/data";

export default function HowItWorks() {
    return (
        <section className="py-24 px-6 md:px-16 bg-white">
            {/* Header */}
            <div className="mb-16">
                <h2
                    className="text-4xl md:text-5xl font-bold text-gray-900"
                    style={{ fontFamily: "Manrope, sans-serif" }}
                >
                    How It Works
                </h2>

                <p
                    className="mt-3 text-lg md:text-xl text-gray-600"
                    style={{ fontFamily: "Inter, sans-serif" }}
                >
                    Booking Made Easy
                </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {steps.map((step) => (
                    <div
                        key={step.id}
                        className="
                            relative bg-[#F8F8F9] rounded-2xl shadow-sm p-8 md:p-12 
                            transition-all duration-300 
                            h-auto md:h-[420px]
                            flex flex-col
                        "
                    >
                        <div className="absolute bottom-8 left-5 md:left-1 bg-[#0A1A33] text-white text-xl md:text-2xl font-semibold w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center">
                            {step.id}
                        </div>

                        <h3
                            className="text-xl md:text-2xl font-bold mb-4"
                            style={{ fontFamily: "Manrope, sans-serif" }}
                        >
                            {step.title}
                        </h3>
                        <p
                            className="text-gray-600 text-lg md:text-2xl tracking-wide leading-relaxed"
                            style={{ fontFamily: "Inter" }}
                        >
                            {step.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}

// import React from "react";
// import { steps } from "../../constants/data";


// export default function HowItWorks() {
//     return (
//         <section className=" py-24 px-6 md:px-16 bg-white">
//             <div className="mb-16">
//                 <h2
//                     className="text-4xl md:text-5xl font-bold text-gray-900"
//                     style={{
//                         fontFamily: "Manrope, sans-serif",
//                     }}
//                 >
//                     How It Works
//                 </h2>
//                 <p
//                     className="mt-3 text-lg text-gray-600"
//                     style={{
//                         fontFamily: "Inter, sans-serif",
//                     }}
//                 >
//                     Booking Made Easy
//                 </p>
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
//                 {steps.map((step) => (
//                     <div
//                         key={step.id}
//                         className="relative bg-[#F8F8F9] h-[420px]  rounded-2xl p-12 shadow-sm  transition-all duration-300"
//                     >
                       
//                         <div className="absolute bottom-5 left-1 bg-[#0A1A33] text-white text-2xl font-semibold w-14 h-14 rounded-full flex items-center justify-center">
//                             {step.id}
//                         </div>

//                         <h3
//                             className="text-2xl font-bold mb-4"
//                             style={{
//                                 fontFamily: "Manrope, sans-serif",
//                             }}
//                         >
//                             {step.title}
//                         </h3>
//                         <p
//                             className="text-gray-600 text-2xl tracking-wider leading-relaxed"
//                             style={{
//                                 fontFamily: "Inter",
//                             }}
//                         >
//                             {step.description}
//                         </p>
//                     </div>
//                 ))}
//             </div>
//         </section>
//     );
// }
