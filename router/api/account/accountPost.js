import { data } from '../../../data/accountsData.js';
import { isDate, isName, isRate } from '../../../lib/validation.js';

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

    const validation = {
        name: {
            func: isName,
            trans: 'vardas'
        },
        date: {
            func: isDate,
            trans: 'isidarbinimo data'
        },
        rate: {
            func: isRate,
            trans: 'ialandinis atlyginimas'
        },
    }

    let sizeErrorMessage = '';
    const keys = Object.keys(validation)
    for (let i = 0; i < keys; i++) {
        const key = keys[i];
        sizeErrorMessage += `${key} (${validation[key].trans})`
        if (keys.length > 1) {
            if (i === keys.length - 2) {
                sizeErrorMessage += ', '
            } else if (i < keys.length - 2) {
                sizeErrorMessage += ' ir'
            }
        }
    }
    // sizeErrorMessage = `name (vardas), date (isidarbinimo data) ir rate (valandinis atlyginimas)`;


    const requiredDataKeysCount = Object.keys(validation).length;
    if (Object.keys(req.body).length !== requiredDataKeysCount) {
        return res.json({
            status: 'error',
            message: sizeErrorMessage,
        });
    }

    for (const key in validation) {
        const value = req.body[key];
        const valueError = validation[key].func(value);
        if (valueError !== '') {
            return res.json({
                status: 'error',
                message: valueError,
            });
        }
    }

    data.push({
        ...req.body,
        salary: '---'
    });

    return res.json({
        status: 'success',
        message: 'Account succesfully created'
    });
}