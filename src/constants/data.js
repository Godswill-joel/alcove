import Frame1 from "../../public/img/1bedroom.png";
import Frame2 from "../../public/img/2bedroom.png";
import Frame3 from "../../public/img/StudioApartment.png";
import feature1 from "../../public/assets/house.png";
import feature2 from "../../public/assets/lock.png";
import feature3 from "../../public/assets/clock.png";
import feature4 from "../../public/assets/flexibility.png";
import testomony1 from "../../public/img/James.png";
import testomony2 from "../../public/img/Amanda.png";
import testomony3 from "../../public/img/Tobi.png";
import testomony4 from "../../public/img/dave.png";
import testomony5 from "../../public/img/Sarah.png";
import testomony6 from "../../public/img/Mark.png";


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


export const testimonials = [
    {
        id: "t1",
        name: "James Mike",
        location: "Port Harcourt, Nigeria",
        avatar: testomony1,
        rating: 5,
        text:
            "Alcove made my business trip so comfortable. the apartment was spotless, modern, and exactly as described. i'll definitely book again.",
    },
    {
        id: "t2",
        name: "Amanda B",
        location: "Port Harcourt, Nigeria",
        avatar: testomony2,
        rating: 5,
        text:
            "Loved the interior and the quick check-in process. Everything worked perfectly. Just wish I could have stayed longer.",
    },
    {
        id: "t3",
        name: "Tobi Alade",
        location: "Port Harcourt, Nigeria",
        avatar:testomony3,
        rating: 5,
        text:
            "I’ve used many shortlet platforms, but Alcove stands out for its quality and reliability. Great experience from start to finish.",
    },
    {
        id: "t4",
        name: "Simi O",
        location: "Lagos, Nigeria",
        avatar:testomony4,
        rating: 5,
        text:
            "Fantastic host experience. The apartment was fully stocked and the support team was responsive. Highly recommended.",
    },
    {
        id: "t5",
        name: "Michael K",
        location: "Abuja, Nigeria",
        avatar: testomony5,
        rating: 5,
        text:
            "Great location, amazing design, and excellent value. Everything was seamless during my stay.",
    },
    {
        id: "t6",
        name: "Amaka R",
        location: "Enugu, Nigeria",
        avatar: testomony6,
        rating: 5,
        text:
            "Perfect place for a weekend getaway. Clean, comfortable, and exactly as pictured. We’ll be back!",
    },
    // {
    //     id: "t7",
    //     name: "Daniel N",
    //     location: "Ibadan, Nigeria",
    //     avatar: "/avatars/user7.jpg",
    //     rating: 5,
    //     text:
    //         "Professional service and great attention to details. I appreciated the quick check-in and tidy space.",
    // },
];

