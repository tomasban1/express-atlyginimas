import express from 'express';
import { data } from '../../data/accountsData.js';
import { routerApiAccount } from './account/routerApiAccount.js';

export const routerApi = express.Router();

routerApi.use('/account', routerApiAccount);