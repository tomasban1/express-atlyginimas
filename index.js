import express from 'express';
import { mainRouter } from './router/mainRouter.js';

const app = express();
const port = 5018;

app.use(express.json({
    type: 'application/json',
}));
app.use(express.urlencoded({ extended: true }));

app.use(express.static('static'));

app.use('/', mainRouter)


app.listen(port, () => {
    console.log(`Serveris pasileido localhost:${port}`);
});

