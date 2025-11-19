import React from "react";
import { apartmentDetails } from "../../constants/data";
import { ArrowLeft, MapPin, Share2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Testimonials from "../home/Testimony";
import Hero from "../../../public/img/calltomobile.webp";
import WatchVideoIcon from "../../../public/img/watchvideo.png";

export default function ApartmentDetails() {
    const nav = useNavigate();
    const apt = apartmentDetails;

    return (
        <section className="w-full bg-white px-4 md:px-12 py-10">
            <div className="flex justify-between items-center mb-4">
                <button
                    onClick={() => nav(-1)}
                    className="flex items-center gap-2 text-[#0B1C33] font-semibold"
                >
                    <ArrowLeft size={22} /> Back
                </button>

                <button className="text-[#0B1C33]">
                    <Share2 size={22} />
                </button>
            </div>


            <div className="relative">
                <img
                    src={Hero}
                    className="w-full h-[350px] md:h-[480px] object-cover rounded-xl"
                />

                <div className="absolute bottom-4 right-4">
                    <img
                        src={WatchVideoIcon}
                        alt="watch"
                        className="w-[120px] md:w-[140px] cursor-pointer"
                    />
                </div>
            </div>

            {/* SLIDER DOTS */}
            <div className="flex justify-center mt-4 gap-2">
                {[1, 2, 3, 4, 5].map((dot, index) => (
                    <div
                        key={dot}
                        className={`w-2.5 h-2.5 rounded-full ${index === 0 ? "bg-[#0B1C33]" : "bg-gray-300"
                            }`}
                    />
                ))}
            </div>

            {/* LOCATION + AVAILABILITY */}
            <div className="flex justify-between items-center mt-4 px-1">
                <div className="flex items-center gap-2 text-gray-600">
                    <MapPin size={18} />
                    <span>{apt.location}</span>
                </div>

                <p className="text-green-600 font-semibold flex items-center gap-1">
                    Available <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                </p>
            </div>
            <div className="mt-6 flex justify-between items-center">
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold">{apt.title}</h2>
                    <p className="text-[#0B1C33] font-semibold mt-2">{apt.price}</p>
                </div>

                <button className="px-6 py-4 bg-[#0B1C33] text-white rounded-xl">
                    Book Now
                </button>
            </div>
            <div className="mt-10">
                <h3 className="font-bold text-xl">Key Amenities List</h3>
                <ul className="mt-4 space-y-3 text-gray-700">
                    {apt.keyAmenities.map((item, i) => (
                        <li key={i} className="flex items-center gap-3">
                            <img
                                src={item.img.src ?? item.img}
                                alt={item.label}
                                className="w-6 h-6 object-contain"
                            />
                            <span>{item.label}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="mt-10">
                <h3 className="font-bold text-xl">What This Apartment Offers</h3>

                <ul className="mt-4 space-y-2 text-gray-700">
                    {apt.apartmentOffers.map((item, i) => (
                        <li key={i}>• {item}</li>
                    ))}
                </ul>
            </div>
            <div className="mt-10">
                <h3 className="font-bold text-xl">Shopping Arrangements</h3>

                <ul className="mt-4 space-y-2 text-gray-700">
                    {apt.shoppingArrangements.map((item, i) => (
                        <li key={i}>• {item}</li>
                    ))}
                </ul>
            </div>

            <div className="mt-10">
                <h3 className="font-bold text-xl">House Rules</h3>

                <ul className="mt-4 space-y-2 text-gray-700">
                    {apt.houseRules.map((item, i) => (
                        <li key={i}>• {item}</li>
                    ))}
                </ul>
            </div>
            <div className="mt-10">
                <h3 className="font-bold text-xl">Check-in / Check-out</h3>

                <p className="mt-2">Check-in: {apt.checkinCheckout.checkin}</p>
                <p>Check-out: {apt.checkinCheckout.checkout}</p>
            </div>
            <div className="w-full h-[350px] md:h-[450px] lg:h-[500px] rounded-xl overflow-hidden mt-16">
                <iframe
                    title="Google Map"
                    src="https://www.google.com/maps?q=NTA+Ozuoba+Road+Before+Obirikwere,+Port+Harcourt,+Nigeria&output=embed"
                    className="w-full h-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>

            <Testimonials />

        </section>
    );
}
