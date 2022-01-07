const botonRegis = document.getElementById('boton-registrar')

botonRegis.addEventListener('click', async (evento) => {
    evento.preventDefault()
    console.log('boton registrar')

    const inputNombre = document.getElementById('nombre')
    const nombre = inputNombre.value

    const inputApellido = document.getElementById('apellido')
    const apellido = inputApellido.value

    const inputEmail = document.getElementById('email')
    const email = inputEmail.value

    const inputPassword = document.getElementById('password')
    const password = inputPassword.value

    
    if (nombre && apellido && email && password) {
        const data = {
          nombre,
          apellido,
          email,
          password
        }
        const response = await fetch('http://localhost:8080/usuario', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        //console.log(data)
    }
})