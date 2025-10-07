(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/effect-expo.esm.js [app-client] (ecmascript, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "static/chunks/_0d3c3bf2._.js",
  "static/chunks/src_lib_effect-expo_esm_3a3009cf.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/src/lib/effect-expo.esm.js [app-client] (ecmascript)");
    });
});
}),
"[project]/src/lib/effect-expo.css [app-client] (css, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  {
    "path": "static/chunks/src_lib_effect-expo_e043c3f9.css",
    "included": [
      "[project]/src/lib/effect-expo.css [app-client] (css)"
    ]
  },
  "static/chunks/src_lib_effect-expo_css_2f3cdd75._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {});
});
}),
]);