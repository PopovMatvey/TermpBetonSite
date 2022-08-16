//Значения по умолчанию
$('#amount-windows')[0].innerHTML = 0;
$('#cost-windows')[0].innerHTML = 0;


/*Окна*/

//Элементы HTML
const windowSizes = document.querySelector('.window-sizes');


//Переменные
let amountWidowSizeElement = 1;

//Создание строки размеров окон
function createRowWindowsSizes() {
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
        createWindowSize(rowWindowsSizes, amountWidowSizeElement);
    }

    windowSizes.appendChild(rowWindowsSizes);
}

//Создание размера окна
function createWindowSize(rowWindowsSizes, numberElement) {
    const windowizeElement = document.createElement('div');

    windowizeElement.classList.add('sizeYousefs-' + numberElement + '-window');
    mainClass = '.sizeYousefs-' + numberElement + '-window';
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

    createInnerElements(windowizeElement, numberElement, mainClass);

    rowWindowsSizes.appendChild(windowizeElement);
}


// Создание внутренних элементов размера переключателя окна
function createInnerElements(windowizeElement, numberElement) {
    createCheckboxWindowSize(windowizeElement, numberElement, mainClass);
    createInputWidthWindow(windowizeElement, numberElement);
    createSpanChart(windowizeElement, numberElement);
    createInputHieghtWindow(windowizeElement, numberElement);
    createInputAmountWindow(windowizeElement, numberElement);
}

function createCheckboxWindowSizeClickEvent(element, id, mainClass) {
    element.addEventListener('click', function () {
        if ($(id)[0].checked) {
            $(mainClass).animate({ opacity: 1 }, 500);
        } else {
            $(mainClass).animate({ opacity: 0.6 }, 500);
        }
    });
}

// Создание переключателя для размера окна
function createCheckboxWindowSize(windowizeElement, numberElement, mainClass) {
    const checkBoxWindowSize = document.createElement('input');
    let idElement = '';

    checkBoxWindowSize.classList.add('form-check-input');
    checkBoxWindowSize.classList.add('mx-0');
    checkBoxWindowSize.id = "input-youselfs-size-" + numberElement + "-window";
    checkBoxWindowSize.type = "checkbox";
    idElement = "#" + checkBoxWindowSize.id;

    createCheckboxWindowSizeClickEvent(checkBoxWindowSize, idElement, mainClass);

    windowizeElement.appendChild(checkBoxWindowSize);
}

function createInputWidthWindowClickEvent(element, id) {
    element.addEventListener('keydown', function () {
        let widthWindow = $(id).val();

    });

    element.addEventListener('change', function () {
        let widthWindow = $(id).val();
    });
}

// Создание поля ввода ширина для окна
function createInputWidthWindow(windowizeElement, numberElement) {
    const inputWidthWindow = document.createElement('input');
    let idElement = '';

    inputWidthWindow.type = "number";
    inputWidthWindow.min = 0;
    inputWidthWindow.value = 3;
    inputWidthWindow.max = 10;
    inputWidthWindow.classList.add("input-size");
    inputWidthWindow.classList.add("border");
    inputWidthWindow.classList.add("border-dark");
    inputWidthWindow.classList.add("text-center");
    inputWidthWindow.title = "Ширина окна"
    inputWidthWindow.id = 'sizeYousefs-window-width-' + numberElement;
    idElement = "#" + inputWidthWindow.id;

    createInputWidthWindowClickEvent(inputWidthWindow, idElement);

    windowizeElement.appendChild(inputWidthWindow);
}

// Создание символа Х
function createSpanChart(windowizeElement) {
    const spanChart = document.createElement('span');

    spanChart.innerHTML = "X";

    windowizeElement.appendChild(spanChart);
}

function createInputHeightWindowClickEvent(element, id) {
    element.addEventListener('keydown', function () {
        let heightWindow = $(id).val();

    });

    element.addEventListener('change', function () {
        let heightWindow = $(id).val();

    });
}

// Создание поля ввода высоты для окна
function createInputHieghtWindow(windowizeElement, numberElement) {
    const inputHeightWindow = document.createElement('input');
    let idElement = '';

    inputHeightWindow.type = "number";
    inputHeightWindow.min = 0;
    inputHeightWindow.value = 3;
    inputHeightWindow.max = 10;
    inputHeightWindow.classList.add("input-size");
    inputHeightWindow.classList.add("border");
    inputHeightWindow.classList.add("border-dark");
    inputHeightWindow.classList.add("text-center");
    inputHeightWindow.title = "Высота окна"
    inputHeightWindow.id = 'sizeYousefs-window-height-' + numberElement;
    idElement = "#" + inputHeightWindow.id;

    createInputHeightWindowClickEvent(inputHeightWindow, idElement);

    windowizeElement.appendChild(inputHeightWindow);
}

function createInputAmountWindowClickEvent(element, id) {
    element.addEventListener('keydown', function () {
        let amountWindow = $(id).val();

    });

    element.addEventListener('change', function () {
        let amountWindow = $(id).val();

    });
}

