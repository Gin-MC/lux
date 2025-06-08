import { c as createComponent, m as maybeRenderHead, g as renderScript, r as renderTemplate, a as renderComponent } from '../chunks/astro/server_DwsLpEUx.mjs';
import { $ as $$Layout, a as $$Navbar, b as $$Footer } from '../chunks/Footer_DeasUrnw.mjs';
/* empty css                                 */
import { $ as $$Redes } from '../chunks/Redes_u7BPBaGa.mjs';
export { r as renderers } from '../chunks/internal_BsTt5pTQ.mjs';

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="relative min-h-screen flex items-center justify-center text-white overflow-hidden" id="hero" data-astro-cid-bbe6dxrz> <!-- Video de fondo --> <video autoplay muted loop playsinline aria-hidden="true" class="absolute inset-0 w-full h-full object-cover opacity-100 z-0" data-astro-cid-bbe6dxrz> <source src="/assets/videos/hero-bg.mp4" type="video/mp4" data-astro-cid-bbe6dxrz>
Tu navegador no admite videos HTML5.
</video> <!-- Capa oscura --> <div class="absolute inset-0 bg-black/60 z-10" data-astro-cid-bbe6dxrz></div> <!-- Contenido --> <div class="relative z-20 text-center px-4" data-astro-cid-bbe6dxrz> <img src="/Logo-Lux-Dorado.svg" alt="Logo de Lux Bartenders" class="h-[180px] w-auto mx-auto mb-4 animate-fade-delay-1" data-astro-cid-bbe6dxrz> <p class="text-xl md:text-2xl max-w-2xl mx-auto mb-6 animate-fade-delay-2" data-astro-cid-bbe6dxrz>
Coctelería de Autor & Servicio Exclusivo para Eventos Inolvidables
</p> <a href="/contacto" class="inline-block bg-[#FFD700] text-black px-6 py-3 rounded-full text-lg font-semibold hover:bg-transparent hover:border hover:border-[#FFD700] hover:text-[#FFD700] transition duration-300 animate-fade-delay-3" data-astro-cid-bbe6dxrz>
Cotiza tu Evento
</a> </div> <!--Flecha de scroll --> <div class="absolute bottom-6 z-20 animate-bounce text-[#FFD700] cursor-pointer" id="scrollArrow" data-astro-cid-bbe6dxrz> <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-auto mb-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-bbe6dxrz> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-astro-cid-bbe6dxrz></path> </svg> </div> <!--Animaciones -->  <!-- JS para scroll hacia #carta --> ${renderScript($$result, "C:/Users/USER/Documents/web/lux/src/components/Hero.astro?astro&type=script&index=0&lang.ts")} </section>`;
}, "C:/Users/USER/Documents/web/lux/src/components/Hero.astro", void 0);

