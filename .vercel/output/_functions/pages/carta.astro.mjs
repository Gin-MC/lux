import { c as createComponent, r as renderTemplate, d as addAttribute, m as maybeRenderHead, a as renderComponent } from '../chunks/astro/server_DwsLpEUx.mjs';
import { $ as $$Layout, a as $$Navbar, b as $$Footer } from '../chunks/Footer_DeasUrnw.mjs';
/* empty css                                 */
import { $ as $$Redes } from '../chunks/Redes_u7BPBaGa.mjs';
export { r as renderers } from '../chunks/internal_BsTt5pTQ.mjs';

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$CartaAutor = createComponent(($$result, $$props, $$slots) => {
  const cocteles = [
    {
      imagen: "https://www.saborusa.com/cr/wp-content/uploads/sites/14/2020/05/Sorprende-a-tus-invitados-con-estos-espectaculares-cocteles-Foto-destacada.png",
      titulo: "Negroni",
      descripcion: "Cl\xE1sico c\xF3ctel italiano con gin, vermut y Campari.",
      ingredientes: ["Gin", "Vermut rojo", "Campari", "Naranja"],
      etiquetas: ["Amargo", "Cl\xE1sico", "Fuerte"]
    },
    {
      imagen: "https://www.saborusa.com/cr/wp-content/uploads/sites/14/2020/05/Sorprende-a-tus-invitados-con-estos-espectaculares-cocteles-Foto-destacada.png",
      titulo: "Mojito",
      descripcion: "Refrescante mezcla de ron, menta y lima.",
      ingredientes: ["Ron blanco", "Menta", "Lima", "Az\xFAcar", "Soda"],
      etiquetas: ["Refrescante", "Dulce", "Verde"]
    },
    {
      imagen: "https://www.saborusa.com/cr/wp-content/uploads/sites/14/2020/05/Sorprende-a-tus-invitados-con-estos-espectaculares-cocteles-Foto-destacada.png",
      titulo: "Old Fashioned",
      descripcion: "Bourbon con toque de amargos y az\xFAcar.",
      ingredientes: ["Bourbon", "Amargos", "Az\xFAcar", "C\xE1scara de naranja", "Az\xFAcar", "C\xE1scara de naranja"],
      etiquetas: ["Cl\xE1sico", "Fuerte", "Dulce"]
    },
    {
      imagen: "https://www.saborusa.com/cr/wp-content/uploads/sites/14/2020/05/Sorprende-a-tus-invitados-con-estos-espectaculares-cocteles-Foto-destacada.png",
      titulo: "Cosmopolitan",
      descripcion: "C\xF3ctel afrutado y elegante a base de vodka.",
      ingredientes: ["Vodka", "Triple sec", "Ar\xE1ndanos", "Lima"],
      etiquetas: ["Frutal", "Elegante", "Rosado"]
    },
    {
      imagen: "https://www.saborusa.com/cr/wp-content/uploads/sites/14/2020/05/Sorprende-a-tus-invitados-con-estos-espectaculares-cocteles-Foto-destacada.png",
      titulo: "Daiquiri",
      descripcion: "Simple y fresco, ron con lima y az\xFAcar.",
      ingredientes: ["Ron blanco", "Lima", "Az\xFAcar"],
      etiquetas: ["Fresco", "C\xEDtrico", "Dulce"]
    },
    {
      imagen: "https://www.saborusa.com/cr/wp-content/uploads/sites/14/2020/05/Sorprende-a-tus-invitados-con-estos-espectaculares-cocteles-Foto-destacada.png",
      titulo: "Whiskey Sour",
      descripcion: "Whiskey con lim\xF3n y toque dulce.",
      ingredientes: ["Whiskey", "Lim\xF3n", "Az\xFAcar", "Clara de huevo (opcional)"],
      etiquetas: ["\xC1cido", "Dulce", "Cl\xE1sico"]
    }
  ];
  const columnas = [
    cocteles.slice(0, 2),
    cocteles.slice(2, 4),
    cocteles.slice(4, 6)
  ];
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<section class="max-w-7xl mx-auto px-6 py-16 bg-black text-yellow-400" id="carta-autor"> <h2 class="text-4xl font-bold text-center text-yellow-400 mb-12 border-b-2 border-yellow-600 inline-block pb-2">\nCocteler\xEDa de Autor\n</h2> <div class="grid grid-cols-1 md:grid-cols-3 gap-10"> ', " </div> </section> <script>\n  document.addEventListener('DOMContentLoaded', () => {\n    const cards = document.querySelectorAll('#carta-autor .card');\n\n    cards.forEach(card => {\n      card.addEventListener('click', () => {\n        const isExpanded = card.classList.contains('expanded');\n        const desc = card.querySelector('.descripcion');\n        const ing = card.querySelector('.ingredientes');\n\n        if (isExpanded) {\n          card.classList.remove('expanded');\n          card.style.height = '480px';\n          desc?.classList.add('line-clamp-3');\n          ing?.classList.add('line-clamp-4');\n        } else {\n          card.classList.add('expanded');\n          card.style.height = 'auto';\n          desc?.classList.remove('line-clamp-3');\n          ing?.classList.remove('line-clamp-4');\n        }\n      });\n    });\n  });\n<\/script>"])), maybeRenderHead(), columnas.map((col, colIdx) => renderTemplate`<div${addAttribute(colIdx, "key")} class="flex flex-col gap-12"> ${col.map((coctel, i) => {
    const globalIdx = colIdx * 2 + i;
    return renderTemplate`<article${addAttribute(globalIdx, "key")} class="card bg-[#1a1a1a] rounded-lg shadow-lg overflow-hidden border border-yellow-600 flex flex-col cursor-pointer select-none transition-all duration-300 ease-in-out h-[480px]"${addAttribute(globalIdx, "data-index")}> <img${addAttribute(coctel.imagen, "src")}${addAttribute(coctel.titulo, "alt")} class="w-full h-48 object-cover flex-shrink-0" loading="lazy"> <div class="p-6 flex flex-col flex-grow"> <h3 class="text-2xl font-bold mb-2 text-yellow-400"> ${coctel.titulo} </h3> <p class="descripcion text-gray-300 mb-4 line-clamp-3"> ${coctel.descripcion} </p> <div class="ingredientes mb-4 line-clamp-4 overflow-hidden"> <h4 class="font-semibold text-yellow-400 mb-1">Ingredientes:</h4> <ul class="list-disc list-inside text-gray-400 text-sm"> ${coctel.ingredientes.map((item, idx) => renderTemplate`<li${addAttribute(idx, "key")}>${item}</li>`)} </ul> </div> <div class="flex flex-wrap gap-2 mt-auto"> ${coctel.etiquetas.map((tag, idx) => renderTemplate`<span${addAttribute(idx, "key")} class="bg-yellow-600 text-black px-3 py-1 rounded-full text-sm font-semibold"> ${tag} </span>`)} </div> </div> </article>`;
  })} </div>`));
}, "C:/Users/USER/Documents/web/lux/src/components/CartaAutor.astro", void 0);

const $$CartaShot = createComponent(($$result, $$props, $$slots) => {
  const shots = [
    { nombre: "Shot 1", imagen: "https://png.pngtree.com/png-clipart/20250109/original/pngtree-tequila-shot-glasses-toasting-with-splash-png-image_19383318.png" },
    { nombre: "Shot 2", imagen: "https://png.pngtree.com/png-clipart/20250109/original/pngtree-tequila-shot-glasses-toasting-with-splash-png-image_19383318.png" },
    { nombre: "Shot 3", imagen: "https://png.pngtree.com/png-clipart/20250109/original/pngtree-tequila-shot-glasses-toasting-with-splash-png-image_19383318.png" },
    { nombre: "Shot 4", imagen: "https://png.pngtree.com/png-clipart/20250109/original/pngtree-tequila-shot-glasses-toasting-with-splash-png-image_19383318.png" },
    { nombre: "Shot 5", imagen: "https://png.pngtree.com/png-clipart/20250109/original/pngtree-tequila-shot-glasses-toasting-with-splash-png-image_19383318.png" },
    { nombre: "Shot 6", imagen: "https://png.pngtree.com/png-clipart/20250109/original/pngtree-tequila-shot-glasses-toasting-with-splash-png-image_19383318.png" }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="w-full bg-black py-12 px-4 text-yellow-400" id="carta-shots" data-astro-cid-er7cqtbw> <h2 class="text-3xl font-bold text-center mb-8 pb-2" data-astro-cid-er7cqtbw>
Shots
</h2> <div class="flex justify-center gap-8 overflow-x-auto no-scrollbar" data-astro-cid-er7cqtbw> ${shots.map(({ nombre, imagen }) => renderTemplate`<div class="flex flex-col items-center min-w-[120px]" data-astro-cid-er7cqtbw> <img${addAttribute(imagen, "src")}${addAttribute(nombre, "alt")} class="w-42 h-42 object-cover rounded-lg shadow-lg" loading="lazy" data-astro-cid-er7cqtbw> <span class="mt-2 text-yellow-300 font-semibold" data-astro-cid-er7cqtbw>${nombre}</span> </div>`)} </div> </section> `;
}, "C:/Users/USER/Documents/web/lux/src/components/CartaShot.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$CartaMixologia = createComponent(($$result, $$props, $$slots) => {
  const cocteles = [
    {
      video: "/public/assets/videos/prueva.mp4",
      titulo: "Negroni",
      descripcion: "Cl\xE1sico c\xF3ctel italiano con gin, vermut y Campari.",
      ingredientes: ["Gin", "Vermut rojo", "Campari", "Naranja"],
      etiquetas: ["Amargo", "Cl\xE1sico", "Fuerte"]
    },
    {
      video: "/public/assets/videos/prueva.mp4",
      titulo: "Mojito",
      descripcion: "Refrescante mezcla de ron, menta y lima.",
      ingredientes: ["Ron blanco", "Menta", "Lima", "Az\xFAcar", "Soda"],
      etiquetas: ["Refrescante", "Dulce", "Verde"]
    },
    {
      video: "/public/assets/videos/prueva.mp4",
      titulo: "Old Fashioned",
      descripcion: "Bourbon con toque de amargos y az\xFAcar.",
      ingredientes: ["Bourbon", "Amargos", "Az\xFAcar", "C\xE1scara de naranja"],
      etiquetas: ["Cl\xE1sico", "Fuerte", "Dulce"]
    },
    {
      video: "/public/assets/videos/prueva.mp4",
      titulo: "Cosmopolitan",
      descripcion: "C\xF3ctel afrutado y elegante a base de vodka.",
      ingredientes: ["Vodka", "Triple sec", "Ar\xE1ndanos", "Lima"],
      etiquetas: ["Frutal", "Elegante", "Rosado"]
    },
    {
      video: "/public/assets/videos/prueva.mp4",
      titulo: "Daiquiri",
      descripcion: "Simple y fresco, ron con lima y az\xFAcar.",
      ingredientes: ["Ron blanco", "Lima", "Az\xFAcar", "Lima", "Az\xFAcar"],
      etiquetas: ["Fresco", "C\xEDtrico", "Dulce"]
    },
    {
      video: "/public/assets/videos/prueva.mp4",
      titulo: "Whiskey Sour",
      descripcion: "Whiskey con lim\xF3n y toque dulce.",
      ingredientes: ["Whiskey", "Lim\xF3n", "Az\xFAcar", "Clara de huevo (opcional)"],
      etiquetas: ["\xC1cido", "Dulce", "Cl\xE1sico"]
    }
  ];
  const columnas = [
    cocteles.slice(0, 2),
    cocteles.slice(2, 4),
    cocteles.slice(4, 6)
  ];
  return renderTemplate(_a || (_a = __template(["", '<section class="max-w-7xl mx-auto px-6 py-16 bg-black text-yellow-400" id="carta-mixologia" data-astro-cid-jcezfjr3> <h2 class="text-4xl font-bold text-center text-yellow-400 mb-12 border-b-2 border-yellow-600 inline-block pb-2" data-astro-cid-jcezfjr3>\nMixolog\xEDa\n</h2> <div class="grid grid-cols-1 md:grid-cols-3 gap-10" data-astro-cid-jcezfjr3> ', " </div> </section> <script>\n  document.addEventListener('DOMContentLoaded', () => {\n    const cards = document.querySelectorAll('#carta-mixologia .card');\n\n    cards.forEach(card => {\n      card.addEventListener('click', () => {\n        const isExpanded = card.classList.contains('expanded');\n\n        if (isExpanded) {\n          card.style.height = '480px';\n          card.querySelector('.descripcion').classList.add('line-clamp-3');\n          card.querySelector('.ingredientes').classList.add('line-clamp-4');\n          card.classList.remove('expanded');\n        } else {\n          card.style.height = 'auto';\n          card.querySelector('.descripcion').classList.remove('line-clamp-3');\n          card.querySelector('.ingredientes').classList.remove('line-clamp-4');\n          card.classList.add('expanded');\n        }\n      });\n    });\n  });\n<\/script>"])), maybeRenderHead(), columnas.map((col, colIdx) => renderTemplate`<div${addAttribute(colIdx, "key")} class="flex flex-col gap-12" data-astro-cid-jcezfjr3> ${col.map((coctel, i) => {
    const globalIdx = colIdx * 2 + i;
    return renderTemplate`<article${addAttribute(globalIdx, "key")} class="card bg-[#1a1a1a] rounded-lg shadow-lg overflow-hidden border border-yellow-600 flex flex-col cursor-pointer select-none transition-all duration-300 ease-in-out h-[480px]"${addAttribute(globalIdx, "data-index")} data-astro-cid-jcezfjr3> <video${addAttribute(coctel.video, "src")} autoplay muted loop playsinline class="w-full h-48 object-cover flex-shrink-0" data-astro-cid-jcezfjr3></video> <div class="p-6 flex flex-col flex-grow" data-astro-cid-jcezfjr3> <h3 class="text-2xl font-bold mb-2 text-yellow-400" data-astro-cid-jcezfjr3>${coctel.titulo}</h3> <p class="descripcion text-gray-300 mb-4 line-clamp-3" data-astro-cid-jcezfjr3> ${coctel.descripcion} </p> <div class="ingredientes mb-4 line-clamp-4" data-astro-cid-jcezfjr3> <h4 class="font-semibold text-yellow-400 mb-1" data-astro-cid-jcezfjr3>Ingredientes:</h4> <ul class="list-disc list-inside text-gray-400 text-sm" data-astro-cid-jcezfjr3> ${coctel.ingredientes.map((item, idx) => renderTemplate`<li${addAttribute(idx, "key")} data-astro-cid-jcezfjr3>${item}</li>`)} </ul> </div> <div class="flex flex-wrap gap-2 mt-auto" data-astro-cid-jcezfjr3> ${coctel.etiquetas.map((tag, idx) => renderTemplate`<span${addAttribute(idx, "key")} class="bg-yellow-600 text-black px-3 py-1 rounded-full text-sm font-semibold" data-astro-cid-jcezfjr3> ${tag} </span>`)} </div> </div> </article>`;
  })} </div>`));
}, "C:/Users/USER/Documents/web/lux/src/components/CartaMixologia.astro", void 0);

