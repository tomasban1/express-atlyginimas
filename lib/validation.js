import { firstNotAllowedSymbol, textAllowedSymbolValidation } from "./helpers.js";

/**
 * Teksto validavimo funkcija, kuri patikrina ar duotas tekstas yra "normalus/tikras" vardas.
 * @param {string} str Vardas
 * @returns Tuscias stringas - kai viskas ok, ir ne tuscias stringas - kai yra rasta klaida, jis kartu ir yra klaidos pranesimas.
 */
export function isName(str) {
    let errorMessage = '';
    const nameMinSize = 2;
    const nameMaxSize = 20;
    const nameAllowedAbc = 'AaĄąBbCcČčDdEeĘęĖėFfGgHhIiĮįYyJjKkLlMmNnOoPpRrSsŠšTtUuŲųŪūVv';

    if (typeof str !== 'string') {
        errorMessage = 'Name missing.';
    } else if (str.length < nameMinSize) {
        errorMessage = `Name is to short, has to be minimum ${nameMinSize} characters.`;
    } else if (str.length > nameMaxSize) {
        errorMessage = `Name is to long, max ${nameMaxSize} characters.`;
    } else if (!textAllowedSymbolValidation(str, nameAllowedAbc)) {
        errorMessage = `Symbomls that are not allowed were found "${firstNotAllowedSymbol(str, nameAllowedAbc)}"`
    } else if (str[0].toUpperCase() !== str[0]) {
        errorMessage = `Name has to start with uppercase.`
    }

    return errorMessage;
}

export function isDate() {
    let errorMessage = '';


    return errorMessage
}

export function isRate() {
    let errorMessage = '';


    return errorMessage
}

