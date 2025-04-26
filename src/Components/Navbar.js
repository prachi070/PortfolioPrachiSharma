// import React, { useState } from "react";
// import "./Navbar.css";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { FaLinkedin, FaGithub, FaMailBulk } from "react-icons/fa";
// import { IoHome } from "react-icons/io5";
// import { FaFireAlt } from "react-icons/fa";
// import { TiPhone } from "react-icons/ti";
// import { MdAssignmentTurnedIn } from "react-icons/md";
// import { MdAssignment } from "react-icons/md";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const [showMediaIcons, setShowMediaIcons] = useState(false);

//   const handleHamburgerClick = () => {
//     setShowMediaIcons(!showMediaIcons);
//   };

//   return (
//     <>
//       <nav className={`main-nav ${showMediaIcons ? "active" : "close"}`}>
//         {/* logo */}
//           <div className="logo">
//         <Link to="/" >

//             <h2>
//               <span>P</span>rachi
//               <span>S</span>harma
//             </h2>
//             <h2 id="mobile_logo">
//               <span>P</span>
//               <span>S</span>
//             </h2>
//         </Link>
//           </div>
//         {/* main menu */}
//         <div
//           className={
//             showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
//           }
//         >
//           <ul>
//             <li>
//               <IoHome className="nav-icon" /> <Link to="/"> Home</Link>
//             </li>
//             <li>
//               <FaFireAlt className="nav-icon" />
//               <Link to="/skills"> Skills</Link>
//             </li>
//             <li>
//               <MdAssignment className="nav-icon" />{" "}
//               <Link to="/projects"> Projects</Link>
//             </li>
//             <li>
//               <TiPhone className="nav-icon" />{" "}
//               <Link to="/contact"> Contact</Link>
//             </li>
//           </ul>
//         </div>

//         {/* social media link */}
//         <div className="social-media">
//           <ul className="social-media-desktop">
//             <li>
//               <a
//                 href="https://www.linkedin.com/in/prachi-sharma-24651b21a/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <FaLinkedin />
//               </a>
//             </li>
//             <li>
//               <a
//                 href="https://github.com/prachi070"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <FaGithub />
//               </a>
//             </li>
//             <li>
//               <Link to="/contact">
//                 <FaMailBulk />
//               </Link>
//             </li>
//           </ul>

//           {/* hamburger */}
//           <div className="hamburger-menu">
//             <p onClick={handleHamburgerClick}>
//               <GiHamburgerMenu />
//             </p>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaLinkedin, FaGithub, FaMailBulk } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { FaFireAlt } from "react-icons/fa";
import { TiPhone } from "react-icons/ti";
import { MdAssignmentTurnedIn } from "react-icons/md";
import { MdAssignment } from "react-icons/md";
import { Link } from "react-router-dom";
import CircleNavbar from './CircleNavbar';

function Navbar() {
  return (
    <main className="min-h-screen bg-gray-50 p-44 flex flex-col justify-between">
  <CircleNavbar />
  
</main>

  );
}

export default Navbar;