const $$CartaCeroAlcohol = createComponent(($$result, $$props, $$slots) => {
  const coctelesIzquierda = [
    {
      nombre: "Sol Dorado",
      descripcion: "Un c\xF3ctel brillante con notas c\xEDtricas y un final burbujeante.",
      ingredientes: ["Gin", "Jugo de lim\xF3n", "Jarabe de agave", "Soda"],
      etiquetas: ["Refrescante", "C\xEDtrico"],
      imagen: "https://hips.hearstapps.com/hmg-prod/images/coctel-papakiss-don-papa-elle-1613080119.jpg"
    },
    {
      nombre: "Pasi\xF3n Lux",
      descripcion: "Frutal y seductor, ideal para abrir la noche con estilo.",
      ingredientes: ["Vodka", "Maracuy\xE1", "Triple sec", "Espuma de pi\xF1a"],
      etiquetas: ["Afrutado", "Ex\xF3tico"],
      imagen: "https://hips.hearstapps.com/hmg-prod/images/coctel-papakiss-don-papa-elle-1613080119.jpg"
    },
    {
      nombre: "Sol Dorado",
      descripcion: "Un c\xF3ctel brillante con notas c\xEDtricas y un final burbujeante.",
      ingredientes: ["Gin", "Jugo de lim\xF3n", "Jarabe de agave", "Soda"],
      etiquetas: ["Refrescante", "C\xEDtrico"],
      imagen: "https://hips.hearstapps.com/hmg-prod/images/coctel-papakiss-don-papa-elle-1613080119.jpg"
    }
    // Agrega 2 más
  ];
  const coctelesDerecha = [
    {
      nombre: "Noche Estelar",
      descripcion: "Oscuro, ahumado y con toques herbales que sorprenden.",
      ingredientes: ["Mezcal", "Vermut", "Romero", "Humo l\xEDquido"],
      etiquetas: ["Ahumado", "Intenso"],
      imagen: "https://hips.hearstapps.com/hmg-prod/images/coctel-papakiss-don-papa-elle-1613080119.jpg"
    },
    {
      nombre: "Jard\xEDn Secreto",
      descripcion: "Refrescante y floral, como un paseo entre flores al atardecer.",
      ingredientes: ["Gin", "Lavanda", "Pepino", "T\xF3nica"],
      etiquetas: ["Refrescante", "Floral"],
      imagen: "https://hips.hearstapps.com/hmg-prod/images/coctel-papakiss-don-papa-elle-1613080119.jpg"
    },
    {
      nombre: "Noche Estelar",
      descripcion: "Oscuro, ahumado y con toques herbales que sorprenden.",
      ingredientes: ["Mezcal", "Vermut", "Romero", "Humo l\xEDquido"],
      etiquetas: ["Ahumado", "Intenso"],
      imagen: "https://hips.hearstapps.com/hmg-prod/images/coctel-papakiss-don-papa-elle-1613080119.jpg"
    }
    // Agrega 2 más
  ];
  return renderTemplate`${maybeRenderHead()}<section class="max-w-7xl mx-auto py-16 px-6 text-white" id="carta-cero-alcohol"> <h2 class="text-4xl text-center text-[#FFD700] font-bold mb-12">Mocktails sin Alcohol</h2> <div class="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto"> <!-- Columna izquierda --> <div class="space-y-10"> ${coctelesIzquierda.map((c) => renderTemplate`<div class="border border-[#FFD700] rounded-2xl overflow-hidden shadow-md flex"> <img${addAttribute(c.imagen, "src")}${addAttribute(c.nombre, "alt")} class="w-1/2 aspect-square object-cover"> <div class="w-1/2 p-6"> <h3 class="text-2xl font-semibold text-[#FFD700]">${c.nombre}</h3> <p class="text-sm mb-2">${c.descripcion}</p> <p class="text-xs text-gray-300 mb-1">Ingredientes: ${c.ingredientes.join(", ")}</p> <div class="flex flex-wrap gap-2 mt-1"> ${c.etiquetas.map((et) => renderTemplate`<span class="bg-[#FFD700] text-black text-xs px-2 py-0.5 rounded-full">${et}</span>`)} </div> </div> </div>`)} </div> <!-- Columna derecha --> <div class="space-y-10"> ${coctelesDerecha.map((c) => renderTemplate`<div class="border border-[#FFD700] rounded-2xl overflow-hidden shadow-md flex flex-row-reverse"> <img${addAttribute(c.imagen, "src")}${addAttribute(c.nombre, "alt")} class="w-1/2 aspect-square object-cover"> <div class="w-1/2 p-6 text-right"> <h3 class="text-2xl font-semibold text-[#FFD700]">${c.nombre}</h3> <p class="text-sm mb-2">${c.descripcion}</p> <p class="text-xs text-gray-300 mb-1">Ingredientes: ${c.ingredientes.join(", ")}</p> <div class="flex flex-wrap gap-2 justify-end mt-1"> ${c.etiquetas.map((et) => renderTemplate`<span class="bg-[#FFD700] text-black text-xs px-2 py-0.5 rounded-full">${et}</span>`)} </div> </div> </div>`)} </div> </div> </section>`;
}, "C:/Users/USER/Documents/web/lux/src/components/CartaCeroAlcohol.astro", void 0);

