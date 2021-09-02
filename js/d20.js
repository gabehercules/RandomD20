

// console.log(randomD20);


const d20Result = document.querySelector('#d20_dice').addEventListener('click', generateD20);
const resetBtn = document.querySelector('#reset-btn').addEventListener('click', resetGenerator);
let d20Output = document.querySelector('#d20_total');

const addChecked = document.querySelector('#add');
const subChecked = document.querySelector('#sub');

const initialResult = document.querySelector('#d20_result');
const viewModifier = document.querySelector('#modifier-type');
const modifierValue = document.querySelector('#d20_add-modifier');

// attrValue = 1;
// console.log(attrValue);




function generateD20() {

    //pega o valor do modificador inseridono input
    let attrValue = document.querySelector('.add-modifier').value;

    //função para dado D20 de rpg xD
    let randomD20 = Math.round(Math.random() * (20 - 1) + 1);
    initialResult.innerText = randomD20;

    console.log(randomD20);

    //else if se add ou o sub esta checado
    if (addChecked.checked === true) {
        d20Output.innerText = randomD20 + Number(attrValue);
        viewModifier.innerText = '+';
        modifierValue.innerText = attrValue;
    } else if (subChecked.checked === true) {
        d20Output.innerText = randomD20 - Number(attrValue);
        viewModifier.innerText = '-';
        modifierValue.innerText = attrValue;
    } else {
        return console.log('error')
    }

}

let attrValue = document.querySelector('.add-modifier');


function resetGenerator() {
    initialResult.innerText = "";
    viewModifier.innerText = "";
    modifierValue.innerText = "";
    d20Output.innerText = "";
    attrValue.value = Number(NaN);

}