module.exports = [
"[project]/.next-internal/server/app/premium/page/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/lib/effect-material.esm.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/src/components/MaterialSlider.jsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/components/MaterialSlider.jsx
__turbopack_context__.s([
    "default",
    ()=>MaterialSwiper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/swiper/swiper-react.mjs [app-rsc] (ecmascript)");
// Import any core modules you need for navigation, autoplay, etc.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/index.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$autoplay$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Autoplay$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/autoplay.mjs [app-rsc] (ecmascript) <export default as Autoplay>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$navigation$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/navigation.mjs [app-rsc] (ecmascript) <export default as Navigation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$pagination$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Pagination$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/pagination.mjs [app-rsc] (ecmascript) <export default as Pagination>");
// 1. Import the local Material Effect module
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$effect$2d$material$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/effect-material.esm.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
function MaterialSwiper() {
    // Example data for slides
    const slides = [
        {
            id: 1,
            image: '/images/01.jpg',
            label: 'Slide 1'
        },
        {
            id: 2,
            image: '/images/02.jpg',
            label: 'Slide 2'
        },
        {
            id: 3,
            image: '/images/03.jpg',
            label: 'Slide 3'
        },
        {
            id: 4,
            image: '/images/04.jpg',
            label: 'Slide 4'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "demo-slider",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Swiper"], {
            // Pass all required modules, including EffectMaterial
            modules: [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$autoplay$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Autoplay$3e$__["Autoplay"],
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$navigation$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__["Navigation"],
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$pagination$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Pagination$3e$__["Pagination"],
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$effect$2d$material$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]
            ],
            // Specify the "material" effect
            effect: "material",
            // Set the custom CSS class
            className: "swiper-material",
            // Fix for 'materialEffect' prop error: Pass effect-specific
            // parameters inside the 'params' prop object.
            params: {
                materialEffect: {
                    slideSplitRatio: 0.65
                }
            },
            // Other Swiper parameters can be passed directly as props
            centeredSlides: true,
            slidesPerView: 1.3,
            spaceBetween: 10,
            children: slides.map((slide)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SwiperSlide"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "swiper-material-wrapper",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "swiper-material-content",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    className: "demo-material-image",
                                    "data-swiper-material-scale": "1.25",
                                    src: slide.image,
                                    alt: slide.label
                                }, void 0, false, {
                                    fileName: "[project]/src/components/MaterialSlider.jsx",
                                    lineNumber: 60,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "demo-material-label swiper-material-animate-opacity",
                                    children: slide.label
                                }, void 0, false, {
                                    fileName: "[project]/src/components/MaterialSlider.jsx",
                                    lineNumber: 68,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/MaterialSlider.jsx",
                            lineNumber: 57,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/MaterialSlider.jsx",
                        lineNumber: 56,
                        columnNumber: 13
                    }, this)
                }, slide.id, false, {
                    fileName: "[project]/src/components/MaterialSlider.jsx",
                    lineNumber: 54,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/src/components/MaterialSlider.jsx",
            lineNumber: 27,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/MaterialSlider.jsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/premium/page.jsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MaterialSlider$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/MaterialSlider.jsx [app-rsc] (ecmascript)");
;
;
function Home() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "flex justify-center items-center min-h-screen bg-gray-100",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MaterialSlider$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/src/app/premium/page.jsx",
            lineNumber: 6,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/premium/page.jsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/premium/page.jsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/premium/page.jsx [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__7295766e._.js.map