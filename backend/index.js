const express = require('express')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors())

app.post('/usuario', (req, res) => {
    const usuario = req.body
    console.log(usuario)
    usuario.id = userId++
    usuarios.push(usuario)
    res.json(usuario)
})

app.listen(8080, () => {
    console.log('server running in http://localhost:8080')
})
