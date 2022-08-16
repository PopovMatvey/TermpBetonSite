const arrayCostElements = ['#cost-storiy', '#cost-bearing-walls', '#cost-material-foundation',
    '#cost-type-foundation', '#cost-borders', '#cost-windows',
    '#cost-door', '#cost-floor', '#cost-roof'];


function calculateCommonCost(array) {
    let commonCost = 0;

    for (let i = 0; i < array.length; i++) {
        commonCost = commonCost + Number($(array[i])[0].innerHTML);
    }

    return commonCost;
}

// Ожидание прогрузки страницы
$(document).ready(function () {

    /*Значения по умолчанию*/
    //Несущие стены
    $('#main-bearing-walls-amount')[0].innerHTML = 0;
    $('#main-bearing-walls-volume')[0].innerHTML = 0;

    //Перекрытия 
    $('#main-floor-amount')[0].innerHTML = 0;
    $('#main-floor-square')[0].innerHTML = 0;

    //Перегородки
    $('#main-border-amount')[0].innerHTML = 0;
    $('#main-border-square')[0].innerHTML = 0;

    //Кровля
    $('#main-roof-amount')[0].innerHTML = 0;
    $('#main-roof-square')[0].innerHTML = 0;

    //Окна
    $('#main-amount-window')[0].innerHTML = 0;

    //Двери
    $('#main-amount-door')[0].innerHTML = 0;

    //Общая стоимость
    $('#main-common-cost')[0].innerHTML = calculateCommonCost(arrayCostElements);

    //Пересчёт всего при изменении преключателей
    $('.choose-field input').click(function () {
        $('#main-common-cost')[0].innerHTML = calculateCommonCost(arrayCostElements);

    });

    // #cost-storiy    #cost-bearing-walls
    // $('#cost-material-foundation')[0].innerHTML = 0;
    // $('#cost-type-foundation')[0].innerHTML = 0;
    // $('#cost-borders')[0].innerHTML = 0;
    // $('#cost-windows')[0].innerHTML = 0;
    // $('#cost-door')[0].innerHTML = 0;
    // $('#cost-floor')[0].innerHTML = 0;
    // $('#cost-roof')[0].innerHTML = 0;


});


