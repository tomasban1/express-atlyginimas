
/**
 * Funkcija kuri patikrina ar duotas tekstas yra sudarytas tik is leistinu simboliu.
 * @param {string} str Analizuojamas tekstas.
 * @param {string} abc Leistinu simboliu abecele.
 * @returns {boolean}
 
 */
export function textAllowedSymbolValidation(str, abc) {
    return str.split('').map(s => abc.includes(s)).every(x => x === true);
}

/**
 * Duotame tekste pagal pateikta **leistinu** simboliu abecele, randamas ir grazinamas pirmasis neleistinas simbolis.
 * @param {string} str Analizuojamas tekstas
 * @param {string} abc Leistinu simboliu abecele
 * @returns {string} Panaudotas neleistinas simbolis (pirmasis kuri pavyko rasti) arba tuscias stringas jei neleistinu simboliu nerasta
 * @example
 * ```js
 * firstNotAllowedSymbol('labas', 'abc');  // 'l
 * ```
 * ```js
 * firstNotAllowedSymbol('labas', 'abcl');  // 's'
 * ```
 * ```js
 * firstNotAllowedSymbol('labas', 'labas');  // ''
 * ```
 */
export function firstNotAllowedSymbol(str, abc) {
    return str.split('').filter(s => !abc.includes(s))[0] ?? '';
}

export function workDaysCount(year, month) {
    let workingDays = 0;

    for (let i = 1; i <= 31; i++) {
        const m = month < 10 ? '0' + month : month;
        const d = i < 10 ? '0' + i : i;
        const dateStr = `${year}-${m}-${d}`;
        const obj = new Date(dateStr);

        if (month === (obj.getMonth() + 1) && obj.getDay() >= 1 && obj.getDay() <= 5) {
            workingDays++;
        }
    }
    return workingDays;
}