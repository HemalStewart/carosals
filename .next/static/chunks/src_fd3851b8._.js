(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/CircleCarousel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CircleCarousel",
    ()=>CircleCarousel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const posters = [
    {
        id: 1,
        src: '/images/poster1.jpg',
        alt: 'Poster 1',
        title: 'Epic Adventure',
        genre: 'Action',
        rating: 4.8,
        year: 2024,
        color: '#e74c3c'
    },
    {
        id: 2,
        src: '/images/poster2.jpg',
        alt: 'Poster 2',
        title: 'Mystic Journey',
        genre: 'Fantasy',
        rating: 4.5,
        year: 2023,
        color: '#3498db'
    },
    {
        id: 3,
        src: '/images/poster3.jpg',
        alt: 'Poster 3',
        title: 'Dark Future',
        genre: 'Sci-Fi',
        rating: 4.9,
        year: 2024,
        color: '#9b59b6'
    },
    {
        id: 4,
        src: '/images/poster4.jpg',
        alt: 'Poster 4',
        title: 'Ocean Deep',
        genre: 'Adventure',
        rating: 4.2,
        year: 2022,
        color: '#1abc9c'
    },
    {
        id: 5,
        src: '/images/poster5.jpg',
        alt: 'Poster 5',
        title: 'Golden Hour',
        genre: 'Drama',
        rating: 4.7,
        year: 2023,
        color: '#f39c12'
    },
    {
        id: 6,
        src: '/images/poster6.jpg',
        alt: 'Poster 6',
        title: 'Fire Storm',
        genre: 'Thriller',
        rating: 4.6,
        year: 2024,
        color: '#e67e22'
    },
    {
        id: 7,
        src: '/images/poster7.jpg',
        alt: 'Poster 7',
        title: 'Nature Call',
        genre: 'Documentary',
        rating: 4.3,
        year: 2021,
        color: '#2ecc71'
    },
    {
        id: 8,
        src: '/images/poster8.jpg',
        alt: 'Poster 8',
        title: 'Steel City',
        genre: 'Action',
        rating: 4.8,
        year: 2023,
        color: '#34495e'
    },
    {
        id: 9,
        src: '/images/poster9.jpg',
        alt: 'Poster 9',
        title: 'Sunshine',
        genre: 'Comedy',
        rating: 4.5,
        year: 2024,
        color: '#f1c40f'
    },
    {
        id: 10,
        src: '/images/poster10.jpg',
        alt: 'Poster 10',
        title: 'Purple Rain',
        genre: 'Musical',
        rating: 4.9,
        year: 2022,
        color: '#8e44ad'
    },
    {
        id: 11,
        src: '/images/poster11.jpg',
        alt: 'Poster 11',
        title: 'Emerald City',
        genre: 'Fantasy',
        rating: 4.4,
        year: 2023,
        color: '#16a085'
    },
    {
        id: 12,
        src: '/images/poster12.jpg',
        alt: 'Poster 12',
        title: 'Forest Moon',
        genre: 'Sci-Fi',
        rating: 4.7,
        year: 2024,
        color: '#27ae60'
    },
    {
        id: 13,
        src: '/images/poster13.jpg',
        alt: 'Poster 13',
        title: 'Blue Horizon',
        genre: 'Adventure',
        rating: 4.6,
        year: 2023,
        color: '#2980b9'
    },
    {
        id: 14,
        src: '/images/poster14.jpg',
        alt: 'Poster 14',
        title: 'Crimson Sky',
        genre: 'Drama',
        rating: 4.2,
        year: 2022,
        color: '#c0392b'
    }
];
const CircleCarousel = ()=>{
    _s();
    const [currentIndex, setCurrentIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [hoveredIndex, setHoveredIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const intervalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CircleCarousel.useEffect": ()=>{
            intervalRef.current = setInterval({
                "CircleCarousel.useEffect": ()=>{
                    setCurrentIndex({
                        "CircleCarousel.useEffect": (prev)=>(prev + 1) % posters.length
                    }["CircleCarousel.useEffect"]);
                }
            }["CircleCarousel.useEffect"], 6000);
            return ({
                "CircleCarousel.useEffect": ()=>{
                    if (intervalRef.current) clearInterval(intervalRef.current);
                }
            })["CircleCarousel.useEffect"];
        }
    }["CircleCarousel.useEffect"], []);
    const nextSlide = ()=>setCurrentIndex((prev)=>(prev + 1) % posters.length);
    const prevSlide = ()=>setCurrentIndex((prev)=>(prev - 1 + posters.length) % posters.length);
    const goToSlide = (index)=>setCurrentIndex(index);
    const getTransform = (index)=>{
        let diff = index - currentIndex;
        if (diff > posters.length / 2) diff -= posters.length;
        if (diff < -posters.length / 2) diff += posters.length;
        const angle = 360 / posters.length * diff;
        const scale = index === currentIndex ? 1.7 : 0.8; // side posters slightly smaller
        const filter = index === currentIndex ? 'grayscale(0%)' : 'grayscale(100%)';
        const zIndex = index === currentIndex ? 10 : 5;
        return {
            transform: "rotateY(".concat(angle, "deg) translateZ(").concat(diff === 0 ? 450 : 600, "px) scale(").concat(scale, ")"),
            filter,
            zIndex
        };
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full h-screen bg-black flex justify-center items-center overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 transition-all duration-1000 ease-out",
                        style: {
                            backgroundImage: "url(".concat(posters[currentIndex].src, ")"),
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            filter: 'blur(5px) brightness(0.3)',
                            transform: 'scale(1.1)'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/CircleCarousel.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 opacity-30",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute w-96 h-96 rounded-full blur-3xl animate-pulse",
                                style: {
                                    background: "radial-gradient(circle, ".concat(posters[currentIndex].color, "60 0%, transparent 70%)"),
                                    left: '10%',
                                    top: '20%',
                                    animation: 'float 8s ease-in-out infinite'
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/CircleCarousel.tsx",
                                lineNumber: 74,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute w-80 h-80 rounded-full blur-2xl animate-pulse",
                                style: {
                                    background: "radial-gradient(circle, ".concat(posters[(currentIndex + 2) % posters.length].color, "40 0%, transparent 70%)"),
                                    right: '15%',
                                    bottom: '25%',
                                    animation: 'float 10s ease-in-out infinite reverse'
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/CircleCarousel.tsx",
                                lineNumber: 83,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CircleCarousel.tsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/CircleCarousel.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-[600px] h-[400px] flex items-center justify-center",
                style: {
                    perspective: '1200px',
                    transformStyle: 'preserve-3d'
                },
                children: posters.map((poster, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute transition-all duration-700 ease-in-out cursor-pointer",
                        style: {
                            ...getTransform(index),
                            ...index === hoveredIndex && {
                                transform: "".concat(getTransform(index).transform, " scale(1.15)")
                            }
                        },
                        onClick: ()=>goToSlide(index),
                        onMouseEnter: ()=>setHoveredIndex(index),
                        onMouseLeave: ()=>setHoveredIndex(null),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-48 h-60 relative bg-gray-900 rounded-lg overflow-hidden border border-white/20",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: poster.src,
                                alt: poster.alt,
                                fill: true,
                                className: "object-cover",
                                onError: (e)=>{
                                    e.currentTarget.src = "https://via.placeholder.com/300x400/".concat(poster.color.slice(1), "/fff?text=Poster+").concat(poster.id);
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/CircleCarousel.tsx",
                                lineNumber: 113,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/CircleCarousel.tsx",
                            lineNumber: 112,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, poster.id, false, {
                        fileName: "[project]/src/components/CircleCarousel.tsx",
                        lineNumber: 101,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/src/components/CircleCarousel.tsx",
                lineNumber: 96,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-16 flex justify-center space-x-20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: prevSlide,
                        className: "w-16 h-16 bg-white/10 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 group",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "w-8 h-8 group-hover:scale-110 transition-transform",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M15 19l-7-7 7-7"
                            }, void 0, false, {
                                fileName: "[project]/src/components/CircleCarousel.tsx",
                                lineNumber: 134,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/CircleCarousel.tsx",
                            lineNumber: 133,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/CircleCarousel.tsx",
                        lineNumber: 129,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: nextSlide,
                        className: "w-16 h-16 bg-white/10 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 group",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "w-8 h-8 group-hover:scale-110 transition-transform",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M9 5l7 7-7 7"
                            }, void 0, false, {
                                fileName: "[project]/src/components/CircleCarousel.tsx",
                                lineNumber: 142,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/CircleCarousel.tsx",
                            lineNumber: 141,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/CircleCarousel.tsx",
                        lineNumber: 137,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/CircleCarousel.tsx",
                lineNumber: 128,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/CircleCarousel.tsx",
        lineNumber: 60,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(CircleCarousel, "mBUgdM+o+FLwFYyV2UNn2AXCtTA=");
_c = CircleCarousel;
var _c;
__turbopack_context__.k.register(_c, "CircleCarousel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/circle-carousel/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CircleCarouselPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CircleCarousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/CircleCarousel.tsx [app-client] (ecmascript)");
'use client';
;
;
function CircleCarouselPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CircleCarousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CircleCarousel"], {}, void 0, false, {
        fileName: "[project]/src/app/circle-carousel/page.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = CircleCarouselPage;
var _c;
__turbopack_context__.k.register(_c, "CircleCarouselPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_fd3851b8._.js.map