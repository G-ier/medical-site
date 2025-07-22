module.exports = {

"[project]/.next-internal/server/app/auth/logout/route/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
}}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}}),
"[project]/src/shared/lib/auth0.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// This file exports a simple auth0 config for the custom implementation
// The app doesn't use standard Auth0 SDK routes
__turbopack_context__.s({
    "auth0Config": (()=>auth0Config)
});
const auth0Config = {
    secret: process.env.AUTH0_SECRET,
    baseURL: process.env.AUTH0_BASE_URL,
    issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL,
    clientID: process.env.AUTH0_CLIENT_ID,
    clientSecret: process.env.AUTH0_CLIENT_SECRET,
    authorizationParams: {
        response_type: 'code',
        audience: process.env.AUTH0_AUDIENCE,
        scope: process.env.AUTH0_SCOPE || 'openid profile email'
    }
};
}}),
"[project]/src/app/auth/logout/route.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "GET": (()=>GET)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$auth0$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/lib/auth0.ts [app-route] (ecmascript)");
;
;
async function GET(request) {
    try {
        console.log('🚪 Auth0 logout request received');
        const { searchParams } = new URL(request.url);
        const returnTo = searchParams.get('returnTo') || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$auth0$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["auth0Config"].baseURL;
        // Build Auth0 logout URL
        const logoutUrl = new URL('/v2/logout', __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$auth0$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["auth0Config"].issuerBaseURL);
        logoutUrl.searchParams.append('client_id', __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$auth0$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["auth0Config"].clientID);
        logoutUrl.searchParams.append('returnTo', returnTo);
        // Create response that redirects to Auth0 logout
        const response = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].redirect(logoutUrl.toString());
        // Clear any local session cookies
        response.cookies.delete('auth0_session');
        response.cookies.delete('access_token');
        response.cookies.delete('refresh_token');
        response.cookies.delete('migration_token');
        console.log('➡️ Redirecting to Auth0 logout:', logoutUrl.toString());
        return response;
    } catch (error) {
        console.error('❌ Auth0 logout error:', error);
        // Fallback: redirect to home
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL('/', request.url));
    }
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__8f4bfaed._.js.map