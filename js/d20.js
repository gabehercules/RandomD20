

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

    //else if se add ou o sub esta checado - corrigido

    if (addChecked.checked === true) {
        const d20Final = randomD20 + Number(attrValue);
        d20Output.innerText = d20Final;
        viewModifier.innerText = '+';
        modifierValue.innerText = attrValue;
        if (d20Final >= 20) {
            d20Output.classList.add('critical-role');
        } else {
            d20Output.classList.remove('critical-role');
        }
    }
    else {
        const d20Final = randomD20 - Number(attrValue);
        d20Output.innerText = d20Final;
        viewModifier.innerText = '-';
        modifierValue.innerText = attrValue;

        if (d20Final <= 1) {
            d20Output.classList.add('critical-fail');
        } else {
            d20Output.classList.remove('critical-fail');
        }
    }

}

let attrValue = document.querySelector('.add-modifier');



function resetGenerator() {
    initialResult.innerText = "";
    viewModifier.innerText = "";
    modifierValue.innerText = "";
    d20Output.innerText = "";
    attrValue.value = '';
    d20Output.classList.remove('critical-role');
    d20Output.classList.remove('critical-fail');

}