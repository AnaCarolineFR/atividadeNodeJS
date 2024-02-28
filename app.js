const express = require ('express')
const app = express()

app.listen(8081, function(){
    console.log("Servidor ativo")
})

app.get("/", function(req,res){
    res.send("Seja bem vindo, node js!")
})

app.get("/produtos/:automovel/:marca/:modelo/:ano", function(req,res){
    res.send("Página de Produtos " + req.params.automovel + "-Marca " + req.params.marca + "-Modelo " + req.params.modelo + "-Marca " + req.params.ano)
})

app.get("/cadastrar/:usuario", function(req,res){
    res.send("Página de cadastro " + req.params.usuario)
})

app.get("/contato", function(req,res){
    res.send("Página de contato")
})


