// src/pages/api/contacto.js
export const prerender = false;

import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.PUBLIC_SUPABASE_URL,
  import.meta.env.PUBLIC_SUPABASE_ANON_KEY
);

export async function POST({ request }) {
  try {
    const body = await request.json();

    const requiredFields = ['nombre', 'email', 'telefono', 'fecha', 'lugar', 'invitados', 'tipo_evento'];
    for (const field of requiredFields) {
      if (!body[field] || String(body[field]).trim() === '') {
        return new Response(
          JSON.stringify({ success: false, message: `Falta el campo requerido: ${field}` }),
          { status: 400 }
        );
      }
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return new Response(
        JSON.stringify({ success: false, message: 'Email inválido' }),
        { status: 400 }
      );
    }

    const { error } = await supabase.from('formulario_contacto').insert([body]);
    if (error) {
      console.error('Error al insertar en Supabase:', error);
      return new Response(
        JSON.stringify({ success: false, message: `Error al guardar en Supabase: ${error.message}` }),
        { status: 500 }
      );
    }

    return new Response(
      JSON.stringify({ success: true, message: 'Mensaje enviado con éxito (guardado en Supabase)' }),
      { status: 200 }
    );
  } catch (err) {
    console.error('Error procesando solicitud:', err);
    return new Response(
      JSON.stringify({ success: false, message: 'Error procesando solicitud' }),
      { status: 400 }
    );
  }
}
