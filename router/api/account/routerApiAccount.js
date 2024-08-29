import express from 'express';
import { acountPost } from './accountPost.js';
import { accountGet } from './accountGet.js';
import { accountPut } from './accountPut.js';
import { accountDelete } from './accountDelete.js';

export const routerApiAccount = express
    .Router()
    .post('/', acountPost)
    .get('/', accountGet)
    .put('/', accountPut)
    .delete('/', accountDelete);



