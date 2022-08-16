//Значения по умолчанию
$('#amount-door')[0].innerHTML = 0;
$('#cost-door')[0].innerHTML = 0;

const doorSizes = document.querySelector('.door-sizes');

//Создание строки размеров двери
function createRowDoorSizes() {
    const rowWindowsSizes = document.createElement('div');

    rowWindowsSizes.classList.add('my-xl-5');
    rowWindowsSizes.classList.add('my-0');
    rowWindowsSizes.classList.add('radio-button-container');
    rowWindowsSizes.classList.add('my-0');
    rowWindowsSizes.classList.add('d-xl-flex');
    rowWindowsSizes.classList.add('d-block');
    rowWindowsSizes.classList.add('justify-content-around');

    for (let i = 0; i < 3; i++) {
        amountWidowSizeElement++
        createDoorSize(rowWindowsSizes, amountWidowSizeElement);
    }

    doorSizes.appendChild(rowWindowsSizes);
}

//Создание размера двери
function createDoorSize(rowWindowsSizes, numberElement) {
    const windowizeElement = document.createElement('div');

    windowizeElement.classList.add('sizeYousefs-' + numberElement + '-door');
    mainClass = '.sizeYousefs-' + numberElement + '-door';
    windowizeElement.classList.add('choose-checkbox');
    windowizeElement.classList.add('mul_x');
    windowizeElement.classList.add('border');
    windowizeElement.classList.add('border-dark');
    windowizeElement.classList.add('form-check');
    windowizeElement.classList.add('form-switch');
    windowizeElement.classList.add('d-flex');
    windowizeElement.classList.add('justify-content-between');
    windowizeElement.classList.add('align-items-center');
    windowizeElement.classList.add('my-xl-0');
    windowizeElement.classList.add('mx-xl-0');
    windowizeElement.classList.add('my-4');
    windowizeElement.classList.add('mx-auto');

    createInnerDoorElements(windowizeElement, numberElement, mainClass);

    rowWindowsSizes.appendChild(windowizeElement);
}


// Создание внутренних элементов размера переключателя двери
function createInnerDoorElements(windowizeElement, numberElement) {
    createCheckboxDoorSize(windowizeElement, numberElement, mainClass);
    createInputWidthDoor(windowizeElement, numberElement);
    createSpanChart(windowizeElement, numberElement);
    createInputHieghtDoor(windowizeElement, numberElement);
    createInputAmountDoor(windowizeElement, numberElement);
}

function createClickEventDoor(element, id, mainClass) {
    element.addEventListener('click', function () {
        if ($(id)[0].checked) {
            $(mainClass).animate({ opacity: 1 }, 500);
        } else {
            $(mainClass).animate({ opacity: 0.6 }, 500);
        }
    });
}

// Создание переключателя для размера двери
function createCheckboxDoorSize(windowizeElement, numberElement, mainClass) {
    const checkBoxWindowSize = document.createElement('input');
    let idElement = '';

    checkBoxWindowSize.classList.add('form-check-input');
    checkBoxWindowSize.classList.add('mx-0');
    checkBoxWindowSize.id = "input-youselfs-size-" + numberElement + "-door";
    checkBoxWindowSize.type = "checkbox";
    idElement = "#" + checkBoxWindowSize.id;

    createClickEventDoor(checkBoxWindowSize, idElement, mainClass);

    windowizeElement.appendChild(checkBoxWindowSize);
}

function createInputWidthDoorClickEvent(element, id) {
    element.addEventListener('keydown', function () {
        let widthDoor = $(id).val();

    });
    
    element.addEventListener('change', function () {
        let widthDoor = $(id).val();
        
    });
}

