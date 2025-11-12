import Frame1 from "../../public/img/1bedroom.png";
import Frame2 from "../../public/img/2bedroom.png";
import Frame3 from "../../public/img/StudioApartment.png";
import feature1 from "../../public/assets/house.png";
import feature2 from "../../public/assets/lock.png";
import feature3 from "../../public/assets/clock.png";
import feature4 from "../../public/assets/flexibility.png";


export const apartments = [
    {
        id: 1,
        title: "1 Bedroom Apartment",
        location: "Port Harcourt, Nigeria",
        price: "₦100,000/night",
        beds: 1,
        baths: 1,
        guests: 2,
        available: true,
        image: Frame1,
    },
    {
        id: 2,
        title: "2 Bedroom Apartment",
        location: "Port Harcourt, Nigeria",
        price: "₦100,000/night",
        beds: 1,
        baths: 1,
        guests: 2,
        available: true,
        image: Frame2,
    },
    {
        id: 3,
        title: "Studio Apartment",
        location: "Port Harcourt, Nigeria",
        price: "₦100,000/night",
        beds: 1,
        baths: 1,
        guests: 2,
        available: true,
        image: Frame3,
    },
    {
        id: 4,
        title: "3 Bedroom Apartment",
        location: "Port Harcourt, Nigeria",
        price: "₦100,000/night",
        beds: 3,
        baths: 2,
        guests: 4,
        available: true,
        image: Frame1,
    },
    {
        id: 5,
        title: "Luxury Suite",
        location: "Port Harcourt, Nigeria",
        price: "₦100,000/night",
        beds: 2,
        baths: 2,
        guests: 3,
        available: true,
        image: Frame2,
    },
    {
        id: 6,
        title: "Penthouse Apartment",
        location: "Port Harcourt, Nigeria",
        price: "₦100,000/night",
        beds: 4,
        baths: 3,
        guests: 6,
        available: true,
        image: Frame3,
    },
];



export const features = [
    {
        id: "verified-premium",
        icon: feature1,
        title: "Verified Premium Apartments",
        description:
            "Every apartment on alcove is carefully vetted for quality, comfort, and safety — ensuring you always stay in premium spaces you can trust.",
    },
    {
        id: "secure-booking",
        icon: feature2,
        title: "Secure Booking & Payments",
        description:
            "Enjoy peace of mind with our secure payment system. Your transactions and booking details are fully protected from start to finish.",
    },
    {
        id: "support-24-7",
        icon: feature3,
        title: "24/7 Support",
        description:
            "Need help at any hour? Our friendly support team is available day and night to make your stay smooth and stress-free.",
    },
    {
        id: "flexible-stays",
        icon: feature4,
        title: "Flexible Stay Options",
        description:
            "Whether it’s a quick getaway or a long-term stay, alcove gives you flexible booking options to fit your lifestyle and schedule.",
    },
];
