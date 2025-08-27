const express = require("express");

const app = express();

app.get("/MultiplicacaoDeDoisValores", (request, response) => {
    const { a, b } = request.query;

    response.send(`${a} X ${b} = ${Number(a) * Number(b)}`);
});

app.listen(8080, ()=>{
    console.log("Servidor rodando na porta 8080");
});

//http://localhost:8080/MultiplicacaoDeDoisValores/?a=2&b=3