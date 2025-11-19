import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

import Bedroom from "../../../public/assets/Bedroom.png";
import Bathroom from "../../../public/assets/Bathroom.png";
import Guests from "../../../public/assets/Guests.png";
import Location from "../../../public/assets/Location.png";
import Available from "../../../public/assets/Available.png";

import { apartments } from "../../constants/data";

const FeaturedApartments = ({ limit }) => {
    const displayedApts = limit ? apartments.slice(0, limit) : apartments;

    return (
        <section className="py-10 px-4 md:px-12 bg-white">
            <div className="flex flex-col md:flex-row w-full px-7 items-start md:items-center justify-between mb-8">
                <div>
                    <h2
                        className="text-4xl md:text-5xl tracking-wide font-bold text-[#0B1C33]"
                        style={{ fontFamily: "Manrope" }}
                    >
                        Featured Apartments
                    </h2>

                    <p
                        className="text-[#000000] text-lg md:text-xl tracking-wide mt-1"
                        style={{ fontFamily: "inter" }}
                    >
                        Explore Our Premium Spaces
                    </p>
                </div>
                <Link
                    to="/apartments"
                    className="text-[#0B1C33] text-3xl md:text-5xl font-medium hover:underline mt-4 md:mt-0"
                    style={{ fontFamily: "Manrope" }}
                >
                    See all
                </Link>
            </div>

           
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
                {displayedApts.map((apt) => (
                    <div
                        key={apt.id}
                        className="
                            bg-[#F5F5F6] rounded-2xl shadow-sm transition-all duration-300 overflow-hidden 
                            flex flex-col justify-between mx-auto relative
                            w-full h-auto
                            lg:w-[450px] lg:h-[522.82px]
                        "
                    >
                        <div>
                            <div className="relative">
                                <img
                                    src={apt.image}
                                    alt={apt.title}
                                    className="
                                        w-full h-[230px] sm:h-[240px] md:h-[260px] 
                                        object-cover rounded-t-2xl
                                    "
                                />

                                {apt.available && (
                                    <span className="absolute right-3 text-[#000000] text-sm font-semibold flex items-center gap-1 px-2 py-3 rounded-lg  backdrop-blur-sm">
                                        Available
                                        <img src={Available} alt="available icon" className="w-4 h-4" />
                                    </span>
                                )}
                            </div>

                            <div className="
                                px-5 md:px-7 py-2 flex flex-col justify-between 
                                w-full
                                h-auto lg:h-[calc(522.82px-260px)]
                            ">
                                <div>
                                    <h3 className="text-lg font-semibold text-[#0B1C33]">
                                        {apt.title}
                                    </h3>

                                    <div className="flex items-center gap-2 mt-5 text-[#000]">
                                        <img src={Location} alt="location icon" className="w-4 h-4" />
                                        <p className="text-sm">{apt.location}</p>
                                    </div>

                                    <div className="flex items-center justify-between mt-8 md:mt-12 text-[#000] text-sm">
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

                                <p className="text-xl font-bold text-[#0B1C33] mt-4">
                                    {apt.price}
                                </p>
                            </div>
                        </div>

                        <Link
                            to="/apartments"
                            className="
                                       absolute
                                       bottom-2 right-2 sm:bottom-5 sm:right-5
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
};

export default FeaturedApartments;
