//Значения по умолчанию
$('#volume-borders')[0].innerHTML = 0;
$('#amount-borders')[0].innerHTML = 0;
$('#cost-borders')[0].innerHTML = 0;


/*Перегородки*/
/*Обработка переключателей*/
/*Материал перегородок*/

document.querySelector("#material-border_brick").onclick = function () {
    $('.choose-material-border_brick').animate({ opacity: 1 }, 500);
    $('.choose-material-border_blocks').animate({ opacity: 0.6 }, 500);
    $('.choose-material-border_gips').animate({ opacity: 0.6 }, 500);
}

document.querySelector("#material-border_blocks").onclick = function () {
    $('.choose-material-border_brick').animate({ opacity: 0.6 }, 500);
    $('.choose-material-border_blocks').animate({ opacity: 1 }, 500);
    $('.choose-material-border_gips').animate({ opacity: 0.6 }, 500);
}

document.querySelector("#material-border_gips").onclick = function () {
    $('.choose-material-border_brick').animate({ opacity: 0.6 }, 500);
    $('.choose-material-border_blocks').animate({ opacity: 0.6 }, 500);
    $('.choose-material-border_gips').animate({ opacity: 1 }, 500);
}

/*Длина перегородок*/

// Обработка нажатия клавиш для поля "Длина перегородок"
$('#inputLengthBorders').keydown(function () {
    let lengthBorders = $("#inputLengthBorders").val();

});

// Обработка события при изменении для поля "Длина перегородок"
$('#inputLengthBorders').change(function () {
    let lengthBorders = $("#inputLengthBorders").val();

});