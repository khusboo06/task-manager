



// "use client";

// import Link from "next/link";
// import { useEffect, useState } from "react";
// import { LogOut } from "lucide-react";
// import { FaRocket } from "react-icons/fa";

// export default function Navbar() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     const token = localStorage.getItem("accessToken");
//     setIsLoggedIn(!!token);
//   }, []);

//   const logout = () => {
//     localStorage.removeItem("accessToken");
//     localStorage.removeItem("refreshToken");
//     window.location.href = "/";
//   };

//   return (
//     <nav className="flex flex-col sm:flex-row justify-between items-center gap-4 px-4 sm:px-8 py-5 bg-white/5 backdrop-blur-lg border-b border-white/10 sticky top-0 z-50">

//       {/* LOGO */}
//       <h1 className="text-2xl font-bold text-indigo-400 flex items-center gap-2">
//   <FaRocket size={24} />
//   TaskFlow
// </h1>

//       {/* RIGHT SIDE */}
//       <div className="flex gap-6 items-center">

//         <Link href="/">
//           <span className="hover:text-indigo-300 cursor-pointer">
//             Home
//           </span>
//         </Link>

//         {!isLoggedIn ? (
//           <>
//             <Link href="/login">
//               <span className="hover:text-indigo-300 cursor-pointer">
//                 Login
//               </span>
//             </Link>

//             <Link href="/register">
//               <button className="bg-indigo-500 px-5 py-2 rounded-xl hover:bg-indigo-600 transition shadow-lg">
//                 Get Started
//               </button>
//             </Link>
//           </>
//         ) : (
//           <>
//             <Link href="/dashboard">
//               <button className="bg-indigo-500 px-5 py-2 rounded-xl hover:bg-indigo-600">
//                 Dashboard
//               </button>
//             </Link>

//             <button
//               onClick={logout}
//               className="flex items-center gap-2 text-red-400 hover:text-red-500"
//             >
//               <LogOut size={18} /> Logout
//             </button>
//           </>
//         )}

//       </div>
//     </nav>
//   );
// }


"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { LogOut, Menu, X } from "lucide-react";
import { FaRocket } from "react-icons/fa";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [open, setOpen] = useState(false); // ✅ mobile menu

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    setIsLoggedIn(!!token);
  }, []);

  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <nav className="flex justify-between items-center px-4 sm:px-8 py-5 bg-white/5 backdrop-blur-lg border-b border-white/10 sticky top-0 z-50">

      {/* LOGO */}
      <h1 className="text-xl sm:text-2xl font-bold text-indigo-400 flex items-center gap-2">
        <FaRocket size={22} />
        TaskFlow
      </h1>

      {/* DESKTOP MENU (unchanged) */}
      <div className="hidden sm:flex gap-6 items-center">

        <Link href="/">
          <span className="hover:text-indigo-300 cursor-pointer">Home</span>
        </Link>

        {!isLoggedIn ? (
          <>
            <Link href="/login">
              <span className="hover:text-indigo-300 cursor-pointer">
                Login
              </span>
            </Link>

            <Link href="/register">
              <button className="bg-indigo-500 px-5 py-2 rounded-xl hover:bg-indigo-600 transition shadow-lg">
                Get Started
              </button>
            </Link>
          </>
        ) : (
          <>
            <Link href="/dashboard">
              <button className="bg-indigo-500 px-5 py-2 rounded-xl hover:bg-indigo-600">
                Dashboard
              </button>
            </Link>

            <button
              onClick={logout}
              className="flex items-center gap-2 text-red-400 hover:text-red-500"
            >
              <LogOut size={18} /> Logout
            </button>
          </>
        )}
      </div>

      {/* MOBILE ICON */}
      <button
        className="sm:hidden text-white"
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* MOBILE MENU */}
      {open && (
        <div className="absolute top-16 left-0 w-full bg-black/90 backdrop-blur-lg flex flex-col items-center gap-4 py-6 sm:hidden">

          <Link href="/" onClick={() => setOpen(false)}>
            Home
          </Link>

          {!isLoggedIn ? (
            <>
              <Link href="/login" onClick={() => setOpen(false)}>
                Login
              </Link>

              <Link href="/register" onClick={() => setOpen(false)}>
                <button className="bg-indigo-500 px-5 py-2 rounded-xl">
                  Get Started
                </button>
              </Link>
            </>
          ) : (
            <>
              <Link href="/dashboard" onClick={() => setOpen(false)}>
                Dashboard
              </Link>

              <button
                onClick={logout}
                className="flex items-center gap-2 text-red-400"
              >
                <LogOut size={18} /> Logout
              </button>
            </>
          )}
        </div>
      )}

    </nav>
  );
}