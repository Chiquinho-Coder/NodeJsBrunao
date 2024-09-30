import express, { json } from 'express';

const servidor = express();
servidor.use(express.json());


servidor.get('/helloworld', (req, resp) => {
    //codigo do endpoint
    resp.send('Hello World :D');
})

//-------------------------------------------------------------------> MENSAGENS Parametro Rota

servidor.get('/msg/boasvindas', (req,resp) => {
    resp.send('Hallo, Wilkommen');
})

servidor.get('/v2/msg/boasvindas', (req,resp) => {
    resp.send('V2 Bebe!!');
})

servidor.get('/msg/ocupado', (req,resp) => {
    resp.send('TO OCUPADO, SAI');
})

servidor.get('/msg/ocupado/recado', (req,resp) => {
    resp.send('TO OCUPADO, SAI, Manda um zap pra eu :D');
})

// ------------------------------------------------------------------------> "CALCULADORA" Parametro Rota

servidor.get('/calc/somar/:n1/:n2', (req,resp) => {
    let n1 = Number(req.params.n1);
    let n2 = Number(req.params.n2);
    let soma = n1 + n2;
    resp.send(n1 + ' + ' + n2 + ' = ' + soma )
})

servidor.get('/calc/subtrair/:n1/:n2', (req,resp) => {
    let n1 = Number(req.params.n1);
    let n2 = Number(req.params.n2);
    let soma = n1 - n2;
    resp.send(n1 + ' - ' + n2 + ' = ' + soma )
})

servidor.get('/calc/multiplicar/:n1/:n2', (req,resp) => {
    let n1 = Number(req.params.n1);
    let n2 = Number(req.params.n2);
    let soma = n1 * n2;
    resp.send(n1 + ' * ' + n2 + ' = ' + soma )
})



//---------------------------------------------------------------------------> Parametro QUERY

servidor.get('/calc/somar2', (req,resp) => {
    let n1 = Number(req.query.n1);
    let n2 = Number(req.query.n2);
    let soma = n1 + n2;
    resp.send(n1 + ' + ' + n2 + ' = ' + soma )
})

servidor.get('/msg/ola', (req, resp) => {
    let pessoa = req.query.name ?? 'There';

    resp.send('Hello ' + pessoa + '!')
})

//----------------------------------------------------------------------------------> Parametro CORPO/OBJECT (Post)

servidor.post('/media', (req, resp) =>{
     let n1= req.body.nota1;
     let n2= req.body.nota2;
     let n3= req.body.nota3;

     let media = (n1+n2+n3)/3;

     resp.send('A média é: '+ media);
})

servidor.post('/dobros', (req,resp) => {
    let nums = req.body.numeros;

    let nums2 = []
    for (let i = 0; i < nums.length; i++) {
        nums2[i] = nums[i] * 2;
    }

    resp.send('Os dobros dos numeros sao: '+ nums2 );
})

//--------------------------------------------------------------------------------------> Parametros combinados

servidor.post('/loja/pedido', (req, resp) => {
    let total = req.body.total;
    let parcelas = req.body.parcelas;
    let cupom = req.query.cupom;

    if (parcelas > 1) {
        let juros = total * 0.5;
        total += juros;
    }

    if (cupom == 'QUERO100') {
        total -= 100;
    }

    resp.send('O total do pedido ficou em R$' + total);
})




servidor.listen(
    5001,
     () => console.log('------> API subiu lá na porta 5001 BORA BILL!!'));

