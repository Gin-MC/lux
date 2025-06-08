import { h as decodeKey } from './chunks/astro/server_DwsLpEUx.mjs';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_Ba3b_zQ_.mjs';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/USER/Documents/web/lux/","cacheDir":"file:///C:/Users/USER/Documents/web/lux/node_modules/.astro/","outDir":"file:///C:/Users/USER/Documents/web/lux/dist/","srcDir":"file:///C:/Users/USER/Documents/web/lux/src/","publicDir":"file:///C:/Users/USER/Documents/web/lux/public/","buildClientDir":"file:///C:/Users/USER/Documents/web/lux/dist/client/","buildServerDir":"file:///C:/Users/USER/Documents/web/lux/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/astro@5.7.12_@types+node@22_2b4d72ef27105e9e1a1acaadf4970258/node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/admin/cotizaciones","isIndex":false,"type":"page","pattern":"^\\/admin\\/cotizaciones\\/?$","segments":[[{"content":"admin","dynamic":false,"spread":false}],[{"content":"cotizaciones","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/admin/cotizaciones.astro","pathname":"/admin/cotizaciones","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/admin/dashboard","isIndex":false,"type":"page","pattern":"^\\/admin\\/dashboard\\/?$","segments":[[{"content":"admin","dynamic":false,"spread":false}],[{"content":"dashboard","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/admin/dashboard.astro","pathname":"/admin/dashboard","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/admin/insumos","isIndex":false,"type":"page","pattern":"^\\/admin\\/insumos\\/?$","segments":[[{"content":"admin","dynamic":false,"spread":false}],[{"content":"insumos","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/admin/insumos.astro","pathname":"/admin/insumos","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/admin/login","isIndex":false,"type":"page","pattern":"^\\/admin\\/login\\/?$","segments":[[{"content":"admin","dynamic":false,"spread":false}],[{"content":"login","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/admin/login.astro","pathname":"/admin/login","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/contacto","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/contacto\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"contacto","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/contacto.js","pathname":"/api/contacto","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/blog","isIndex":false,"type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog.astro","pathname":"/blog","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/carta.BqTYWGpO.css"},{"type":"inline","content":".no-scrollbar[data-astro-cid-er7cqtbw]::-webkit-scrollbar{display:none}.no-scrollbar[data-astro-cid-er7cqtbw]{-ms-overflow-style:none;scrollbar-width:none}.line-clamp-3[data-astro-cid-jcezfjr3]{display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}.line-clamp-4[data-astro-cid-jcezfjr3]{display:-webkit-box;-webkit-line-clamp:4;-webkit-box-orient:vertical;overflow:hidden}\n"}],"routeData":{"route":"/carta","isIndex":false,"type":"page","pattern":"^\\/carta\\/?$","segments":[[{"content":"carta","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/carta.astro","pathname":"/carta","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/carta.BqTYWGpO.css"},{"type":"inline","content":".form-input[data-astro-cid-fosgczaw]{background-color:#1a1a1a;padding:.75rem;border-radius:.5rem;border:1px solid #FFD700;color:#fff;width:100%}input[data-astro-cid-fosgczaw][type=number]::-webkit-inner-spin-button,input[data-astro-cid-fosgczaw][type=number]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}input[data-astro-cid-fosgczaw][type=number]{-moz-appearance:textfield}.sr-only[data-astro-cid-fosgczaw]{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);border:0}\n"}],"routeData":{"route":"/contacto","isIndex":false,"type":"page","pattern":"^\\/contacto\\/?$","segments":[[{"content":"contacto","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contacto.astro","pathname":"/contacto","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/carta.BqTYWGpO.css"}],"routeData":{"route":"/quienes-somos","isIndex":false,"type":"page","pattern":"^\\/quienes-somos\\/?$","segments":[[{"content":"quienes-somos","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/quienes-somos.astro","pathname":"/quienes-somos","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/carta.BqTYWGpO.css"},{"type":"inline","content":"html{scroll-behavior:smooth}@keyframes fadeUp{0%{transform:translateY(30px);opacity:0}to{transform:translateY(0);opacity:1}}.animate-fade-delay-1[data-astro-cid-bbe6dxrz]{animation:fadeUp 1s ease-out forwards;animation-delay:.3s}.animate-fade-delay-2[data-astro-cid-bbe6dxrz]{animation:fadeUp 1s ease-out forwards;animation-delay:.6s}.animate-fade-delay-3[data-astro-cid-bbe6dxrz]{animation:fadeUp 1s ease-out forwards;animation-delay:.9s}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/USER/Documents/web/lux/src/pages/carta.astro",{"propagation":"none","containsHead":true}],["C:/Users/USER/Documents/web/lux/src/pages/contacto.astro",{"propagation":"none","containsHead":true}],["C:/Users/USER/Documents/web/lux/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/USER/Documents/web/lux/src/pages/quienes-somos.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:src/pages/admin/cotizaciones@_@astro":"pages/admin/cotizaciones.astro.mjs","\u0000@astro-page:src/pages/admin/dashboard@_@astro":"pages/admin/dashboard.astro.mjs","\u0000@astro-page:src/pages/admin/insumos@_@astro":"pages/admin/insumos.astro.mjs","\u0000@astro-page:src/pages/admin/login@_@astro":"pages/admin/login.astro.mjs","\u0000@astro-page:src/pages/api/contacto@_@js":"pages/api/contacto.astro.mjs","\u0000@astro-page:src/pages/blog@_@astro":"pages/blog.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:src/pages/contacto@_@astro":"pages/contacto.astro.mjs","\u0000@astro-page:src/pages/quienes-somos@_@astro":"pages/quienes-somos.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:src/pages/carta@_@astro":"pages/carta.astro.mjs","\u0000@astro-page:node_modules/.pnpm/astro@5.7.12_@types+node@22_2b4d72ef27105e9e1a1acaadf4970258/node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-renderers":"renderers.mjs","C:/Users/USER/Documents/web/lux/node_modules/.pnpm/astro@5.7.12_@types+node@22_2b4d72ef27105e9e1a1acaadf4970258/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_CTtpXgN0.mjs","\u0000@astrojs-manifest":"manifest_CM6OFgBy.mjs","C:/Users/USER/Documents/web/lux/src/components/Hero.astro?astro&type=script&index=0&lang.ts":"_astro/Hero.astro_astro_type_script_index_0_lang.BJ0AUjhD.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/Users/USER/Documents/web/lux/src/components/Hero.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",()=>{document.getElementById(\"scrollArrow\").addEventListener(\"click\",()=>{document.getElementById(\"carta-hero\").scrollIntoView({behavior:\"smooth\"})})});"]],"assets":["/_astro/carta.BqTYWGpO.css","/Logo-Lux-Dorado.svg","/scripts/formSubmit.js","/assets/imagenes/maracuya.png","/assets/videos/autor.mp4","/assets/videos/autorDos.mp4","/assets/videos/hero-bg.mp4","/assets/videos/mojito.mp4","/assets/videos/prueva.mp4"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"cKTAWNEcMPpEkW3ck441a6Uf9h5Ufwkz7aSJLOKvWnU="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
