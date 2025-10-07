(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/effect-material.esm.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * UI Initiative Material You Slider
 *
 * Material You Carousel made with Swiper
 *
 * https://uiinitiative.com
 *
 * Copyright 2025 UI Initiative
 *
 * Released under the UI Initiative Regular License
 *
 * September 23, 2025
 */ __turbopack_context__.s([
    "default",
    ()=>EffectMaterial
]);
if ("object" !== 'undefined' && window.SwiperElementRegisterParams) {
    window.SwiperElementRegisterParams([
        'materialEffect'
    ]);
}
function elementTransitionEnd(el, callback) {
    function fireCallBack(e) {
        if (e.target !== el) return;
        callback.call(el, e);
        el.removeEventListener('transitionend', fireCallBack);
    }
    if (callback) {
        el.addEventListener('transitionend', fireCallBack);
    }
}
function effectVirtualTransitionEnd(param) {
    let { swiper, duration, transformElements, allSlides } = param;
    const { activeIndex } = swiper;
    const getSlide = (el)=>{
        if (!el.parentElement) {
            // assume shadow root
            const slide = swiper.slides.filter((slideEl)=>slideEl.shadowRoot && slideEl.shadowRoot === el.parentNode)[0];
            return slide;
        }
        return el.parentElement;
    };
    if (swiper.params.virtualTranslate && duration !== 0) {
        let eventTriggered = false;
        let transitionEndTarget;
        if (allSlides) {
            transitionEndTarget = transformElements;
        } else {
            transitionEndTarget = transformElements.filter((transformEl)=>{
                const el = transformEl.classList.contains('swiper-slide-transform') ? getSlide(transformEl) : transformEl;
                return swiper.getSlideIndex(el) === activeIndex;
            });
        }
        transitionEndTarget.forEach((el)=>{
            elementTransitionEnd(el, ()=>{
                if (eventTriggered) return;
                if (!swiper || swiper.destroyed) return;
                eventTriggered = true;
                swiper.animating = false;
                const evt = new window.CustomEvent('transitionend', {
                    bubbles: true,
                    cancelable: true
                });
                swiper.wrapperEl.dispatchEvent(evt);
            });
        });
    }
}
function EffectMaterial(param) {
    let { swiper, on, extendParams } = param;
    extendParams({
        materialEffect: {
            slideSplitRatio: 0.65
        }
    });
    const setTranslate = ()=>{
        const { slides, slidesSizesGrid, params, size: swiperSize, rtlTranslate: rtl } = swiper;
        const { spaceBetween, cssMode, centeredSlides } = params;
        let { slidesPerView } = params;
        const { slideSplitRatio } = params.materialEffect;
        const isCenteredBetween = centeredSlides && Math.ceil(slidesPerView) % 2 === 1 && Math.ceil(slidesPerView) - Math.floor(slidesPerView) === 1;
        if (isCenteredBetween) slidesPerView = Math.floor(slidesPerView);
        const isFloatSPV = centeredSlides && parseInt(slidesPerView, 10) !== slidesPerView;
        const slidesPerViewRounded = centeredSlides ? Math.ceil(slidesPerView) : slidesPerView;
        const isCenteredOdd = centeredSlides && slidesPerViewRounded % 2 === 1;
        const isCenteredEven = centeredSlides && slidesPerViewRounded % 2 === 0;
        const rtlMultiplier = rtl ? -1 : 1;
        let largeSlideRatio = centeredSlides ? isFloatSPV ? (slidesPerView - Math.floor(slidesPerView)) / 2 : 0.5 : Math.min(Math.max(slideSplitRatio, 0), 1);
        let smallSlideRatio = centeredSlides ? isFloatSPV ? (slidesPerView - Math.floor(slidesPerView)) / 2 : 0.5 : 1 - Math.min(Math.max(slideSplitRatio, 0), 1);
        let smallSlideRatioNormalize = isFloatSPV ? 0.5 + (0.5 - smallSlideRatio) : smallSlideRatio;
        if (isCenteredBetween) {
            const slidesInCenter = Math.floor(params.slidesPerView) - 1;
            largeSlideRatio = (params.slidesPerView - slidesInCenter) / 2;
            smallSlideRatio = largeSlideRatio;
            smallSlideRatioNormalize = 0.5 + (0.5 - smallSlideRatio);
        }
        for(let i = 0; i < slides.length; i += 1){
            const slideEl = slides[i];
            const materialEl = slideEl.querySelector('.swiper-material-wrapper');
            const opacityEls = slideEl.querySelectorAll('.swiper-material-animate-opacity');
            const scaleEls = slideEl.querySelectorAll('[data-swiper-material-scale]');
            const progress = -slideEl.progress + (rtl && !centeredSlides ? slidesPerView - 1 : 0);
            const offset = slideEl.swiperSlideOffset - (rtl ? (swiper.slidesSizesGrid[0] + spaceBetween) * (slidesPerView - 1) : 0);
            const swiperTranslate = swiper.translate;
            let scale;
            let translate = 0;
            let opacity = 0;
            const currentSlideSize = slidesSizesGrid[i];
            const scaleDiff = smallSlideRatio === 0 && !centeredSlides ? 0 : spaceBetween / currentSlideSize;
            const cssModeTranslateOffset = cssMode ? swiperTranslate : 0;
            if (progress <= 0) {
                // SLIDES BEFORE ACTIVE SLIDE / PREVIOUS
                if (centeredSlides && slidesPerView > 1) {
                    // CENTERED/ACTIVE SLIDES
                    if (progress <= 0 && progress >= -(slidesPerViewRounded - 2)) {
                        translate = swiperTranslate;
                        scale = 1;
                        opacity = 1;
                    }
                    // current to zero
                    if (isCenteredOdd && progress < -(slidesPerViewRounded - Math.ceil(slidesPerViewRounded / 2))) {
                        const currentProgress = Math.ceil(slidesPerViewRounded / 2) - Math.abs(progress);
                        scale = currentProgress;
                        opacity = scale ** 4;
                        translate = swiperTranslate + currentSlideSize * (1 - currentProgress) * (1 + scaleDiff * 2) * rtlMultiplier;
                    }
                    // current to large
                    if (isCenteredEven && progress < -(slidesPerViewRounded / 2 - 1) && progress >= -(slidesPerViewRounded / 2)) {
                        const currentProgress = slidesPerViewRounded / 2 - Math.abs(progress);
                        scale = largeSlideRatio - scaleDiff + (smallSlideRatioNormalize + scaleDiff * 2) * (slidesPerViewRounded / 2 - Math.abs(progress));
                        opacity = ((scale - largeSlideRatio) / (1 - largeSlideRatio)) ** 4;
                        translate = swiperTranslate + currentSlideSize * (smallSlideRatioNormalize + scaleDiff) * (1 - currentProgress) * rtlMultiplier;
                    }
                    // large to zero
                    if (isCenteredEven && progress < -slidesPerViewRounded / 2) {
                        let currentProgress = slidesPerViewRounded / 2 + 1 - Math.abs(progress);
                        // let translateAdd = 0;
                        scale = 0;
                        if (currentProgress >= 0) {
                            currentProgress = -scaleDiff * 2 + currentProgress * (1 + scaleDiff * 2);
                            currentProgress = Math.max(Math.min(currentProgress, 1), 0);
                            scale = (smallSlideRatio - scaleDiff) * currentProgress;
                        }
                        translate = swiperTranslate + currentSlideSize * rtlMultiplier * (smallSlideRatioNormalize + scaleDiff) * (2 - currentProgress) + currentSlideSize * rtlMultiplier * (smallSlideRatio - scaleDiff) * (1 - currentProgress);
                    }
                } else {
                    // NOT CENTERED SLIDES
                    scale = 1 + progress;
                    translate = -offset;
                    opacity = scale ** 4;
                }
            }
            if (slidesPerView === 1) {
                if (progress > 0) {
                    scale = 1 - progress;
                    translate = -offset + swiperSize * Math.min(progress, 1) * rtlMultiplier;
                    opacity = scale ** 4;
                }
            } else {
                // ACTIVE SLIDES
                if (progress > 0 && progress <= slidesPerView - 2) {
                    translate = swiperTranslate;
                    scale = 1;
                    opacity = 1;
                }
                // SLIDES AFTER ACTIVE SLIDE / NEXT
                // large to current
                const isLargeToCurrent = isCenteredEven ? progress > slidesPerViewRounded / 2 - 1 && progress <= slidesPerViewRounded / 2 : progress > slidesPerViewRounded - 2 && progress <= slidesPerViewRounded - 1;
                if (isLargeToCurrent) {
                    const minus = isCenteredEven ? Math.floor(slidesPerViewRounded / 2) : 1;
                    scale = largeSlideRatio - scaleDiff + (smallSlideRatioNormalize + scaleDiff * 2) * (slidesPerViewRounded - minus - Math.abs(progress));
                    translate = swiperTranslate;
                    if (largeSlideRatio === 1) {
                        opacity = scale ** 4;
                    } else {
                        opacity = ((scale - largeSlideRatio) / (1 - largeSlideRatio)) ** 4;
                    }
                }
                // zero to current
                if (isCenteredOdd && progress > slidesPerView - Math.ceil(slidesPerView / 2)) {
                    const currentProgress = Math.ceil(slidesPerView / 2) - (slidesPerView - Math.abs(progress));
                    translate = swiperTranslate - currentSlideSize * (scaleDiff * 2) * currentProgress;
                    scale = 1 - currentProgress;
                    opacity = scale ** 4;
                }
                // small to large: 0.35 -> 0.65
                if (progress > slidesPerView - 1 && progress <= slidesPerView && !centeredSlides) {
                    const currentProgress = slidesPerView - Math.abs(progress);
                    const largeWithDiff = largeSlideRatio - scaleDiff;
                    const smallWithDiff = smallSlideRatio - scaleDiff;
                    scale = smallWithDiff + (largeWithDiff - smallWithDiff) * currentProgress;
                    translate = swiperTranslate - currentSlideSize * (smallSlideRatio + scaleDiff) * (1 - currentProgress) * rtlMultiplier;
                    if (smallSlideRatio === 0) {
                        opacity = scale ** 4;
                    }
                }
                // zero to small: 0 -> 0.35
                if (progress > (centeredSlides ? slidesPerViewRounded / 2 : slidesPerViewRounded) && !isCenteredOdd) {
                    let currentProgress = (centeredSlides ? slidesPerViewRounded / 2 + 1 : slidesPerViewRounded + 1) - Math.abs(progress);
                    let translateAdd = 0;
                    scale = 0;
                    if (currentProgress >= 0) {
                        currentProgress = -scaleDiff * 2 + currentProgress * (1 + scaleDiff * 2);
                        currentProgress = Math.max(Math.min(currentProgress, 1), 0);
                        scale = (smallSlideRatio - scaleDiff) * currentProgress;
                        translateAdd = -currentProgress * (smallSlideRatio + scaleDiff) * currentSlideSize + currentProgress * spaceBetween * (isFloatSPV ? 2 : 1);
                    }
                    translate = -offset + (swiperSize * Math.min(progress, 1) + translateAdd) * rtlMultiplier;
                    opacity = 0;
                }
            }
            if (scale < 0) {
                scale = 0;
            }
            if (scale > 1) {
                scale = 1;
            }
            if (scale === 0) {
                scale = 0.00001;
            }
            slideEl.style.setProperty('--swiper-material-scale', scale);
            slideEl.style.setProperty('--swiper-material-opacity', opacity);
            opacityEls.forEach((opacityEl)=>{
                opacityEl.style.opacity = opacity;
            });
            scaleEls.forEach((scaleEl)=>{
                let elementScale = parseFloat(scaleEl.getAttribute('data-swiper-material-scale'));
                if (Number.isNaN(elementScale) || !elementScale && elementScale !== 0) elementScale = 1;
                scaleEl.style.transform = "scale(".concat(1 + (elementScale - 1) * (1 - scale), ")");
            });
            if (swiper.isHorizontal()) {
                materialEl.style.width = "".concat(100 * scale, "%");
                materialEl.style.transform = "translate3d(".concat(translate - cssModeTranslateOffset + (rtl ? (1 - scale) * currentSlideSize : 0), "px, 0, 0)");
            } else {
                materialEl.style.height = "".concat(100 * scale, "%");
                materialEl.style.transform = "translate3d(0, ".concat(translate - cssModeTranslateOffset, "px, 0)");
            }
        }
    };
    const setTransition = (duration)=>{
        const { slides } = swiper;
        const transformElements = [];
        for(let i = 0; i < slides.length; i += 1){
            const slideEl = slides[i];
            const materialEl = slideEl.querySelector('.swiper-material-wrapper');
            const opacityEls = slideEl.querySelectorAll('.swiper-material-animate-opacity');
            const scaleEls = slideEl.querySelectorAll('[data-swiper-material-scale]');
            [
                materialEl,
                ...scaleEls,
                ...opacityEls
            ].forEach((opacityEl)=>{
                opacityEl.style.transitionDuration = "".concat(duration, "ms");
            });
            transformElements.push(materialEl);
        }
        effectVirtualTransitionEnd({
            swiper,
            duration,
            transformElements,
            allSlides: true
        });
    };
    on('beforeInit', ()=>{
        if (swiper.params.effect !== 'material') return;
        swiper.classNames.push("".concat(swiper.params.containerModifierClass, "material"));
        if (swiper.isElement && swiper.hostEl) {
            swiper.hostEl.classList.add("swiper-".concat(swiper.params.direction));
        }
        const overwriteParams = {
            loopAdditionalSlides: 1,
            watchSlidesProgress: true,
            virtualTranslate: !swiper.params.cssMode
        };
        Object.assign(swiper.params, overwriteParams);
        Object.assign(swiper.originalParams, overwriteParams);
    });
    on('setTranslate', ()=>{
        if (swiper.params.effect !== 'material') return;
        setTranslate();
    });
    on('setTransition', (_s, duration)=>{
        if (swiper.params.effect !== 'material') return;
        setTransition(duration);
    });
    on('slidesUpdated', ()=>{
        if (!swiper.params.centeredSlides && swiper.params.slidesPerView > 1 && !swiper.params.loop && swiper.params.materialEffect.slideSplitRatio < 1) {
            const lastItem = swiper.snapGrid[swiper.snapGrid.length - 1];
            swiper.snapGrid.push(lastItem + swiper.slidesSizesGrid[0] + swiper.params.spaceBetween);
        }
        // eslint-disable-next-line
        swiper.__preventObserver__ = true;
        swiper.el.style.setProperty('--swiper-material-slide-size', "".concat(swiper.slidesSizesGrid[0], "px"));
        requestAnimationFrame(()=>{
            // eslint-disable-next-line
            swiper.__preventObserver__ = false;
        });
    });
}
_c = EffectMaterial;
var _c;
__turbopack_context__.k.register(_c, "EffectMaterial");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/MaterialSlider.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MaterialYouDemo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/swiper.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$shared$2f$swiper$2d$core$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__S__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/shared/swiper-core.mjs [app-client] (ecmascript) <export S as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$effect$2d$material$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/effect-material.esm.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function MaterialYouDemo() {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MaterialYouDemo.useEffect": ()=>{
            const swiper = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$shared$2f$swiper$2d$core$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__S__as__default$3e$__["default"]('.material-swiper', {
                modules: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$effect$2d$material$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
                ],
                effect: 'material',
                materialEffect: {
                    slideSplitRatio: 0.65
                },
                grabCursor: true,
                slidesPerView: 3,
                centeredSlides: false,
                spaceBetween: 16,
                speed: 600,
                loop: true
            });
            // Ensure layout is stable before Swiper update
            setTimeout({
                "MaterialYouDemo.useEffect": ()=>swiper.update()
            }["MaterialYouDemo.useEffect"], 100);
            return ({
                "MaterialYouDemo.useEffect": ()=>swiper.destroy(true, true)
            })["MaterialYouDemo.useEffect"];
        }
    }["MaterialYouDemo.useEffect"], []);
    const slides = Array.from({
        length: 8
    }, (_, i)=>({
            src: "/images/0".concat(i + 1, ".jpg"),
            label: "Slide ".concat(i + 1)
        }));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "material-container",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "material-slider",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "material-swiper",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "swiper-wrapper",
                    children: slides.map((slide, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "swiper-slide",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "swiper-material-wrapper",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "swiper-material-content",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            className: "material-image",
                                            "data-swiper-material-scale": "1.25",
                                            src: slide.src,
                                            alt: slide.label
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/MaterialSlider.jsx",
                                            lineNumber: 46,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "material-label swiper-material-animate-opacity",
                                            children: slide.label
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/MaterialSlider.jsx",
                                            lineNumber: 52,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/MaterialSlider.jsx",
                                    lineNumber: 45,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/MaterialSlider.jsx",
                                lineNumber: 44,
                                columnNumber: 17
                            }, this)
                        }, i, false, {
                            fileName: "[project]/src/components/MaterialSlider.jsx",
                            lineNumber: 43,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/MaterialSlider.jsx",
                    lineNumber: 41,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/MaterialSlider.jsx",
                lineNumber: 40,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/MaterialSlider.jsx",
            lineNumber: 39,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/MaterialSlider.jsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_s(MaterialYouDemo, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = MaterialYouDemo;
var _c;
__turbopack_context__.k.register(_c, "MaterialYouDemo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/effect-slicer.esm.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * UI Initiative Slicer Slider
 *
 * Images slicer slider
 *
 * https://uiinitiative.com
 *
 * Copyright 2024 UI Initiative
 *
 * Released under the UI Initiative Regular License
 *
 * October 10, 2024
 *
 */ __turbopack_context__.s([
    "default",
    ()=>EffectSlicer
]);
if ("object" !== 'undefined' && window.SwiperElementRegisterParams) {
    window.SwiperElementRegisterParams([
        'slicerEffect'
    ]);
}
function EffectSlicer(param) {
    let { swiper, extendParams, on, emit } = param;
    extendParams({
        slicerEffect: {
            split: 5
        }
    });
    let loopIsFixing = false;
    function effectVirtualTransitionEnd(param) {
        let { duration } = param;
        const { slides, activeIndex } = swiper;
        const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
        if (duration !== 0) {
            let eventTriggered = false;
            const activeSlideEl = isVirtual ? slides.find((slideEl)=>parseInt(slideEl.getAttribute('data-swiper-slide-index'), 10) === activeIndex) : slides[activeIndex];
            const transitionEndTarget = activeSlideEl.querySelector('.swiper-slicer-image-clone:nth-child(1)');
            if (!transitionEndTarget) return;
            const onTransitionEnd = (e)=>{
                if (e.target !== transitionEndTarget) return;
                transitionEndTarget.removeEventListener('transitionend', onTransitionEnd);
                if (eventTriggered) return;
                if (!swiper || swiper.destroyed) return;
                eventTriggered = true;
                swiper.animating = false;
                const evt = new window.CustomEvent('transitionend', {
                    bubbles: true,
                    cancelable: true
                });
                swiper.wrapperEl.dispatchEvent(evt);
            };
            transitionEndTarget.addEventListener('transitionend', onTransitionEnd);
        }
    }
    const createImages = ()=>{
        swiper.slides.forEach((slideEl)=>{
            if (slideEl.querySelector('.swiper-slicer-image-clones')) return;
            const imageEl = slideEl.querySelector('.swiper-slicer-image');
            if (!imageEl) return;
            const nextEl = imageEl.nextElementSibling;
            const cloneContainerEl = document.createElement('div');
            cloneContainerEl.classList.add('swiper-slicer-image-clones');
            for(let i = 0; i < swiper.params.slicerEffect.split; i += 1){
                const div = document.createElement('div');
                div.classList.add('swiper-slicer-image-clone');
                div.appendChild(imageEl.cloneNode());
                cloneContainerEl.appendChild(div);
            }
            if (nextEl) {
                imageEl.parentNode.insertBefore(cloneContainerEl, nextEl);
            } else {
                imageEl.parentNode.appendChild(cloneContainerEl);
            }
        });
    };
    const setImages = ()=>{
        swiper.slides.forEach((slideEl)=>slideEl.querySelectorAll('.swiper-slicer-image').forEach((imageEl)=>{
                imageEl.style.width = "".concat(swiper.width, "px");
                imageEl.style.height = "".concat(swiper.height, "px");
            }));
        swiper.slides.forEach((slideEl)=>{
            slideEl.querySelectorAll('.swiper-slicer-image-clone').forEach((cloneEl, cloneElIndex)=>{
                const cloneImg = cloneEl.querySelector('.swiper-slicer-image');
                if (swiper.params.direction === 'horizontal') {
                    cloneEl.style.height = "".concat(100 / swiper.params.slicerEffect.split, "%");
                    cloneEl.style.top = "".concat(100 / swiper.params.slicerEffect.split * cloneElIndex, "%");
                    cloneImg.style.top = "-".concat(100 * cloneElIndex, "%");
                } else {
                    cloneEl.style.width = "".concat(100 / swiper.params.slicerEffect.split, "%");
                    cloneEl.style.left = "".concat(100 / swiper.params.slicerEffect.split * cloneElIndex, "%");
                    cloneImg.style.left = "-".concat(100 * cloneElIndex, "%");
                }
            });
        });
    };
    const setTranslate = ()=>{
        const axis = swiper.params.direction === 'vertical' ? 'Y' : 'X';
        const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
        swiper.slides.forEach((slideEl, slideIndex)=>{
            if (isVirtual) slideIndex = parseInt(slideEl.getAttribute('data-swiper-slide-index'), 10);
            slideEl.style.transform = "translate".concat(axis, "(-").concat(slideIndex * 100, "%)");
            const slideProgress = slideEl.progress;
            const contentEl = slideEl.querySelector('.swiper-slide-content');
            if (contentEl) {
                contentEl.style.transform = "translate".concat(axis, "(").concat(swiper.size * -slideProgress * 1.2, "px)");
            }
            const images = slideEl.querySelectorAll('.swiper-slicer-image-clone');
            images.forEach((imageEl)=>{
                const progress = -slideProgress;
                imageEl.style.transform = "translate".concat(axis, "(").concat(progress * 100, "%)");
            });
        });
    };
    const setTransition = (duration)=>{
        swiper.slides.forEach((slideEl)=>{
            const images = slideEl.querySelectorAll('.swiper-slicer-image-clone');
            const contentEl = slideEl.querySelector('.swiper-slide-content');
            if (contentEl) {
                contentEl.style.transitionDuration = "".concat(duration, "ms");
            }
            images.forEach((imageEl, imageIndex)=>{
                if (duration === 0) {
                    imageEl.style.transitionTimingFunction = 'ease-out';
                    if (loopIsFixing) {
                        imageEl.style.transitionDuration = "0ms";
                    } else {
                        imageEl.style.transitionDuration = "".concat(swiper.params.speed + swiper.params.speed / (images.length - 1) * (images.length - imageIndex - 1), "ms");
                    }
                } else {
                    imageEl.style.transitionTimingFunction = '';
                    imageEl.style.transitionDuration = "".concat(duration + duration / (images.length - 1) * (images.length - imageIndex - 1), "ms");
                }
            });
        });
        effectVirtualTransitionEnd({
            duration
        });
    };
    on('slideChange', ()=>{
        if (swiper.virtual && swiper.params.virtual && swiper.params.virtual.enabled) {
            requestAnimationFrame(()=>{
                createImages();
                setImages();
            });
        }
    });
    on('beforeLoopFix', ()=>{
        loopIsFixing = true;
    });
    on('loopFix', ()=>{
        loopIsFixing = false;
    });
    on('setTranslate', ()=>{
        if (swiper.params.effect !== 'slicer') return;
        setTranslate();
    });
    on('setTransition', (_s, duration)=>{
        if (swiper.params.effect !== 'slicer') return;
        setTransition(duration);
    });
    on('slidesLengthChange', ()=>{
        createImages();
        setImages();
    });
    on('beforeInit', ()=>{
        if (swiper.params.effect !== 'slicer') return;
        swiper.classNames.push('swiper-slicer');
        const overwriteParams = {
            slidesPerView: 1,
            slidesPerGroup: 1,
            watchSlidesProgress: true,
            spaceBetween: 0,
            virtualTranslate: true
        };
        Object.assign(swiper.params, overwriteParams);
        Object.assign(swiper.originalParams, overwriteParams);
    });
    on('init', ()=>{
        if (swiper.params.effect !== 'slicer') return;
        createImages();
        emit('setTranslate', swiper, swiper.translate);
    });
    on('resize init', ()=>{
        if (swiper.params.effect !== 'slicer') return;
        setImages();
    });
}
_c = EffectSlicer;
var _c;
__turbopack_context__.k.register(_c, "EffectSlicer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/SlicerCarousel.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$bundle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/swiper-bundle.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$shared$2f$swiper$2d$core$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__S__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/shared/swiper-core.mjs [app-client] (ecmascript) <export S as default>");
// Import named export from local file
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$effect$2d$slicer$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/effect-slicer.esm.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
const SlicerCarousel = (param)=>{
    let { slides } = param;
    _s();
    const swiperRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SlicerCarousel.useEffect": ()=>{
            if (swiperRef.current) {
                const swiper = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$shared$2f$swiper$2d$core$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__S__as__default$3e$__["default"](swiperRef.current, {
                    modules: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$effect$2d$slicer$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
                    ],
                    effect: 'slicer',
                    speed: 800,
                    autoplay: {
                        delay: 3000,
                        disableOnInteraction: false
                    },
                    loop: true,
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    },
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true
                    }
                });
                return ({
                    "SlicerCarousel.useEffect": ()=>{
                        swiper.destroy(true, true);
                    }
                })["SlicerCarousel.useEffect"];
            }
        }
    }["SlicerCarousel.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "swiper",
        ref: swiperRef,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "swiper-wrapper",
                children: slides.map((slide, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "swiper-slide",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "slicer-slide-inner",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: slide.image,
                                alt: slide.title,
                                className: "swiper-slicer-image"
                            }, void 0, false, {
                                fileName: "[project]/src/components/SlicerCarousel.jsx",
                                lineNumber: 49,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/SlicerCarousel.jsx",
                            lineNumber: 48,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, index, false, {
                        fileName: "[project]/src/components/SlicerCarousel.jsx",
                        lineNumber: 47,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/src/components/SlicerCarousel.jsx",
                lineNumber: 45,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "swiper-button-prev"
            }, void 0, false, {
                fileName: "[project]/src/components/SlicerCarousel.jsx",
                lineNumber: 62,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "swiper-button-next"
            }, void 0, false, {
                fileName: "[project]/src/components/SlicerCarousel.jsx",
                lineNumber: 63,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "swiper-pagination"
            }, void 0, false, {
                fileName: "[project]/src/components/SlicerCarousel.jsx",
                lineNumber: 64,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/SlicerCarousel.jsx",
        lineNumber: 44,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(SlicerCarousel, "YOJOl2/RJfdqtdOv3YOKC7TBHXc=");
_c = SlicerCarousel;
const __TURBOPACK__default__export__ = SlicerCarousel;
var _c;
__turbopack_context__.k.register(_c, "SlicerCarousel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_54e5cc45._.js.map