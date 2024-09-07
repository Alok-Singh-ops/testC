// "use client"; // Ensure this runs on the client side

// import { useState, useEffect } from 'react';
// import { motion, useAnimation } from 'framer-motion';
// import Page1 from "@/Components/Page1";
// import Page2 from "@/Components/Page2";
// import Page4 from "@/Components/Page4";
// import Page5 from "@/Components/Page5";
// import Page6 from "@/Components/Page6";

// const pages = [Page1, Page2, Page4, Page5, Page6];

// export default function Background() {
//   const [currentPageIndex, setCurrentPageIndex] = useState(0);
//   const controls = useAnimation();

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.scrollY || document.documentElement.scrollTop;
//       const docHeight = document.documentElement.scrollHeight;
//       const winHeight = window.innerHeight;

//       // Calculate the percentage of scroll
//       const scrollPercentage = (scrollTop / (docHeight - winHeight));

//       // Calculate the page index based on the scroll percentage
//       const newPageIndex = Math.min(
//         pages.length - 1,
//         Math.floor(scrollPercentage * pages.length)
//       );

//       // Update page only if it changes
//       if (newPageIndex !== currentPageIndex) {
//         setCurrentPageIndex(newPageIndex);
//       }
//     };

//     // Add scroll event listener
//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       // Cleanup event listener on component unmount
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [currentPageIndex]);

//   return (
//     <div className="h-screen w-screen overflow-hidden">
//       {/* Render the current page with smooth transition */}
//       {pages.map((PageComponent, index) => (
//         <motion.div
//           key={index}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: currentPageIndex === index ? 1 : 0 }}
//           transition={{ duration: 0.5, ease: "easeOut" }}
//           className="absolute inset-0 flex items-center justify-center"
//         >
//           <PageComponent />
//         </motion.div>
//       ))}
//     </div>
//   );
// }





// import Page1 from "@/Components/Page1";
// import Page2 from "@/Components/Page2";
// import Page4 from "@/Components/Page4";
// import Page5 from "@/Components/Page5";
// import Page6 from "@/Components/Page6";
// import { Main } from "next/document";

// export default function Background() {
//   return (
//     <div>
//       {/* <Page1 />     */}
//       {/* <Page2 />     */}
//       {/* <Page4 />     */}
//       {/* <Page5 />     */}
//       {/* <Page6 />     */}
//       <Main />
//     </div>
//   );
// }


// "use client";
// import { motion } from "framer-motion";
// import { useState } from "react";
// import Page1 from "@/Components/Page1";
// import Page2 from "@/Components/Page2";
// import Page4 from "@/Components/Page4";
// import Page5 from "@/Components/Page5";
// import Page6 from "@/Components/Page6";

// const pages = [Page1, Page2, Page4, Page5, Page6];

// export default function Background() {
//   const [currentPage, setCurrentPage] = useState(0);

//   return (
//     <motion.div
//       initial={{ x: 0 }}
//       animate={{ x: 0 }}
//       transition={{ duration: 0.5 }}
//       style={{ position: "relative", overflow: "hidden" }}
//     >
//       {pages.map((Page, index) => (
//         <motion.div
//           key={index}
//           initial={{ x: index === currentPage ? 0 : 100 }}
//           animate={{ x: index === currentPage ? 0 : -100 }}
//           transition={{ duration: 0.5 }}
//           style={{ position: "absolute", top: 0, left: 0, width: "100%" }}
//           onWheel={(e) => {
//             if (e.deltaY > 0) {
//               setCurrentPage((prevPage) => (prevPage + 1) % pages.length);
//             } else {
//               setCurrentPage((prevPage) => (prevPage - 1 + pages.length) % pages.length);
//             }
//           }}
//         >
//           <Page />
//         </motion.div>
//       ))}
//     </motion.div>
//   );
// }