(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/card-stack-carousel/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/animation/hooks/use-animation.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/components/CardStackCollection'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function CarouselPage() {
    _s();
    var _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature();
    // Specify the type for the useRef hook
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [scrollTop, setScrollTop] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const sections = [
        CardStackCollection
    ];
    const refs = sections.map(_s1(()=>{
        _s1();
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    }, "J9pzIsEOVEZ74gjFtMkCj+5Po7s="));
    const controls = sections.map(_s2(()=>{
        _s2();
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimation"])();
    }, "YfilLoO5ZZXq7jwRX1lU3wfYQNM=", false, function() {
        return [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimation"]
        ];
    }));
    const inViews = refs.map(_s3((ref)=>{
        _s3();
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(ref, {
            amount: 0.3,
            once: false
        });
    }, "dvraU7xYw0IhS37ojYdSIeEeZzQ=", false, function() {
        return [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
        ];
    }));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CarouselPage.useEffect": ()=>{
            inViews.forEach({
                "CarouselPage.useEffect": (inView, index)=>{
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
                }
            }["CarouselPage.useEffect"]);
        }
    }["CarouselPage.useEffect"], [
        inViews,
        controls
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CarouselPage.useEffect": ()=>{
            const handleScroll = {
                "CarouselPage.useEffect.handleScroll": ()=>{
                    // Check if containerRef.current is not null before accessing its properties
                    if (containerRef.current) {
                        setScrollTop(containerRef.current.scrollTop);
                    }
                }
            }["CarouselPage.useEffect.handleScroll"];
            const container = containerRef.current;
            if (container) {
                container.addEventListener('scroll', handleScroll);
            }
            return ({
                "CarouselPage.useEffect": ()=>{
                    if (container) {
                        container.removeEventListener('scroll', handleScroll);
                    }
                }
            })["CarouselPage.useEffect"];
        }
    }["CarouselPage.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-screen w-full overflow-y-scroll snap-y snap-mandatory",
        ref: containerRef,
        children: sections.map((SectionComponent, i)=>{
            var _containerRef_current, _containerRef_current1;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].section, {
                ref: refs[i],
                className: "h-screen snap-start",
                initial: {
                    opacity: 0,
                    y: 30
                },
                animate: controls[i],
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionComponent, {
                    scrollTop: scrollTop,
                    scrollHeight: ((_containerRef_current = containerRef.current) === null || _containerRef_current === void 0 ? void 0 : _containerRef_current.scrollHeight) || 0,
                    clientHeight: ((_containerRef_current1 = containerRef.current) === null || _containerRef_current1 === void 0 ? void 0 : _containerRef_current1.clientHeight) || 0
                }, void 0, false, {
                    fileName: "[project]/src/app/card-stack-carousel/page.tsx",
                    lineNumber: 132,
                    columnNumber: 11
                }, this)
            }, i, false, {
                fileName: "[project]/src/app/card-stack-carousel/page.tsx",
                lineNumber: 125,
                columnNumber: 9
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/src/app/card-stack-carousel/page.tsx",
        lineNumber: 120,
        columnNumber: 5
    }, this);
}
_s(CarouselPage, "xnSIiMynB3LdauQfLW2UVnJOV2A=");
_c = CarouselPage;
var _c;
__turbopack_context__.k.register(_c, "CarouselPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_card-stack-carousel_page_tsx_aed5689a._.js.map