// Создание поля ввода ширина для двери
function createInputWidthDoor(windowizeElement, numberElement) {
    const inputWidthDoor = document.createElement('input');

    inputWidthDoor.type = "number";
    inputWidthDoor.min = 0;
    inputWidthDoor.value = 3;
    inputWidthDoor.max = 10;
    inputWidthDoor.classList.add("input-size");
    inputWidthDoor.classList.add("border");
    inputWidthDoor.classList.add("border-dark");
    inputWidthDoor.classList.add("text-center");
    inputWidthDoor.title = "Ширина двери"
    inputWidthDoor.id = 'sizeYousefs-door-width-' + numberElement;
    idElement = "#" + inputWidthDoor.id;

    createInputWidthDoorClickEvent(inputWidthDoor, idElement);

    windowizeElement.appendChild(inputWidthDoor);
}

function createInputHeightDoorClickEvent(element, id) {
    element.addEventListener('keydown', function () {
        let heightDoor = $(id).val();

    });
    
    element.addEventListener('change', function () {
        let heightDoor = $(id).val();
        
    });
}

// Создание поля ввода высоты для двери
function createInputHieghtDoor(windowizeElement, numberElement) {
    const inputHieghtWindow = document.createElement('input');

    inputHieghtWindow.type = "number";
    inputHieghtWindow.min = 0;
    inputHieghtWindow.value = 3;
    inputHieghtWindow.max = 10;
    inputHieghtWindow.classList.add("input-size");
    inputHieghtWindow.classList.add("border");
    inputHieghtWindow.classList.add("border-dark");
    inputHieghtWindow.classList.add("text-center");
    inputHieghtWindow.title = "Высота двери"
    inputHieghtWindow.id = 'sizeYousefs-door-height-' + numberElement;
    idElement = "#" + inputHieghtWindow.id;

    createInputHeightDoorClickEvent(inputHieghtWindow, idElement);

    windowizeElement.appendChild(inputHieghtWindow);
}

// Создание поля ввода количества для размера двери
function createInputAmountDoor(windowizeElement, numberElement) {
    const inputAmountWindow = document.createElement('input');

    inputAmountWindow.type = "number";
    inputAmountWindow.min = 0;
    inputAmountWindow.value = 3;
    inputAmountWindow.max = 10;
    inputAmountWindow.classList.add("amount-input");
    inputAmountWindow.classList.add("my-2");
    inputAmountWindow.classList.add("col-5");
    inputAmountWindow.classList.add("border");
    inputAmountWindow.classList.add("border-dark");
    inputAmountWindow.classList.add("text-center");
    inputAmountWindow.title = "Количество дверей"
    inputAmountWindow.id = "inputAmountWindowsYouselfSizes-" + numberElement;

    windowizeElement.appendChild(inputAmountWindow);
}







/*Двери*/
/*Обработка переключателей*/

document.querySelector("#input-size_1_on_1i2-door").onclick = function () {
    if ($("#input-size_1_on_1i2-door")[0].checked) {
        $('.sizeOneOnOneAndTwoDoor').animate({ opacity: 1 }, 500);
    } else {
        $('.sizeOneOnOneAndTwoDoor').animate({ opacity: 0.6 }, 500);
    }
}

document.querySelector("#input-size_1_on_2i2-door").onclick = function () {
    if ($("#input-size_1_on_2i2-door")[0].checked) {
        $('.sizeOneOnTwoAndTwoDoor').animate({ opacity: 1 }, 500);
    } else {
        $('.sizeOneOnTwoAndTwoDoor').animate({ opacity: 0.6 }, 500);
    }
}

document.querySelector("#input-size_1_on_0i2-door").onclick = function () {
    if ($("#input-size_1_on_0i2-door")[0].checked) {
        $('.sizeOneOnZeroAndTwoDoor').animate({ opacity: 1 }, 500);
    } else {
        $('.sizeOneOnZeroAndTwoDoor').animate({ opacity: 0.6 }, 500);
    }
}

document.querySelector("#input-size_3_on_5i2-door").onclick = function () {
    if ($("#input-size_3_on_5i2-door")[0].checked) {
        $('.sizeTreeOnFiveAndTwoDoor').animate({ opacity: 1 }, 500);
    } else {
        $('.sizeTreeOnFiveAndTwoDoor').animate({ opacity: 0.6 }, 500);
    }
}

