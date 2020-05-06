import pumpkinCreamInfo from './product-items.js';

const { tall, grande, venti, trenta } = pumpkinCreamInfo;

const selectForm = document.querySelector('#select-list__input');

selectForm.addEventListener('change', () => {
    switch (selectForm.value) {
        case 'Tall':
            for (const value in tall) {
                document.querySelector(`#${value}`).textContent = tall[value];
            }
            break;
        case 'Grande':
            for (const value in grande) {
                document.querySelector(`#${value}`).textContent = grande[value];
            }
            break;
        case 'Venti':
            for (const value in venti) {
                document.querySelector(`#${value}`).textContent = venti[value];
            }
            break;
        case 'Trenta':
            for (const value in trenta) {
                document.querySelector(`#${value}`).textContent = trenta[value];
            }
            break;
        default:
            console.log(selectForm.value);
    }
});
