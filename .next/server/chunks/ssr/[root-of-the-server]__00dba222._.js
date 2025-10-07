module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/src/components/AnimatedCardStack.jsx [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

const { jsxDEV: _jsxDEV } = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
const CardStackCollection = ()=>{
    const [scrollProgress, setScrollProgress] = useState(0);
    const [hoveredCard, setHoveredCard] = useState(null);
    const scrollContainerRef = useRef(null);
    const collections = [
        {
            id: 1,
            title: "Poster 1",
            src: "/images/poster1.jpg",
            alt: "Poster 1"
        },
        {
            id: 2,
            title: "Poster 2",
            src: "/images/poster2.jpg",
            alt: "Poster 2"
        },
        {
            id: 3,
            title: "Poster 3",
            src: "/images/poster3.jpg",
            alt: "Poster 3"
        },
        {
            id: 4,
            title: "Poster 4",
            src: "/images/poster4.jpg",
            alt: "Poster 4"
        },
        {
            id: 5,
            title: "Poster 5",
            src: "/images/poster5.jpg",
            alt: "Poster 5"
        },
        {
            id: 6,
            title: "Poster 6",
            src: "/images/poster6.jpg",
            alt: "Poster 6"
        }
    ];
    // Generate deterministic offsets
    const cardOffsets = collections.map((c, index)=>{
        const seed = c.id * 100 + index;
        return {
            offsetX: format((seededRandom(seed) - 0.5) * 20),
            offsetY: format((seededRandom(seed + 1) - 0.5) * 10),
            rotation: format((seededRandom(seed + 2) - 0.5) * 15)
        };
    });
    // Animate stack → spread → carousel on mount
    useEffect(()=>{
        let progress = 0;
        const steps = 60; // frames
        const interval = 15; // ms
        const animation = setInterval(()=>{
            progress += 3 / steps; // animate 0 → 3
            if (progress >= 3) {
                progress = 3;
                clearInterval(animation);
            }
            setScrollProgress(progress);
        }, interval);
        return ()=>clearInterval(animation);
    }, []);
    const handleCardHover = (index)=>setHoveredCard(index);
    const handleCardLeave = ()=>setHoveredCard(null);
    const getCardStyle = (index, total)=>{
        const baseZIndex = total - index;
        const t = scrollProgress; // use the animated value
        const spreadDistance = 200;
        const finalCarouselPosition = index * (200 + 24) - (total - 1) * (200 + 24) / 2;
        let transformValue = "";
        let zIndex = baseZIndex;
        if (t < 1) {
            // messy stack → spread
            const { offsetX, offsetY, rotation } = cardOffsets[index];
            const currentOffsetX = format(offsetX * (1 - t) + (index - (total - 1) / 2) * spreadDistance * t);
            const currentOffsetY = format(offsetY * (1 - t));
            const currentRotation = format(rotation * (1 - t) + (index - (total - 1) / 2) * 3 * t);
            transformValue = `translateX(${currentOffsetX}px) translateY(${currentOffsetY}px) rotate(${currentRotation}deg)`;
            zIndex = hoveredCard === index ? baseZIndex + 1000 : baseZIndex;
        } else if (t < 2) {
            // spread with slight rotation
            const spreadT = t - 1;
            const angle = (index - (total - 1) / 2) * 3 * (1 - spreadT);
            transformValue = `translateX(${(index - (total - 1) / 2) * spreadDistance}px) translateY(0px) rotate(${angle}deg)`;
            zIndex = hoveredCard === index ? baseZIndex + 1000 : baseZIndex + 500;
        } else {
            // carousel
            const carouselT = t - 2;
            const spreadX = (index - (total - 1) / 2) * spreadDistance;
            const carouselX = finalCarouselPosition;
            const currentX = format(spreadX * (1 - carouselT) + carouselX * carouselT);
            transformValue = `translateX(${currentX}px) translateY(0px) rotate(0deg)`;
            zIndex = baseZIndex + 1000;
        }
        return {
            transform: transformValue,
            zIndex: zIndex,
            opacity: 1,
            transition: "transform 0.5s ease-out, z-index 0.3s, opacity 0.5s"
        };
    };
    return /*#__PURE__*/ _jsxDEV("div", {
        className: "relative h-screen w-full",
        children: /*#__PURE__*/ _jsxDEV("div", {
            className: "relative flex items-center justify-center h-full w-full",
            children: collections.map((collection, index)=>/*#__PURE__*/ _jsxDEV("div", {
                    className: `absolute w-[200px] h-[304px] rounded-lg shadow-xl cursor-pointer overflow-hidden pointer-events-auto ${hoveredCard === index ? "scale-105 shadow-2xl" : ""}`,
                    style: getCardStyle(index, collections.length),
                    onMouseEnter: ()=>handleCardHover(index),
                    onMouseLeave: handleCardLeave,
                    children: /*#__PURE__*/ _jsxDEV("img", {
                        src: collection.src,
                        alt: collection.alt,
                        className: "w-full h-full object-cover rounded-2xl"
                    }, void 0, false, {
                        fileName: "[project]/src/components/AnimatedCardStack.jsx",
                        lineNumber: 98,
                        columnNumber: 13
                    }, /*TURBOPACK member replacement*/ __turbopack_context__.e)
                }, collection.id, false, {
                    fileName: "[project]/src/components/AnimatedCardStack.jsx",
                    lineNumber: 89,
                    columnNumber: 11
                }, /*TURBOPACK member replacement*/ __turbopack_context__.e))
        }, void 0, false, {
            fileName: "[project]/src/components/AnimatedCardStack.jsx",
            lineNumber: 87,
            columnNumber: 7
        }, /*TURBOPACK member replacement*/ __turbopack_context__.e)
    }, void 0, false, {
        fileName: "[project]/src/components/AnimatedCardStack.jsx",
        lineNumber: 86,
        columnNumber: 5
    }, /*TURBOPACK member replacement*/ __turbopack_context__.e);
};
}),
"[project]/src/app/animated-card-stack/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CircleCarouselPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AnimatedCardStack$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/AnimatedCardStack.jsx [app-ssr] (ecmascript)");
'use client';
;
;
function CircleCarouselPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AnimatedCardStack$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/src/app/animated-card-stack/page.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else //TURBOPACK unreachable
            ;
        } else //TURBOPACK unreachable
        ;
    }
} //# sourceMappingURL=module.compiled.js.map
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__00dba222._.js.map