const $$CocktailCard = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="py-20 space-y-24" id="carta-hero"> <!-- Coctelería de Autor --> <div class="flex flex-col md:flex-row items-center px-6 md:px-16 gap-8 md:gap-16"> <video autoplay muted loop playsinline aria-label="Video de presentación de coctelería de autor" class="w-full md:w-1/2 rounded-lg shadow-lg transition-transform duration-500 hover:scale-105"> <source src="/assets/videos/autor.mp4" type="video/mp4"> </video> <div class="md:w-1/2 space-y-4"> <h2 class="text-4xl font-bold text-[#FFD700]">Coctelería de Autor</h2> <p class="text-lg">Creaciones únicas, diseñadas especialmente para cautivar tus sentidos. Una experiencia personalizada con sabores que cuentan historias.</p> <a href="/carta/#carta-autor" class="inline-block bg-[#FFD700] text-black px-6 py-3 rounded-full font-semibold hover:bg-transparent hover:border hover:border-[#FFD700] hover:text-[#FFD700] transition duration-300 animate-fade-delay-3">
Explorar Carta de Autor
</a> </div> </div> <!-- Mixología --> <div class="flex flex-col md:flex-row-reverse items-center px-6 md:px-16 gap-8 md:gap-16"> <video autoplay muted loop playsinline aria-label="Video de presentación de mixología Moderna" class="w-full md:w-1/2 rounded-lg shadow-lg transition-transform duration-500 hover:scale-105"> <source src="/assets/videos/autorDos.mp4" type="video/mp4"> </video> <div class="md:w-1/2 space-y-4 text-left"> <h2 class="text-4xl font-bold text-[#FFD700]">Mixología Moderna</h2> <p class="text-lg">Combinaciones audaces y técnicas avanzadas. Fusionamos ciencia y arte para ofrecer cocteles modernos con ingredientes premium.</p> <a href="/carta/#carta-mixologia" class="inline-block bg-[#FFD700] text-black px-6 py-3 rounded-full font-semibold hover:bg-transparent hover:border hover:border-[#FFD700] hover:text-[#FFD700] transition duration-300 animate-fade-delay-3">
Explorar Carta de Mixología
</a> </div> </div> <!-- Clásicos --> <div class="flex flex-col md:flex-row items-center px-6 md:px-16 gap-8 md:gap-16"> <video autoplay muted loop playsinline aria-label="Video de presentación de coctelería clásica" class="w-full md:w-1/2 rounded-lg shadow-lg transition-transform duration-500 hover:scale-105"> <source src="/assets/videos/mojito.mp4" type="video/mp4"> </video> <div class="md:w-1/2 space-y-4"> <h2 class="text-4xl font-bold text-[#FFD700]">Coctelería Clásica</h2> <p class="text-lg">Los clásicos que nunca fallan. Old Fashioned, Negroni, Daiquiri y más, ejecutados con maestría y respeto por la tradición.</p> <a href="/carta/#coctel-clasico" class="inline-block bg-[#FFD700] text-black px-6 py-3 rounded-full font-semibold hover:bg-transparent hover:border hover:border-[#FFD700] hover:text-[#FFD700] transition duration-300 animate-fade-delay-3">
Explorar Carta Clásica
</a> </div> </div> <!-- Mocktails --> <div class="flex flex-col md:flex-row-reverse items-center px-6 md:px-16 gap-8 md:gap-16"> <video autoplay muted loop playsinline aria-label="Video de presentación de mocktails creativos" class="w-full md:w-1/2 rounded-lg shadow-lg transition-transform duration-500 hover:scale-105"> <source src="/assets/videos/autorDos.mp4" type="video/mp4"> </video> <div class="md:w-1/2 space-y-4 text-left"> <h2 class="text-4xl font-bold text-[#FFD700]">Mocktails Creativos</h2> <p class="text-lg">Estilo, sabor y originalidad para quienes eligen una experiencia distinta, intensa y completamente libre de alcohol.</p> <a href="/carta/#carta-cero-alcohol" class="inline-block bg-[#FFD700] text-black px-6 py-3 rounded-full font-semibold hover:bg-transparent hover:border hover:border-[#FFD700] hover:text-[#FFD700] transition duration-300 animate-fade-delay-3">
Explorar Carta Mocktails
</a> </div> </div> <!-- Shot --> <div class="flex flex-col md:flex-row items-center px-6 md:px-16 gap-8 md:gap-16"> <video autoplay muted loop playsinline aria-label="Video de presentación de shots explosivos" class="w-full md:w-1/2 rounded-lg shadow-lg transition-transform duration-500 hover:scale-105"> <source src="/assets/videos/mojito.mp4" type="video/mp4"> </video> <div class="md:w-1/2 space-y-4"> <h2 class="text-4xl font-bold text-[#FFD700]">Shots Explosivos</h2> <p class="text-lg">Explosiones de sabor en un solo trago. Ideales para romper el hielo y elevar el ánimo en segundos.</p> <a href="/carta/#carta-shots" class="inline-block bg-[#FFD700] text-black px-6 py-3 rounded-full font-semibold hover:bg-transparent hover:border hover:border-[#FFD700] hover:text-[#FFD700] transition duration-300 animate-fade-delay-3">
Explorar Carta de Shots
</a> </div> </div> </section>`;
}, "C:/Users/USER/Documents/web/lux/src/components/CocktailCard.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { ["coctail-card"]: ($$result2) => renderTemplate`${renderComponent($$result2, "CocktailCard", $$CocktailCard, { "slot": "coctail-card" })}`, ["footer"]: ($$result2) => renderTemplate`${renderComponent($$result2, "Footer", $$Footer, { "slot": "footer" })}`, ["hero"]: ($$result2) => renderTemplate`${renderComponent($$result2, "Hero", $$Hero, { "slot": "hero" })}`, ["navbar"]: ($$result2) => renderTemplate`${renderComponent($$result2, "Navbar", $$Navbar, { "slot": "navbar" })}`, ["redes"]: ($$result2) => renderTemplate`${renderComponent($$result2, "Redes", $$Redes, { "slot": "redes" })}` })}`;
}, "C:/Users/USER/Documents/web/lux/src/pages/index.astro", void 0);

const $$file = "C:/Users/USER/Documents/web/lux/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
