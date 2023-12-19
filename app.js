const express = require('express');

const app = express();

app.use(express.static(`${__dirname}/publico`))

app.get(`/`,function(req,res){
    res.sendFile(`${__dirname}/publico/html/index.html`)
});

app.get(`/contato`,function(req,res){
    res.sendFile(`${__dirname}/publico/html/contato.html`)
});

app.get(`/cadastro`,function(req,res){
    res.sendFile(`${__dirname}/publico/html/cadastro.html`)
});

app.use(function(req,res){
    res.status(404).sendFile(`${__dirname}/publico/html/404.html`)
})

app.listen(3000,()=>{
    console.log('Servidor rodando na porta 3000');
});