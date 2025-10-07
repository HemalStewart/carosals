(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/CardStackCarousel.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CardStackCarousel",
    ()=>CardStackCarousel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const posters = [
    {
        id: 1,
        src: '/images/poster1.jpg',
        alt: 'Poster 1',
        title: 'Epic Adventure',
        color: '#e74c3c'
    },
    {
        id: 2,
        src: '/images/poster2.jpg',
        alt: 'Poster 2',
        title: 'Mystic Journey',
        color: '#3498db'
    },
    {
        id: 3,
        src: '/images/poster3.jpg',
        alt: 'Poster 3',
        title: 'Dark Future',
        color: '#9b59b6'
    },
    {
        id: 4,
        src: '/images/poster4.jpg',
        alt: 'Poster 4',
        title: 'Ocean Deep',
        color: '#1abc9c'
    },
    {
        id: 5,
        src: '/images/poster5.jpg',
        alt: 'Poster 5',
        title: 'Golden Hour',
        color: '#f39c12'
    },
    {
        id: 6,
        src: '/images/poster6.jpg',
        alt: 'Poster 6',
        title: 'Fire Storm',
        color: '#e67e22'
    },
    {
        id: 7,
        src: '/images/poster7.jpg',
        alt: 'Poster 7',
        title: 'Nature Call',
        color: '#2ecc71'
    },
    {
        id: 8,
        src: '/images/poster8.jpg',
        alt: 'Poster 8',
        title: 'Cosmic Dust',
        color: '#34495e'
    },
    {
        id: 9,
        src: '/images/poster9.jpg',
        alt: 'Poster 9',
        title: 'Neon Night',
        color: '#f1c40f'
    },
    {
        id: 10,
        src: '/images/poster10.jpg',
        alt: 'Poster 10',
        title: 'Winter Tale',
        color: '#ecf0f1'
    },
    {
        id: 11,
        src: '/images/poster11.jpg',
        alt: 'Poster 11',
        title: 'Desert Rose',
        color: '#e74c3c'
    },
    {
        id: 12,
        src: '/images/poster12.jpg',
        alt: 'Poster 12',
        title: 'City Lights',
        color: '#95a5a6'
    },
    {
        id: 13,
        src: '/images/poster13.jpg',
        alt: 'Poster 13',
        title: 'Forest Guard',
        color: '#27ae60'
    },
    {
        id: 14,
        src: '/images/poster14.jpg',
        alt: 'Poster 14',
        title: 'Space Quest',
        color: '#c0392b'
    },
    {
        id: 15,
        src: '/images/poster15.jpg',
        alt: 'Poster 15',
        title: 'Cosmic Dust',
        color: '#34495e'
    }
];
const CardStackCarousel = ()=>{
    _s();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const returnFromId = searchParams.get('returnFrom');
    // Initialize currentIndex based on returnFrom parameter or stored position
    const getInitialIndex = ()=>{
        if (returnFromId) {
            const posterIndex = posters.findIndex((p)=>p.id === parseInt(returnFromId));
            return posterIndex !== -1 ? posterIndex : 0;
        }
        // Try to get stored position from memory
        if ("object" !== 'undefined' && window.lastCarouselIndex !== undefined) {
            return window.lastCarouselIndex;
        }
        return 0;
    };
    const [currentIndex, setCurrentIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(getInitialIndex);
    const [flippingPosterId, setFlippingPosterId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const intervalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const nextSlide = ()=>{
        if (flippingPosterId) return;
        const newIndex = (currentIndex + 1) % posters.length;
        setCurrentIndex(newIndex);
        // Store the new position
        if ("TURBOPACK compile-time truthy", 1) {
            window.lastCarouselIndex = newIndex;
        }
    };
    const prevSlide = ()=>{
        if (flippingPosterId) return;
        const newIndex = (currentIndex - 1 + posters.length) % posters.length;
        setCurrentIndex(newIndex);
        // Store the new position
        if ("TURBOPACK compile-time truthy", 1) {
            window.lastCarouselIndex = newIndex;
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CardStackCarousel.useEffect": ()=>{
            intervalRef.current = setInterval(nextSlide, 40000);
            return ({
                "CardStackCarousel.useEffect": ()=>clearInterval(intervalRef.current)
            })["CardStackCarousel.useEffect"];
        }
    }["CardStackCarousel.useEffect"], [
        flippingPosterId
    ]);
    // Update currentIndex when returnFrom parameter changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CardStackCarousel.useEffect": ()=>{
            if (returnFromId) {
                const posterIndex = posters.findIndex({
                    "CardStackCarousel.useEffect.posterIndex": (p)=>p.id === parseInt(returnFromId)
                }["CardStackCarousel.useEffect.posterIndex"]);
                if (posterIndex !== -1) {
                    setCurrentIndex(posterIndex);
                    // Store the position
                    if ("TURBOPACK compile-time truthy", 1) {
                        window.lastCarouselIndex = posterIndex;
                    }
                }
                // Clean up the URL parameter after using it
                const newUrl = new URL(window.location);
                newUrl.searchParams.delete('returnFrom');
                window.history.replaceState({}, '', newUrl);
            }
        }
    }["CardStackCarousel.useEffect"], [
        returnFromId
    ]);
    const handlePosterClick = (id)=>{
        if (id !== posters[currentIndex].id || flippingPosterId) return;
        setFlippingPosterId(id);
        // Store the current position before navigating
        if ("TURBOPACK compile-time truthy", 1) {
            window.lastCarouselIndex = currentIndex;
        }
    };
    const getTransform = (index)=>{
        let diff = index - currentIndex;
        if (diff > posters.length / 2) diff -= posters.length;
        if (diff < -posters.length / 2) diff += posters.length;
        const radius = 550;
        const angleStep = 30;
        const baseAngle = -90;
        const angle = baseAngle + diff * angleStep;
        const rad = angle * Math.PI / 180;
        const x = Math.cos(rad) * radius;
        const y = Math.sin(rad) * radius;
        const scale = index === currentIndex ? 1.3 : 0.9;
        const filter = index === currentIndex ? 'grayscale(0%)' : 'grayscale(100%)';
        const opacity = Math.abs(diff) > 2 ? 0 : 1;
        return {
            transform: "translate(".concat(x, "px, ").concat(y + radius - 100, "px) translate(-50%, -50%) scale(").concat(scale, ")"),
            filter,
            opacity,
            zIndex: 100 - Math.abs(diff),
            transition: 'all 0.8s ease',
            position: 'absolute',
            left: '50%',
            top: '50%',
            transformOrigin: 'center'
        };
    };
    const activePosterSrc = posters[currentIndex].src;
    return(// <div className="fixed inset-0 flex items-center justify-center overflow-hidden bg-black">
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full h-screen flex items-center justify-center overflow-hidden bg-black",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 z-0",
                style: {
                    backgroundImage: "url(".concat(activePosterSrc, ")"),
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'blur(30px)',
                    transition: 'background-image 0.8s ease-in-out, filter 0.8s ease-in-out',
                    transform: 'scale(1.05)'
                }
            }, void 0, false, {
                fileName: "[project]/src/components/CardStackCarousel.jsx",
                lineNumber: 138,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-black opacity-60 z-10"
            }, void 0, false, {
                fileName: "[project]/src/components/CardStackCarousel.jsx",
                lineNumber: 149,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-[600px] h-[700px] flex items-center justify-center ",
                children: posters.map((poster, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        onClick: ()=>handlePosterClick(poster.id),
                        style: {
                            ...getTransform(index),
                            cursor: index === currentIndex ? 'pointer' : 'default'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "w-50 h-76 relative rounded-lg overflow-hidden shadow-lg border border-white/20",
                            layoutId: "shared-poster-".concat(poster.id),
                            transition: {
                                duration: 0.3,
                                ease: 'easeInOut'
                            },
                            animate: {
                                rotateY: flippingPosterId === poster.id ? 90 : 0,
                                scale: flippingPosterId === poster.id ? 1.5 : 1
                            },
                            onAnimationComplete: ()=>{
                                if (flippingPosterId === poster.id) {
                                    // Navigate immediately after animation completes
                                    router.push("/posters/".concat(poster.id, "?transition=true"));
                                    setFlippingPosterId(null);
                                }
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: poster.src,
                                alt: poster.alt,
                                fill: true,
                                className: "object-cover"
                            }, void 0, false, {
                                fileName: "[project]/src/components/CardStackCarousel.jsx",
                                lineNumber: 185,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/CardStackCarousel.jsx",
                            lineNumber: 169,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, poster.id, false, {
                        fileName: "[project]/src/components/CardStackCarousel.jsx",
                        lineNumber: 161,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/src/components/CardStackCarousel.jsx",
                lineNumber: 158,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-20 flex space-x-10 z-30",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: prevSlide,
                        className: "w-14 h-14 bg-white/10 rounded-full flex items-center justify-center text-white border border-white/30 hover:bg-white/20 transition",
                        children: "‹"
                    }, void 0, false, {
                        fileName: "[project]/src/components/CardStackCarousel.jsx",
                        lineNumber: 197,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: nextSlide,
                        className: "w-14 h-14 bg-white/10 rounded-full flex items-center justify-center text-white border border-white/30 hover:bg-white/20 transition",
                        children: "›"
                    }, void 0, false, {
                        fileName: "[project]/src/components/CardStackCarousel.jsx",
                        lineNumber: 203,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/CardStackCarousel.jsx",
                lineNumber: 196,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/CardStackCarousel.jsx",
        lineNumber: 135,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0)));
};
_s(CardStackCarousel, "WzF3NH/XfObAAYxCtYgwwBhWnR0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = CardStackCarousel;
var _c;
__turbopack_context__.k.register(_c, "CardStackCarousel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/BlackBackgroundCarousel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BlackBackgroundCarousel",
    ()=>BlackBackgroundCarousel
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
        alt: 'Poster 1'
    },
    {
        id: 2,
        src: '/images/poster2.jpg',
        alt: 'Poster 2'
    },
    {
        id: 3,
        src: '/images/poster3.jpg',
        alt: 'Poster 3'
    },
    {
        id: 4,
        src: '/images/poster4.jpg',
        alt: 'Poster 4'
    },
    {
        id: 5,
        src: '/images/poster5.jpg',
        alt: 'Poster 5'
    },
    {
        id: 6,
        src: '/images/poster6.jpg',
        alt: 'Poster 6'
    },
    {
        id: 7,
        src: '/images/poster7.jpg',
        alt: 'Poster 7'
    },
    {
        id: 8,
        src: '/images/poster8.jpg',
        alt: 'Poster 8'
    },
    {
        id: 9,
        src: '/images/poster9.jpg',
        alt: 'Poster 9'
    },
    {
        id: 10,
        src: '/images/poster10.jpg',
        alt: 'Poster 10'
    },
    {
        id: 11,
        src: '/images/poster11.jpg',
        alt: 'Poster 11'
    },
    {
        id: 12,
        src: '/images/poster12.jpg',
        alt: 'Poster 12'
    },
    {
        id: 13,
        src: '/images/poster13.jpg',
        alt: 'Poster 13'
    },
    {
        id: 14,
        src: '/images/poster14.jpg',
        alt: 'Poster 14'
    },
    {
        id: 15,
        src: '/images/poster15.jpg',
        alt: 'Poster 15'
    }
];
const BlackBackgroundCarousel = ()=>{
    _s();
    const [currentIndex, setCurrentIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const nextSlide = ()=>setCurrentIndex((prev)=>(prev + 1) % posters.length);
    const prevSlide = ()=>setCurrentIndex((prev)=>(prev - 1 + posters.length) % posters.length);
    const goToSlide = (index)=>setCurrentIndex(index);
    const visiblePostersInArc = 9;
    const halfVisible = Math.floor(visiblePostersInArc / 2);
    const getTransform = (index)=>{
        let diff = index - currentIndex;
        if (diff > posters.length / 2) diff -= posters.length;
        if (diff < -posters.length / 2) diff += posters.length;
        const angle = 100 / (visiblePostersInArc - 1) * diff;
        const zIndex = index === currentIndex ? 10 : 5;
        const scale = 0.6;
        const translateZ = 650;
        const isVisible = Math.abs(diff) <= halfVisible;
        // Use type assertion for pointerEvents to fix the TypeScript error
        const style = {
            transform: "rotateY(".concat(angle, "deg) translateZ(").concat(translateZ, "px) scale(").concat(scale, ")"),
            zIndex,
            opacity: isVisible ? 1 : 0,
            pointerEvents: isVisible ? 'auto' : 'none'
        };
        return style;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full h-screen bg-black flex justify-center items-center overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-black"
            }, void 0, false, {
                fileName: "[project]/src/components/BlackBackgroundCarousel.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-[900px] h-[400px] flex items-center justify-center",
                style: {
                    perspective: '1500px',
                    transformStyle: 'preserve-3d'
                },
                children: posters.map((poster, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute transition-all duration-700 ease-in-out cursor-pointer",
                        // The fix is applied here, casting the returned object
                        style: getTransform(index),
                        onClick: ()=>goToSlide(index),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-50 h-76 relative bg-gray-900 rounded-lg overflow-hidden border border-white/20",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: poster.src,
                                alt: poster.alt,
                                fill: true,
                                className: "object-cover"
                            }, void 0, false, {
                                fileName: "[project]/src/components/BlackBackgroundCarousel.tsx",
                                lineNumber: 77,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/BlackBackgroundCarousel.tsx",
                            lineNumber: 76,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, poster.id, false, {
                        fileName: "[project]/src/components/BlackBackgroundCarousel.tsx",
                        lineNumber: 69,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/src/components/BlackBackgroundCarousel.tsx",
                lineNumber: 64,
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
                                fileName: "[project]/src/components/BlackBackgroundCarousel.tsx",
                                lineNumber: 95,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/BlackBackgroundCarousel.tsx",
                            lineNumber: 94,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/BlackBackgroundCarousel.tsx",
                        lineNumber: 90,
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
                                fileName: "[project]/src/components/BlackBackgroundCarousel.tsx",
                                lineNumber: 103,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/BlackBackgroundCarousel.tsx",
                            lineNumber: 102,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/BlackBackgroundCarousel.tsx",
                        lineNumber: 98,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/BlackBackgroundCarousel.tsx",
                lineNumber: 89,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/BlackBackgroundCarousel.tsx",
        lineNumber: 59,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(BlackBackgroundCarousel, "tusBbsahUVevXfyh6oH5R6YDC9Q=");
_c = BlackBackgroundCarousel;
var _c;
__turbopack_context__.k.register(_c, "BlackBackgroundCarousel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/WhiteBackgroundCarousel.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WhiteBackgroundCarousel
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
        alt: 'Poster 1'
    },
    {
        id: 2,
        src: '/images/poster2.jpg',
        alt: 'Poster 2'
    },
    {
        id: 3,
        src: '/images/poster3.jpg',
        alt: 'Poster 3'
    },
    {
        id: 4,
        src: '/images/poster4.jpg',
        alt: 'Poster 4'
    },
    {
        id: 5,
        src: '/images/poster5.jpg',
        alt: 'Poster 5'
    },
    {
        id: 6,
        src: '/images/poster6.jpg',
        alt: 'Poster 6'
    },
    {
        id: 7,
        src: '/images/poster7.jpg',
        alt: 'Poster 7'
    },
    {
        id: 8,
        src: '/images/poster8.jpg',
        alt: 'Poster 8'
    },
    {
        id: 9,
        src: '/images/poster9.jpg',
        alt: 'Poster 9'
    },
    {
        id: 10,
        src: '/images/poster10.jpg',
        alt: 'Poster 10'
    },
    {
        id: 11,
        src: '/images/poster11.jpg',
        alt: 'Poster 11'
    },
    {
        id: 12,
        src: '/images/poster12.jpg',
        alt: 'Poster 12'
    },
    {
        id: 13,
        src: '/images/poster13.jpg',
        alt: 'Poster 13'
    },
    {
        id: 14,
        src: '/images/poster14.jpg',
        alt: 'Poster 14'
    },
    {
        id: 15,
        src: '/images/poster15.jpg',
        alt: 'Poster 15'
    }
];
function WhiteBackgroundCarousel() {
    _s();
    const [currentIndex, setCurrentIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const carouselRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const visiblePostersInArc = 7;
    const halfVisible = Math.floor(visiblePostersInArc / 2);
    const nextSlide = ()=>setCurrentIndex((prev)=>(prev + 1) % posters.length);
    const prevSlide = ()=>setCurrentIndex((prev)=>(prev - 1 + posters.length) % posters.length);
    // Swipe / drag handling
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WhiteBackgroundCarousel.useEffect": ()=>{
            let startX = 0;
            const handlePointerDown = {
                "WhiteBackgroundCarousel.useEffect.handlePointerDown": (e)=>{
                    var _e_touches;
                    startX = e.clientX || ((_e_touches = e.touches) === null || _e_touches === void 0 ? void 0 : _e_touches[0].clientX);
                }
            }["WhiteBackgroundCarousel.useEffect.handlePointerDown"];
            const handlePointerUp = {
                "WhiteBackgroundCarousel.useEffect.handlePointerUp": (e)=>{
                    var _e_changedTouches;
                    const endX = e.clientX || ((_e_changedTouches = e.changedTouches) === null || _e_changedTouches === void 0 ? void 0 : _e_changedTouches[0].clientX);
                    const diff = endX - startX;
                    if (diff < -50) nextSlide();
                    else if (diff > 50) prevSlide();
                }
            }["WhiteBackgroundCarousel.useEffect.handlePointerUp"];
            const carousel = carouselRef.current;
            if (!carousel) return;
            carousel.addEventListener('mousedown', handlePointerDown);
            carousel.addEventListener('mouseup', handlePointerUp);
            carousel.addEventListener('touchstart', handlePointerDown);
            carousel.addEventListener('touchend', handlePointerUp);
            return ({
                "WhiteBackgroundCarousel.useEffect": ()=>{
                    carousel.removeEventListener('mousedown', handlePointerDown);
                    carousel.removeEventListener('mouseup', handlePointerUp);
                    carousel.removeEventListener('touchstart', handlePointerDown);
                    carousel.removeEventListener('touchend', handlePointerUp);
                }
            })["WhiteBackgroundCarousel.useEffect"];
        }
    }["WhiteBackgroundCarousel.useEffect"], [
        currentIndex
    ]);
    const getTransform = (index)=>{
        let diff = index - currentIndex;
        if (diff > posters.length / 2) diff -= posters.length;
        if (diff < -posters.length / 2) diff += posters.length;
        const angle = 180 / (visiblePostersInArc - 1) * diff;
        const scale = Math.max(0.6, 1 - 0.15 * Math.abs(diff));
        const translateZ = 500 + 50 * (halfVisible - Math.abs(diff));
        const zIndex = 10 - Math.abs(diff);
        const isVisible = Math.abs(diff) <= halfVisible;
        return {
            transform: "rotateY(".concat(angle, "deg) translateZ(").concat(translateZ, "px) scale(").concat(scale, ")"),
            zIndex,
            opacity: isVisible ? 1 : 0,
            pointerEvents: isVisible ? 'auto' : 'none',
            transition: 'transform 0.7s ease, opacity 0.7s ease',
            position: 'absolute'
        };
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: carouselRef,
        className: "relative w-full h-screen bg-black flex justify-center items-center overflow-hidden",
        style: {
            touchAction: 'pan-y'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-black"
            }, void 0, false, {
                fileName: "[project]/src/components/WhiteBackgroundCarousel.jsx",
                lineNumber: 93,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-[1000px] h-[400px] flex items-center justify-center",
                style: {
                    perspective: '1500px',
                    transformStyle: 'preserve-3d'
                },
                children: posters.map((poster, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: getTransform(index),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-52 h-80 relative bg-gray-900 rounded-lg overflow-hidden border border-white/20",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: poster.src,
                                alt: poster.alt,
                                fill: true,
                                className: "object-cover"
                            }, void 0, false, {
                                fileName: "[project]/src/components/WhiteBackgroundCarousel.jsx",
                                lineNumber: 102,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/WhiteBackgroundCarousel.jsx",
                            lineNumber: 101,
                            columnNumber: 13
                        }, this)
                    }, poster.id, false, {
                        fileName: "[project]/src/components/WhiteBackgroundCarousel.jsx",
                        lineNumber: 100,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/WhiteBackgroundCarousel.jsx",
                lineNumber: 95,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/WhiteBackgroundCarousel.jsx",
        lineNumber: 88,
        columnNumber: 5
    }, this);
}
_s(WhiteBackgroundCarousel, "PXs+B+leS6gYvYDvmgo/yckto1I=");
_c = WhiteBackgroundCarousel;
var _c;
__turbopack_context__.k.register(_c, "WhiteBackgroundCarousel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/card-stack-carousel/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CarouselPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CardStackCarousel$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/CardStackCarousel.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BlackBackgroundCarousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/BlackBackgroundCarousel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WhiteBackgroundCarousel$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/WhiteBackgroundCarousel.jsx [app-client] (ecmascript)");
'use client';
;
;
;
;
function CarouselPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-screen w-full overflow-y-scroll snap-y snap-mandatory",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "h-screen snap-start",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CardStackCarousel$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardStackCarousel"], {}, void 0, false, {
                    fileName: "[project]/src/app/card-stack-carousel/page.tsx",
                    lineNumber: 12,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/card-stack-carousel/page.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "h-screen snap-start",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BlackBackgroundCarousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BlackBackgroundCarousel"], {}, void 0, false, {
                    fileName: "[project]/src/app/card-stack-carousel/page.tsx",
                    lineNumber: 17,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/card-stack-carousel/page.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "h-screen snap-start",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WhiteBackgroundCarousel$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WhiteBackgroundCarousel"], {}, void 0, false, {
                    fileName: "[project]/src/app/card-stack-carousel/page.tsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/card-stack-carousel/page.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/card-stack-carousel/page.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_c = CarouselPage;
var _c;
__turbopack_context__.k.register(_c, "CarouselPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_fc1ddbbb._.js.map