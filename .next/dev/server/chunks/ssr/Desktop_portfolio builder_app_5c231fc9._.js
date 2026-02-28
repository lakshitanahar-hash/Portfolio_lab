module.exports = [
"[project]/Desktop/portfolio builder/app/schema.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"projectTitle":"My First Portfolio","owner":"Lakshita Nahar","theme":{"primaryColor":"#6366f1","fontFamily":"Inter","darkMode":true},"sections":[{"type":"hero","data":{"title":"Creative Full Stack Developer","subtitle":"I build platforms that build platforms."}},{"type":"about","data":{"text":"Based in Ajmer, working on high-scale automation."}}]});}),
"[project]/Desktop/portfolio builder/app/page.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PortfolioPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio__builder$2f$app$2f$schema$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/Desktop/portfolio builder/app/schema.json (json)");
'use client';
;
;
;
function PortfolioPage() {
    // Always check if data exists to prevent crashes
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio__builder$2f$app$2f$schema$2e$json__$28$json$29$__["default"] || !__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio__builder$2f$app$2f$schema$2e$json__$28$json$29$__["default"].sections) return null;
    const { theme, sections } = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolio__builder$2f$app$2f$schema$2e$json__$28$json$29$__["default"];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            backgroundColor: theme.darkMode ? '#121212' : '#ffffff',
            color: theme.darkMode ? '#ffffff' : '#121212',
            minHeight: '100vh',
            padding: '40px',
            fontFamily: 'sans-serif'
        },
        children: sections.map((section, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginBottom: '40px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        style: {
                            color: theme.primaryColor
                        },
                        children: section.data.title
                    }, void 0, false, {
                        fileName: "[project]/Desktop/portfolio builder/app/page.js",
                        lineNumber: 21,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: section.data.subtitle || section.data.text
                    }, void 0, false, {
                        fileName: "[project]/Desktop/portfolio builder/app/page.js",
                        lineNumber: 22,
                        columnNumber: 11
                    }, this)
                ]
            }, index, true, {
                fileName: "[project]/Desktop/portfolio builder/app/page.js",
                lineNumber: 20,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/Desktop/portfolio builder/app/page.js",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=Desktop_portfolio%20builder_app_5c231fc9._.js.map