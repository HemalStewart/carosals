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
"[project]/src/lib/effect-expo.esm.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * UI Initiative Expo Slider
 *
 * Parallax & scale effects slider
 *
 * https://uiinitiative.com
 *
 * Copyright 2025 UI Initiative
 *
 * Released under the UI Initiative Regular License
 *
 * June 27, 2025
 */ __turbopack_context__.s([
    "default",
    ()=>EffectExpo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$effect$2d$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/swiper-effect-utils.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$shared$2f$effect$2d$init$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__e__as__effectInit$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/shared/effect-init.mjs [app-ssr] (ecmascript) <export e as effectInit>");
;
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
function EffectExpo({ swiper, on, extendParams }) {
    extendParams({
        expoEffect: {
            imageScale: 1.125,
            imageOffset: 1.25,
            scale: 1.25,
            rotate: 0,
            grayscale: true
        }
    });
    const setTranslate = ()=>{
        const { slides, rtlTranslate: rtl } = swiper;
        const spv = swiper.params.slidesPerView;
        const isHorizontal = swiper.isHorizontal();
        let translateOffset = 0.5;
        const params = swiper.params.expoEffect;
        const imageOffset = Math.max(1.25, params.imageOffset);
        if (spv > 1.5) {
            const minTranslateOffset = (imageOffset - 1) / 2 / imageOffset;
            translateOffset = Math.max(minTranslateOffset, 0.5 - (spv - 1.5));
        }
        const imageScale = Math.max(1.125, params.imageScale);
        const scale = Math.max(1.25, params.scale);
        const rtlMultiplier = rtl ? -1 : 1;
        for(let i = 0; i < slides.length; i += 1){
            const slideEl = slides[i];
            const contentWrapEl = slideEl.querySelector('.expo-container');
            const contentEl = slideEl.querySelector('.expo-content');
            const imageEl = slideEl.querySelector('.expo-image');
            const progress = slideEl.progress;
            const progressLimited = Math.max(Math.min(progress, 1), -1);
            if (imageEl) {
                imageEl.style.transform = `translate${isHorizontal ? 'X' : 'Y'}(${progressLimited * translateOffset * 100 * rtlMultiplier}%) scale(${1 + (imageScale - 1) * Math.abs(progressLimited)})`;
                if (params.grayscale) {
                    imageEl.style.filter = `grayscale(${Math.abs(progressLimited)})`;
                }
            }
            const sides = isHorizontal ? rtl ? [
                'right',
                'left'
            ] : [
                'left',
                'right'
            ] : [
                'top',
                'bottom'
            ];
            if (Math.abs(progress) > 0.01) {
                if (imageEl) {
                    imageEl.style.transformOrigin = progress > 0 ? sides[0] : sides[1];
                }
                if (contentWrapEl) {
                    contentWrapEl.style.transformOrigin = progress > 0 ? sides[1] : sides[0];
                }
            }
            if (contentWrapEl) {
                contentWrapEl.style.transform = `scale(${1 + (scale - 1) * Math.abs(progressLimited)}) rotate${isHorizontal ? 'Y' : 'X'}(${params.rotate * progressLimited * (isHorizontal ? 1 : -1) * rtlMultiplier}deg)`;
            }
            if (contentEl) {
                contentEl.style.transform = `translate${isHorizontal ? 'X' : 'Y'}(${progressLimited * 100 * rtlMultiplier}%)`;
                contentEl.style.opacity = 1 - Math.abs(progressLimited) * 2;
            }
        }
    };
    const setTransition = (duration)=>{
        const { slides } = swiper;
        for(let i = 0; i < slides.length; i += 1){
            const slideEl = slides[i];
            [
                ...slideEl.querySelectorAll('.expo-container, .expo-image, .expo-content')
            ].forEach((el)=>{
                el.style.transitionDuration = `${duration}ms`;
            });
        }
    };
    const setSize = ()=>{
        const box = swiper.el.getBoundingClientRect();
        const size = swiper.isHorizontal() ? box.height : box.width;
        const { rotate, scale, imageOffset } = swiper.params.expoEffect;
        swiper.el.style.setProperty('--expo-image-offset', imageOffset);
        const currentValue = swiper.el.style.getPropertyValue('--expo-padding');
        const currentValueNumber = parseInt(currentValue, 10) || 0;
        const activeSlideSize = size / scale;
        let newValue = (size - activeSlideSize) / 2;
        if (rotate) {
            newValue = newValue * 1.35;
        }
        newValue = Math.round(newValue);
        if (currentValue && !Number.isNaN(currentValueNumber)) {
            if (Math.abs(newValue - currentValueNumber) < 5) return;
        }
        swiper.el.style.setProperty('--expo-padding', `${newValue}px`);
    };
    on('init', setSize);
    on('resize', setSize);
    on('update', setSize);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$shared$2f$effect$2d$init$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__e__as__effectInit$3e$__["effectInit"])({
        effect: 'expo',
        swiper,
        on,
        setTranslate,
        setTransition,
        perspective: ()=>true,
        overwriteParams: ()=>({
                // resizeObserver: false,
                centeredSlides: true,
                slidesPerGroup: 1,
                watchSlidesProgress: true
            })
    });
}
}),
"[project]/src/components/ExpoSliderPremium.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/swiper.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$shared$2f$swiper$2d$core$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__S__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/shared/swiper-core.mjs [app-ssr] (ecmascript) <export S as default>");
// ✅ Import ESM effect and CSS directly
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$effect$2d$expo$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/effect-expo.esm.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
const ExpoSliderPremium = ({ slides })=>{
    const swiperRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const swiperInstance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // ✅ Destroy old instance if exists
        if (swiperInstance.current) swiperInstance.current.destroy(true, true);
        // ✅ Initialize new instance
        swiperInstance.current = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$shared$2f$swiper$2d$core$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__S__as__default$3e$__["default"](swiperRef.current, {
            modules: [
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$effect$2d$expo$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
            ],
            effect: 'expo',
            direction: 'vertical',
            slidesPerView: 1.5,
            centeredSlides: true,
            grabCursor: true,
            spaceBetween: 16,
            loop: true,
            speed: 800,
            expoEffect: {
                imageScale: 1.125,
                imageOffset: 1.25,
                scale: 1.25,
                rotate: 0,
                grayscale: true
            },
            breakpoints: {
                768: {
                    spaceBetween: 32
                }
            }
        });
        return ()=>swiperInstance.current?.destroy(true, true);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        id: "app",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "swiper",
            ref: swiperRef,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "swiper-wrapper",
                children: slides.map((slide, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "swiper-slide",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "expo-container",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    className: "expo-image",
                                    src: slide.image,
                                    alt: slide.title
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ExpoSliderPremium.jsx",
                                    lineNumber: 53,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "expo-content",
                                    children: slide.text
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ExpoSliderPremium.jsx",
                                    lineNumber: 54,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ExpoSliderPremium.jsx",
                            lineNumber: 52,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    }, index, false, {
                        fileName: "[project]/src/components/ExpoSliderPremium.jsx",
                        lineNumber: 51,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/src/components/ExpoSliderPremium.jsx",
                lineNumber: 49,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/ExpoSliderPremium.jsx",
            lineNumber: 48,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/ExpoSliderPremium.jsx",
        lineNumber: 47,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = ExpoSliderPremium;
}),
"[project]/src/components/TripleSlider.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TripleSlider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/swiper.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$shared$2f$swiper$2d$core$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__S__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/shared/swiper-core.mjs [app-ssr] (ecmascript) <export S as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$parallax$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Parallax$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/parallax.mjs [app-ssr] (ecmascript) <export default as Parallax>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$controller$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Controller$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/controller.mjs [app-ssr] (ecmascript) <export default as Controller>");
"use client";
;
;
;
;
;
;
;
function TripleSlider() {
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const el = containerRef.current;
        if (!el) return;
        const swiperEl = el.querySelector(".swiper");
        // ---- Create duplicate sliders ----
        const swiperPrevEl = swiperEl.cloneNode(true);
        swiperPrevEl.classList.add("triple-slider-prev");
        el.insertBefore(swiperPrevEl, swiperEl);
        const swiperNextEl = swiperEl.cloneNode(true);
        swiperNextEl.classList.add("triple-slider-next");
        el.appendChild(swiperNextEl);
        // Move one slide for each duplicate to simulate offset
        const prevSlides = swiperPrevEl.querySelectorAll(".swiper-slide");
        const prevLast = prevSlides[prevSlides.length - 1];
        swiperPrevEl.querySelector(".swiper-wrapper").insertBefore(prevLast, prevSlides[0]);
        const nextSlides = swiperNextEl.querySelectorAll(".swiper-slide");
        const nextFirst = nextSlides[0];
        swiperNextEl.querySelector(".swiper-wrapper").appendChild(nextFirst);
        swiperEl.classList.add("triple-slider-main");
        // ---- Initialize Swipers ----
        const common = {
            loop: true,
            parallax: true,
            speed: 600,
            modules: [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$parallax$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Parallax$3e$__["Parallax"],
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$controller$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Controller$3e$__["Controller"]
            ]
        };
        let mainSwiper;
        const prevSwiper = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$shared$2f$swiper$2d$core$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__S__as__default$3e$__["default"](swiperPrevEl, {
            ...common,
            allowTouchMove: false,
            on: {
                click: ()=>mainSwiper.slidePrev()
            }
        });
        const nextSwiper = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$shared$2f$swiper$2d$core$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__S__as__default$3e$__["default"](swiperNextEl, {
            ...common,
            allowTouchMove: false,
            on: {
                click: ()=>mainSwiper.slideNext()
            }
        });
        mainSwiper = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$shared$2f$swiper$2d$core$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__S__as__default$3e$__["default"](swiperEl, {
            ...common,
            grabCursor: true,
            controller: {
                control: [
                    prevSwiper,
                    nextSwiper
                ]
            },
            on: {
                destroy () {
                    prevSwiper.destroy();
                    nextSwiper.destroy();
                }
            }
        });
        return ()=>{
            mainSwiper.destroy(true, false);
        };
    }, []);
    const slides = [
        {
            bg: "/images/guardians-of-the-galaxy.jpg",
            logo: "/images/guardians-of-the-galaxy-logo.png",
            logoClass: "logo-image-1"
        },
        {
            bg: "/images/justice-league.jpg",
            logo: "/images/justice-league-logo.png",
            logoClass: "logo-image-2"
        },
        {
            bg: "/images/spider-man.jpg",
            logo: "/images/spider-man-logo.png",
            logoClass: "logo-image-3"
        },
        {
            bg: "/images/suicide-squad.jpg",
            logo: "/images/suicide-squad-logo.png",
            logoClass: "logo-image-4"
        },
        {
            bg: "/images/thor-ragnarok.jpg",
            logo: "/images/thor-ragnarok-logo.png",
            logoClass: "logo-image-5"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: "triple-slider",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "swiper",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "swiper-wrapper",
                children: slides.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "swiper-slide",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                className: "bg-image",
                                src: s.bg,
                                alt: ""
                            }, void 0, false, {
                                fileName: "[project]/src/components/TripleSlider.jsx",
                                lineNumber: 113,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                className: `logo-image ${s.logoClass}`,
                                "data-swiper-parallax-x": "50%",
                                src: s.logo,
                                alt: ""
                            }, void 0, false, {
                                fileName: "[project]/src/components/TripleSlider.jsx",
                                lineNumber: 114,
                                columnNumber: 15
                            }, this)
                        ]
                    }, i, true, {
                        fileName: "[project]/src/components/TripleSlider.jsx",
                        lineNumber: 112,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/TripleSlider.jsx",
                lineNumber: 110,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/TripleSlider.jsx",
            lineNumber: 109,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/TripleSlider.jsx",
        lineNumber: 108,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__4e5de3c9._.js.map