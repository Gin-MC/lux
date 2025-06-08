export const prerender = false

import { createClient } from '@supabase/supabase-js'
import { Resend } from 'resend'

const supabase = createClient(
  import.meta.env.PUBLIC_SUPABASE_URL,
  import.meta.env.PUBLIC_SUPABASE_ANON_KEY
)

const resend = new Resend(process.env.RESEND_API_KEY)
const toEmail = process.env.TO_EMAIL

export async function POST({ request }) {
  try {
    const body = await request.json()

    const requiredFields = ['nombre', 'email', 'telefono', 'fecha', 'lugar', 'invitados', 'tipo_evento']
    for (const field of requiredFields) {
      if (!body[field] || String(body[field]).trim() === '') {
        return new Response(
          JSON.stringify({ success: false, message: `Falta el campo requerido: ${field}` }),
          { status: 400 }
        )
      }
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return new Response(
        JSON.stringify({ success: false, message: 'Email inválido' }),
        { status: 400 }
      )
    }

    const { error } = await supabase.from('formulario_contacto').insert([body])
    if (error) {
      console.error('Error al insertar en Supabase:', error)
      return new Response(
        JSON.stringify({ success: false, message: `Error al guardar en Supabase: ${error.message}` }),
        { status: 500 }
      )
    }

    // ✉️ Envío del correo
    await resend.emails.send({
      from: 'Formulario LUX <no-reply@luxbartenders.com>',
      to: toEmail,
      subject: '📩 Nuevo mensaje del formulario de contacto',
      html: `
        <h2>Nuevo mensaje recibido</h2>
        <p><strong>Nombre:</strong> ${body.nombre}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Teléfono:</strong> ${body.telefono}</p>
        <p><strong>Fecha:</strong> ${body.fecha}</p>
        <p><strong>Lugar:</strong> ${body.lugar}</p>
        <p><strong>Invitados:</strong> ${body.invitados}</p>
        <p><strong>Tipo de evento:</strong> ${body.tipo_evento}</p>
        <p><strong>Mensaje:</strong> ${body.mensaje || 'Sin mensaje adicional'}</p>
      `,
    })

    return new Response(
      JSON.stringify({ success: true, message: 'Mensaje enviado con éxito' }),
      { status: 200 }
    )

  } catch (err) {
    console.error('Error procesando solicitud:', err)
    return new Response(
      JSON.stringify({ success: false, message: 'Error procesando solicitud' }),
      { status: 400 }
    )
  }
}