document.querySelector("#input-size_2_on_7i2-door").onclick = function () {
    if ($("#input-size_2_on_7i2-door")[0].checked) {
        $('.sizeTwoOnSevenAndTwoDoor').animate({ opacity: 1 }, 500);
    } else {
        $('.sizeTwoOnSevenAndTwoDoor').animate({ opacity: 0.6 }, 500);
    }
}

document.querySelector("#input-youselfs-size-1-door").onclick = function () {
    if ($("#input-youselfs-size-1-door")[0].checked) {
        $('.youselfs-size-1-door').animate({ opacity: 1 }, 500);
    } else {
        $('.youselfs-size-1-door').animate({ opacity: 0.6 }, 500);
    }
}

// Обработка кнопок

$("#addmoreeDoors").click(function () {
    createRowDoorSizes();
});

// Поля ввода колличества дверей

$('#inputAmountDoorsOneOnOneAndTwo').keydown(function () {
    let amountDoorsOneOnOneAndTwo = $("#inputAmountDoorsOneOnOneAndTwo").val();

});

$('#inputAmountDoorsOneOnOneAndTwo').change(function () {
    let amountDoorsOneOnOneAndTwo = $("#inputAmountDoorsOneOnOneAndTwo").val();

});


$('#inputAmountDoorsOneOnTwoAndTwo').keydown(function () {
    let amountDoorsOneOnTwoAndTwo = $("#inputAmountDoorsOneOnTwoAndTwo").val();

});

$('#inputAmountDoorsOneOnTwoAndTwo').change(function () {
    let amountDoorsOneOnTwoAndTwo = $("#inputAmountDoorsOneOnTwoAndTwo").val();

});

$('#inputAmountDoorsOneOnZeroAndTwo').keydown(function () {
    let amountDoorsOneOnZeroAndTwo = $("#inputAmountDoorsOneOnZeroAndTwo").val();

});

$('#inputAmountDoorsOneOnZeroAndTwo').change(function () {
    let amountDoorsOneOnZeroAndTwo = $("#inputAmountDoorsOneOnZeroAndTwo").val();

});

$('#inputAmountDoorsTreeOnFiveAndTwo').keydown(function () {
    let amountDoorsTreeOnFiveAndTwo = $("#inputAmountDoorsTreeOnFiveAndTwo").val();

});

$('#inputAmountDoorsTreeOnFiveAndTwo').change(function () {
    let amountDoorsTreeOnFiveAndTwo = $("#inputAmountDoorsTreeOnFiveAndTwo").val();

});

$('#inputAmountDoorsTwoOnSevenoAndTwo').keydown(function () {
    let amountDoorsTwoOnSevenoAndTwo = $("#inputAmountDoorsTwoOnSevenoAndTwo").val();

});

$('#inputAmountDoorsTwoOnSevenoAndTwo').change(function () {
    let amountDoorsTwoOnSevenoAndTwo = $("#inputAmountDoorsTwoOnSevenoAndTwo").val();

});

$('#inputAmountDoorsYouselsSizes-1').keydown(function () {
    let amountDoorsTreeOnFiveAndTwo = $("#inputAmountDoorsYouselsSizes-1").val();

});

$('#inputAmountDoorsYouselsSizes-1').change(function () {
    let amountDoorsTreeOnFiveAndTwo = $("#inputAmountDoorsYouselsSizes-1").val();

});

//Обработка поля ввода ширины окна

$('#sizeYousefs-door-width-1').keydown(function () {
    let widthWindow = $("#sizeYousefs-door-width-1").val();

    
});

$('#sizeYousefs-door-width-1').change(function () {
    let widthWindow = $("#sizeYousefs-door-width-1").val();

    
});

//Обработка поля ввода высоты окна

$('#sizeYousefs-door-height-1').keydown(function () {
    let heightWindow = $("#sizeYousefs-door-height-1").val();

    
});

$('#sizeYousefs-door-height-1').change(function () {
    let heightWindow = $("#sizeYousefs-door-height-1").val();

    
});

