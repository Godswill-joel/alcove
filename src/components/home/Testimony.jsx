import { ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "../../constants/data";
import React, { useEffect, useState } from "react";

export default function Testimonials() {
  const [perPage, setPerPage] = useState(3);
  const [startIndex, setStartIndex] = useState(0);

  const total = testimonials.length;
  useEffect(() => {
    function updatePerPage() {
      const w = window.innerWidth;
      if (w < 640) setPerPage(1);
      else if (w < 1024) setPerPage(2);
      else setPerPage(3);
    }

    function handleKey(e) {
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    }

    updatePerPage();
    window.addEventListener("resize", updatePerPage);
    window.addEventListener("keydown", handleKey);

    const interval = setInterval(() => handleNext(), 4000);

    return () => {
      window.removeEventListener("resize", updatePerPage);
      window.removeEventListener("keydown", handleKey);
      clearInterval(interval);
    };
  }, [perPage, total]);

  function getVisible() {
    if (startIndex + perPage <= total)
      return testimonials.slice(startIndex, startIndex + perPage);

    const first = testimonials.slice(startIndex);
    const remainder = testimonials.slice(
      0,
      (startIndex + perPage) % total
    );
    return [...first, ...remainder];
  }

  function handleNext() {
    setStartIndex((prev) => (prev + perPage) % total);
  }

  function handlePrev() {
    setStartIndex((prev) => {
      const next = prev - perPage;
      return next < 0
        ? total - ((total - next) % perPage)
        : next;
    });
  }

  const visible = getVisible();

  return (
    <section className="py-20 px-4 sm:px-8 md:px-12 lg:px-20 bg-white">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-wrap items-start justify-between mb-10 gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900">
              Guest Reviews / Testimonials
            </h2>
            <p className="mt-2 text-lg sm:text-xl text-[#000000]">
              What Our Guests Are Saying
            </p>
          </div>

          <div className="flex items-center space-x-2">
            <button onClick={handlePrev} aria-label="Previous testimonials" className="w-10 h-10 flex items-center justify-center">
              <ChevronLeft />
            </button>
            <button onClick={handleNext} aria-label="Next testimonials" className="w-10 h-10 flex items-center justify-center">
              <ChevronRight />
            </button>
          </div>
        </div>

        <div className={`grid gap-6 
          ${perPage === 1 ? "grid-cols-1" :
            perPage === 2 ? "grid-cols-1 sm:grid-cols-2" :
              "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"}`}
        >
          {visible.map((t) => (
            <article
              key={t.id}
              className="bg-gray-100 rounded-xl shadow-sm p-10 flex flex-col"
              style={{
                width: "100%",
                maxWidth: "490px",
                height: "547px",
                margin: "0 auto"
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-20 h-20 rounded-full object-cover shadow"
                />

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
                      className="ml-1"
                    >
                      <path d="M12 .587l3.668 7.431 8.2 1.193-5.934 5.788 1.402 8.175L12 18.897l-7.336 3.877 1.402-8.175L.132 9.211l8.2-1.193z" />
                    </svg>
                  ))}
                </div>
              </div>

              <div className="text-4xl leading-none text-gray-800 mb-3">“</div>

              <p className="text-xl text-[#000000] leading-relaxed mb-6 flex-1">
                {t.text}
              </p>

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
