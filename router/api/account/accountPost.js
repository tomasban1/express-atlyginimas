import { data } from '../../../data/accountsData.js';
import { firstNotAllowedSymbol, textAllowedSymbolValidation } from '../../../lib/helpers.js';
import { isName } from '../../../lib/validation.js';

export function acountPost(req, res) {
    console.log(req.body);

    if (typeof req.body !== 'object'
        || Array.isArray(req.body)
        || req.body === null) {
        return res.json({
            status: 'error',
            message: 'Wrong data type.',
        });
    }

    const name = req.body.name;
    const nameError = isName(name);
    if (nameError !== '') {
        return res.json({
            status: 'error',
            message: nameError,
        });
    }
    const date = req.body.date;
    // const dateError = isDate(date);
    // if (dateError !== '') {
    //     return res.json({
    //         status: 'error',
    //         message: dateError,
    //     });
    // }

    const rate = req.body.rate;
    // const rateError = isRate(rate);
    // if (rateError !== '') {
    //     return res.json({
    //         status: 'error',
    //         message: rateError,
    //     });
    // }

    data.push({
        ...req.body,
        salary: '---'
    });

    return res.json({
        status: 'success',
        message: 'Account succesfully created'
    });
}