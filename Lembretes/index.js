const bodyParser = require('body-parser')
const express    = require('express')
const app        = express()
const porta      = 3000
app.use(bodyParser.json())
const lembretes = {}
contador  = 0

app.get('/lembretes', (req,res)=>{
    res.send(lembretes)
})

app.put('/lembretes', (req, res)=>{
    contador++
    const {texto} = req.body;
    lembretes[contador]  = {contador, texto}
    res.status(201).send(lembretes[contador])
})

app.listen(porta, ()=>{console.log("Lembretes - Porta 3000")})

