module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/src/app/card-stack-carousel/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// 'use client';
// import { motion, useAnimation, useInView } from "framer-motion";
// import { useEffect, useRef } from "react";
// import { CardStackCarousel } from "@/components/CardStackCarousel";
// import ExpandingPosterCarousel  from "@/components/ExpandingPosterCarousel";
// import { BlackBackgroundCarousel } from "@/components/BlackBackgroundCarousel";
// import { WhiteBackgroundCarousel } from "@/components/WhiteBackgroundCarousel";
// import  TimedCardOpening from "@/components/TimedCardOpening";
// import NetflixCarousel from "@/components/NetflixCarousel";
// import { ExpoSlider } from "@/components/ExpoSlider";
// import  AnimatedCardStack  from "@/components/AnimatedCardStack";
// export default function CarouselPage() {
//   // List of carousel sections
//   const sections = [
//     AnimatedCardStack,
//     // CardStackCarousel,
//     // ExpandingPosterCarousel,
//     // BlackBackgroundCarousel,
//     // WhiteBackgroundCarousel,
//     // TimedCardOpening,
//     // NetflixCarousel,
//     // ExpoSlider,
//   ];
//   // Create refs and animation controls dynamically
//   const refs = sections.map(() => useRef(null));
//   const controls = sections.map(() => useAnimation());
//   const inViews = refs.map((ref) => useInView(ref, { amount: 0.3, once: false }));
//   useEffect(() => {
//     inViews.forEach((inView, index) => {
//       if (inView) {
//         controls[index].start({
//           opacity: 1,
//           y: 0,
//           transition: { duration: 1.2, type: "spring", stiffness: 80, damping: 20 },
//         });
//       } else {
//         controls[index].start({ opacity: 0, y: 30 });
//       }
//     });
//   }, [inViews, controls]);
//   return (
//     <div className="h-screen w-full overflow-y-scroll snap-y snap-mandatory">
//       {sections.map((SectionComponent, i) => (
//         <motion.section
//           key={i}
//           ref={refs[i]}
//           className="h-screen snap-start"
//           initial={{ opacity: 0, y: 30 }}
//           animate={controls[i]}
//         >
//           <SectionComponent />
//         </motion.section>
//       ))}
//     </div>
//   );
// }
__turbopack_context__.s([
    "default",
    ()=>CarouselPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/animation/hooks/use-animation.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/components/CardStackCollection'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
'use client';
;
;
;
;
function CarouselPage() {
    // Specify the type for the useRef hook
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [scrollTop, setScrollTop] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const sections = [
        CardStackCollection
    ];
    const refs = sections.map(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null));
    const controls = sections.map(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAnimation"])());
    const inViews = refs.map((ref)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useInView"])(ref, {
            amount: 0.3,
            once: false
        }));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        inViews.forEach((inView, index)=>{
            if (inView) {
                controls[index].start({
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: 1.2,
                        type: "spring",
                        stiffness: 80,
                        damping: 20
                    }
                });
            } else {
                controls[index].start({
                    opacity: 0,
                    y: 30
                });
            }
        });
    }, [
        inViews,
        controls
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleScroll = ()=>{
            // Check if containerRef.current is not null before accessing its properties
            if (containerRef.current) {
                setScrollTop(containerRef.current.scrollTop);
            }
        };
        const container = containerRef.current;
        if (container) {
            container.addEventListener('scroll', handleScroll);
        }
        return ()=>{
            if (container) {
                container.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-screen w-full overflow-y-scroll snap-y snap-mandatory",
        ref: containerRef,
        children: sections.map((SectionComponent, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].section, {
                ref: refs[i],
                className: "h-screen snap-start",
                initial: {
                    opacity: 0,
                    y: 30
                },
                animate: controls[i],
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionComponent, {
                    scrollTop: scrollTop,
                    scrollHeight: containerRef.current?.scrollHeight || 0,
                    clientHeight: containerRef.current?.clientHeight || 0
                }, void 0, false, {
                    fileName: "[project]/src/app/card-stack-carousel/page.tsx",
                    lineNumber: 132,
                    columnNumber: 11
                }, this)
            }, i, false, {
                fileName: "[project]/src/app/card-stack-carousel/page.tsx",
                lineNumber: 125,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/app/card-stack-carousel/page.tsx",
        lineNumber: 120,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__85ea1f5e._.js.map