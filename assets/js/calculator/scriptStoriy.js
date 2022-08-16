//Значения по умолчанию
$('#cost-storiy')[0].innerHTML = 250000
$('#volome-bearing-walls')[0].innerHTML = 0;
$('#cost-bearing-walls')[0].innerHTML = 0;
$('#amount-bearing-walls')[0].innerHTML = 0;

//Переменные
const arrayPriceStoriy = [200000, 250000];
const priceAtticStoriy = 150000;
materialFoundation = arrayMaterialFoundation[0];
typeFoundation = arrayTypeFoundation[0];


//Получить цену этажа
function getPriceStoriy(priceStoriy, priceAtticStoriy) {
    $('#cost-storiy')[0].innerHTML = Number(priceStoriy) + Number(priceAtticStoriy);
}

//Расчитать объём плитного фундамента
function calculationVolumeSlabFoundation(length, width, thikness) {
    return length * width * thikness;
}

//
function calculateValueBlocksForSimpleGeometry(materialFoundation, typeFoundation, firstStoriyLength, firstStoriyWidth,
    firstStoriyHieght, secondStoriyHieght) {
    let priceMaterial = 0;
    let shareMaterial = 0;
    let commmonVolume = 0;
    let commonCost = 0;
    let commonAmount = 0;
    let costFoundation = 0;
    let voluemeFoundation = 0;
    let amountBlocksFoundation = 0

    // console.log(materialFoundation, typeFoundation, $("#inputFirstStoriyLength").val(),
    // $("#inputsFirstStoriyWidth").val(), $("#inputsFirstStoriyHieght").val(), $("#inputsSecondStoriyHieght").val());

    console.log(materialFoundation, typeFoundation, firstStoriyLength, firstStoriyWidth,
        firstStoriyHieght, secondStoriyHieght);

    console.log(materialFoundation == arrayMaterialFoundation[0], materialFoundation == arrayMaterialFoundation[1], materialFoundation == arrayMaterialFoundation[2])

    console.log(typeFoundation == arrayTypeFoundation[0], typeFoundation == arrayTypeFoundation[1]);

    if (materialFoundation == arrayMaterialFoundation[0]) {
        priceMaterial = arrayPrisematerial[0];
        shareMaterial = 3;
    }

    if (materialFoundation == arrayMaterialFoundation[1]) {
        priceMaterial = arrayPrisematerial[1];
        shareMaterial = 5;
    }

    if (materialFoundation == arrayMaterialFoundation[2]) {
        priceMaterial = arrayPrisematerial[2];
        shareMaterial = 2;
    }

    if (typeFoundation == arrayTypeFoundation[0]) {



    }

    if (typeFoundation == arrayTypeFoundation[1]) {
        let thiknessFoundation = 2.5;

        voluemeFoundation = calculationVolumeSlabFoundation($("#inputFirstStoriyLength").val(), $("#inputsFirstStoriyWidth").val(), thiknessFoundation);
        amountBlocksFoundation = voluemeFoundation / shareMaterial;

        $('#main-bearing-walls-volume')[0].innerHTML = voluemeFoundation;
        $('#main-bearing-walls-amount')[0].innerHTML = amountBlocksFoundation;

    }

    if ($('#story-house-two')[0].checked) {

    }

    commmonVolume = voluemeFoundation;
    $('#main-bearing-walls-volume')[0].innerHTML = commmonVolume;

}

calculateValueBlocksForSimpleGeometry(materialFoundation, typeFoundation, $("#inputFirstStoriyLength").val(),
    $("#inputsFirstStoriyWidth").val(), $("#inputsFirstStoriyHieght").val(), $("#inputsSecondStoriyHieght").val());


/*Этажность дома*/
/*Обработка переключателей*/

document.querySelector("#story-house-one").onclick = function () {
    $('.choose-story-house-blocks_one-storey').animate({ opacity: 1 }, 500);
    $('.choose-story-house-blocks_two-storey').animate({ opacity: 0.6 }, 500);
    $('.second-storiy').slideUp(1000);

    if ($("#story-house-with_attic")[0].checked) {
        getPriceStoriy(arrayPriceStoriy[0], priceAtticStoriy)
    } else {
        getPriceStoriy(arrayPriceStoriy[0], -priceAtticStoriy)
    }
}

