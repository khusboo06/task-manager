



// import Navbar from "@/components/Navbar";
// import Link from "next/link";
// import { CheckCircle2 } from "lucide-react";
// import { FaRocket } from "react-icons/fa";

// export default function Home() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-black text-white">

//       <Navbar />

//       {/* HERO SECTION */}
//       <div className="flex flex-col md:flex-row items-center justify-between px-10 py-20 max-w-7xl mx-auto">

//         {/* LEFT CONTENT */}
//         <div className="max-w-xl">

//           <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
//             Stay Organized. <br />
//             <span className="text-indigo-400">Get Things Done.</span>
//           </h1>

//           <p className="mt-6 text-gray-300 text-lg">
//             Plan your day, track your progress, and manage tasks effortlessly —
//             all in one clean and intuitive workspace.
//           </p>

//           {/* CTA */}
//           <div className="mt-8 flex gap-4">
//             <Link href="/register">
//               <button className="flex items-center gap-2 bg-indigo-500 px-6 py-3 rounded-xl text-lg hover:bg-indigo-600 shadow-lg transition">
//   <FaRocket />
//   Start Managing Tasks
// </button>
//             </Link>

//             <Link href="/login">
//               <button className="border border-white/30 px-6 py-3 rounded-xl hover:bg-white/10 transition">
//                 Login
//               </button>
//             </Link>
//           </div>

//           {/* TRUST LINE */}
//           <div className="mt-6 flex items-center gap-3 text-gray-400">
//             <CheckCircle2 className="text-green-400" />
//             <span>Simple • Reliable • Focused</span>
//           </div>

//         </div>

//         {/* RIGHT SIDE (BIG VISUAL ICON) */}
//         <div className="mt-12 md:mt-0 flex justify-center">
//           <div className="w-72 h-72 bg-white/10 backdrop-blur-xl rounded-3xl flex items-center justify-center shadow-2xl border border-white/20">

//             <span className="text-8xl">📋</span>

//           </div>
//         </div>

//       </div>

//       {/* SECOND SECTION (REAL USE CASE) */}
//       <div className="max-w-6xl mx-auto px-10 pb-20">

//         <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-lg">

//           <h2 className="text-2xl font-semibold mb-4">
//             Built for everyday productivity
//           </h2>

//           <p className="text-gray-300 leading-relaxed">
//             Whether you're managing personal tasks, planning your studies,
//             or organizing work — this system helps you stay focused and
//             in control without unnecessary complexity.
//           </p>

//         </div>

//       </div>

//       {/* FOOTER */}
//       <div className="text-center text-gray-500 pb-6">
//         © 2026 TaskFlow
//       </div>

//     </div>
//   );
// } 


"use client";

import Navbar from "@/components/Navbar";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { FaRocket } from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-black text-white">

      <Navbar />

      {/* HERO SECTION */}
      <div className="flex flex-col md:flex-row items-center justify-between px-4 sm:px-10 py-12 sm:py-20 max-w-7xl mx-auto">

        {/* LEFT CONTENT */}
        <div className="max-w-xl">

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
            Stay Organized. <br />
            <span className="text-indigo-400">Get Things Done.</span>
          </h1>

          <p className="mt-4 sm:mt-6 text-gray-300 text-sm sm:text-lg">
            Plan your day, track your progress, and manage tasks effortlessly —
            all in one clean and intuitive workspace.
          </p>

          {/* CTA */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link href="/register">
              <button className="flex items-center justify-center gap-2 bg-indigo-500 px-4 sm:px-6 py-2 sm:py-3 rounded-xl text-sm sm:text-lg hover:bg-indigo-600 shadow-lg transition w-full sm:w-auto">
                <FaRocket />
                Start Managing Tasks
              </button>
            </Link>

            <Link href="/login">
              <button className="border border-white/30 px-4 sm:px-6 py-2 sm:py-3 rounded-xl hover:bg-white/10 transition text-sm sm:text-base w-full sm:w-auto">
                Login
              </button>
            </Link>
          </div>

          {/* TRUST LINE */}
          <div className="mt-4 sm:mt-6 flex items-center gap-2 sm:gap-3 text-gray-400 text-sm sm:text-base">
            <CheckCircle2 className="text-green-400" size={18} />
            <span>Simple • Reliable • Focused</span>
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="mt-10 md:mt-0 flex justify-center">
          <div className="w-48 h-48 sm:w-72 sm:h-72 bg-white/10 backdrop-blur-xl rounded-3xl flex items-center justify-center shadow-2xl border border-white/20">

            <span className="text-5xl sm:text-8xl">📋</span>

          </div>
        </div>

      </div>

      {/* SECOND SECTION */}
      <div className="max-w-6xl mx-auto px-4 sm:px-10 pb-16 sm:pb-20">

        <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-5 sm:p-8 border border-white/10 shadow-lg">

          <h2 className="text-lg sm:text-2xl font-semibold mb-3 sm:mb-4">
            Built for everyday productivity
          </h2>

          <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
            Whether you're managing personal tasks, planning your studies,
            or organizing work — this system helps you stay focused and
            in control without unnecessary complexity.
          </p>

        </div>

      </div>

      {/* FOOTER */}
      <div className="text-center text-gray-500 pb-4 sm:pb-6 text-sm sm:text-base">
        © 2026 TaskFlow
      </div>

    </div>
  );
}