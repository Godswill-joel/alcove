import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Apartments", path: "/apartments" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="relative bg-white shadow-sm w-full z-50">
      <div className="w-full mx-auto px-4 md:px-10 lg:px-16 h-20 flex items-center justify-between">

        {/* Logo */}
        <img
          src="/Logo/Frame 14.png"
          alt="Alcove Logo"
          className="w-[160px] md:w-[200px] cursor-pointer"
        />

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-[#333333] text-xl font-medium hover:font-bold hover:text-[#0B1C33] transition-all duration-200"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex">
  <Link
    to="/contact"
    className="bg-[#0B1C33] hover:bg-[#0B1C33CC] text-white font-semibold rounded-full px-6 py-2 transition-all duration-200"
  >
    Book Now
  </Link>
</div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[#0B1C33] focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-md animate-slideDown">
          <div className="flex flex-col space-y-4 py-6 px-6">

            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="text-gray-800 text-lg font-medium hover:text-[#0B1C33] transition-all"
              >
                {link.name}
              </Link>
            ))}

            <button className="bg-[#0B1C33] text-white font-semibold rounded-full py-2 mt-2">
              Book Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

// import { useState } from "react";
// import { Link } from "react-router-dom";
// // import { Menu, X } from "lucide-react"; 

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   const navLinks = [
//     { name: "Home", path: "/" },
//     { name: "Apartments", path: "/apartments" },
//     { name: "About", path: "/about" },
//     { name: "Contact", path: "/contact" },
//   ];

//   return (
//     <nav className="relative bg-white shadow-sm w-full z-50">
//       <div className="w-full mx-auto px-2 md:px-10 lg:px-16 h-20 flex items-center">
    
//         <div className="flex flex-1">
//           <img 
//             src="/Logo/Frame 14.png" 
//             alt="Alcove Logo" 
//             className="w-[200px] cursor-pointer"
//           />
//         </div>


//         <div className="hidden   md:flex flex-1 justify-center items-center space-x-12">
//           {navLinks.map((link) => (
//             <Link
//               key={link.name}
//               to={link.path}
//               className="text-[#333333] text-3xl  font-medium hover:font-bold hover:text-[#0B1C33] transition-all duration-200"
//             >
//               {link.name}
//             </Link>
//           ))}
//         </div>

//         {/* Book Button - Right */}
//         <div className="hidden w-70px md:flex flex-1 justify-end">
//           <button
//             className="bg-[#0B1C33] hover:bg-[#0B1C33CC] text-white font-semibold rounded-full px-6 py-2 transition-all duration-200"
//           >
//             Book Now
//           </button>
//         </div>

//         {/* Mobile Menu Button (kept commented as requested) */}
//         {/* <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="md:hidden text-[#0B1C33] focus:outline-none"
//         >
//           {isOpen ? <X size={26} /> : <Menu size={26} />}
//         </button> */}
//       </div>

//       {isOpen && (
//         <div className="md:hidden bg-white border-t border-gray-100 shadow-md">
//           <div className="flex flex-col space-y-4 py-4 px-6">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.name}
//                 to={link.path}
//                 onClick={() => setIsOpen(false)}
//                 className="text-gray-800 font-medium hover:text-[#0B1C33] transition-all duration-200"
//               >
//                 {link.name}
//               </Link>
//             ))}

//             <button
//               className="bg-[#0B1C33] text-white font-semibold rounded-full py-2 transition-all"
//             >
//               Book Now
//             </button>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }
