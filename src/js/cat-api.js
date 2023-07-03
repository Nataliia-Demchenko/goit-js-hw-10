import { choseBreed } from "./index";
import { loaderEl } from "./index";
const KEY = 'live_kQvNxm59UrbDSRQB5oyaapFyjk21bMIlE7an9Q16mueZN8W8TZ3yrMy6d8rlN5Kx';
export function fetchBreeds() {
    return fetch(`https://api.thecatapi.com/v1/breeds?api_key=${KEY}`).then(resp => {
        if (!resp.ok) {
            throw new Error(resp.status);
        }
        return resp.json();
    }).catch(error => console.log(error));
};
export function getInformationForCat() {
    loaderEl.style.display = 'block';
    return fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${choseBreed}&api_key=${KEY}`).then(resp => {
        if (!resp.ok) {
            throw new Error(resp.status);
        }
        return resp.json();
    }).catch(error => console.log(error));
};