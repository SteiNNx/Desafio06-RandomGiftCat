export const BASE_URL_API = 'https://cataas.com/';
export const BUILD_GIFT_BY_PARAMS = (titulo, filtro, color, tamaño) => `cat/gif/says/${titulo}?filter=${filtro}&color=${color}&size=${tamaño}&type=or`;

/**
 * 
 * @param {string} titulo 
 * @param {string} filtro 
 * @param {string} color 
 * @param {string} tamaño 
 * @returns 
 */
export const getGiftByParamas = async (titulo, filtro, color, tamaño) => {
    return await fetch(`${BASE_URL_API}${BUILD_GIFT_BY_PARAMS(titulo, filtro, color, tamaño)}`)
        .then(response => {
            console.log(response.url);
            return response.url;
        })
        .catch(error => {
            console.error({ error });
        })
}
