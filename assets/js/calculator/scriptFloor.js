// Значения по умолчанию
$('#volume-floor')[0].innerHTML = 0;
$('#amount-floor')[0].innerHTML = 0;
$('#cost-floor')[0].innerHTML = 0;


/*Перекрытия*/
/*Обработка переключателей*/

document.querySelector("#perekr-wood").onclick = function () {
    $('.choose-perekr-wood').animate({ opacity: 1 }, 500);
    $('.choose-perekr-jb').animate({ opacity: 0.6 }, 500);
    $('.choose-perekr-lignt').animate({ opacity: 0.6 }, 500);
    $('.choose-perekr-blocks__jb').slideUp(1000);
}

document.querySelector("#perekr-jb").onclick = function () {
    $('.choose-perekr-wood').animate({ opacity: 0.6 }, 500);
    $('.choose-perekr-jb').animate({ opacity: 1 }, 500);
    $('.choose-perekr-lignt').animate({ opacity: 0.6 }, 500);
    $('.choose-perekr-blocks__jb').slideDown(1000);
}

document.querySelector("#perekr-lignt").onclick = function () {
    $('.choose-perekr-wood').animate({ opacity: 0.6 }, 500);
    $('.choose-perekr-jb').animate({ opacity: 0.6 }, 500);
    $('.choose-perekr-lignt').animate({ opacity: 1 }, 500);
    $('.choose-perekr-blocks__jb').slideUp(1000);
}

document.querySelector("#jb-perekr-slab").onclick = function () {
    $('.choose-jb-perekr-slab').animate({ opacity: 1 }, 500);
    $('.choose-jb-perekr-monol').animate({ opacity: 0.6 }, 500);
}

document.querySelector("#jb-perekr-monol").onclick = function () {
    $('.choose-jb-perekr-slab').animate({ opacity: 0.6 }, 500);
    $('.choose-jb-perekr-monol').animate({ opacity: 1 }, 500);
}