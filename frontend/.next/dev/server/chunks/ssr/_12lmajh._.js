module.exports = [
"[project]/components/LoginScreen.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.6_@babel+core@7.29.7_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.6_@babel+core@7.29.7_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.6_@babel+core@7.29.7_@types+node@20.19.43_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$useLanguageStore$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/useLanguageStore.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/translations.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const LoginScreen = ()=>{
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("login");
    const [showPassword, setShowPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [rememberMe, setRememberMe] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const { language, setLanguage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$useLanguageStore$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLanguageStore"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setMounted(true);
    }, []);
    const currentLang = mounted ? language : "bn";
    const t = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["translations"][currentLang];
    const handleSubmit = (e)=>{
        e.preventDefault();
    };
    const handleCheckboxChange = (e)=>{
        setRememberMe(e.target.checked);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-slate-50 flex items-center justify-center p-0 sm:p-6 lg:p-10",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full sm:max-w-md bg-white sm:rounded-3xl shadow-xl border border-slate-100 overflow-hidden min-h-screen sm:min-h-0 flex flex-col justify-between py-6 px-5 sm:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-end mb-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "join border border-slate-200 rounded-full p-0.5 bg-slate-100",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setLanguage("bn"),
                                        className: `join-item btn btn-xs rounded-full border-none ${currentLang === "bn" ? "bg-white text-sky-900 shadow-sm" : "btn-ghost text-slate-500"}`,
                                        children: "বাং"
                                    }, void 0, false, {
                                        fileName: "[project]/components/LoginScreen.tsx",
                                        lineNumber: 40,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setLanguage("en"),
                                        className: `join-item btn btn-xs rounded-full border-none ${currentLang === "en" ? "bg-white text-sky-900 shadow-sm" : "btn-ghost text-slate-500"}`,
                                        children: "EN"
                                    }, void 0, false, {
                                        fileName: "[project]/components/LoginScreen.tsx",
                                        lineNumber: 51,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/LoginScreen.tsx",
                                lineNumber: 39,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/components/LoginScreen.tsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center pt-2 pb-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-sky-50 shadow-inner border border-sky-100 mb-3 text-sky-600",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        viewBox: "0 0 24 24",
                                        fill: "currentColor",
                                        className: "w-8 h-8",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M4 16c0 .88.39 1.67 1 2.22V20c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h8v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1.78c.61-.55 1-1.34 1-2.22V9l-2-6H6L4 9v7zm2-4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm12 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1.5-6l1 3H6.5l1-3h10z"
                                        }, void 0, false, {
                                            fileName: "[project]/components/LoginScreen.tsx",
                                            lineNumber: 73,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/components/LoginScreen.tsx",
                                        lineNumber: 67,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/components/LoginScreen.tsx",
                                    lineNumber: 66,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-2xl font-extrabold text-slate-800",
                                    children: [
                                        t.brandFirst,
                                        " ",
                                        t.brandSecond
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/LoginScreen.tsx",
                                    lineNumber: 77,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-slate-500 mt-1 flex items-center justify-center gap-1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "≈"
                                        }, void 0, false, {
                                            fileName: "[project]/components/LoginScreen.tsx",
                                            lineNumber: 81,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: t.auth.tagline
                                        }, void 0, false, {
                                            fileName: "[project]/components/LoginScreen.tsx",
                                            lineNumber: 82,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/LoginScreen.tsx",
                                    lineNumber: 80,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/LoginScreen.tsx",
                            lineNumber: 65,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-slate-100 p-1 rounded-2xl flex mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setActiveTab("login"),
                                    className: `flex-1 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 ${activeTab === "login" ? "bg-sky-900 text-white shadow-sm" : "text-slate-600 hover:text-slate-900"}`,
                                    children: t.auth.loginTab
                                }, void 0, false, {
                                    fileName: "[project]/components/LoginScreen.tsx",
                                    lineNumber: 87,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setActiveTab("register"),
                                    className: `flex-1 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 ${activeTab === "register" ? "bg-sky-900 text-white shadow-sm" : "text-slate-600 hover:text-slate-900"}`,
                                    children: t.auth.registerTab
                                }, void 0, false, {
                                    fileName: "[project]/components/LoginScreen.tsx",
                                    lineNumber: 98,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/LoginScreen.tsx",
                            lineNumber: 86,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleSubmit,
                            className: "space-y-4",
                            children: [
                                activeTab === "register" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-xs font-semibold text-slate-700 mb-1.5",
                                            children: t.auth.name
                                        }, void 0, false, {
                                            fileName: "[project]/components/LoginScreen.tsx",
                                            lineNumber: 114,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    placeholder: t.auth.namePlaceholder,
                                                    className: "w-full h-12 bg-white rounded-2xl border border-slate-200 px-4 pl-10 text-xs sm:text-sm focus:border-sky-600 focus:outline-none"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/LoginScreen.tsx",
                                                    lineNumber: 118,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    className: "w-4 h-4 absolute left-3.5 top-4 text-slate-400",
                                                    fill: "none",
                                                    viewBox: "0 0 24 24",
                                                    stroke: "currentColor",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: "2",
                                                        d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/LoginScreen.tsx",
                                                        lineNumber: 130,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/LoginScreen.tsx",
                                                    lineNumber: 123,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/LoginScreen.tsx",
                                            lineNumber: 117,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/LoginScreen.tsx",
                                    lineNumber: 113,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-xs font-semibold text-slate-700 mb-1.5",
                                            children: t.auth.phoneOrEmail
                                        }, void 0, false, {
                                            fileName: "[project]/components/LoginScreen.tsx",
                                            lineNumber: 142,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    placeholder: t.auth.phonePlaceholder,
                                                    className: "w-full h-12 bg-white rounded-2xl border border-slate-200 px-4 pl-10 text-xs sm:text-sm focus:border-sky-600 focus:outline-none"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/LoginScreen.tsx",
                                                    lineNumber: 146,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    className: "w-4 h-4 absolute left-3.5 top-4 text-slate-400",
                                                    fill: "none",
                                                    viewBox: "0 0 24 24",
                                                    stroke: "currentColor",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: "2",
                                                        d: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/LoginScreen.tsx",
                                                        lineNumber: 158,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/LoginScreen.tsx",
                                                    lineNumber: 151,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/LoginScreen.tsx",
                                            lineNumber: 145,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/LoginScreen.tsx",
                                    lineNumber: 141,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-xs font-semibold text-slate-700 mb-1.5",
                                            children: t.auth.password
                                        }, void 0, false, {
                                            fileName: "[project]/components/LoginScreen.tsx",
                                            lineNumber: 169,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: showPassword ? "text" : "password",
                                                    placeholder: "••••••••",
                                                    className: "w-full h-12 bg-white rounded-2xl border border-slate-200 px-4 pl-10 pr-10 text-xs sm:text-sm focus:border-sky-600 focus:outline-none"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/LoginScreen.tsx",
                                                    lineNumber: 173,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    className: "w-4 h-4 absolute left-3.5 top-4 text-slate-400",
                                                    fill: "none",
                                                    viewBox: "0 0 24 24",
                                                    stroke: "currentColor",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: "2",
                                                        d: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/LoginScreen.tsx",
                                                        lineNumber: 185,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/LoginScreen.tsx",
                                                    lineNumber: 178,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>setShowPassword(!showPassword),
                                                    className: "absolute right-3.5 top-3.5 text-slate-400 hover:text-slate-600",
                                                    children: showPassword ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        className: "w-5 h-5",
                                                        fill: "none",
                                                        viewBox: "0 0 24 24",
                                                        stroke: "currentColor",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeWidth: "2",
                                                            d: "M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/LoginScreen.tsx",
                                                            lineNumber: 205,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/LoginScreen.tsx",
                                                        lineNumber: 198,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        className: "w-5 h-5",
                                                        fill: "none",
                                                        viewBox: "0 0 24 24",
                                                        stroke: "currentColor",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                strokeWidth: "2",
                                                                d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/LoginScreen.tsx",
                                                                lineNumber: 220,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                strokeWidth: "2",
                                                                d: "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/LoginScreen.tsx",
                                                                lineNumber: 226,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/LoginScreen.tsx",
                                                        lineNumber: 213,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/LoginScreen.tsx",
                                                    lineNumber: 192,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/LoginScreen.tsx",
                                            lineNumber: 172,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/LoginScreen.tsx",
                                    lineNumber: 168,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between text-xs pt-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "flex items-center gap-2 cursor-pointer select-none",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "checkbox",
                                                    checked: rememberMe,
                                                    onChange: handleCheckboxChange,
                                                    className: "checkbox checkbox-xs rounded checkbox-primary"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/LoginScreen.tsx",
                                                    lineNumber: 240,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-slate-600 font-medium",
                                                    children: t.auth.rememberMe
                                                }, void 0, false, {
                                                    fileName: "[project]/components/LoginScreen.tsx",
                                                    lineNumber: 246,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/LoginScreen.tsx",
                                            lineNumber: 239,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        activeTab === "login" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/forgot-password",
                                            className: "text-sky-700 font-semibold hover:underline",
                                            children: t.auth.forgotPass
                                        }, void 0, false, {
                                            fileName: "[project]/components/LoginScreen.tsx",
                                            lineNumber: 252,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/LoginScreen.tsx",
                                    lineNumber: 238,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    className: "w-full h-12 bg-sky-900 hover:bg-sky-950 text-white rounded-2xl flex items-center justify-center gap-2 font-bold text-sm shadow-md active:scale-[0.99] transition-all pt-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: activeTab === "login" ? t.auth.loginBtn : t.auth.registerBtn
                                        }, void 0, false, {
                                            fileName: "[project]/components/LoginScreen.tsx",
                                            lineNumber: 265,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            className: "w-4 h-4",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            stroke: "currentColor",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "2.5",
                                                d: "M14 5l7 7m0 0l-7 7m7-7H3"
                                            }, void 0, false, {
                                                fileName: "[project]/components/LoginScreen.tsx",
                                                lineNumber: 275,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/components/LoginScreen.tsx",
                                            lineNumber: 268,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/LoginScreen.tsx",
                                    lineNumber: 261,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/LoginScreen.tsx",
                            lineNumber: 111,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative my-6 text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 flex items-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full border-t border-slate-200"
                                    }, void 0, false, {
                                        fileName: "[project]/components/LoginScreen.tsx",
                                        lineNumber: 287,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/components/LoginScreen.tsx",
                                    lineNumber: 286,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "relative bg-white px-3 text-[11px] text-slate-400",
                                    children: t.auth.orLoginWith
                                }, void 0, false, {
                                    fileName: "[project]/components/LoginScreen.tsx",
                                    lineNumber: 289,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/LoginScreen.tsx",
                            lineNumber: 285,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: "h-11 rounded-2xl border border-slate-200 bg-white hover:bg-slate-50 flex items-center justify-center gap-2 text-xs font-semibold text-slate-700 transition-colors shadow-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-4 h-4",
                                            viewBox: "0 0 24 24",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    fill: "#4285F4",
                                                    d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/LoginScreen.tsx",
                                                    lineNumber: 300,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    fill: "#34A853",
                                                    d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/LoginScreen.tsx",
                                                    lineNumber: 304,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    fill: "#FBBC05",
                                                    d: "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/LoginScreen.tsx",
                                                    lineNumber: 308,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    fill: "#EA4335",
                                                    d: "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/LoginScreen.tsx",
                                                    lineNumber: 312,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/LoginScreen.tsx",
                                            lineNumber: 299,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: t.auth.google
                                        }, void 0, false, {
                                            fileName: "[project]/components/LoginScreen.tsx",
                                            lineNumber: 317,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/LoginScreen.tsx",
                                    lineNumber: 295,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: "h-11 rounded-2xl border border-slate-200 bg-white hover:bg-slate-50 flex items-center justify-center gap-2 text-xs font-semibold text-slate-700 transition-colors shadow-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-4 h-4 text-[#1877F2]",
                                            fill: "currentColor",
                                            viewBox: "0 0 24 24",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                                            }, void 0, false, {
                                                fileName: "[project]/components/LoginScreen.tsx",
                                                lineNumber: 329,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/components/LoginScreen.tsx",
                                            lineNumber: 324,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: t.auth.facebook
                                        }, void 0, false, {
                                            fileName: "[project]/components/LoginScreen.tsx",
                                            lineNumber: 331,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/LoginScreen.tsx",
                                    lineNumber: 320,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/LoginScreen.tsx",
                            lineNumber: 294,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/LoginScreen.tsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pt-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-center text-xs text-slate-500 mb-4",
                            children: [
                                activeTab === "login" ? t.auth.noAccount : t.auth.haveAccount,
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setActiveTab(activeTab === "login" ? "register" : "login"),
                                    className: "text-sky-800 font-bold hover:underline",
                                    children: activeTab === "login" ? t.auth.registerNow : t.auth.loginTab
                                }, void 0, false, {
                                    fileName: "[project]/components/LoginScreen.tsx",
                                    lineNumber: 339,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/LoginScreen.tsx",
                            lineNumber: 337,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-3 bg-sky-50/70 border border-sky-100 rounded-2xl flex items-center justify-center gap-2 text-sky-800 text-[11px] font-medium text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    className: "w-4 h-4 text-sky-600 shrink-0",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: "2",
                                        d: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                    }, void 0, false, {
                                        fileName: "[project]/components/LoginScreen.tsx",
                                        lineNumber: 358,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/components/LoginScreen.tsx",
                                    lineNumber: 351,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_react$2d$dom$40$19$2e$2$2e$8_react$40$19$2e$2$2e$8_$5f$react$40$19$2e$2$2e$8$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: t.auth.securityBadge
                                }, void 0, false, {
                                    fileName: "[project]/components/LoginScreen.tsx",
                                    lineNumber: 365,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/LoginScreen.tsx",
                            lineNumber: 350,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/LoginScreen.tsx",
                    lineNumber: 336,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/LoginScreen.tsx",
            lineNumber: 36,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/LoginScreen.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = LoginScreen;
}),
"[project]/data/translations.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "translations",
    ()=>translations
]);
const translations = {
    bn: {
        brandFirst: "কক্স",
        brandSecond: "রেন্টাল",
        location: "কলাতলী, কক্সবাজার",
        searchPlaceholder: "গাড়ি বা আবাসন খুঁজুন...",
        nav: {
            home: "হোম",
            help: "হেল্প",
            findCar: "গাড়ি খুঁজুন",
            packages: "প্যাকেজসমূহ",
            vendor: "ভেন্ডর হোন",
            auth: "লগইন / রেজিস্টার",
            profile: "প্রোফাইল",
            bookings: "আমার বুকিং",
            settings: "সেটিংস",
            logout: "লগআউট"
        },
        onboarding: {
            partner: "কক্সবাজার ট্যুরিজম পার্টনার",
            skip: "এড়িয়ে যান",
            subtitle: "কক্সবাজারের সেরা গাড়ি, বাইক ও চান্দের গাড়ি ভাড়া",
            specialTag: "মেরিন ড্রাইভ স্পেশাল রেন্টাল সার্ভিস",
            roadBadge: "লাবণী • সুগন্ধা • ইনানী রোড",
            touristFriendly: "ট্যুরিস্ট ফ্রেন্ডলি",
            slides: [
                {
                    badge: "সহজ বুকিং",
                    title: "গাড়ি, বাইক, চান্দের গাড়ি সহজে খুঁজুন",
                    desc: "ইনানী, হিমছড়ি কিংবা লাবণী পয়েন্ট — আপনার পছন্দের যানবাহন বুক করুন নিমেষেই।"
                },
                {
                    badge: "নিরাপদ যাত্রা",
                    title: "যাচাইকৃত স্থানীয় দক্ষ ড্রাইভার",
                    desc: "মেরিন ড্রাইভ কিংবা পাহাড়ি রাস্তায় অভিজ্ঞ চালক নিয়ে ঘুরে আসুন নিরাপদে।"
                },
                {
                    badge: "বেস্ট প্রাইস",
                    title: "স্বচ্ছ ভাড়া এবং কোনো হিডেন চার্জ নেই",
                    desc: "সরাসরি বুক করুন ফিক্সড রেটে, কোনো প্রকার দালালি বা অতিরিক্ত ফি ছাড়াই।"
                }
            ],
            licensed: "লাইসেন্সপ্রাপ্ত",
            instantBooking: "ইনস্ট্যান্ট বুকিং",
            marineDrive: "মেরিন ড্রাইভ রোড",
            getStarted: "শুরু করুন",
            hasAccount: "ইতিমধ্যে একাউন্ট আছে?",
            loginLink: "লগইন করুন"
        },
        auth: {
            tagline: "কক্সবাজারে আপনার নির্ভরযোগ্য ভ্রমণ সঙ্গী",
            loginTab: "লগইন",
            registerTab: "রেজিস্টার",
            phoneOrEmail: "মোবাইল নম্বর / ইমেইল",
            phonePlaceholder: "017XXXXXXXX বা ইমেইল",
            name: "আপনার পুরো নাম",
            namePlaceholder: "উদাঃ তানভীর আহমেদ",
            password: "পাসওয়ার্ড",
            rememberMe: "মনে রাখুন",
            forgotPass: "পাসওয়ার্ড ভুলে গেছেন?",
            loginBtn: "প্রবেশ করুন",
            registerBtn: "অ্যাকাউন্ট খুলুন",
            orLoginWith: "অথবা এর মাধ্যমে প্রবেশ করুন",
            google: "গুগল",
            facebook: "ফেসবুক",
            noAccount: "অ্যাকাউন্ট নেই?",
            registerNow: "রেজিস্টার করুন",
            haveAccount: "ইতিমধ্যে অ্যাকাউন্ট আছে?",
            securityBadge: "১০০% নিরাপদ ও ওটিপি ভেরিফাইড রেন্টাল সেবা"
        },
        footer: {
            desc: "কক্সবাজারের নয়নাভিরাম সমুদ্র সৈকত ও পাহাড়ি মেরিন ড্রাইভে স্বাচ্ছন্দ্যময় এবং নিরাপদ ভ্রমণের সেরা যানবাহন রেন্টাল প্ল্যাটফর্ম। সেলফ-ড্রাইভ বা চালকসহ নির্ভরযোগ্য কার ও স্কুটার সার্ভিস।",
            popularRoutes: "জনপ্রিয় রুটসমূহ",
            quickLinks: "কুইক লিংক",
            contact: "যোগাযোগ",
            routes: [
                {
                    label: "কলাতলী বিচ ও মেরিন ড্রাইভ",
                    href: "/routes/kolatoli-marine-drive"
                },
                {
                    label: "মেরিন ড্রাইভ রোড রোমাঞ্চ",
                    href: "/routes/marine-drive-adventure"
                },
                {
                    label: "ইনানী বিচ ও পাথুরে সৈকত",
                    href: "/routes/inani-beach"
                },
                {
                    label: "হিমছড়ি ঝর্ণা ও পাহাড়",
                    href: "/routes/himchari"
                },
                {
                    label: "টেকনাফ ও প্রবালদ্বীপ দ্বীপ",
                    href: "/routes/teknaf-saintmartin"
                }
            ],
            links: [
                {
                    label: "গাড়ির তালিকা",
                    href: "/cars"
                },
                {
                    label: "ট্যুর প্যাকেজ",
                    href: "/packages"
                },
                {
                    label: "ভেন্ডর রেজিস্ট্রেশন",
                    href: "/vendor/register"
                },
                {
                    label: "ভ্রমণ নিরাপত্তা ও শর্তাবলী",
                    href: "/terms"
                }
            ],
            address: "হোটেল মোটেল জোন, কলাতলী, কক্সবাজার",
            phone: "+৮৮০ ১৮০০-০০০০০০",
            email: "support@coxrental.com",
            copyright: "© ২০২৪ কক্স রেন্টাল (Cox Rental). সর্বস্বত্ব সংরক্ষিত",
            privacy: "গোপনীয়তা নীতি",
            terms: "শর্তাবলী",
            refund: "রিফান্ড পলিসি"
        }
    },
    en: {
        brandFirst: "Cox",
        brandSecond: "Rental",
        location: "Kolatoli, Cox's Bazar",
        searchPlaceholder: "Search cars or accommodations...",
        nav: {
            home: "Home",
            help: "Help",
            findCar: "Find Cars",
            packages: "Packages",
            vendor: "Become a Vendor",
            auth: "Login / Register",
            profile: "Profile",
            bookings: "My Bookings",
            settings: "Settings",
            logout: "Logout"
        },
        onboarding: {
            partner: "Cox's Bazar Tourism Partner",
            skip: "Skip",
            subtitle: "Best Car, Bike & Chander Gari Rental in Cox's Bazar",
            specialTag: "Marine Drive Special Rental Service",
            roadBadge: "Laboni • Sugandha • Inani Road",
            touristFriendly: "Tourist Friendly",
            slides: [
                {
                    badge: "Easy Booking",
                    title: "Find Cars, Bikes & Jeeps Easily",
                    desc: "Inani, Himchari or Laboni Point — book your preferred vehicle in seconds."
                },
                {
                    badge: "Safe Travel",
                    title: "Verified Local Professional Drivers",
                    desc: "Travel safely along Marine Drive and scenic hilly routes with local experts."
                },
                {
                    badge: "Best Pricing",
                    title: "Transparent Rates & No Hidden Fees",
                    desc: "Direct booking at fixed rates without any middlemen or extra charges."
                }
            ],
            licensed: "Licensed",
            instantBooking: "Instant Booking",
            marineDrive: "Marine Drive Road",
            getStarted: "Get Started",
            hasAccount: "Already have an account?",
            loginLink: "Log In"
        },
        auth: {
            tagline: "Your trusted travel partner in Cox's Bazar",
            loginTab: "Login",
            registerTab: "Register",
            phoneOrEmail: "Mobile Number / Email",
            phonePlaceholder: "017XXXXXXXX or email",
            name: "Full Name",
            namePlaceholder: "e.g. Tanvir Ahmed",
            password: "Password",
            rememberMe: "Remember me",
            forgotPass: "Forgot password?",
            loginBtn: "Sign In",
            registerBtn: "Create Account",
            orLoginWith: "Or continue with",
            google: "Google",
            facebook: "Facebook",
            noAccount: "Don't have an account?",
            registerNow: "Register now",
            haveAccount: "Already have an account?",
            securityBadge: "100% Safe & OTP Verified Rental Service"
        },
        footer: {
            desc: "The premium vehicle rental platform for scenic sea beach & Marine Drive travel in Cox's Bazar. Reliable car & scooter rentals with self-drive or experienced local drivers.",
            popularRoutes: "Popular Routes",
            quickLinks: "Quick Links",
            contact: "Contact Us",
            routes: [
                {
                    label: "Kolatoli Beach & Marine Drive",
                    href: "/routes/kolatoli-marine-drive"
                },
                {
                    label: "Marine Drive Road Trip",
                    href: "/routes/marine-drive-adventure"
                },
                {
                    label: "Inani Beach & Coral Coast",
                    href: "/routes/inani-beach"
                },
                {
                    label: "Himchari Waterfalls & Hills",
                    href: "/routes/himchari"
                },
                {
                    label: "Teknaf & Saint Martin Point",
                    href: "/routes/teknaf-saintmartin"
                }
            ],
            links: [
                {
                    label: "Vehicle Fleet",
                    href: "/cars"
                },
                {
                    label: "Tour Packages",
                    href: "/packages"
                },
                {
                    label: "Vendor Registration",
                    href: "/vendor/register"
                },
                {
                    label: "Travel Safety & Terms",
                    href: "/terms"
                }
            ],
            address: "Hotel Motel Zone, Kolatoli, Cox's Bazar",
            phone: "+880 1800-000000",
            email: "support@coxrental.com",
            copyright: "© 2024 Cox Rental. All rights reserved",
            privacy: "Privacy Policy",
            terms: "Terms of Service",
            refund: "Refund Policy"
        }
    }
};
}),
"[project]/store/useLanguageStore.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useLanguageStore",
    ()=>useLanguageStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$15_$40$types$2b$react$40$19$2e$3$2e$0_react$40$19$2e$2$2e$8$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zustand@5.0.15_@types+react@19.3.0_react@19.2.8/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$15_$40$types$2b$react$40$19$2e$3$2e$0_react$40$19$2e$2$2e$8$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zustand@5.0.15_@types+react@19.3.0_react@19.2.8/node_modules/zustand/esm/middleware.mjs [app-ssr] (ecmascript)");
;
;
const useLanguageStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$15_$40$types$2b$react$40$19$2e$3$2e$0_react$40$19$2e$2$2e$8$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$15_$40$types$2b$react$40$19$2e$3$2e$0_react$40$19$2e$2$2e$8$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["persist"])((set)=>({
        language: "bn",
        setLanguage: (lang)=>set({
                language: lang
            }),
        toggleLanguage: ()=>set((state)=>({
                    language: state.language === "bn" ? "en" : "bn"
                }))
    }), {
    name: "cox-rental-lang",
    storage: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$15_$40$types$2b$react$40$19$2e$3$2e$0_react$40$19$2e$2$2e$8$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createJSONStorage"])(()=>localStorage)
}));
}),
];

//# sourceMappingURL=_12lmajh._.js.map