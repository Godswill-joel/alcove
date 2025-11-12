import React from "react";

const steps = [
    {
        id: 1,
        title: "Search Apartments",
        description:
            "Browse a wide range of verified shortlet apartments in top cities. Filter by location, price, and amenities to find the perfect stay that fits your style.",
    },
    {
        id: 2,
        title: "Book Securely",
        description:
            "Once you’ve found your match, book instantly through our safe and transparent platform. Your payment and personal details are fully protected every step of the way.",
    },
    {
        id: 3,
        title: "Enjoy Your Stay",
        description:
            "Check in, relax, and make yourself at home. Every Alcove apartment is designed for comfort, convenience, and peace of mind.",
    },
];

export default function HowItWorks() {
    return (
        <section className=" py-24 px-6 md:px-16 bg-white">
            <div className="mb-16">
                <h2
                    className="text-4xl md:text-5xl font-bold text-gray-900"
                    style={{
                        fontFamily: "Manrope, sans-serif",
                    }}
                >
                    How It Works
                </h2>
                <p
                    className="mt-3 text-lg text-gray-600"
                    style={{
                        fontFamily: "Inter, sans-serif",
                    }}
                >
                    Booking Made Easy
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {steps.map((step) => (
                    <div
                        key={step.id}
                        className="relative bg-[#F8F8F9] h-[420px]  rounded-2xl p-12 shadow-sm  transition-all duration-300"
                    >
                       
                        <div className="absolute -bottom-6 left-1 bg-[#0A1A33] text-white text-2xl font-semibold w-14 h-14 rounded-full flex items-center justify-center">
                            {step.id}
                        </div>

                        <h3
                            className="text-2xl font-bold mb-4"
                            style={{
                                fontFamily: "Manrope, sans-serif",
                            }}
                        >
                            {step.title}
                        </h3>
                        <p
                            className="text-gray-600 text-2xl tracking-wider leading-relaxed"
                            style={{
                                fontFamily: "Inter",
                            }}
                        >
                            {step.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
