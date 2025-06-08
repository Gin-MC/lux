import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';
export { r as renderers } from '../../chunks/internal_BsTt5pTQ.mjs';

var define_process_env_default = { RESEND_API_KEY: "re_6QM9CjnD_7LQoaJuVMfrNDQwooJFW3nQL", TO_EMAIL: "luxserviciosbartenders@gmail.com"};
const prerender = false;
const supabase = createClient(
  "https://luewfxrajaqhlfqorlul.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx1ZXdmeHJhamFxaGxmcW9ybHVsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkzNDg4NjUsImV4cCI6MjA2NDkyNDg2NX0.5fiS1C9k0khCja-QCmKQuDenFDWua5EPKPOPZVeOvaE"
);
const resend = new Resend(define_process_env_default.RESEND_API_KEY);
const toEmail = define_process_env_default.TO_EMAIL;
async function POST({ request }) {
  try {
    const body = await request.json();
    const requiredFields = ["nombre", "email", "telefono", "fecha", "lugar", "invitados", "tipo_evento"];
    for (const field of requiredFields) {
      if (!body[field] || String(body[field]).trim() === "") {
        return new Response(
          JSON.stringify({ success: false, message: `Falta el campo requerido: ${field}` }),
          { status: 400 }
        );
      }
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return new Response(
        JSON.stringify({ success: false, message: "Email inválido" }),
        { status: 400 }
      );
    }
    const { error } = await supabase.from("formulario_contacto").insert([body]);
    if (error) {
      console.error("Error al insertar en Supabase:", error);
      return new Response(
        JSON.stringify({ success: false, message: `Error al guardar en Supabase: ${error.message}` }),
        { status: 500 }
      );
    }
    await resend.emails.send({
      from: "Formulario LUX <no-reply@luxbartenders.com>",
      to: toEmail,
      subject: "📩 Nuevo mensaje del formulario de contacto",
      html: `
        <h2>Nuevo mensaje recibido</h2>
        <p><strong>Nombre:</strong> ${body.nombre}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Teléfono:</strong> ${body.telefono}</p>
        <p><strong>Fecha:</strong> ${body.fecha}</p>
        <p><strong>Lugar:</strong> ${body.lugar}</p>
        <p><strong>Invitados:</strong> ${body.invitados}</p>
        <p><strong>Tipo de evento:</strong> ${body.tipo_evento}</p>
        <p><strong>Mensaje:</strong> ${body.mensaje || "Sin mensaje adicional"}</p>
      `
    });
    return new Response(
      JSON.stringify({ success: true, message: "Mensaje enviado con éxito" }),
      { status: 200 }
    );
  } catch (err) {
    console.error("Error procesando solicitud:", err);
    return new Response(
      JSON.stringify({ success: false, message: "Error procesando solicitud" }),
      { status: 400 }
    );
  }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
