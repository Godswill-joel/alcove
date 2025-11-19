import React from "react";
import { Phone } from "lucide-react";
import { Link } from "react-router-dom";
import Tiktok from "../../public/Logo/tiktok.png";
import Twitter from "../../public/Logo/twitter.png";
import instagram from "../../public/Logo/instagram.png";
import facebook from "../../public/Logo/facebook.png";

const linkColumns = [
    {
        title: "",
        links: [
            { label: "Home", path: "/" },
            { label: "About us", path: "/about" },
            { label: "Apartments", path: "/apartments" },
            { label: "Contact", path: "/contact" },
        ],
    },
    {
        title: "",
        links: [
            { label: "Contact Us", href: "/contact" },
            { label: "Terms & Conditions", href: "/terms" },
            { label: "Privacy Policy", href: "/privacy" },
            { label: "Cancellation Policy", href: "/cancellation" },
            { label: "Help Center", href: "/help" },
        ],
    },
    {
        title: "",
        links: [
            { label: "Hosting Tips", href: "/hosting" },
            { label: "Community Stories", href: "/community" },
            { label: "Privacy Policy", href: "/privacy" },
            { label: "Experiences", href: "/experiences" },
        ],
    },
];

const socialIcons = [
    {
        id: 1,
        href: "#instagram",
        alt: "Instagram",
        img: instagram,
        extraClass: "",
    },
    {
        id: 2,
        href: "#facebook",
        alt: "Facebook",
        img: facebook,
        extraClass: "",
    },
    {
        id: 3,
        href: "#tiktok",
        alt: "TikTok",
        img: Tiktok,
        extraClass: "",
    },
    {
        id: 4,
        href: "#x",
        alt: "X",
        img: Twitter,
        extraClass: "border border-slate-300",
    },
];

export default function Footer() {
    return (
        <footer className="relative bg-[#0B1830] text-slate-200">
            <div className="w-full mx-auto px-6 md:px-10 lg:px-16 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
                    <div className="flex flex-col">
                        <div className="flex items-center gap-3 mb-6">
                            <img
                                src="/Logo/tinywow_Frame 18_85917233.png"
                                alt="Alcove Logo"
                                width={150}
                                className="w-[120px] sm:w-[150px]"
                            />
                        </div>

                        <p className="text-xl sm:text-2xl text-slate-300 mb-6 max-w-[18rem]">
                            Discover premium shortlet apartments designed for comfort,
                            convenience, and modern living — wherever you go
                        </p>


                        <div className="space-y-3 mb-6">
                            <div className="flex items-center gap-3 text-sm">
                                <Link
                                    to="tel:+2348038771226"
                                    className="flex items-center gap-2 text-xl sm:text-2xl text-slate-200 hover:underline"
                                >
                                    <Phone className="w-5 h-5" />
                                    +234 803 877 1226
                                </Link>
                            </div>


                            <div className="flex items-center gap-3 text-sm">
                                <svg
                                    className="w-5 h-5 text-slate-300"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
                                    <path
                                        d="M3 6.5C3 5.67157 3.67157 5 4.5 5H19.5C20.3284 5 21 5.67157 21 6.5V17.5C21 18.3284 20.3284 19 19.5 19H4.5C3.67157 19 3 18.3284 3 17.5V6.5Z"
                                        stroke="currentColor"
                                        strokeWidth="1.2"
                                        strokeOpacity="0.9"
                                    />
                                    <path
                                        d="M21 6L12 12.2L3 6"
                                        stroke="currentColor"
                                        strokeWidth="1.2"
                                        strokeOpacity="0.9"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>

                                <a
                                    href="mailto:support@thealcoveapartment.ng"
                                    className="text-xl sm:text-2xl text-slate-200 hover:underline break-all"
                                >
                                    support@thealcoveapartment.ng
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            {socialIcons.map((icon) => (
                                <Link
                                    key={icon.id}
                                    href={icon.href}
                                    aria-label={icon.alt}
                                    className={`w-4 h-4 sm:w-8 sm:h-8 overflow-hidden flex items-center justify-center ${icon.extraClass}`}
                                >
                                    <img
                                        src={icon.img}
                                        alt={icon.alt}
                                        className="w-full h-full object-cover"
                                    />
                                </Link>
                            ))}
                        </div>

                    </div>
                    <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-8">
                        {linkColumns.map((col, colIdx) => (
                            <div key={colIdx} className="space-y-5">
                                <ul className="space-y-6 sm:space-y-7">
                                    {col.links.map((link) => (
                                        <li key={link.label}>
                                            <Link
                                                to={link.path}
                                                className="text-2xl sm:text-3xl text-slate-200 hover:text-white transition-colors tracking-wide"
                                                style={{ fontFamily: "Manrope" }}
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </footer>
    );
}
