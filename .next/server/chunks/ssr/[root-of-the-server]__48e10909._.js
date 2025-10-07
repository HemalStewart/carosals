module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/src/lib/effect-material.esm.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
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
function effectVirtualTransitionEnd({ swiper, duration, transformElements, allSlides }) {
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
function EffectMaterial({ swiper, on, extendParams }) {
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
                scaleEl.style.transform = `scale(${1 + (elementScale - 1) * (1 - scale)})`;
            });
            if (swiper.isHorizontal()) {
                materialEl.style.width = `${100 * scale}%`;
                materialEl.style.transform = `translate3d(${translate - cssModeTranslateOffset + (rtl ? (1 - scale) * currentSlideSize : 0)}px, 0, 0)`;
            } else {
                materialEl.style.height = `${100 * scale}%`;
                materialEl.style.transform = `translate3d(0, ${translate - cssModeTranslateOffset}px, 0)`;
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
                opacityEl.style.transitionDuration = `${duration}ms`;
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
        swiper.classNames.push(`${swiper.params.containerModifierClass}material`);
        if (swiper.isElement && swiper.hostEl) {
            swiper.hostEl.classList.add(`swiper-${swiper.params.direction}`);
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
        swiper.el.style.setProperty('--swiper-material-slide-size', `${swiper.slidesSizesGrid[0]}px`);
        requestAnimationFrame(()=>{
            // eslint-disable-next-line
            swiper.__preventObserver__ = false;
        });
    });
}
}),
"[project]/src/components/MaterialSlider.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MaterialYouDemo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/swiper.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$shared$2f$swiper$2d$core$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__S__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/shared/swiper-core.mjs [app-ssr] (ecmascript) <export S as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$effect$2d$material$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/effect-material.esm.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
function MaterialYouDemo() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const swiper = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$shared$2f$swiper$2d$core$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__S__as__default$3e$__["default"]('.material-swiper', {
            modules: [
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$effect$2d$material$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
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
        setTimeout(()=>swiper.update(), 100);
        return ()=>swiper.destroy(true, true);
    }, []);
    const slides = Array.from({
        length: 8
    }, (_, i)=>({
            src: `/images/0${i + 1}.jpg`,
            label: `Slide ${i + 1}`
        }));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "material-container",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "material-slider",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "material-swiper",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "swiper-wrapper",
                    children: slides.map((slide, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "swiper-slide",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "swiper-material-wrapper",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "swiper-material-content",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            className: "material-image",
                                            "data-swiper-material-scale": "1.25",
                                            src: slide.src,
                                            alt: slide.label
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/MaterialSlider.jsx",
                                            lineNumber: 46,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
}),
"[project]/src/lib/effect-slicer.esm.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
function EffectSlicer({ swiper, extendParams, on, emit }) {
    extendParams({
        slicerEffect: {
            split: 5
        }
    });
    let loopIsFixing = false;
    function effectVirtualTransitionEnd({ duration }) {
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
                imageEl.style.width = `${swiper.width}px`;
                imageEl.style.height = `${swiper.height}px`;
            }));
        swiper.slides.forEach((slideEl)=>{
            slideEl.querySelectorAll('.swiper-slicer-image-clone').forEach((cloneEl, cloneElIndex)=>{
                const cloneImg = cloneEl.querySelector('.swiper-slicer-image');
                if (swiper.params.direction === 'horizontal') {
                    cloneEl.style.height = `${100 / swiper.params.slicerEffect.split}%`;
                    cloneEl.style.top = `${100 / swiper.params.slicerEffect.split * cloneElIndex}%`;
                    cloneImg.style.top = `-${100 * cloneElIndex}%`;
                } else {
                    cloneEl.style.width = `${100 / swiper.params.slicerEffect.split}%`;
                    cloneEl.style.left = `${100 / swiper.params.slicerEffect.split * cloneElIndex}%`;
                    cloneImg.style.left = `-${100 * cloneElIndex}%`;
                }
            });
        });
    };
    const setTranslate = ()=>{
        const axis = swiper.params.direction === 'vertical' ? 'Y' : 'X';
        const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
        swiper.slides.forEach((slideEl, slideIndex)=>{
            if (isVirtual) slideIndex = parseInt(slideEl.getAttribute('data-swiper-slide-index'), 10);
            slideEl.style.transform = `translate${axis}(-${slideIndex * 100}%)`;
            const slideProgress = slideEl.progress;
            const contentEl = slideEl.querySelector('.swiper-slide-content');
            if (contentEl) {
                contentEl.style.transform = `translate${axis}(${swiper.size * -slideProgress * 1.2}px)`;
            }
            const images = slideEl.querySelectorAll('.swiper-slicer-image-clone');
            images.forEach((imageEl)=>{
                const progress = -slideProgress;
                imageEl.style.transform = `translate${axis}(${progress * 100}%)`;
            });
        });
    };
    const setTransition = (duration)=>{
        swiper.slides.forEach((slideEl)=>{
            const images = slideEl.querySelectorAll('.swiper-slicer-image-clone');
            const contentEl = slideEl.querySelector('.swiper-slide-content');
            if (contentEl) {
                contentEl.style.transitionDuration = `${duration}ms`;
            }
            images.forEach((imageEl, imageIndex)=>{
                if (duration === 0) {
                    imageEl.style.transitionTimingFunction = 'ease-out';
                    if (loopIsFixing) {
                        imageEl.style.transitionDuration = `0ms`;
                    } else {
                        imageEl.style.transitionDuration = `${swiper.params.speed + swiper.params.speed / (images.length - 1) * (images.length - imageIndex - 1)}ms`;
                    }
                } else {
                    imageEl.style.transitionTimingFunction = '';
                    imageEl.style.transitionDuration = `${duration + duration / (images.length - 1) * (images.length - imageIndex - 1)}ms`;
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
}),
"[project]/src/components/SlicerCarousel.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$bundle$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/swiper-bundle.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$shared$2f$swiper$2d$core$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__S__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/shared/swiper-core.mjs [app-ssr] (ecmascript) <export S as default>");
// Import named export from local file
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$effect$2d$slicer$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/effect-slicer.esm.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
const SlicerCarousel = ({ slides })=>{
    const swiperRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (swiperRef.current) {
            const swiper = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$shared$2f$swiper$2d$core$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__S__as__default$3e$__["default"](swiperRef.current, {
                modules: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$effect$2d$slicer$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
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
            return ()=>{
                swiper.destroy(true, true);
            };
        }
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "swiper",
        ref: swiperRef,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "swiper-wrapper",
                children: slides.map((slide, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "swiper-slide",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "slicer-slide-inner",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "swiper-button-prev"
            }, void 0, false, {
                fileName: "[project]/src/components/SlicerCarousel.jsx",
                lineNumber: 62,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "swiper-button-next"
            }, void 0, false, {
                fileName: "[project]/src/components/SlicerCarousel.jsx",
                lineNumber: 63,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
const __TURBOPACK__default__export__ = SlicerCarousel;
}),
"[project]/src/components/ExpoSlider.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ExpoSlider",
    ()=>ExpoSlider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
const ExpoSlider = ()=>{
    const slides = [
        {
            id: 1,
            title: "Zermatt",
            subtitle: "Switzerland",
            image: "/images/big-poster1.jpg"
        },
        {
            id: 2,
            title: "Nagano",
            subtitle: "Prefecture",
            image: "/images/big-poster2.jpg"
        },
        {
            id: 3,
            title: "Marrakech",
            subtitle: "Merzouga",
            image: "/images/big-poster3.jpg"
        },
        {
            id: 4,
            title: "Yosemite",
            subtitle: "National Park",
            image: "/images/big-poster4.jpg"
        },
        {
            id: 5,
            title: "Los Lances",
            subtitle: "Beach",
            image: "/images/big-poster5.jpg"
        },
        {
            id: 6,
            title: "Kyoto",
            subtitle: "Japan",
            image: "/images/big-poster6.jpg"
        },
        {
            id: 7,
            title: "Santorini",
            subtitle: "Greece",
            image: "/images/big-poster7.jpg"
        },
        {
            id: 8,
            title: "Banff",
            subtitle: "National Park",
            image: "/images/big-poster8.jpg"
        },
        {
            id: 9,
            title: "Ha Long Bay",
            subtitle: "Vietnam",
            image: "/images/big-poster9.jpg"
        },
        {
            id: 10,
            title: "Patagonia",
            subtitle: "Argentina",
            image: "/images/big-poster10.jpg"
        },
        {
            id: 11,
            title: "Machu Picchu",
            subtitle: "Peru",
            image: "/images/big-poster11.jpg"
        },
        {
            id: 12,
            title: "Bora Bora",
            subtitle: "French Polynesia",
            image: "/images/big-poster12.jpg"
        },
        {
            id: 13,
            title: "Great Barrier",
            subtitle: "Reef",
            image: "/images/big-poster13.jpg"
        },
        {
            id: 14,
            title: "Salar de Uyuni",
            subtitle: "Bolivia",
            image: "/images/big-poster14.jpg"
        },
        {
            id: 15,
            title: "Zhangjiajie",
            subtitle: "China",
            image: "/images/big-poster15.jpg"
        }
    ];
    const [activeIndex, setActiveIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Responsive dimensions
    const [dimensions, setDimensions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        slideWidth: 800,
        slideHeight: 500,
        slideMargin: 32
    });
    const updateDimensions = ()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    };
    // Handle window resize and initial setup
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        updateDimensions(); // Call once on mount
        const handleResize = ()=>{
            updateDimensions();
        };
        window.addEventListener('resize', handleResize);
        return ()=>window.removeEventListener('resize', handleResize);
    }, []);
    // Keyboard navigation
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleKeyDown = (e)=>{
            if (e.key === 'ArrowLeft') {
                setActiveIndex((prev)=>Math.max(0, prev - 1));
            } else if (e.key === 'ArrowRight') {
                setActiveIndex((prev)=>Math.min(slides.length - 1, prev + 1));
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return ()=>window.removeEventListener('keydown', handleKeyDown);
    }, [
        slides.length
    ]);
    // Touch/swipe handling for mobile
    const touchRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({
        startX: 0,
        startY: 0
    });
    const handleTouchStart = (e)=>{
        touchRef.current.startX = e.touches[0].clientX;
        touchRef.current.startY = e.touches[0].clientY;
    };
    const handleTouchEnd = (e)=>{
        const endX = e.changedTouches[0].clientX;
        const endY = e.changedTouches[0].clientY;
        const diffX = touchRef.current.startX - endX;
        const diffY = Math.abs(touchRef.current.startY - endY);
        // Only swipe if horizontal movement is greater than vertical
        if (Math.abs(diffX) > 50 && diffY < 100) {
            if (diffX > 0) {
                // Swiped left - go to next slide
                setActiveIndex((prev)=>Math.min(slides.length - 1, prev + 1));
            } else {
                // Swiped right - go to previous slide
                setActiveIndex((prev)=>Math.max(0, prev - 1));
            }
        }
    };
    // Compute transforms for each slide
    const getSlideTransforms = (index)=>{
        const diff = index - activeIndex;
        const isActive = diff === 0;
        const isNext = diff > 0;
        if (isMobile) {
            // Simplified mobile transforms
            if (isActive) {
                return {
                    container: {
                        transform: 'scale(0.9)',
                        opacity: 1
                    },
                    image: {
                        transform: 'scale(0.9)',
                        filter: 'grayscale(0)'
                    },
                    content: {
                        transform: 'translateY(0%)',
                        opacity: 1
                    }
                };
            } else {
                return {
                    container: {
                        transform: 'scale(1)',
                        opacity: 1
                    },
                    image: {
                        transform: 'scale(1)',
                        filter: 'grayscale(1)'
                    },
                    content: {
                        transform: 'translateY(100%)',
                        opacity: 0
                    }
                };
            }
        } else {
            // Desktop transforms (original logic)
            if (isActive) {
                return {
                    container: {
                        transform: 'scale(1) rotateY(0deg)',
                        transformOrigin: 'center center'
                    },
                    image: {
                        transform: 'translateX(0%) scale(1)',
                        filter: 'grayscale(0)',
                        transformOrigin: 'center center'
                    },
                    content: {
                        transform: 'translateX(0%)',
                        opacity: 1
                    }
                };
            } else if (isNext) {
                return {
                    container: {
                        transform: 'scale(1.25) rotateY(0deg)',
                        transformOrigin: 'left center'
                    },
                    image: {
                        transform: 'translateX(-50%) scale(1.125)',
                        filter: 'grayscale(1)',
                        transformOrigin: 'right center'
                    },
                    content: {
                        transform: 'translateX(-100%)',
                        opacity: 0
                    }
                };
            } else {
                return {
                    container: {
                        transform: 'scale(1.25) rotateY(0deg)',
                        transformOrigin: 'right center'
                    },
                    image: {
                        transform: 'translateX(50%) scale(1.125)',
                        filter: 'grayscale(1)',
                        transformOrigin: 'left center'
                    },
                    content: {
                        transform: 'translateX(100%)',
                        opacity: 0
                    }
                };
            }
        }
    };
    const computeTranslate = ()=>{
        const containerWidth = containerRef.current?.offsetWidth || 0;
        const centerOffset = containerWidth / 2 - dimensions.slideWidth / 2;
        return -activeIndex * (dimensions.slideWidth + dimensions.slideMargin) + centerOffset;
    };
    const handleSlideClick = (index)=>{
        setActiveIndex(index);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-screen bg-black overflow-hidden flex items-center justify-center relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-4 md:top-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10",
                children: slides.map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setActiveIndex(index),
                        className: `w-2 h-2 rounded-full transition-all duration-300 ${index === activeIndex ? 'bg-white' : 'bg-white/30'}`
                    }, index, false, {
                        fileName: "[project]/src/components/ExpoSlider.tsx",
                        lineNumber: 167,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/src/components/ExpoSlider.tsx",
                lineNumber: 165,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: containerRef,
                className: "flex cursor-pointer select-none",
                style: {
                    transform: `translate3d(${computeTranslate()}px, 0, 0)`,
                    transition: 'transform 0.6s cubic-bezier(0.25,0.46,0.45,0.94)'
                },
                onTouchStart: handleTouchStart,
                onTouchEnd: handleTouchEnd,
                children: slides.map((slide, index)=>{
                    const transforms = getSlideTransforms(index);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-shrink-0",
                        style: {
                            width: `${dimensions.slideWidth}px`,
                            height: `${dimensions.slideHeight}px`,
                            marginRight: `${dimensions.slideMargin}px`
                        },
                        onClick: ()=>handleSlideClick(index),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "expo-container relative w-full h-full",
                            style: {
                                ...transforms.container,
                                borderRadius: isMobile ? '1rem' : '1.5rem',
                                overflow: 'hidden',
                                transition: 'transform 0.6s cubic-bezier(0.25,0.46,0.45,0.94), opacity 0.6s ease',
                                willChange: 'transform'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: slide.image,
                                    alt: `${slide.title}, ${slide.subtitle}`,
                                    className: "absolute inset-0 w-full h-full object-cover",
                                    style: {
                                        ...transforms.image,
                                        borderRadius: isMobile ? '1rem' : '1.5rem',
                                        transition: 'transform 0.6s cubic-bezier(0.25,0.46,0.45,0.94), filter 0.6s cubic-bezier(0.25,0.46,0.45,0.94)'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ExpoSlider.tsx",
                                    lineNumber: 213,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ExpoSlider.tsx",
                                    lineNumber: 223,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `expo-content absolute bottom-0 left-0 right-0 text-white ${isMobile ? 'p-3' : 'p-8'}`,
                                    style: {
                                        ...transforms.content,
                                        transition: 'transform 0.6s cubic-bezier(0.25,0.46,0.45,0.94), opacity 0.6s cubic-bezier(0.25,0.46,0.45,0.94)'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: `font-bold mb-1 ${isMobile ? 'text-lg' : 'text-3xl'}`,
                                            children: slide.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ExpoSlider.tsx",
                                            lineNumber: 233,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: `text-white/80 ${isMobile ? 'text-sm' : 'text-xl'}`,
                                            children: slide.subtitle
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ExpoSlider.tsx",
                                            lineNumber: 236,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ExpoSlider.tsx",
                                    lineNumber: 224,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ExpoSlider.tsx",
                            lineNumber: 203,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    }, slide.id, false, {
                        fileName: "[project]/src/components/ExpoSlider.tsx",
                        lineNumber: 193,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0));
                })
            }, void 0, false, {
                fileName: "[project]/src/components/ExpoSlider.tsx",
                lineNumber: 179,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ExpoSlider.tsx",
        lineNumber: 163,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__48e10909._.js.map