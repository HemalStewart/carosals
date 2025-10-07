(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/AnimatedCardStack.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
const CardStackCollection = ()=>{
    _s();
    const [isExpanded, setIsExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hoveredCard, setHoveredCard] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [scrollY, setScrollY] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    // Using useRef to store random offsets and rotations once
    const cardOffsets = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    // Initialize random offsets and rotations when the component mounts
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CardStackCollection.useEffect": ()=>{
            if (cardOffsets.current.length === 0) {
                cardOffsets.current = collections.map({
                    "CardStackCollection.useEffect": ()=>({
                            offsetX: (Math.random() - 0.5) * 20,
                            offsetY: (Math.random() - 0.5) * 10,
                            rotation: (Math.random() - 0.5) * 15
                        })
                }["CardStackCollection.useEffect"]);
            }
        }
    }["CardStackCollection.useEffect"], []);
    // Handle scroll events
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CardStackCollection.useEffect": ()=>{
            const handleScroll = {
                "CardStackCollection.useEffect.handleScroll": ()=>{
                    const currentScrollY = window.scrollY;
                    const windowHeight = window.innerHeight;
                    const documentHeight = document.documentElement.scrollHeight;
                    setScrollY(currentScrollY);
                    // Calculate how close we are to the bottom (threshold: 80% scrolled)
                    const scrollProgress = currentScrollY / (documentHeight - windowHeight);
                    const shouldExpand = scrollProgress > 0.8;
                    setIsExpanded(shouldExpand);
                }
            }["CardStackCollection.useEffect.handleScroll"];
            window.addEventListener('scroll', handleScroll);
            // Initial check
            handleScroll();
            return ({
                "CardStackCollection.useEffect": ()=>window.removeEventListener('scroll', handleScroll)
            })["CardStackCollection.useEffect"];
        }
    }["CardStackCollection.useEffect"], []);
    const collections = [
        {
            id: 1,
            title: 'Poster 1',
            src: '/images/poster1.jpg',
            alt: 'Poster 1'
        },
        {
            id: 2,
            title: 'Poster 2',
            src: '/images/poster2.jpg',
            alt: 'Poster 2'
        },
        {
            id: 3,
            title: 'Poster 3',
            src: '/images/poster3.jpg',
            alt: 'Poster 3'
        },
        {
            id: 4,
            title: 'Poster 4',
            src: '/images/poster4.jpg',
            alt: 'Poster 4'
        },
        {
            id: 5,
            title: 'Poster 5',
            src: '/images/poster5.jpg',
            alt: 'Poster 5'
        },
        {
            id: 6,
            title: 'Poster 6',
            src: '/images/poster6.jpg',
            alt: 'Poster 6'
        }
    ];
    const getCardStyle = (index, total)=>{
        const baseZIndex = total - index;
        if (!isExpanded) {
            const { offsetX, offsetY, rotation } = cardOffsets.current[index] || {
                offsetX: 0,
                offsetY: 0,
                rotation: 0
            };
            return {
                transform: "translateX(".concat(offsetX + index * 1, "px) translateY(").concat(offsetY + index * -0.5, "px) rotate(").concat(rotation, "deg)"),
                zIndex: baseZIndex,
                transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1), z-index 0.5s ease-out'
            };
        } else {
            const spreadDistance = 200;
            const translateX = (index - (total - 1) / 2) * spreadDistance;
            const angle = (index - (total - 1) / 2) * 3;
            return {
                transform: "translateX(".concat(translateX, "px) translateY(0px) rotate(").concat(angle, "deg)"),
                zIndex: hoveredCard === index ? baseZIndex + 1000 : baseZIndex + 500,
                transition: 'all 1s cubic-bezier(0.34, 1.56, 0.64, 1), z-index 0.3s ease-in-out'
            };
        }
    };
    const handleCardHover = (index)=>{
        if (isExpanded) {
            setHoveredCard(index);
        }
    };
    const handleCardLeave = ()=>{
        setHoveredCard(null);
    };
    const scrollToTop = ()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "jsx-4f51c0c69bb2e558" + " " + "min-h-[300vh] bg-gradient-to-br from-gray-50 to-gray-100",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-4f51c0c69bb2e558" + " " + "h-screen flex flex-col items-center justify-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "jsx-4f51c0c69bb2e558" + " " + "text-6xl font-bold text-gray-800 mb-4",
                        children: "Welcome"
                    }, void 0, false, {
                        fileName: "[project]/src/components/AnimatedCardStack.jsx",
                        lineNumber: 97,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "jsx-4f51c0c69bb2e558" + " " + "text-xl text-gray-600 mb-8",
                        children: "Scroll down to see the magic happen"
                    }, void 0, false, {
                        fileName: "[project]/src/components/AnimatedCardStack.jsx",
                        lineNumber: 98,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-4f51c0c69bb2e558" + " " + "animate-bounce",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            className: "jsx-4f51c0c69bb2e558" + " " + "w-8 h-8 text-gray-600",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M19 14l-7 7m0 0l-7-7m7 7V3",
                                className: "jsx-4f51c0c69bb2e558"
                            }, void 0, false, {
                                fileName: "[project]/src/components/AnimatedCardStack.jsx",
                                lineNumber: 101,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/AnimatedCardStack.jsx",
                            lineNumber: 100,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/AnimatedCardStack.jsx",
                        lineNumber: 99,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/AnimatedCardStack.jsx",
                lineNumber: 96,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-4f51c0c69bb2e558" + " " + "h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-4f51c0c69bb2e558" + " " + "text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "jsx-4f51c0c69bb2e558" + " " + "text-4xl font-bold text-gray-800 mb-4",
                            children: "Keep Scrolling"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AnimatedCardStack.jsx",
                            lineNumber: 108,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "jsx-4f51c0c69bb2e558" + " " + "text-lg text-gray-600",
                            children: "The cards will expand when you reach the bottom"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AnimatedCardStack.jsx",
                            lineNumber: 109,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/AnimatedCardStack.jsx",
                    lineNumber: 107,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/AnimatedCardStack.jsx",
                lineNumber: 106,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-4f51c0c69bb2e558" + " " + "fixed inset-0 flex flex-col items-center justify-center overflow-hidden pointer-events-none",
                children: [
                    isExpanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-4f51c0c69bb2e558" + " " + "text-center mb-8 opacity-0 animate-slide-down pointer-events-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "jsx-4f51c0c69bb2e558" + " " + "text-4xl font-bold text-gray-800 mb-2",
                                children: "The Ultimate"
                            }, void 0, false, {
                                fileName: "[project]/src/components/AnimatedCardStack.jsx",
                                lineNumber: 117,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "jsx-4f51c0c69bb2e558" + " " + "text-5xl font-black text-gray-900 mb-6",
                                children: "COLLECTIONS"
                            }, void 0, false, {
                                fileName: "[project]/src/components/AnimatedCardStack.jsx",
                                lineNumber: 120,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-4f51c0c69bb2e558" + " " + "flex justify-center gap-4 mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-4f51c0c69bb2e558" + " " + "px-3 py-1.5 bg-cyan-400 text-white rounded-full text-xs font-medium",
                                        children: "for everyone"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AnimatedCardStack.jsx",
                                        lineNumber: 125,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-4f51c0c69bb2e558" + " " + "px-3 py-1.5 bg-orange-400 text-white rounded-full text-xs font-medium",
                                        children: "new styles"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AnimatedCardStack.jsx",
                                        lineNumber: 128,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/AnimatedCardStack.jsx",
                                lineNumber: 124,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/AnimatedCardStack.jsx",
                        lineNumber: 116,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-4f51c0c69bb2e558" + " " + "relative flex-1 flex items-center justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-4f51c0c69bb2e558" + " " + "relative transition-all duration-1000 ".concat(isExpanded ? 'w-full' : 'w-64'),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-4f51c0c69bb2e558" + " " + "relative h-80 flex items-center justify-center",
                                children: collections.map((collection, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: getCardStyle(index, collections.length),
                                        onMouseEnter: ()=>handleCardHover(index),
                                        onMouseLeave: handleCardLeave,
                                        className: "jsx-4f51c0c69bb2e558" + " " + "absolute w-48 h-72 rounded-2xl shadow-xl cursor-pointer overflow-hidden pointer-events-auto ".concat(hoveredCard === index ? 'scale-105 shadow-2xl' : ''),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: collection.src,
                                            alt: collection.alt,
                                            className: "jsx-4f51c0c69bb2e558" + " " + "w-full h-full object-cover rounded-2xl"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AnimatedCardStack.jsx",
                                            lineNumber: 146,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, collection.id, false, {
                                        fileName: "[project]/src/components/AnimatedCardStack.jsx",
                                        lineNumber: 139,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/src/components/AnimatedCardStack.jsx",
                                lineNumber: 137,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/AnimatedCardStack.jsx",
                            lineNumber: 136,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/AnimatedCardStack.jsx",
                        lineNumber: 135,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    isExpanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-4f51c0c69bb2e558" + " " + "text-center pb-8 opacity-0 animate-slide-up pointer-events-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "jsx-4f51c0c69bb2e558" + " " + "text-gray-600 text-sm max-w-md mx-auto mb-6",
                                children: "We Go First Choice Our Collections 12 Sessions We Create New Models Every Week. And We In A Few Items."
                            }, void 0, false, {
                                fileName: "[project]/src/components/AnimatedCardStack.jsx",
                                lineNumber: 159,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: scrollToTop,
                                className: "jsx-4f51c0c69bb2e558" + " " + "px-6 py-2.5 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors duration-300 shadow-lg hover:shadow-xl",
                                children: "Back to Top"
                            }, void 0, false, {
                                fileName: "[project]/src/components/AnimatedCardStack.jsx",
                                lineNumber: 164,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/AnimatedCardStack.jsx",
                        lineNumber: 158,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/AnimatedCardStack.jsx",
                lineNumber: 114,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-4f51c0c69bb2e558" + " " + "h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-teal-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-4f51c0c69bb2e558" + " " + "text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "jsx-4f51c0c69bb2e558" + " " + "text-4xl font-bold text-gray-800 mb-4",
                            children: "You Made It!"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AnimatedCardStack.jsx",
                            lineNumber: 177,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "jsx-4f51c0c69bb2e558" + " " + "text-lg text-gray-600",
                            children: "The cards should be expanded now"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AnimatedCardStack.jsx",
                            lineNumber: 178,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/AnimatedCardStack.jsx",
                    lineNumber: 176,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/AnimatedCardStack.jsx",
                lineNumber: 175,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "4f51c0c69bb2e558",
                children: "@keyframes slide-down{0%{opacity:0;transform:translateY(-30px)}to{opacity:1;transform:translateY(0)}}@keyframes slide-up{0%{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}}.animate-slide-down.jsx-4f51c0c69bb2e558{animation:.8s ease-out .5s forwards slide-down}.animate-slide-up.jsx-4f51c0c69bb2e558{animation:.8s ease-out .5s forwards slide-up}"
            }, void 0, false, void 0, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/AnimatedCardStack.jsx",
        lineNumber: 94,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(CardStackCollection, "fWClZkePwyPhgLcxciUzNZGV4Z8=");
_c = CardStackCollection;
const __TURBOPACK__default__export__ = CardStackCollection;
var _c;
__turbopack_context__.k.register(_c, "CardStackCollection");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/animation/hooks/use-animation.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AnimatedCardStack$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/AnimatedCardStack.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function CarouselPage() {
    _s();
    var _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature();
    // List of carousel sections
    const sections = [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AnimatedCardStack$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
    // Create refs and animation controls dynamically
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-screen w-full overflow-y-scroll snap-y snap-mandatory",
        children: sections.map((SectionComponent, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].section, {
                ref: refs[i],
                className: "h-screen snap-start",
                initial: {
                    opacity: 0,
                    y: 30
                },
                animate: controls[i],
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionComponent, {}, void 0, false, {
                    fileName: "[project]/src/app/card-stack-carousel/page.tsx",
                    lineNumber: 57,
                    columnNumber: 11
                }, this)
            }, i, false, {
                fileName: "[project]/src/app/card-stack-carousel/page.tsx",
                lineNumber: 50,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/app/card-stack-carousel/page.tsx",
        lineNumber: 48,
        columnNumber: 5
    }, this);
}
_s(CarouselPage, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = CarouselPage;
var _c;
__turbopack_context__.k.register(_c, "CarouselPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_c2884943._.js.map