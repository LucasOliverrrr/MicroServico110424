//docker build .
//docker run -p:4000:4000 (ip)

const express    = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())

const anotacoesPorLembreteId = {}

const {v4 : uuid4} = require('uuid')

app.put('/lembretes/:id/Anotacoes', (req, res)=>{
    const idAnot = uuid4();
    const {texto} = req.body;
    const anotacoesPorLembrete =  anotacoesPorLembreteId[req.params.id] || [];
    anotacoesPorLembrete.push({id: idAnot, texto})
    anotacoesPorLembreteId[req.params.id] = anotacoesPorLembrete
    res.status(201).send(anotacoesPorLembrete)
})

app.get('/lembretes/:id/Anotacoes', (req, res)=>{
        res.send(anotacoesPorLembreteId[req.params.id] || [])
})

app.listen(4000, (()=>{
    console.log('Anotacoes - 4000')
}))