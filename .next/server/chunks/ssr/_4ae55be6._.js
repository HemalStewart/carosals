module.exports = [
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
"[project]/node_modules/swiper/swiper-effect-utils.mjs [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

/**
 * Swiper 11.2.10
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2025 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: June 28, 2025
 */ __turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$shared$2f$create$2d$shadow$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/swiper/shared/create-shadow.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$shared$2f$effect$2d$init$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/swiper/shared/effect-init.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$shared$2f$effect$2d$target$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/swiper/shared/effect-target.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$shared$2f$effect$2d$virtual$2d$transition$2d$end$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/swiper/shared/effect-virtual-transition-end.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$shared$2f$utils$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/swiper/shared/utils.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
}),
"[project]/node_modules/swiper/shared/effect-init.mjs [app-ssr] (ecmascript) <export e as effectInit>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "effectInit",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$shared$2f$effect$2d$init$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["e"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$shared$2f$effect$2d$init$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/swiper/shared/effect-init.mjs [app-ssr] (ecmascript)");
}),
];

//# sourceMappingURL=_4ae55be6._.js.map