const $$CartaClasica = createComponent(($$result, $$props, $$slots) => {
  const destilados = [
    {
      nombre: "Pisco",
      imagen: "https://licoresbrisol.com.pe/web/webimg/1825_1_1000.png",
      cocteles: ["Chilcanos", "Pisco Punch", "Capit\xE1n", "Algarrobina", "Pisco Sour", "Maracuy\xE1 Sour", "Machupichu", "Chicherito"]
    },
    {
      nombre: "Ron",
      imagen: "https://licoresbrisol.com.pe/web/webimg/1825_1_1000.png",
      cocteles: ["Mojito", "Pi\xF1a Colada", "Mai Tai", "Cuba Libre", "Daiquiri"]
    },
    {
      nombre: "Vodka",
      imagen: "https://licoresbrisol.com.pe/web/webimg/1825_1_1000.png",
      cocteles: ["Expreso Martini", "Apple Martini", "Screwdriver", "Vodka Tonic", "Cosmopolitan", "Laguna Azul", "Moscow Mule", "White Russian", "Sex on the Beach"]
    },
    {
      nombre: "Tequila",
      imagen: "https://licoresbrisol.com.pe/web/webimg/1825_1_1000.png",
      cocteles: ["Margarita", "Corona Margarita", "Paloma", "Tequila Sunrise"]
    },
    {
      nombre: "Gin",
      imagen: "https://licoresbrisol.com.pe/web/webimg/1825_1_1000.png",
      cocteles: ["Gin Tonic", "Gin & Gin", "Negroni", "Tom Collins", "French 75", "Cucumber Gimlet"]
    },
    {
      nombre: "Whisky",
      imagen: "https://licoresbrisol.com.pe/web/webimg/1825_1_1000.png",
      cocteles: ["Old Fashioned", "Whiskey Sour", "Manhattan", "Boulevardier"]
    },
    {
      nombre: "Licores",
      imagen: "https://licoresbrisol.com.pe/web/webimg/1825_1_1000.png",
      cocteles: ["Negroni Sbagliato", "Aperol Spritz", "Orgasmo", "Mimosa", "Bellini", "Tinto de Verano"]
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="max-w-7xl mx-auto bg-black py-16 px-4 text-yellow-400" id="coctel-clasico"> <h2 class="text-4xl font-bold text-center text-yellow-400 mb-12 border-b-2 border-yellow-600 inline-block pb-2">
Cócteles Clásicos
</h2> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"> ${destilados.map((grupo, idx) => renderTemplate`<div${addAttribute(idx, "key")} class="flex items-center border-b border-yellow-800 pb-4"> <div class="w-2/3 pr-4"> <h3 class="text-xl font-semibold text-yellow-300">${grupo.nombre}</h3> <ul class="list-disc list-inside text-sm text-gray-300"> ${grupo.cocteles.map((coctel, i) => renderTemplate`<li${addAttribute(i, "key")}>${coctel}</li>`)} </ul> </div> <img${addAttribute(grupo.imagen, "src")}${addAttribute(grupo.nombre, "alt")} class="w-1/3 object-cover aspect-square rounded-md"> </div>`)} </div> </section>`;
}, "C:/Users/USER/Documents/web/lux/src/components/CartaClasica.astro", void 0);

const $$Carta = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "redes": ($$result2) => renderTemplate`${renderComponent($$result2, "Redes", $$Redes, { "slot": "redes" })}`, ["carta-autor"]: ($$result2) => renderTemplate`${renderComponent($$result2, "CartaAutor", $$CartaAutor, { "slot": "carta-autor" })}`, ["carta-cero-alcohol"]: ($$result2) => renderTemplate`${renderComponent($$result2, "CartaCeroAlcohol", $$CartaCeroAlcohol, { "slot": "carta-cero-alcohol" })}`, ["carta-clasica"]: ($$result2) => renderTemplate`${renderComponent($$result2, "CartaClasica", $$CartaClasica, { "slot": "carta-clasica" })}`, ["carta-mixologia"]: ($$result2) => renderTemplate`${renderComponent($$result2, "CartaMixologia", $$CartaMixologia, { "slot": "carta-mixologia" })}`, ["carta-shot"]: ($$result2) => renderTemplate`${renderComponent($$result2, "CartaShot", $$CartaShot, { "slot": "carta-shot" })}`, ["footer"]: ($$result2) => renderTemplate`${renderComponent($$result2, "Footer", $$Footer, { "slot": "footer" })}`, ["navbar"]: ($$result2) => renderTemplate`${renderComponent($$result2, "Navbar", $$Navbar, { "slot": "navbar" })}` })}`;
}, "C:/Users/USER/Documents/web/lux/src/pages/carta.astro", void 0);

const $$file = "C:/Users/USER/Documents/web/lux/src/pages/carta.astro";
const $$url = "/carta";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Carta,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
