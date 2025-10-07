module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/src/app/posters/[id]/page.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PosterPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
const posters = [
    {
        id: 1,
        src: '/images/big-poster1.jpg',
        alt: 'Poster 1',
        title: 'Epic Adventure',
        color: '#e74c3c'
    },
    {
        id: 2,
        src: '/images/big-poster2.jpg',
        alt: 'Poster 2',
        title: 'Mystic Journey',
        color: '#3498db'
    },
    {
        id: 3,
        src: '/images/big-poster3.jpg',
        alt: 'Poster 3',
        title: 'Dark Future',
        color: '#9b59b6'
    },
    {
        id: 4,
        src: '/images/big-poster4.jpg',
        alt: 'Poster 4',
        title: 'Ocean Deep',
        color: '#1abc9c'
    },
    {
        id: 5,
        src: '/images/big-poster5.jpg',
        alt: 'Poster 5',
        title: 'Golden Hour',
        color: '#f39c12'
    },
    {
        id: 6,
        src: '/images/big-poster6.jpg',
        alt: 'Poster 6',
        title: 'Fire Storm',
        color: '#e67e22'
    },
    {
        id: 7,
        src: '/images/big-poster7.jpg',
        alt: 'Poster 7',
        title: 'Nature Call',
        color: '#2ecc71'
    },
    {
        id: 8,
        src: '/images/big-poster8.jpg',
        alt: 'Poster 8',
        title: 'Cosmic Dust',
        color: '#34495e'
    },
    {
        id: 9,
        src: '/images/big-poster9.jpg',
        alt: 'Poster 9',
        title: 'Neon Night',
        color: '#f1c40f'
    },
    {
        id: 10,
        src: '/images/big-poster10.jpg',
        alt: 'Poster 10',
        title: 'Winter Tale',
        color: '#ecf0f1'
    },
    {
        id: 11,
        src: '/images/big-poster11.jpg',
        alt: 'Poster 11',
        title: 'Desert Rose',
        color: '#e74c3c'
    },
    {
        id: 12,
        src: '/images/big-poster12.jpg',
        alt: 'Poster 12',
        title: 'City Lights',
        color: '#95a5a6'
    },
    {
        id: 13,
        src: '/images/big-poster13.jpg',
        alt: 'Poster 13',
        title: 'Forest Guard',
        color: '#27ae60'
    },
    {
        id: 14,
        src: '/images/big-poster14.jpg',
        alt: 'Poster 14',
        title: 'Space Quest',
        color: '#c0392b'
    },
    {
        id: 15,
        src: '/images/big-poster15.jpg',
        alt: 'Poster 15',
        title: 'Cosmic Dust',
        color: '#34495e'
    }
];
function PosterPage({ params }) {
    const { id } = params;
    const poster = posters.find((p)=>p.id === parseInt(id));
    if (!poster) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center min-h-screen bg-black text-white",
            children: "Poster not found!"
        }, void 0, false, {
            fileName: "[project]/src/app/posters/[id]/page.jsx",
            lineNumber: 31,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 flex items-center justify-center bg-black text-white p-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 z-0",
                style: {
                    backgroundImage: `url(${poster.src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'blur(30px)',
                    transition: 'background-image 0.8s ease-in-out, filter 0.8s ease-in-out',
                    transform: 'scale(1.05)'
                }
            }, void 0, false, {
                fileName: "[project]/src/app/posters/[id]/page.jsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-black opacity-60 z-10"
            }, void 0, false, {
                fileName: "[project]/src/app/posters/[id]/page.jsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-20 flex flex-col items-center p-8 rounded-lg text-center max-w-lg",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "w-200 h-150 relative rounded-lg overflow-hidden shadow-2xl border border-white/30 mb-8",
                        layoutId: `poster-${poster.id}`,
                        initial: {
                            rotateY: 90
                        },
                        animate: {
                            rotateY: 0
                        },
                        transition: {
                            duration: 0.8,
                            ease: 'easeInOut'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            src: poster.src,
                            alt: poster.alt,
                            fill: true,
                            className: "object-cover"
                        }, void 0, false, {
                            fileName: "[project]/src/app/posters/[id]/page.jsx",
                            lineNumber: 61,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/posters/[id]/page.jsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-4xl font-bold text-white mb-2",
                        children: poster.title
                    }, void 0, false, {
                        fileName: "[project]/src/app/posters/[id]/page.jsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-lg text-gray-300",
                        children: "Detailed information about the poster goes here."
                    }, void 0, false, {
                        fileName: "[project]/src/app/posters/[id]/page.jsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/posters/[id]/page.jsx",
                lineNumber: 53,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/posters/[id]/page.jsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__b919768b._.js.map