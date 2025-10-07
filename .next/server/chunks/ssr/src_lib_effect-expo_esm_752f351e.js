module.exports = [
"[project]/src/lib/effect-expo.esm.js [app-ssr] (ecmascript, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "server/chunks/ssr/_4ae55be6._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/src/lib/effect-expo.esm.js [app-ssr] (ecmascript)");
    });
});
}),
];