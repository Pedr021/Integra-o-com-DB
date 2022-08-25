const express = require('express')
const app = express()
const bodyParser = require("body-parser")
const User = require('./Models/User')

app.use(express.json())

const port = 3000

const db = require('./Models/db')

app.get("/",async(req,res)=>{
    res.send("pagina inicial-celke")
})

app.post("/cadastrar",async(req,res)=>{

    console.log(req.body)

    await User.create(req.body)
    .then(()=>{
        return res.json({
            erro:false,
            mensagem:"Usuario cadastrado co sucesso"
        })
    }).catch(()=>{
        return res.json({
            erro:false,
            mensagem:" Erro:Usuario cadastrado co sucesso"
        })
    })
    res.send("Pagina cadastro")
})

app.listen(port,()=>{
    console.log("Servidor rodando na porta " +port)
})