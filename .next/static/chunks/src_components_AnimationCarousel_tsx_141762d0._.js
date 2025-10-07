(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/AnimationCarousel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AnimationCarousel",
    ()=>AnimationCarousel
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
const AnimationCarousel = ()=>{
    _s();
    const [currentIndex, setCurrentIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isAutoPlay, setIsAutoPlay] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [hoveredIndex, setHoveredIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const intervalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Auto play
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AnimationCarousel.useEffect": ()=>{
            if (isAutoPlay) {
                intervalRef.current = setInterval({
                    "AnimationCarousel.useEffect": ()=>{
                        setCurrentIndex({
                            "AnimationCarousel.useEffect": (prev)=>(prev + 1) % posters.length
                        }["AnimationCarousel.useEffect"]);
                    }
                }["AnimationCarousel.useEffect"], 4000);
            }
            return ({
                "AnimationCarousel.useEffect": ()=>{
                    if (intervalRef.current) clearInterval(intervalRef.current);
                }
            })["AnimationCarousel.useEffect"];
        }
    }["AnimationCarousel.useEffect"], [
        isAutoPlay,
        currentIndex
    ]);
    const goToSlide = (index)=>{
        setCurrentIndex(index);
    };
    const nextSlide = ()=>{
        setCurrentIndex((prev)=>(prev + 1) % posters.length);
    };
    const prevSlide = ()=>{
        setCurrentIndex((prev)=>(prev - 1 + posters.length) % posters.length);
    };
    const getTransform = (index)=>{
        const diff = index - currentIndex;
        const distance = Math.abs(diff);
        if (distance === 0) {
            return {
                transform: 'translateX(0) translateY(0) scale(1.2) rotateY(0deg)',
                zIndex: 100,
                opacity: 1,
                filter: 'brightness(1.3) saturate(1.3) drop-shadow(0 25px 50px rgba(0,0,0,0.8))'
            };
        }
        const offset = diff * 280;
        const yOffset = distance * 20;
        const scale = Math.max(0.4, 1 - distance * 0.15);
        const rotateY = diff * -25;
        const opacity = Math.max(0.2, 1 - distance * 0.2);
        const blur = distance > 0 ? distance : 0;
        return {
            transform: "translateX(".concat(offset, "px) translateY(").concat(yOffset, "px) scale(").concat(scale, ") rotateY(").concat(rotateY, "deg)"),
            zIndex: 100 - distance,
            opacity: opacity,
            filter: "brightness(".concat(1 - distance * 0.1, ") blur(").concat(blur, "px) drop-shadow(0 ").concat(15 - distance * 3, "px ").concat(30 - distance * 5, "px rgba(0,0,0,").concat(0.6 - distance * 0.1, "))")
        };
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative min-h-screen bg-black overflow-hidden flex flex-col justify-between",
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
                        fileName: "[project]/src/components/AnimationCarousel.tsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 transition-all duration-1000",
                        style: {
                            background: "linear-gradient(135deg, ".concat(posters[currentIndex].color, "40, transparent 50%, ").concat(posters[(currentIndex + 1) % posters.length].color, "30)")
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/AnimationCarousel.tsx",
                        lineNumber: 97,
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
                                fileName: "[project]/src/components/AnimationCarousel.tsx",
                                lineNumber: 106,
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
                                fileName: "[project]/src/components/AnimationCarousel.tsx",
                                lineNumber: 115,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/AnimationCarousel.tsx",
                        lineNumber: 105,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/AnimationCarousel.tsx",
                lineNumber: 84,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-20 flex-grow flex items-center justify-center px-16",
                onMouseEnter: ()=>setIsAutoPlay(false),
                onMouseLeave: ()=>setIsAutoPlay(true),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative w-full max-w-6xl",
                    style: {
                        perspective: '1000px'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative h-[400px] flex items-center justify-center",
                            children: posters.map((poster, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute cursor-pointer transition-all duration-700 ease-out group",
                                    style: {
                                        ...getTransform(index),
                                        transformStyle: 'preserve-3d'
                                    },
                                    onClick: ()=>goToSlide(index),
                                    onMouseEnter: ()=>setHoveredIndex(index),
                                    onMouseLeave: ()=>setHoveredIndex(null),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-64 h-80 relative",
                                        children: [
                                            index === currentIndex && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute -inset-3 rounded-2xl blur-xl opacity-70 animate-pulse",
                                                style: {
                                                    background: "linear-gradient(45deg, ".concat(poster.color, "80, ").concat(posters[(currentIndex + 1) % posters.length].color, "60)")
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/AnimationCarousel.tsx",
                                                lineNumber: 152,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative w-full h-full bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-md rounded-xl overflow-hidden border border-white/30 shadow-2xl",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative w-full h-full overflow-hidden",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: poster.src,
                                                        alt: poster.alt,
                                                        fill: true,
                                                        className: "object-cover transition-transform duration-500 group-hover:scale-110",
                                                        onError: (e)=>{
                                                            e.currentTarget.src = "https://via.placeholder.com/300x400/".concat(poster.color.slice(1), "/fff?text=Poster+").concat(poster.id);
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/AnimationCarousel.tsx",
                                                        lineNumber: 164,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AnimationCarousel.tsx",
                                                    lineNumber: 163,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/AnimationCarousel.tsx",
                                                lineNumber: 161,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/AnimationCarousel.tsx",
                                        lineNumber: 149,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, poster.id, false, {
                                    fileName: "[project]/src/components/AnimationCarousel.tsx",
                                    lineNumber: 137,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/src/components/AnimationCarousel.tsx",
                            lineNumber: 135,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: prevSlide,
                            className: "absolute left-0 top-1/2 -translate-y-1/2 -translate-x-8 w-12 h-12 bg-white/10 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 group z-30",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-6 h-6 group-hover:scale-110 transition-transform",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M15 19l-7-7 7-7"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AnimationCarousel.tsx",
                                    lineNumber: 186,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/AnimationCarousel.tsx",
                                lineNumber: 185,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/AnimationCarousel.tsx",
                            lineNumber: 181,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: nextSlide,
                            className: "absolute right-0 top-1/2 -translate-y-1/2 translate-x-8 w-12 h-12 bg-white/10 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 group z-30",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-6 h-6 group-hover:scale-110 transition-transform",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M9 5l7 7-7 7"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AnimationCarousel.tsx",
                                    lineNumber: 195,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/AnimationCarousel.tsx",
                                lineNumber: 194,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/AnimationCarousel.tsx",
                            lineNumber: 190,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/AnimationCarousel.tsx",
                    lineNumber: 133,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/AnimationCarousel.tsx",
                lineNumber: 128,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-30 flex justify-center space-x-3 pb-8",
                children: posters.map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>goToSlide(index),
                        className: "w-3 h-3 rounded-full transition-all duration-300 ".concat(index === currentIndex ? 'scale-125 shadow-lg' : 'hover:scale-110 opacity-60 hover:opacity-80'),
                        style: {
                            backgroundColor: index === currentIndex ? posters[currentIndex].color : '#ffffff'
                        }
                    }, index, false, {
                        fileName: "[project]/src/components/AnimationCarousel.tsx",
                        lineNumber: 204,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/src/components/AnimationCarousel.tsx",
                lineNumber: 202,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/AnimationCarousel.tsx",
        lineNumber: 82,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(AnimationCarousel, "1yOTXzrxuJr8MGGU5mi2A5gPu/A=");
_c = AnimationCarousel;
var _c;
__turbopack_context__.k.register(_c, "AnimationCarousel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_AnimationCarousel_tsx_141762d0._.js.map