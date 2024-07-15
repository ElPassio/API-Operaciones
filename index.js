const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) =>{
    res.send('Node JS api');
});

app.get('/api/resta', (req, res) =>{
    //requiere 2 numeros desde la direccion
    const num1 = parseInt(req.query.num1);
    const num2 = parseInt(req.query.num2);

    //verifica que los parametros sean numeros
    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ error: 'Los parámetros deben ser números' });
    }
    const resta = num1 - num2;

    // Devolver el resultado como JSON
    res.json({ resultado: resta });
});

app.get('/api/suma', (req, res) =>{
    //requiere 2 numeros desde la direccion
    const num1 = parseInt(req.query.num1);
    const num2 = parseInt(req.query.num2);

    //verifica que los parametros sean numeros
    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ error: 'Los parámetros deben ser números' });
    }
    const suma = num1 + num2;

    // Devolver el resultado como JSON
    res.json({ resultado: suma });
});

app.get('/api/multiplicacion', (req, res) =>{
    //requiere 2 numeros desde la direccion
    const num1 = parseInt(req.query.num1);
    const num2 = parseInt(req.query.num2);

    //verifica que los parametros sean numeros
    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ error: 'Los parámetros deben ser números' });
    }
    const multi = num1 * num2;

    // Devolver el resultado como JSON
    res.json({ resultado: multi });
});

app.get('/api/division', (req, res) =>{
    //requiere 2 numeros desde la direccion
    const num1 = parseInt(req.query.num1);
    const num2 = parseInt(req.query.num2);

    //verifica que los parametros sean numeros
    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ error: 'Los parámetros deben ser números' });
    }
    if(num2 === 0){
        return res.status(400).json({ error: 'No se puede dividir por cero' });
    }
    const div = num1 / num2;
    
    // Devolver el resultado como JSON
    res.json({ resultado: div });
});

app.get('/api/potencia', (req, res) =>{
    //requiere 2 numeros desde la direccion
    const num1 = parseInt(req.query.num1);
    const num2 = parseInt(req.query.num2);

    //verifica que los parametros sean numeros
    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ error: 'Los parámetros deben ser números' });
    }
    const potencia = Math.pow(num1, num2);

    // Devolver el resultado como JSON
    res.json({ resultado: potencia });
});

const port = process.env.port || 10000;
app.listen(port, () => console.log(`escuchando en puerto ${port}`));
