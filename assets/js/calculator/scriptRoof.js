//Значения по умолчанию
$('#volume-roof')[0].innerHTML = 0;
$('#amount-roof')[0].innerHTML = 0;
$('#cost-roof')[0].innerHTML = 0;

/*Кровля*/
/*Обработка переключателей*/

document.querySelector("#type-roof-one-skat").onclick = function () {
    $('.choose-type-roof-one-skat').animate({ opacity: 1 }, 500);
    $('.choose-type-type-roof-twoo-skat').animate({ opacity: 0.6 }, 500);
    $('.choose-type-roof-in-bok').animate({ opacity: 0.6 }, 500);
}

document.querySelector("#type-roof-twoo-skat").onclick = function () {
    $('.choose-type-roof-one-skat').animate({ opacity: 0.6 }, 500);
    $('.choose-type-type-roof-twoo-skat').animate({ opacity: 1 }, 500);
    $('.choose-type-roof-in-bok').animate({ opacity: 0.6 }, 500);
}

document.querySelector("#type-roof-in-bok").onclick = function () {
    $('.choose-type-roof-one-skat').animate({ opacity: 0.6 }, 500);
    $('.choose-type-type-roof-twoo-skat').animate({ opacity: 0.6 }, 500);
    $('.choose-type-roof-in-bok').animate({ opacity: 1 }, 500);
}

/*Высота кровли*/

// Обработка нажатия клавиш для поля "Высота кровли"
$('#inputHieghtRoof').keydown(function () {
    let hieghtRoof = $("#inputHieghtRoof").val();

});

// Обработка события при изменении для поля "Высота кровли"
$('#inputHieghtRoof').change(function () {
    let hieghtRoof = $("#inputHieghtRoof").val();

});