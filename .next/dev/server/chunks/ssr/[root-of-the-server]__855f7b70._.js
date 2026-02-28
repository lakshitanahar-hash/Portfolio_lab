module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/Desktop/portfolio builder/app/schema.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"projectTitle":"My First Portfolio","owner":"Lakshita Nahar","theme":{"primaryColor":"#6366f1","fontFamily":"Inter","darkMode":true},"sections":[{"type":"hero","data":{"title":"Creative Full Stack Developer","subtitle":"I build platforms that build platforms."}},{"type":"about","data":{"text":"Based in Ajmer, working on high-scale automation."}}]});}),
"[project]/Desktop/portfolio builder/app/page.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PortfolioPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
// Make sure schema.json is in the same 'app' folder!
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio__builder$2f$app$2f$schema$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/Desktop/portfolio builder/app/schema.json (json)");
;
;
;
function PortfolioPage() {
    // Defensive check: if data isn't loading correctly
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio__builder$2f$app$2f$schema$2e$json__$28$json$29$__["default"] || !__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio__builder$2f$app$2f$schema$2e$json__$28$json$29$__["default"].sections) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: "Loading your blueprint..."
        }, void 0, false, {
            fileName: "[project]/Desktop/portfolio builder/app/page.js",
            lineNumber: 8,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio__builder$2f$app$2f$schema$2e$json__$28$json$29$__["default"].theme.darkMode ? '#121212' : '#ffffff',
            color: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio__builder$2f$app$2f$schema$2e$json__$28$json$29$__["default"].theme.darkMode ? '#ffffff' : '#121212',
            minHeight: '100vh',
            padding: '40px',
            fontFamily: 'sans-serif'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                style: {
                    color: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio__builder$2f$app$2f$schema$2e$json__$28$json$29$__["default"].theme.primaryColor
                },
                children: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio__builder$2f$app$2f$schema$2e$json__$28$json$29$__["default"].sections[0].data.title
            }, void 0, false, {
                fileName: "[project]/Desktop/portfolio builder/app/page.js",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    fontSize: '1.2rem'
                },
                children: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio__builder$2f$app$2f$schema$2e$json__$28$json$29$__["default"].sections[0].data.subtitle
            }, void 0, false, {
                fileName: "[project]/Desktop/portfolio builder/app/page.js",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginTop: '40px',
                    borderTop: '1px solid #333',
                    paddingTop: '20px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "About Me"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/portfolio builder/app/page.js",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio__builder$2f$app$2f$schema$2e$json__$28$json$29$__["default"].sections[1].data.text
                    }, void 0, false, {
                        fileName: "[project]/Desktop/portfolio builder/app/page.js",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/portfolio builder/app/page.js",
                lineNumber: 26,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/portfolio builder/app/page.js",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/portfolio builder/app/page.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Desktop/portfolio builder/app/page.js [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__855f7b70._.js.map