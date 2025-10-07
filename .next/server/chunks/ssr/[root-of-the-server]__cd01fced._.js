module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/src/components/CardStackCarousel.jsx [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

/*#__PURE__*/ const { jsxDEV: _jsxDEV } = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
_jsxDEV("div", {
    className: "fixed inset-0 flex items-center justify-center bg-black overflow-hidden",
    children: [
        /*#__PURE__*/ _jsxDEV("div", {
            className: "relative w-[600px] h-[700px] flex items-center justify-center",
            children: posters.map((poster, index)=>/*#__PURE__*/ _jsxDEV("div", {
                    style: getTransform(index),
                    children: /*#__PURE__*/ _jsxDEV("div", {
                        className: "w-40 h-56 relative rounded-lg overflow-hidden shadow-lg border border-white/20",
                        children: /*#__PURE__*/ _jsxDEV(Image, {
                            src: poster.src,
                            alt: poster.alt,
                            fill: true,
                            className: "object-cover"
                        }, void 0, false, {
                            fileName: "[project]/src/components/CardStackCarousel.jsx",
                            lineNumber: 7,
                            columnNumber: 11
                        }, /*TURBOPACK member replacement*/ __turbopack_context__.e)
                    }, void 0, false, {
                        fileName: "[project]/src/components/CardStackCarousel.jsx",
                        lineNumber: 6,
                        columnNumber: 9
                    }, /*TURBOPACK member replacement*/ __turbopack_context__.e)
                }, poster.id, false, {
                    fileName: "[project]/src/components/CardStackCarousel.jsx",
                    lineNumber: 5,
                    columnNumber: 7
                }, /*TURBOPACK member replacement*/ __turbopack_context__.e))
        }, void 0, false, {
            fileName: "[project]/src/components/CardStackCarousel.jsx",
            lineNumber: 3,
            columnNumber: 3
        }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
        /*#__PURE__*/ _jsxDEV("div", {
            className: "absolute bottom-20 flex space-x-10 z-20",
            children: [
                /*#__PURE__*/ _jsxDEV("button", {
                    onClick: prevSlide,
                    className: "w-14 h-14 bg-white/10 rounded-full flex items-center justify-center text-white border border-white/30 hover:bg-white/20 transition",
                    children: "‹"
                }, void 0, false, {
                    fileName: "[project]/src/components/CardStackCarousel.jsx",
                    lineNumber: 20,
                    columnNumber: 5
                }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
                /*#__PURE__*/ _jsxDEV("button", {
                    onClick: nextSlide,
                    className: "w-14 h-14 bg-white/10 rounded-full flex items-center justify-center text-white border border-white/30 hover:bg-white/20 transition",
                    children: "›"
                }, void 0, false, {
                    fileName: "[project]/src/components/CardStackCarousel.jsx",
                    lineNumber: 26,
                    columnNumber: 5
                }, /*TURBOPACK member replacement*/ __turbopack_context__.e)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/CardStackCarousel.jsx",
            lineNumber: 19,
            columnNumber: 3
        }, /*TURBOPACK member replacement*/ __turbopack_context__.e)
    ]
}, void 0, true, {
    fileName: "[project]/src/components/CardStackCarousel.jsx",
    lineNumber: 1,
    columnNumber: 1
}, /*TURBOPACK member replacement*/ __turbopack_context__.e);
}),
"[project]/src/app/card-stack-carousel/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AnimatedCarouselPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CardStackCarousel$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/CardStackCarousel.jsx [app-ssr] (ecmascript)");
'use client';
;
;
function AnimatedCarouselPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CardStackCarousel$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardStackCarousel"], {}, void 0, false, {
        fileName: "[project]/src/app/card-stack-carousel/page.tsx",
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

//# sourceMappingURL=%5Broot-of-the-server%5D__cd01fced._.js.map