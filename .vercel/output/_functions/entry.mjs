import { r as renderers } from './chunks/internal_BsTt5pTQ.mjs';
import { c as createExports } from './chunks/entrypoint_BBtzEEW7.mjs';
import { manifest } from './manifest_CM6OFgBy.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/admin/cotizaciones.astro.mjs');
const _page2 = () => import('./pages/admin/dashboard.astro.mjs');
const _page3 = () => import('./pages/admin/insumos.astro.mjs');
const _page4 = () => import('./pages/admin/login.astro.mjs');
const _page5 = () => import('./pages/api/contacto.astro.mjs');
const _page6 = () => import('./pages/blog.astro.mjs');
const _page7 = () => import('./pages/carta.astro.mjs');
const _page8 = () => import('./pages/contacto.astro.mjs');
const _page9 = () => import('./pages/quienes-somos.astro.mjs');
const _page10 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.7.12_@types+node@22_2b4d72ef27105e9e1a1acaadf4970258/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/admin/cotizaciones.astro", _page1],
    ["src/pages/admin/dashboard.astro", _page2],
    ["src/pages/admin/insumos.astro", _page3],
    ["src/pages/admin/login.astro", _page4],
    ["src/pages/api/contacto.js", _page5],
    ["src/pages/blog.astro", _page6],
    ["src/pages/carta.astro", _page7],
    ["src/pages/contacto.astro", _page8],
    ["src/pages/quienes-somos.astro", _page9],
    ["src/pages/index.astro", _page10]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "16aca7a2-2cc3-4525-bef6-80ed21c8c20d",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
