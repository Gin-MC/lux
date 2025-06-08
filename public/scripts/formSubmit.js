document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('formulario-contacto')
  if (!form) return // Evita errores si el formulario no existe

  const submitButton = form.querySelector('button[type="submit"]')

  form.addEventListener('submit', async (e) => {
    e.preventDefault()

    const formData = new FormData(form)
    const data = Object.fromEntries(formData.entries())

    // Validación básica (puedes mejorarla según tus campos)
    for (const value of Object.values(data)) {
      if (!value.trim()) {
        alert('Por favor, completa todos los campos.')
        return
      }
    }

    try {
      submitButton.disabled = true
      submitButton.textContent = 'Enviando...'

      console.log('Datos enviados:', data);


      const response = await fetch('/api/contacto', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (!result.success) throw new Error(result.message)

      alert('Mensaje enviado correctamente. ¡Gracias por contactarnos!')
      form.reset()
    } catch (error) {
      console.error('Error:', error)
      alert('Ocurrió un error al enviar tu mensaje. Intenta nuevamente.')
    } finally {
      submitButton.disabled = false
      submitButton.textContent = 'Enviar'
    }
  })
})
