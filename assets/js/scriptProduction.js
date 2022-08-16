// Переменные
let servises = document.querySelector(".servises");  //Блок услуг

// Ожидание прогрузки страницы
$(document).ready(function () {

    // Необходим для модального открытия изображений
    $('.image-link').magnificPopup({ type: 'image' });

    // Изменение стилей блоку улсуг
    $("#btn-known-href").click(function () {
        servises.style.display = "block";
        //плавная прокрутка
        $("a[href^='#']").click(function () {
            let valHerf = $(this).attr("href");
            if (valHerf != "#") {
                $('html, body').animate({ scrollTop: $(valHerf).offset().top - 100 + "px" })
            }
        });

    });


    //Анимация для "Чёрного блока" внутри слайдера
    function showBlockInSlyder() {
        let options = { threshold: [0.1] };
        let observer = new IntersectionObserver(getAnimationBlockInSlyder, options);
        let elements = $('.black');
        elements.each((i, el) => {
            observer.observe(el);
        });
    }

    // Отобразить  анимации
    showBlockInSlyder();


});





//Получить анимацию  для "Чёрного блока" внутри слайдера
function getAnimationBlockInSlyder(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('black_animation');
        }
    });
}
