module.exports = [
"[project]/Desktop/portfolio builder/app/page.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PortfolioLAB
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
// ==========================================================
// 1. THE ARCHITECT RENDERER (Supports All 7 References)
// ==========================================================
const PortfolioRenderer = ({ template, data, onEdit, onExit })=>{
    const handleExport = ()=>{
        // Har template ka CSS aur HTML structure alag hoga
        const templateStyles = {
            titan: "body { background: #0a0a0a; color: #f0ece4; font-family: sans-serif; }",
            aura: "body { background: #0a0a0a; color: #f0ece3; font-family: monospace; }",
            ritz: "body { background: #0d0d0d; color: #f2f0eb; font-family: 'Manrope', sans-serif; }",
            lynn: "body { background: #f4ede0; color: #1a1208; font-family: serif; }"
        };
        const fullCode = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>${data.userName}'s Portfolio</title>
  <style>
    ${templateStyles[template] || ""}
    .container { padding: 50px; }
    h1 { font-size: 3rem; }
  </style>
</head>
<body>
  <div class="container">
    <h1>${data.userName}</h1>
    <p>${data.heroTagline}</p>
    <hr>
    <h2>About</h2>
    <p>${data.aboutBio}</p>
  </div>
</body>
</html>`;
        const blob = new Blob([
            fullCode
        ], {
            type: 'text/html'
        });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = `${data.userName.replace(/\s+/g, '-')}-${template}.html`;
        link.click();
    };
    const FloatingTools = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                position: 'fixed',
                top: '30px',
                right: '30px',
                zIndex: 4000,
                display: 'flex',
                gap: '10px'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onEdit,
                    style: toolBtn,
                    children: "✏️ Edit"
                }, void 0, false, {
                    fileName: "[project]/Desktop/portfolio builder/app/page.js",
                    lineNumber: 49,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: handleExport,
                    style: {
                        ...toolBtn,
                        background: '#6366f1'
                    },
                    children: "📄 Get Code"
                }, void 0, false, {
                    fileName: "[project]/Desktop/portfolio builder/app/page.js",
                    lineNumber: 51,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onExit,
                    style: {
                        ...toolBtn,
                        background: '#fff',
                        color: '#000'
                    },
                    children: "✕ Exit"
                }, void 0, false, {
                    fileName: "[project]/Desktop/portfolio builder/app/page.js",
                    lineNumber: 52,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/portfolio builder/app/page.js",
            lineNumber: 48,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0));
    // --- 1. TITAN TEMPLATE (Agustin Burgos Style) ---
    if (template === 'titan') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                backgroundColor: '#0a0a0a',
                color: '#f0ece4',
                fontFamily: "'DM Sans', sans-serif",
                minHeight: '100vh'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FloatingTools, {}, void 0, false, {
                    fileName: "[project]/Desktop/portfolio builder/app/page.js",
                    lineNumber: 60,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    style: {
                        minHeight: '100vh',
                        display: 'flex',
                        alignItems: 'flex-end',
                        padding: '0 3rem 5rem',
                        position: 'relative'
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: '100%',
                            zIndex: 1
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                style: {
                                    fontSize: 'clamp(5rem, 12vw, 12rem)',
                                    fontWeight: '900',
                                    lineHeight: '0.9',
                                    margin: 0
                                },
                                children: [
                                    data.userName.split(' ')[0],
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/Desktop/portfolio builder/app/page.js",
                                        lineNumber: 66,
                                        columnNumber: 44
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontStyle: 'italic',
                                            color: '#d4ff5e'
                                        },
                                        children: data.userName.split(' ')[1] || 'DEV'
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/portfolio builder/app/page.js",
                                        lineNumber: 67,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/portfolio builder/app/page.js",
                                lineNumber: 65,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    maxWidth: '500px',
                                    marginTop: '2rem',
                                    color: '#888'
                                },
                                children: data.heroTagline
                            }, void 0, false, {
                                fileName: "[project]/Desktop/portfolio builder/app/page.js",
                                lineNumber: 69,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/portfolio builder/app/page.js",
                        lineNumber: 64,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Desktop/portfolio builder/app/page.js",
                    lineNumber: 63,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    style: {
                        padding: '5rem 3rem'
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            gap: '20px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    background: data.proj1Image ? `url(${data.proj1Image})` : '#111',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    height: '400px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: '20px',
                                    border: '1px solid #222'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    style: {
                                        fontSize: '2rem',
                                        background: 'rgba(0,0,0,0.5)',
                                        padding: '10px 20px',
                                        borderRadius: '10px'
                                    },
                                    children: data.proj1Title
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/portfolio builder/app/page.js",
                                    lineNumber: 87,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/portfolio builder/app/page.js",
                                lineNumber: 76,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    background: '#111',
                                    height: '400px',
                                    borderRadius: '20px',
                                    border: '1px solid #222'
                                }
                            }, void 0, false, {
                                fileName: "[project]/Desktop/portfolio builder/app/page.js",
                                lineNumber: 90,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/portfolio builder/app/page.js",
                        lineNumber: 75,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Desktop/portfolio builder/app/page.js",
                    lineNumber: 74,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/portfolio builder/app/page.js",
            lineNumber: 59,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    } else if (template === 'aura') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "aura-wrapper",
            style: {
                '--bg': '#0a0a0a',
                '--fg': '#f0ece3',
                '--accent': '#e8d5b0',
                '--muted': '#555',
                backgroundColor: 'var(--bg)',
                color: 'var(--fg)',
                fontFamily: "'DM Mono', monospace",
                minHeight: '100vh',
                overflowX: 'hidden',
                position: 'relative'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FloatingTools, {}, void 0, false, {
                    fileName: "[project]/Desktop/portfolio builder/app/page.js",
                    lineNumber: 103,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AuraInteractiveLayer, {}, void 0, false, {
                    fileName: "[project]/Desktop/portfolio builder/app/page.js",
                    lineNumber: 106,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        position: 'fixed',
                        inset: 0,
                        pointerEvents: 'none',
                        zIndex: 999,
                        opacity: 0.04,
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`
                    }
                }, void 0, false, {
                    fileName: "[project]/Desktop/portfolio builder/app/page.js",
                    lineNumber: 109,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        position: 'relative',
                        zIndex: 10
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            style: {
                                minHeight: '100vh',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'flex-end',
                                padding: '5vw 6vw 6vw'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontFamily: "'Bebas Neue', sans-serif",
                                                fontSize: 'clamp(80px, 17vw, 220px)',
                                                lineHeight: '0.88',
                                                display: 'block'
                                            },
                                            children: data.userName.split(' ')[0].toUpperCase()
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/portfolio builder/app/page.js",
                                            lineNumber: 118,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontFamily: "'Bebas Neue', sans-serif",
                                                fontSize: 'clamp(80px, 17vw, 220px)',
                                                lineHeight: '0.88',
                                                display: 'block'
                                            },
                                            children: data.userName.split(' ')[1]?.toUpperCase() || 'CREATIVE'
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/portfolio builder/app/page.js",
                                            lineNumber: 121,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/portfolio builder/app/page.js",
                                    lineNumber: 117,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        marginTop: '32px',
                                        display: 'grid',
                                        gridTemplateColumns: '1fr 1fr',
                                        gap: '12px 40px',
                                        maxWidth: '600px'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontSize: '11px',
                                                letterSpacing: '0.15em',
                                                color: 'var(--muted)',
                                                textTransform: 'lowercase'
                                            },
                                            children: data.role
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/portfolio builder/app/page.js",
                                            lineNumber: 126,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: `mailto:${data.email}`,
                                            style: {
                                                fontSize: '11px',
                                                letterSpacing: '0.15em',
                                                color: 'var(--accent)',
                                                textDecoration: 'none'
                                            },
                                            children: data.email
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/portfolio builder/app/page.js",
                                            lineNumber: 127,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/portfolio builder/app/page.js",
                                    lineNumber: 125,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/portfolio builder/app/page.js",
                            lineNumber: 116,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            style: {
                                padding: '10vw 6vw',
                                borderTop: '1px solid #1a1a1a'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontSize: '10px',
                                        letterSpacing: '0.3em',
                                        color: 'var(--muted)',
                                        textTransform: 'uppercase',
                                        marginBottom: '80px'
                                    },
                                    children: "Selected Work"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/portfolio builder/app/page.js",
                                    lineNumber: 133,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'grid',
                                        gridTemplateColumns: '1fr 2fr',
                                        gap: '40px',
                                        padding: '48px 0',
                                        borderTop: '1px solid #1c1c1c'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontSize: '10px',
                                                color: 'var(--muted)'
                                            },
                                            children: "01"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/portfolio builder/app/page.js",
                                            lineNumber: 135,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    style: {
                                                        fontFamily: "'Bebas Neue', sans-serif",
                                                        fontSize: 'clamp(28px, 4vw, 52px)',
                                                        color: 'var(--fg)',
                                                        marginBottom: '16px'
                                                    },
                                                    children: data.proj1Title.toUpperCase()
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/portfolio builder/app/page.js",
                                                    lineNumber: 137,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    style: {
                                                        fontSize: '12px',
                                                        lineHeight: '1.8',
                                                        color: 'var(--muted)',
                                                        maxWidth: '520px'
                                                    },
                                                    children: data.proj1Desc
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/portfolio builder/app/page.js",
                                                    lineNumber: 138,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/portfolio builder/app/page.js",
                                            lineNumber: 136,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/portfolio builder/app/page.js",
                                    lineNumber: 134,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/portfolio builder/app/page.js",
                            lineNumber: 132,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/portfolio builder/app/page.js",
                    lineNumber: 114,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/portfolio builder/app/page.js",
            lineNumber: 98,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    } else if (template === 'morgan') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                backgroundColor: '#0d0d0d',
                color: '#f2f0eb',
                fontFamily: "'Manrope', sans-serif",
                minHeight: '100vh',
                position: 'relative',
                overflowX: 'hidden'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FloatingTools, {}, void 0, false, {
                    fileName: "[project]/Desktop/portfolio builder/app/page.js",
                    lineNumber: 156,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MorganInteractiveLayer, {}, void 0, false, {
                    fileName: "[project]/Desktop/portfolio builder/app/page.js",
                    lineNumber: 159,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        position: 'fixed',
                        inset: 0,
                        opacity: 0.035,
                        pointerEvents: 'none',
                        zIndex: 9998,
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`
                    }
                }, void 0, false, {
                    fileName: "[project]/Desktop/portfolio builder/app/page.js",
                    lineNumber: 162,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    style: {
                        minHeight: '100vh',
                        padding: '160px 40px 80px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-end',
                        borderBottom: '1px solid #1e1e1e'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            id: "hero-counter",
                            style: {
                                fontFamily: "'Syne', sans-serif",
                                fontSize: 'clamp(80px, 20vw, 240px)',
                                fontWeight: 800,
                                color: '#f2f0eb',
                                opacity: 0.1,
                                position: 'absolute',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                zIndex: 0
                            },
                            children: "000"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/portfolio builder/app/page.js",
                            lineNumber: 169,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                position: 'relative',
                                zIndex: 1,
                                display: 'grid',
                                gridTemplateColumns: '1fr 1fr',
                                gap: '40px',
                                alignItems: 'end'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    style: {
                                        fontFamily: "'Syne', sans-serif",
                                        fontSize: 'clamp(42px, 7vw, 92px)',
                                        fontWeight: 800,
                                        lineHeight: 0.9
                                    },
                                    children: [
                                        data.userName.split(' ')[0],
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/Desktop/portfolio builder/app/page.js",
                                            lineNumber: 173,
                                            columnNumber: 44
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        data.userName.split(' ')[1]
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/portfolio builder/app/page.js",
                                    lineNumber: 172,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        fontSize: '15px',
                                        color: '#666',
                                        maxWidth: '440px',
                                        lineHeight: 1.75
                                    },
                                    children: data.heroTagline
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/portfolio builder/app/page.js",
                                    lineNumber: 175,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/portfolio builder/app/page.js",
                            lineNumber: 171,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/portfolio builder/app/page.js",
                    lineNumber: 168,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        overflow: 'hidden',
                        background: '#111',
                        padding: '18px 0',
                        borderBottom: '1px solid #1e1e1e'
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "marquee-track",
                        style: {
                            display: 'flex',
                            gap: '40px',
                            whiteSpace: 'nowrap'
                        },
                        children: [
                            "UX",
                            "Shopify",
                            "React",
                            "Next.js",
                            "UI",
                            "SEO"
                        ].map((skill, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontFamily: "'Syne', sans-serif",
                                    fontSize: '13px',
                                    fontWeight: 600,
                                    letterSpacing: '0.25em',
                                    color: '#666'
                                },
                                children: skill.toUpperCase()
                            }, i, false, {
                                fileName: "[project]/Desktop/portfolio builder/app/page.js",
                                lineNumber: 186,
                                columnNumber: 16
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/portfolio builder/app/page.js",
                        lineNumber: 183,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Desktop/portfolio builder/app/page.js",
                    lineNumber: 182,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    style: {
                        padding: '120px 40px'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                color: '#c8ff47',
                                fontSize: '11px',
                                letterSpacing: '0.3em',
                                fontWeight: 600
                            },
                            children: "PORTFOLIO"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/portfolio builder/app/page.js",
                            lineNumber: 193,
                            columnNumber: 12
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            style: {
                                fontFamily: "'Syne', sans-serif",
                                fontSize: 'clamp(32px, 5vw, 56px)',
                                fontWeight: 800
                            },
                            children: "Featured Work"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/portfolio builder/app/page.js",
                            lineNumber: 194,
                            columnNumber: 12
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                marginTop: '64px',
                                display: 'grid',
                                gridTemplateColumns: '1fr 1fr',
                                gap: '20px'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    background: '#141414',
                                    border: '1px solid #1e1e1e',
                                    height: '400px',
                                    padding: '40px',
                                    position: 'relative'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: '#c8ff47',
                                            position: 'absolute',
                                            top: '20px',
                                            right: '20px'
                                        },
                                        children: "01"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/portfolio builder/app/page.js",
                                        lineNumber: 198,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        style: {
                                            fontFamily: "'Syne', sans-serif",
                                            fontSize: '22px'
                                        },
                                        children: data.proj1Title
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/portfolio builder/app/page.js",
                                        lineNumber: 199,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            color: '#666',
                                            marginTop: '10px'
                                        },
                                        children: data.proj1Desc
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/portfolio builder/app/page.js",
                                        lineNumber: 200,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/portfolio builder/app/page.js",
                                lineNumber: 197,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/portfolio builder/app/page.js",
                            lineNumber: 196,
                            columnNumber: 12
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/portfolio builder/app/page.js",
                    lineNumber: 192,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/portfolio builder/app/page.js",
            lineNumber: 152,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    } else if (template === 'tech') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                backgroundColor: '#fff',
                color: '#000',
                fontFamily: "'Inter', sans-serif",
                minHeight: '100vh'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FloatingTools, {}, void 0, false, {
                    fileName: "[project]/Desktop/portfolio builder/app/page.js",
                    lineNumber: 211,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    style: {
                        display: 'flex',
                        justifyContent: 'space-between',
                        padding: '40px 60px',
                        borderBottom: '1px solid #eee'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                fontWeight: '700'
                            },
                            children: data.userName.toUpperCase()
                        }, void 0, false, {
                            fileName: "[project]/Desktop/portfolio builder/app/page.js",
                            lineNumber: 214,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: data.role
                        }, void 0, false, {
                            fileName: "[project]/Desktop/portfolio builder/app/page.js",
                            lineNumber: 215,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/portfolio builder/app/page.js",
                    lineNumber: 213,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    style: {
                        padding: '120px 60px',
                        maxWidth: '1200px'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            style: {
                                fontSize: 'clamp(3rem, 8vw, 6rem)',
                                fontWeight: '800',
                                lineHeight: '1.1',
                                letterSpacing: '-0.04em'
                            },
                            children: data.heroTagline
                        }, void 0, false, {
                            fileName: "[project]/Desktop/portfolio builder/app/page.js",
                            lineNumber: 219,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                fontSize: '1.5rem',
                                color: '#666',
                                marginTop: '40px'
                            },
                            children: data.aboutBio
                        }, void 0, false, {
                            fileName: "[project]/Desktop/portfolio builder/app/page.js",
                            lineNumber: 222,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/portfolio builder/app/page.js",
                    lineNumber: 218,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    style: {
                        padding: '0 60px 100px'
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            gap: '60px'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                borderTop: '2px solid #000',
                                paddingTop: '30px'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    style: {
                                        fontSize: '2.5rem'
                                    },
                                    children: data.proj1Title
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/portfolio builder/app/page.js",
                                    lineNumber: 228,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        color: '#444'
                                    },
                                    children: data.proj1Desc
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/portfolio builder/app/page.js",
                                    lineNumber: 229,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/portfolio builder/app/page.js",
                            lineNumber: 227,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/portfolio builder/app/page.js",
                        lineNumber: 226,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Desktop/portfolio builder/app/page.js",
                    lineNumber: 225,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/portfolio builder/app/page.js",
            lineNumber: 210,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    } else if (template === 'ritz') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                backgroundColor: '#0d0d0d',
                color: '#f2f0eb',
                fontFamily: "'Manrope', sans-serif",
                minHeight: '100vh',
                position: 'relative',
                overflowX: 'hidden'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FloatingTools, {}, void 0, false, {
                    fileName: "[project]/Desktop/portfolio builder/app/page.js",
                    lineNumber: 244,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MorganInteractiveLayer, {}, void 0, false, {
                    fileName: "[project]/Desktop/portfolio builder/app/page.js",
                    lineNumber: 247,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        position: 'fixed',
                        inset: 0,
                        opacity: 0.035,
                        pointerEvents: 'none',
                        zIndex: 9998,
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`
                    }
                }, void 0, false, {
                    fileName: "[project]/Desktop/portfolio builder/app/page.js",
                    lineNumber: 250,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    style: {
                        minHeight: '100vh',
                        padding: '160px 40px 80px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-end',
                        borderBottom: '1px solid #1e1e1e',
                        position: 'relative'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            id: "hero-counter",
                            style: {
                                fontFamily: "'Syne', sans-serif",
                                fontSize: 'clamp(80px, 20vw, 240px)',
                                fontWeight: 800,
                                color: '#f2f0eb',
                                opacity: 0.05,
                                position: 'absolute',
                                top: '50%',
                                left: '40px',
                                transform: 'translateY(-50%)',
                                zIndex: 0,
                                pointerEvents: 'none'
                            },
                            children: "000"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/portfolio builder/app/page.js",
                            lineNumber: 257,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                position: 'relative',
                                zIndex: 1,
                                display: 'grid',
                                gridTemplateColumns: '1fr 1fr',
                                gap: '40px',
                                alignItems: 'end'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    style: {
                                        fontFamily: "'Syne', sans-serif",
                                        fontSize: 'clamp(42px, 7vw, 92px)',
                                        fontWeight: 800,
                                        lineHeight: 0.9,
                                        letterSpacing: '-0.03em'
                                    },
                                    children: [
                                        data.userName.split(' ')[0],
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/Desktop/portfolio builder/app/page.js",
                                            lineNumber: 261,
                                            columnNumber: 44
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: 'transparent',
                                                WebkitTextStroke: '1px #f2f0eb'
                                            },
                                            children: data.userName.split(' ')[1] || 'CREATIVE'
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/portfolio builder/app/page.js",
                                            lineNumber: 262,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/portfolio builder/app/page.js",
                                    lineNumber: 260,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        fontSize: '15px',
                                        color: '#666',
                                        maxWidth: '440px',
                                        lineHeight: 1.75
                                    },
                                    children: data.heroTagline
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/portfolio builder/app/page.js",
                                    lineNumber: 264,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/portfolio builder/app/page.js",
                            lineNumber: 259,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/portfolio builder/app/page.js",
                    lineNumber: 256,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        overflow: 'hidden',
                        background: '#111',
                        padding: '18px 0',
                        borderBottom: '1px solid #1e1e1e'
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            gap: '40px',
                            animation: 'marquee 20s linear infinite'
                        },
                        children: [
                            "UX",
                            "Shopify",
                            "Next.js",
                            "React",
                            "UI",
                            "API"
                        ].map((tag, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontFamily: "'Syne', sans-serif",
                                    fontSize: '13px',
                                    fontWeight: 600,
                                    letterSpacing: '0.25em',
                                    color: '#666',
                                    textTransform: 'uppercase'
                                },
                                children: tag
                            }, i, false, {
                                fileName: "[project]/Desktop/portfolio builder/app/page.js",
                                lineNumber: 274,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/portfolio builder/app/page.js",
                        lineNumber: 272,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Desktop/portfolio builder/app/page.js",
                    lineNumber: 271,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    style: {
                        padding: '120px 40px'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                fontSize: '11px',
                                letterSpacing: '0.3em',
                                color: '#c8ff47',
                                fontWeight: 600,
                                marginBottom: '16px'
                            },
                            children: "SELECTED WORK"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/portfolio builder/app/page.js",
                            lineNumber: 281,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'grid',
                                gridTemplateColumns: '1fr 2fr',
                                gap: '40px',
                                padding: '48px 0',
                                borderTop: '1px solid #1c1c1c'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontSize: '10px',
                                        color: '#555'
                                    },
                                    children: "01"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/portfolio builder/app/page.js",
                                    lineNumber: 283,
                                    columnNumber: 14
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "project-card-ritz",
                                    style: {
                                        cursor: 'pointer'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            style: {
                                                fontFamily: "'Syne', sans-serif",
                                                fontSize: 'clamp(28px, 4vw, 52px)',
                                                marginBottom: '16px',
                                                transition: 'color 0.3s'
                                            },
                                            children: data.proj1Title.toUpperCase()
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/portfolio builder/app/page.js",
                                            lineNumber: 285,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontSize: '14px',
                                                lineHeight: '1.8',
                                                color: '#666',
                                                maxWidth: '520px'
                                            },
                                            children: data.proj1Desc
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/portfolio builder/app/page.js",
                                            lineNumber: 286,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/portfolio builder/app/page.js",
                                    lineNumber: 284,
                                    columnNumber: 14
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/portfolio builder/app/page.js",
                            lineNumber: 282,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/portfolio builder/app/page.js",
                    lineNumber: 280,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                    dangerouslySetInnerHTML: {
                        __html: `
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .project-card-ritz:hover h2 { color: #c8ff47 !important; }
        `
                    }
                }, void 0, false, {
                    fileName: "[project]/Desktop/portfolio builder/app/page.js",
                    lineNumber: 292,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/portfolio builder/app/page.js",
            lineNumber: 240,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    } else if (template === 'lynn') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "lynn-app",
            style: {
                backgroundColor: '#f4ede0',
                color: '#1a1208',
                fontFamily: "'EB Garamond', serif",
                minHeight: '100vh',
                position: 'relative',
                overflowX: 'hidden'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FloatingTools, {}, void 0, false, {
                    fileName: "[project]/Desktop/portfolio builder/app/page.js",
                    lineNumber: 309,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        position: 'fixed',
                        inset: 0,
                        pointerEvents: 'none',
                        zIndex: 9999,
                        opacity: 0.06,
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.72' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`
                    }
                }, void 0, false, {
                    fileName: "[project]/Desktop/portfolio builder/app/page.js",
                    lineNumber: 312,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        width: '436px',
                        margin: '0 auto',
                        padding: '0 24px',
                        display: 'flex',
                        flexDirection: 'column'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                            style: {
                                padding: '2.8rem 0 1.8rem',
                                borderBottom: '1px solid #c8b89a',
                                marginBottom: '2.2rem'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontSize: '0.72rem',
                                        letterSpacing: '0.22em',
                                        textTransform: 'uppercase',
                                        color: '#b8a080',
                                        display: 'block'
                                    },
                                    children: "CH. I"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/portfolio builder/app/page.js",
                                    lineNumber: 320,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    style: {
                                        fontFamily: "'Cormorant SC', serif",
                                        fontSize: '3rem',
                                        fontWeight: 700,
                                        margin: 0
                                    },
                                    children: data.userName.split(' ')[0]
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/portfolio builder/app/page.js",
                                    lineNumber: 321,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/portfolio builder/app/page.js",
                            lineNumber: 319,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            style: {
                                marginBottom: '2.2rem'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontSize: '1.05rem',
                                    lineHeight: '1.8',
                                    marginBottom: '1.1em'
                                },
                                children: data.aboutBio
                            }, void 0, false, {
                                fileName: "[project]/Desktop/portfolio builder/app/page.js",
                                lineNumber: 326,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/portfolio builder/app/page.js",
                            lineNumber: 325,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            style: {
                                marginBottom: '2.8rem'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    style: {
                                        fontFamily: "'Cormorant SC', serif",
                                        fontSize: '1.35rem',
                                        borderBottom: '1px solid #c8b89a',
                                        paddingBottom: '0.45rem',
                                        marginBottom: '1.1rem'
                                    },
                                    children: "Selected Work"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/portfolio builder/app/page.js",
                                    lineNumber: 331,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        padding: '0.48rem 0',
                                        borderBottom: '1px dotted #c8b89a'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            style: {
                                                fontSize: '1.1rem',
                                                fontWeight: '500'
                                            },
                                            children: data.proj1Title
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/portfolio builder/app/page.js",
                                            lineNumber: 333,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontSize: '0.9rem',
                                                color: '#6b5c45',
                                                marginTop: '5px'
                                            },
                                            children: data.proj1Desc
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/portfolio builder/app/page.js",
                                            lineNumber: 334,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/portfolio builder/app/page.js",
                                    lineNumber: 332,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/portfolio builder/app/page.js",
                            lineNumber: 330,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                            style: {
                                padding: '1.8rem 0',
                                borderTop: '1px solid #c8b89a',
                                marginTop: 'auto'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    gap: '20px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: `mailto:${data.email}`,
                                        style: {
                                            color: '#8b1a1a',
                                            fontSize: '0.9rem'
                                        },
                                        children: "Email"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/portfolio builder/app/page.js",
                                        lineNumber: 341,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: data.Linkdeln,
                                        style: {
                                            color: '#8b1a1a',
                                            fontSize: '0.9rem'
                                        },
                                        children: "LinkedIn"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/portfolio builder/app/page.js",
                                        lineNumber: 342,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/portfolio builder/app/page.js",
                                lineNumber: 340,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/portfolio builder/app/page.js",
                            lineNumber: 339,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/portfolio builder/app/page.js",
                    lineNumber: 317,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                    dangerouslySetInnerHTML: {
                        __html: `
          @import url('https://fonts.googleapis.com/css2?family=Cormorant+SC:wght@600;700&family=EB+Garamond:wght@400;500&display=swap');
        `
                    }
                }, void 0, false, {
                    fileName: "[project]/Desktop/portfolio builder/app/page.js",
                    lineNumber: 348,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/portfolio builder/app/page.js",
            lineNumber: 305,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            padding: '100px',
            textAlign: 'center'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FloatingTools, {}, void 0, false, {
                fileName: "[project]/Desktop/portfolio builder/app/page.js",
                lineNumber: 357,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                children: "Template not found. Please select Titan."
            }, void 0, false, {
                fileName: "[project]/Desktop/portfolio builder/app/page.js",
                lineNumber: 358,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/portfolio builder/app/page.js",
        lineNumber: 356,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
function PortfolioLAB() {
    const [selectedTemplate, setSelectedTemplate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isEditing, setIsEditing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [aiLoading, setAiLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [typewriter, setTypewriter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [index, setIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const fullText = "Build your own portfolio";
    const [userData, setUserData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        userName: "Lakshita Nahar",
        role: "Product Designer & CSE Student",
        heroTagline: "Designing meaningful digital experiences and building innovative tech-driven projects.",
        aboutBio: "I am a Computer Science Engineering student with a strong interest in Product Design and UI/UX.",
        proj1Title: "Portfolio Builder Website",
        proj1Desc: "A modern platform that allows users to create professional portfolios effortlessly.",
        proj1Process: "Initial research and wireframing followed by high-fidelity prototyping in Figma.",
        proj1Tools: [
            "Figma",
            "Spline",
            "React"
        ],
        proj2Title: "Godzilla Perfume UI",
        proj2Desc: "Branding and UI/UX project focused on premium visual design.",
        contactHeading: "Let's collaborate and create something impactful.",
        email: "lakshitanahar193@gmail.com",
        Linkdeln: "https://www.linkedin.com/in/lakshita-nahar-0916002b6",
        footerText: "© 2026 PortfolioLAB by Lakshita Nahar."
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (index < fullText.length) {
            const timer = setTimeout(()=>{
                setTypewriter((prev)=>prev + fullText[index]);
                setIndex(index + 1);
            }, 80);
            return ()=>clearTimeout(timer);
        }
    }, [
        index
    ]);
    const enhanceWithAI = ()=>{
        setAiLoading(true);
        setTimeout(()=>{
            setUserData((prev)=>({
                    ...prev,
                    aboutBio: "A visionary Product Designer and CSE student focused on bridging high-scale automation with aesthetic UI systems, dedicated to transforming complex engineering problems into elegant digital narratives."
                }));
            setAiLoading(false);
        }, 1200);
    };
    const generateAiImage = ()=>{
        setAiLoading(true);
        setTimeout(()=>{
            const randomId = Math.floor(Math.random() * 1000);
            const aiGeneratedUrl = `https://picsum.photos/seed/${randomId}/800/600`;
            setUserData((prev)=>({
                    ...prev,
                    proj1Image: aiGeneratedUrl
                }));
            setAiLoading(false);
        }, 1200);
    };
    //for live 
    const [isPublished, setIsPublished] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const handlePublish = ()=>{
        setIsPublished(true);
        alert(`Congrats! Your portfolio is live at: portfolio-lab.com/${userData.userName.replace(/\s+/g, '-').toLowerCase()}`);
    };
    if (selectedTemplate) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                isEditing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: sidebarStyle,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            style: {
                                marginBottom: '20px'
                            },
                            children: "Master Editor ✨"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/portfolio builder/app/page.js",
                            lineNumber: 443,
                            columnNumber: 14
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                overflowY: 'auto',
                                height: '75vh',
                                paddingRight: '10px'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    style: labelStyle,
                                    children: "User Name"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/portfolio builder/app/page.js",
                                    lineNumber: 445,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    style: inputStyle,
                                    value: userData.userName,
                                    onChange: (e)=>setUserData({
                                            ...userData,
                                            userName: e.target.value
                                        })
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/portfolio builder/app/page.js",
                                    lineNumber: 446,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    style: labelStyle,
                                    children: "Role"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/portfolio builder/app/page.js",
                                    lineNumber: 448,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    style: inputStyle,
                                    value: userData.role,
                                    onChange: (e)=>setUserData({
                                            ...userData,
                                            role: e.target.value
                                        })
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/portfolio builder/app/page.js",
                                    lineNumber: 449,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    style: labelStyle,
                                    children: "Hero Tagline"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/portfolio builder/app/page.js",
                                    lineNumber: 451,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    style: inputStyle,
                                    value: userData.heroTagline,
                                    onChange: (e)=>setUserData({
                                            ...userData,
                                            heroTagline: e.target.value
                                        })
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/portfolio builder/app/page.js",
                                    lineNumber: 452,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    style: labelStyle,
                                    children: "Bio Summary"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/portfolio builder/app/page.js",
                                    lineNumber: 454,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        position: 'relative'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            style: {
                                                ...inputStyle,
                                                height: '120px'
                                            },
                                            value: userData.aboutBio,
                                            onChange: (e)=>setUserData({
                                                    ...userData,
                                                    aboutBio: e.target.value
                                                })
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/portfolio builder/app/page.js",
                                            lineNumber: 456,
                                            columnNumber: 20
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: enhanceWithAI,
                                            style: aiActionBtn,
                                            children: aiLoading ? "Thinking..." : "✨ AI Enhance"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/portfolio builder/app/page.js",
                                            lineNumber: 457,
                                            columnNumber: 20
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/portfolio builder/app/page.js",
                                    lineNumber: 455,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        marginTop: '25px',
                                        borderTop: '1px solid #eee',
                                        paddingTop: '20px'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            style: labelStyle,
                                            children: "✨ Generate Project Image (AI)"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/portfolio builder/app/page.js",
                                            lineNumber: 461,
                                            columnNumber: 3
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                gap: '8px',
                                                marginTop: '10px'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    placeholder: "e.g. 3D perfume bottle, neon glass...",
                                                    style: {
                                                        ...inputStyle,
                                                        marginBottom: 0,
                                                        flex: 1
                                                    },
                                                    id: "ai-image-prompt"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/portfolio builder/app/page.js",
                                                    lineNumber: 463,
                                                    columnNumber: 5
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>"PortfolioLAB AI: Generating your custom 3D visual...",
                                                    style: {
                                                        padding: '0 15px',
                                                        background: '#6366f1',
                                                        color: '#fff',
                                                        border: 'none',
                                                        borderRadius: '10px',
                                                        cursor: 'pointer',
                                                        fontSize: '1.2rem'
                                                    },
                                                    children: "🪄"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/portfolio builder/app/page.js",
                                                    lineNumber: 468,
                                                    columnNumber: 5
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/portfolio builder/app/page.js",
                                            lineNumber: 462,
                                            columnNumber: 3
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontSize: '0.65rem',
                                                color: '#888',
                                                marginTop: '8px',
                                                lineHeight: '1.4'
                                            },
                                            children: "Describe any object or style to generate unique high-end graphics for your project cards."
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/portfolio builder/app/page.js",
                                            lineNumber: 483,
                                            columnNumber: 3
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/portfolio builder/app/page.js",
                                    lineNumber: 460,
                                    columnNumber: 1
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    style: labelStyle,
                                    children: "Project 1 Title"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/portfolio builder/app/page.js",
                                    lineNumber: 488,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    style: inputStyle,
                                    value: userData.proj1Title,
                                    onChange: (e)=>setUserData({
                                            ...userData,
                                            proj1Title: e.target.value
                                        })
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/portfolio builder/app/page.js",
                                    lineNumber: 489,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    style: labelStyle,
                                    children: "Footer Text"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/portfolio builder/app/page.js",
                                    lineNumber: 491,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    style: inputStyle,
                                    value: userData.footerText,
                                    onChange: (e)=>setUserData({
                                            ...userData,
                                            footerText: e.target.value
                                        })
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/portfolio builder/app/page.js",
                                    lineNumber: 492,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/portfolio builder/app/page.js",
                            lineNumber: 444,
                            columnNumber: 14
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setIsEditing(false),
                            style: saveBtn,
                            children: "Save & Apply Changes"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/portfolio builder/app/page.js",
                            lineNumber: 494,
                            columnNumber: 14
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setIsEditing(false),
                            style: saveBtn,
                            children: "Save & Apply Changes"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/portfolio builder/app/page.js",
                            lineNumber: 496,
                            columnNumber: 1
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handlePublish,
                            style: {
                                ...saveBtn,
                                marginTop: '10px',
                                background: '#000',
                                border: '1px solid #333'
                            },
                            children: "🚀 Publish Live"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/portfolio builder/app/page.js",
                            lineNumber: 498,
                            columnNumber: 1
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/portfolio builder/app/page.js",
                    lineNumber: 442,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PortfolioRenderer, {
                    template: selectedTemplate,
                    data: userData,
                    onEdit: ()=>setIsEditing(true),
                    onExit: ()=>setSelectedTemplate(null)
                }, void 0, false, {
                    fileName: "[project]/Desktop/portfolio builder/app/page.js",
                    lineNumber: 507,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            backgroundColor: '#000',
            color: '#fff',
            fontFamily: 'sans-serif'
        },
        className: "jsx-dd271781609d418d",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                style: navStyle,
                className: "jsx-dd271781609d418d",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontWeight: 'bold',
                            fontSize: '1.4rem'
                        },
                        className: "jsx-dd271781609d418d",
                        children: [
                            "Portfolio",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: '#10b981'
                                },
                                className: "jsx-dd271781609d418d",
                                children: "LAB"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/portfolio builder/app/page.js",
                                lineNumber: 517,
                                columnNumber: 74
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/portfolio builder/app/page.js",
                        lineNumber: 517,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            gap: '30px'
                        },
                        className: "jsx-dd271781609d418d",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#home",
                                style: navLink,
                                className: "jsx-dd271781609d418d",
                                children: "Home"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/portfolio builder/app/page.js",
                                lineNumber: 519,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#about",
                                style: navLink,
                                className: "jsx-dd271781609d418d",
                                children: "About"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/portfolio builder/app/page.js",
                                lineNumber: 520,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#services",
                                style: navLink,
                                className: "jsx-dd271781609d418d",
                                children: "Services"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/portfolio builder/app/page.js",
                                lineNumber: 521,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#contact",
                                style: navLink,
                                className: "jsx-dd271781609d418d",
                                children: "Contact"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/portfolio builder/app/page.js",
                                lineNumber: 522,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/portfolio builder/app/page.js",
                        lineNumber: 518,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/portfolio builder/app/page.js",
                lineNumber: 516,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "home",
                style: {
                    height: '80vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    padding: '0 20px'
                },
                className: "jsx-dd271781609d418d",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        style: {
                            fontSize: '5rem',
                            fontWeight: 'bold',
                            marginBottom: '20px'
                        },
                        className: "jsx-dd271781609d418d",
                        children: [
                            typewriter,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-dd271781609d418d" + " " + "cursor-blink",
                                children: "|"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/portfolio builder/app/page.js",
                                lineNumber: 529,
                                columnNumber: 10
                            }, this),
                            " "
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/portfolio builder/app/page.js",
                        lineNumber: 528,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontSize: '1.2rem',
                            maxWidth: '1000px',
                            lineHeight: '1.85',
                            fontWeight: '1000',
                            marginTop: '20px'
                        },
                        className: "jsx-dd271781609d418d" + " " + "glowing-text",
                        children: "Create, customize, and publish a powerful digital portfolio that showcases your projects, skills, and creativity in a modern, user-friendly, and visually engaging way all in one seamless platform."
                    }, void 0, false, {
                        fileName: "[project]/Desktop/portfolio builder/app/page.js",
                        lineNumber: 530,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/portfolio builder/app/page.js",
                lineNumber: 527,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: {
                    padding: '0 50px 100px',
                    maxWidth: '800px',
                    margin: '0 auto',
                    textAlign: 'center'
                },
                className: "jsx-dd271781609d418d",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        background: '#111',
                        padding: '40px',
                        borderRadius: '30px',
                        border: '1px solid #333'
                    },
                    className: "jsx-dd271781609d418d",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            style: {
                                marginBottom: '20px'
                            },
                            className: "jsx-dd271781609d418d",
                            children: "Build with AI ✨"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/portfolio builder/app/page.js",
                            lineNumber: 546,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                gap: '10px'
                            },
                            className: "jsx-dd271781609d418d",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    placeholder: "e.g. A minimalist designer portfolio",
                                    style: {
                                        flex: 1,
                                        padding: '15px',
                                        borderRadius: '12px',
                                        background: '#000',
                                        border: '1px solid #444',
                                        color: '#fff'
                                    },
                                    className: "jsx-dd271781609d418d"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/portfolio builder/app/page.js",
                                    lineNumber: 548,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setSelectedTemplate('titan'),
                                    style: {
                                        padding: '15px 30px',
                                        background: '#10b981',
                                        border: 'none',
                                        borderRadius: '12px',
                                        color: '#fff',
                                        fontWeight: 'bold',
                                        cursor: 'pointer'
                                    },
                                    className: "jsx-dd271781609d418d",
                                    children: "Generate"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/portfolio builder/app/page.js",
                                    lineNumber: 549,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/portfolio builder/app/page.js",
                            lineNumber: 547,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/portfolio builder/app/page.js",
                    lineNumber: 545,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/portfolio builder/app/page.js",
                lineNumber: 544,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "about",
                style: sectionPadding,
                className: "jsx-dd271781609d418d",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        style: {
                            color: '#10b981',
                            fontSize: '3rem',
                            marginBottom: '30px'
                        },
                        className: "jsx-dd271781609d418d",
                        children: "About Our Platform"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/portfolio builder/app/page.js",
                        lineNumber: 557,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontSize: '1.2rem',
                            color: '#ccc',
                            lineHeight: '1.8',
                            maxWidth: '900px'
                        },
                        className: "jsx-dd271781609d418d",
                        children: "Our Portfolio Builder is a modern platform designed to help students, designers, and developers create professional and visually engaging portfolios with ease. We understand that building a portfolio from scratch can be time-consuming and technically challenging, especially for beginners. This platform simplifies the entire process by providing customizable layouts, structured project sections, and an intuitive interface that allows users to showcase their work, skills, and achievements in a clear and impactful way. By combining simplicity, creativity, and functionality, the goal is to empower creators to build a strong digital presence and present their journey confidently in today’s competitive world. "
                    }, void 0, false, {
                        fileName: "[project]/Desktop/portfolio builder/app/page.js",
                        lineNumber: 558,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/portfolio builder/app/page.js",
                lineNumber: 556,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "services",
                style: sectionPadding,
                className: "jsx-dd271781609d418d",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        style: {
                            fontSize: '3rem',
                            marginBottom: '50px'
                        },
                        className: "jsx-dd271781609d418d",
                        children: "What We Offer"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/portfolio builder/app/page.js",
                        lineNumber: 564,
                        columnNumber: 3
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                            gap: '30px'
                        },
                        className: "jsx-dd271781609d418d",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ServiceCard, {
                                title: "Easy Portfolio Creation",
                                desc: "Create stunning portfolios without coding complexity."
                            }, void 0, false, {
                                fileName: "[project]/Desktop/portfolio builder/app/page.js",
                                lineNumber: 567,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ServiceCard, {
                                title: "Modern Templates",
                                desc: "Access clean designs for creators and students."
                            }, void 0, false, {
                                fileName: "[project]/Desktop/portfolio builder/app/page.js",
                                lineNumber: 572,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ServiceCard, {
                                title: "Quick Publishing",
                                desc: "Launch and share instantly with a unique link."
                            }, void 0, false, {
                                fileName: "[project]/Desktop/portfolio builder/app/page.js",
                                lineNumber: 577,
                                columnNumber: 5
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/portfolio builder/app/page.js",
                        lineNumber: 565,
                        columnNumber: 3
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/portfolio builder/app/page.js",
                lineNumber: 563,
                columnNumber: 1
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: sectionPadding,
                className: "jsx-dd271781609d418d",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        style: {
                            fontSize: '3rem',
                            textAlign: 'center',
                            marginBottom: '60px'
                        },
                        className: "jsx-dd271781609d418d",
                        children: "Choose a Persona"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/portfolio builder/app/page.js",
                        lineNumber: 587,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                            gap: '40px'
                        },
                        className: "jsx-dd271781609d418d",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TemplateCard, {
                                name: "Titan (Agustin Burgos)",
                                color: "#111",
                                onSelect: ()=>setSelectedTemplate('titan')
                            }, void 0, false, {
                                fileName: "[project]/Desktop/portfolio builder/app/page.js",
                                lineNumber: 589,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TemplateCard, {
                                name: "Aura (Cory Hughart)",
                                color: "#0e1111",
                                onSelect: ()=>setSelectedTemplate('aura')
                            }, void 0, false, {
                                fileName: "[project]/Desktop/portfolio builder/app/page.js",
                                lineNumber: 590,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TemplateCard, {
                                name: "Tech (Carl Gordon)",
                                color: "#fff",
                                onSelect: ()=>setSelectedTemplate('tech')
                            }, void 0, false, {
                                fileName: "[project]/Desktop/portfolio builder/app/page.js",
                                lineNumber: 591,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TemplateCard, {
                                name: "Ritz (Ryan Style)",
                                color: "#0d0d0d",
                                onSelect: ()=>setSelectedTemplate('ritz')
                            }, void 0, false, {
                                fileName: "[project]/Desktop/portfolio builder/app/page.js",
                                lineNumber: 592,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TemplateCard, {
                                name: "Lynn (Editorial Style)",
                                color: "#f4ede0",
                                onSelect: ()=>setSelectedTemplate('lynn')
                            }, void 0, false, {
                                fileName: "[project]/Desktop/portfolio builder/app/page.js",
                                lineNumber: 593,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/portfolio builder/app/page.js",
                        lineNumber: 588,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/portfolio builder/app/page.js",
                lineNumber: 586,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AestheticShowcase, {}, void 0, false, {
                fileName: "[project]/Desktop/portfolio builder/app/page.js",
                lineNumber: 600,
                columnNumber: 7
            }, this),
            " ",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "contact",
                style: sectionPadding,
                className: "jsx-dd271781609d418d",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        style: {
                            fontSize: '3rem',
                            marginBottom: '40px'
                        },
                        className: "jsx-dd271781609d418d",
                        children: "Get in Touch"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/portfolio builder/app/page.js",
                        lineNumber: 604,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            gap: '80px'
                        },
                        className: "jsx-dd271781609d418d",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-dd271781609d418d",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "jsx-dd271781609d418d",
                                        children: "Have questions? We’d love to hear from you."
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/portfolio builder/app/page.js",
                                        lineNumber: 607,
                                        columnNumber: 14
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            marginTop: '20px'
                                        },
                                        className: "jsx-dd271781609d418d",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                className: "jsx-dd271781609d418d",
                                                children: "Email:"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/portfolio builder/app/page.js",
                                                lineNumber: 608,
                                                columnNumber: 44
                                            }, this),
                                            " lakshitanahar193@gmail.com"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/portfolio builder/app/page.js",
                                        lineNumber: 608,
                                        columnNumber: 14
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            marginTop: '30px'
                                        },
                                        className: "jsx-dd271781609d418d",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "https://www.linkedin.com/in/lakshita-nahar-0916002b6",
                                                style: {
                                                    color: '#10b981',
                                                    textDecoration: 'none',
                                                    marginRight: '20px'
                                                },
                                                className: "jsx-dd271781609d418d",
                                                children: "LinkedIn"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/portfolio builder/app/page.js",
                                                lineNumber: 610,
                                                columnNumber: 16
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "https://github.com/lakshitanahar",
                                                style: {
                                                    color: '#10b981',
                                                    textDecoration: 'none'
                                                },
                                                className: "jsx-dd271781609d418d",
                                                children: "GitHub"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/portfolio builder/app/page.js",
                                                lineNumber: 611,
                                                columnNumber: 16
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/portfolio builder/app/page.js",
                                        lineNumber: 609,
                                        columnNumber: 14
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/portfolio builder/app/page.js",
                                lineNumber: 606,
                                columnNumber: 12
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                style: {
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '15px'
                                },
                                className: "jsx-dd271781609d418d",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        placeholder: "Name",
                                        style: inputStyle,
                                        className: "jsx-dd271781609d418d"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/portfolio builder/app/page.js",
                                        lineNumber: 615,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        placeholder: "Email",
                                        style: inputStyle,
                                        className: "jsx-dd271781609d418d"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/portfolio builder/app/page.js",
                                        lineNumber: 616,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        placeholder: "Message",
                                        style: {
                                            ...inputStyle,
                                            height: '120px'
                                        },
                                        className: "jsx-dd271781609d418d"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/portfolio builder/app/page.js",
                                        lineNumber: 617,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        style: saveBtn,
                                        className: "jsx-dd271781609d418d",
                                        children: "Send Message"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/portfolio builder/app/page.js",
                                        lineNumber: 618,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/portfolio builder/app/page.js",
                                lineNumber: 614,
                                columnNumber: 12
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/portfolio builder/app/page.js",
                        lineNumber: 605,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/portfolio builder/app/page.js",
                lineNumber: 603,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                style: footerStyle,
                className: "jsx-dd271781609d418d",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-dd271781609d418d",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "jsx-dd271781609d418d",
                                children: "PortfolioLAB"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/portfolio builder/app/page.js",
                                lineNumber: 626,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    color: '#666'
                                },
                                className: "jsx-dd271781609d418d",
                                children: "Turn your projects into a powerful portfolio."
                            }, void 0, false, {
                                fileName: "[project]/Desktop/portfolio builder/app/page.js",
                                lineNumber: 627,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/portfolio builder/app/page.js",
                        lineNumber: 625,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            textAlign: 'right'
                        },
                        className: "jsx-dd271781609d418d",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "jsx-dd271781609d418d",
                            children: "© 2026 Portfolio Builder by Lakshita Nahar."
                        }, void 0, false, {
                            fileName: "[project]/Desktop/portfolio builder/app/page.js",
                            lineNumber: 630,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/portfolio builder/app/page.js",
                        lineNumber: 629,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/portfolio builder/app/page.js",
                lineNumber: 624,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "dd271781609d418d",
                children: ".cursor-blink .glowing-text{animation:2s ease-in-out infinite glow}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/portfolio builder/app/page.js",
        lineNumber: 513,
        columnNumber: 5
    }, this);
}
// HELPER STYLES
const navStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '25px 50px',
    position: 'fixed',
    width: '100%',
    top: 0,
    background: 'rgba(0,0,0,0.8)',
    backdropFilter: 'blur(10px)',
    zIndex: 1000,
    boxSizing: 'border-box'
};
const navLink = {
    color: '#888',
    textDecoration: 'none',
    fontSize: '0.9rem'
};
const subheadingStyle = {
    fontSize: '1.2rem',
    color: '#10b981',
    maxWidth: '800px',
    lineHeight: '1.6',
    fontWeight: '500'
};
const sectionPadding = {
    padding: '100px 50px',
    maxWidth: '1200px',
    margin: '0 auto'
};
const sidebarStyle = {
    position: 'fixed',
    right: 0,
    top: 0,
    width: '380px',
    height: '100vh',
    background: '#fff',
    color: '#000',
    padding: '40px',
    zIndex: 5000,
    boxShadow: '-10px 0 30px rgba(0,0,0,0.1)'
};
const inputStyle = {
    width: '100%',
    padding: '12px',
    border: '1px solid #ddd',
    borderRadius: '10px',
    marginBottom: '15px'
};
const labelStyle = {
    display: 'block',
    fontSize: '0.7rem',
    fontWeight: 'bold',
    color: '#999',
    marginBottom: '5px'
};
const saveBtn = {
    width: '100%',
    padding: '15px',
    background: '#10b981',
    color: '#fff',
    border: 'none',
    borderRadius: '10px',
    fontWeight: 'bold',
    cursor: 'pointer'
};
const cardStyle = {
    padding: '40px',
    background: '#111',
    borderRadius: '25px',
    border: '1px solid #222'
};
const toolBtn = {
    padding: '10px 20px',
    background: '#10b981',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: 'bold'
};
const projCard = {
    padding: '40px',
    border: '1px solid #333',
    borderRadius: '20px'
};
const aiActionBtn = {
    position: 'absolute',
    bottom: '10px',
    right: '10px',
    background: '#000',
    color: '#10b981',
    border: '1px solid #10b981',
    padding: '5px 10px',
    borderRadius: '6px',
    fontSize: '0.7rem',
    cursor: 'pointer'
};
const primaryBtn = {
    padding: '15px 35px',
    background: '#10b981',
    color: '#fff',
    border: 'none',
    borderRadius: '50px',
    fontWeight: 'bold'
};
const secondaryBtn = {
    padding: '15px 35px',
    background: 'transparent',
    color: '#fff',
    border: '1px solid #444',
    borderRadius: '50px'
};
const footerStyle = {
    padding: '80px 50px',
    borderTop: '1px solid #222',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
};
function TemplateCard({ name, color, onSelect }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            background: '#0d0d0d',
            padding: '30px',
            borderRadius: '30px',
            border: '1px solid #222'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    height: '200px',
                    background: color,
                    borderRadius: '15px',
                    marginBottom: '20px',
                    border: '1px solid #333'
                }
            }, void 0, false, {
                fileName: "[project]/Desktop/portfolio builder/app/page.js",
                lineNumber: 669,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                children: name
            }, void 0, false, {
                fileName: "[project]/Desktop/portfolio builder/app/page.js",
                lineNumber: 670,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onSelect,
                style: {
                    width: '100%',
                    marginTop: '20px',
                    padding: '12px',
                    background: '#10b981',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '10px',
                    cursor: 'pointer',
                    fontWeight: 'bold'
                },
                children: "Use Template"
            }, void 0, false, {
                fileName: "[project]/Desktop/portfolio builder/app/page.js",
                lineNumber: 671,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/portfolio builder/app/page.js",
        lineNumber: 668,
        columnNumber: 5
    }, this);
}
// Is function ko file ke bilkul niche paste karein
function ServiceCard({ title, desc }) {
    const [isHovered, setIsHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        onMouseEnter: ()=>setIsHovered(true),
        onMouseLeave: ()=>setIsHovered(false),
        style: {
            padding: '40px',
            background: isHovered ? 'rgba(16, 185, 129, 0.08)' : '#0d0d0d',
            borderRadius: '25px',
            border: isHovered ? '1px solid #10b981' : '1px solid #222',
            transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            transform: isHovered ? 'translateY(-15px) scale(1.03)' : 'translateY(0)',
            boxShadow: isHovered ? '0 20px 40px rgba(16, 185, 129, 0.25)' : 'none',
            cursor: 'pointer',
            position: 'relative',
            overflow: 'hidden'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                style: {
                    color: '#10b981',
                    marginBottom: '15px'
                },
                children: title
            }, void 0, false, {
                fileName: "[project]/Desktop/portfolio builder/app/page.js",
                lineNumber: 696,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    color: '#aaa'
                },
                children: desc
            }, void 0, false, {
                fileName: "[project]/Desktop/portfolio builder/app/page.js",
                lineNumber: 697,
                columnNumber: 7
            }, this),
            isHovered && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'radial-gradient(circle at center, rgba(16, 185, 129, 0.15) 0%, transparent 80%)',
                    zIndex: -1
                }
            }, void 0, false, {
                fileName: "[project]/Desktop/portfolio builder/app/page.js",
                lineNumber: 701,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/portfolio builder/app/page.js",
        lineNumber: 680,
        columnNumber: 5
    }, this);
}
function AuraInteractiveLayer() {
    const canvasRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useRef(null);
    const cursorRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useRef(null);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const cursor = cursorRef.current;
        let W, H, dots = [], raf, mx = -100, my = -100;
        const DOT_SPACING = 28, DOT_RADIUS = 1.3, INFLUENCE = 140, STRENGTH = 60, SPRING = 0.08, DAMPING = 0.78;
        const handleMouseMove = (e)=>{
            mx = e.clientX;
            my = e.clientY;
            if (cursor) {
                cursor.style.left = `${mx}px`;
                cursor.style.top = `${my}px`;
            }
        };
        const resize = ()=>{
            W = canvas.width = window.innerWidth;
            H = canvas.height = window.innerHeight;
            dots = [];
            for(let r = 0; r < Math.ceil(H / DOT_SPACING) + 1; r++){
                for(let c = 0; c < Math.ceil(W / DOT_SPACING) + 1; c++){
                    const ox = c * DOT_SPACING, oy = r * DOT_SPACING;
                    dots.push({
                        ox,
                        oy,
                        x: ox,
                        y: oy,
                        vx: 0,
                        vy: 0
                    });
                }
            }
        };
        const tick = ()=>{
            ctx.clearRect(0, 0, W, H);
            dots.forEach((d)=>{
                const dx = mx - d.ox, dy = my - d.oy, dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < INFLUENCE && dist > 0) {
                    const force = (1 - dist / INFLUENCE) * STRENGTH;
                    d.vx -= dx / dist * force * 0.12;
                    d.vy -= dy / dist * force * 0.12;
                }
                d.vx += (d.ox - d.x) * SPRING;
                d.vy += (d.oy - d.y) * SPRING;
                d.vx *= DAMPING;
                d.vy *= DAMPING;
                d.x += d.vx;
                d.y += d.vy;
                const curDist = Math.sqrt((mx - d.x) ** 2 + (my - d.y) ** 2);
                const alpha = curDist < INFLUENCE ? 0.08 + 0.22 * (curDist / INFLUENCE) : 0.3;
                ctx.beginPath();
                ctx.arc(d.x, d.y, DOT_RADIUS + Math.sqrt(d.vx ** 2 + d.vy ** 2) * 0.3, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(240, 236, 227, ${alpha})`;
                ctx.fill();
            });
            raf = requestAnimationFrame(tick);
        };
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('resize', resize);
        resize();
        tick();
        return ()=>{
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(raf);
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: cursorRef,
                style: {
                    position: 'fixed',
                    width: '10px',
                    height: '10px',
                    background: '#e8d5b0',
                    borderRadius: '50%',
                    pointerEvents: 'none',
                    zIndex: 9999,
                    transform: 'translate(-50%, -50%)',
                    transition: 'transform 0.08s ease',
                    mixBlendMode: 'difference'
                }
            }, void 0, false, {
                fileName: "[project]/Desktop/portfolio builder/app/page.js",
                lineNumber: 777,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                ref: canvasRef,
                style: {
                    position: 'fixed',
                    inset: 0,
                    zIndex: 0,
                    pointerEvents: 'none'
                }
            }, void 0, false, {
                fileName: "[project]/Desktop/portfolio builder/app/page.js",
                lineNumber: 781,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
function MorganInteractiveLayer() {
    const dotRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useRef(null);
    const ringRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useRef(null);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        let cx = 0, cy = 0, rx = 0, ry = 0;
        // Smooth Ring Lerp
        const moveCursor = (e)=>{
            cx = e.clientX;
            cy = e.clientY;
            if (dotRef.current) {
                dotRef.current.style.left = `${cx}px`;
                dotRef.current.style.top = `${cy}px`;
            }
        };
        const animateRing = ()=>{
            rx += (cx - rx) * 0.12;
            ry += (cy - ry) * 0.12;
            if (ringRef.current) {
                ringRef.current.style.left = `${rx}px`;
                ringRef.current.style.top = `${ry}px`;
            }
            requestAnimationFrame(animateRing);
        };
        // Hero Counter Logic
        const counter = document.getElementById('hero-counter');
        let currentCount = 0;
        const target = 342;
        const interval = setInterval(()=>{
            currentCount += Math.ceil((target - currentCount) * 0.07) || 1;
            if (counter) counter.textContent = currentCount.toString().padStart(3, '0');
            if (currentCount >= target) clearInterval(interval);
        }, 30);
        window.addEventListener('mousemove', moveCursor);
        animateRing();
        return ()=>{
            window.removeEventListener('mousemove', moveCursor);
            clearInterval(interval);
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: dotRef,
                style: {
                    position: 'fixed',
                    width: '6px',
                    height: '6px',
                    background: '#c8ff47',
                    borderRadius: '50%',
                    pointerEvents: 'none',
                    zIndex: 9999,
                    transform: 'translate(-50%, -50%)'
                }
            }, void 0, false, {
                fileName: "[project]/Desktop/portfolio builder/app/page.js",
                lineNumber: 830,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: ringRef,
                style: {
                    position: 'fixed',
                    width: '36px',
                    height: '36px',
                    border: '1px solid rgba(200,255,71,0.35)',
                    borderRadius: '50%',
                    pointerEvents: 'none',
                    zIndex: 9999,
                    transform: 'translate(-50%, -50%)'
                }
            }, void 0, false, {
                fileName: "[project]/Desktop/portfolio builder/app/page.js",
                lineNumber: 831,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
// --- YEH SAB KUCH FILE KE BAHAR/NICHE RAHEGA ---
const AestheticShowcase = ()=>{
    const [isHovered, setIsHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const noisePositions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>Array.from({
            length: 4
        }).map(()=>`${Math.random() * 100}% ${Math.random() * 100}%`), []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        style: showcaseContainer,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    ...noiseMesh,
                    backgroundPosition: isHovered ? noisePositions[1] : noisePositions[0],
                    opacity: isHovered ? 0.08 : 0.04
                }
            }, void 0, false, {
                fileName: "[project]/Desktop/portfolio builder/app/page.js",
                lineNumber: 844,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onMouseEnter: ()=>setIsHovered(true),
                onMouseLeave: ()=>setIsHovered(false),
                style: {
                    ...imageWrapper,
                    transform: isHovered ? 'perspective(1000px) scale(1.05) rotateX(1deg)' : 'none'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=2070",
                        style: showcaseImage
                    }, void 0, false, {
                        fileName: "[project]/Desktop/portfolio builder/app/page.js",
                        lineNumber: 850,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            ...rotatingText,
                            animation: isHovered ? 'rotateText 6s linear infinite' : 'rotateText 12s linear infinite'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            viewBox: "0 0 100 100",
                            style: {
                                width: '120px',
                                height: '120px'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    id: "circlePath",
                                    d: "M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0",
                                    fill: "none"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/portfolio builder/app/page.js",
                                    lineNumber: 852,
                                    columnNumber: 82
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                    style: {
                                        fill: '#c8ff47',
                                        fontSize: '10px',
                                        fontWeight: 'bold'
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textPath", {
                                        href: "#circlePath",
                                        children: "✨ AI VISUAL / AESTHETIC / KHATARNAAK ✨"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/portfolio builder/app/page.js",
                                        lineNumber: 852,
                                        columnNumber: 251
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/portfolio builder/app/page.js",
                                    lineNumber: 852,
                                    columnNumber: 179
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/portfolio builder/app/page.js",
                            lineNumber: 852,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/portfolio builder/app/page.js",
                        lineNumber: 851,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/portfolio builder/app/page.js",
                lineNumber: 845,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                dangerouslySetInnerHTML: {
                    __html: `@keyframes rotateText { from { transform: translate(-50%, -50%) rotate(0deg); } to { transform: translate(-50%, -50%) rotate(360deg); } }`
                }
            }, void 0, false, {
                fileName: "[project]/Desktop/portfolio builder/app/page.js",
                lineNumber: 855,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/portfolio builder/app/page.js",
        lineNumber: 843,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
// Styles
const showcaseContainer = {
    padding: '100px 20px',
    textAlign: 'center',
    position: 'relative',
    minHeight: '80vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000'
};
const imageWrapper = {
    position: 'relative',
    width: '100%',
    maxWidth: '900px',
    height: '500px',
    borderRadius: '30px',
    overflow: 'hidden',
    transition: 'all 0.6s ease'
};
const showcaseImage = {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
};
const rotatingText = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    pointerEvents: 'none'
};
const noiseMesh = {
    position: 'absolute',
    inset: 0,
    backgroundImage: "url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27/%3E')",
    zIndex: 1
};
}),
];

//# sourceMappingURL=Desktop_portfolio%20builder_app_page_7d76846f.js.map