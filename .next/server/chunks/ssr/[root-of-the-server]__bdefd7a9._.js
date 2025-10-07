module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[project]/src/app/posters/[id]/page.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// 'use client';
// import Image from 'next/image';
// import { motion } from 'framer-motion';
// import React, { use } from 'react';
// import { useSearchParams, useRouter } from 'next/navigation';
// const posters = [
//   { id: 1, src: '/images/big-poster1.jpg', alt: 'Poster 1', title: 'Epic Adventure', color: '#e74c3c' },
//   { id: 2, src: '/images/big-poster2.jpg', alt: 'Poster 2', title: 'Mystic Journey', color: '#3498db' },
//   { id: 3, src: '/images/big-poster3.jpg', alt: 'Poster 3', title: 'Dark Future', color: '#9b59b6' },
//   { id: 4, src: '/images/big-poster4.jpg', alt: 'Poster 4', title: 'Ocean Deep', color: '#1abc9c' },
//   { id: 5, src: '/images/big-poster5.jpg', alt: 'Poster 5', title: 'Golden Hour', color: '#f39c12' },
//   { id: 6, src: '/images/big-poster6.jpg', alt: 'Poster 6', title: 'Fire Storm', color: '#e67e22' },
//   { id: 7, src: '/images/big-poster7.jpg', alt: 'Poster 7', title: 'Nature Call', color: '#2ecc71' },
//   { id: 8, src: '/images/big-poster8.jpg', alt: 'Poster 8', title: 'Cosmic Dust', color: '#34495e' },
//   { id: 9, src: '/images/big-poster9.jpg', alt: 'Poster 9', title: 'Neon Night', color: '#f1c40f' },
//   { id: 10, src: '/images/big-poster10.jpg', alt: 'Poster 10', title: 'Winter Tale', color: '#ecf0f1' },
//   { id: 11, src: '/images/big-poster11.jpg', alt: 'Poster 11', title: 'Desert Rose', color: '#e74c3c' },
//   { id: 12, src: '/images/big-poster12.jpg', alt: 'Poster 12', title: 'City Lights', color: '#95a5a6' },
//   { id: 13, src: '/images/big-poster13.jpg', alt: 'Poster 13', title: 'Forest Guard', color: '#27ae60' },
//   { id: 14, src: '/images/big-poster14.jpg', alt: 'Poster 14', title: 'Space Quest', color: '#c0392b' },
//   { id: 15, src: '/images/big-poster15.jpg', alt: 'Poster 15', title: 'Cosmic Dust', color: '#34495e' },
// ];
// export default function PosterPage({ params }) {
//   const { id } = use(params);
//   const searchParams = useSearchParams();
//   const isTransition = searchParams.get('transition') === 'true';
//   const poster = posters.find((p) => p.id === parseInt(id));
//   if (!poster) {
//     return (
//       <div className="flex items-center justify-center min-h-screen bg-black text-white">
//         Poster not found!
//       </div>
//     );
//   }
//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black text-white p-8">
//       {/* Background */}
//       <div
//         className="absolute inset-0 z-0"
//         style={{
//           backgroundImage: `url(${poster.src})`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           filter: 'blur(30px)',
//           transition: 'background-image 0.8s ease-in-out, filter 0.8s ease-in-out',
//           transform: 'scale(1.05)',
//         }}
//       />
//       <div className="absolute inset-0 bg-black opacity-60 z-10" />
//       <div className="relative z-20 flex flex-col items-center p-8 rounded-lg text-center max-w-lg">
//         <motion.div
//           className="w-340 h-170 relative rounded-lg overflow-hidden shadow-2xl border border-white/30 mb-8"
//           layoutId={`shared-poster-${poster.id}`}
//           // initial={false}
//           // animate={{ rotateY: 0, scale: 1 }}
//           // exit={{ rotateY: 90, scale: 1.5 }}
//           transition={{ 
//             duration: 0.8, 
//             ease: 'easeInOut'
//           }}
//         >
//           <Image src={poster.src} alt={poster.alt} fill className="object-cover" />
//         </motion.div>
//         <motion.h1 
//           className="text-4xl font-bold text-white mb-2"
//           initial={isTransition ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: -20 }}
//           transition={{ duration: 0.6, delay: isTransition ? 0.4 : 0 }}
//         >
//           {poster.title}
//         </motion.h1>
//         <motion.p 
//           className="text-lg text-gray-300"
//           initial={isTransition ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: -20 }}
//           transition={{ duration: 0.6, delay: isTransition ? 0.4 : 0 }}
//         >
//           Detailed information about the poster goes here.
//         </motion.p>
//       </div>
//     </div>
//   );
// }
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/router.js [app-ssr] (ecmascript)");
"use client";
;
;
const PosterPage = ()=>{
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const { src, title } = router.query; // get image src and title from query
    if (!src) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        children: "Loading..."
    }, void 0, false, {
        fileName: "[project]/src/app/posters/[id]/page.jsx",
        lineNumber: 104,
        columnNumber: 20
    }, ("TURBOPACK compile-time value", void 0));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-screen w-full bg-gray-100",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-1/2 flex items-center justify-center p-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: src,
                    alt: title,
                    className: "rounded-xl shadow-2xl w-full h-auto object-contain"
                }, void 0, false, {
                    fileName: "[project]/src/app/posters/[id]/page.jsx",
                    lineNumber: 110,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/posters/[id]/page.jsx",
                lineNumber: 109,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-1/2 p-10 flex flex-col justify-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-4xl font-bold mb-4",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/src/app/posters/[id]/page.jsx",
                        lineNumber: 119,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-700",
                        children: "Here you can put more information about this poster or collection."
                    }, void 0, false, {
                        fileName: "[project]/src/app/posters/[id]/page.jsx",
                        lineNumber: 120,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/posters/[id]/page.jsx",
                lineNumber: 118,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/posters/[id]/page.jsx",
        lineNumber: 107,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = PosterPage;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__bdefd7a9._.js.map