const express = require ('express')
const app = express()

app.listen(8081, function(){
    console.log("Servidor ativo")
})

app.get("/", function(req,res){
    res.send("Seja bem vindo, node js!")
})

app.get("/cadastrar/:item/:quantidade", function(req,res){
    res.send("Página de cadastro" + req.params.item + "-Quantidade " + req.params.quantidade)
})

app.get("/contato", function(req,res){
    res.send("página de contato")
})

