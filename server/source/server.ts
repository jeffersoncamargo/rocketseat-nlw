import express, { response } from 'express';

const app = express();

app.get('/users', (req, res) => {
    console.log('Listagem de usuários');

    res.json([
        {
            name: 'Jefferson Camargo'
        },
        {
            name: 'Carolina Loureiro'
        },
        {
            name: 'Sofia Loureiro Camargo'
        }
    ]);
});

app.listen(3333);