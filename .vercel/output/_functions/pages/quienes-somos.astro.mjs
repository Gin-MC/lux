import { c as createComponent, m as maybeRenderHead, r as renderTemplate, a as renderComponent } from '../chunks/astro/server_DwsLpEUx.mjs';
import { $ as $$Layout, a as $$Navbar, b as $$Footer } from '../chunks/Footer_DeasUrnw.mjs';
import { $ as $$Redes } from '../chunks/Redes_u7BPBaGa.mjs';
export { r as renderers } from '../chunks/internal_BsTt5pTQ.mjs';

const $$Conocenos = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="max-w-7xl mx-auto mt-12 flex flex-col md:flex-row items-center justify-between w-full px-6 md:px-16 py-20 gap-y-12 md:gap-x-10"> <!-- Texto a la izquierda --> <div class="w-full md:w-1/2 flex items-center justify-center"> <div class="space-y-6 text-center md:text-left animate-fade-in"> <h2 class="text-5xl font-bold text-[#FFD700]">¿Quiénes somos?</h2> <p class="text-lg leading-relaxed text-gray-200">
En <span class="text-[#FFD700] font-semibold">LUX</span>, no preparamos tragos... <em>orquestamos experiencias</em>. 
        Somos bartenders, sí —pero también artistas líquidos. Fusionamos técnica, pasión y una estética cuidada en cada presentación.
</p> <p class="text-lg leading-relaxed text-gray-300">
Cada evento es un escenario, y cada cóctel, una historia. Con profesionalismo y estilo, llevamos la coctelería a un nuevo nivel: sensorial, elegante, inolvidable.
</p> <p class="text-lg text-[#FFD700] font-medium">
¿Estás listo para brindar con clase? Nosotros ponemos el arte, tú la celebración.
</p> <p class="italic text-sm text-gray-400">– El equipo de LUX</p> </div> </div> <!-- Video a la derecha --> <div class="w-full md:w-1/2 animate-fade-in"> <video class="rounded-xl shadow-xl w-full hover:scale-[1.02] transition-transform duration-500 ease-in-out" autoplay muted loop playsinline poster="/assets/images/poster.jpg" title="Video presentación de LUX" aria-label="Video de presentación mostrando el estilo de LUX"> <source src="/assets/videos/prueva.mp4" type="video/mp4">
Tu navegador no soporta este video.
</video> </div> </section>`;
}, "C:/Users/USER/Documents/web/lux/src/components/Conocenos.astro", void 0);

const $$MisionVision = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="max-w-7xl mx-auto bg-black text-white px-6 md:px-16 py-24"> <div class="flex flex-col md:flex-row gap-16 md:gap-24 items-start justify-between"> <!-- Misión --> <div class="md:w-1/2 space-y-6 animate-fade-in"> <h3 class="text-4xl md:text-5xl font-bold text-center md:text-left text-[#FFD700] border-b-2 border-[#FFD700] pb-3">
Nuestra Misión
</h3> <p class="text-gray-200 text-lg leading-relaxed tracking-wide text-justify">
En <span class="font-semibold text-[#FFD700]">LUX</span>, brindamos más que bebidas: diseñamos experiencias. Nuestra misión es ofrecer un servicio de coctelería de alto nivel donde cada copa sea un momento inolvidable.
</p> <p class="text-gray-400 text-base italic text-justify">
Un cóctel bien hecho es un puente entre personas, una chispa que transforma lo cotidiano en algo mágico.
</p> </div> <!-- Visión --> <div class="md:w-1/2 space-y-6 animate-fade-in"> <h3 class="text-4xl md:text-5xl font-bold text-center md:text-left text-[#FFD700] border-b-2 border-[#FFD700] pb-3">
Nuestra Visión
</h3> <p class="text-gray-200 text-lg leading-relaxed tracking-wide text-justify">
Queremos ser la referencia nacional en coctelería de autor, destacándonos por nuestra creatividad, profesionalismo y pasión. Nuestro sueño: estar presentes en cada evento que quiera dejar huella.
</p> <p class="text-gray-400 text-base italic text-justify">
Aspiramos a construir una comunidad donde la elegancia y el sabor definan cada celebración.
</p> </div> </div> </section>`;
}, "C:/Users/USER/Documents/web/lux/src/components/MisionVision.astro", void 0);

const $$QuienesSomos = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { ["conocenos"]: ($$result2) => renderTemplate`${renderComponent($$result2, "Conocenos", $$Conocenos, { "slot": "conocenos" })}`, ["footer"]: ($$result2) => renderTemplate`${renderComponent($$result2, "Footer", $$Footer, { "slot": "footer" })}`, ["mision-vision"]: ($$result2) => renderTemplate`${renderComponent($$result2, "MisionVision", $$MisionVision, { "slot": "mision-vision" })}`, ["navbar"]: ($$result2) => renderTemplate`${renderComponent($$result2, "Navbar", $$Navbar, { "slot": "navbar" })}`, ["redes"]: ($$result2) => renderTemplate`${renderComponent($$result2, "Redes", $$Redes, { "slot": "redes" })}` })}`;
}, "C:/Users/USER/Documents/web/lux/src/pages/quienes-somos.astro", void 0);

const $$file = "C:/Users/USER/Documents/web/lux/src/pages/quienes-somos.astro";
const $$url = "/quienes-somos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$QuienesSomos,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