// Создание поля ввода количества для размера окна
function createInputAmountWindow(windowizeElement, numberElement) {
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
    inputAmountWindow.title = "Количество окон"
    inputAmountWindow.id = "inputAmountWindowsYouselfSizes-" + numberElement;

    idElement = "#" + inputAmountWindow.id;

    createInputAmountWindowClickEvent(inputAmountWindow, idElement);


    windowizeElement.appendChild(inputAmountWindow);
}


/*Обработка переключателей*/

document.querySelector("#input-size_1_on_1i2-window").onclick = function () {
    if ($("#input-size_1_on_1i2-window")[0].checked) {
        $('.sizeOneOnOneAndTwoWindow').animate({ opacity: 1 }, 500);
    } else {
        $('.sizeOneOnOneAndTwoWindow').animate({ opacity: 0.6 }, 500);
    }
}

document.querySelector("#input-size_1_on_2i2-window").onclick = function () {
    if ($("#input-size_1_on_2i2-window")[0].checked) {
        $('.sizeOneOnTwoAndTwoWindow').animate({ opacity: 1 }, 500);
    } else {
        $('.sizeOneOnTwoAndTwoWindow').animate({ opacity: 0.6 }, 500);
    }
}

document.querySelector("#input-size_1_on_0i2-window").onclick = function () {
    if ($("#input-size_1_on_0i2-window")[0].checked) {
        $('.sizeOneOnZeroAndTwoWindow').animate({ opacity: 1 }, 500);
    } else {
        $('.sizeOneOnZeroAndTwoWindow').animate({ opacity: 0.6 }, 500);
    }
}

document.querySelector("#input-size_3_on_5i2-window").onclick = function () {
    if ($("#input-size_3_on_5i2-window")[0].checked) {
        $('.sizeTreeOnFiveAndTwoWindow').animate({ opacity: 1 }, 500);
    } else {
        $('.sizeTreeOnFiveAndTwoWindow').animate({ opacity: 0.6 }, 500);
    }
}

document.querySelector("#input-size_2_on_7i2-window").onclick = function () {
    if ($("#input-size_2_on_7i2-window")[0].checked) {
        $('.sizeTwoOnFiveAndSevenWindow').animate({ opacity: 1 }, 500);
    } else {
        $('.sizeTwoOnFiveAndSevenWindow').animate({ opacity: 0.6 }, 500);
    }
}

document.querySelector("#input-youselfs-size-1-window").onclick = function () {
    if ($("#input-youselfs-size-1-window")[0].checked) {
        $('.sizeYousefs-1-window').animate({ opacity: 1 }, 500);
    } else {
        $('.sizeYousefs-1-window').animate({ opacity: 0.6 }, 500);
    }
};

// Обработка кнопок

$("#addMoreWindows").click(function () {
    createRowWindowsSizes();
});

//поля ввода количества окон

$('#inputAmountWindowsOneOnOneAndTwo').keydown(function () {
    let amountWindowsOneOnOneAndTwo = $("#inputAmountWindowsOneOnOneAndTwo").val();

});

$('#inputAmountWindowsOneOnOneAndTwo').change(function () {
    let amountWindowsOneOnOneAndTwo = $("#inputAmountWindowsOneOnOneAndTwo").val();

});

$('#inputAmountWindowsOneOnTwoAndTwo').keydown(function () {
    let amountWindowsOneOnTwoAndTwo = $("#inputAmountWindowsOneOnTwoAndTwo").val();

});

$('#inputAmountWindowsOneOnTwoAndTwo').change(function () {
    let amountWindowsOneOnTwoAndTwo = $("#inputAmountWindowsOneOnTwoAndTwo").val();

});

$('#inputAmountWindowsOneOnZeroAndTwo').keydown(function () {
    let amountWindowsOneOnZeroAndTwo = $("#inputAmountWindowsOneOnZeroAndTwo").val();

});

$('#inputAmountWindowsOneOnZeroAndTwo').change(function () {
    let amountWindowsOneOnZeroAndTwo = $("#inputAmountWindowsOneOnZeroAndTwo").val();

});

$('#inputAmountWindowsTreeOnFiveAndTwo').keydown(function () {
    let amountWindowsTreeOnFiveAndTwo = $("#inputAmountWindowsTreeOnFiveAndTwo").val();

});

$('#inputAmountWindowsTreeOnFiveAndTwo').change(function () {
    let amountWindowsTreeOnFiveAndTwo = $("#inputAmountWindowsTreeOnFiveAndTwo").val();

});

$('#inputAmountWindowsTwoOnAndTwo').keydown(function () {
    let amountWindowsTwoOnSevenAndTwo = $("#inputAmountWindowsTwoOnAndTwo").val();

});

$('#inputAmountWindowsTwoOnAndTwo').change(function () {
    let amountWindowsTwoOnSevenAndTwo = $("#inputAmountWindowsTwoOnAndTwo").val();

});

$('#inputAmountWindowsYouselfSizes-1').keydown(function () {
    let amountWindowsYouselfSizes = $("#inputAmountWindowsYouselfSizes-1").val();

});

$('#inputAmountWindowsYouselfSizes-1').change(function () {
    let amountWindowsYouselfSizes = $("#inputAmountWindowsYouselfSizes-1").val();

});
