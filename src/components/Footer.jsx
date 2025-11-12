import React from "react";
import { Link } from "react-router-dom";

/**
 * Responsive Footer component
 * - Left column: logo, description, phone, email, social icons
 * - Right columns: link groups (mapped)
 * - Mobile: stacks vertically
 *
 * Note: replace hrefs / icons with real assets or <Link> if using react-router.
 */

const linkColumns = [
    {
        title: "",
        links: [
            { label: "Home", href: "/" },
            { label: "About us", href: "/about" },
            { label: "Apartments", href: "/apartments" },
            { label: "Contact", href: "/contact" },
            { label: "FAQs", href: "/faqs" },
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

export default function Footer() {
    return (
        <footer className="relative bg-[#0B1830] text-slate-200">
            <div className="w-full mx-auto px-6 md:px-10 lg:px-16 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                   
                    <div>
                      
                        <div className="flex items-center gap-3 mb-6">
                            <img src="/Logo/tinywow_Frame 18_85917233.png" alt="Alcove Logo" width={150} />
                        </div>

                        <p className="text-sm text-slate-300 mb-6 max-w-[18rem]">
                            Discover premium shortlet apartments designed for comfort,
                            convenience, and modern living — wherever you go
                        </p>

                        <div className="space-y-3 mb-6">
                            <div className="flex items-center gap-3 text-sm">
                                <Link
                                    href="tel:+2348038771226"
                                    className="text-sm text-slate-200 hover:underline"
                                >
                                    +234 803 877 1226
                                </Link>
                            </div>

                            <div className="flex items-center gap-3 text-sm">
                                <svg
                                    className="w-5 h-5 text-slate-300"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
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
                                    className="text-sm text-slate-200 hover:underline"
                                >
                                    support@thealcoveapartment.ng
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <Link
                                href="#instagram"
                                aria-label="Instagram"
                                className="w-8 h-8 rounded-full bg-gradient-to-tr from-pink-500 to-yellow-400 flex items-center justify-center"
                            >
                                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none">
                                    <circle cx="12" cy="12" r="4" fill="currentColor" />
                                </svg>
                            </Link>

                            <Link
                                href="#facebook"
                                aria-label="Facebook"
                                className="w-8 h-8 rounded-full bg-[#1877F2] flex items-center justify-center"
                            >
                                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none">
                                    <path d="M15 8h2V5h-2c-1.657 0-3 1.343-3 3v1H10v3h2v7h3v-7h2.5l.5-3H15V8z" fill="currentColor" />
                                </svg>
                            </Link>

                            <Link
                                href="#tiktok"
                                aria-label="TikTok"
                                className="w-8 h-8 rounded-full bg-black flex items-center justify-center"
                            >
                                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none">
                                    <path d="M9 8v8a4 4 0 1 0 4-4V6h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>
                            </Link>

                            <Link
                                href="#x"
                                aria-label="X"
                                className="w-8 h-8 rounded-full border border-slate-300 flex items-center justify-center"
                            >
                                <svg className="w-4 h-4 text-slate-300" viewBox="0 0 24 24" fill="none">
                                    <path d="M5 6l14 12M19 6L5 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Link>
                        </div>
                    </div>

                    {/* Right columns: mapped link groups */}
                    <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-8">
                        {linkColumns.map((col, colIdx) => (
                            <div key={colIdx} className="space-y-3">
                                <ul className="space-y-3">
                                    {col.links.map((link) => (
                                        <li key={link.label}>
                                            <Link
                                                href={link.href}
                                                className="text-sm text-slate-200 hover:text-white transition-colors"
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