document.querySelector("#story-house-two").onclick = function () {
    $('.choose-story-house-blocks_two-storey').animate({ opacity: 1 }, 500);
    $('.choose-story-house-blocks_one-storey').animate({ opacity: 0.6 }, 500);
    $('.second-storiy').slideDown(1000);

    if ($("#story-house-with_attic")[0].checked) {
        getPriceStoriy(arrayPriceStoriy[1], priceAtticStoriy)
    } else {
        getPriceStoriy(arrayPriceStoriy[1], -priceAtticStoriy)
    }
}

/*Наличие мансарды*/
/*Обработка переключателей*/

document.querySelector("#story-house-with_attic").onclick = function () {
    if ($("#story-house-with_attic")[0].checked) {
        $('.choose-story-house-blocks_with_attic').animate({ opacity: 1 }, 500);

        if ($("#story-house-two")[0].checked) {
            getPriceStoriy(arrayPriceStoriy[1], priceAtticStoriy)
        } else {
            getPriceStoriy(arrayPriceStoriy[0], priceAtticStoriy)
        }
    } else {
        $('.choose-story-house-blocks_with_attic').animate({ opacity: 0.6 }, 500);

        if ($("#story-house-two")[0].checked) {
            getPriceStoriy(arrayPriceStoriy[1], -priceAtticStoriy)
        } else {
            getPriceStoriy(arrayPriceStoriy[0], -priceAtticStoriy)
        }

    }
}

$('.choose-story-material input').click(function () {
    calculateValueBlocksForSimpleGeometry(materialFoundation, typeFoundation, $("#inputFirstStoriyLength").val(),
        $("#inputsFirstStoriyWidth").val(), $("#inputsFirstStoriyHieght").val(), $("#inputsSecondStoriyHieght").val());
});


$('.choose-story-foundation-type input').click(function () {
    calculateValueBlocksForSimpleGeometry(materialFoundation, typeFoundation, $("#inputFirstStoriyLength").val(),
        $("#inputsFirstStoriyWidth").val(), $("#inputsFirstStoriyHieght").val(), $("#inputsSecondStoriyHieght").val());
});

/*Исходные параметры постройки (первый этаж)*/

// Обработка нажатия клавиш для поля "Длина для первого этажа"
$('#inputFirstStoriyLength').keydown(function () {
    let firstStoriyLength = $("#inputFirstStoriyLength").val();

});

// Обработка события при изменении для поля "Длина для первого этажа"
$('#inputFirstStoriyLength').change(function () {
    let firstStoriyLength = $("#inputFirstStoriyLength").val();

});

// Обработка нажатия клавиш для поля "Ширина для первого этажа"
$('#inputsFirstStoriyWidth').keydown(function () {
    let firstStoriyWidth = $("#inputsFirstStoriyWidth").val();

});

// Обработка события при изменении для поля "Ширина для первого этажа"
$('#inputsFirstStoriyWidth').change(function () {
    let firstStoriyWidth = $("#inputsFirstStoriyWidth").val();

});

// Обработка нажатия клавиш для поля "Высота для первого этажа"
$('#inputsFirstStoriyHieght').keydown(function () {
    let firstStoriyHieght = $("#inputsFirstStoriyHieght").val();

});

// Обработка события при изменении для поля "Высота для первого этажа"
$('#inputsFirstStoriyHieght').change(function () {
    let firstStoriyHieght = $("#inputsFirstStoriyHieght").val();

});

/*Исходные параметры постройки (второй этаж)*/

// Обработка нажатия клавиш для поля "Высота для второго этажа"
$('#inputsSecondStoriyHieght').keydown(function () {
    let secondStoriyHieght = $("#inputsSecondStoriyHieght").val();

});

// Обработка события при изменении для поля "Высота для второго этажа"
$('#inputsSecondStoriyHieght').change(function () {
    let secondStoriyHieght = $("#inputsSecondStoriyHieght").val();

});