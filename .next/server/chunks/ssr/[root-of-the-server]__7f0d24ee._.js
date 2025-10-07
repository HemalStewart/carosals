module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/src/components/CardStackCarousel.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CardStackCarousel",
    ()=>CardStackCarousel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
'use client';
;
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
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const returnFromId = searchParams.get('returnFrom');
    // Initialize currentIndex based on returnFrom parameter or stored position
    const getInitialIndex = ()=>{
        if (returnFromId) {
            const posterIndex = posters.findIndex((p)=>p.id === parseInt(returnFromId));
            return posterIndex !== -1 ? posterIndex : 0;
        }
        // Try to get stored position from memory
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        return 0;
    };
    const [currentIndex, setCurrentIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(getInitialIndex);
    const [flippingPosterId, setFlippingPosterId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const intervalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const nextSlide = ()=>{
        if (flippingPosterId) return;
        const newIndex = (currentIndex + 1) % posters.length;
        setCurrentIndex(newIndex);
        // Store the new position
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    };
    const prevSlide = ()=>{
        if (flippingPosterId) return;
        const newIndex = (currentIndex - 1 + posters.length) % posters.length;
        setCurrentIndex(newIndex);
        // Store the new position
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        intervalRef.current = setInterval(nextSlide, 40000);
        return ()=>clearInterval(intervalRef.current);
    }, [
        flippingPosterId
    ]);
    // Update currentIndex when returnFrom parameter changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (returnFromId) {
            const posterIndex = posters.findIndex((p)=>p.id === parseInt(returnFromId));
            if (posterIndex !== -1) {
                setCurrentIndex(posterIndex);
                // Store the position
                if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                ;
            }
            // Clean up the URL parameter after using it
            const newUrl = new URL(window.location);
            newUrl.searchParams.delete('returnFrom');
            window.history.replaceState({}, '', newUrl);
        }
    }, [
        returnFromId
    ]);
    const handlePosterClick = (id)=>{
        if (id !== posters[currentIndex].id || flippingPosterId) return;
        setFlippingPosterId(id);
        // Store the current position before navigating
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
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
            transform: `translate(${x}px, ${y + radius - 100}px) translate(-50%, -50%) scale(${scale})`,
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
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full h-screen flex items-center justify-center overflow-hidden bg-black",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 z-0",
                style: {
                    backgroundImage: `url(${activePosterSrc})`,
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-black opacity-60 z-10"
            }, void 0, false, {
                fileName: "[project]/src/components/CardStackCarousel.jsx",
                lineNumber: 149,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-[600px] h-[700px] flex items-center justify-center ",
                children: posters.map((poster, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        onClick: ()=>handlePosterClick(poster.id),
                        style: {
                            ...getTransform(index),
                            cursor: index === currentIndex ? 'pointer' : 'default'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "w-50 h-76 relative rounded-lg overflow-hidden shadow-lg border border-white/20",
                            layoutId: `shared-poster-${poster.id}`,
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
                                    router.push(`/posters/${poster.id}?transition=true`);
                                    setFlippingPosterId(null);
                                }
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-20 flex space-x-10 z-30",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: prevSlide,
                        className: "w-14 h-14 bg-white/10 rounded-full flex items-center justify-center text-white border border-white/30 hover:bg-white/20 transition",
                        children: "‹"
                    }, void 0, false, {
                        fileName: "[project]/src/components/CardStackCarousel.jsx",
                        lineNumber: 197,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
}),
"[project]/src/components/BlackBackgroundCarousel.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BlackBackgroundCarousel",
    ()=>BlackBackgroundCarousel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
'use client';
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
const BlackBackgroundCarousel = ()=>{
    const [currentIndex, setCurrentIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const startX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const isSwiping = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
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
        const translateZ = 600;
        const isVisible = Math.abs(diff) <= halfVisible;
        const style = {
            transform: `rotateY(${angle}deg) translateZ(${translateZ}px) scale(${scale})`,
            zIndex,
            opacity: isVisible ? 1 : 0,
            pointerEvents: isVisible ? 'auto' : 'none',
            transition: 'all 0.7s ease-in-out'
        };
        return style;
    };
    const handleTouchStart = (e)=>{
        startX.current = e.touches[0].clientX;
        isSwiping.current = true;
    };
    const handleTouchMove = (e)=>{
        if (!isSwiping.current) return;
        const currentX = e.touches[0].clientX;
        const diff = startX.current - currentX;
        if (Math.abs(diff) > 50) {
            if (diff > 0) nextSlide();
            else prevSlide();
            isSwiping.current = false;
        }
    };
    const handleTouchEnd = ()=>{
        isSwiping.current = false;
    };
    const activePosterSrc = posters[currentIndex].src;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full h-screen flex justify-center items-center overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 z-0",
                style: {
                    backgroundImage: `url(${activePosterSrc})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'blur(30px)',
                    transition: 'background-image 0.7s ease-in-out, filter 0.7s ease-in-out',
                    transform: 'scale(1.05)'
                }
            }, void 0, false, {
                fileName: "[project]/src/components/BlackBackgroundCarousel.tsx",
                lineNumber: 84,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-black opacity-60 z-10"
            }, void 0, false, {
                fileName: "[project]/src/components/BlackBackgroundCarousel.tsx",
                lineNumber: 96,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-[900px] h-[400px] flex items-center justify-center z-20",
                style: {
                    perspective: '1500px',
                    transformStyle: 'preserve-3d'
                },
                onTouchStart: handleTouchStart,
                onTouchMove: handleTouchMove,
                onTouchEnd: handleTouchEnd,
                children: posters.map((poster, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute cursor-pointer",
                        style: getTransform(index),
                        onClick: ()=>goToSlide(index),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-50 h-76 relative bg-gray-900 rounded-lg overflow-hidden border border-white/20",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                src: poster.src,
                                alt: poster.alt,
                                fill: true,
                                className: "object-cover"
                            }, void 0, false, {
                                fileName: "[project]/src/components/BlackBackgroundCarousel.tsx",
                                lineNumber: 114,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/BlackBackgroundCarousel.tsx",
                            lineNumber: 113,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, poster.id, false, {
                        fileName: "[project]/src/components/BlackBackgroundCarousel.tsx",
                        lineNumber: 107,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/src/components/BlackBackgroundCarousel.tsx",
                lineNumber: 99,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-16 flex justify-center space-x-20 z-30",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: prevSlide,
                        className: "w-16 h-16 bg-white/10 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 group",
                        children: "‹"
                    }, void 0, false, {
                        fileName: "[project]/src/components/BlackBackgroundCarousel.tsx",
                        lineNumber: 122,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: nextSlide,
                        className: "w-16 h-16 bg-white/10 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 group",
                        children: "›"
                    }, void 0, false, {
                        fileName: "[project]/src/components/BlackBackgroundCarousel.tsx",
                        lineNumber: 128,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/BlackBackgroundCarousel.tsx",
                lineNumber: 121,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/BlackBackgroundCarousel.tsx",
        lineNumber: 82,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/src/components/WhiteBackgroundCarousel.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WhiteBackgroundCarousel",
    ()=>WhiteBackgroundCarousel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
'use client';
;
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
const WhiteBackgroundCarousel = ()=>{
    const [currentIndex, setCurrentIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const startX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const isSwiping = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const nextSlide = ()=>setCurrentIndex((prev)=>(prev + 1) % posters.length);
    const prevSlide = ()=>setCurrentIndex((prev)=>(prev - 1 + posters.length) % posters.length);
    const goToSlide = (index)=>setCurrentIndex(index);
    const getTransform = (index)=>{
        let diff = index - currentIndex;
        if (diff > posters.length / 2) diff -= posters.length;
        if (diff < -posters.length / 2) diff += posters.length;
        const radius = 600;
        const spacing = 50;
        const theta = diff * 15 * Math.PI / 180;
        const x = Math.sin(theta) * radius + diff * spacing;
        const z = radius - Math.cos(theta) * radius;
        const rotateY = -diff * 15;
        const scale = 0.8 + 0.2 * Math.cos(theta);
        const visibilityThreshold = 3;
        const opacity = Math.abs(diff) <= visibilityThreshold ? 1 : 0;
        const zIndex = 20 - Math.abs(diff);
        return {
            transform: `translateX(${x}px) translateZ(${z}px) rotateY(${rotateY}deg) scale(${scale})`,
            zIndex,
            opacity,
            pointerEvents: opacity === 1 ? 'auto' : 'none',
            transition: 'transform 0.7s ease, opacity 0.7s ease'
        };
    };
    const handleTouchStart = (e)=>{
        startX.current = e.touches[0].clientX;
        isSwiping.current = true;
    };
    const handleTouchMove = (e)=>{
        if (!isSwiping.current) return;
        const currentX = e.touches[0].clientX;
        const diff = startX.current - currentX;
        if (Math.abs(diff) > 50) {
            if (diff > 0) nextSlide();
            else prevSlide();
            isSwiping.current = false;
        }
    };
    const handleTouchEnd = ()=>{
        isSwiping.current = false;
    };
    const activePosterSrc = posters[currentIndex].src;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full h-screen flex justify-center items-center overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 z-0",
                style: {
                    backgroundImage: `url(${activePosterSrc})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'blur(30px)',
                    transition: 'background-image 0.7s ease-in-out, filter 0.7s ease-in-out',
                    transform: 'scale(1.05)'
                }
            }, void 0, false, {
                fileName: "[project]/src/components/WhiteBackgroundCarousel.tsx",
                lineNumber: 86,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-black opacity-60 z-10"
            }, void 0, false, {
                fileName: "[project]/src/components/WhiteBackgroundCarousel.tsx",
                lineNumber: 98,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-[900px] h-[400px] flex items-center justify-center z-20",
                style: {
                    perspective: '1500px',
                    transformStyle: 'preserve-3d'
                },
                onTouchStart: handleTouchStart,
                onTouchMove: handleTouchMove,
                onTouchEnd: handleTouchEnd,
                children: posters.map((poster, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute cursor-pointer",
                        style: getTransform(index),
                        onClick: ()=>goToSlide(index),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-50 h-76 relative bg-gray-900 rounded-lg overflow-hidden border border-white/20 shadow-lg",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                src: poster.src,
                                alt: poster.alt,
                                fill: true,
                                className: "object-cover"
                            }, void 0, false, {
                                fileName: "[project]/src/components/WhiteBackgroundCarousel.tsx",
                                lineNumber: 115,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/WhiteBackgroundCarousel.tsx",
                            lineNumber: 114,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, poster.id, false, {
                        fileName: "[project]/src/components/WhiteBackgroundCarousel.tsx",
                        lineNumber: 108,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/src/components/WhiteBackgroundCarousel.tsx",
                lineNumber: 100,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-16 flex justify-center space-x-20 z-30",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: prevSlide,
                        className: "w-16 h-16 bg-white/10 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 group",
                        children: "‹"
                    }, void 0, false, {
                        fileName: "[project]/src/components/WhiteBackgroundCarousel.tsx",
                        lineNumber: 123,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: nextSlide,
                        className: "w-16 h-16 bg-white/10 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 group",
                        children: "›"
                    }, void 0, false, {
                        fileName: "[project]/src/components/WhiteBackgroundCarousel.tsx",
                        lineNumber: 129,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/WhiteBackgroundCarousel.tsx",
                lineNumber: 122,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/WhiteBackgroundCarousel.tsx",
        lineNumber: 84,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/src/components/ExpandingPosterCarousel.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TimedCardOpening
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
const posters = [
    {
        id: 1,
        title: "Zermatt",
        subtitle: "Switzerland",
        image: "/images/poster1.jpg"
    },
    {
        id: 2,
        title: "Nagano",
        subtitle: "Prefecture",
        image: "/images/poster2.jpg"
    },
    {
        id: 3,
        title: "Marrakech",
        subtitle: "Merzouga",
        image: "/images/poster3.jpg"
    },
    {
        id: 4,
        title: "Yosemite",
        subtitle: "National Park",
        image: "/images/poster4.jpg"
    },
    {
        id: 5,
        title: "Los Lances",
        "subtitle": "Beach",
        image: "/images/poster5.jpg"
    },
    {
        id: 6,
        title: "Kyoto",
        subtitle: "Japan",
        image: "/images/poster6.jpg"
    },
    {
        id: 7,
        title: "Santorini",
        subtitle: "Greece",
        image: "/images/poster7.jpg"
    },
    {
        id: 8,
        title: "Banff",
        subtitle: "National Park",
        image: "/images/poster8.jpg"
    },
    {
        id: 9,
        title: "Ha Long Bay",
        subtitle: "Vietnam",
        image: "/images/poster9.jpg"
    },
    {
        id: 10,
        title: "Patagonia",
        subtitle: "Argentina",
        image: "/images/poster10.jpg"
    },
    {
        id: 11,
        title: "Machu Picchu",
        subtitle: "Peru",
        image: "/images/poster11.jpg"
    },
    {
        id: 12,
        title: "Bora Bora",
        subtitle: "French Polynesia",
        image: "/images/poster12.jpg"
    },
    {
        id: 13,
        title: "Great Barrier",
        subtitle: "Reef",
        image: "/images/poster13.jpg"
    },
    {
        id: 14,
        title: "Salar de Uyuni",
        subtitle: "Bolivia",
        image: "/images/poster14.jpg"
    },
    {
        id: 15,
        title: "Zhangjiajie",
        subtitle: "China",
        image: "/images/poster15.jpg"
    }
];
function TimedCardOpening() {
    const [activeIndex, setActiveIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [direction, setDirection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const handleCardClick = (index)=>{
        setDirection(index > activeIndex ? 1 : -1);
        setActiveIndex(index);
    };
    const paginate = (newDirection)=>{
        const newIndex = (activeIndex + newDirection + posters.length) % posters.length;
        setDirection(newDirection);
        setActiveIndex(newIndex);
    };
    const smallCarouselPosters = Array.from({
        length: 9
    }, (_, i)=>{
        const posterIndex = (activeIndex + i) % posters.length;
        return posters[posterIndex];
    });
    const variants = {
        enter: (direction)=>({
                x: direction > 0 ? 300 : -300,
                opacity: 0
            }),
        center: {
            x: 0,
            opacity: 1
        },
        exit: (direction)=>({
                x: direction > 0 ? -300 : 300,
                opacity: 0
            })
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative h-screen w-full overflow-hidden bg-black text-white",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative h-full w-full",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute top-1/2 left-16 z-[20] -translate-y-1/2",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                        mode: "wait",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: -50,
                                scale: 1.1
                            },
                            animate: {
                                opacity: 1,
                                y: 0,
                                scale: 1
                            },
                            exit: {
                                opacity: 0,
                                y: 50,
                                scale: 1.1
                            },
                            transition: {
                                duration: 0.6,
                                delay: 0.05
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].p, {
                                    className: "text-sm uppercase tracking-widest opacity-80 mb-2",
                                    initial: {
                                        opacity: 0
                                    },
                                    animate: {
                                        opacity: 0.8
                                    },
                                    transition: {
                                        duration: 0.6,
                                        delay: 0.1
                                    },
                                    children: [
                                        "Explore ",
                                        posters[activeIndex].subtitle
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ExpandingPosterCarousel.tsx",
                                    lineNumber: 65,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-8xl font-bold mb-8 leading-tight",
                                    children: posters[activeIndex].title.split(' ').map((word, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].span, {
                                            className: "inline-block",
                                            initial: {
                                                opacity: 0,
                                                y: 50
                                            },
                                            animate: {
                                                opacity: 1,
                                                y: 0
                                            },
                                            transition: {
                                                duration: 0.4,
                                                delay: 0.1 * i
                                            },
                                            children: [
                                                word,
                                                i < posters[activeIndex].title.split(' ').length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/src/components/ExpandingPosterCarousel.tsx",
                                                    lineNumber: 82,
                                                    columnNumber: 84
                                                }, this)
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/src/components/ExpandingPosterCarousel.tsx",
                                            lineNumber: 75,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ExpandingPosterCarousel.tsx",
                                    lineNumber: 73,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                                    className: "px-8 py-3 bg-white text-black rounded-full font-medium transition-all duration-300 hover:bg-gray-100",
                                    whileHover: {
                                        scale: 1.05
                                    },
                                    whileTap: {
                                        scale: 0.95
                                    },
                                    initial: {
                                        opacity: 0,
                                        y: 20
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    transition: {
                                        duration: 0.6,
                                        delay: 0.2
                                    },
                                    children: "Discover Location"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ExpandingPosterCarousel.tsx",
                                    lineNumber: 86,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, `content-${activeIndex}`, true, {
                            fileName: "[project]/src/components/ExpandingPosterCarousel.tsx",
                            lineNumber: 58,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ExpandingPosterCarousel.tsx",
                        lineNumber: 57,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ExpandingPosterCarousel.tsx",
                    lineNumber: 56,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-10 w-[50%] h-full flex items-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative w-full h-full overflow-visible",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                            initial: false,
                            custom: direction,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                custom: direction,
                                variants: variants,
                                initial: "enter",
                                animate: "center",
                                exit: "exit",
                                transition: {
                                    duration: 0.5,
                                    ease: "easeInOut"
                                },
                                className: "absolute top-1/2 -translate-y-1/2 left-0 flex items-center gap-6",
                                children: smallCarouselPosters.map((poster, i)=>{
                                    const posterIndex = (activeIndex + i) % posters.length;
                                    const isActive = posterIndex === activeIndex;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                        onClick: ()=>handleCardClick(posterIndex),
                                        className: "cursor-pointer flex-shrink-0",
                                        animate: {
                                            scale: isActive ? 2 : 1,
                                            // zIndex: isActive ? 50 : 1,
                                            y: 0,
                                            rotateY: 0,
                                            opacity: 1
                                        },
                                        transition: {
                                            duration: 0.5,
                                            ease: "easeInOut"
                                        },
                                        style: {
                                            perspective: 1200
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-60 h-96 rounded-lg overflow-hidden shadow-2xl hover:shadow-3xl transform transition-transform duration-500",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-full h-full bg-cover bg-center relative",
                                                style: {
                                                    backgroundImage: `url(${poster.image})`
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute bottom-4 left-4 right-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-white font-bold text-lg leading-tight",
                                                            children: poster.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ExpandingPosterCarousel.tsx",
                                                            lineNumber: 140,
                                                            columnNumber: 29
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-white/80 text-sm uppercase tracking-wide",
                                                            children: poster.subtitle
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ExpandingPosterCarousel.tsx",
                                                            lineNumber: 141,
                                                            columnNumber: 29
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/ExpandingPosterCarousel.tsx",
                                                    lineNumber: 139,
                                                    columnNumber: 27
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ExpandingPosterCarousel.tsx",
                                                lineNumber: 135,
                                                columnNumber: 25
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ExpandingPosterCarousel.tsx",
                                            lineNumber: 134,
                                            columnNumber: 23
                                        }, this)
                                    }, poster.id, false, {
                                        fileName: "[project]/src/components/ExpandingPosterCarousel.tsx",
                                        lineNumber: 120,
                                        columnNumber: 21
                                    }, this);
                                })
                            }, activeIndex, false, {
                                fileName: "[project]/src/components/ExpandingPosterCarousel.tsx",
                                lineNumber: 105,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ExpandingPosterCarousel.tsx",
                            lineNumber: 104,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ExpandingPosterCarousel.tsx",
                        lineNumber: 103,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ExpandingPosterCarousel.tsx",
                    lineNumber: 101,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute bottom-8 right-8 z-40 flex items-end flex-col",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-6xl font-light opacity-30",
                            children: String(activeIndex + 1).padStart(2, '0')
                        }, void 0, false, {
                            fileName: "[project]/src/components/ExpandingPosterCarousel.tsx",
                            lineNumber: 158,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center space-x-6 mt-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>paginate(-1),
                                    className: "p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-6 h-6",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M15 19l-7-7 7-7"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ExpandingPosterCarousel.tsx",
                                            lineNumber: 169,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ExpandingPosterCarousel.tsx",
                                        lineNumber: 168,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ExpandingPosterCarousel.tsx",
                                    lineNumber: 164,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex space-x-2",
                                    children: posters.map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>handleCardClick(index),
                                            className: `w-2 h-2 rounded-full transition-all duration-300 ${index === activeIndex ? 'bg-white scale-125' : 'bg-white/30 hover:bg-white/60'}`
                                        }, index, false, {
                                            fileName: "[project]/src/components/ExpandingPosterCarousel.tsx",
                                            lineNumber: 175,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ExpandingPosterCarousel.tsx",
                                    lineNumber: 173,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>paginate(1),
                                    className: "p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-6 h-6",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M9 5l7 7-7 7"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ExpandingPosterCarousel.tsx",
                                            lineNumber: 190,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ExpandingPosterCarousel.tsx",
                                        lineNumber: 189,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ExpandingPosterCarousel.tsx",
                                    lineNumber: 185,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ExpandingPosterCarousel.tsx",
                            lineNumber: 163,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ExpandingPosterCarousel.tsx",
                    lineNumber: 156,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ExpandingPosterCarousel.tsx",
            lineNumber: 54,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ExpandingPosterCarousel.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/card-stack-carousel/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

const e = new Error("Could not parse module '[project]/src/app/card-stack-carousel/page.tsx'\n\nExpected ',', got '{'");
e.code = 'MODULE_UNPARSABLE';
throw e;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__7f0d24ee._.js.map