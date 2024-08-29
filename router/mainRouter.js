import express from 'express';
import { pageHome } from '../pages/pageHome.js';
import { page404 } from '../pages/page404.js';
import { pageAbout } from '../pages/pageAbout.js';
import { pageAllAcc } from '../pages/pageViewAllAcc.js';
import { createAcc } from '../pages/createAcc.js';
import { routerApi } from './api/routerApi.js';

export const mainRouter = express.Router();

mainRouter.use('/api', routerApi);


mainRouter.get('/', (req, res) => {
    return res.send(pageHome());
});

mainRouter.get('/about', (req, res) => {
    return res.send(pageAbout());
});

mainRouter.get('/all-acounts', (req, res) => {
    return res.send(pageAllAcc());
});

mainRouter.get('/create-account', (req, res) => {
    return res.send(createAcc());
});

mainRouter.get('*', (req, res, next) => {
    return res.send(page404());
});