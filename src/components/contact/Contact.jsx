import React, { useState } from "react";
import Email from "../../../public/Logo/Email.png";
import Phonecontact from "../../../public/Logo/Phone.png";
import Whatsapp from "../../../public/Logo/Whatsapp.png";
import Location from "../../../public/Logo/Location.png";

const socialLinks = [
  {
    id: 1,
    img: Email,
    label: "support@thealcoveapartment.ng"
  },
  {
    id: 2,
    img: Phonecontact,
    label: "+234 803 877 1226"
  },
  {
    id: 3,
    img: Whatsapp,
    label: "+234 803 877 1226"
  },
  {
    id: 4,
    img: Location,
    label: "NTA Ozuoba Road Before Obirikwere"
  },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiry: "",
    message: "",
  });

  const whatsappNumber = "2349049375954";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, phone, inquiry, message } = formData;

    const text = `Hello! %0A%0AI would like to make an inquiry:%0A%0A*Full Name:* ${name}%0A*Email:* ${email}%0A*Phone:* ${phone}%0A*Inquiry Type:* ${inquiry}%0A*Message:* ${message}`;

    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, "_blank");
  };

  return (
    <section className="px-6 md:px-16 lg:px-20 py-16 bg-white w-full">
      <div className="flex flex-col md:flex-row justify-between w-full gap-16">

        <div className="w-full md:w-2/3">

          <h2
            className="text-3xl md:text-5xl font-bold text-[#333333] mb-4"
            style={{ fontFamily: "Manrope" }}
          >
            Contact Information
          </h2>

          <p
            className="text-gray-700 text-base md:text-lg mb-8 max-w-xl"
            style={{ fontFamily: "Inter" }}
          >
            We’re always available to assist you — whether you’re booking a stay,
            listing an apartment, or need support along the way.
          </p>

          <h3
            className="text-2xl md:text-3xl font-semibold text-[#333333] mb-6"
            style={{ fontFamily: "Manrope" }}
          >
            Contact Form
          </h3>

          <form
            onSubmit={handleSubmit}
            className="p-6 space-y-5 shadow-sm max-w-xl"
          >

            <div>
              <label className="block text-sm font-semibold mb-1">Full name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-black outline-none"
                required
              />
            </div>


            <div>
              <label className="block text-sm font-semibold mb-1">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-black outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-black outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">Inquiry Type</label>
              <select
                name="inquiry"
                value={formData.inquiry}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-black outline-none"
                required
              >
                <option value="">Type subject</option>
                <option value="Booking">Booking</option>
                <option value="Listing">Listing</option>
                <option value="Support">Support</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Type your message here..."
                rows={5}
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-black outline-none resize-none"
                required
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-[#0B1C33] text-white font-medium rounded-2xl py-3 px-6 hover:bg-gray-800 transition-all"
              >
                Send message
              </button>
            </div>
          </form>
        </div>

        <div className="w-full md:w-1/3 flex flex-col items-start md:items-end gap-8">
          <ul className="space-y-5 text-gray-800 text-base md:text-lg mb-12">
            {socialLinks.map((item) => (
              <li key={item.id} className="flex items-center gap-3">
                <img src={item.img} alt={item.label} className="w-5 h-5 object-contain" />
                <span>{item.label}</span>
              </li>
            ))}
          </ul>
        </div>
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
    </section>
  );
}
