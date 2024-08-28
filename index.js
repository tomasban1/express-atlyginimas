import express from 'express';
import { pageHome } from './pages/pageHome.js';
import { page404 } from './pages/page404.js';
import { pageAbout } from './pages/pageAbout.js';
import { pageAllAcc } from './pages/pageViewAllAcc.js';
import { createAcc } from './pages/createAcc.js';
import { data } from './data/accountsData.js';

const app = express();
const port = 5018;

app.use(express.json({
    type: 'application/json',
}));
app.use(express.urlencoded({ extended: true }));

app.use(express.static('static'));


app.post('/api/account', (req, res) => {
    console.log(req.body);

    data.push({
        ...req.body,
        salary: '---'
    });

    return res.json({
        status: 'success',
        message: 'Account succesfully created'
    });
});


app.get('/', (req, res) => {
    return res.send(pageHome());
});

app.get('/about', (req, res) => {
    return res.send(pageAbout());
});

app.get('/all-acounts', (req, res) => {
    return res.send(pageAllAcc());
});

app.get('/create-account', (req, res) => {
    return res.send(createAcc());
});

app.get('*', (req, res, next) => {
    return res.send(page404());
});


app.listen(port, () => {
    console.log(`Serveris pasileido localhost:${port}`);
});

