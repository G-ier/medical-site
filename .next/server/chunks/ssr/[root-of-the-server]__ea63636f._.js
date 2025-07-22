module.exports = {

"[project]/.next-internal/server/app/page/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
}}),
"[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}}),
"[project]/src/shared/lib/utils.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "cn": (()=>cn)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-rsc] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}}),
"[project]/src/shared/ui/container.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Container": (()=>Container),
    "Section": (()=>Section),
    "containerVariants": (()=>containerVariants),
    "sectionVariants": (()=>sectionVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/lib/utils.ts [app-rsc] (ecmascript)");
;
;
;
;
const containerVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cva"])("w-full", {
    variants: {
        maxWidth: {
            sm: "max-w-sm mx-auto",
            md: "max-w-md mx-auto",
            lg: "max-w-lg mx-auto",
            xl: "max-w-xl mx-auto",
            "2xl": "max-w-2xl mx-auto",
            "3xl": "max-w-3xl mx-auto",
            "4xl": "max-w-4xl mx-auto",
            "5xl": "max-w-5xl mx-auto",
            "6xl": "max-w-6xl mx-auto",
            "7xl": "max-w-7xl mx-auto",
            "8xl": "max-w-[1640px] mx-auto",
            "9xl": "max-w-[1860px] mx-auto",
            // 1600px max width for the whole page 
            full: "max-w-full",
            screen: "max-w-screen-2xl mx-auto"
        },
        padding: {
            none: "px-0",
            sm: "px-4",
            md: "px-6",
            lg: "px-8",
            xl: "px-12"
        }
    },
    defaultVariants: {
        maxWidth: "7xl",
        padding: "none"
    }
});
const sectionVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cva"])("w-full", {
    variants: {
        spacing: {
            none: "py-0",
            sm: "py-8",
            md: "py-12",
            lg: "py-16",
            xl: "py-20",
            "2xl": "py-24"
        },
        background: {
            none: "",
            white: "bg-white",
            gray: "bg-gray-50",
            primary: "bg-primary-50"
        }
    },
    defaultVariants: {
        spacing: "none",
        background: "none"
    }
});
const Container = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, maxWidth, padding, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])(containerVariants({
            maxWidth,
            padding,
            className
        })),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/shared/ui/container.tsx",
        lineNumber: 78,
        columnNumber: 7
    }, this);
});
Container.displayName = "Container";
const Section = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, spacing, background, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])(sectionVariants({
            spacing,
            background,
            className
        })),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/shared/ui/container.tsx",
        lineNumber: 91,
        columnNumber: 7
    }, this);
});
Section.displayName = "Section";
;
}}),
"[project]/src/shared/ui/header-minimal.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "HeaderMinimal": (()=>HeaderMinimal),
    "headerMinimalVariants": (()=>headerMinimalVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const HeaderMinimal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call HeaderMinimal() from the server but HeaderMinimal is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/shared/ui/header-minimal.tsx <module evaluation>", "HeaderMinimal");
const headerMinimalVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call headerMinimalVariants() from the server but headerMinimalVariants is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/shared/ui/header-minimal.tsx <module evaluation>", "headerMinimalVariants");
}}),
"[project]/src/shared/ui/header-minimal.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "HeaderMinimal": (()=>HeaderMinimal),
    "headerMinimalVariants": (()=>headerMinimalVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const HeaderMinimal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call HeaderMinimal() from the server but HeaderMinimal is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/shared/ui/header-minimal.tsx", "HeaderMinimal");
const headerMinimalVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call headerMinimalVariants() from the server but headerMinimalVariants is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/shared/ui/header-minimal.tsx", "headerMinimalVariants");
}}),
"[project]/src/shared/ui/header-minimal.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$header$2d$minimal$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/shared/ui/header-minimal.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$header$2d$minimal$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/src/shared/ui/header-minimal.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$header$2d$minimal$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/src/shared/ui/info-bar.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "InfoBar": (()=>InfoBar),
    "infoBarVariants": (()=>infoBarVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const InfoBar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call InfoBar() from the server but InfoBar is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/shared/ui/info-bar.tsx <module evaluation>", "InfoBar");
const infoBarVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call infoBarVariants() from the server but infoBarVariants is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/shared/ui/info-bar.tsx <module evaluation>", "infoBarVariants");
}}),
"[project]/src/shared/ui/info-bar.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "InfoBar": (()=>InfoBar),
    "infoBarVariants": (()=>infoBarVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const InfoBar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call InfoBar() from the server but InfoBar is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/shared/ui/info-bar.tsx", "InfoBar");
const infoBarVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call infoBarVariants() from the server but infoBarVariants is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/shared/ui/info-bar.tsx", "infoBarVariants");
}}),
"[project]/src/shared/ui/info-bar.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$info$2d$bar$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/shared/ui/info-bar.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$info$2d$bar$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/src/shared/ui/info-bar.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$info$2d$bar$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/src/shared/ui/button.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Button": (()=>Button),
    "buttonVariants": (()=>buttonVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const Button = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Button() from the server but Button is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/shared/ui/button.tsx <module evaluation>", "Button");
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call buttonVariants() from the server but buttonVariants is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/shared/ui/button.tsx <module evaluation>", "buttonVariants");
}}),
"[project]/src/shared/ui/button.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Button": (()=>Button),
    "buttonVariants": (()=>buttonVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const Button = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Button() from the server but Button is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/shared/ui/button.tsx", "Button");
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call buttonVariants() from the server but buttonVariants is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/shared/ui/button.tsx", "buttonVariants");
}}),
"[project]/src/shared/ui/button.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$button$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/shared/ui/button.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$button$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/src/shared/ui/button.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$button$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/src/shared/ui/logo.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Logo": (()=>Logo)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/lib/utils.ts [app-rsc] (ecmascript)");
;
;
;
const logoVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cva"])("inline-block", {
    variants: {
        size: {
            small: "w-20 h-auto",
            medium: "w-32 h-auto",
            large: "w-40 h-auto"
        },
        color: {
            default: "[&_path]:fill-black",
            white: "[&_path]:fill-white",
            primary: "[&_path]:fill-primary"
        }
    },
    defaultVariants: {
        size: "medium",
        color: "default"
    }
});
const Logo = ({ size, color, alt = "Rejuve Logo", className, ...props })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "155",
        height: "42",
        viewBox: "0 0 155 42",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])(logoVariants({
            size,
            color
        }), className),
        role: "img",
        "aria-label": alt,
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M14.7783 0.538843C13.7975 0.279971 12.7894 0.153924 11.7783 0.163725C10.2323 0.129418 8.69652 0.435953 7.26921 1.06373C5.84191 1.69151 4.55452 2.62672 3.48941 3.8095C2.37379 4.9296 1.48837 6.27976 0.888184 7.7761C0.287995 9.27245 -0.0141499 10.883 0.000508946 12.5078V27.8763H2.88942V12.5078C2.85017 11.259 3.06602 10.016 3.5223 8.86311C3.97859 7.71018 4.66462 6.67431 5.53386 5.82581C6.34143 4.93455 7.30767 4.22005 8.37726 3.72321C9.44685 3.22636 10.5988 2.95691 11.7672 2.93029C12.7059 2.97422 13.6356 3.14359 14.5339 3.43436L15.1339 3.69226V0.667794L14.7783 0.538843Z"
            }, void 0, false, {
                fileName: "[project]/src/shared/ui/logo.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M57.7792 1.21582V16.1975C57.7961 17.443 57.5701 18.6789 57.1152 19.8284C56.6603 20.9779 55.9862 22.0164 55.1347 22.8794C54.3143 23.7825 53.3243 24.4949 52.228 24.9713C51.1317 25.4477 49.9533 25.6775 48.768 25.646C47.8293 25.6021 46.8997 25.4327 46.0014 25.1419L45.4014 25.0247V28.0492L45.7569 28.1664C46.7388 28.4195 47.7462 28.5455 48.7569 28.5415H48.9347C50.4653 28.5338 51.9796 28.2081 53.3909 27.5831C54.8023 26.958 56.0831 26.0457 57.1602 24.8984C58.2374 23.751 59.0898 22.3911 59.6688 20.8961C60.2478 19.4012 60.5421 17.8006 60.5348 16.1857V1.21582H57.7792Z"
            }, void 0, false, {
                fileName: "[project]/src/shared/ui/logo.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M85.6782 1.21582V16.5843C85.6945 17.8298 85.4681 19.0655 85.0133 20.2149C84.5584 21.3643 83.8846 22.4029 83.0337 23.2663C82.2104 24.1653 81.2198 24.8751 80.1243 25.3512C79.0287 25.8272 77.8516 26.0593 76.667 26.0328C75.4833 26.0523 74.3082 25.8171 73.2136 25.3414C72.1189 24.8657 71.1277 24.1597 70.3003 23.2663C69.4311 22.4178 68.745 21.3819 68.2888 20.229C67.8325 19.076 67.6166 17.833 67.6559 16.5843V1.21582H64.8892V16.5843C64.8744 18.2264 65.176 19.8546 65.7758 21.37C66.3755 22.8854 67.2609 24.2564 68.3781 25.3998C69.4833 26.5621 70.7954 27.4826 72.2389 28.1082C73.6823 28.7339 75.2287 29.0524 76.7892 29.0456C78.3166 29.0749 79.8327 28.7655 81.2395 28.1375C82.6463 27.5095 83.9124 26.5768 84.956 25.3998C86.0605 24.2463 86.9375 22.8734 87.5363 21.3603C88.1351 19.8472 88.4439 18.224 88.4449 16.5843V1.21582H85.6782Z"
            }, void 0, false, {
                fileName: "[project]/src/shared/ui/logo.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M105.378 32.2891C103.933 34.4343 101.655 38.338 102.744 40.0964C102.941 40.4582 103.204 40.7755 103.517 41.0302C103.83 41.2849 104.188 41.4721 104.57 41.5809C104.951 41.6898 105.35 41.7182 105.742 41.6647C106.134 41.6111 106.513 41.4765 106.855 41.2687C107.34 40.9999 107.744 40.594 108.022 40.0964C109.111 38.338 106.944 34.3054 105.378 32.2891Z"
            }, void 0, false, {
                fileName: "[project]/src/shared/ui/logo.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M116.433 0.932617L108.777 16.2073L101.177 1.17879H98.0547L107.188 19.3842L108.755 22.5376L119.555 0.932617H116.433Z"
            }, void 0, false, {
                fileName: "[project]/src/shared/ui/logo.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M105.146 22.312L94.4457 0.917969H91.3234L105.39 29.2635L107.068 25.9929L105.146 22.312Z"
            }, void 0, false, {
                fileName: "[project]/src/shared/ui/logo.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M40.1333 19.4411C39.3349 21.3016 38.0419 22.8775 36.4111 23.9778C34.6284 25.2204 32.5365 25.8772 30.3999 25.8652C29.0211 25.9011 27.6497 25.64 26.3697 25.0978C25.0897 24.5556 23.928 23.7437 22.9555 22.7118C21.0608 20.8225 19.877 18.2747 19.6221 15.5375H44.1333V14.3652C44.1428 13.9007 44.1018 13.4366 44.0111 12.9819C43.7226 9.48572 42.1759 6.23887 39.6889 3.9085C37.1752 1.44701 33.8626 0.0960498 30.4333 0.13378C28.6204 0.111343 26.8222 0.479222 25.1486 1.21492C23.4751 1.95061 21.9613 3.03866 20.6999 4.41257C19.4114 5.73486 18.3943 7.32257 17.712 9.07705C17.0296 10.8315 16.6964 12.7153 16.7332 14.6114C16.7274 16.5099 17.0764 18.3911 17.7603 20.1472C18.4442 21.9033 19.4497 23.4999 20.719 24.8457C21.9884 26.1915 23.4968 27.26 25.1579 27.9901C26.8191 28.7202 28.6004 29.0976 30.3999 29.1007C33.2413 29.1219 36.0169 28.1991 38.3333 26.463C40.5553 24.7884 42.2659 22.4662 43.2555 19.7811L40.1333 19.4411ZM23.0666 5.95998C25.0614 4.02589 27.6917 2.98734 30.3999 3.06446C33.0994 3.04138 35.7115 4.07274 37.7333 5.95998C39.6186 7.72246 40.854 10.1301 41.2222 12.7592H19.5888C19.9577 10.133 21.1884 7.7268 23.0666 5.95998Z"
            }, void 0, false, {
                fileName: "[project]/src/shared/ui/logo.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M143.336 19.4408C142.534 21.3028 141.237 22.8789 139.603 23.9775C137.824 25.2198 135.736 25.8767 133.602 25.8648C132.222 25.8996 130.849 25.6381 129.568 25.096C128.286 24.5539 127.122 23.7426 126.147 22.7114C124.256 20.819 123.073 18.2729 122.814 15.5371H147.336V14.3648C147.34 13.9006 147.299 13.4371 147.214 12.9816C146.924 9.44903 145.38 6.16234 142.891 3.77922C140.276 1.26305 136.84 -0.0893504 133.301 0.00458538C129.762 0.0985211 126.395 1.63152 123.902 4.28329C122.612 5.60387 121.593 7.19128 120.911 8.94616C120.228 10.701 119.896 12.5856 119.936 14.4821C119.931 16.3802 120.281 18.2607 120.966 20.0161C121.65 21.7715 122.656 23.3675 123.925 24.713C125.194 26.0585 126.702 27.127 128.362 27.8577C130.023 28.5883 131.803 28.9668 133.602 28.9714C136.444 28.9829 139.218 28.0565 141.536 26.322C143.758 24.6474 145.468 22.3252 146.458 19.6401L143.336 19.4408ZM126.147 5.95965C128.14 4.02341 130.772 2.98452 133.48 3.06413C136.18 3.04104 138.792 4.07241 140.814 5.95965C142.691 7.72901 143.924 10.1333 144.303 12.7588H122.669C123.044 10.1295 124.283 7.72284 126.169 5.95965H126.147Z"
            }, void 0, false, {
                fileName: "[project]/src/shared/ui/logo.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M149.001 1.55099H147.89V0.917969H150.779V1.42204H149.668V4.4465H149.068V1.55099H149.001Z"
            }, void 0, false, {
                fileName: "[project]/src/shared/ui/logo.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M154.29 4.44944V2.18696L153.179 4.07432H152.945L151.834 2.18696V4.44944H151.234V0.932617H151.712L153.034 3.20683L154.357 0.932617H154.845V4.44944H154.29Z"
            }, void 0, false, {
                fileName: "[project]/src/shared/ui/logo.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/shared/ui/logo.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
};
}}),
"[project]/src/shared/ui/contact-info.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ContactInfo": (()=>ContactInfo),
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/lib/utils.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/button.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$logo$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/logo.tsx [app-rsc] (ecmascript)");
;
;
;
;
const ContactInfo = ({ phone, email, ctaText, ctaHref, className })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])('space-y-6', className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$logo$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Logo"], {
                    size: "medium",
                    color: "default",
                    alt: "Rejuve Logo"
                }, void 0, false, {
                    fileName: "[project]/src/shared/ui/contact-info.tsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/shared/ui/contact-info.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: `tel:${phone.replace(/\D/g, '')}`,
                            className: "text-sm text-gray-900 hover:text-gray-700 transition-colors duration-200",
                            children: phone
                        }, void 0, false, {
                            fileName: "[project]/src/shared/ui/contact-info.tsx",
                            lineNumber: 35,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/shared/ui/contact-info.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: `mailto:${email}`,
                            className: "text-sm text-gray-900 hover:text-gray-700 transition-colors duration-200",
                            children: email
                        }, void 0, false, {
                            fileName: "[project]/src/shared/ui/contact-info.tsx",
                            lineNumber: 43,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/shared/ui/contact-info.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/shared/ui/contact-info.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Button"], {
                    variant: "default",
                    size: "sm",
                    className: "rounded-full px-6 py-2",
                    asChild: true,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: ctaHref,
                        children: ctaText
                    }, void 0, false, {
                        fileName: "[project]/src/shared/ui/contact-info.tsx",
                        lineNumber: 60,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/shared/ui/contact-info.tsx",
                    lineNumber: 54,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/shared/ui/contact-info.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/shared/ui/contact-info.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = ContactInfo;
}}),
"[project]/src/shared/ui/footer-column.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "FooterColumn": (()=>FooterColumn),
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/lib/utils.ts [app-rsc] (ecmascript)");
;
;
const FooterColumn = ({ title, links, className })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])('space-y-4', className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-sm font-semibold text-gray-900 uppercase tracking-wider",
                children: title
            }, void 0, false, {
                fileName: "[project]/src/shared/ui/footer-column.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "space-y-3",
                children: links.map((link, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: link.href,
                            target: link.isExternal ? '_blank' : undefined,
                            rel: link.isExternal ? 'noopener noreferrer' : undefined,
                            className: "text-sm text-gray-900 hover:text-gray-700 transition-colors duration-200",
                            children: link.label
                        }, void 0, false, {
                            fileName: "[project]/src/shared/ui/footer-column.tsx",
                            lineNumber: 27,
                            columnNumber: 13
                        }, this)
                    }, index, false, {
                        fileName: "[project]/src/shared/ui/footer-column.tsx",
                        lineNumber: 26,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/shared/ui/footer-column.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/shared/ui/footer-column.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = FooterColumn;
}}),
"[project]/src/shared/ui/social-icon.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "SocialIcon": (()=>SocialIcon),
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/lib/utils.ts [app-rsc] (ecmascript)");
;
;
const iconData = {
    facebook: {
        viewBox: '0 0 32 33',
        path: 'M29.3337 16.6121C29.3337 9.20328 23.3642 3.19727 16.0003 3.19727C8.63653 3.19727 2.66699 9.20328 2.66699 16.6121C2.66699 23.3077 7.54278 28.8575 13.917 29.8639V20.4898H10.5316V16.6121H13.917V13.6566C13.917 10.2945 15.9077 8.43743 18.9531 8.43743C20.4121 8.43743 21.9378 8.69944 21.9378 8.69944V12.0007H20.2566C18.6003 12.0007 18.0837 13.0349 18.0837 14.0958V16.6121H21.7815L21.1905 20.4898H18.0837V29.8639C24.4579 28.8575 29.3337 23.3079 29.3337 16.6121Z'
    },
    instagram: {
        viewBox: '0 0 24 25',
        path: 'M17.3333 0.530273H6.66667C2.98477 0.530273 0 3.51505 0 7.19694V17.8636C0 21.5455 2.98477 24.5303 6.66667 24.5303H17.3333C21.0152 24.5303 24 21.5455 24 17.8636V7.19694C24 3.51505 21.0152 0.530273 17.3333 0.530273ZM21.6667 17.8636C21.6593 20.2537 19.7235 22.1896 17.3333 22.1969H6.66667C4.27647 22.1896 2.34065 20.2537 2.33333 17.8636V7.19694C2.34065 4.80674 4.27647 2.87093 6.66667 2.86361H17.3333C19.7235 2.87093 21.6593 4.80674 21.6667 7.19694V17.8636ZM18.3333 7.53027C19.0697 7.53027 19.6667 6.93331 19.6667 6.19694C19.6667 5.46057 19.0697 4.86361 18.3333 4.86361C17.5969 4.86361 17 5.46057 17 6.19694C17 6.93331 17.5969 7.53027 18.3333 7.53027ZM12 6.53027C8.68629 6.53027 6 9.21657 6 12.5303C6 15.844 8.68629 18.5303 12 18.5303C15.3137 18.5303 18 15.844 18 12.5303C18.0036 10.9379 17.3725 9.4097 16.2465 8.28371C15.1205 7.15773 13.5924 6.52673 12 6.53027ZM8.33333 12.5303C8.33333 14.5553 9.97493 16.1969 12 16.1969C14.0251 16.1969 15.6667 14.5553 15.6667 12.5303C15.6667 10.5052 14.0251 8.86361 12 8.86361C9.97493 8.86361 8.33333 10.5052 8.33333 12.5303Z'
    },
    twitter: {
        viewBox: '0 0 24 23',
        path: 'M18.9015 0.863281H22.5816L14.5415 9.89981L24 22.1966H16.5941L10.7935 14.7387L4.15631 22.1966H0.47392L9.07356 12.531L0 0.863281H7.59393L12.8372 7.68011L18.9015 0.863281ZM17.6097 20.0305H19.6491L6.48588 2.91565H4.2976L17.6097 20.0305Z'
    },
    tiktok: {
        viewBox: '0 0 32 33',
        path: 'M21.6848 8.42601C20.7917 7.40619 20.2996 6.09675 20.2997 4.74121H16.262V20.9439C16.2316 21.8209 15.8616 22.6518 15.2302 23.2613C14.5988 23.8708 13.7554 24.211 12.8778 24.2106C11.0224 24.2106 9.48048 22.6949 9.48048 20.8133C9.48048 18.5658 11.6496 16.8801 13.8839 17.5727V13.4437C9.37594 12.8426 5.42981 16.3445 5.42981 20.8133C5.42981 25.1644 9.03621 28.2613 12.8647 28.2613C16.9676 28.2613 20.2997 24.9292 20.2997 20.8133V12.5943C21.9369 13.7701 23.9027 14.4009 25.9184 14.3975V10.3599C25.9184 10.3599 23.4618 10.4775 21.6848 8.42601Z'
    },
    linkedin: {
        viewBox: '0 0 32 33',
        path: 'M6 4.53027C4.89543 4.53027 4 5.4257 4 6.53027V26.5303C4 27.6348 4.89543 28.5303 6 28.5303H26C27.1045 28.5303 28 27.6348 28 26.5303V6.53027C28 5.4257 27.1045 4.53027 26 4.53027H6ZM11.361 9.86723C11.3685 11.1422 10.4141 11.9279 9.28164 11.9222C8.21476 11.9166 7.28476 11.0672 7.29039 9.86911C7.29601 8.74223 8.18664 7.83661 9.34352 7.86286C10.5173 7.88911 11.3685 8.74974 11.361 9.86723ZM16.3729 13.546H13.0129H13.0111V24.9591H16.5623V24.6928C16.5623 24.1863 16.5619 23.6796 16.5615 23.1728C16.5604 21.8211 16.5592 20.4679 16.5661 19.1165C16.568 18.7884 16.5829 18.4472 16.6673 18.134C16.9841 16.964 18.0361 16.2084 19.2099 16.3941C19.9636 16.5121 20.4623 16.9491 20.6723 17.6597C20.8017 18.104 20.8599 18.5821 20.8655 19.0453C20.8807 20.4421 20.8785 21.8389 20.8764 23.2359C20.8756 23.7289 20.8748 24.2223 20.8748 24.7153V24.9572H24.4373V24.6835C24.4373 24.0808 24.4371 23.4783 24.4367 22.8757C24.436 21.3697 24.4352 19.8637 24.4392 18.3572C24.4411 17.6765 24.368 17.0053 24.2011 16.3472C23.9517 15.3684 23.4361 14.5584 22.598 13.9735C22.0036 13.5572 21.3511 13.2891 20.6217 13.2591C20.5387 13.2556 20.4549 13.2511 20.3708 13.2466C19.9979 13.2264 19.6188 13.2059 19.2623 13.2778C18.2423 13.4822 17.3461 13.9491 16.6692 14.7721C16.5905 14.8665 16.5136 14.9624 16.3988 15.1055L16.3729 15.1379V13.546ZM7.57552 24.9628H11.1099V13.5534H7.57552V24.9628Z'
    }
};
const sizeClasses = {
    sm: 'w-5 h-5',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
};
const SocialIcon = ({ platform, href, size = 'md', className })=>{
    const icon = iconData[platform];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        href: href,
        target: "_blank",
        rel: "noopener noreferrer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])('inline-flex items-center justify-center text-gray-600 hover:text-gray-900 transition-colors duration-200', className),
        "aria-label": `Follow us on ${platform}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])(sizeClasses[size]),
            fill: "currentColor",
            viewBox: icon.viewBox,
            "aria-hidden": "true",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fillRule: "evenodd",
                d: icon.path,
                clipRule: "evenodd"
            }, void 0, false, {
                fileName: "[project]/src/shared/ui/social-icon.tsx",
                lineNumber: 65,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/shared/ui/social-icon.tsx",
            lineNumber: 59,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/shared/ui/social-icon.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = SocialIcon;
}}),
"[project]/src/shared/ui/social-links.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "SocialLinks": (()=>SocialLinks),
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/lib/utils.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$social$2d$icon$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/social-icon.tsx [app-rsc] (ecmascript)");
;
;
;
const SocialLinks = ({ links, size = 'md', className })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])('flex items-center space-x-4', className),
        children: links.map((link, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$social$2d$icon$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SocialIcon"], {
                platform: link.platform,
                href: link.href,
                size: size
            }, index, false, {
                fileName: "[project]/src/shared/ui/social-links.tsx",
                lineNumber: 24,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/shared/ui/social-links.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = SocialLinks;
}}),
"[project]/src/shared/ui/legal-text.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "LegalText": (()=>LegalText),
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/lib/utils.ts [app-rsc] (ecmascript)");
;
;
const variantClasses = {
    default: 'text-sm text-gray-900 leading-relaxed',
    disclaimer: 'text-xs text-gray-600 leading-relaxed',
    small: 'text-xs text-gray-500 leading-normal'
};
const LegalText = ({ children, variant = 'default', className })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])(variantClasses[variant], className),
        children: children
    }, void 0, false, {
        fileName: "[project]/src/shared/ui/legal-text.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = LegalText;
}}),
"[project]/src/shared/ui/legal-links.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "LegalLinks": (()=>LegalLinks),
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/lib/utils.ts [app-rsc] (ecmascript)");
;
;
const LegalLinks = ({ links, copyright, className })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])('flex flex-col gap-2.5', className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center gap-6",
                children: links.map((link, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: link.href,
                        className: "text-xs text-gray-600 hover:text-gray-900 transition-colors duration-200 underline py-3 px-2 min-h-[44px] flex items-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-sm",
                        children: link.label
                    }, index, false, {
                        fileName: "[project]/src/shared/ui/legal-links.tsx",
                        lineNumber: 25,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/shared/ui/legal-links.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-xs text-gray-600",
                children: copyright
            }, void 0, false, {
                fileName: "[project]/src/shared/ui/legal-links.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/shared/ui/legal-links.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = LegalLinks;
}}),
"[project]/src/shared/ui/us-flag.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "USFlag": (()=>USFlag)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/lib/utils.ts [app-rsc] (ecmascript)");
;
;
;
const usFlagVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cva"])("inline-block", {
    variants: {
        size: {
            small: "w-12 h-auto",
            medium: "w-16 h-auto",
            large: "w-20 h-auto"
        }
    },
    defaultVariants: {
        size: "medium"
    }
});
const USFlag = ({ size, alt = "US Flag", className, ...props })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "76",
        height: "47",
        viewBox: "0 0 76 47",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])(usFlagVariants({
            size
        }), className),
        role: "img",
        "aria-label": alt,
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("mask", {
                id: "mask0_1_974",
                style: {
                    maskType: "luminance"
                },
                maskUnits: "userSpaceOnUse",
                x: "0",
                y: "0",
                width: "76",
                height: "47",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M75.6709 0.200195H0.568436V46.9307H75.6709V0.200195Z",
                    fill: "white"
                }, void 0, false, {
                    fileName: "[project]/src/shared/ui/us-flag.tsx",
                    lineNumber: 46,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/shared/ui/us-flag.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                mask: "url(#mask0_1_974)",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M74.4019 1.31348H30.2559V9.991H74.4019V1.31348Z",
                        stroke: "#171717",
                        strokeWidth: "2",
                        strokeMiterlimit: "10"
                    }, void 0, false, {
                        fileName: "[project]/src/shared/ui/us-flag.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M74.4019 9.99316H30.2559V18.6707H74.4019V9.99316Z",
                        stroke: "#171717",
                        strokeWidth: "2",
                        strokeMiterlimit: "10"
                    }, void 0, false, {
                        fileName: "[project]/src/shared/ui/us-flag.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M74.4019 18.6729H30.2559V27.3504H74.4019V18.6729Z",
                        stroke: "#171717",
                        strokeWidth: "2",
                        strokeMiterlimit: "10"
                    }, void 0, false, {
                        fileName: "[project]/src/shared/ui/us-flag.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M74.4003 27.3525H2.2364V36.03H74.4003V27.3525Z",
                        stroke: "#171717",
                        strokeWidth: "2",
                        strokeMiterlimit: "10"
                    }, void 0, false, {
                        fileName: "[project]/src/shared/ui/us-flag.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M74.4003 36.0283H2.2364V44.7059H74.4003V36.0283Z",
                        stroke: "#171717",
                        strokeWidth: "2",
                        strokeMiterlimit: "10"
                    }, void 0, false, {
                        fileName: "[project]/src/shared/ui/us-flag.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M30.2559 1.31348H2.2364V27.3505H30.2559V1.31348Z",
                        stroke: "#171717",
                        strokeWidth: "2",
                        strokeMiterlimit: "10"
                    }, void 0, false, {
                        fileName: "[project]/src/shared/ui/us-flag.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M8.17 7.12988C8.44614 7.12988 8.67 6.90603 8.67 6.62988C8.67 6.35374 8.44614 6.12988 8.17 6.12988C7.89386 6.12988 7.67 6.35374 7.67 6.62988C7.67 6.90603 7.89386 7.12988 8.17 7.12988Z",
                        stroke: "black"
                    }, void 0, false, {
                        fileName: "[project]/src/shared/ui/us-flag.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M8.17 15.1299C8.44614 15.1299 8.67 14.906 8.67 14.6299C8.67 14.3537 8.44614 14.1299 8.17 14.1299C7.89386 14.1299 7.67 14.3537 7.67 14.6299C7.67 14.906 7.89386 15.1299 8.17 15.1299Z",
                        stroke: "black"
                    }, void 0, false, {
                        fileName: "[project]/src/shared/ui/us-flag.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M8.17 23.1299C8.44614 23.1299 8.67 22.906 8.67 22.6299C8.67 22.3537 8.44614 22.1299 8.17 22.1299C7.89386 22.1299 7.67 22.3537 7.67 22.6299C7.67 22.906 7.89386 23.1299 8.17 23.1299Z",
                        stroke: "black"
                    }, void 0, false, {
                        fileName: "[project]/src/shared/ui/us-flag.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M12.17 11.1299C12.4461 11.1299 12.67 10.906 12.67 10.6299C12.67 10.3537 12.4461 10.1299 12.17 10.1299C11.8939 10.1299 11.67 10.3537 11.67 10.6299C11.67 10.906 11.8939 11.1299 12.17 11.1299Z",
                        stroke: "black"
                    }, void 0, false, {
                        fileName: "[project]/src/shared/ui/us-flag.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M12.17 19.1299C12.4461 19.1299 12.67 18.906 12.67 18.6299C12.67 18.3537 12.4461 18.1299 12.17 18.1299C11.8939 18.1299 11.67 18.3537 11.67 18.6299C11.67 18.906 11.8939 19.1299 12.17 19.1299Z",
                        stroke: "black"
                    }, void 0, false, {
                        fileName: "[project]/src/shared/ui/us-flag.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M16.17 7.12988C16.4461 7.12988 16.67 6.90603 16.67 6.62988C16.67 6.35374 16.4461 6.12988 16.17 6.12988C15.8939 6.12988 15.67 6.35374 15.67 6.62988C15.67 6.90603 15.8939 7.12988 16.17 7.12988Z",
                        stroke: "black"
                    }, void 0, false, {
                        fileName: "[project]/src/shared/ui/us-flag.tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M16.17 15.1299C16.4461 15.1299 16.67 14.906 16.67 14.6299C16.67 14.3537 16.4461 14.1299 16.17 14.1299C15.8939 14.1299 15.67 14.3537 15.67 14.6299C15.67 14.906 15.8939 15.1299 16.17 15.1299Z",
                        stroke: "black"
                    }, void 0, false, {
                        fileName: "[project]/src/shared/ui/us-flag.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M16.17 23.1299C16.4461 23.1299 16.67 22.906 16.67 22.6299C16.67 22.3537 16.4461 22.1299 16.17 22.1299C15.8939 22.1299 15.67 22.3537 15.67 22.6299C15.67 22.906 15.8939 23.1299 16.17 23.1299Z",
                        stroke: "black"
                    }, void 0, false, {
                        fileName: "[project]/src/shared/ui/us-flag.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M20.17 11.1299C20.4461 11.1299 20.67 10.906 20.67 10.6299C20.67 10.3537 20.4461 10.1299 20.17 10.1299C19.8939 10.1299 19.67 10.3537 19.67 10.6299C19.67 10.906 19.8939 11.1299 20.17 11.1299Z",
                        stroke: "black"
                    }, void 0, false, {
                        fileName: "[project]/src/shared/ui/us-flag.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M20.17 19.1299C20.4461 19.1299 20.67 18.906 20.67 18.6299C20.67 18.3537 20.4461 18.1299 20.17 18.1299C19.8939 18.1299 19.67 18.3537 19.67 18.6299C19.67 18.906 19.8939 19.1299 20.17 19.1299Z",
                        stroke: "black"
                    }, void 0, false, {
                        fileName: "[project]/src/shared/ui/us-flag.tsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M24.17 7.12988C24.4461 7.12988 24.67 6.90603 24.67 6.62988C24.67 6.35374 24.4461 6.12988 24.17 6.12988C23.8939 6.12988 23.67 6.35374 23.67 6.62988C23.67 6.90603 23.8939 7.12988 24.17 7.12988Z",
                        stroke: "black"
                    }, void 0, false, {
                        fileName: "[project]/src/shared/ui/us-flag.tsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M24.17 15.1299C24.4461 15.1299 24.67 14.906 24.67 14.6299C24.67 14.3537 24.4461 14.1299 24.17 14.1299C23.8939 14.1299 23.67 14.3537 23.67 14.6299C23.67 14.906 23.8939 15.1299 24.17 15.1299Z",
                        stroke: "black"
                    }, void 0, false, {
                        fileName: "[project]/src/shared/ui/us-flag.tsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M24.17 23.1299C24.4461 23.1299 24.67 22.906 24.67 22.6299C24.67 22.3537 24.4461 22.1299 24.17 22.1299C23.8939 22.1299 23.67 22.3537 23.67 22.6299C23.67 22.906 23.8939 23.1299 24.17 23.1299Z",
                        stroke: "black"
                    }, void 0, false, {
                        fileName: "[project]/src/shared/ui/us-flag.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/shared/ui/us-flag.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/shared/ui/us-flag.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
};
}}),
"[project]/src/shared/ui/footer.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Footer": (()=>Footer),
    "footerVariants": (()=>footerVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/lib/utils.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$container$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/container.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$contact$2d$info$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/contact-info.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$footer$2d$column$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/footer-column.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$social$2d$links$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/social-links.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$legal$2d$text$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/legal-text.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$legal$2d$links$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/legal-links.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$us$2d$flag$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/us-flag.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
const footerVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cva"])("relative bg-[#e7e5f4] border-t border-white/20", {
    variants: {
        horizontalMargin: {
            none: "",
            sm: "mx-2",
            md: "mx-4",
            lg: "mx-6",
            xl: "mx-8"
        },
        borderRadius: {
            none: "rounded-none",
            sm: "rounded-sm",
            md: "rounded-md",
            lg: "rounded-lg",
            xl: "rounded-xl",
            "2xl": "rounded-2xl",
            "3xl": "rounded-3xl"
        }
    },
    defaultVariants: {
        horizontalMargin: "md",
        borderRadius: "2xl"
    }
});
const Footer = ({ data, className, horizontalMargin = "md", borderRadius = "2xl" })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])(footerVariants({
            horizontalMargin,
            borderRadius
        }), className),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$container$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Container"], {
            maxWidth: "9xl",
            className: "py-12 px-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-3",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$contact$2d$info$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ContactInfo"], {
                                phone: data.contact.phone,
                                email: data.contact.email,
                                ctaText: data.contact.ctaText,
                                ctaHref: data.contact.ctaHref
                            }, void 0, false, {
                                fileName: "[project]/src/shared/ui/footer.tsx",
                                lineNumber: 95,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/shared/ui/footer.tsx",
                            lineNumber: 94,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 sm:grid-cols-2 gap-8",
                                children: data.columns.map((column, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$footer$2d$column$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FooterColumn"], {
                                        title: column.title,
                                        links: column.links
                                    }, index, false, {
                                        fileName: "[project]/src/shared/ui/footer.tsx",
                                        lineNumber: 107,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/shared/ui/footer.tsx",
                                lineNumber: 105,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/shared/ui/footer.tsx",
                            lineNumber: 104,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-3"
                        }, void 0, false, {
                            fileName: "[project]/src/shared/ui/footer.tsx",
                            lineNumber: 117,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/shared/ui/footer.tsx",
                    lineNumber: 92,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "my-8 py-8 border-t border-b border-[#171717]/20",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center space-x-6",
                                children: data.middleLinks.map((link, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: link.href,
                                        className: "text-sm text-gray-900 hover:text-gray-700 transition-colors duration-200",
                                        children: link.label
                                    }, index, false, {
                                        fileName: "[project]/src/shared/ui/footer.tsx",
                                        lineNumber: 125,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/shared/ui/footer.tsx",
                                lineNumber: 123,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$social$2d$links$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SocialLinks"], {
                                links: data.socialLinks,
                                size: "sm"
                            }, void 0, false, {
                                fileName: "[project]/src/shared/ui/footer.tsx",
                                lineNumber: 134,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/shared/ui/footer.tsx",
                        lineNumber: 122,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/shared/ui/footer.tsx",
                    lineNumber: 121,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex mt-8 pt-8  mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-8  min-w-[300px] max-[800px]:hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start justify-between",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col items-start space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm font-medium text-gray-900",
                                            children: "Compounded"
                                        }, void 0, false, {
                                            fileName: "[project]/src/shared/ui/footer.tsx",
                                            lineNumber: 145,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$us$2d$flag$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["USFlag"], {
                                            size: "medium",
                                            alt: "US Flag"
                                        }, void 0, false, {
                                            fileName: "[project]/src/shared/ui/footer.tsx",
                                            lineNumber: 148,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm font-medium text-gray-900",
                                            children: "in the U.S.A."
                                        }, void 0, false, {
                                            fileName: "[project]/src/shared/ui/footer.tsx",
                                            lineNumber: 149,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/shared/ui/footer.tsx",
                                    lineNumber: 144,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/shared/ui/footer.tsx",
                                lineNumber: 142,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/shared/ui/footer.tsx",
                            lineNumber: 141,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-8",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$legal$2d$text$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LegalText"], {
                                        variant: "disclaimer",
                                        children: data.legalDisclaimer
                                    }, void 0, false, {
                                        fileName: "[project]/src/shared/ui/footer.tsx",
                                        lineNumber: 159,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/shared/ui/footer.tsx",
                                    lineNumber: 158,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$legal$2d$links$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LegalLinks"], {
                                    links: data.legalLinks,
                                    copyright: data.copyright
                                }, void 0, false, {
                                    fileName: "[project]/src/shared/ui/footer.tsx",
                                    lineNumber: 163,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/shared/ui/footer.tsx",
                            lineNumber: 156,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/shared/ui/footer.tsx",
                    lineNumber: 139,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-8  min-w-[300px] hidden max-[800px]:block",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start justify-between",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-start space-y-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm font-medium text-gray-900",
                                    children: "Compounded"
                                }, void 0, false, {
                                    fileName: "[project]/src/shared/ui/footer.tsx",
                                    lineNumber: 170,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$us$2d$flag$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["USFlag"], {
                                    size: "medium",
                                    alt: "US Flag"
                                }, void 0, false, {
                                    fileName: "[project]/src/shared/ui/footer.tsx",
                                    lineNumber: 173,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm font-medium text-gray-900",
                                    children: "in the U.S.A."
                                }, void 0, false, {
                                    fileName: "[project]/src/shared/ui/footer.tsx",
                                    lineNumber: 174,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/shared/ui/footer.tsx",
                            lineNumber: 169,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/shared/ui/footer.tsx",
                        lineNumber: 167,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/shared/ui/footer.tsx",
                    lineNumber: 166,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/shared/ui/footer.tsx",
            lineNumber: 90,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/shared/ui/footer.tsx",
        lineNumber: 84,
        columnNumber: 5
    }, this);
};
;
}}),
"[externals]/crypto [external] (crypto, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}}),
"[project]/src/shared/lib/sanity.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ABOUT_US_QUERY": (()=>ABOUT_US_QUERY),
    "CONTACT_QUERY": (()=>CONTACT_QUERY),
    "GLOBAL_FAQ_QUERY": (()=>GLOBAL_FAQ_QUERY),
    "GLOBAL_FOOTER_QUERY": (()=>GLOBAL_FOOTER_QUERY),
    "GLOBAL_INFO_BAR_QUERY": (()=>GLOBAL_INFO_BAR_QUERY),
    "HERO_TEST_QUERY": (()=>HERO_TEST_QUERY),
    "HOMEPAGE_QUERY": (()=>HOMEPAGE_QUERY),
    "WEIGHT_LOSS_SOLUTIONS_QUERY": (()=>WEIGHT_LOSS_SOLUTIONS_QUERY),
    "client": (()=>client),
    "getSanityImageUrl": (()=>getSanityImageUrl),
    "urlFor": (()=>urlFor)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$client$2f$dist$2f$index$2e$browser$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@sanity/client/dist/index.browser.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$image$2d$url$2f$lib$2f$node$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/image-url/lib/node/index.js [app-rsc] (ecmascript)");
;
;
const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$client$2f$dist$2f$index$2e$browser$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])({
    projectId: ("TURBOPACK compile-time value", "9i6fggwc"),
    dataset: ("TURBOPACK compile-time value", "production") || 'production',
    useCdn: true,
    apiVersion: '2025-07-13',
    perspective: 'published'
});
// Image URL builder
const builder = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$image$2d$url$2f$lib$2f$node$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(client);
function urlFor(source) {
    if (!source || !source.asset) {
        console.log('❌ Invalid source for urlFor:', source);
        return {
            url: ()=>'/placeholder-image.png'
        };
    }
    console.log('🔍 urlFor processing source:', source.asset._id ? `Asset ID: ${source.asset._id}` : 'Source has no asset ID');
    try {
        const imageBuilder = builder.image(source);
        return imageBuilder;
    } catch (error) {
        console.log('❌ Error in urlFor:', error);
        return {
            url: ()=>'/placeholder-image.png'
        };
    }
}
function getSanityImageUrl(source) {
    if (!source || !source.asset) {
        return '/placeholder-image.png';
    }
    try {
        // If we already have a URL directly, use it
        if (source.asset.url) {
            return source.asset.url;
        }
        // Otherwise use the builder
        return builder.image(source).url();
    } catch (error) {
        console.log('❌ Error getting direct Sanity image URL:', error);
        return '/placeholder-image.png';
    }
}
const HOMEPAGE_QUERY = `*[_type == "homePage"][0]{
  _id,
  title,
  weightLossIntroSection{
    title,
    subtitle,
    medications[]{
      title,
      price,
      cta{
        text,
        href
      },
      image{
        asset->,
        alt,
        width,
        height
      }
    }
  },
  heroSection{
    heroTitle,
    subtitle,
    backgroundImage{
      asset->,
      alt,
      width,
      height
    },
    primaryCTA{
      text,
      href
    },
    secondaryCTA{
      text,
      href
    }
  },
  treatmentsSection{
    title,
    subtitle,
    description,
    treatments[]{
      title,
      description,
      image{
        asset->,
        alt,
        width,
        height
      },
      category,
      badge{
        text,
        variant
      },
      ctaText,
      ctaUrl
    },
    viewAllText,
    viewAllUrl
  },
  categoriesSection{
    title,
    categories[]{
      title,
      image{
        asset->,
        alt,
        width,
        height
      },
      cta{
        text,
        href
      }
    }
  },
  statisticsSection{
    statisticPreText,
    statisticTimeframe,
    statisticPostText,
    calculatorTitle,
    calculatorDefaultWeight,
    calculatorMinWeight,
    calculatorMaxWeight,
    calculatorWeightLossPercentage,
    calculatorResultText,
    calculatorUnit,
    backgroundImage{
      asset->,
      alt,
      width,
      height
    }
  },
  gettingStartedSection{
    title,
    subtitle,
    image{
      asset->,
      alt,
      width,
      height
    },
    steps[]{
      title
    },
    primaryCTA{
      text,
      href
    },
    secondaryCTA{
      text,
      href
    }
  },
  whyChooseSection{
    title,
    subtitle,
    valuePropositions[]{
      title,
      description,
      image{
        asset->,
        alt,
        width,
        height
      }
    }
  },
  testimonialsSection{
    title,
    testimonials[]{
      companyLogo{
        asset->,
        alt,
        width,
        height
      },
      quote,
      author{
        name,
        position,
        company,
        avatar{
          asset->,
          alt,
          width,
          height
        }
      }
    }
  },
  ctaHeroSection{
    heroTitle,
    subtitle,
    backgroundImage{
      asset->,
      alt,
      width,
      height
    },
    primaryCTA{
      text,
      href
    },
    secondaryCTA{
      text,
      href
    }
  },
  seo{
    metaTitle,
    metaDescription
  }
}`;
const HERO_TEST_QUERY = `*[_type == "homepage"][0]{
  heroSection{
    heroTitle,
    subtitle,
    backgroundImage{
      asset->,
      alt,
      width,
      height
    }
  }
}`;
const GLOBAL_FAQ_QUERY = `*[_type == "globalFAQ"][0]{
  _id,
  title,
  subtitle,
  subtitleLinkText,
  subtitleLinkUrl,
  faqs[]{
    question,
    answer
  },
  contactTitle,
  contactDescription,
  contactButtonText,
  contactButtonUrl
}`;
const GLOBAL_INFO_BAR_QUERY = `*[_type == "globalInfoBar"][0]{
  _id,
  trustIndicators[]{
    text,
    icon,
    isTitle,
    highlighted
  }
}`;
const GLOBAL_FOOTER_QUERY = `*[_type == "globalFooter"][0]{
  _id,
  title,
  contact{
    phone,
    email,
    ctaText,
    ctaHref
  },
  columns[]{
    title,
    links[]{
      label,
      href,
      isExternal
    }
  },
  socialLinks[]{
    platform,
    href
  },
  middleLinks[]{
    label,
    href
  },
  legalDisclaimer,
  legalLinks[]{
    label,
    href
  },
  copyright
}`;
const ABOUT_US_QUERY = `*[_type == "aboutUsPage"][0]{
  _id,
  title,
  heroSection{
    heroTitle,
    subtitle,
    backgroundImage{
      asset->,
      alt,
      width,
      height
    },
    primaryCTA{
      text,
      href
    },
    secondaryCTA{
      text,
      href
    }
  },
  medicalExpertsSection{
    title,
    subtitle,
    description,
    doctors[]->{
      _id,
      name,
      title,
      image{
        asset->,
        alt,
        width,
        height
      },
      bio,
      displayOrder
    }
  },
  labTestedSection{
    title,
    description,
    additionalDescription,
    backgroundImage{
      asset->,
      alt,
      width,
      height
    },
    tests[]{
      testName,
      statusLabel,
      details
    },
    featuresTitle,
    featuresDescription,
    features[]{
      label,
      description
    }
  },
  treatmentsSection{
    title,
    subtitle,
    description,
    treatments[]{
      title,
      description,
      image{
        asset->,
        alt,
        width,
        height
      },
      category,
      badge{
        text,
        variant
      },
      ctaText,
      ctaUrl
    },
    viewAllText,
    viewAllUrl
  },
  categoriesSection{
    title,
    categories[]{
      title,
      image{
        asset->,
        alt,
        width,
        height
      },
      cta{
        text,
        href
      }
    }
  },
  gettingStartedSection{
    title,
    subtitle,
    image{
      asset->,
      alt,
      width,
      height
    },
    steps[]{
      title
    },
    primaryCTA{
      text,
      href
    },
    secondaryCTA{
      text,
      href
    }
  },
  testimonialsSection{
    title,
    testimonials[]{
      companyLogo{
        asset->,
        alt,
        width,
        height
      },
      quote,
      author{
        name,
        position,
        company,
        avatar{
          asset->,
          alt,
          width,
          height
        }
      }
    }
  },
  seo{
    metaTitle,
    metaDescription
  }
}`;
const WEIGHT_LOSS_SOLUTIONS_QUERY = `*[_type == "weightLossSolutionsPage"][0]{
  _id,
  title,
  heroSection{
    heroTitle,
    subtitle,
    backgroundImage{
      asset->,
      alt,
      width,
      height
    },
    primaryCTA{
      text,
      href
    },
    trustFeatures[]{
      iconType,
      text
    }
  },
  treatmentBenefitsSection{
    benefits[]{
      title,
      description,
      iconType
    }
  },
  treatmentsSection{
    title,
    subtitle,
    description,
    treatments[]{
      title,
      description,
      image{
        asset->,
        alt,
        width,
        height
      },
      category,
      badge{
        text,
        variant
      },
      ctaText,
      ctaUrl
    },
    viewAllText,
    viewAllUrl
  },
  treatmentOptionsSection{
    title,
    medications[]{
      image{
        asset->,
        alt,
        width,
        height
      },
      title,
      subtitle,
      price,
      planDuration,
      primaryCTA{
        text,
        href
      },
      secondaryCTA{
        text,
        href
      },
      disclaimer,
      safetyInfo{
        text,
        href
      }
    }
  },
  statisticsSection{
    statisticPreText,
    statisticTimeframe,
    statisticPostText,
    calculatorTitle,
    calculatorDefaultWeight,
    calculatorMinWeight,
    calculatorMaxWeight,
    calculatorWeightLossPercentage,
    calculatorResultText,
    calculatorUnit,
    backgroundImage{
      asset->,
      alt,
      width,
      height
    }
  },
  weightLossOverviewSection{
    firstStatistic{
      preText,
      mainText,
      percentage,
      timeframe,
      description
    },
    secondStatistic{
      preText,
      mainText,
      percentage,
      timeframe,
      titleAboveDescription,
      description
    },
    healthGainsCard{
      title,
      description,
      image{
        asset->,
        alt,
        width,
        height
      }
    },
    overlappingImages{
      primaryImage{
        asset->,
        alt,
        width,
        height
      },
      secondaryImage{
        asset->,
        alt,
        width,
        height
      }
    },
    superchargeGoals{
      mainText,
      highlightedText,
      goals[]{
        image{
          asset->,
          alt,
          width,
          height
        },
        title,
        description
      }
    }
  },
  labTestedSection{
    title,
    description,
    additionalDescription,
    backgroundImage{
      asset->,
      alt,
      width,
      height
    },
    tests[]{
      testName,
      statusLabel,
      details
    },
    featuresTitle,
    featuresDescription,
    features[]{
      label,
      description
    }
  },
  gettingStartedSection{
    title,
    subtitle,
    image{
      asset->,
      alt,
      width,
      height
    },
    steps[]{
      title
    },
    primaryCTA{
      text,
      href
    },
    secondaryCTA{
      text,
      href
    }
  },
  ctaHeroSection{
    heroTitle,
    subtitle,
    backgroundImage{
      asset->,
      alt,
      width,
      height
    },
    primaryCTA{
      text,
      href
    },
    secondaryCTA{
      text,
      href
    }
  },
  seo{
    metaTitle,
    metaDescription
  }
}`;
const CONTACT_QUERY = `*[_type == "contactPage"][0]{
  _id,
  title,
  contactHeroSection{
    heroTitle,
    subtitle,
    backgroundImage{
      asset->,
      alt,
      width,
      height
    },
    primaryCTA{
      text,
      href
    },
    secondaryCTA{
      text,
      href
    },
    contactInfo{
      phone,
      email,
      office{
        address,
        city
      }
    }
  },
  seo{
    metaTitle,
    metaDescription
  }
}`;
}}),
"[project]/src/shared/lib/globalData.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getGlobalData": (()=>getGlobalData),
    "getGlobalFAQ": (()=>getGlobalFAQ),
    "getGlobalFooter": (()=>getGlobalFooter),
    "getGlobalInfoBar": (()=>getGlobalInfoBar)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$sanity$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/lib/sanity.ts [app-rsc] (ecmascript)");
;
async function getGlobalFAQ() {
    try {
        const faqData = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$sanity$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["client"].fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$sanity$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["GLOBAL_FAQ_QUERY"]);
        console.log('🌐 Global FAQ fetched:', faqData ? 'Success' : 'No data');
        return faqData;
    } catch (error) {
        console.error('Error fetching global FAQ:', error);
        return null;
    }
}
async function getGlobalInfoBar() {
    try {
        const infoBarData = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$sanity$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["client"].fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$sanity$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["GLOBAL_INFO_BAR_QUERY"]);
        console.log('🌐 Global Info Bar fetched:', infoBarData ? 'Success' : 'No data');
        return infoBarData;
    } catch (error) {
        console.error('Error fetching global Info Bar:', error);
        return null;
    }
}
async function getGlobalFooter() {
    try {
        const footerData = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$sanity$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["client"].fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$sanity$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["GLOBAL_FOOTER_QUERY"]);
        console.log('🌐 Global Footer fetched:', footerData ? 'Success' : 'No data');
        return footerData;
    } catch (error) {
        console.error('Error fetching global Footer:', error);
        return null;
    }
}
async function getGlobalData() {
    try {
        const [faqData, infoBarData, footerData] = await Promise.all([
            getGlobalFAQ(),
            getGlobalInfoBar(),
            getGlobalFooter()
        ]);
        return {
            globalFAQ: faqData,
            globalInfoBar: infoBarData,
            globalFooter: footerData
        };
    } catch (error) {
        console.error('Error fetching global data:', error);
        return {
            globalFAQ: null,
            globalInfoBar: null,
            globalFooter: null
        };
    }
}
}}),
"[project]/src/shared/ui/page-template.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "PageTemplate": (()=>PageTemplate),
    "defaultFooterConfig": (()=>defaultFooterConfig),
    "defaultHeaderConfig": (()=>defaultHeaderConfig),
    "defaultInfoBarConfig": (()=>defaultInfoBarConfig)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$header$2d$minimal$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/header-minimal.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$info$2d$bar$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/info-bar.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$footer$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/footer.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/lib/utils.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$globalData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/lib/globalData.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
// Default header configuration for homepage
const defaultHeaderConfig = {
    logoHref: "/",
    showMenuButton: true,
    sticky: true,
    shadow: "sm"
};
// Default info bar configuration for homepage
const defaultInfoBarConfig = {
    trustIndicators: [
        {
            id: "trusted-subscribers",
            text: "Trusted by over 2M subscribers",
            icon: "heart",
            highlighted: false
        },
        {
            id: "free-shipping",
            text: "Free & discreet shipping on all prescriptions",
            icon: "shipping",
            highlighted: false
        },
        {
            id: "fda-regulated",
            text: "FDA-regulated pharmacies",
            icon: "shield",
            highlighted: false
        },
        {
            id: "online-process",
            text: "100% online process",
            icon: "phone",
            highlighted: false
        }
    ],
    shadow: "sm"
};
// Default footer configuration for homepage
const defaultFooterConfig = {
    contact: {
        logoText: "healthplatform",
        phone: "(555) 123-4567",
        email: "care@healthplatform.com",
        ctaText: "Find your plan",
        ctaHref: "/consultation"
    },
    columns: [
        {
            title: "WEIGHT LOSS",
            links: [
                {
                    label: "GLP-1 treatments",
                    href: "/weight-loss/glp-1"
                },
                {
                    label: "My Custom Weight Loss Kit",
                    href: "/weight-loss/custom-kit"
                },
                {
                    label: "Ozempic®",
                    href: "/weight-loss/ozempic"
                },
                {
                    label: "Wegovy®",
                    href: "/weight-loss/wegovy"
                },
                {
                    label: "Mounjaro®",
                    href: "/weight-loss/mounjaro"
                },
                {
                    label: "Zepbound®",
                    href: "/weight-loss/zepbound"
                }
            ]
        },
        {
            title: "HORMONE",
            links: [
                {
                    label: "Lorem ipsum",
                    href: "/hormone/lorem-1"
                },
                {
                    label: "Lorem ipsum",
                    href: "/hormone/lorem-2"
                },
                {
                    label: "Lorem ipsum",
                    href: "/hormone/lorem-3"
                }
            ]
        }
    ],
    socialLinks: [
        {
            platform: "facebook",
            href: "https://facebook.com/healthplatform"
        },
        {
            platform: "instagram",
            href: "https://instagram.com/healthplatform"
        },
        {
            platform: "twitter",
            href: "https://twitter.com/healthplatform"
        },
        {
            platform: "tiktok",
            href: "https://tiktok.com/@healthplatform"
        },
        {
            platform: "linkedin",
            href: "https://linkedin.com/company/healthplatform"
        }
    ],
    middleLinks: [
        {
            label: "About Us",
            href: "/about"
        },
        {
            label: "Contact Us",
            href: "/contact"
        }
    ],
    complianceInfo: {
        compoundedText: "Compounded products have not been approved by the FDA. This product is compounded by licensed pharmacies that meet strict FDA standards."
    },
    legalDisclaimer: "This information is provided for educational purposes only and is not intended as medical advice. Please consult with a healthcare provider for personalized medical recommendations. Results may vary. By providing your email or phone number, you consent to receive marketing communications. You can unsubscribe at any time. For questions or concerns, contact us directly at care@healthplatform.com. At Health Platform, we believe in empowering individuals on their weight loss journey by providing access to licensed providers who may prescribe treatments for metabolic health. Our commitment to transparency and customer satisfaction drives everything we do. These statements have not been evaluated by the Food and Drug Administration. These products are not intended to diagnose, treat, cure, or prevent any disease. Individual results may vary and are not guaranteed. Please read all terms and conditions before purchasing. The use of these products may not be appropriate for everyone. Please consult with your healthcare provider before starting any new treatment. Pricing is subject to change and may vary based on specific plans. Terms and conditions apply. Health Platform is committed to ensuring digital accessibility so that persons with disabilities have full and equal enjoyment of Eden's goods, services, facilities, privileges, advantages, and accommodations.",
    legalLinks: [
        {
            label: "Terms of Service",
            href: "/terms"
        },
        {
            label: "Privacy Policy",
            href: "/privacy"
        }
    ],
    copyright: "2025 Health Platform, International Inc. All rights reserved."
};
async function PageTemplate({ children, header, infoBar, footer = defaultFooterConfig, className, main = {
    paddingTop: "header",
    maxWidth: "default",
    padding: "md",
    background: "transparent"
}, footerStyle = {
    horizontalMargin: "lg",
    borderRadius: "2xl",
    bottomMargin: "lg"
} }) {
    // Load global data internally if no header/infoBar/footer props provided
    let finalHeaderConfig = header;
    let finalInfoBarConfig = infoBar;
    let finalFooterConfig = footer;
    // If no header, infoBar, or footer provided, load from global data
    console.log('header === undefined || infoBar === undefined || footer === undefined', header === undefined || infoBar === undefined || footer === undefined);
    if (header === undefined || infoBar === undefined || footer === undefined) {
        try {
            const globalData = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$globalData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getGlobalData"])();
            // Set header config if not provided
            if (header === undefined) {
                finalHeaderConfig = defaultHeaderConfig;
            }
            // Set infoBar config if not provided
            if (infoBar === undefined) {
                finalInfoBarConfig = globalData.globalInfoBar ? {
                    trustIndicators: globalData.globalInfoBar.trustIndicators.map((indicator, index)=>({
                            id: `indicator-${index}`,
                            text: indicator.text,
                            icon: indicator.icon,
                            highlighted: indicator.highlighted,
                            isTitle: indicator.isTitle
                        })),
                    shadow: "sm"
                } : defaultInfoBarConfig;
            }
            // Set footer config if not provided
            finalFooterConfig = globalData.globalFooter ? {
                contact: {
                    logoText: "healthplatform",
                    phone: globalData.globalFooter.contact.phone,
                    email: globalData.globalFooter.contact.email,
                    ctaText: globalData.globalFooter.contact.ctaText,
                    ctaHref: globalData.globalFooter.contact.ctaHref
                },
                columns: globalData.globalFooter.columns,
                socialLinks: globalData.globalFooter.socialLinks,
                middleLinks: globalData.globalFooter.middleLinks,
                complianceInfo: {
                    compoundedText: "Compounded in the U.S.A."
                },
                legalDisclaimer: globalData.globalFooter.legalDisclaimer,
                legalLinks: globalData.globalFooter.legalLinks,
                copyright: globalData.globalFooter.copyright
            } : defaultFooterConfig;
        } catch (error) {
            console.error('Error loading global data in PageTemplate:', error);
            // Fallback to defaults
            if (header === undefined) {
                finalHeaderConfig = defaultHeaderConfig;
            }
            if (infoBar === undefined) {
                finalInfoBarConfig = defaultInfoBarConfig;
            }
            if (footer === undefined) {
                finalFooterConfig = defaultFooterConfig;
            }
        }
    }
    const paddingTopClasses = {
        none: "",
        header: "pt-25",
        custom: ""
    };
    const paddingTopValue = main.paddingTop || "header";
    const paddingClass = paddingTopValue === "custom" ? main.className || "" : paddingTopClasses[paddingTopValue];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("min-h-screen bg-white", className),
        children: [
            finalInfoBarConfig && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$info$2d$bar$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InfoBar"], {
                trustIndicators: finalInfoBarConfig.trustIndicators,
                shadow: finalInfoBarConfig.shadow
            }, void 0, false, {
                fileName: "[project]/src/shared/ui/page-template.tsx",
                lineNumber: 265,
                columnNumber: 9
            }, this),
            finalHeaderConfig && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$header$2d$minimal$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HeaderMinimal"], {
                logoHref: finalHeaderConfig.logoHref,
                onMenuClick: finalHeaderConfig.onMenuClick,
                showMenuButton: finalHeaderConfig.showMenuButton,
                sticky: finalHeaderConfig.sticky,
                shadow: finalHeaderConfig.shadow
            }, void 0, false, {
                fileName: "[project]/src/shared/ui/page-template.tsx",
                lineNumber: 271,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: paddingClass,
                children: children
            }, void 0, false, {
                fileName: "[project]/src/shared/ui/page-template.tsx",
                lineNumber: 280,
                columnNumber: 7
            }, this),
            finalFooterConfig && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$footer$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Footer"], {
                    data: finalFooterConfig,
                    horizontalMargin: "md",
                    borderRadius: footerStyle.borderRadius
                }, void 0, false, {
                    fileName: "[project]/src/shared/ui/page-template.tsx",
                    lineNumber: 286,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/shared/ui/page-template.tsx",
                lineNumber: 285,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/shared/ui/page-template.tsx",
        lineNumber: 263,
        columnNumber: 5
    }, this);
}
;
}}),
"[project]/src/shared/ui/typography.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Heading": (()=>Heading),
    "Text": (()=>Text),
    "headingVariants": (()=>headingVariants),
    "textVariants": (()=>textVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/lib/utils.ts [app-rsc] (ecmascript)");
;
;
;
;
const textVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cva"])("font-sans", {
    variants: {
        variant: {
            hero: "text-lg md:text-xl text-neutral-600",
            body: "text-base text-neutral-700",
            caption: "text-sm text-neutral-600",
            stat: "text-2xl font-bold text-primary-600",
            trust: "text-xs text-neutral-700",
            logo: "text-lg font-semibold text-primary-600"
        },
        weight: {
            light: "font-light",
            regular: "font-normal",
            medium: "font-medium",
            semibold: "font-semibold",
            bold: "font-bold"
        },
        align: {
            left: "text-left",
            center: "text-center",
            right: "text-right"
        }
    },
    defaultVariants: {
        variant: "body",
        weight: "regular",
        align: "left"
    }
});
const headingVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cva"])("font-sans", {
    variants: {
        level: {
            h1: "text-4xl md:text-5xl lg:text-6xl font-bold leading-tight",
            h2: "text-3xl md:text-4xl font-bold leading-tight",
            h3: "text-xl font-semibold leading-snug",
            h4: "text-lg font-medium leading-normal"
        },
        color: {
            primary: "text-primary-900",
            secondary: "text-neutral-700",
            muted: "text-neutral-500",
            white: "text-white"
        }
    },
    defaultVariants: {
        level: "h2",
        color: "primary"
    }
});
const Text = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, variant, weight, align, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? "span" : "span";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])(textVariants({
            variant,
            weight,
            align,
            className
        })),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/shared/ui/typography.tsx",
        lineNumber: 79,
        columnNumber: 7
    }, this);
});
Text.displayName = "Text";
const Heading = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, level, color, asChild = false, ...props }, ref)=>{
    const Component = level || "h2";
    if (asChild) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createElement"])(Component, {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])(headingVariants({
                level,
                color,
                className
            })),
            ref,
            ...props
        });
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createElement"])(Component, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])(headingVariants({
            level,
            color,
            className
        })),
        ref,
        ...props
    });
});
Heading.displayName = "Heading";
;
}}),
"[project]/src/shared/ui/image.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "OptimizedImage": (()=>OptimizedImage),
    "imageVariants": (()=>imageVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const OptimizedImage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call OptimizedImage() from the server but OptimizedImage is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/shared/ui/image.tsx <module evaluation>", "OptimizedImage");
const imageVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call imageVariants() from the server but imageVariants is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/shared/ui/image.tsx <module evaluation>", "imageVariants");
}}),
"[project]/src/shared/ui/image.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "OptimizedImage": (()=>OptimizedImage),
    "imageVariants": (()=>imageVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const OptimizedImage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call OptimizedImage() from the server but OptimizedImage is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/shared/ui/image.tsx", "OptimizedImage");
const imageVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call imageVariants() from the server but imageVariants is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/shared/ui/image.tsx", "imageVariants");
}}),
"[project]/src/shared/ui/image.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$image$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/shared/ui/image.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$image$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/src/shared/ui/image.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$image$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/src/shared/ui/card.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Card": (()=>Card),
    "CardAction": (()=>CardAction),
    "CardContent": (()=>CardContent),
    "CardDescription": (()=>CardDescription),
    "CardFooter": (()=>CardFooter),
    "CardHeader": (()=>CardHeader),
    "CardTitle": (()=>CardTitle)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/lib/utils.ts [app-rsc] (ecmascript)");
;
;
function Card({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/shared/ui/card.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
function CardHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/shared/ui/card.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
function CardTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("leading-none font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/shared/ui/card.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
function CardDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/shared/ui/card.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
function CardAction({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("col-start-2 row-span-2 row-start-1 self-start justify-self-end", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/shared/ui/card.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
function CardContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("px-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/shared/ui/card.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
function CardFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("flex items-center px-6 [.border-t]:pt-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/shared/ui/card.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
;
}}),
"[project]/src/shared/ui/cta-buttons.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "CTAButtons": (()=>CTAButtons),
    "ctaButtonsVariants": (()=>ctaButtonsVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const CTAButtons = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call CTAButtons() from the server but CTAButtons is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/shared/ui/cta-buttons.tsx <module evaluation>", "CTAButtons");
const ctaButtonsVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ctaButtonsVariants() from the server but ctaButtonsVariants is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/shared/ui/cta-buttons.tsx <module evaluation>", "ctaButtonsVariants");
}}),
"[project]/src/shared/ui/cta-buttons.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "CTAButtons": (()=>CTAButtons),
    "ctaButtonsVariants": (()=>ctaButtonsVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const CTAButtons = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call CTAButtons() from the server but CTAButtons is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/shared/ui/cta-buttons.tsx", "CTAButtons");
const ctaButtonsVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ctaButtonsVariants() from the server but ctaButtonsVariants is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/shared/ui/cta-buttons.tsx", "ctaButtonsVariants");
}}),
"[project]/src/shared/ui/cta-buttons.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$cta$2d$buttons$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/shared/ui/cta-buttons.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$cta$2d$buttons$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/src/shared/ui/cta-buttons.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$cta$2d$buttons$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/src/shared/ui/pricing-display.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "PricingDisplay": (()=>PricingDisplay),
    "pricingDisplayVariants": (()=>pricingDisplayVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/lib/utils.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$typography$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/typography.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
const pricingDisplayVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center gap-2", {
    variants: {
        variant: {
            default: "text-sm",
            compact: "text-xs",
            highlighted: "text-sm font-medium"
        },
        orientation: {
            horizontal: "flex-row",
            vertical: "flex-col gap-1"
        }
    },
    defaultVariants: {
        variant: "default",
        orientation: "horizontal"
    }
});
const PricingDisplay = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, variant, orientation, leftPrice, rightPrice, separator = "•", leftLabel, rightLabel, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])(pricingDisplayVariants({
            variant,
            orientation,
            className
        })),
        ref: ref,
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-1",
                children: [
                    leftLabel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$typography$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Text"], {
                        variant: "caption",
                        className: "text-neutral-500",
                        children: leftLabel
                    }, void 0, false, {
                        fileName: "[project]/src/shared/ui/pricing-display.tsx",
                        lineNumber: 57,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$typography$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Text"], {
                        variant: variant === "highlighted" ? "body" : "caption",
                        weight: variant === "highlighted" ? "medium" : "regular",
                        className: "text-neutral-700",
                        children: leftPrice
                    }, void 0, false, {
                        fileName: "[project]/src/shared/ui/pricing-display.tsx",
                        lineNumber: 61,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/shared/ui/pricing-display.tsx",
                lineNumber: 55,
                columnNumber: 9
            }, this),
            orientation === "horizontal" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$typography$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Text"], {
                variant: "caption",
                className: "text-neutral-400",
                children: separator
            }, void 0, false, {
                fileName: "[project]/src/shared/ui/pricing-display.tsx",
                lineNumber: 71,
                columnNumber: 11
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-1",
                children: [
                    rightLabel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$typography$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Text"], {
                        variant: "caption",
                        className: "text-neutral-500",
                        children: rightLabel
                    }, void 0, false, {
                        fileName: "[project]/src/shared/ui/pricing-display.tsx",
                        lineNumber: 78,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$typography$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Text"], {
                        variant: variant === "highlighted" ? "body" : "caption",
                        weight: variant === "highlighted" ? "medium" : "regular",
                        className: "text-neutral-700",
                        children: rightPrice
                    }, void 0, false, {
                        fileName: "[project]/src/shared/ui/pricing-display.tsx",
                        lineNumber: 82,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/shared/ui/pricing-display.tsx",
                lineNumber: 76,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/shared/ui/pricing-display.tsx",
        lineNumber: 50,
        columnNumber: 7
    }, this);
});
PricingDisplay.displayName = "PricingDisplay";
;
}}),
"[project]/src/shared/ui/trust-icon.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "TrustIcon": (()=>TrustIcon)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/lib/utils.ts [app-rsc] (ecmascript)");
;
;
;
const TrustIcon = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"])(({ type, className, ...props }, ref)=>{
    const iconMap = {
        heart: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "14",
            height: "13",
            viewBox: "0 0 14 13",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("w-4 h-4", className),
            ref: ref,
            ...props,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M7.23553 12.3483C12.9208 9.16178 14.3195 5.36854 13.2501 2.70194C12.7308 1.40723 11.641 0.479419 10.3556 0.192819C9.22401 -0.059511 7.98728 0.194789 6.90954 1.05033C5.8318 0.194789 4.5951 -0.059501 3.46342 0.192829C2.17804 0.479419 1.08822 1.40724 0.56899 2.70195C-0.500446 5.36856 0.89833 9.16178 6.58362 12.3483C6.78611 12.4618 7.03304 12.4618 7.23553 12.3483Z",
                fill: "black",
                fillOpacity: "0.7216"
            }, void 0, false, {
                fileName: "[project]/src/shared/ui/trust-icon.tsx",
                lineNumber: 23,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/shared/ui/trust-icon.tsx",
            lineNumber: 13,
            columnNumber: 9
        }, this),
        shipping: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "17",
            height: "17",
            viewBox: "0 0 17 17",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M8.11177 1.43398C8.30482 1.43398 8.48839 1.51767 8.61501 1.6634L9.95945 3.21075L11.984 2.88959C12.1747 2.85935 12.3691 2.91324 12.517 3.03733C12.6649 3.16142 12.7517 3.34353 12.755 3.53655L12.7903 5.58607L14.5476 6.64139C14.713 6.74078 14.8274 6.90703 14.8609 7.09715C14.8944 7.28727 14.8439 7.48259 14.7224 7.63259L13.432 9.22529L14.0998 11.1633C14.1627 11.3458 14.1434 11.5466 14.0469 11.7138C13.9503 11.881 13.7861 11.9981 13.5966 12.0349L11.5843 12.4256L10.8502 14.3394C10.781 14.5197 10.6372 14.6611 10.4558 14.7271C10.2743 14.7931 10.0732 14.7773 9.90435 14.6837L8.11177 13.6894L6.31919 14.6837C6.15037 14.7773 5.94924 14.7931 5.76783 14.7271C5.58642 14.6611 5.44254 14.5197 5.3734 14.3394L4.63927 12.4256L2.62701 12.0349C2.4375 11.9981 2.27324 11.881 2.17671 11.7138C2.08018 11.5466 2.06087 11.3458 2.12377 11.1633L2.79159 9.22529L1.50121 7.63259C1.37968 7.48259 1.32915 7.28727 1.36267 7.09715C1.39619 6.90703 1.51049 6.74078 1.67599 6.64139L3.43328 5.58607L3.46856 3.53655C3.47189 3.34353 3.55872 3.16142 3.70661 3.03733C3.85449 2.91324 4.04891 2.85935 4.23958 2.88959L6.26409 3.21075L7.60852 1.6634C7.73514 1.51767 7.91872 1.43398 8.11177 1.43398ZM10.2499 7.57206C10.5101 7.31171 10.5101 6.8896 10.2499 6.62925C9.9895 6.3689 9.56739 6.3689 9.30704 6.62925L7.44511 8.49118L6.91651 7.96258C6.65616 7.70223 6.23405 7.70223 5.9737 7.96258C5.71335 8.22293 5.71335 8.64504 5.9737 8.90539L6.97371 9.90539C7.09873 10.0304 7.2683 10.1007 7.44511 10.1007C7.62192 10.1007 7.79149 10.0304 7.91651 9.90539L10.2499 7.57206Z",
                fill: "black",
                fillOpacity: "0.88"
            }, void 0, false, {
                fileName: "[project]/src/shared/ui/trust-icon.tsx",
                lineNumber: 32,
                columnNumber: 1
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/shared/ui/trust-icon.tsx",
            lineNumber: 31,
            columnNumber: 9
        }, this),
        shield: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "17",
            height: "17",
            viewBox: "0 0 17 17",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("w-4 h-4", className),
            ref: ref,
            ...props,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M7.67554 1.27281C8.01623 1.12375 8.40369 1.12375 8.74439 1.27281L13.4111 3.31447C13.8964 3.5268 14.21 4.00628 14.21 4.53602V8.76667C14.21 12.0804 11.5237 14.7667 8.20996 14.7667C4.89625 14.7667 2.20996 12.0804 2.20996 8.76667V4.53602C2.20996 4.00628 2.52355 3.5268 3.00887 3.31447L7.67554 1.27281ZM10.6814 7.23807C10.9418 6.97772 10.9418 6.55561 10.6814 6.29526C10.4211 6.03491 9.99891 6.03491 9.73856 6.29526L7.54329 8.49053L6.68136 7.6286C6.42102 7.36825 5.9989 7.36825 5.73856 7.6286C5.47821 7.88895 5.47821 8.31106 5.73856 8.5714L7.07189 9.90474C7.33224 10.1651 7.75435 10.1651 8.0147 9.90474L10.6814 7.23807Z",
                fill: "black",
                fillOpacity: "0.7216"
            }, void 0, false, {
                fileName: "[project]/src/shared/ui/trust-icon.tsx",
                lineNumber: 48,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/shared/ui/trust-icon.tsx",
            lineNumber: 38,
            columnNumber: 9
        }, this),
        phone: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "17",
            height: "17",
            viewBox: "0 0 17 17",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("w-4 h-4", className),
            ref: ref,
            ...props,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M5.64587 15.4327C4.5413 15.4327 3.64587 14.5373 3.64587 13.4327V2.766C3.64587 1.66142 4.5413 0.765991 5.64587 0.765991H10.9792C12.0837 0.765991 12.9792 1.66142 12.9792 2.766V13.4327C12.9792 14.5373 12.0837 15.4327 10.9792 15.4327H5.64587ZM7.64587 2.766C7.27768 2.766 6.9792 3.06447 6.9792 3.43266C6.9792 3.80085 7.27768 4.09933 7.64587 4.09933H8.9792C9.34739 4.09933 9.64587 3.80085 9.64587 3.43266C9.64587 3.06447 9.34739 2.766 8.9792 2.766H7.64587Z",
                fill: "black",
                fillOpacity: "0.7216"
            }, void 0, false, {
                fileName: "[project]/src/shared/ui/trust-icon.tsx",
                lineNumber: 68,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/shared/ui/trust-icon.tsx",
            lineNumber: 58,
            columnNumber: 9
        }, this),
        box: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "13",
            height: "14",
            viewBox: "0 0 13 14",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("w-4 h-4", className),
            ref: ref,
            ...props,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M5.43061 0.6471C5.79051 0.44465 6.22997 0.44465 6.58987 0.6471L11.4232 3.36585C11.4568 3.3848 11.4894 3.40525 11.5207 3.42711L6.01062 6.52659L0.5 3.42695C0.53123 3.40515 0.56367 3.38475 0.59728 3.36585L5.43061 0.6471Z",
                    fill: "black",
                    fillOpacity: "0.7216"
                }, void 0, false, {
                    fileName: "[project]/src/shared/ui/trust-icon.tsx",
                    lineNumber: 88,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M-0.00131941 4.29257C-0.00432941 4.32687 -0.00585938 4.36148 -0.00585938 4.39631V9.804C-0.00585938 10.2311 0.224521 10.6251 0.596791 10.8345L5.43013 13.5532C5.4564 13.568 5.48309 13.5817 5.51014 13.5943V7.39269L-0.00131941 4.29257Z",
                    fill: "black",
                    fillOpacity: "0.7216"
                }, void 0, false, {
                    fileName: "[project]/src/shared/ui/trust-icon.tsx",
                    lineNumber: 93,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M6.50977 13.5939C6.53657 13.5814 6.563 13.5679 6.58902 13.5532L11.4224 10.8345C11.7946 10.6251 12.025 10.2311 12.025 9.804V4.39631C12.025 4.36157 12.0235 4.32706 12.0205 4.29285L6.50977 7.39268V13.5939Z",
                    fill: "black",
                    fillOpacity: "0.7216"
                }, void 0, false, {
                    fileName: "[project]/src/shared/ui/trust-icon.tsx",
                    lineNumber: 98,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/shared/ui/trust-icon.tsx",
            lineNumber: 78,
            columnNumber: 9
        }, this)
    };
    return iconMap[type];
});
TrustIcon.displayName = "TrustIcon";
;
}}),
"[project]/src/shared/ui/trust-indicators.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "TrustIndicators": (()=>TrustIndicators),
    "trustIndicatorsVariants": (()=>trustIndicatorsVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/lib/utils.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$typography$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/typography.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$trust$2d$icon$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/trust-icon.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
const trustIndicatorsVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cva"])("flex items-center w-full", {
    variants: {
        layout: {
            horizontal: "flex-row justify-between gap-4 md:gap-6 lg:gap-8",
            compact: "flex-row gap-2 md:gap-3",
            stacked: "flex-col gap-1",
            spaced: "flex-row items-center gap-8"
        },
        separator: {
            dot: "[&>*:not(:last-child)]:after:content-['•'] [&>*:not(:last-child)]:after:mx-2 [&>*:not(:last-child)]:after:text-neutral-400",
            line: "[&>*:not(:last-child)]:after:content-['|'] [&>*:not(:last-child)]:after:mx-2 [&>*:not(:last-child)]:after:text-neutral-300",
            none: ""
        }
    },
    defaultVariants: {
        layout: "spaced",
        separator: "none"
    }
});
const TrustIndicators = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, layout, separator, items, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])(trustIndicatorsVariants({
            layout,
            separator,
            className
        })),
        ref: ref,
        ...props,
        children: [
            items.find((item)=>item.isTitle) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-1.5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$typography$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Text"], {
                    variant: "trust",
                    weight: "semibold",
                    className: "whitespace-nowrap text-neutral-800 font-semibold",
                    children: items.find((item)=>item.isTitle)?.text
                }, void 0, false, {
                    fileName: "[project]/src/shared/ui/trust-indicators.tsx",
                    lineNumber: 62,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/shared/ui/trust-indicators.tsx",
                lineNumber: 61,
                columnNumber: 11
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between flex-1 gap-4",
                children: items.filter((item)=>!item.isTitle).map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            item.icon ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$trust$2d$icon$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TrustIcon"], {
                                type: item.icon,
                                className: "flex-shrink-0"
                            }, void 0, false, {
                                fileName: "[project]/src/shared/ui/trust-indicators.tsx",
                                lineNumber: 77,
                                columnNumber: 17
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-4 h-4 rounded-sm flex-shrink-0"
                            }, void 0, false, {
                                fileName: "[project]/src/shared/ui/trust-indicators.tsx",
                                lineNumber: 79,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$typography$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Text"], {
                                variant: "trust",
                                weight: item.highlighted ? "medium" : "regular",
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("whitespace-nowrap", item.highlighted ? "text-neutral-700" : "text-neutral-600"),
                                children: item.text
                            }, void 0, false, {
                                fileName: "[project]/src/shared/ui/trust-indicators.tsx",
                                lineNumber: 81,
                                columnNumber: 15
                            }, this)
                        ]
                    }, item.id, true, {
                        fileName: "[project]/src/shared/ui/trust-indicators.tsx",
                        lineNumber: 75,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/shared/ui/trust-indicators.tsx",
                lineNumber: 73,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/shared/ui/trust-indicators.tsx",
        lineNumber: 53,
        columnNumber: 7
    }, this);
});
TrustIndicators.displayName = "TrustIndicators";
;
}}),
"[project]/src/shared/ui/science-icon.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ScienceIcon": (()=>ScienceIcon)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
function ScienceIcon({ className, size = 24 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 19 21",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("mask", {
                id: "mask0_648_1190",
                style: {
                    maskType: "luminance"
                },
                maskUnits: "userSpaceOnUse",
                x: "0",
                y: "1",
                width: "19",
                height: "19",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M18.785 1.05243H0V19.8374H18.785V1.05243Z",
                    fill: "white"
                }, void 0, false, {
                    fileName: "[project]/src/shared/ui/science-icon.tsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/shared/ui/science-icon.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                mask: "url(#mask0_648_1190)",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M18.7855 6.21035C18.75 6.11072 18.6946 6.01932 18.6228 5.94168C18.5509 5.86403 18.4642 5.80175 18.3676 5.75858C18.271 5.71543 18.1667 5.69228 18.0609 5.69056C17.9552 5.68884 17.8502 5.70856 17.7523 5.74855C17.6742 5.77691 17.5895 5.78164 17.5087 5.76215C17.4281 5.74266 17.3548 5.69982 17.2984 5.63897L14.2223 2.53944C14.1573 2.48567 14.11 2.41372 14.0863 2.33282C14.0625 2.25192 14.0636 2.16578 14.0892 2.08548C14.1577 1.89231 14.1477 1.67999 14.0613 1.49413C13.975 1.30826 13.8192 1.16367 13.6274 1.09143C13.5298 1.05828 13.4266 1.04474 13.3236 1.0516C13.2208 1.05846 13.1203 1.08558 13.028 1.1314C12.9355 1.17722 12.8532 1.24084 12.7854 1.3186C12.7177 1.39637 12.6661 1.48674 12.6334 1.58454C12.0717 3.22236 12.1387 5.01046 12.8212 6.6017C13.296 7.72081 13.3788 8.96751 13.056 10.1396C13.0482 10.1739 13.0307 10.2053 13.0058 10.2302C12.9809 10.2551 12.9494 10.2725 12.9152 10.2804C12.8824 10.2881 12.8482 10.2879 12.8155 10.2797C12.7828 10.2716 12.7526 10.2557 12.7273 10.2335L9.5965 7.10263C9.57095 7.07938 9.55235 7.04955 9.54268 7.01641C9.53301 6.98327 9.53263 6.94811 9.54165 6.91478C9.55038 6.88084 9.56804 6.84985 9.59284 6.82507C9.61763 6.80028 9.64863 6.78261 9.68253 6.7739C10.1193 6.65628 10.5688 6.59318 11.021 6.58605C11.1238 6.58605 11.2255 6.56581 11.3205 6.52647C11.4155 6.48713 11.5018 6.42948 11.5745 6.35679C11.6472 6.28411 11.7047 6.19783 11.7441 6.10287C11.7835 6.00791 11.8037 5.90612 11.8037 5.80334C11.8037 5.70055 11.7835 5.59877 11.7441 5.50381C11.7047 5.40885 11.6472 5.32257 11.5745 5.24988C11.5018 5.1772 11.4155 5.11955 11.3205 5.08021C11.2255 5.04088 11.1238 5.02063 11.021 5.02063C9.16227 5.05834 7.38999 5.81268 6.07427 7.12612C5.07186 8.12192 4.38788 9.39308 4.10918 10.7783C3.83047 12.1635 3.96958 13.6003 4.50885 14.9062C4.65414 15.2328 4.76434 15.5739 4.83759 15.9238C4.84924 15.9645 4.84622 16.0078 4.82905 16.0465C4.81187 16.0851 4.78165 16.1165 4.74366 16.1351C4.70932 16.1594 4.66831 16.1724 4.62626 16.1724C4.58422 16.1724 4.5432 16.1594 4.50885 16.1351L3.22521 14.7967C3.19728 14.7609 3.18211 14.7168 3.18211 14.6714C3.18211 14.626 3.19728 14.582 3.22521 14.5462C3.32288 14.4066 3.37235 14.239 3.3661 14.0688C3.3661 13.9659 3.34585 13.8642 3.30651 13.7692C3.26718 13.6743 3.20953 13.588 3.13685 13.5153C3.06417 13.4426 2.97788 13.385 2.88291 13.3456C2.78795 13.3063 2.68618 13.286 2.58339 13.286C1.89002 13.302 1.2034 13.4261 0.548343 13.6539C0.450549 13.6866 0.360173 13.7382 0.282409 13.806C0.204644 13.8737 0.141025 13.9561 0.0952036 14.0485C0.0493831 14.1408 0.0222643 14.2413 0.0154056 14.3442C0.00854671 14.4471 0.022083 14.5503 0.0552368 14.6479C0.121362 14.8419 0.26085 15.002 0.443767 15.0942C0.626684 15.1864 0.838452 15.2032 1.03362 15.141C1.11169 15.1127 1.19637 15.108 1.27711 15.1275C1.35786 15.1469 1.43107 15.1898 1.4876 15.2506L4.56364 18.3502C4.62449 18.4067 4.66734 18.4799 4.68682 18.5606C4.70631 18.6414 4.70158 18.726 4.67322 18.8041C4.63203 18.9032 4.61163 19.0096 4.61328 19.1169C4.61494 19.224 4.63862 19.3298 4.68284 19.4275C4.72707 19.5253 4.7909 19.6128 4.87037 19.6848C4.94985 19.7568 5.04327 19.8117 5.14485 19.8461C5.24644 19.8805 5.35401 19.8936 5.46088 19.8848C5.56776 19.8759 5.67166 19.8451 5.76615 19.7943C5.86064 19.7436 5.9437 19.674 6.01017 19.5899C6.07663 19.5057 6.12509 19.4088 6.15254 19.3051C6.71421 17.6672 6.64726 15.8792 5.96469 14.2879C5.48991 13.1688 5.40716 11.9221 5.72988 10.75C5.73778 10.7157 5.75519 10.6843 5.78011 10.6594C5.80502 10.6345 5.83643 10.6171 5.87076 10.6091C5.90355 10.6014 5.93771 10.6017 5.97039 10.6099C6.00307 10.6181 6.03331 10.6339 6.05861 10.6561L9.18946 13.787C9.21497 13.8102 9.23357 13.8401 9.24324 13.8732C9.2529 13.9064 9.25325 13.9415 9.24424 13.9748C9.23553 14.0087 9.21786 14.0397 9.19307 14.0645C9.16829 14.0893 9.1373 14.107 9.10335 14.1157C8.66667 14.2333 8.21711 14.2964 7.76492 14.3036C7.55733 14.3036 7.35825 14.386 7.21146 14.5329C7.06467 14.6796 6.98222 14.8787 6.98222 15.0863C6.98222 15.2938 7.06467 15.493 7.21146 15.6398C7.35825 15.7865 7.55733 15.8689 7.76492 15.8689C8.93105 15.8502 10.0749 15.5467 11.0969 14.9847C12.1189 14.4228 12.9879 13.6195 13.6284 12.6449C14.2689 11.6702 14.6614 10.5537 14.7718 9.39267C14.8821 8.23162 14.7069 7.0612 14.2614 5.98337C14.1214 5.65617 14.0165 5.3151 13.9483 4.96584C13.9367 4.9252 13.9397 4.88174 13.9569 4.8431C13.9741 4.80446 14.0043 4.77309 14.0423 4.75451C14.0766 4.73025 14.1176 4.71723 14.1597 4.71723C14.2017 4.71723 14.2427 4.73025 14.2771 4.75451L15.5607 6.03815C15.5886 6.07392 15.6038 6.118 15.6038 6.16338C15.6038 6.20877 15.5886 6.25285 15.5607 6.28862C15.4631 6.4282 15.4136 6.59583 15.4199 6.76607C15.4199 6.97366 15.5023 7.17274 15.649 7.31953C15.7958 7.46631 15.995 7.54878 16.2025 7.54878C16.8847 7.5239 17.5597 7.39997 18.2062 7.18091C18.3092 7.15724 18.4062 7.11299 18.4916 7.05083C18.577 6.98868 18.6488 6.90989 18.7029 6.81922C18.7571 6.72854 18.7922 6.62785 18.8064 6.52322C18.8206 6.41858 18.8135 6.31215 18.7855 6.21035ZM12.0463 12.2137C11.7968 12.526 11.5132 12.8095 11.201 13.0591C11.1291 13.124 11.0357 13.1599 10.9388 13.1599C10.8419 13.1599 10.7485 13.124 10.6766 13.0591L6.81001 9.2003C6.74511 9.12838 6.70919 9.03496 6.70919 8.93809C6.70919 8.84122 6.74511 8.74779 6.81001 8.67588C7.0498 8.36533 7.32275 8.08188 7.62403 7.83055C7.69594 7.76565 7.78937 7.72972 7.88624 7.72972C7.98311 7.72972 8.07654 7.76565 8.14845 7.83055L11.9759 11.658C12.0147 11.6923 12.0463 11.7339 12.0689 11.7805C12.0915 11.8271 12.1047 11.8777 12.1076 11.9293C12.1105 11.981 12.1031 12.0328 12.0859 12.0816C12.0687 12.1304 12.0419 12.1753 12.0072 12.2137H12.0463Z",
                    fill: "currentColor"
                }, void 0, false, {
                    fileName: "[project]/src/shared/ui/science-icon.tsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/shared/ui/science-icon.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/shared/ui/science-icon.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/shared/ui/pill-icon.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "PillIcon": (()=>PillIcon)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
function PillIcon({ className, size = 24 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 19 22",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("mask", {
                id: "mask0_648_1198",
                style: {
                    maskType: "luminance"
                },
                maskUnits: "userSpaceOnUse",
                x: "0",
                y: "1",
                width: "19",
                height: "20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M0.000139236 20.3784H18.7852V1.59334H0.000139236V20.3784Z",
                    fill: "white"
                }, void 0, false, {
                    fileName: "[project]/src/shared/ui/pill-icon.tsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/shared/ui/pill-icon.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                mask: "url(#mask0_648_1198)",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M10.4857 4.32118C10.563 4.42099 10.6072 4.54297 10.5961 4.66495C10.5961 4.77584 10.563 4.88672 10.4857 4.97544L1.65669 13.8135C1.12629 14.3568 1.12629 15.2329 1.65669 15.7762L2.46335 16.5969L0.275441 18.7925C-0.0892095 19.1474 -0.0892094 19.7351 0.275441 20.101C0.640091 20.4559 1.2147 20.4559 1.57934 20.101L3.7783 17.8943L4.58494 18.7038C4.8391 18.97 5.1927 19.1141 5.55735 19.1141C5.922 19.1141 6.2756 18.97 6.52975 18.7038L15.3366 9.87684C15.5134 9.69942 15.8118 9.69942 15.9886 9.87684L16.3532 10.2428C16.53 10.4202 16.762 10.5089 17.0052 10.5089C17.2593 10.5089 17.4914 10.3869 17.6571 10.1984C18.0218 9.84357 18.0218 9.25585 17.6571 8.88991L15.4913 6.72752C15.4029 6.63881 15.3587 6.51683 15.3587 6.39485C15.3587 6.27287 15.4139 6.16198 15.4913 6.07327L16.0549 5.58534C16.2316 5.40791 16.519 5.40791 16.6957 5.58534L17.182 6.07327C17.5466 6.43921 18.1323 6.42812 18.4969 6.07327C18.8615 5.70732 18.8505 5.1196 18.4969 4.75366L17.0273 3.2899L15.5576 1.82612C15.1708 1.49345 14.5852 1.53781 14.2648 1.92593C13.9664 2.26969 13.9664 2.77979 14.2648 3.12355L14.7509 3.61148C14.8394 3.70019 14.8835 3.82217 14.8835 3.94415C14.8835 4.06613 14.8283 4.17703 14.7509 4.26574L14.1984 4.8202C14.0217 4.99762 13.7233 4.99762 13.5465 4.8202L11.2149 2.48038C10.9277 2.059 10.3531 1.95919 9.93311 2.24751C9.51327 2.53583 9.4138 3.11246 9.70112 3.53386C9.75635 3.62257 9.83374 3.68911 9.91104 3.75563L10.4857 4.33227V4.32118ZM11.668 5.72951C11.8448 5.55208 12.1432 5.55208 12.3199 5.72951L14.5962 8.02496C14.7731 8.19129 14.7841 8.46852 14.6184 8.65704C14.6184 8.65704 14.6073 8.66813 14.5962 8.67921L12.9609 10.3204C12.7951 10.4978 12.5189 10.5089 12.331 10.3426C12.331 10.3426 12.3199 10.3315 12.3089 10.3204L10.0216 8.03604C9.93311 7.94733 9.88897 7.83644 9.88897 7.71446C9.88897 7.59248 9.9442 7.4705 10.0216 7.38179L11.6569 5.74059L11.668 5.72951Z",
                    fill: "currentColor"
                }, void 0, false, {
                    fileName: "[project]/src/shared/ui/pill-icon.tsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/shared/ui/pill-icon.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/shared/ui/pill-icon.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/shared/ui/shield-check-icon.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ShieldCheckIcon": (()=>ShieldCheckIcon)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
const ShieldCheckIcon = ({ className = "" })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "17",
        height: "22",
        viewBox: "0 0 17 22",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M15.3074 5.48968C15.3088 5.28497 15.2511 5.08422 15.1413 4.91145C15.0315 4.7387 14.8741 4.60127 14.6882 4.51565C12.6919 3.6367 10.5312 3.19318 8.35005 3.21461C6.16885 3.19318 4.00816 3.6367 2.01181 4.51565C1.82587 4.60127 1.66856 4.7387 1.55873 4.91145C1.44891 5.08422 1.39123 5.28497 1.39261 5.48968V10.8051C1.38818 12.53 1.90631 14.2156 2.87876 15.6401C3.85121 17.0647 5.23235 18.1612 6.84026 18.7853L7.5847 19.0706C8.0765 19.2644 8.62356 19.2644 9.11531 19.0706L9.85978 18.7853C11.4677 18.1612 12.8489 17.0647 13.8212 15.6401C14.7937 14.2156 15.3119 12.53 15.3074 10.8051V5.48968ZM12.8793 8.59964L8.70488 14.3256C8.62456 14.4349 8.51987 14.5239 8.39906 14.5855C8.27824 14.6471 8.14471 14.6796 8.00911 14.6804C7.78029 14.6794 7.5608 14.5896 7.39685 14.4299L4.17557 11.2156C4.01226 11.0523 3.92053 10.8308 3.92053 10.5999C3.92053 10.369 4.01226 10.1475 4.17557 9.98417C4.33887 9.82087 4.56035 9.72912 4.7913 9.72912C5.02225 9.72912 5.24373 9.82087 5.40703 9.98417L7.7308 12.308C7.74902 12.3258 7.77092 12.3394 7.79497 12.3478C7.81901 12.3561 7.84461 12.3592 7.86996 12.3566C7.89492 12.3561 7.91938 12.3496 7.94121 12.3374C7.96305 12.3253 7.98157 12.308 7.99519 12.2871L11.4739 7.54212C11.6187 7.38191 11.8179 7.28129 12.0328 7.25985C12.2477 7.23841 12.4629 7.2977 12.6365 7.42616C12.81 7.55461 12.9296 7.74305 12.9719 7.95482C13.0142 8.16658 12.9763 8.38651 12.8654 8.57182L12.8793 8.59964Z",
            fill: "#F4F5F0"
        }, void 0, false, {
            fileName: "[project]/src/shared/ui/shield-check-icon.tsx",
            lineNumber: 17,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/shared/ui/shield-check-icon.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
};
}}),
"[project]/src/shared/ui/timer-icon.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "TimerIcon": (()=>TimerIcon)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
function TimerIcon({ className, size = 64 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 64 64",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "32",
                cy: "32",
                r: "28",
                stroke: "currentColor",
                strokeWidth: "2",
                fill: "none"
            }, void 0, false, {
                fileName: "[project]/src/shared/ui/timer-icon.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "32",
                cy: "32",
                r: "4",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/shared/ui/timer-icon.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "32",
                y1: "12",
                x2: "32",
                y2: "20",
                stroke: "currentColor",
                strokeWidth: "2"
            }, void 0, false, {
                fileName: "[project]/src/shared/ui/timer-icon.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "32",
                y1: "44",
                x2: "32",
                y2: "52",
                stroke: "currentColor",
                strokeWidth: "2"
            }, void 0, false, {
                fileName: "[project]/src/shared/ui/timer-icon.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "52",
                y1: "32",
                x2: "44",
                y2: "32",
                stroke: "currentColor",
                strokeWidth: "2"
            }, void 0, false, {
                fileName: "[project]/src/shared/ui/timer-icon.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "20",
                y1: "32",
                x2: "12",
                y2: "32",
                stroke: "currentColor",
                strokeWidth: "2"
            }, void 0, false, {
                fileName: "[project]/src/shared/ui/timer-icon.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "32",
                y1: "32",
                x2: "42",
                y2: "22",
                stroke: "currentColor",
                strokeWidth: "2"
            }, void 0, false, {
                fileName: "[project]/src/shared/ui/timer-icon.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "32",
                y1: "32",
                x2: "32",
                y2: "20",
                stroke: "currentColor",
                strokeWidth: "2"
            }, void 0, false, {
                fileName: "[project]/src/shared/ui/timer-icon.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/shared/ui/timer-icon.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/shared/ui/utensils-icon.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "UtensilsIcon": (()=>UtensilsIcon)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
function UtensilsIcon({ className, size = 64 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 64 64",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "20",
                y1: "8",
                x2: "20",
                y2: "56",
                stroke: "currentColor",
                strokeWidth: "2"
            }, void 0, false, {
                fileName: "[project]/src/shared/ui/utensils-icon.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "16",
                y1: "8",
                x2: "16",
                y2: "24",
                stroke: "currentColor",
                strokeWidth: "2"
            }, void 0, false, {
                fileName: "[project]/src/shared/ui/utensils-icon.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "24",
                y1: "8",
                x2: "24",
                y2: "24",
                stroke: "currentColor",
                strokeWidth: "2"
            }, void 0, false, {
                fileName: "[project]/src/shared/ui/utensils-icon.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "18",
                y1: "8",
                x2: "18",
                y2: "20",
                stroke: "currentColor",
                strokeWidth: "1"
            }, void 0, false, {
                fileName: "[project]/src/shared/ui/utensils-icon.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "22",
                y1: "8",
                x2: "22",
                y2: "20",
                stroke: "currentColor",
                strokeWidth: "1"
            }, void 0, false, {
                fileName: "[project]/src/shared/ui/utensils-icon.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "44",
                y1: "8",
                x2: "44",
                y2: "56",
                stroke: "currentColor",
                strokeWidth: "2"
            }, void 0, false, {
                fileName: "[project]/src/shared/ui/utensils-icon.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M40 8 L48 8 L44 16 Z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/shared/ui/utensils-icon.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/shared/ui/utensils-icon.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/shared/ui/scale-icon.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ScaleIcon": (()=>ScaleIcon)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
function ScaleIcon({ className, size = 64 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 64 64",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "8",
                y: "48",
                width: "48",
                height: "8",
                rx: "4",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/shared/ui/scale-icon.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "16",
                y: "40",
                width: "32",
                height: "4",
                rx: "2",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/shared/ui/scale-icon.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "24",
                y: "16",
                width: "16",
                height: "12",
                rx: "2",
                stroke: "currentColor",
                strokeWidth: "2",
                fill: "none"
            }, void 0, false, {
                fileName: "[project]/src/shared/ui/scale-icon.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "28",
                y1: "20",
                x2: "36",
                y2: "20",
                stroke: "currentColor",
                strokeWidth: "1"
            }, void 0, false, {
                fileName: "[project]/src/shared/ui/scale-icon.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "28",
                y1: "24",
                x2: "36",
                y2: "24",
                stroke: "currentColor",
                strokeWidth: "1"
            }, void 0, false, {
                fileName: "[project]/src/shared/ui/scale-icon.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "32",
                y1: "28",
                x2: "32",
                y2: "40",
                stroke: "currentColor",
                strokeWidth: "2"
            }, void 0, false, {
                fileName: "[project]/src/shared/ui/scale-icon.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "16",
                cy: "52",
                r: "2",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/shared/ui/scale-icon.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "24",
                cy: "52",
                r: "2",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/shared/ui/scale-icon.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "40",
                cy: "52",
                r: "2",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/shared/ui/scale-icon.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "48",
                cy: "52",
                r: "2",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/shared/ui/scale-icon.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/shared/ui/scale-icon.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/shared/ui/metabolism-icon.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "MetabolismIcon": (()=>MetabolismIcon)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/lib/utils.ts [app-rsc] (ecmascript)");
;
;
function MetabolismIcon({ size = 72, className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 72 72",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("flex-shrink-0", className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M28.6875 36.0001C28.6876 37.9395 29.458 39.7994 30.8294 41.1707C32.2007 42.5421 34.0606 43.3126 36.0001 43.3126C37.9395 43.3126 39.7994 42.5421 41.1707 41.1707C42.5421 39.7994 43.3126 37.9395 43.3126 36.0001C43.3126 34.0606 42.5421 32.2007 41.1707 30.8294C39.7994 29.458 37.9395 28.6876 36.0001 28.6875C34.0606 28.6876 32.2007 29.458 30.8294 30.8294C29.458 32.2007 28.6876 34.0606 28.6875 36.0001Z",
                stroke: "currentColor",
                strokeWidth: "2.1",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/shared/ui/metabolism-icon.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M56.7686 28.7139C58.4142 33.4234 58.4076 38.553 56.75 43.2583C55.0923 47.9636 51.8824 51.9646 47.6485 54.603C43.4144 57.2413 38.4084 58.3598 33.454 57.7746C28.4997 57.1892 23.8921 54.9349 20.3894 51.3825C16.8867 47.8302 14.6976 43.1914 14.182 38.2293C13.6666 33.2672 14.8555 28.2775 17.5532 24.081C20.2509 19.8844 24.2967 16.7312 29.025 15.14C33.7531 13.5488 38.8821 13.6144 43.5681 15.3261",
                stroke: "currentColor",
                strokeWidth: "2.1",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/shared/ui/metabolism-icon.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M5.70278 50.6252C2.20462 43.3842 1.4164 35.1294 3.48099 27.3572C5.54559 19.585 10.3264 12.8095 16.9568 8.25895C23.5872 3.70839 31.6286 1.68384 39.6234 2.55223C47.6182 3.42061 55.0373 7.12448 60.5361 12.9925C66.0348 18.8605 69.2494 26.5044 69.597 34.5386C69.9448 42.573 67.4026 50.466 62.4314 56.7871C57.46 63.1082 50.3886 67.4392 42.4988 68.995C34.6089 70.5509 26.4227 69.2286 19.424 65.2678",
                stroke: "currentColor",
                strokeWidth: "2.1",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/shared/ui/metabolism-icon.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M46.2383 21.375C46.2383 22.5386 46.7006 23.6546 47.5234 24.4775C48.3462 25.3002 49.4622 25.7625 50.6258 25.7625C51.7895 25.7625 52.9055 25.3002 53.7283 24.4775C54.551 23.6546 55.0134 22.5386 55.0134 21.375C55.0134 20.2113 54.551 19.0953 53.7283 18.2725C52.9055 17.4498 51.7895 16.9874 50.6258 16.9874C49.4622 16.9874 48.3462 17.4498 47.5234 18.2725C46.7006 19.0953 46.2383 20.2113 46.2383 21.375Z",
                stroke: "currentColor",
                strokeWidth: "2.1",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/shared/ui/metabolism-icon.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M6.75 59.4C6.75 60.5637 7.21225 61.6797 8.03507 62.5025C8.85788 63.3252 9.97386 63.7875 11.1375 63.7875C12.3011 63.7875 13.4171 63.3252 14.2399 62.5025C15.0628 61.6797 15.525 60.5637 15.525 59.4C15.525 58.2364 15.0628 57.1204 14.2399 56.2975C13.4171 55.4748 12.3011 55.0126 11.1375 55.0126C9.97386 55.0126 8.85788 55.4748 8.03507 56.2975C7.21225 57.1204 6.75 58.2364 6.75 59.4Z",
                stroke: "currentColor",
                strokeWidth: "2.1",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/shared/ui/metabolism-icon.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/shared/ui/metabolism-icon.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/shared/ui/appetite-control-icon.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "AppetiteControlIcon": (()=>AppetiteControlIcon)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/lib/utils.ts [app-rsc] (ecmascript)");
;
;
function AppetiteControlIcon({ size = 72, className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 73 72",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("flex-shrink-0", className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M43.3633 40.3874H50.5616C50.7699 40.3891 50.9762 40.3461 51.1666 40.2617C51.357 40.1771 51.5271 40.0527 51.6656 39.8971C51.8041 39.7415 51.9076 39.5581 51.9696 39.3591C52.0314 39.1602 52.05 38.9503 52.0242 38.7437C51.2344 32.5046 47.0137 16.9874 43.3633 16.9874V56.475",
                stroke: "currentColor",
                strokeWidth: "2.1",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/shared/ui/appetite-control-icon.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M28.7383 16.9874V56.475",
                stroke: "currentColor",
                strokeWidth: "2.1",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/shared/ui/appetite-control-icon.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M2.41406 36.0001C2.41406 40.4174 3.28412 44.7915 4.97456 48.8726C6.665 52.9537 9.14273 56.6618 12.2662 59.7854C15.3898 62.9088 19.098 65.3866 23.179 67.0771C27.2601 68.7675 31.6342 69.6375 36.0516 69.6375C40.4689 69.6376 44.843 68.7675 48.9241 67.0771C53.0052 65.3866 56.7133 62.9088 59.8369 59.7854C62.9604 56.6618 65.4381 52.9537 67.1286 48.8726C68.819 44.7915 69.6891 40.4174 69.689 36.0001C69.6891 31.5827 68.819 27.2086 67.1286 23.1275C65.4381 19.0464 62.9604 15.3383 59.8369 12.2147C56.7133 9.09121 53.0052 6.61349 48.9241 4.92305C44.843 3.23261 40.4689 2.36255 36.0516 2.36255C31.6342 2.36255 27.2601 3.23261 23.179 4.92305C19.098 6.61349 15.3898 9.09121 12.2662 12.2147C9.14273 15.3383 6.665 19.0464 4.97456 23.1275C3.28412 27.2086 2.41406 31.5827 2.41406 36.0001Z",
                stroke: "currentColor",
                strokeWidth: "2.1",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/shared/ui/appetite-control-icon.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M22.8887 16.9873V31.6124C22.8888 33.1639 23.5051 34.6519 24.6022 35.7489C25.6992 36.846 27.1872 37.4624 28.7387 37.4624C30.2903 37.4624 31.7783 36.846 32.8753 35.7489C33.9724 34.6519 34.5887 33.1639 34.5887 31.6124V16.9873",
                stroke: "currentColor",
                strokeWidth: "2.1",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/shared/ui/appetite-control-icon.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M23.6877 50.6924L13.4414 60.9064",
                stroke: "currentColor",
                strokeWidth: "2.1",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/shared/ui/appetite-control-icon.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M61.0333 13.4805L53.7207 20.7666",
                stroke: "currentColor",
                strokeWidth: "2.1",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/shared/ui/appetite-control-icon.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/shared/ui/appetite-control-icon.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/shared/ui/weight-support-icon.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "WeightSupportIcon": (()=>WeightSupportIcon)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/lib/utils.ts [app-rsc] (ecmascript)");
;
;
function WeightSupportIcon({ size = 72, className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 73 72",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("flex-shrink-0", className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8.18421 67.0339C8.3479 68.5227 9.67003 69.6511 11.2314 69.6511H60.9558C62.5298 69.6511 63.8393 68.5227 64.003 67.0339L69.6819 15.6149C69.7952 14.6184 69.3671 13.6461 68.5486 13.0217C59.3441 6.0226 47.8857 2.25291 36.0999 2.34896C24.3141 2.25291 12.8558 6.0226 3.65122 13.0217C2.83276 13.6461 2.40464 14.6184 2.51797 15.6149L8.19681 67.0339H8.18421Z",
                stroke: "currentColor",
                strokeWidth: "2.1",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/shared/ui/weight-support-icon.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M60.0756 18.1067C60.4787 18.3584 60.7289 18.7957 60.7289 19.2595V26.5349C60.7289 27.3035 60.0756 27.9131 59.2834 27.9131H12.9162C12.1101 27.9131 11.4707 27.2902 11.4707 26.5349V19.2595C11.4707 18.7957 11.7209 18.3584 12.124 18.1067C22.5483 11.6662 35.3354 9.71819 47.3441 12.7264C51.8613 13.8528 56.17 15.6683 60.0756 18.1067Z",
                stroke: "currentColor",
                strokeWidth: "2.1",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/shared/ui/weight-support-icon.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M33.1953 27.9134L36.1003 19.6177L39.0051 27.9134H33.2092H33.1953Z",
                stroke: "currentColor",
                strokeWidth: "2.1",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/shared/ui/weight-support-icon.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M36.1016 15.4834V11.3356",
                stroke: "currentColor",
                strokeWidth: "2.1",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/shared/ui/weight-support-icon.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M43.3418 16.1182L44.1478 12.0498",
                stroke: "currentColor",
                strokeWidth: "2.1",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/shared/ui/weight-support-icon.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M50.3301 18.0406L51.9146 14.1843",
                stroke: "currentColor",
                strokeWidth: "2.1",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/shared/ui/weight-support-icon.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M28.8589 16.1182L28.0527 12.0498",
                stroke: "currentColor",
                strokeWidth: "2.1",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/shared/ui/weight-support-icon.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M21.8657 18.0409L20.2812 14.1846",
                stroke: "currentColor",
                strokeWidth: "2.1",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/shared/ui/weight-support-icon.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/shared/ui/weight-support-icon.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/shared/ui/badge.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Badge": (()=>Badge),
    "badgeVariants": (()=>badgeVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/lib/utils.ts [app-rsc] (ecmascript)");
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
    variants: {
        variant: {
            default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
            secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
            destructive: "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
            outline: "text-foreground",
            success: "border-transparent bg-green-100 text-green-800 hover:bg-green-200",
            warning: "border-transparent bg-yellow-100 text-yellow-800 hover:bg-yellow-200",
            new: "border-transparent bg-purple-100 text-purple-800 hover:bg-purple-200",
            category: "border-transparent bg-gray-100 text-gray-600 hover:bg-gray-200"
        },
        size: {
            default: "px-2.5 py-0.5 text-xs",
            sm: "px-2 py-0.5 text-xs",
            lg: "px-3 py-1 text-sm"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function Badge({ className, variant, size, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant,
            size
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/shared/ui/badge.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
;
}}),
"[project]/src/shared/ui/number-display.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "NumberDisplay": (()=>NumberDisplay)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/lib/utils.ts [app-rsc] (ecmascript)");
;
;
const sizeClasses = {
    sm: 'text-lg font-semibold',
    md: 'text-2xl font-bold',
    lg: 'text-4xl font-bold',
    xl: 'text-6xl font-bold'
};
const colorClasses = {
    default: 'text-gray-900',
    primary: 'text-blue-600',
    white: 'text-white',
    muted: 'text-gray-600'
};
function NumberDisplay({ value, unit, size = 'md', color = 'default', className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])(sizeClasses[size], colorClasses[color], 'tabular-nums', className),
        children: [
            value.toLocaleString(),
            unit && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "ml-1 text-current opacity-80",
                children: unit
            }, void 0, false, {
                fileName: "[project]/src/shared/ui/number-display.tsx",
                lineNumber: 40,
                columnNumber: 16
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/shared/ui/number-display.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/shared/ui/percentage-display.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "PercentageDisplay": (()=>PercentageDisplay)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/lib/utils.ts [app-rsc] (ecmascript)");
;
;
const sizeClasses = {
    sm: 'text-lg font-semibold',
    md: 'text-2xl font-bold',
    lg: 'text-4xl font-bold',
    xl: 'text-[86px] font-bold',
    custom: 'font-bold'
};
const colorClasses = {
    default: 'text-gray-900',
    primary: 'text-blue-600',
    white: 'text-white',
    success: 'text-green-600',
    muted: 'text-gray-600'
};
function PercentageDisplay({ value, size = 'md', color = 'default', showSign = false, precision = 1, fontSize, className }) {
    const formattedValue = value.toFixed(precision);
    const sign = showSign && value > 0 ? '+' : '';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])(sizeClasses[size], colorClasses[color], 'tabular-nums', className),
        style: size === 'custom' && fontSize ? {
            fontSize
        } : undefined,
        children: [
            sign,
            formattedValue,
            "%"
        ]
    }, void 0, true, {
        fileName: "[project]/src/shared/ui/percentage-display.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/shared/ui/slider.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Slider": (()=>Slider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const Slider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Slider() from the server but Slider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/shared/ui/slider.tsx <module evaluation>", "Slider");
}}),
"[project]/src/shared/ui/slider.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Slider": (()=>Slider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const Slider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Slider() from the server but Slider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/shared/ui/slider.tsx", "Slider");
}}),
"[project]/src/shared/ui/slider.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$slider$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/shared/ui/slider.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$slider$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/src/shared/ui/slider.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$slider$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/src/shared/ui/text-input.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "TextInput": (()=>TextInput)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const TextInput = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call TextInput() from the server but TextInput is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/shared/ui/text-input.tsx <module evaluation>", "TextInput");
}}),
"[project]/src/shared/ui/text-input.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "TextInput": (()=>TextInput)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const TextInput = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call TextInput() from the server but TextInput is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/shared/ui/text-input.tsx", "TextInput");
}}),
"[project]/src/shared/ui/text-input.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$text$2d$input$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/shared/ui/text-input.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$text$2d$input$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/src/shared/ui/text-input.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$text$2d$input$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/src/shared/ui/test-status-badge.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "TestStatusBadge": (()=>TestStatusBadge),
    "testStatusBadgeVariants": (()=>testStatusBadgeVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/lib/utils.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$typography$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/typography.tsx [app-rsc] (ecmascript)");
;
;
;
;
const testStatusBadgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center gap-1 sm:gap-2 rounded-full", {
    variants: {
        status: {
            passed: "bg-black text-white",
            failed: "bg-red-600 text-white",
            pending: "bg-yellow-500 text-white"
        },
        size: {
            default: "px-2 sm:px-3 py-1 sm:py-2 text-xs sm:text-sm",
            small: "px-1.5 sm:px-2 py-0.5 sm:py-1 text-xs",
            large: "px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base"
        }
    },
    defaultVariants: {
        status: "passed",
        size: "default"
    }
});
function TestStatusBadge({ label, status, size, className, ...props }) {
    // Icon based on status
    const getIcon = ()=>{
        switch(status){
            case "passed":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    width: "12",
                    height: "12",
                    className: "sm:w-[14px] sm:h-[14px]",
                    viewBox: "0 0 14 14",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M11.6666 3.5L5.24996 9.91667L2.33329 7",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }, void 0, false, {
                        fileName: "[project]/src/shared/ui/test-status-badge.tsx",
                        lineNumber: 49,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/shared/ui/test-status-badge.tsx",
                    lineNumber: 48,
                    columnNumber: 11
                }, this);
            case "failed":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    width: "12",
                    height: "12",
                    className: "sm:w-[14px] sm:h-[14px]",
                    viewBox: "0 0 14 14",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M10.5 3.5L3.5 10.5M3.5 3.5L10.5 10.5",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }, void 0, false, {
                        fileName: "[project]/src/shared/ui/test-status-badge.tsx",
                        lineNumber: 61,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/shared/ui/test-status-badge.tsx",
                    lineNumber: 60,
                    columnNumber: 11
                }, this);
            default:
                return null;
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])(testStatusBadgeVariants({
            status,
            size
        }), className),
        ...props,
        children: [
            getIcon(),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$typography$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Text"], {
                variant: "caption",
                className: "font-medium text-current text-xs sm:text-sm",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/shared/ui/test-status-badge.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/shared/ui/test-status-badge.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
;
}}),
"[project]/src/shared/ui/treatment-card.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "TreatmentCard": (()=>TreatmentCard),
    "treatmentCardVariants": (()=>treatmentCardVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/lib/utils.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$image$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/image.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$typography$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/typography.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/button.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
const treatmentCardVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cva"])("group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 rounded-xl overflow-hidden flex flex-col", {
    variants: {
        variant: {
            default: "bg-transparent border-0 shadow-none",
            featured: "bg-gradient-to-br from-purple-50 to-blue-50 border-purple-200",
            white: "bg-white"
        },
        size: {
            default: "w-full min-h-[450px] sm:min-h-[500px] max-h-[600px]",
            compact: "w-full min-h-[400px] max-h-[500px]",
            wide: "w-full min-h-[500px] max-h-[650px]"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function TreatmentCard({ image, title, description, category, ctaText, ctaUrl, variant, size, className, onClick, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])(treatmentCardVariants({
            variant,
            size
        }), className),
        onClick: onClick,
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative overflow-hidden h-[200px] sm:h-[250px] md:h-[300px]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$image$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["OptimizedImage"], {
                    src: image.src,
                    alt: image.alt,
                    fill: true,
                    className: "w-full h-full object-cover bg-white transition-transform duration-300 group-hover:scale-105",
                    sizes: "(max-width: 640px) 90vw, (max-width: 768px) 80vw, (max-width: 1024px) 50vw, 390px"
                }, void 0, false, {
                    fileName: "[project]/src/shared/ui/treatment-card.tsx",
                    lineNumber: 79,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/shared/ui/treatment-card.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 px-3 sm:px-4 pt-3 sm:pt-4 flex flex-col justify-between",
                style: {
                    backgroundColor: '#FAF8F2A3'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "inline-block rounded-full px-2 sm:px-3 py-1 mb-3 sm:mb-4 w-fit",
                        style: {
                            backgroundColor: '#EEEEEE'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$typography$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Text"], {
                            variant: "caption",
                            className: "text-black font-semibold text-[12px] sm:text-[14px]",
                            style: {
                                fontFamily: 'Roboto, sans-serif'
                            },
                            children: category
                        }, void 0, false, {
                            fileName: "[project]/src/shared/ui/treatment-card.tsx",
                            lineNumber: 98,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/shared/ui/treatment-card.tsx",
                        lineNumber: 94,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$typography$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Heading"], {
                        level: "h3",
                        className: "mb-2 text-black font-bold text-[16px] sm:text-[18px] md:text-[22px] leading-tight",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/src/shared/ui/treatment-card.tsx",
                        lineNumber: 108,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 mb-4 sm:mb-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$typography$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Text"], {
                            variant: "body",
                            className: "text-black font-normal text-[13px] sm:text-[14px] md:text-[15px] leading-[150%] tracking-[0%] mb-4 sm:mb-6",
                            style: {
                                fontFamily: 'Roboto, sans-serif'
                            },
                            children: description
                        }, void 0, false, {
                            fileName: "[project]/src/shared/ui/treatment-card.tsx",
                            lineNumber: 117,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/shared/ui/treatment-card.tsx",
                        lineNumber: 115,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-start pb-4 sm:pb-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "ghost",
                            size: "sm",
                            className: "px-0 text-left bg-transparent text-black hover:bg-black hover:text-white transition-all inline-flex items-center gap-2 border-0 p-0 h-auto text-[13px] sm:text-[15px] md:text-[16px]",
                            asChild: true,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: ctaUrl,
                                children: [
                                    ctaText,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "14",
                                        height: "14",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M5 12H19M19 12L12 5M19 12L12 19",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        }, void 0, false, {
                                            fileName: "[project]/src/shared/ui/treatment-card.tsx",
                                            lineNumber: 137,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/shared/ui/treatment-card.tsx",
                                        lineNumber: 136,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/shared/ui/treatment-card.tsx",
                                lineNumber: 134,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/shared/ui/treatment-card.tsx",
                            lineNumber: 128,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/shared/ui/treatment-card.tsx",
                        lineNumber: 127,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/shared/ui/treatment-card.tsx",
                lineNumber: 89,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/shared/ui/treatment-card.tsx",
        lineNumber: 72,
        columnNumber: 5
    }, this);
}
;
}}),
"[project]/src/shared/ui/medication-card.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "MedicationCard": (()=>MedicationCard),
    "medicationCardVariants": (()=>medicationCardVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/lib/utils.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$image$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/image.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$typography$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/typography.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/button.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
const medicationCardVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cva"])("group relative overflow-hidden rounded-2xl bg-card-bg transition-all duration-300 hover:shadow-xl hover:-translate-y-1", {
    variants: {
        variant: {
            default: "",
            featured: "border-2 border-blue-500 shadow-lg"
        },
        size: {
            default: "w-full max-w-[500px]",
            compact: "max-w-[400px]"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function MedicationCard({ image, title, subtitle, price, planDuration, primaryCTA, secondaryCTA, safetyInfo, variant, size, className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full mx-auto flex flex-col items-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])(medicationCardVariants({
                    variant,
                    size
                }), "w-full flex flex-col", className),
                style: {
                    aspectRatio: "5/6"
                },
                ...props,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 sm:p-6 pb-2 sm:pb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border-b border-gray-200 mb-2 sm:mb-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$typography$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Heading"], {
                                    level: "h3",
                                    className: "text-xl sm:text-2xl md:text-[30px] font-light text-[#171717] mb-2 break-words",
                                    children: title
                                }, void 0, false, {
                                    fileName: "[project]/src/shared/ui/medication-card.tsx",
                                    lineNumber: 89,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/shared/ui/medication-card.tsx",
                                lineNumber: 88,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$typography$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Text"], {
                                        variant: "body",
                                        className: "text-lg sm:text-xl md:text-[24px] font-light text-[#171717] break-words",
                                        children: subtitle
                                    }, void 0, false, {
                                        fileName: "[project]/src/shared/ui/medication-card.tsx",
                                        lineNumber: 99,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$typography$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Text"], {
                                        variant: "body",
                                        className: "text-base sm:text-[17px] font-bold text-[#171717]",
                                        children: price
                                    }, void 0, false, {
                                        fileName: "[project]/src/shared/ui/medication-card.tsx",
                                        lineNumber: 107,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/shared/ui/medication-card.tsx",
                                lineNumber: 97,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/shared/ui/medication-card.tsx",
                        lineNumber: 86,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative flex-1 overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$image$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["OptimizedImage"], {
                                src: image.src,
                                alt: image.alt,
                                fill: true,
                                className: "object-cover transition-transform duration-300 group-hover:scale-105"
                            }, void 0, false, {
                                fileName: "[project]/src/shared/ui/medication-card.tsx",
                                lineNumber: 118,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-x-2 sm:inset-x-4 md:inset-x-6 bottom-4 sm:bottom-8 md:bottom-16",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col sm:flex-row gap-2 sm:gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "default",
                                            size: "lg",
                                            className: "flex-1 bg-black text-white hover:bg-gray-800 rounded-full px-3 sm:px-4 md:px-6 py-2 sm:py-3 text-xs sm:text-sm md:text-base",
                                            asChild: true,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: primaryCTA.href,
                                                children: primaryCTA.text
                                            }, void 0, false, {
                                                fileName: "[project]/src/shared/ui/medication-card.tsx",
                                                lineNumber: 134,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/shared/ui/medication-card.tsx",
                                            lineNumber: 128,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "ghost",
                                            size: "lg",
                                            className: "flex-1 text-gray-600 hover:text-gray-900 bg-white/50 backdrop-blur-[20px] hover:bg-white rounded-full px-3 sm:px-4 md:px-6 py-2 sm:py-3 text-xs sm:text-sm md:text-base",
                                            asChild: true,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: secondaryCTA.href,
                                                children: secondaryCTA.text
                                            }, void 0, false, {
                                                fileName: "[project]/src/shared/ui/medication-card.tsx",
                                                lineNumber: 145,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/shared/ui/medication-card.tsx",
                                            lineNumber: 139,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/shared/ui/medication-card.tsx",
                                    lineNumber: 127,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/shared/ui/medication-card.tsx",
                                lineNumber: 126,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/shared/ui/medication-card.tsx",
                        lineNumber: 117,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/shared/ui/medication-card.tsx",
                lineNumber: 80,
                columnNumber: 7
            }, this),
            (planDuration || safetyInfo) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full max-w-[95%] sm:max-w-[90%] md:max-w-full mt-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs sm:text-sm px-2 sm:px-4 md:px-6",
                    children: [
                        planDuration && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$typography$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Text"], {
                            variant: "caption",
                            className: "text-gray-500 break-words",
                            children: [
                                "*",
                                planDuration
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/shared/ui/medication-card.tsx",
                            lineNumber: 159,
                            columnNumber: 15
                        }, this),
                        safetyInfo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: safetyInfo.href,
                            className: "text-gray-500 underline hover:text-gray-700 transition-colors break-words",
                            children: safetyInfo.text
                        }, void 0, false, {
                            fileName: "[project]/src/shared/ui/medication-card.tsx",
                            lineNumber: 167,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/shared/ui/medication-card.tsx",
                    lineNumber: 157,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/shared/ui/medication-card.tsx",
                lineNumber: 156,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/shared/ui/medication-card.tsx",
        lineNumber: 79,
        columnNumber: 5
    }, this);
}
;
}}),
"[project]/src/shared/ui/category-card.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "CategoryCard": (()=>CategoryCard)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$image$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/image.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/lib/utils.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/button.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
const CategoryCard = ({ title, image, cta, className })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("relative group overflow-hidden rounded-2xl w-full transition-all duration-300 hover:scale-[1.02]", "shadow-lg hover:shadow-xl", // Default responsive height, but allow override via className
        !className?.includes('h-[') && "aspect-[3/4] sm:aspect-[2/3] md:aspect-[3/4] min-h-[400px] max-h-[600px]", className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$image$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["OptimizedImage"], {
                    src: image.src,
                    alt: image.alt,
                    fill: true,
                    className: "object-cover transition-transform duration-500 group-hover:scale-105",
                    sizes: "(max-width: 640px) 90vw, (max-width: 768px) 80vw, (max-width: 1024px) 50vw, 400px"
                }, void 0, false, {
                    fileName: "[project]/src/shared/ui/category-card.tsx",
                    lineNumber: 44,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/shared/ui/category-card.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/10"
            }, void 0, false, {
                fileName: "[project]/src/shared/ui/category-card.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative h-full flex flex-col justify-between p-4 sm:p-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-white text-[18px] sm:text-[20px] md:text-[24px] lg:text-[30px] font-normal leading-tight",
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/src/shared/ui/category-card.tsx",
                            lineNumber: 60,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/shared/ui/category-card.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            href: cta.href,
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buttonVariants"])({
                                variant: 'cta-primary'
                            }), "text-[14px] sm:text-[16px] md:text-[18px] w-full bg-gray-900 text-white hover:bg-white hover:text-black border-0 font-medium transition-colors duration-200 py-2 sm:py-3"),
                            children: cta.text === 'Learn more' ? `Explore ${title}` : cta.text
                        }, void 0, false, {
                            fileName: "[project]/src/shared/ui/category-card.tsx",
                            lineNumber: 67,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/shared/ui/category-card.tsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/shared/ui/category-card.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/shared/ui/category-card.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
};
}}),
"[project]/src/shared/ui/doctor-card.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "DoctorCard": (()=>DoctorCard),
    "doctorCardVariants": (()=>doctorCardVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/lib/utils.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$image$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/image.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$typography$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/typography.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
const doctorCardVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cva"])("bg-card-bg rounded-2xl transition-all duration-300 hover:shadow-lg border border-gray-100 flex flex-col items-center w-[300px] h-[540px]", {
    variants: {
        variant: {
            default: "p-8",
            compact: "p-6",
            large: "p-10"
        },
        size: {
            default: "w-[300px] h-[540px]",
            small: "max-w-xs",
            medium: "max-w-sm",
            large: "max-w-md"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function DoctorCard({ image, name, title, variant, size, className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])(doctorCardVariants({
            variant,
            size
        }), className, 'p-0 rounded-2xl h-auto sm:h-[540px]'),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-2 sm:mb-6 flex items-center justify-center rounded-t-2xl bg-[#f0edf2] w-full",
                style: {
                    minHeight: 0
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$image$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["OptimizedImage"], {
                    src: image.src,
                    alt: image.alt,
                    width: image.width || 300,
                    height: image.height || 440,
                    className: "w-full h-[100px] sm:h-[440px] rounded-t-2xl object-cover max-[768px]:object-contain"
                }, void 0, false, {
                    fileName: "[project]/src/shared/ui/doctor-card.tsx",
                    lineNumber: 63,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/shared/ui/doctor-card.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-0 mt-0 sm:mt-auto p-2 sm:p-4 w-full text-left",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$typography$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Text"], {
                        variant: "body",
                        className: "font-semibold text-gray-900 text-base sm:text-lg leading-tight block text-left",
                        children: name
                    }, void 0, false, {
                        fileName: "[project]/src/shared/ui/doctor-card.tsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$typography$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Text"], {
                        variant: "caption",
                        className: "text-gray-600 text-xs sm:text-sm leading-relaxed block text-left",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/src/shared/ui/doctor-card.tsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/shared/ui/doctor-card.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/shared/ui/doctor-card.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
;
}}),
"[project]/src/shared/ui/lab-test-item.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "LabTestItem": (()=>LabTestItem)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/lib/utils.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$typography$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/typography.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$test$2d$status$2d$badge$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/test-status-badge.tsx [app-rsc] (ecmascript)");
;
;
;
;
function LabTestItem({ testName, status = "passed", statusLabel, showDropdown = true, className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("flex flex-col sm:flex-row items-start sm:items-center justify-between min-h-[80px] sm:h-[100px] px-3 sm:px-4 md:px-6 py-4 sm:py-0 border-b border-[#17171733] last:border-b-0 gap-3 sm:gap-0", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$typography$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Text"], {
                        variant: "body",
                        className: "font-medium text-gray-900 text-sm sm:text-base",
                        children: testName
                    }, void 0, false, {
                        fileName: "[project]/src/shared/ui/lab-test-item.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this),
                    showDropdown && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "16",
                        height: "16",
                        viewBox: "0 0 16 16",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "text-gray-400",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M4 6L8 10L12 6",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }, void 0, false, {
                            fileName: "[project]/src/shared/ui/lab-test-item.tsx",
                            lineNumber: 51,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/shared/ui/lab-test-item.tsx",
                        lineNumber: 43,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/shared/ui/lab-test-item.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$test$2d$status$2d$badge$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TestStatusBadge"], {
                label: statusLabel,
                status: status,
                size: "default"
            }, void 0, false, {
                fileName: "[project]/src/shared/ui/lab-test-item.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/shared/ui/lab-test-item.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
;
}}),
"[project]/src/shared/ui/lab-test-card.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "LabTestCard": (()=>LabTestCard),
    "labTestCardVariants": (()=>labTestCardVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/lib/utils.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$lab$2d$test$2d$item$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/lab-test-item.tsx [app-rsc] (ecmascript)");
;
;
;
;
const labTestCardVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cva"])("bg-[#FFFFFF40] rounded-2xl shadow-sm border border-gray-100", {
    variants: {
        variant: {
            default: "",
            elevated: "shadow-lg",
            flat: "shadow-none border-gray-200"
        },
        size: {
            default: "p-4 sm:p-6 md:p-8",
            compact: "p-3 sm:p-4 md:p-6",
            large: "p-5 sm:p-8 md:p-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function LabTestCard({ tests, variant, size, className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])(labTestCardVariants({
            variant,
            size
        }), "w-full max-w-full sm:max-w-[500px]", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-0",
            children: tests.map((test, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$lab$2d$test$2d$item$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LabTestItem"], {
                    testName: test.testName,
                    status: test.status,
                    statusLabel: test.statusLabel,
                    showDropdown: test.showDropdown
                }, `test-${index}`, false, {
                    fileName: "[project]/src/shared/ui/lab-test-card.tsx",
                    lineNumber: 51,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/src/shared/ui/lab-test-card.tsx",
            lineNumber: 49,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/shared/ui/lab-test-card.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
;
}}),
"[project]/src/shared/ui/weight-calculator.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "WeightCalculator": (()=>WeightCalculator)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const WeightCalculator = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call WeightCalculator() from the server but WeightCalculator is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/shared/ui/weight-calculator.tsx <module evaluation>", "WeightCalculator");
}}),
"[project]/src/shared/ui/weight-calculator.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "WeightCalculator": (()=>WeightCalculator)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const WeightCalculator = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call WeightCalculator() from the server but WeightCalculator is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/shared/ui/weight-calculator.tsx", "WeightCalculator");
}}),
"[project]/src/shared/ui/weight-calculator.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$weight$2d$calculator$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/shared/ui/weight-calculator.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$weight$2d$calculator$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/src/shared/ui/weight-calculator.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$weight$2d$calculator$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/src/shared/ui/statistic-highlight.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "StatisticHighlight": (()=>StatisticHighlight)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/lib/utils.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$percentage$2d$display$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/percentage-display.tsx [app-rsc] (ecmascript)");
;
;
;
const sizeClasses = {
    sm: {
        preText: 'text-base',
        percentage: 'xl',
        timeframe: 'text-base',
        postText: 'text-sm'
    },
    md: {
        preText: 'text-lg',
        percentage: 'xl',
        timeframe: 'text-lg',
        postText: 'text-base'
    },
    lg: {
        preText: 'text-xl',
        percentage: 'xl',
        timeframe: 'text-xl',
        postText: 'text-lg'
    },
    xl: {
        preText: 'text-[36px]',
        percentage: 'xl',
        timeframe: 'text-[36px]',
        postText: 'text-[36px]'
    }
};
const textColorClasses = {
    default: 'text-gray-900',
    white: 'text-white',
    muted: 'text-gray-600'
};
function StatisticHighlight({ preText = "Experience an average weight loss of", percentage, timeframe = "within a year", postText = "with GLP-1", size = 'lg', textColor = 'white', className, lines, useCustomLayout = false }) {
    const sizeConfig = sizeClasses[size];
    const textColorClass = textColorClasses[textColor];
    // Custom layout for specific text requirements
    if (useCustomLayout && lines) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("space-y-2", className),
            children: lines.map((line, index)=>{
                // Check if this line contains the percentage
                if (line.text.includes('14.9%')) {
                    const parts = line.text.split('14.9%');
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-baseline gap-1",
                        children: [
                            parts[0] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])(textColorClass, "font-normal"),
                                style: {
                                    fontSize: line.fontSize
                                },
                                children: parts[0]
                            }, void 0, false, {
                                fileName: "[project]/src/shared/ui/statistic-highlight.tsx",
                                lineNumber: 78,
                                columnNumber: 19
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$percentage$2d$display$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PercentageDisplay"], {
                                value: percentage,
                                size: "custom",
                                color: textColor,
                                precision: 1,
                                fontSize: line.fontSize,
                                className: "leading-none"
                            }, void 0, false, {
                                fileName: "[project]/src/shared/ui/statistic-highlight.tsx",
                                lineNumber: 85,
                                columnNumber: 17
                            }, this),
                            parts[1] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])(textColorClass, "font-normal"),
                                style: {
                                    fontSize: line.fontSize
                                },
                                children: parts[1]
                            }, void 0, false, {
                                fileName: "[project]/src/shared/ui/statistic-highlight.tsx",
                                lineNumber: 94,
                                columnNumber: 19
                            }, this)
                        ]
                    }, index, true, {
                        fileName: "[project]/src/shared/ui/statistic-highlight.tsx",
                        lineNumber: 76,
                        columnNumber: 15
                    }, this);
                }
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])(textColorClass, "font-normal leading-relaxed"),
                    style: {
                        fontSize: line.fontSize
                    },
                    children: line.text
                }, index, false, {
                    fileName: "[project]/src/shared/ui/statistic-highlight.tsx",
                    lineNumber: 106,
                    columnNumber: 13
                }, this);
            })
        }, void 0, false, {
            fileName: "[project]/src/shared/ui/statistic-highlight.tsx",
            lineNumber: 70,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("space-y-2", className),
        children: [
            preText && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])(sizeConfig.preText, textColorClass, "font-normal leading-relaxed"),
                children: preText
            }, void 0, false, {
                fileName: "[project]/src/shared/ui/statistic-highlight.tsx",
                lineNumber: 123,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-1",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-baseline gap-2 flex-wrap",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$percentage$2d$display$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PercentageDisplay"], {
                            value: percentage,
                            size: "xl",
                            color: textColor,
                            precision: 1,
                            className: "leading-none"
                        }, void 0, false, {
                            fileName: "[project]/src/shared/ui/statistic-highlight.tsx",
                            lineNumber: 135,
                            columnNumber: 11
                        }, this),
                        timeframe && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])(sizeConfig.timeframe, textColorClass, "font-normal"),
                            children: timeframe
                        }, void 0, false, {
                            fileName: "[project]/src/shared/ui/statistic-highlight.tsx",
                            lineNumber: 143,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/shared/ui/statistic-highlight.tsx",
                    lineNumber: 134,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/shared/ui/statistic-highlight.tsx",
                lineNumber: 133,
                columnNumber: 7
            }, this),
            postText && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])(sizeConfig.postText, textColorClass, "font-normal opacity-90"),
                children: postText
            }, void 0, false, {
                fileName: "[project]/src/shared/ui/statistic-highlight.tsx",
                lineNumber: 156,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/shared/ui/statistic-highlight.tsx",
        lineNumber: 120,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/shared/ui/weight-loss-statistic.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "WeightLossStatistic": (()=>WeightLossStatistic)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/lib/utils.ts [app-rsc] (ecmascript)");
;
;
const WeightLossStatistic = ({ preText, mainText, percentage, timeframe, titleAboveDescription, description, variant = 'centered', className })=>{
    const containerClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])('py-0 px-8', {
        'text-center': variant === 'centered',
        'text-left': variant === 'default',
        'py-24': variant === 'large'
    }, className);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: containerClasses,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-[#171717CC] text-[17px] mb-0 font-light",
                children: preText
            }, void 0, false, {
                fileName: "[project]/src/shared/ui/weight-loss-statistic.tsx",
                lineNumber: 38,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl sm:text-[40px] font-light text-[#171717] leading-tight",
                        children: mainText
                    }, void 0, false, {
                        fileName: "[project]/src/shared/ui/weight-loss-statistic.tsx",
                        lineNumber: 44,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-center gap-4 flex-wrap",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-5xl sm:text-[96px] font-light bg-gradient-to-r from-[#CAB8FF] to-[#6F69AC] bg-clip-text text-transparent",
                                children: percentage
                            }, void 0, false, {
                                fileName: "[project]/src/shared/ui/weight-loss-statistic.tsx",
                                lineNumber: 49,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "max-w-full sm:max-w-[100px]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-lg sm:text-[35px] md:text-3xl lg:text-4xl font-light text-[#6F69AC] bg-gradient-to-r from-[#CAB8FF] to-[#6F69AC] bg-clip-text text-transparent",
                                    children: timeframe
                                }, void 0, false, {
                                    fileName: "[project]/src/shared/ui/weight-loss-statistic.tsx",
                                    lineNumber: 53,
                                    columnNumber: 21
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/shared/ui/weight-loss-statistic.tsx",
                                lineNumber: 52,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/shared/ui/weight-loss-statistic.tsx",
                        lineNumber: 48,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/shared/ui/weight-loss-statistic.tsx",
                lineNumber: 43,
                columnNumber: 13
            }, this),
            titleAboveDescription && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-[28px]  mb-2 font-light text-[#171717]",
                children: titleAboveDescription
            }, void 0, false, {
                fileName: "[project]/src/shared/ui/weight-loss-statistic.tsx",
                lineNumber: 63,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-full sm:max-w-[320px] mx-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-[#171717CC] text-[16px] leading-relaxed",
                    children: description
                }, void 0, false, {
                    fileName: "[project]/src/shared/ui/weight-loss-statistic.tsx",
                    lineNumber: 70,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/shared/ui/weight-loss-statistic.tsx",
                lineNumber: 69,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/shared/ui/weight-loss-statistic.tsx",
        lineNumber: 36,
        columnNumber: 9
    }, this);
};
}}),
"[project]/src/shared/ui/health-gains-card.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "HealthGainsCard": (()=>HealthGainsCard)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/lib/utils.ts [app-rsc] (ecmascript)");
;
;
;
const HealthGainsCard = ({ title, description, image, className })=>{
    const containerClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])('w-full max-w-[500px] min-h-[350px] sm:min-h-[700px] p-4 rounded-lg overflow-hidden', 'bg-gradient-to-br from-[rgba(186,171,218,0.10)] to-[rgba(214,229,250,0.10)]', 'flex flex-col', className);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: containerClasses,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4 mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-[24px] font-medium text-[#171717] leading-tight",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/src/shared/ui/health-gains-card.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[#171717CC] text-[17px] leading-relaxed font-normal",
                        children: description
                    }, void 0, false, {
                        fileName: "[project]/src/shared/ui/health-gains-card.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/shared/ui/health-gains-card.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative flex-shrink-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative overflow-hidden rounded-lg",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        src: image.src,
                        alt: image.alt,
                        width: 500,
                        height: 300,
                        className: "w-full h-auto object-cover"
                    }, void 0, false, {
                        fileName: "[project]/src/shared/ui/health-gains-card.tsx",
                        lineNumber: 47,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/shared/ui/health-gains-card.tsx",
                    lineNumber: 46,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/shared/ui/health-gains-card.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/shared/ui/health-gains-card.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
};
}}),
"[project]/src/shared/ui/health-goal-item.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "HealthGoalItem": (()=>HealthGoalItem)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/lib/utils.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$image$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/image.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$sanity$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/lib/sanity.ts [app-rsc] (ecmascript)");
;
;
;
;
const HealthGoalItem = ({ image, title, description, className })=>{
    const containerClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])('flex items-start gap-1', className);
    let imageUrl = '';
    if (image?.asset) {
        const imageBuilder = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$sanity$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["urlFor"])(image);
        if ('width' in imageBuilder) {
            imageUrl = imageBuilder.width(48).height(48).fit('max').auto('format').url();
        } else {
            imageUrl = imageBuilder.url();
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: containerClasses,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$image$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["OptimizedImage"], {
                    src: imageUrl,
                    alt: image?.alt || title,
                    width: 48,
                    height: 48,
                    className: "w-8 h-8 sm:w-12 sm:h-12"
                }, void 0, false, {
                    fileName: "[project]/src/shared/ui/health-goal-item.tsx",
                    lineNumber: 40,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/shared/ui/health-goal-item.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-base sm:text-[24px] font-medium text-[#171717] leading-tight",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/src/shared/ui/health-goal-item.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[#171717CC] text-sm sm:text-[16px] leading-relaxed font-normal",
                        children: description
                    }, void 0, false, {
                        fileName: "[project]/src/shared/ui/health-goal-item.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/shared/ui/health-goal-item.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/shared/ui/health-goal-item.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
};
}}),
"[project]/src/shared/ui/process-step-card.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ProcessStepCard": (()=>ProcessStepCard),
    "processStepCardVariants": (()=>processStepCardVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/lib/utils.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$typography$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/typography.tsx [app-rsc] (ecmascript)");
;
;
;
;
const processStepCardVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cva"])("flex items-center gap-4 transition-all duration-300", {
    variants: {
        variant: {
            default: "",
            highlighted: "bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg"
        },
        layout: {
            horizontal: "flex-row",
            vertical: "flex-col text-center"
        }
    },
    defaultVariants: {
        variant: "default",
        layout: "horizontal"
    }
});
// Default step icon SVG
const DefaultStepIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "18",
        height: "21",
        viewBox: "0 0 18 21",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M17.73 5.62L17.59 5.37C17.4094 5.06769 17.1547 4.81643 16.85 4.64L10.14 0.77C9.8362 0.59375 9.4913 0.50062 9.14 0.5H8.85C8.4987 0.50062 8.1538 0.59375 7.85 0.77L1.14 4.65C0.836969 4.82526 0.58526 5.07697 0.41 5.38L0.27 5.63C0.0937499 5.93384 0.00062 6.27874 0 6.63V14.38C0.00062 14.7313 0.0937499 15.0762 0.27 15.38L0.41 15.63C0.58979 15.9295 0.84049 16.1802 1.14 16.36L7.86 20.23C8.1623 20.4099 8.5082 20.5033 8.86 20.5H9.14C9.4913 20.4994 9.8362 20.4063 10.14 20.23L16.85 16.35C17.156 16.1787 17.4087 15.926 17.58 15.62L17.73 15.37C17.9041 15.0653 17.9971 14.721 18 14.37V6.62C17.9994 6.26874 17.9063 5.92384 17.73 5.62ZM8.85 2.5H9.14L15 5.88L9 9.34L3 5.88L8.85 2.5ZM10 18L15.85 14.62L16 14.37V7.61L10 11.08V18Z",
            fill: "black"
        }, void 0, false, {
            fileName: "[project]/src/shared/ui/process-step-card.tsx",
            lineNumber: 30,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/shared/ui/process-step-card.tsx",
        lineNumber: 29,
        columnNumber: 3
    }, this);
function ProcessStepCard({ icon, title, description, variant, layout, className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])(processStepCardVariants({
            variant,
            layout
        }), className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-shrink-0 w-6 h-6 flex items-center justify-center",
                children: icon || /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(DefaultStepIcon, {}, void 0, false, {
                    fileName: "[project]/src/shared/ui/process-step-card.tsx",
                    lineNumber: 57,
                    columnNumber: 18
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/shared/ui/process-step-card.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$typography$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Heading"], {
                        level: "h3",
                        className: "text-black font-medium text-[15px] sm:text-[18px] leading-normal",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/src/shared/ui/process-step-card.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this),
                    description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$typography$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Text"], {
                        variant: "body",
                        className: "text-gray-600 font-normal text-[13px] sm:text-[16px] leading-[150%] mt-1",
                        children: description
                    }, void 0, false, {
                        fileName: "[project]/src/shared/ui/process-step-card.tsx",
                        lineNumber: 71,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/shared/ui/process-step-card.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/shared/ui/process-step-card.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
;
}}),
"[project]/src/shared/ui/testimonial-card.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "TestimonialCard": (()=>TestimonialCard),
    "testimonialCardVariants": (()=>testimonialCardVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const TestimonialCard = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call TestimonialCard() from the server but TestimonialCard is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/shared/ui/testimonial-card.tsx <module evaluation>", "TestimonialCard");
const testimonialCardVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call testimonialCardVariants() from the server but testimonialCardVariants is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/shared/ui/testimonial-card.tsx <module evaluation>", "testimonialCardVariants");
}}),
"[project]/src/shared/ui/testimonial-card.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "TestimonialCard": (()=>TestimonialCard),
    "testimonialCardVariants": (()=>testimonialCardVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const TestimonialCard = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call TestimonialCard() from the server but TestimonialCard is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/shared/ui/testimonial-card.tsx", "TestimonialCard");
const testimonialCardVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call testimonialCardVariants() from the server but testimonialCardVariants is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/shared/ui/testimonial-card.tsx", "testimonialCardVariants");
}}),
"[project]/src/shared/ui/testimonial-card.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$testimonial$2d$card$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/shared/ui/testimonial-card.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$testimonial$2d$card$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/src/shared/ui/testimonial-card.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$testimonial$2d$card$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/src/shared/ui/overlapping-images.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "OverlappingImages": (()=>OverlappingImages)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/lib/utils.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$image$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/image.tsx [app-rsc] (ecmascript)");
;
;
;
const OverlappingImages = ({ primaryImage, secondaryImage, layout = 'default', overlap = 'medium', borderRadius = 'lg', className })=>{
    const containerClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])('relative w-full', className);
    const overlapValues = {
        small: '70%',
        medium: '80%',
        large: '90%'
    };
    const borderRadiusClasses = {
        none: '',
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
        xl: 'rounded-xl'
    };
    const primaryImageClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])('relative z-10', borderRadiusClasses[borderRadius], 'w-full max-w-full sm:max-w-[340px]');
    const secondaryImageClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])('absolute z-20', borderRadiusClasses[borderRadius], 'w-full max-w-full sm:max-w-[340px]', {
        // Default layout: secondary image on right side, overlapping
        'top-[40%] right-0': layout === 'default',
        // Reversed layout: secondary image on left side
        'top-[40%] left-0 sm:left-[-100px]': layout === 'reversed',
        // Vertical layout: secondary image below, overlapping
        'bottom-0 left-1/4 translate-y-[15%]': layout === 'vertical'
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: containerClasses,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: primaryImageClasses,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$image$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["OptimizedImage"], {
                    src: primaryImage.src,
                    alt: primaryImage.alt,
                    width: primaryImage.width,
                    height: primaryImage.height,
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("w-full h-auto object-cover", borderRadiusClasses[borderRadius])
                }, void 0, false, {
                    fileName: "[project]/src/shared/ui/overlapping-images.tsx",
                    lineNumber: 77,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/shared/ui/overlapping-images.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: secondaryImageClasses,
                style: {
                    width: overlapValues[overlap],
                    aspectRatio: `${secondaryImage.width}/${secondaryImage.height}`
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$image$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["OptimizedImage"], {
                    src: secondaryImage.src,
                    alt: secondaryImage.alt,
                    width: secondaryImage.width,
                    height: secondaryImage.height,
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("w-full h-auto object-cover", borderRadiusClasses[borderRadius])
                }, void 0, false, {
                    fileName: "[project]/src/shared/ui/overlapping-images.tsx",
                    lineNumber: 94,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/shared/ui/overlapping-images.tsx",
                lineNumber: 87,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/shared/ui/overlapping-images.tsx",
        lineNumber: 72,
        columnNumber: 5
    }, this);
};
}}),
"[project]/src/shared/ui/hero-section.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "HeroSection": (()=>HeroSection),
    "heroSectionVariants": (()=>heroSectionVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/lib/utils.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$typography$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/typography.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$cta$2d$buttons$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/cta-buttons.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$image$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/image.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
const heroSectionVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cva"])("relative min-h-screen flex items-end", {
    variants: {
        variant: {
            default: "bg-gradient-to-br from-gray-50 to-white",
            image: "",
            gradient: "bg-gradient-to-br from-primary-50 to-secondary-50",
            overlay: "relative"
        },
        textColor: {
            dark: "text-gray-900",
            light: "text-white",
            primary: "text-primary-900"
        },
        alignment: {
            left: "text-left",
            center: "text-center",
            right: "text-right"
        }
    },
    defaultVariants: {
        variant: "default",
        textColor: "dark",
        alignment: "center"
    }
});
const HeroSection = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, variant, textColor, alignment, heroTitle, subtitle, backgroundImage, primaryCTA, secondaryCTA, overlay = false, overlayOpacity = "medium", horizontalMargin = "none", ...props }, ref)=>{
    const overlayClasses = {
        light: "bg-black/20",
        medium: "bg-black/40",
        dark: "bg-black/60"
    };
    const marginClasses = {
        none: "",
        sm: "mx-2",
        md: "mx-4",
        lg: "mx-6",
        xl: "mx-8"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-[1860px] mx-auto ",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])(heroSectionVariants({
                variant,
                textColor,
                alignment,
                className
            }), marginClasses[horizontalMargin], 'rounded-[38px] '),
            ref: ref,
            ...props,
            children: [
                backgroundImage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 z-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$image$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["OptimizedImage"], {
                            src: backgroundImage.src,
                            alt: backgroundImage.alt,
                            fill: true,
                            priority: backgroundImage.priority || true,
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("object-cover", 'rounded-[38px]'),
                            sizes: "100vw"
                        }, void 0, false, {
                            fileName: "[project]/src/shared/ui/hero-section.tsx",
                            lineNumber: 99,
                            columnNumber: 13
                        }, this),
                        overlay && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("absolute inset-0", overlayClasses[overlayOpacity], 'rounded-[38px]')
                        }, void 0, false, {
                            fileName: "[project]/src/shared/ui/hero-section.tsx",
                            lineNumber: 108,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/shared/ui/hero-section.tsx",
                    lineNumber: 98,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative z-10 w-full px-6 pb-[100px] ",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-[700px] mx-auto space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$typography$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Heading"], {
                                level: "h1",
                                color: textColor === "light" ? "white" : "primary",
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("text-4xl md:text-5xl lg:text-6xl font-bold leading-tight", alignment === "center" && "text-center", alignment === "left" && "text-left", alignment === "right" && "text-right"),
                                children: heroTitle
                            }, void 0, false, {
                                fileName: "[project]/src/shared/ui/hero-section.tsx",
                                lineNumber: 117,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$typography$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Text"], {
                                variant: "hero",
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("block text-lg md:text-xl max-w-2xl leading-relaxed mb-8", textColor === "light" ? "text-white/90" : "text-neutral-600", alignment === "center" && "text-center mx-auto", alignment === "left" && "text-left mx-0", alignment === "right" && "text-right ml-auto mr-0"),
                                children: subtitle
                            }, void 0, false, {
                                fileName: "[project]/src/shared/ui/hero-section.tsx",
                                lineNumber: 131,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("flex ", alignment === "center" && "justify-center", alignment === "left" && "justify-start", alignment === "right" && "justify-end"),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$cta$2d$buttons$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CTAButtons"], {
                                    primaryCTA: primaryCTA,
                                    secondaryCTA: secondaryCTA,
                                    layout: "stacked",
                                    alignment: alignment
                                }, void 0, false, {
                                    fileName: "[project]/src/shared/ui/hero-section.tsx",
                                    lineNumber: 151,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/shared/ui/hero-section.tsx",
                                lineNumber: 145,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/shared/ui/hero-section.tsx",
                        lineNumber: 115,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/shared/ui/hero-section.tsx",
                    lineNumber: 114,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/shared/ui/hero-section.tsx",
            lineNumber: 87,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/shared/ui/hero-section.tsx",
        lineNumber: 86,
        columnNumber: 7
    }, this);
});
HeroSection.displayName = "HeroSection";
;
}}),
"[project]/src/shared/ui/trust-features.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "TrustFeatures": (()=>TrustFeatures)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/lib/utils.ts [app-rsc] (ecmascript)");
;
;
;
function TrustFeatures({ features, textColor = "light", className }) {
    const textColorClass = textColor === "light" ? "text-white" : "text-gray-900";
    const iconColorClass = textColor === "light" ? "text-white" : "text-gray-900";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("space-y-4", className),
        children: features.map((feature, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("flex-shrink-0 mt-0.5", typeof feature.icon === 'string' ? "text-2xl" : iconColorClass),
                        children: typeof feature.icon === 'string' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: feature.icon
                        }, void 0, false, {
                            fileName: "[project]/src/shared/ui/trust-features.tsx",
                            lineNumber: 32,
                            columnNumber: 15
                        }, this) : typeof feature.icon === 'function' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createElement"])(feature.icon, {
                            className: "w-6 h-6"
                        }) : feature.icon
                    }, void 0, false, {
                        fileName: "[project]/src/shared/ui/trust-features.tsx",
                        lineNumber: 27,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("text-lg font-medium leading-relaxed", textColorClass),
                        children: feature.text
                    }, void 0, false, {
                        fileName: "[project]/src/shared/ui/trust-features.tsx",
                        lineNumber: 39,
                        columnNumber: 11
                    }, this)
                ]
            }, index, true, {
                fileName: "[project]/src/shared/ui/trust-features.tsx",
                lineNumber: 26,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/shared/ui/trust-features.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/shared/ui/weight-loss-hero-section.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "WeightLossHeroSection": (()=>WeightLossHeroSection)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/lib/utils.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$typography$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/typography.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/button.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$image$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/image.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$trust$2d$features$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/trust-features.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
const WeightLossHeroSection = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, heroTitle, backgroundImage, primaryCTA, trustFeatures, overlay = true, overlayOpacity = "medium", horizontalMargin = "lg", borderRadius = "2xl", ...props }, ref)=>{
    const overlayClasses = {
        light: "bg-black bg-opacity-30",
        medium: "bg-black bg-opacity-40",
        dark: "bg-black bg-opacity-60"
    };
    const marginClasses = {
        none: "",
        sm: "mx-2",
        md: "mx-4",
        lg: "mx-6",
        xl: "mx-8"
    };
    const radiusClasses = {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        "2xl": "rounded-2xl",
        "3xl": "rounded-3xl"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-[1860px] mx-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("relative min-h-screen flex items-center", marginClasses[horizontalMargin], radiusClasses[borderRadius], className),
            ref: ref,
            ...props,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 z-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$image$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["OptimizedImage"], {
                            src: backgroundImage.src,
                            alt: backgroundImage.alt,
                            fill: true,
                            priority: backgroundImage.priority ?? true,
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("object-cover", radiusClasses[borderRadius]),
                            sizes: "100vw"
                        }, void 0, false, {
                            fileName: "[project]/src/shared/ui/weight-loss-hero-section.tsx",
                            lineNumber: 81,
                            columnNumber: 13
                        }, this),
                        overlay && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("absolute inset-0", overlayClasses[overlayOpacity], radiusClasses[borderRadius])
                        }, void 0, false, {
                            fileName: "[project]/src/shared/ui/weight-loss-hero-section.tsx",
                            lineNumber: 90,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/shared/ui/weight-loss-hero-section.tsx",
                    lineNumber: 80,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative z-10 w-full px-8 lg:px-16",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-[600px] space-y-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$typography$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Heading"], {
                                level: "h1",
                                color: "white",
                                className: "text-4xl md:text-5xl lg:text-6xl font-bold leading-tight",
                                children: heroTitle
                            }, void 0, false, {
                                fileName: "[project]/src/shared/ui/weight-loss-hero-section.tsx",
                                lineNumber: 98,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$trust$2d$features$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TrustFeatures"], {
                                features: trustFeatures,
                                textColor: "light",
                                className: "my-8"
                            }, void 0, false, {
                                fileName: "[project]/src/shared/ui/weight-loss-hero-section.tsx",
                                lineNumber: 107,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pt-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Button"], {
                                    asChild: true,
                                    size: "lg",
                                    className: "bg-white text-gray-900 hover:bg-gray-100 font-semibold px-8 py-4 text-lg",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: primaryCTA.href,
                                        children: primaryCTA.text
                                    }, void 0, false, {
                                        fileName: "[project]/src/shared/ui/weight-loss-hero-section.tsx",
                                        lineNumber: 120,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/shared/ui/weight-loss-hero-section.tsx",
                                    lineNumber: 115,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/shared/ui/weight-loss-hero-section.tsx",
                                lineNumber: 114,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/shared/ui/weight-loss-hero-section.tsx",
                        lineNumber: 96,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/shared/ui/weight-loss-hero-section.tsx",
                    lineNumber: 95,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/shared/ui/weight-loss-hero-section.tsx",
            lineNumber: 69,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/shared/ui/weight-loss-hero-section.tsx",
        lineNumber: 68,
        columnNumber: 7
    }, this);
});
WeightLossHeroSection.displayName = "WeightLossHeroSection";
;
}}),
"[project]/src/shared/ui/weight-loss-intro-section.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "WeightLossIntroSection": (()=>WeightLossIntroSection)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const WeightLossIntroSection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call WeightLossIntroSection() from the server but WeightLossIntroSection is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/shared/ui/weight-loss-intro-section.tsx <module evaluation>", "WeightLossIntroSection");
}}),
"[project]/src/shared/ui/weight-loss-intro-section.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "WeightLossIntroSection": (()=>WeightLossIntroSection)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const WeightLossIntroSection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call WeightLossIntroSection() from the server but WeightLossIntroSection is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/shared/ui/weight-loss-intro-section.tsx", "WeightLossIntroSection");
}}),
"[project]/src/shared/ui/weight-loss-intro-section.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$weight$2d$loss$2d$intro$2d$section$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/shared/ui/weight-loss-intro-section.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$weight$2d$loss$2d$intro$2d$section$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/src/shared/ui/weight-loss-intro-section.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$weight$2d$loss$2d$intro$2d$section$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/src/shared/ui/contact-hero-section.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ContactHeroSection": (()=>ContactHeroSection)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/lib/utils.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$typography$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/typography.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$image$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/image.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
const ContactHeroSection = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, heroTitle, subtitle, backgroundImage, contactInfo, overlay = true, overlayOpacity = "medium", horizontalMargin = "md", borderRadius = "2xl", ...props }, ref)=>{
    const overlayClasses = {
        light: "bg-black bg-opacity-20",
        medium: "bg-black bg-opacity-40",
        dark: "bg-black bg-opacity-60"
    };
    const marginClasses = {
        none: "",
        sm: "mx-2",
        md: "mx-4",
        lg: "mx-6",
        xl: "mx-8"
    };
    const radiusClasses = {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        "2xl": "rounded-2xl",
        "3xl": "rounded-3xl"
    };
    console.log('horizontalMargin', horizontalMargin);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-[1860px] mx-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("relative min-h-screen flex items-center", marginClasses[horizontalMargin], radiusClasses[borderRadius], className),
            ref: ref,
            ...props,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 z-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$image$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["OptimizedImage"], {
                            src: backgroundImage.src,
                            alt: backgroundImage.alt,
                            fill: true,
                            priority: backgroundImage.priority || true,
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("object-cover", radiusClasses[borderRadius]),
                            sizes: "100vw"
                        }, void 0, false, {
                            fileName: "[project]/src/shared/ui/contact-hero-section.tsx",
                            lineNumber: 83,
                            columnNumber: 13
                        }, this),
                        overlay && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("absolute inset-0", overlayClasses[overlayOpacity], radiusClasses[borderRadius])
                        }, void 0, false, {
                            fileName: "[project]/src/shared/ui/contact-hero-section.tsx",
                            lineNumber: 92,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/shared/ui/contact-hero-section.tsx",
                    lineNumber: 82,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative z-10 w-full px-8 lg:px-16",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$typography$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Heading"], {
                                        level: "h1",
                                        color: "white",
                                        className: "text-4xl md:text-5xl lg:text-6xl font-bold leading-tight",
                                        children: heroTitle
                                    }, void 0, false, {
                                        fileName: "[project]/src/shared/ui/contact-hero-section.tsx",
                                        lineNumber: 102,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$typography$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Text"], {
                                        variant: "hero",
                                        className: "text-lg md:text-xl max-w-2xl leading-relaxed text-white/90",
                                        children: subtitle
                                    }, void 0, false, {
                                        fileName: "[project]/src/shared/ui/contact-hero-section.tsx",
                                        lineNumber: 111,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/shared/ui/contact-hero-section.tsx",
                                lineNumber: 100,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-6 lg:ml-auto lg:max-w-md",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center space-x-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-shrink-0",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "w-5 h-5 text-white",
                                                    fill: "currentColor",
                                                    viewBox: "0 0 24 24",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/shared/ui/contact-hero-section.tsx",
                                                            lineNumber: 126,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/shared/ui/contact-hero-section.tsx",
                                                            lineNumber: 127,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/shared/ui/contact-hero-section.tsx",
                                                    lineNumber: 125,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/shared/ui/contact-hero-section.tsx",
                                                lineNumber: 124,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-sm font-medium text-white mb-1",
                                                        children: "Email"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/shared/ui/contact-hero-section.tsx",
                                                        lineNumber: 131,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: `mailto:${contactInfo.email}`,
                                                        className: "text-white hover:text-white/80 transition-colors duration-200 underline",
                                                        children: contactInfo.email
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/shared/ui/contact-hero-section.tsx",
                                                        lineNumber: 132,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/shared/ui/contact-hero-section.tsx",
                                                lineNumber: 130,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/shared/ui/contact-hero-section.tsx",
                                        lineNumber: 123,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center space-x-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-shrink-0",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "w-5 h-5 text-white",
                                                    fill: "currentColor",
                                                    viewBox: "0 0 24 24",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        fillRule: "evenodd",
                                                        d: "M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.653.349 2.227.913l1.119 1.119a3.75 3.75 0 010 5.303l-.119.119a11.26 11.26 0 002.411 3.05 11.26 11.26 0 003.05 2.411l.119-.119a3.75 3.75 0 015.303 0l1.119 1.119c.564.574.913 1.367.913 2.227V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z",
                                                        clipRule: "evenodd"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/shared/ui/contact-hero-section.tsx",
                                                        lineNumber: 145,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/shared/ui/contact-hero-section.tsx",
                                                    lineNumber: 144,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/shared/ui/contact-hero-section.tsx",
                                                lineNumber: 143,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-sm font-medium text-white mb-1",
                                                        children: "Phone"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/shared/ui/contact-hero-section.tsx",
                                                        lineNumber: 149,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: `tel:${contactInfo.phone.replace(/\D/g, '')}`,
                                                        className: "text-white hover:text-white/80 transition-colors duration-200 underline",
                                                        children: contactInfo.phone
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/shared/ui/contact-hero-section.tsx",
                                                        lineNumber: 150,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/shared/ui/contact-hero-section.tsx",
                                                lineNumber: 148,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/shared/ui/contact-hero-section.tsx",
                                        lineNumber: 142,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center space-x-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-shrink-0",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "w-5 h-5 text-white",
                                                    fill: "currentColor",
                                                    viewBox: "0 0 24 24",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        fillRule: "evenodd",
                                                        d: "M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z",
                                                        clipRule: "evenodd"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/shared/ui/contact-hero-section.tsx",
                                                        lineNumber: 163,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/shared/ui/contact-hero-section.tsx",
                                                    lineNumber: 162,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/shared/ui/contact-hero-section.tsx",
                                                lineNumber: 161,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-sm font-medium text-white mb-1",
                                                        children: "Office"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/shared/ui/contact-hero-section.tsx",
                                                        lineNumber: 167,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-white",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: contactInfo.office.address
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/shared/ui/contact-hero-section.tsx",
                                                                lineNumber: 169,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: contactInfo.office.city
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/shared/ui/contact-hero-section.tsx",
                                                                lineNumber: 170,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/shared/ui/contact-hero-section.tsx",
                                                        lineNumber: 168,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/shared/ui/contact-hero-section.tsx",
                                                lineNumber: 166,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/shared/ui/contact-hero-section.tsx",
                                        lineNumber: 160,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/shared/ui/contact-hero-section.tsx",
                                lineNumber: 121,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/shared/ui/contact-hero-section.tsx",
                        lineNumber: 98,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/shared/ui/contact-hero-section.tsx",
                    lineNumber: 97,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/shared/ui/contact-hero-section.tsx",
            lineNumber: 71,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/shared/ui/contact-hero-section.tsx",
        lineNumber: 70,
        columnNumber: 7
    }, this);
});
ContactHeroSection.displayName = "ContactHeroSection";
;
}}),
"[project]/src/shared/ui/treatment-benefits-section.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "TreatmentBenefitsSection": (()=>TreatmentBenefitsSection)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/lib/utils.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$container$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/container.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$typography$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/typography.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
function TreatmentBenefitsSection({ benefits, className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("py-12 sm:py-16 lg:py-24", className),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$container$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Container"], {
            maxWidth: "7xl",
            className: "px-4 sm:px-6 lg:px-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12",
                children: benefits.map((benefit, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center mx-auto w-full max-w-[300px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-3",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-[60px] h-[60px] sm:w-[72px] sm:h-[72px] flex items-center justify-center text-gray-700",
                                    children: typeof benefit.icon === 'function' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createElement"])(benefit.icon, {
                                        className: "w-[60px] h-[60px] sm:w-[72px] sm:h-[72px]"
                                    }) : benefit.icon
                                }, void 0, false, {
                                    fileName: "[project]/src/shared/ui/treatment-benefits-section.tsx",
                                    lineNumber: 29,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/shared/ui/treatment-benefits-section.tsx",
                                lineNumber: 28,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center w-full",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$typography$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Heading"], {
                                        level: "h3",
                                        className: "text-[18px] sm:text-[20px] font-light text-gray-900 mb-2 leading-tight break-words",
                                        children: benefit.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/shared/ui/treatment-benefits-section.tsx",
                                        lineNumber: 40,
                                        columnNumber: 17
                                    }, this),
                                    benefit.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm sm:text-base text-gray-600 break-words",
                                        children: benefit.description
                                    }, void 0, false, {
                                        fileName: "[project]/src/shared/ui/treatment-benefits-section.tsx",
                                        lineNumber: 49,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/shared/ui/treatment-benefits-section.tsx",
                                lineNumber: 38,
                                columnNumber: 15
                            }, this)
                        ]
                    }, index, true, {
                        fileName: "[project]/src/shared/ui/treatment-benefits-section.tsx",
                        lineNumber: 26,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/shared/ui/treatment-benefits-section.tsx",
                lineNumber: 24,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/shared/ui/treatment-benefits-section.tsx",
            lineNumber: 23,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/shared/ui/treatment-benefits-section.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/shared/ui/treatments-section.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "TreatmentsSection": (()=>TreatmentsSection),
    "treatmentsSectionVariants": (()=>treatmentsSectionVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const TreatmentsSection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call TreatmentsSection() from the server but TreatmentsSection is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/shared/ui/treatments-section.tsx <module evaluation>", "TreatmentsSection");
const treatmentsSectionVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call treatmentsSectionVariants() from the server but treatmentsSectionVariants is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/shared/ui/treatments-section.tsx <module evaluation>", "treatmentsSectionVariants");
}}),
"[project]/src/shared/ui/treatments-section.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "TreatmentsSection": (()=>TreatmentsSection),
    "treatmentsSectionVariants": (()=>treatmentsSectionVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const TreatmentsSection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call TreatmentsSection() from the server but TreatmentsSection is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/shared/ui/treatments-section.tsx", "TreatmentsSection");
const treatmentsSectionVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call treatmentsSectionVariants() from the server but treatmentsSectionVariants is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/shared/ui/treatments-section.tsx", "treatmentsSectionVariants");
}}),
"[project]/src/shared/ui/treatments-section.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$treatments$2d$section$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/shared/ui/treatments-section.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$treatments$2d$section$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/src/shared/ui/treatments-section.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$treatments$2d$section$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/src/shared/ui/categories-section.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "CategoriesSection": (()=>CategoriesSection)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const CategoriesSection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call CategoriesSection() from the server but CategoriesSection is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/shared/ui/categories-section.tsx <module evaluation>", "CategoriesSection");
}}),
"[project]/src/shared/ui/categories-section.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "CategoriesSection": (()=>CategoriesSection)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const CategoriesSection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call CategoriesSection() from the server but CategoriesSection is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/shared/ui/categories-section.tsx", "CategoriesSection");
}}),
"[project]/src/shared/ui/categories-section.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$categories$2d$section$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/shared/ui/categories-section.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$categories$2d$section$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/src/shared/ui/categories-section.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$categories$2d$section$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/src/shared/ui/statistics-section.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "StatisticsSection": (()=>StatisticsSection)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/lib/utils.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$weight$2d$calculator$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/weight-calculator.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$container$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/container.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$image$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/image.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
function StatisticsSection({ // Statistics props
statisticPreText, statisticTimeframe, statisticPostText, // Calculator props
calculatorTitle = "Choose your starting weight", calculatorMinWeight = 100, calculatorMaxWeight = 500, calculatorDefaultWeight = 280, calculatorWeightLossPercentage = 0.149, calculatorResultText = "You can loose up to", calculatorUnit = "lbs", // Section styling
backgroundImage = {
    src: "/calculator.png",
    alt: "Weight loss transformation - woman in fitness attire"
}, className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("relative overflow-hidden max-w-[1860px] mx-auto rounded-[20px] max-[768px]:rounded-[0px] h-auto min-h-[500px] sm:min-h-[700px] lg:min-h-[886px]", // Responsive padding
        "px-4 py-8 sm:px-6 sm:py-12 md:px-8 md:py-16 lg:px-[140px] lg:py-[60px]", className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 z-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$image$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["OptimizedImage"], {
                        src: backgroundImage.src,
                        alt: backgroundImage.alt,
                        fill: true,
                        className: "object-cover",
                        sizes: "100vw"
                    }, void 0, false, {
                        fileName: "[project]/src/shared/ui/statistics-section.tsx",
                        lineNumber: 62,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-black/20"
                    }, void 0, false, {
                        fileName: "[project]/src/shared/ui/statistics-section.tsx",
                        lineNumber: 70,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/shared/ui/statistics-section.tsx",
                lineNumber: 61,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$container$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Container"], {
                className: "relative z-10 h-full px-0",
                maxWidth: "8xl",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-full flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-center items-center lg:justify-start lg:items-start lg:pt-6 text-center lg:text-left",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2 sm:space-y-4 text-white",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-normal leading-tight",
                                        children: statisticPreText
                                    }, void 0, false, {
                                        fileName: "[project]/src/shared/ui/statistics-section.tsx",
                                        lineNumber: 79,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[48px] sm:text-[56px] md:text-[68px] lg:text-[86px] font-normal leading-tight",
                                        children: statisticTimeframe
                                    }, void 0, false, {
                                        fileName: "[project]/src/shared/ui/statistics-section.tsx",
                                        lineNumber: 83,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-normal leading-tight",
                                        children: statisticPostText
                                    }, void 0, false, {
                                        fileName: "[project]/src/shared/ui/statistics-section.tsx",
                                        lineNumber: 87,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/shared/ui/statistics-section.tsx",
                                lineNumber: 78,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/shared/ui/statistics-section.tsx",
                            lineNumber: 77,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-center items-center lg:justify-end h-full",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$weight$2d$calculator$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["WeightCalculator"], {
                                title: calculatorTitle,
                                minWeight: calculatorMinWeight,
                                maxWeight: calculatorMaxWeight,
                                defaultWeight: calculatorDefaultWeight,
                                weightLossPercentage: calculatorWeightLossPercentage,
                                resultText: calculatorResultText,
                                unit: calculatorUnit
                            }, void 0, false, {
                                fileName: "[project]/src/shared/ui/statistics-section.tsx",
                                lineNumber: 95,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/shared/ui/statistics-section.tsx",
                            lineNumber: 94,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/shared/ui/statistics-section.tsx",
                    lineNumber: 75,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/shared/ui/statistics-section.tsx",
                lineNumber: 74,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/shared/ui/statistics-section.tsx",
        lineNumber: 54,
        columnNumber: 9
    }, this);
}
}}),
"[project]/src/shared/ui/getting-started-section.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "GettingStartedSection": (()=>GettingStartedSection),
    "gettingStartedSectionVariants": (()=>gettingStartedSectionVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const GettingStartedSection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call GettingStartedSection() from the server but GettingStartedSection is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/shared/ui/getting-started-section.tsx <module evaluation>", "GettingStartedSection");
const gettingStartedSectionVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call gettingStartedSectionVariants() from the server but gettingStartedSectionVariants is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/shared/ui/getting-started-section.tsx <module evaluation>", "gettingStartedSectionVariants");
}}),
"[project]/src/shared/ui/getting-started-section.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "GettingStartedSection": (()=>GettingStartedSection),
    "gettingStartedSectionVariants": (()=>gettingStartedSectionVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const GettingStartedSection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call GettingStartedSection() from the server but GettingStartedSection is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/shared/ui/getting-started-section.tsx", "GettingStartedSection");
const gettingStartedSectionVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call gettingStartedSectionVariants() from the server but gettingStartedSectionVariants is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/shared/ui/getting-started-section.tsx", "gettingStartedSectionVariants");
}}),
"[project]/src/shared/ui/getting-started-section.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$getting$2d$started$2d$section$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/shared/ui/getting-started-section.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$getting$2d$started$2d$section$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/src/shared/ui/getting-started-section.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$getting$2d$started$2d$section$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/src/shared/ui/testimonials-section.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "TestimonialsSection": (()=>TestimonialsSection),
    "testimonialsSectionVariants": (()=>testimonialsSectionVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const TestimonialsSection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call TestimonialsSection() from the server but TestimonialsSection is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/shared/ui/testimonials-section.tsx <module evaluation>", "TestimonialsSection");
const testimonialsSectionVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call testimonialsSectionVariants() from the server but testimonialsSectionVariants is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/shared/ui/testimonials-section.tsx <module evaluation>", "testimonialsSectionVariants");
}}),
"[project]/src/shared/ui/testimonials-section.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "TestimonialsSection": (()=>TestimonialsSection),
    "testimonialsSectionVariants": (()=>testimonialsSectionVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const TestimonialsSection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call TestimonialsSection() from the server but TestimonialsSection is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/shared/ui/testimonials-section.tsx", "TestimonialsSection");
const testimonialsSectionVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call testimonialsSectionVariants() from the server but testimonialsSectionVariants is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/shared/ui/testimonials-section.tsx", "testimonialsSectionVariants");
}}),
"[project]/src/shared/ui/testimonials-section.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$testimonials$2d$section$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/shared/ui/testimonials-section.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$testimonials$2d$section$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/src/shared/ui/testimonials-section.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$testimonials$2d$section$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/src/shared/ui/render-styled-text.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "renderStyledText": (()=>renderStyledText)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
function renderStyledText(text) {
    if (!text) return text;
    // Add more tag configs here as needed
    const TAGS = [
        {
            tag: "gradient",
            className: "gradient-purple-custom"
        }
    ];
    // Recursive function to handle nested/overlapping tags if needed
    function parse(str) {
        // Handle [br] tags first (self-closing)
        const brIndex = str.indexOf('[br]');
        if (brIndex !== -1) {
            const before = str.slice(0, brIndex);
            const after = str.slice(brIndex + 4); // '[br]' is 4 characters
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    parse(before),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: "[project]/src/shared/ui/render-styled-text.tsx",
                        lineNumber: 31,
                        columnNumber: 11
                    }, this),
                    parse(after)
                ]
            }, void 0, true);
        }
        // Handle other tags with opening/closing pairs
        for (const { tag, className } of TAGS){
            const open = `[${tag}]`;
            const close = `[/${tag}]`;
            const start = str.indexOf(open);
            const end = str.indexOf(close);
            if (start !== -1 && end !== -1 && end > start) {
                const before = str.slice(0, start);
                const styled = str.slice(start + open.length, end);
                const after = str.slice(end + close.length);
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        before,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: className,
                            children: parse(styled)
                        }, void 0, false, {
                            fileName: "[project]/src/shared/ui/render-styled-text.tsx",
                            lineNumber: 50,
                            columnNumber: 13
                        }, this),
                        parse(after)
                    ]
                }, void 0, true);
            }
        }
        return str;
    }
    return parse(text);
}
}}),
"[project]/src/shared/ui/medical-experts-section.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "MedicalExpertsSection": (()=>MedicalExpertsSection),
    "medicalExpertsSectionVariants": (()=>medicalExpertsSectionVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/lib/utils.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$container$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/container.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$typography$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/typography.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$doctor$2d$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/doctor-card.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$render$2d$styled$2d$text$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/render-styled-text.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
const medicalExpertsSectionVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cva"])("", {
    variants: {
        background: {
            default: "bg-white",
            gray: "bg-gray-50",
            transparent: "bg-transparent"
        }
    },
    defaultVariants: {
        background: "default"
    }
});
function MedicalExpertsSection({ title, subtitle, doctors, maxDoctors, columnsDesktop, spacing, background, className }) {
    // Limit doctors if maxDoctors is specified
    const displayedDoctors = maxDoctors ? doctors.slice(0, maxDoctors) : doctors;
    // Column classes for responsive grid
    const gridClasses = {
        2: "grid-cols-1 md:grid-cols-2",
        3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
        4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
        5: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$container$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Section"], {
        spacing: spacing,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])(medicalExpertsSectionVariants({
            background
        }), className),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$container$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Container"], {
            maxWidth: "8xl",
            padding: "none",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$typography$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Heading"], {
                            level: "h2",
                            color: "primary",
                            className: "mb-4 text-center sm:text-left font-bold text-[24px] sm:text-[32px] md:text-[64px] leading-[120%] tracking-[0%]",
                            children: typeof title === "string" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$render$2d$styled$2d$text$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["renderStyledText"])(title) : title
                        }, void 0, false, {
                            fileName: "[project]/src/shared/ui/medical-experts-section.tsx",
                            lineNumber: 67,
                            columnNumber: 11
                        }, this),
                        subtitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-600 text-lg max-w-2xl mx-auto",
                            children: subtitle
                        }, void 0, false, {
                            fileName: "[project]/src/shared/ui/medical-experts-section.tsx",
                            lineNumber: 76,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/shared/ui/medical-experts-section.tsx",
                    lineNumber: 66,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("grid gap-6", gridClasses[columnsDesktop || 2]),
                    children: displayedDoctors.map((doctor, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$doctor$2d$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DoctorCard"], {
                            ...doctor,
                            className: "w-full"
                        }, `doctor-${index}`, false, {
                            fileName: "[project]/src/shared/ui/medical-experts-section.tsx",
                            lineNumber: 85,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/shared/ui/medical-experts-section.tsx",
                    lineNumber: 83,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/shared/ui/medical-experts-section.tsx",
            lineNumber: 64,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/shared/ui/medical-experts-section.tsx",
        lineNumber: 60,
        columnNumber: 5
    }, this);
}
;
}}),
"[project]/src/shared/ui/lab-tested-section.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "LabTestedSection": (()=>LabTestedSection),
    "labTestedSectionVariants": (()=>labTestedSectionVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/lib/utils.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$container$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/container.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$typography$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/typography.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$image$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/image.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$lab$2d$test$2d$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/lab-test-card.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$render$2d$styled$2d$text$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/render-styled-text.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
const labTestedSectionVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cva"])("relative overflow-hidden", {
    variants: {
        background: {
            default: "bg-[#f1eef0]",
            purple: "bg-[#C4A7FF]",
            transparent: "bg-transparent"
        }
    },
    defaultVariants: {
        background: "default"
    }
});
function LabTestedSection({ title, description, additionalDescription, tests, backgroundImage, featuresTitle, featuresDescription, features, background, spacing = "none", className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$container$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Section"], {
        spacing: spacing,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])(labTestedSectionVariants({
            background
        }), className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$container$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Container"], {
            maxWidth: "8xl",
            padding: "md",
            className: "px-4 sm:px-6 lg:px-8 max-[768px]:px-0",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 items-start mb-8 sm:mb-10 lg:mb-16 max-[768px]:text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$typography$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Heading"], {
                            level: "h2",
                            color: "primary",
                            className: "text-center lg:text-left font-bold text-[32px] sm:text-[42px] md:text-[48px] lg:text-[64px] leading-[120%] tracking-[0%]",
                            children: typeof title === "string" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$render$2d$styled$2d$text$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["renderStyledText"])(title) : title
                        }, void 0, false, {
                            fileName: "[project]/src/shared/ui/lab-tested-section.tsx",
                            lineNumber: 85,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-0.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$typography$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Text"], {
                                    variant: "body",
                                    className: "text-gray-700 text-base sm:text-lg leading-relaxed text-center lg:text-left",
                                    children: description
                                }, void 0, false, {
                                    fileName: "[project]/src/shared/ui/lab-tested-section.tsx",
                                    lineNumber: 95,
                                    columnNumber: 13
                                }, this),
                                additionalDescription && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$typography$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Text"], {
                                    variant: "body",
                                    className: "text-gray-600 text-sm sm:text-base leading-relaxed text-center lg:text-left",
                                    children: additionalDescription
                                }, void 0, false, {
                                    fileName: "[project]/src/shared/ui/lab-tested-section.tsx",
                                    lineNumber: 104,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/shared/ui/lab-tested-section.tsx",
                            lineNumber: 94,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/shared/ui/lab-tested-section.tsx",
                    lineNumber: 83,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative mb-10 sm:mb-12 lg:mb-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "block lg:hidden",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-6 sm:mb-8",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$lab$2d$test$2d$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LabTestCard"], {
                                        tests: tests,
                                        variant: "elevated",
                                        size: "compact",
                                        className: "w-full mx-auto"
                                    }, void 0, false, {
                                        fileName: "[project]/src/shared/ui/lab-tested-section.tsx",
                                        lineNumber: 120,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/shared/ui/lab-tested-section.tsx",
                                    lineNumber: 119,
                                    columnNumber: 13
                                }, this),
                                backgroundImage && backgroundImage.src && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$image$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["OptimizedImage"], {
                                        src: backgroundImage.src,
                                        alt: backgroundImage.alt || "Lab testing background",
                                        width: backgroundImage.width || 1200,
                                        height: backgroundImage.height || 590,
                                        priority: true,
                                        unoptimized: true,
                                        className: "w-full h-[250px] sm:h-[350px] object-cover rounded-2xl"
                                    }, void 0, false, {
                                        fileName: "[project]/src/shared/ui/lab-tested-section.tsx",
                                        lineNumber: 131,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/shared/ui/lab-tested-section.tsx",
                                    lineNumber: 130,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/shared/ui/lab-tested-section.tsx",
                            lineNumber: 117,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden lg:block relative",
                            children: [
                                backgroundImage && backgroundImage.src && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative w-full",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$image$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["OptimizedImage"], {
                                            src: backgroundImage.src,
                                            alt: backgroundImage.alt || "Lab testing background",
                                            width: backgroundImage.width || 1200,
                                            height: backgroundImage.height || 590,
                                            priority: true,
                                            unoptimized: true,
                                            className: "w-full h-[500px] xl:h-[590px] object-cover rounded-2xl"
                                        }, void 0, false, {
                                            fileName: "[project]/src/shared/ui/lab-tested-section.tsx",
                                            lineNumber: 148,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute top-12 left-12 z-10",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$lab$2d$test$2d$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LabTestCard"], {
                                                tests: tests,
                                                variant: "elevated",
                                                className: "w-[450px] xl:w-[500px]"
                                            }, void 0, false, {
                                                fileName: "[project]/src/shared/ui/lab-tested-section.tsx",
                                                lineNumber: 160,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/shared/ui/lab-tested-section.tsx",
                                            lineNumber: 159,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/shared/ui/lab-tested-section.tsx",
                                    lineNumber: 147,
                                    columnNumber: 15
                                }, this),
                                !backgroundImage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-start",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$lab$2d$test$2d$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LabTestCard"], {
                                        tests: tests,
                                        variant: "elevated",
                                        className: "max-w-md"
                                    }, void 0, false, {
                                        fileName: "[project]/src/shared/ui/lab-tested-section.tsx",
                                        lineNumber: 172,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/shared/ui/lab-tested-section.tsx",
                                    lineNumber: 171,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/shared/ui/lab-tested-section.tsx",
                            lineNumber: 145,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/shared/ui/lab-tested-section.tsx",
                    lineNumber: 115,
                    columnNumber: 9
                }, this),
                (featuresTitle || featuresDescription || features) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-6 sm:space-y-8 lg:space-y-12",
                    children: [
                        (featuresTitle || featuresDescription) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-xs sm:max-w-md lg:max-w-2xl mx-auto lg:mx-0",
                            children: [
                                featuresTitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$typography$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Heading"], {
                                    level: "h2",
                                    color: "primary",
                                    className: "text-center lg:text-left font-bold text-[24px] sm:text-[28px] lg:text-[32px] xl:text-[40px] leading-[110%] tracking-[0%] mb-3 sm:mb-4",
                                    children: typeof featuresTitle === "string" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$render$2d$styled$2d$text$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["renderStyledText"])(featuresTitle) : featuresTitle
                                }, void 0, false, {
                                    fileName: "[project]/src/shared/ui/lab-tested-section.tsx",
                                    lineNumber: 189,
                                    columnNumber: 19
                                }, this),
                                featuresDescription && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$typography$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Text"], {
                                    variant: "body",
                                    className: "text-gray-700 text-center lg:text-left text-sm sm:text-base leading-relaxed",
                                    children: featuresDescription
                                }, void 0, false, {
                                    fileName: "[project]/src/shared/ui/lab-tested-section.tsx",
                                    lineNumber: 201,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/shared/ui/lab-tested-section.tsx",
                            lineNumber: 187,
                            columnNumber: 15
                        }, this),
                        features && features.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-8 xl:gap-12",
                            children: features.map((feature, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col items-center text-center space-y-3 sm:space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-[60px] h-[48px] sm:w-[76px] sm:h-[54px] md:w-[88px] md:h-[62px] flex items-center justify-center text-[#CAB8FF]",
                                            children: typeof feature.icon === "function" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createElement"])(feature.icon, {
                                                className: "w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16"
                                            }) : feature.icon
                                        }, void 0, false, {
                                            fileName: "[project]/src/shared/ui/lab-tested-section.tsx",
                                            lineNumber: 220,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$typography$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Text"], {
                                            variant: "body",
                                            className: "text-gray-700 text-xs sm:text-sm font-normal leading-[140%] text-center",
                                            children: feature.label
                                        }, void 0, false, {
                                            fileName: "[project]/src/shared/ui/lab-tested-section.tsx",
                                            lineNumber: 230,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, `feature-${index}`, true, {
                                    fileName: "[project]/src/shared/ui/lab-tested-section.tsx",
                                    lineNumber: 215,
                                    columnNumber: 19
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/shared/ui/lab-tested-section.tsx",
                            lineNumber: 213,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/shared/ui/lab-tested-section.tsx",
                    lineNumber: 184,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/shared/ui/lab-tested-section.tsx",
            lineNumber: 77,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/shared/ui/lab-tested-section.tsx",
        lineNumber: 72,
        columnNumber: 5
    }, this);
}
;
}}),
"[project]/src/shared/ui/treatment-options-section.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "TreatmentOptionsSection": (()=>TreatmentOptionsSection),
    "treatmentOptionsSectionVariants": (()=>treatmentOptionsSectionVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/lib/utils.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$container$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/container.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$typography$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/typography.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$medication$2d$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/medication-card.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$render$2d$styled$2d$text$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/render-styled-text.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
const treatmentOptionsSectionVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cva"])("py-12 sm:py-16 lg:py-24", {
    variants: {
        background: {
            white: "bg-white",
            gray: "bg-gray-50",
            transparent: "bg-transparent"
        }
    },
    defaultVariants: {
        background: "white"
    }
});
function TreatmentOptionsSection({ title, subtitle, medications, background, maxWidth = "7xl", className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])(treatmentOptionsSectionVariants({
            background
        }), className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$container$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Container"], {
            maxWidth: maxWidth,
            className: "px-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-left mb-8 sm:mb-12 lg:mb-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$typography$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Heading"], {
                            level: "h2",
                            className: "text-2xl sm:text-3xl lg:text-4xl font-light text-gray-900 mb-3 sm:mb-4 break-words",
                            children: typeof title === 'string' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$render$2d$styled$2d$text$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["renderStyledText"])(title) : title
                        }, void 0, false, {
                            fileName: "[project]/src/shared/ui/treatment-options-section.tsx",
                            lineNumber: 59,
                            columnNumber: 11
                        }, this),
                        subtitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$typography$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Text"], {
                            variant: "body",
                            className: "text-base sm:text-lg text-gray-600 max-w-2xl break-words",
                            children: subtitle
                        }, void 0, false, {
                            fileName: "[project]/src/shared/ui/treatment-options-section.tsx",
                            lineNumber: 67,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/shared/ui/treatment-options-section.tsx",
                    lineNumber: 58,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 gap-y-16 md:gap-8 lg:gap-12",
                    children: medications.map((medication, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full flex justify-center px-0 sm:px-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$medication$2d$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MedicationCard"], {
                                ...medication,
                                className: "w-full max-w-[95%] sm:max-w-[90%] md:max-w-full"
                            }, void 0, false, {
                                fileName: "[project]/src/shared/ui/treatment-options-section.tsx",
                                lineNumber: 83,
                                columnNumber: 15
                            }, this)
                        }, index, false, {
                            fileName: "[project]/src/shared/ui/treatment-options-section.tsx",
                            lineNumber: 79,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/shared/ui/treatment-options-section.tsx",
                    lineNumber: 77,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/shared/ui/treatment-options-section.tsx",
            lineNumber: 53,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/shared/ui/treatment-options-section.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
;
}}),
"[project]/src/shared/ui/supercharge-goals-section.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "SuperchargeGoalsSection": (()=>SuperchargeGoalsSection)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/lib/utils.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$health$2d$goal$2d$item$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/health-goal-item.tsx [app-rsc] (ecmascript)");
;
;
;
const SuperchargeGoalsSection = ({ title, goals, variant = 'default', className })=>{
    const containerClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])('py-16 px-8', {
        'py-12 px-6': variant === 'compact',
        'py-16 px-8': variant === 'default'
    }, className);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: containerClasses,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-full sm:max-w-[485px] mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-left mb-16",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-[48px] md:text-[56px] font-normal text-[#171717] leading-tight",
                        children: [
                            title.mainText,
                            ' ',
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "bg-gradient-to-r from-[#CAB8FF] to-[#6F69AC] bg-clip-text text-transparent",
                                children: title.highlightedText
                            }, void 0, false, {
                                fileName: "[project]/src/shared/ui/supercharge-goals-section.tsx",
                                lineNumber: 42,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/shared/ui/supercharge-goals-section.tsx",
                        lineNumber: 40,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/shared/ui/supercharge-goals-section.tsx",
                    lineNumber: 39,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-12",
                    children: goals.map((goal, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$health$2d$goal$2d$item$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HealthGoalItem"], {
                            image: goal.image,
                            title: goal.title,
                            description: goal.description,
                            variant: variant === 'compact' ? 'compact' : 'default'
                        }, index, false, {
                            fileName: "[project]/src/shared/ui/supercharge-goals-section.tsx",
                            lineNumber: 51,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/shared/ui/supercharge-goals-section.tsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/shared/ui/supercharge-goals-section.tsx",
            lineNumber: 37,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/shared/ui/supercharge-goals-section.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
};
}}),
"[project]/src/shared/ui/weight-loss-overview-section.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "WeightLossOverviewSection": (()=>WeightLossOverviewSection)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/lib/utils.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/shared/ui/index.ts [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$weight$2d$loss$2d$statistic$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/weight-loss-statistic.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$health$2d$gains$2d$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/health-gains-card.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$overlapping$2d$images$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/overlapping-images.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$supercharge$2d$goals$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/supercharge-goals-section.tsx [app-rsc] (ecmascript)");
;
;
;
const WeightLossOverviewSection = ({ firstStatistic, secondStatistic, healthGainsCard, overlappingImages, superchargeGoals, className })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])('py-16 px-4 sm:px-8', className),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$weight$2d$loss$2d$statistic$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["WeightLossStatistic"], {
                                    ...firstStatistic
                                }, void 0, false, {
                                    fileName: "[project]/src/shared/ui/weight-loss-overview-section.tsx",
                                    lineNumber: 35,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-center py-8",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full max-w-full sm:max-w-md h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"
                                    }, void 0, false, {
                                        fileName: "[project]/src/shared/ui/weight-loss-overview-section.tsx",
                                        lineNumber: 39,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/shared/ui/weight-loss-overview-section.tsx",
                                    lineNumber: 38,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$weight$2d$loss$2d$statistic$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["WeightLossStatistic"], {
                                    ...secondStatistic
                                }, void 0, false, {
                                    fileName: "[project]/src/shared/ui/weight-loss-overview-section.tsx",
                                    lineNumber: 42,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/shared/ui/weight-loss-overview-section.tsx",
                            lineNumber: 34,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$health$2d$gains$2d$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HealthGainsCard"], {
                                ...healthGainsCard
                            }, void 0, false, {
                                fileName: "[project]/src/shared/ui/weight-loss-overview-section.tsx",
                                lineNumber: 47,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/shared/ui/weight-loss-overview-section.tsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/shared/ui/weight-loss-overview-section.tsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col lg:flex-row gap-8 items-center justify-between lg:items-start",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-shrink-0 mb-32 lg:mb-0 w-full max-w-full lg:max-w-xl",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$overlapping$2d$images$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["OverlappingImages"], {
                                ...overlappingImages
                            }, void 0, false, {
                                fileName: "[project]/src/shared/ui/weight-loss-overview-section.tsx",
                                lineNumber: 55,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/shared/ui/weight-loss-overview-section.tsx",
                            lineNumber: 54,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$supercharge$2d$goals$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SuperchargeGoalsSection"], {
                                ...superchargeGoals
                            }, void 0, false, {
                                fileName: "[project]/src/shared/ui/weight-loss-overview-section.tsx",
                                lineNumber: 60,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/shared/ui/weight-loss-overview-section.tsx",
                            lineNumber: 59,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/shared/ui/weight-loss-overview-section.tsx",
                    lineNumber: 52,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/shared/ui/weight-loss-overview-section.tsx",
            lineNumber: 30,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/shared/ui/weight-loss-overview-section.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
};
}}),
"[project]/src/shared/ui/feature-icons.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "CrueltyFreeIcon": (()=>CrueltyFreeIcon),
    "EcoFriendlyIcon": (()=>EcoFriendlyIcon),
    "GlutenFreeIcon": (()=>GlutenFreeIcon),
    "ParabenFreeIcon": (()=>ParabenFreeIcon),
    "SiliconeFreeIcon": (()=>SiliconeFreeIcon),
    "SulfateFreeIcon": (()=>SulfateFreeIcon)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
;
;
const CrueltyFreeIcon = ({ className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
        src: "/icons/cruelty-free.svg",
        alt: "Cruelty Free",
        width: 293,
        height: 206,
        className: `w-full h-full object-contain ${className || ''}`
    }, void 0, false, {
        fileName: "[project]/src/shared/ui/feature-icons.tsx",
        lineNumber: 6,
        columnNumber: 3
    }, this);
const EcoFriendlyIcon = ({ className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
        src: "/icons/eco-friendly.svg",
        alt: "Eco Friendly",
        width: 76,
        height: 89,
        className: `w-full h-full object-contain ${className || ''}`
    }, void 0, false, {
        fileName: "[project]/src/shared/ui/feature-icons.tsx",
        lineNumber: 17,
        columnNumber: 3
    }, this);
const ParabenFreeIcon = ({ className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
        src: "/icons/paraben-free.svg",
        alt: "Paraben Free",
        width: 75,
        height: 89,
        className: `w-full h-full object-contain ${className || ''}`
    }, void 0, false, {
        fileName: "[project]/src/shared/ui/feature-icons.tsx",
        lineNumber: 28,
        columnNumber: 3
    }, this);
const SiliconeFreeIcon = ({ className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
        src: "/icons/silicone-free.svg",
        alt: "Silicone Free",
        width: 75,
        height: 89,
        className: `w-full h-full object-contain ${className || ''}`
    }, void 0, false, {
        fileName: "[project]/src/shared/ui/feature-icons.tsx",
        lineNumber: 39,
        columnNumber: 3
    }, this);
const SulfateFreeIcon = ({ className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
        src: "/icons/sulfate-free.svg",
        alt: "Sulfate Free",
        width: 75,
        height: 89,
        className: `w-full h-full object-contain ${className || ''}`
    }, void 0, false, {
        fileName: "[project]/src/shared/ui/feature-icons.tsx",
        lineNumber: 50,
        columnNumber: 3
    }, this);
const GlutenFreeIcon = ({ className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
        src: "/icons/gluten-free.svg",
        alt: "Gluten Free",
        width: 293,
        height: 206,
        className: `w-full h-full object-contain ${className || ''}`
    }, void 0, false, {
        fileName: "[project]/src/shared/ui/feature-icons.tsx",
        lineNumber: 61,
        columnNumber: 3
    }, this);
}}),
"[project]/src/shared/ui/value-proposition.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ValueProposition": (()=>ValueProposition),
    "valuePropositionVariants": (()=>valuePropositionVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/lib/utils.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$typography$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/typography.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$image$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/image.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$render$2d$styled$2d$text$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/render-styled-text.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
const valuePropositionVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cva"])("space-y-4", {
    variants: {
        variant: {
            default: "",
            compact: "space-y-2",
            detailed: "space-y-6",
            horizontal: "flex flex-col lg:flex-row lg:items-stretch lg:gap-0 lg:space-y-0 lg:relative lg:h-full",
            fullscreen: "flex flex-col h-full"
        },
        highlight: {
            true: "relative",
            false: ""
        }
    },
    defaultVariants: {
        variant: "default",
        highlight: false
    }
});
const ValueProposition = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, variant, highlight, title, description, image, icon, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])(valuePropositionVariants({
            variant,
            highlight,
            className
        })),
        ref: ref,
        ...props,
        children: [
            icon && !image && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center mb-6",
                children: icon
            }, void 0, false, {
                fileName: "[project]/src/shared/ui/value-proposition.tsx",
                lineNumber: 64,
                columnNumber: 11
            }, this),
            variant === "fullscreen" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2 lg:space-y-3 flex-shrink-0 p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$typography$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Heading"], {
                                level: "h3",
                                color: "primary",
                                className: "text-xl lg:text-2xl xl:text-[40px] 2xl:text-[48px] font-medium leading-[120%] tracking-[0%]",
                                children: typeof title === 'string' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$render$2d$styled$2d$text$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["renderStyledText"])(title) : title
                            }, void 0, false, {
                                fileName: "[project]/src/shared/ui/value-proposition.tsx",
                                lineNumber: 74,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$typography$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Text"], {
                                variant: "body",
                                className: "text-gray-600 font-normal text-sm lg:text-base xl:text-lg 2xl:text-[24px] leading-[150%]",
                                children: description
                            }, void 0, false, {
                                fileName: "[project]/src/shared/ui/value-proposition.tsx",
                                lineNumber: 82,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/shared/ui/value-proposition.tsx",
                        lineNumber: 73,
                        columnNumber: 13
                    }, this),
                    image && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 flex items-end justify-center mt-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$image$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["OptimizedImage"], {
                            src: image.src,
                            alt: image.alt,
                            width: image.width || 300,
                            height: image.height || 200,
                            className: "w-full max-h-full object-contain object-bottom"
                        }, void 0, false, {
                            fileName: "[project]/src/shared/ui/value-proposition.tsx",
                            lineNumber: 93,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/shared/ui/value-proposition.tsx",
                        lineNumber: 92,
                        columnNumber: 15
                    }, this)
                ]
            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("space-y-2 lg:space-y-3", variant === "horizontal" && "flex-1 lg:max-w-[55%] lg:pr-4 xl:pr-6 2xl:pr-8 lg:py-4 xl:py-6 2xl:py-8"),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$typography$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Heading"], {
                                level: "h3",
                                color: "primary",
                                className: "text-xl lg:text-2xl xl:text-[40px] 2xl:text-[48px] font-medium leading-[120%] tracking-[0%]",
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/src/shared/ui/value-proposition.tsx",
                                lineNumber: 110,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$typography$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Text"], {
                                variant: "body",
                                className: "text-gray-600 font-normal text-sm lg:text-base xl:text-lg 2xl:text-[24px] leading-[150%]",
                                children: description
                            }, void 0, false, {
                                fileName: "[project]/src/shared/ui/value-proposition.tsx",
                                lineNumber: 118,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/shared/ui/value-proposition.tsx",
                        lineNumber: 106,
                        columnNumber: 13
                    }, this),
                    image && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("flex justify-center", variant === "horizontal" ? "lg:absolute lg:right-0 lg:top-[22px] lg:bottom-0 lg:w-[45%] lg:h-full lg:overflow-hidden lg:rounded-r-xl lg:flex lg:items-end" : "mt-4 lg:mt-6"),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$image$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["OptimizedImage"], {
                            src: image.src,
                            alt: image.alt,
                            width: image.width || 300,
                            height: image.height || 200,
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("object-cover", variant === "horizontal" && "lg:w-full lg:h-full lg:object-cover lg:object-bottom")
                        }, void 0, false, {
                            fileName: "[project]/src/shared/ui/value-proposition.tsx",
                            lineNumber: 134,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/shared/ui/value-proposition.tsx",
                        lineNumber: 128,
                        columnNumber: 15
                    }, this)
                ]
            }, void 0, true)
        ]
    }, void 0, true, {
        fileName: "[project]/src/shared/ui/value-proposition.tsx",
        lineNumber: 57,
        columnNumber: 7
    }, this);
});
ValueProposition.displayName = "ValueProposition";
;
}}),
"[project]/src/shared/ui/why-choose-rejuve-section.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "WhyChooseSection": (()=>WhyChooseSection),
    "whyChooseSectionVariants": (()=>whyChooseSectionVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/lib/utils.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$container$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/container.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$typography$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/typography.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$value$2d$proposition$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/value-proposition.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$render$2d$styled$2d$text$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/render-styled-text.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
const whyChooseSectionVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cva"])("", {
    variants: {
        background: {
            default: "bg-white",
            gray: "bg-gray-50",
            gradient: "bg-gradient-to-b from-white to-gray-50"
        }
    },
    defaultVariants: {
        background: "default"
    }
});
function WhyChooseSection({ title, subtitle, valuePropositions, background, className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$container$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Section"], {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])(whyChooseSectionVariants({
            background
        }), 'py-0', className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$container$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Container"], {
            maxWidth: "9xl",
            className: "px-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 xl:gap-12 2xl:gap-16",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col h-[824px] lg:h-[1032px] xl:h-[1240px] 2xl:h-[1448px] lg:pr-4 xl:pr-6 2xl:pr-8 max-[768px]:text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4 mb-6 lg:mb-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$typography$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Heading"], {
                                        level: "h2",
                                        color: "primary",
                                        className: "text-2xl lg:text-[40px] xl:text-[48px] 2xl:text-[56px] font-bold leading-[120%] tracking-[0%]",
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$render$2d$styled$2d$text$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["renderStyledText"])(title)
                                    }, void 0, false, {
                                        fileName: "[project]/src/shared/ui/why-choose-rejuve-section.tsx",
                                        lineNumber: 56,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$typography$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Text"], {
                                        variant: "body",
                                        className: "text-gray-600 font-normal text-sm lg:text-base xl:text-lg leading-[150%]",
                                        children: subtitle
                                    }, void 0, false, {
                                        fileName: "[project]/src/shared/ui/why-choose-rejuve-section.tsx",
                                        lineNumber: 64,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/shared/ui/why-choose-rejuve-section.tsx",
                                lineNumber: 55,
                                columnNumber: 13
                            }, this),
                            valuePropositions[0] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-card-bg rounded-xl h-full flex flex-col justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$value$2d$proposition$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ValueProposition"], {
                                        title: valuePropositions[0].title,
                                        description: valuePropositions[0].description,
                                        image: valuePropositions[0].image,
                                        variant: "fullscreen"
                                    }, void 0, false, {
                                        fileName: "[project]/src/shared/ui/why-choose-rejuve-section.tsx",
                                        lineNumber: 76,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/shared/ui/why-choose-rejuve-section.tsx",
                                    lineNumber: 75,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/shared/ui/why-choose-rejuve-section.tsx",
                                lineNumber: 74,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/shared/ui/why-choose-rejuve-section.tsx",
                        lineNumber: 54,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col space-y-6 lg:space-y-8 xl:space-y-10 2xl:space-y-12",
                        children: [
                            valuePropositions[1] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-card-bg rounded-xl overflow-hidden h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-4 lg:p-6 h-full",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$value$2d$proposition$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ValueProposition"], {
                                        title: valuePropositions[1].title,
                                        description: valuePropositions[1].description,
                                        image: valuePropositions[1].image,
                                        variant: "horizontal"
                                    }, void 0, false, {
                                        fileName: "[project]/src/shared/ui/why-choose-rejuve-section.tsx",
                                        lineNumber: 93,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/shared/ui/why-choose-rejuve-section.tsx",
                                    lineNumber: 92,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/shared/ui/why-choose-rejuve-section.tsx",
                                lineNumber: 91,
                                columnNumber: 15
                            }, this),
                            valuePropositions[2] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-card-bg rounded-xl overflow-hidden h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-4 lg:p-6 h-full",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$value$2d$proposition$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ValueProposition"], {
                                        title: valuePropositions[2].title,
                                        description: valuePropositions[2].description,
                                        image: valuePropositions[2].image,
                                        variant: "horizontal"
                                    }, void 0, false, {
                                        fileName: "[project]/src/shared/ui/why-choose-rejuve-section.tsx",
                                        lineNumber: 107,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/shared/ui/why-choose-rejuve-section.tsx",
                                    lineNumber: 106,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/shared/ui/why-choose-rejuve-section.tsx",
                                lineNumber: 105,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/shared/ui/why-choose-rejuve-section.tsx",
                        lineNumber: 88,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/shared/ui/why-choose-rejuve-section.tsx",
                lineNumber: 52,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/shared/ui/why-choose-rejuve-section.tsx",
            lineNumber: 51,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/shared/ui/why-choose-rejuve-section.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, this);
}
;
}}),
"[project]/src/shared/ui/faq-item.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "FAQItem": (()=>FAQItem),
    "faqItemVariants": (()=>faqItemVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const FAQItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call FAQItem() from the server but FAQItem is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/shared/ui/faq-item.tsx <module evaluation>", "FAQItem");
const faqItemVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call faqItemVariants() from the server but faqItemVariants is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/shared/ui/faq-item.tsx <module evaluation>", "faqItemVariants");
}}),
"[project]/src/shared/ui/faq-item.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "FAQItem": (()=>FAQItem),
    "faqItemVariants": (()=>faqItemVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const FAQItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call FAQItem() from the server but FAQItem is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/shared/ui/faq-item.tsx", "FAQItem");
const faqItemVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call faqItemVariants() from the server but faqItemVariants is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/shared/ui/faq-item.tsx", "faqItemVariants");
}}),
"[project]/src/shared/ui/faq-item.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$faq$2d$item$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/shared/ui/faq-item.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$faq$2d$item$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/src/shared/ui/faq-item.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$faq$2d$item$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/src/shared/ui/faq-section.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "FAQSection": (()=>FAQSection),
    "faqSectionVariants": (()=>faqSectionVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$container$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/container.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$typography$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/typography.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/button.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$faq$2d$item$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/faq-item.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/lib/utils.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$globalData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/lib/globalData.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
async function FAQSection({ title, subtitle, subtitleLinkText, subtitleLinkUrl, faqs, contactTitle, contactDescription, contactButtonText, contactButtonUrl, className }) {
    // Load global FAQ data internally if no props provided
    let faqData = {
        title: title || "FAQs",
        subtitle: subtitle || "Still have questions?",
        subtitleLinkText: subtitleLinkText || "Send us a message.",
        subtitleLinkUrl: subtitleLinkUrl || "/contact",
        faqs: faqs || [],
        contactTitle: contactTitle || "Still have questions?",
        contactDescription: contactDescription || "We would love to talk!",
        contactButtonText: contactButtonText || "Contact",
        contactButtonUrl: contactButtonUrl || "/contact"
    };
    // If no FAQ data provided via props, load from global data
    if (!faqs) {
        try {
            const globalFAQ = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$globalData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getGlobalFAQ"])();
            if (globalFAQ) {
                faqData = {
                    title: globalFAQ.title,
                    subtitle: globalFAQ.subtitle,
                    subtitleLinkText: globalFAQ.subtitleLinkText,
                    subtitleLinkUrl: globalFAQ.subtitleLinkUrl,
                    faqs: globalFAQ.faqs.map((faq, index)=>({
                            id: `faq-${index}`,
                            ...faq
                        })),
                    contactTitle: globalFAQ.contactTitle,
                    contactDescription: globalFAQ.contactDescription,
                    contactButtonText: globalFAQ.contactButtonText,
                    contactButtonUrl: globalFAQ.contactButtonUrl
                };
            }
        } catch (error) {
            console.error('Error loading global FAQ data:', error);
        // Fallback to default values already set above
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("py-16 bg-white", className),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$container$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Container"], {
            maxWidth: "7xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$typography$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Heading"], {
                            level: "h2",
                            className: "text-4xl font-bold text-gray-900 mb-4",
                            children: faqData.title
                        }, void 0, false, {
                            fileName: "[project]/src/shared/ui/faq-section.tsx",
                            lineNumber: 87,
                            columnNumber: 11
                        }, this),
                        faqData.subtitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$typography$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Text"], {
                            className: "text-lg text-gray-600",
                            children: [
                                faqData.subtitle,
                                " ",
                                faqData.subtitleLinkText && faqData.subtitleLinkUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: faqData.subtitleLinkUrl,
                                    className: "text-gray-600 hover:text-gray-800 underline font-medium",
                                    children: faqData.subtitleLinkText
                                }, void 0, false, {
                                    fileName: "[project]/src/shared/ui/faq-section.tsx",
                                    lineNumber: 98,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/shared/ui/faq-section.tsx",
                            lineNumber: 95,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/shared/ui/faq-section.tsx",
                    lineNumber: 86,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-16",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "divide-y divide-gray-200",
                        children: faqData.faqs.map((faq)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$faq$2d$item$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FAQItem"], {
                                question: faq.question,
                                answer: faq.answer,
                                isOpenByDefault: faq.isOpenByDefault
                            }, faq.id, false, {
                                fileName: "[project]/src/shared/ui/faq-section.tsx",
                                lineNumber: 113,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/shared/ui/faq-section.tsx",
                        lineNumber: 111,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/shared/ui/faq-section.tsx",
                    lineNumber: 110,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col  max-w-[300px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$typography$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Heading"], {
                            level: "h3",
                            className: "text-2xl font-bold text-gray-900 mb-2",
                            children: faqData.contactTitle
                        }, void 0, false, {
                            fileName: "[project]/src/shared/ui/faq-section.tsx",
                            lineNumber: 125,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$typography$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Text"], {
                            className: "text-gray-600 mb-6",
                            children: faqData.contactDescription
                        }, void 0, false, {
                            fileName: "[project]/src/shared/ui/faq-section.tsx",
                            lineNumber: 132,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "default",
                            href: faqData.contactButtonUrl,
                            className: "bg-black text-white hover:bg-gray-800 px-8 py-3 rounded-full font-medium w-[128px] inline-flex",
                            children: faqData.contactButtonText
                        }, void 0, false, {
                            fileName: "[project]/src/shared/ui/faq-section.tsx",
                            lineNumber: 136,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/shared/ui/faq-section.tsx",
                    lineNumber: 124,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/shared/ui/faq-section.tsx",
            lineNumber: 84,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/shared/ui/faq-section.tsx",
        lineNumber: 83,
        columnNumber: 5
    }, this);
}
const faqSectionVariants = {
    default: "py-16 bg-white",
    compact: "py-12 bg-white",
    spacious: "py-24 bg-white",
    gray: "py-16 bg-gray-50"
};
}}),
"[project]/src/shared/ui/index.ts [app-rsc] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// Layout Components
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$container$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/container.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$page$2d$template$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/page-template.tsx [app-rsc] (ecmascript)");
// Typography
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$typography$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/typography.tsx [app-rsc] (ecmascript)");
// Media Components
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$image$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/image.tsx [app-rsc] (ecmascript)");
// Form Components  
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/button.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/card.tsx [app-rsc] (ecmascript)");
// Interactive Components
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$cta$2d$buttons$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/cta-buttons.tsx [app-rsc] (ecmascript)");
// Specialized Components
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$pricing$2d$display$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/pricing-display.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$trust$2d$indicators$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/trust-indicators.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$trust$2d$icon$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/trust-icon.tsx [app-rsc] (ecmascript)");
// Atoms
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$science$2d$icon$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/science-icon.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$pill$2d$icon$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/pill-icon.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$shield$2d$check$2d$icon$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/shield-check-icon.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$timer$2d$icon$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/timer-icon.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$utensils$2d$icon$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/utensils-icon.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$scale$2d$icon$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/scale-icon.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$metabolism$2d$icon$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/metabolism-icon.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$appetite$2d$control$2d$icon$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/appetite-control-icon.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$weight$2d$support$2d$icon$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/weight-support-icon.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$badge$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/badge.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$number$2d$display$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/number-display.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$percentage$2d$display$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/percentage-display.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$slider$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/slider.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$text$2d$input$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/text-input.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$test$2d$status$2d$badge$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/test-status-badge.tsx [app-rsc] (ecmascript)");
// Molecules
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$treatment$2d$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/treatment-card.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$medication$2d$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/medication-card.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$category$2d$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/category-card.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$doctor$2d$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/doctor-card.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$lab$2d$test$2d$item$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/lab-test-item.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$lab$2d$test$2d$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/lab-test-card.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$weight$2d$calculator$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/weight-calculator.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$statistic$2d$highlight$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/statistic-highlight.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$weight$2d$loss$2d$statistic$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/weight-loss-statistic.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$health$2d$gains$2d$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/health-gains-card.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$health$2d$goal$2d$item$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/health-goal-item.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$process$2d$step$2d$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/process-step-card.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$testimonial$2d$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/testimonial-card.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$overlapping$2d$images$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/overlapping-images.tsx [app-rsc] (ecmascript)");
// Layout Organisms
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$header$2d$minimal$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/header-minimal.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$info$2d$bar$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/info-bar.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$hero$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/hero-section.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$weight$2d$loss$2d$hero$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/weight-loss-hero-section.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$weight$2d$loss$2d$intro$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/weight-loss-intro-section.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$contact$2d$hero$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/contact-hero-section.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$trust$2d$features$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/trust-features.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$treatment$2d$benefits$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/treatment-benefits-section.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$treatments$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/treatments-section.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$categories$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/categories-section.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$statistics$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/statistics-section.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$getting$2d$started$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/getting-started-section.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$testimonials$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/testimonials-section.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$medical$2d$experts$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/medical-experts-section.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$lab$2d$tested$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/lab-tested-section.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$treatment$2d$options$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/treatment-options-section.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$supercharge$2d$goals$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/supercharge-goals-section.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$weight$2d$loss$2d$overview$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/weight-loss-overview-section.tsx [app-rsc] (ecmascript)");
// Feature Icons
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$feature$2d$icons$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/feature-icons.tsx [app-rsc] (ecmascript)");
// New components
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$value$2d$proposition$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/value-proposition.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$why$2d$choose$2d$rejuve$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/why-choose-rejuve-section.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$faq$2d$item$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/faq-item.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$faq$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/faq-section.tsx [app-rsc] (ecmascript)");
// Footer Components
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$social$2d$icon$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/social-icon.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$legal$2d$text$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/legal-text.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$footer$2d$column$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/footer-column.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$social$2d$links$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/social-links.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$contact$2d$info$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/contact-info.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$legal$2d$links$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/legal-links.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$footer$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/footer.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
}}),
"[project]/src/shared/ui/index.ts [app-rsc] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$container$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/container.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$page$2d$template$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/page-template.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$typography$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/typography.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$image$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/image.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/button.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/card.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$cta$2d$buttons$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/cta-buttons.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$pricing$2d$display$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/pricing-display.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$trust$2d$indicators$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/trust-indicators.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$trust$2d$icon$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/trust-icon.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$science$2d$icon$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/science-icon.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$pill$2d$icon$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/pill-icon.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$shield$2d$check$2d$icon$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/shield-check-icon.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$timer$2d$icon$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/timer-icon.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$utensils$2d$icon$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/utensils-icon.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$scale$2d$icon$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/scale-icon.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$metabolism$2d$icon$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/metabolism-icon.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$appetite$2d$control$2d$icon$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/appetite-control-icon.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$weight$2d$support$2d$icon$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/weight-support-icon.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$badge$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/badge.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$number$2d$display$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/number-display.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$percentage$2d$display$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/percentage-display.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$slider$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/slider.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$text$2d$input$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/text-input.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$test$2d$status$2d$badge$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/test-status-badge.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$treatment$2d$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/treatment-card.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$medication$2d$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/medication-card.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$category$2d$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/category-card.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$doctor$2d$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/doctor-card.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$lab$2d$test$2d$item$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/lab-test-item.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$lab$2d$test$2d$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/lab-test-card.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$weight$2d$calculator$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/weight-calculator.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$statistic$2d$highlight$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/statistic-highlight.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$weight$2d$loss$2d$statistic$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/weight-loss-statistic.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$health$2d$gains$2d$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/health-gains-card.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$health$2d$goal$2d$item$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/health-goal-item.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$process$2d$step$2d$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/process-step-card.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$testimonial$2d$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/testimonial-card.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$overlapping$2d$images$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/overlapping-images.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$header$2d$minimal$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/header-minimal.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$info$2d$bar$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/info-bar.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$hero$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/hero-section.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$weight$2d$loss$2d$hero$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/weight-loss-hero-section.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$weight$2d$loss$2d$intro$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/weight-loss-intro-section.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$contact$2d$hero$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/contact-hero-section.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$trust$2d$features$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/trust-features.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$treatment$2d$benefits$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/treatment-benefits-section.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$treatments$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/treatments-section.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$categories$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/categories-section.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$statistics$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/statistics-section.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$getting$2d$started$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/getting-started-section.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$testimonials$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/testimonials-section.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$medical$2d$experts$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/medical-experts-section.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$lab$2d$tested$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/lab-tested-section.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$treatment$2d$options$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/treatment-options-section.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$supercharge$2d$goals$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/supercharge-goals-section.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$weight$2d$loss$2d$overview$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/weight-loss-overview-section.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$feature$2d$icons$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/feature-icons.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$value$2d$proposition$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/value-proposition.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$why$2d$choose$2d$rejuve$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/why-choose-rejuve-section.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$faq$2d$item$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/faq-item.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$faq$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/faq-section.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$social$2d$icon$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/social-icon.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$legal$2d$text$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/legal-text.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$footer$2d$column$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/footer-column.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$social$2d$links$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/social-links.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$contact$2d$info$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/contact-info.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$legal$2d$links$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/legal-links.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$footer$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/footer.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/shared/ui/index.ts [app-rsc] (ecmascript) <locals>");
}}),
"[project]/src/shared/lib/transforms.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getIconForType": (()=>getIconForType),
    "transformAboutUsData": (()=>transformAboutUsData),
    "transformCategoriesSection": (()=>transformCategoriesSection),
    "transformContactData": (()=>transformContactData),
    "transformFAQSection": (()=>transformFAQSection),
    "transformGettingStartedSection": (()=>transformGettingStartedSection),
    "transformHeroSection": (()=>transformHeroSection),
    "transformHomepageData": (()=>transformHomepageData),
    "transformImage": (()=>transformImage),
    "transformInfoBarSection": (()=>transformInfoBarSection),
    "transformLabTestedSection": (()=>transformLabTestedSection),
    "transformMedicalExpertsSection": (()=>transformMedicalExpertsSection),
    "transformRichText": (()=>transformRichText),
    "transformStatisticsSection": (()=>transformStatisticsSection),
    "transformTestimonialsSection": (()=>transformTestimonialsSection),
    "transformTreatmentsSection": (()=>transformTreatmentsSection),
    "transformWeightLossSolutionsData": (()=>transformWeightLossSolutionsData),
    "transformWhyChooseSection": (()=>transformWhyChooseSection)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$sanity$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/lib/sanity.ts [app-rsc] (ecmascript)");
;
function transformImage(sanityImage) {
    if (!sanityImage) {
        console.log('❌ No sanityImage provided');
        return {
            src: '/placeholder-image.png',
            alt: 'Placeholder image',
            width: 400,
            height: 300
        };
    }
    if (!sanityImage.asset) {
        console.log('❌ No asset in sanityImage');
        return {
            src: '/placeholder-image.png',
            alt: 'Placeholder image',
            width: 400,
            height: 300
        };
    }
    try {
        // Get direct image URL from Sanity
        const imageUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$sanity$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSanityImageUrl"])(sanityImage);
        if (!imageUrl || typeof imageUrl !== 'string' || imageUrl.trim() === '') {
            console.log('❌ Failed to generate URL for Sanity image');
            return {
                src: '/placeholder-image.png',
                alt: 'Placeholder image',
                width: 400,
                height: 300
            };
        }
        console.log('✅ Generated direct Sanity image URL:', imageUrl);
        return {
            src: imageUrl,
            alt: sanityImage.alt || 'Image',
            width: sanityImage.width || 400,
            height: sanityImage.height || 300
        };
    } catch (error) {
        console.log('❌ Error generating image URL:', error);
        return {
            src: '/placeholder-image.png',
            alt: 'Placeholder image',
            width: 400,
            height: 300
        };
    }
}
function transformRichText(richText) {
    // For now, return simple text - can be enhanced later for full rich text support
    return richText?.map((block)=>block.children?.map((child)=>child.text).join('')).join('\n') || '';
}
function transformHeroSection(sanityData) {
    return {
        heroTitle: transformRichText(sanityData.heroTitle),
        subtitle: sanityData.subtitle,
        backgroundImage: transformImage(sanityData.backgroundImage),
        primaryCTA: sanityData.primaryCTA,
        secondaryCTA: sanityData.secondaryCTA
    };
}
function transformTreatmentsSection(sanityData) {
    return {
        title: transformRichText(sanityData.title),
        subtitle: sanityData.subtitle,
        description: sanityData.description,
        treatments: sanityData.treatments.map((treatment)=>({
                ...treatment,
                image: transformImage(treatment.image)
            })),
        viewAllText: sanityData.viewAllText,
        viewAllUrl: sanityData.viewAllUrl
    };
}
function transformCategoriesSection(sanityData) {
    return {
        title: transformRichText(sanityData.title),
        categories: sanityData.categories.map((category)=>({
                ...category,
                image: transformImage(category.image)
            }))
    };
}
function transformStatisticsSection(sanityData) {
    return {
        ...sanityData,
        backgroundImage: transformImage(sanityData.backgroundImage)
    };
}
function transformGettingStartedSection(sanityData) {
    return {
        ...sanityData,
        image: transformImage(sanityData.image)
    };
}
function transformWhyChooseSection(sanityData) {
    return {
        title: transformRichText(sanityData.title),
        subtitle: sanityData.subtitle,
        valuePropositions: sanityData.valuePropositions.map((prop)=>({
                ...prop,
                image: transformImage(prop.image)
            }))
    };
}
function transformTestimonialsSection(sanityData) {
    return {
        title: sanityData.title,
        testimonials: sanityData.testimonials.map((testimonial)=>({
                ...testimonial,
                companyLogo: transformImage(testimonial.companyLogo),
                author: {
                    ...testimonial.author,
                    avatar: transformImage(testimonial.author.avatar)
                }
            }))
    };
}
function transformFAQSection(sanityData) {
    return {
        ...sanityData,
        faqs: sanityData.faqs.map((faq, index)=>({
                id: `faq-${index}`,
                ...faq
            }))
    };
}
function transformInfoBarSection(sanityData) {
    if (!sanityData || !sanityData.trustIndicators) {
        return {
            trustIndicators: []
        };
    }
    return {
        trustIndicators: sanityData.trustIndicators.map((indicator, index)=>({
                id: `indicator-${index}`,
                text: indicator.text,
                icon: indicator.icon,
                highlighted: indicator.highlighted,
                isTitle: indicator.isTitle
            }))
    };
}
function transformHomepageData(sanityData) {
    if (!sanityData) {
        return null;
    }
    return {
        weightLossIntroSection: sanityData.weightLossIntroSection || null,
        heroSection: transformHeroSection(sanityData.heroSection),
        treatmentsSection: transformTreatmentsSection(sanityData.treatmentsSection),
        categoriesSection: transformCategoriesSection(sanityData.categoriesSection),
        statisticsSection: transformStatisticsSection(sanityData.statisticsSection),
        gettingStartedSection: transformGettingStartedSection(sanityData.gettingStartedSection),
        whyChooseSection: transformWhyChooseSection(sanityData.whyChooseSection),
        testimonialsSection: transformTestimonialsSection(sanityData.testimonialsSection),
        ctaHeroSection: transformHeroSection(sanityData.ctaHeroSection)
    };
}
// Transform doctor data from Sanity to component props
function transformDoctor(doctor) {
    return {
        image: transformImage(doctor.image) || {
            src: '/doctor.png',
            alt: doctor.name
        },
        name: doctor.name,
        title: doctor.title
    };
}
// Transform lab test data from Sanity to component props
function transformLabTest(test) {
    return {
        testName: test.testName,
        status: 'passed',
        statusLabel: test.statusLabel,
        showDropdown: Boolean(test.details)
    };
}
// Transform feature data from Sanity to component props
function transformFeature(feature, icons) {
    // Map feature label to icon component
    const getIconForLabel = (label)=>{
        if (label.toLowerCase().includes('cruelty')) {
            console.log('Found cruelty label, icon exists:', !!icons.crueltyFree);
            return icons.crueltyFree;
        }
        if (label.toLowerCase().includes('eco')) {
            console.log('Found eco label, icon exists:', !!icons.ecoFriendly);
            return icons.ecoFriendly;
        }
        if (label.toLowerCase().includes('paraben')) {
            console.log('Found paraben label, icon exists:', !!icons.parabenFree);
            return icons.parabenFree;
        }
        if (label.toLowerCase().includes('silicone')) {
            console.log('Found silicone label, icon exists:', !!icons.siliconeFree);
            return icons.siliconeFree;
        }
        if (label.toLowerCase().includes('sulfate')) {
            console.log('Found sulfate label, icon exists:', !!icons.sulfateFree);
            return icons.sulfateFree;
        }
        if (label.toLowerCase().includes('gluten')) {
            console.log('Found gluten label, icon exists:', !!icons.glutenFree);
            return icons.glutenFree;
        }
        console.log('No matching label, using default icon');
        return icons.science || icons.crueltyFree; // Default fallback
    };
    const icon = getIconForLabel(feature.label);
    console.log(`Feature "${feature.label}" mapped to icon:`, icon ? 'Icon found' : 'Icon missing');
    return {
        icon: icon,
        label: feature.label.replace(' ', '\n')
    };
}
function transformMedicalExpertsSection(section) {
    // Sort doctors by display order
    const sortedDoctors = [
        ...section.doctors
    ].sort((a, b)=>(a.displayOrder || 999) - (b.displayOrder || 999));
    return {
        title: transformRichText(section.title),
        doctors: sortedDoctors.map(transformDoctor)
    };
}
function transformLabTestedSection(section, featureIcons) {
    const backgroundImg = transformImage(section.backgroundImage);
    return {
        title: transformRichText(section.title),
        description: section.description,
        additionalDescription: section.additionalDescription,
        tests: section.tests.map(transformLabTest),
        backgroundImage: backgroundImg || {
            src: '/lab-testing-hand.png',
            alt: 'Lab testing quality assurance',
            width: 600,
            height: 400
        },
        featuresTitle: section.featuresTitle,
        featuresDescription: section.featuresDescription,
        features: section.features ? section.features.map((feature)=>transformFeature(feature, featureIcons)) : []
    };
}
function transformAboutUsData(data, featureIcons) {
    return {
        heroContent: {
            heroTitle: transformRichText(data.heroSection.heroTitle),
            subtitle: data.heroSection.subtitle,
            backgroundImage: transformImage(data.heroSection.backgroundImage) || {
                src: '/hero-woman-drinking.png',
                alt: 'Woman drinking water - healthy lifestyle',
                priority: true
            },
            primaryCTA: data.heroSection.primaryCTA,
            secondaryCTA: data.heroSection.secondaryCTA
        },
        medicalExpertsData: transformMedicalExpertsSection(data.medicalExpertsSection),
        labTestedData: transformLabTestedSection(data.labTestedSection, featureIcons),
        treatmentsData: {
            title: transformRichText(data.treatmentsSection.title),
            subtitle: data.treatmentsSection.subtitle,
            description: data.treatmentsSection.description,
            treatments: data.treatmentsSection.treatments.map((treatment)=>({
                    ...treatment,
                    image: transformImage(treatment.image) || {
                        src: '/treatment-default.png',
                        alt: treatment.title
                    }
                })),
            viewAllText: data.treatmentsSection.viewAllText,
            viewAllUrl: data.treatmentsSection.viewAllUrl
        },
        categoriesData: {
            title: transformRichText(data.categoriesSection.title),
            categories: data.categoriesSection.categories.map((category)=>({
                    ...category,
                    image: transformImage(category.image) || {
                        src: '/category-default.png',
                        alt: category.title
                    }
                }))
        },
        gettingStartedData: {
            ...data.gettingStartedSection,
            image: transformImage(data.gettingStartedSection.image) || {
                src: '/getting-started-default.png',
                alt: 'Getting started'
            }
        },
        testimonialsData: {
            title: data.testimonialsSection.title,
            testimonials: data.testimonialsSection.testimonials.map((testimonial)=>({
                    ...testimonial,
                    companyLogo: transformImage(testimonial.companyLogo) || {
                        src: '/company-logo-default.png',
                        alt: testimonial.author.company || 'Company logo',
                        width: 120,
                        height: 40
                    },
                    author: {
                        ...testimonial.author,
                        avatar: transformImage(testimonial.author.avatar) || {
                            src: '/avatar-default.png',
                            alt: testimonial.author.name,
                            width: 60,
                            height: 60
                        }
                    }
                }))
        },
        seo: data.seo
    };
}
function getIconForType(iconType, icons) {
    const iconMap = {
        metabolism: icons.MetabolismIcon,
        appetiteControl: icons.AppetiteControlIcon,
        weightSupport: icons.WeightSupportIcon,
        science: icons.ScienceIcon,
        pill: icons.PillIcon,
        shieldCheck: icons.ShieldCheckIcon
    };
    return iconMap[iconType] || icons.ScienceIcon;
}
// Transform Weight Loss Hero Section
function transformWeightLossHeroSection(sanityData, icons) {
    return {
        heroTitle: transformRichText(sanityData.heroTitle),
        subtitle: sanityData.subtitle,
        backgroundImage: transformImage(sanityData.backgroundImage) || {
            src: '/hero-weight-loss.jpg',
            alt: 'Weight loss transformation',
            priority: true
        },
        primaryCTA: sanityData.primaryCTA,
        trustFeatures: sanityData.trustFeatures.map((feature)=>({
                icon: getIconForType(feature.iconType, icons),
                text: feature.text
            }))
    };
}
// Transform Treatment Benefits Section
function transformTreatmentBenefitsSection(sanityData, icons) {
    return {
        benefits: sanityData.benefits.map((benefit)=>({
                icon: getIconForType(benefit.iconType, icons),
                title: benefit.title,
                description: benefit.description || ''
            }))
    };
}
// Transform Treatment Options Section
function transformTreatmentOptionsSection(sanityData) {
    return {
        title: transformRichText(sanityData.title),
        medications: sanityData.medications.map((medication)=>({
                image: transformImage(medication.image) || {
                    src: '/hand.png',
                    alt: medication.title,
                    width: 400,
                    height: 300
                },
                title: medication.title,
                subtitle: medication.subtitle,
                price: medication.price,
                planDuration: medication.planDuration,
                primaryCTA: medication.primaryCTA,
                secondaryCTA: medication.secondaryCTA,
                safetyInfo: medication.safetyInfo
            }))
    };
}
// Transform Weight Loss Overview Section
function transformWeightLossOverviewSection(sanityData) {
    return {
        firstStatistic: {
            preText: sanityData.firstStatistic.preText,
            mainText: sanityData.firstStatistic.mainText,
            percentage: sanityData.firstStatistic.percentage,
            timeframe: sanityData.firstStatistic.timeframe,
            description: sanityData.firstStatistic.description,
            variant: 'centered'
        },
        secondStatistic: {
            preText: sanityData.secondStatistic.preText,
            mainText: sanityData.secondStatistic.mainText,
            percentage: sanityData.secondStatistic.percentage,
            timeframe: sanityData.secondStatistic.timeframe,
            titleAboveDescription: sanityData.secondStatistic.titleAboveDescription,
            description: sanityData.secondStatistic.description,
            variant: 'centered'
        },
        healthGainsCard: {
            title: sanityData.healthGainsCard.title,
            description: sanityData.healthGainsCard.description,
            image: transformImage(sanityData.healthGainsCard.image) || {
                src: '/health-gains-woman.jpg',
                alt: 'Health transformation'
            },
            variant: 'default'
        },
        overlappingImages: {
            primaryImage: transformImage(sanityData.overlappingImages.primaryImage) || {
                src: '/overlapping-image-1.png',
                alt: 'Primary transformation image',
                width: 340,
                height: 430
            },
            secondaryImage: transformImage(sanityData.overlappingImages.secondaryImage) || {
                src: '/overlapping-image-2.png',
                alt: 'Secondary transformation image',
                width: 340,
                height: 430
            },
            layout: 'default',
            overlap: 'medium',
            borderRadius: 'xl'
        },
        superchargeGoals: {
            title: {
                mainText: sanityData.superchargeGoals.mainText,
                highlightedText: sanityData.superchargeGoals.highlightedText
            },
            goals: sanityData.superchargeGoals.goals.map((goal)=>({
                    image: goal.image,
                    title: goal.title,
                    description: goal.description
                })),
            variant: 'default'
        }
    };
}
function transformWeightLossSolutionsData(sanityData, icons) {
    if (!sanityData) {
        return null;
    }
    return {
        heroContent: transformWeightLossHeroSection(sanityData.heroSection, icons),
        treatmentBenefitsData: transformTreatmentBenefitsSection(sanityData.treatmentBenefitsSection, icons),
        treatmentsData: transformTreatmentsSection(sanityData.treatmentsSection),
        treatmentOptionsData: transformTreatmentOptionsSection(sanityData.treatmentOptionsSection),
        statisticsSection: transformStatisticsSection(sanityData.statisticsSection),
        weightLossOverviewData: transformWeightLossOverviewSection(sanityData.weightLossOverviewSection),
        labTestedData: transformLabTestedSection(sanityData.labTestedSection, icons),
        gettingStartedData: {
            ...sanityData.gettingStartedSection,
            image: transformImage(sanityData.gettingStartedSection.image) || {
                src: '/slider.png',
                alt: 'Getting started process'
            }
        },
        ctaHeroContent: transformHeroSection(sanityData.ctaHeroSection),
        seo: sanityData.seo
    };
}
function transformContactData(data) {
    if (!data?.contactHeroSection) {
        throw new Error('Contact page data is missing required contactHeroSection');
    }
    const transformedContactHero = transformContactHeroSection(data.contactHeroSection);
    return {
        contactHeroData: transformedContactHero,
        seo: data.seo || {}
    };
}
// Contact Hero Section Transform
function transformContactHeroSection(section) {
    return {
        heroTitle: section.heroTitle,
        subtitle: section.subtitle,
        backgroundImage: transformImage(section.backgroundImage),
        primaryCTA: section.primaryCTA,
        secondaryCTA: section.secondaryCTA,
        contactInfo: {
            phone: section.contactInfo.phone,
            email: section.contactInfo.email,
            office: {
                address: section.contactInfo.office.address,
                city: section.contactInfo.office.city
            }
        }
    };
}
}}),
"[project]/src/shared/lib/seo-utils.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "generateSEOMetadata": (()=>generateSEOMetadata),
    "generateViewport": (()=>generateViewport),
    "seoConfig": (()=>seoConfig),
    "validateSEOData": (()=>validateSEOData)
});
const seoConfig = {
    siteName: "Health Platform",
    siteUrl: "https://localhost:3004",
    defaultTitle: "Health Platform - Feel Better. Look Better. Live Better.",
    defaultDescription: "Personalized treatments for weight loss, skincare, and wellness delivered discreetly to your door.",
    twitterHandle: "@healthplatform"
};
function generateSEOMetadata({ title, description, path = "", image, type = "website" }) {
    const fullTitle = title || seoConfig.defaultTitle;
    const fullDescription = description || seoConfig.defaultDescription;
    const fullUrl = `${seoConfig.siteUrl}${path}`;
    const defaultImage = `${seoConfig.siteUrl}/og-image.jpg`;
    const imageUrl = image || defaultImage;
    return {
        title: fullTitle,
        description: fullDescription,
        keywords: [
            "weight loss",
            "skincare",
            "wellness",
            "telemedicine",
            "personalized treatments",
            "medical consultation"
        ],
        authors: [
            {
                name: seoConfig.siteName
            }
        ],
        creator: seoConfig.siteName,
        publisher: seoConfig.siteName,
        formatDetection: {
            email: false,
            address: false,
            telephone: false
        },
        openGraph: {
            title: fullTitle,
            description: fullDescription,
            type: type,
            url: fullUrl,
            siteName: seoConfig.siteName,
            locale: "en_US",
            images: [
                {
                    url: imageUrl,
                    width: 1200,
                    height: 630,
                    alt: fullTitle
                }
            ]
        },
        twitter: {
            card: "summary_large_image",
            title: fullTitle,
            description: fullDescription,
            site: seoConfig.twitterHandle,
            creator: seoConfig.twitterHandle,
            images: [
                {
                    url: imageUrl,
                    alt: fullTitle
                }
            ]
        },
        alternates: {
            canonical: fullUrl
        },
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                "max-video-preview": -1,
                "max-image-preview": "large",
                "max-snippet": -1
            }
        },
        verification: {
            google: "your-google-site-verification-code"
        }
    };
}
function generateViewport() {
    return {
        width: "device-width",
        initialScale: 1
    };
}
function validateSEOData(seo) {
    const warnings = [];
    if (seo?.metaTitle) {
        if (seo.metaTitle.length > 60) {
            warnings.push(`Meta title is ${seo.metaTitle.length} characters (recommended: 50-60)`);
        }
        if (seo.metaTitle.length < 30) {
            warnings.push(`Meta title is ${seo.metaTitle.length} characters (recommended: 30-60)`);
        }
    }
    if (seo?.metaDescription) {
        if (seo.metaDescription.length > 160) {
            warnings.push(`Meta description is ${seo.metaDescription.length} characters (recommended: 150-160)`);
        }
        if (seo.metaDescription.length < 120) {
            warnings.push(`Meta description is ${seo.metaDescription.length} characters (recommended: 120-160)`);
        }
    }
    return warnings;
}
}}),
"[project]/src/app/page.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>HomePage),
    "generateMetadata": (()=>generateMetadata),
    "revalidate": (()=>revalidate),
    "viewport": (()=>viewport)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/shared/ui/index.ts [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$hero$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/hero-section.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$weight$2d$loss$2d$intro$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/weight-loss-intro-section.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$page$2d$template$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/ui/page-template.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$sanity$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/lib/sanity.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$transforms$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/lib/transforms.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$seo$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/lib/seo-utils.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/script.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
const revalidate = 60;
;
;
;
;
;
;
// Lazy load non-critical sections
const TreatmentsSection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.r("[project]/src/shared/ui/index.ts [app-rsc] (ecmascript, next/dynamic entry, async loader)")(__turbopack_context__.i).then((mod)=>({
            default: mod.TreatmentsSection
        })), {
    loadableGenerated: {
        modules: [
            "[project]/src/shared/ui/index.ts [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-32 animate-pulse bg-gray-200 rounded"
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 18,
            columnNumber: 18
        }, this)
});
const CategoriesSection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.r("[project]/src/shared/ui/index.ts [app-rsc] (ecmascript, next/dynamic entry, async loader)")(__turbopack_context__.i).then((mod)=>({
            default: mod.CategoriesSection
        })), {
    loadableGenerated: {
        modules: [
            "[project]/src/shared/ui/index.ts [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-32 animate-pulse bg-gray-200 rounded"
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 21,
            columnNumber: 18
        }, this)
});
const StatisticsSection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.r("[project]/src/shared/ui/index.ts [app-rsc] (ecmascript, next/dynamic entry, async loader)")(__turbopack_context__.i).then((mod)=>({
            default: mod.StatisticsSection
        })), {
    loadableGenerated: {
        modules: [
            "[project]/src/shared/ui/index.ts [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-32 animate-pulse bg-gray-200 rounded"
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 24,
            columnNumber: 18
        }, this)
});
const GettingStartedSection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.r("[project]/src/shared/ui/index.ts [app-rsc] (ecmascript, next/dynamic entry, async loader)")(__turbopack_context__.i).then((mod)=>({
            default: mod.GettingStartedSection
        })), {
    loadableGenerated: {
        modules: [
            "[project]/src/shared/ui/index.ts [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-32 animate-pulse bg-gray-200 rounded"
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 27,
            columnNumber: 18
        }, this)
});
const WhyChooseSection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.r("[project]/src/shared/ui/index.ts [app-rsc] (ecmascript, next/dynamic entry, async loader)")(__turbopack_context__.i).then((mod)=>({
            default: mod.WhyChooseSection
        })), {
    loadableGenerated: {
        modules: [
            "[project]/src/shared/ui/index.ts [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-32 animate-pulse bg-gray-200 rounded"
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 30,
            columnNumber: 18
        }, this)
});
const TestimonialsSection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.r("[project]/src/shared/ui/index.ts [app-rsc] (ecmascript, next/dynamic entry, async loader)")(__turbopack_context__.i).then((mod)=>({
            default: mod.TestimonialsSection
        })), {
    loadableGenerated: {
        modules: [
            "[project]/src/shared/ui/index.ts [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-32 animate-pulse bg-gray-200 rounded"
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 33,
            columnNumber: 18
        }, this)
});
const FAQSection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.r("[project]/src/shared/ui/index.ts [app-rsc] (ecmascript, next/dynamic entry, async loader)")(__turbopack_context__.i).then((mod)=>({
            default: mod.FAQSection
        })), {
    loadableGenerated: {
        modules: [
            "[project]/src/shared/ui/index.ts [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-32 animate-pulse bg-gray-200 rounded"
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 36,
            columnNumber: 18
        }, this)
});
const viewport = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$seo$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateViewport"])();
async function generateMetadata() {
    try {
        const sanityData = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$sanity$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["client"].fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$sanity$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HOMEPAGE_QUERY"]);
        // Validate SEO data and log warnings in development
        if (("TURBOPACK compile-time value", "development") === 'development' && sanityData?.seo) {
            const warnings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$seo$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["validateSEOData"])(sanityData.seo);
            if (warnings.length > 0) {
                console.warn('SEO warnings for homepage:', warnings);
            }
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$seo$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateSEOMetadata"])({
            title: sanityData?.seo?.metaTitle,
            description: sanityData?.seo?.metaDescription,
            path: "",
            image: sanityData?.heroSection?.backgroundImage?.asset?.url
        });
    } catch (error) {
        console.error('Error generating metadata:', error);
        // Return default metadata on error
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$seo$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateSEOMetadata"])({});
    }
}
// Function to get homepage data from Sanity with fallbacks
async function getHomepageData() {
    try {
        // Fetch homepage data only
        const sanityData = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$sanity$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["client"].fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$sanity$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HOMEPAGE_QUERY"]);
        if (!sanityData) {
            console.warn('No homepage data found in Sanity CMS, using fallback data');
            return getDefaultHomepageData();
        }
        // Transform Sanity data to component format
        const transformedData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$transforms$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["transformHomepageData"])(sanityData);
        if (!transformedData) {
            console.warn('Failed to transform homepage data, using fallback data');
            return getDefaultHomepageData();
        }
        return {
            weightLossIntroData: transformedData.weightLossIntroSection,
            heroContent: transformedData.heroSection,
            treatmentsData: transformedData.treatmentsSection,
            categoriesData: transformedData.categoriesSection,
            statisticsData: transformedData.statisticsSection,
            gettingStartedData: transformedData.gettingStartedSection,
            whyChooseData: transformedData.whyChooseSection,
            testimonialsData: transformedData.testimonialsSection,
            ctaHeroContent: transformedData.ctaHeroSection
        };
    } catch (error) {
        console.error('Error fetching homepage data from Sanity:', error);
        console.warn('Using fallback data due to Sanity error');
        return getDefaultHomepageData();
    }
}
// Fallback data when Sanity CMS is empty or unavailable
function getDefaultHomepageData() {
    return {
        weightLossIntroData: null,
        heroContent: {
            heroTitle: "Feel Better. Look Better. Live Better.",
            subtitle: "Personalized treatments for weight loss, skincare, and wellness delivered discreetly to your door.",
            backgroundImage: {
                src: "/hero-1.png",
                alt: "Hero Background"
            },
            primaryCTA: {
                text: "Get Started",
                href: "/onboarding"
            },
            secondaryCTA: {
                text: "Learn More",
                href: "/about-us"
            }
        },
        treatmentsData: {
            title: "Our Treatments",
            subtitle: "Personalized Care for Your Wellness Journey",
            description: "Choose from our range of medically-supervised treatments",
            treatments: [],
            viewAllText: "View All Treatments",
            viewAllUrl: "/treatments"
        },
        categoriesData: {
            title: "Treatment Categories",
            categories: []
        },
        statisticsData: {
            statisticPreText: "Patients see an average of",
            statisticTimeframe: "12 weeks",
            statisticPostText: "weight loss",
            calculatorTitle: "Calculate Your Potential",
            calculatorDefaultWeight: 180,
            calculatorMinWeight: 100,
            calculatorMaxWeight: 400,
            calculatorWeightLossPercentage: 15,
            calculatorResultText: "potential weight loss",
            calculatorUnit: "lbs",
            backgroundImage: {
                src: "/image-5.jpg",
                alt: "Statistics Background"
            }
        },
        gettingStartedData: {
            title: "Getting Started is Easy",
            subtitle: "Begin your wellness journey in three simple steps",
            steps: [
                {
                    title: "Complete Assessment"
                },
                {
                    title: "Consult with Doctor"
                },
                {
                    title: "Receive Treatment"
                }
            ],
            image: {
                src: "/onboarding-1.jpg",
                alt: "Getting Started"
            },
            primaryCTA: {
                text: "Start Assessment",
                href: "/onboarding"
            },
            secondaryCTA: {
                text: "Learn More",
                href: "/about-us"
            }
        },
        whyChooseData: {
            title: "Why Choose Us",
            subtitle: "Experience the difference with our personalized approach",
            valuePropositions: []
        },
        testimonialsData: {
            title: "What Our Patients Say",
            testimonials: []
        },
        ctaHeroContent: {
            heroTitle: "Ready to Start Your Journey?",
            subtitle: "Join thousands who have transformed their lives",
            backgroundImage: {
                src: "/image-7.jpg",
                alt: "CTA Hero Background"
            },
            primaryCTA: {
                text: "Get Started Today",
                href: "/onboarding"
            },
            secondaryCTA: {
                text: "Contact Us",
                href: "/contact"
            }
        }
    };
}
// Generate structured data for SEO
function generateStructuredData(pageData) {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "MedicalBusiness",
        "name": "Health Platform",
        "description": "Personalized treatments for weight loss, skincare, and wellness delivered discreetly to your door.",
        "url": "https://localhost:3004",
        "logo": "https://localhost:3004/logo.png",
        "sameAs": [
            "https://twitter.com/healthplatform"
        ],
        "serviceType": "Telemedicine",
        "medicalSpecialty": [
            "Weight Loss",
            "Skincare",
            "Wellness"
        ],
        "areaServed": "United States",
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Medical Treatments",
            "itemListElement": pageData.treatmentsData.treatments.map((treatment)=>({
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "MedicalTherapy",
                        "name": treatment.title,
                        "description": treatment.description
                    }
                }))
        }
    };
    return structuredData;
}
async function HomePage() {
    const pageData = await getHomepageData();
    const structuredData = generateStructuredData(pageData);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                id: "structured-data",
                type: "application/ld+json",
                dangerouslySetInnerHTML: {
                    __html: JSON.stringify(structuredData)
                }
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 211,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$page$2d$template$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PageTemplate"], {
                main: {
                    paddingTop: "none",
                    maxWidth: "default",
                    padding: "none",
                    background: "transparent"
                },
                children: [
                    pageData.weightLossIntroData && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$weight$2d$loss$2d$intro$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["WeightLossIntroSection"], {
                        title: pageData.weightLossIntroData.title,
                        subtitle: pageData.weightLossIntroData.subtitle,
                        medications: pageData.weightLossIntroData.medications
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 229,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$hero$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HeroSection"], {
                        heroTitle: pageData.heroContent.heroTitle,
                        subtitle: pageData.heroContent.subtitle,
                        backgroundImage: pageData.heroContent.backgroundImage,
                        primaryCTA: pageData.heroContent.primaryCTA,
                        secondaryCTA: pageData.heroContent.secondaryCTA,
                        variant: "image",
                        textColor: "light",
                        alignment: "center",
                        overlay: true,
                        overlayOpacity: "light",
                        horizontalMargin: "md"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 236,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pt-8 pb-8 px-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(TreatmentsSection, {
                            title: pageData.treatmentsData.title,
                            subtitle: pageData.treatmentsData.subtitle,
                            description: pageData.treatmentsData.description,
                            treatments: pageData.treatmentsData.treatments,
                            viewAllText: pageData.treatmentsData.viewAllText,
                            viewAllUrl: pageData.treatmentsData.viewAllUrl,
                            columnsDesktop: 4,
                            background: "default"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 252,
                            columnNumber: 9
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 251,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-[128px]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(CategoriesSection, {
                            title: pageData.categoriesData.title,
                            categories: pageData.categoriesData.categories,
                            background: "default"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 266,
                            columnNumber: 9
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 265,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-[768px]:px-0 mb-[128px]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(StatisticsSection, {
                            statisticPreText: pageData.statisticsData.statisticPreText,
                            statisticTimeframe: pageData.statisticsData.statisticTimeframe,
                            statisticPostText: pageData.statisticsData.statisticPostText,
                            calculatorTitle: pageData.statisticsData.calculatorTitle,
                            calculatorDefaultWeight: pageData.statisticsData.calculatorDefaultWeight,
                            calculatorMinWeight: pageData.statisticsData.calculatorMinWeight,
                            calculatorMaxWeight: pageData.statisticsData.calculatorMaxWeight,
                            calculatorWeightLossPercentage: pageData.statisticsData.calculatorWeightLossPercentage,
                            calculatorResultText: pageData.statisticsData.calculatorResultText,
                            calculatorUnit: pageData.statisticsData.calculatorUnit,
                            backgroundImage: pageData.statisticsData.backgroundImage,
                            padding: "py-[60px] px-[140px]"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 275,
                            columnNumber: 9
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 274,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-4 mb-[128px]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(GettingStartedSection, {
                            title: pageData.gettingStartedData.title,
                            subtitle: pageData.gettingStartedData.subtitle,
                            steps: pageData.gettingStartedData.steps,
                            image: pageData.gettingStartedData.image,
                            primaryCTA: pageData.gettingStartedData.primaryCTA,
                            secondaryCTA: pageData.gettingStartedData.secondaryCTA,
                            background: "default"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 293,
                            columnNumber: 9
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 292,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "py-16 md:py-24",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(WhyChooseSection, {
                            title: pageData.whyChooseData.title,
                            subtitle: pageData.whyChooseData.subtitle,
                            valuePropositions: pageData.whyChooseData.valuePropositions,
                            background: "default"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 306,
                            columnNumber: 9
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 305,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-4 mb-[128px]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(TestimonialsSection, {
                            title: pageData.testimonialsData.title,
                            testimonials: pageData.testimonialsData.testimonials,
                            columnsDesktop: 4,
                            background: "default"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 316,
                            columnNumber: 9
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 315,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-4 mb-[128px]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(FAQSection, {}, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 326,
                            columnNumber: 9
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 325,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-[128px]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$hero$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HeroSection"], {
                            heroTitle: pageData.ctaHeroContent.heroTitle,
                            subtitle: pageData.ctaHeroContent.subtitle,
                            backgroundImage: pageData.ctaHeroContent.backgroundImage,
                            primaryCTA: pageData.ctaHeroContent.primaryCTA,
                            secondaryCTA: pageData.ctaHeroContent.secondaryCTA,
                            variant: "image",
                            textColor: "light",
                            alignment: "center",
                            overlay: true,
                            overlayOpacity: "light",
                            horizontalMargin: "lg"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 331,
                            columnNumber: 9
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 330,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 219,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}}),
"[project]/src/app/page.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/page.tsx [app-rsc] (ecmascript)"));
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__ea63636f._.js.map