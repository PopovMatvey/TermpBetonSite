


document.querySelector("#configuration-first").onclick = function () {
    $('.choose-configuration-first-house-blocks').animate({ opacity: 1 }, 500);
    $('.choose-configuration-second-house-blocks').animate({ opacity: 0.6 }, 500);
    $('.choose-configuration-third-house-blocks').animate({ opacity: 0.6 }, 500);
}

document.querySelector("#configuration-second").onclick = function () {
    $('.choose-configuration-first-house-blocks').animate({ opacity:  0.6 }, 500);
    $('.choose-configuration-second-house-blocks').animate({ opacity:1 }, 500);
    $('.choose-configuration-third-house-blocks').animate({ opacity: 0.6 }, 500);
}

document.querySelector("#configuration-third").onclick = function () {
    $('.choose-configuration-first-house-blocks').animate({ opacity:  0.6 }, 500);
    $('.choose-configuration-second-house-blocks').animate({ opacity: 0.6 }, 500);
    $('.choose-configuration-third-house-blocks').animate({ opacity: 1 }, 500);
}
