import { ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "../../constants/data";
import React, { useEffect, useState, useRef } from "react";


export default function Testimonials() {
    const [perPage, setPerPage] = useState(3);
    const [startIndex, setStartIndex] = useState(0);
    const containerRef = useRef(null);

    useEffect(() => {
        function updatePerPage() {
            const w = window.innerWidth;
            if (w < 640) setPerPage(1);
            else if (w < 1024) setPerPage(2);
            else setPerPage(3);
        }
        updatePerPage();
        window.addEventListener("resize", updatePerPage);
        return () => window.removeEventListener("resize", updatePerPage);
    }, []);

    const total = testimonials.length;

    // helper to get visible slice (wraps if needed)
    function getVisible() {
        if (startIndex + perPage <= total) {
            return testimonials.slice(startIndex, startIndex + perPage);
        }
        // wrap-around slice
        const first = testimonials.slice(startIndex);
        const remainder = testimonials.slice(0, (startIndex + perPage) % total);
        return first.concat(remainder);
    }

    function handleNext() {
        setStartIndex((prev) => {
            const next = prev + perPage;
            return next >= total ? 0 : next;
        });
        containerRef.current?.focus();
    }

    function handlePrev() {
        setStartIndex((prev) => {
            const next = prev - perPage;
            if (next < 0) {
                const rem = total % perPage;
                if (rem === 0) return total - perPage;
                return total - rem;
            }
            return next;
        });
        containerRef.current?.focus();
    }

    useEffect(() => {
        function onKey(e) {
            if (e.key === "ArrowRight") handleNext();
            if (e.key === "ArrowLeft") handlePrev();
        }
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [perPage, total]);

    const visible = getVisible();

    return (
        <section className="py-20 px-6 md:px-12 lg:px-20 bg-white">
            <div className="w-8xl mx-auto">
                <div className="flex items-start justify-between mb-8">
                    <div>
                        <h2 className="text-4xl lg:text-5xl font-semibold text-gray-900"
                            style={{
                                fontFamily: "Manrope"
                            }}>
                            Guest Reviews / Testimonials
                        </h2>
                        <p className="mt-3 text-xl text-[#000000]"
                            style={{
                                fontFamily: "inter"
                            }}>What Our Guests Are Saying</p>
                    </div>

                    {/* Controls */}
                    <div className="flex items-center space-x-1">
                        <button
                            aria-label="Previous testimonials"
                            onClick={handlePrev}
                            className="w-10 h-10 flex items-center justify-center"
                        >

                            <ChevronLeft />
                        </button>

                        <button
                            aria-label="Next testimonials"
                            onClick={handleNext}
                            className="w-10 h-10  flex items-center justify-center "
                        >
                            <ChevronRight />
                        </button>
                    </div>
                </div>

                <div
                    ref={containerRef}
                    tabIndex={-1}
                    className={`grid gap-6 ${perPage === 1 ? "grid-cols-1" : perPage === 2 ? "grid-cols-2" : "grid-cols-3"
                        }`}
                    aria-live="polite"
                >
                    {visible.map((t) => (
                        <article
                            key={t.id}
                            className="relative bg-gray-100 rounded-xl p-12 shadow-sm  h-[360px] flex flex-col"
                            style={{
                                width: "488.73px",
                                height: "547.34px",
                            }}
                        >
                            {/* Avatar and rating row */}
                            <div className="flex items-center justify-between mb-4">
                                <img
                                    src={t.avatar}
                                    alt={`${t.name} avatar`}
                                    className="w-25 h-25 rounded-full object-cover shadow"
                                />

                                {/* stars */}
                                <div className="flex items-center">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <svg
                                            key={i}
                                            width="18"
                                            height="18"
                                            viewBox="0 0 24 24"
                                            fill={i < t.rating ? "#F6C84C" : "none"}
                                            stroke="#F6C84C"
                                            strokeWidth="1"
                                            className="ml-2"
                                            aria-hidden
                                        >
                                            <path d="M12 .587l3.668 7.431 8.2 1.193-5.934 5.788 1.402 8.175L12 18.897l-7.336 3.877 1.402-8.175L.132 9.211l8.2-1.193z" />
                                        </svg>
                                    ))}
                                </div>
                            </div>

                            <div className="text-4xl leading-none text-gray-800 mb-3">“</div>

                            <p className="text-[#000000] text-2xl  leading-relaxed mb-6 flex-1"
                                style={{ fontFamily: "Manrope" }}>{t.text}</p>

                            <div>
                                <div className="font-semibold text-gray-900">{t.name}</div>
                                <div className="text-sm text-gray-500">{t.location}</div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
