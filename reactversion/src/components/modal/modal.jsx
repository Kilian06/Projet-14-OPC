// import React from "react";
// import { Link } from "react-router-dom";
// import { useState } from "react";

// function Modal(props) {
//   const {
//     bgModal,
//     bgContent,
//     colorContent,
//     colorClose,
//     visible,
//     closelink,
//     textContent,
//     onClose,
//   } = props;

//   const display = visible ? "" : "none";

//   const handleClose = () => {
//     if (props.onClose) {
//       props.onClose();
//     }
//   };

//   if (closelink === "") {
//     return (
//       <>
//         <div
//           style={{
//             position: "absolute",
//             top: "50%",
//             left: "50%",
//             zIndex: "1",
//             backgroundColor: bgContent,
//             padding: "20px 50px",
//             borderRadius: "5px",
//             margin: "auto",
//             transform: "translate(-50%, -50%)",
//             display: display,
//           }}
//         >
//           <p style={{ color: colorContent }}>{textContent}</p>
//           <div>
//             <svg
//               onClick={handleClose}
//               className="closeModal"
//               height="30px"
//               id="Layer_1"
//               version="1.1"
//               viewBox="0 0 512 512"
//               style={{
//                 fill: colorClose,
//                 position: "absolute",
//                 top: "0px",
//                 right: "0px",
//               }}
//             >
//               <path d="M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4  L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1  c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1  c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z" />
//             </svg>
//           </div>
//         </div>
//         <div
//           style={{
//             backgroundColor: bgModal,
//             width: "100vw",
//             height: "100vh",
//             position: "absolute",
//             top: "0",
//             left: "0",
//             opacity: "0.5",
//             display: display,
//           }}
//         ></div>
//       </>
//     );
//   } else {
//     return (
//       <>
//         <div
//           style={{
//             position: "absolute",
//             top: "50%",
//             left: "50%",
//             zIndex: "1",
//             backgroundColor: bgContent,
//             padding: "20px 50px",
//             borderRadius: "5px",
//             margin: "auto",
//             transform: "translate(-50%, -50%)",
//             display: display,
//           }}
//         >
//           <p style={{ color: colorContent }}>{textContent}</p>
//           <Link to={closelink}>
//             <svg
//               className="closeModal"
//               height="30px"
//               id="Layer_1"
//               version="1.1"
//               viewBox="0 0 512 512"
//               style={{
//                 fill: colorClose,
//                 position: "absolute",
//                 top: "0px",
//                 right: "0px",
//               }}
//             >
//               <path d="M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4  L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1  c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1  c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z" />
//             </svg>
//           </Link>
//         </div>
//         <div
//           style={{
//             backgroundColor: bgModal,
//             width: "100vw",
//             height: "100vh",
//             position: "absolute",
//             top: "0",
//             left: "0",
//             opacity: "0.5",
//             display: display,
//           }}
//         ></div>
//       </>
//     );
//   }
// }

// export default Modal;
