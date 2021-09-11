exports.paginaInicial = (req, res) => {
    
    res.send(`
        <form action ="/" method="POST">
            Nome do Cliente: <input type = "text" name = "nome"><br>
            Idade do Cliente: <input type = "number" name = "idade"><br>
                <button> Enviar</button>
        </form>`);
   
    };
    exports.trataPost = (req, res) => {
        res.send('Ei, sou nova rota de post ');
}