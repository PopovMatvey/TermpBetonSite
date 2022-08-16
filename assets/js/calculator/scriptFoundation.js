//Значения по умолчанию
$('#cost-material-foundation')[0].innerHTML = 0;
$('#cost-type-foundation')[0].innerHTML = 0;


//Переменные
const arrayMaterialFoundation = ['BRICK', 'POLIST_BET', 'WOOD'];
const arrayTypeFoundation = ['BLAND', 'SLAB'];
const arrayPrisematerial = [40, 30, 20]
let materialFoundation = '';
let typeFoundation = '';

/*Материал фундамента*/
/*Обработка переключателей*/

document.querySelector("#material-foundation-brick").onclick = function () {
    $('.choose-story-house-block__brick').animate({ opacity: 1 }, 500);
    $('.choose-story-house-block__polist').animate({ opacity: 0.6 }, 500);
    $('.choose-story-house-block__wooden').animate({ opacity: 0.6 }, 500);

    materialFoundation = arrayMaterialFoundation[0];
}

document.querySelector("#material-foundation-polist").onclick = function () {
    $('.choose-story-house-block__brick').animate({ opacity: 0.6 }, 500);
    $('.choose-story-house-block__polist').animate({ opacity: 1 }, 500);
    $('.choose-story-house-block__wooden').animate({ opacity: 0.6 }, 500);

    materialFoundation = arrayMaterialFoundation[1];
}

document.querySelector("#material-foundation-wooden").onclick = function () {
    $('.choose-story-house-block__brick').animate({ opacity: 0.6 }, 500);
    $('.choose-story-house-block__polist').animate({ opacity: 0.6 }, 500);
    $('.choose-story-house-block__wooden').animate({ opacity: 1 }, 500);

    materialFoundation = arrayMaterialFoundation[2];
}

/*Тип фундамента*/
/*Обработка переключателей*/

document.querySelector("#type-foundation_band").onclick = function () {
    $('.choose-type-foundation_band').animate({ opacity: 1 }, 500);
    $('.choose-type-foundation_slab ').animate({ opacity: 0.6 }, 500);

    typeFoundation = arrayTypeFoundation[0];
}

document.querySelector("#type-foundation_slab").onclick = function () {
    $('.choose-type-foundation_band').animate({ opacity: 0.6 }, 500);
    $('.choose-type-foundation_slab ').animate({ opacity: 1 }, 500);

    typeFoundation = arrayTypeFoundation[1];
}