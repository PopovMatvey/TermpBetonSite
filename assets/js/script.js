//Ожидание прогрузки страницы
$(document).ready(function () {


  // Необходим для модального открытия изображений
  $('.image-link').magnificPopup({ type: 'image' });

  /*Отложенные анимации*/
  //Анимация для "Домика" внутри слайдера
  function showImgBlockInSlyder() {
    let options = { threshold: [0.1] };
    let observer = new IntersectionObserver(getAnimationImgBlockInSlyder, options);
    let elements = $('.black-img');
    elements.each((i, el) => {
      observer.observe(el);
    });
  }

//Анимация для "Чёрного блока" внутри слайдера
function showBlockInSlyder() {
  let options = { threshold: [0.1] };
  let observer = new IntersectionObserver(getAnimationBlockInSlyder, options);
  let elements = $('.black');
  elements.each((i, el) => {
    observer.observe(el);
  });
}

//Анимация для названия компании и текста в шапке
function showNameCompany() {
  let options = { threshold: [0.1] };
  let observer = new IntersectionObserver(getAnimationNameCompany, options);
  let elements = $('.name-company');
  elements.each((i, el) => {
    observer.observe(el);
  });
}

//Анимация для номеров компаниив шапке
function showPhoneCompany() {
  let options = { threshold: [0.1] };
  let observer = new IntersectionObserver(getAnimationPhoneCompany, options);
  let elements = $('.tel-company');
  elements.each((i, el) => {
    observer.observe(el);
  });
}

//Анимация для адресов компании шапке
function showAdressCompany() {
  let options = { threshold: [0.1] };
  let observer = new IntersectionObserver(getAnimationAdressCompany, options);
  let elements = $('.addr-company');
  elements.each((i, el) => {
    observer.observe(el);
  });
}

//Анимация для земляных работ в видах работ
function showZemlWorks() {
  let options = { threshold: [0.1] };
  let observer = new IntersectionObserver(getAnimationZemlWorks, options);
  let elements = $('.zeml-works');
  elements.each((i, el) => {
    observer.observe(el);
  });
}

//Анимация для строительных работ в видах работ
function showStroitlWorks() {
  let options = { threshold: [0.1] };
  let observer = new IntersectionObserver(getAnimationStroitWorks, options);
  let elements = $('.stroit-works');
  elements.each((i, el) => {
    observer.observe(el);
  });
}

//Анимация для строительства бассейнов в видах работ
function showStroitBasslWorks() {
  let options = { threshold: [0.1] };
  let observer = new IntersectionObserver(getAnimationStroitBassWorks, options);
  let elements = $('.stroit-bass');
  elements.each((i, el) => {
    observer.observe(el);
  });
}

//Анимация для строительства бассейнов в видах работ
function showFassadlWorks() {
  let options = { threshold: [0.1] };
  let observer = new IntersectionObserver(getAnimationFassadWorks, options);
  let elements = $('.fassd-works');
  elements.each((i, el) => {
    observer.observe(el);
  });
}


//Анимация для основных фактах о компании
function showDescriptionlWorks() {
  let options = { threshold: [0.1] };
  let observer = new IntersectionObserver(getAnimationDescriptionWorks, options);
  let elements = $('.description-works');
  elements.each((i, el) => {
    observer.observe(el);
  });
}

//Анимация для списка услуг
function showServeses() {
  let options = { threshold: [0.1] };
  let observer = new IntersectionObserver(getAnimatioSersises, options);
  let elements = $('.serveses');
  elements.each((i, el) => {
    observer.observe(el);
  });
}

//Анимация для списка услуг
function showStroitType() {
  let options = { threshold: [0.1] };
  let observer = new IntersectionObserver(getAnimatioStroitType, options);
  let elements = $('.stoit-type');
  elements.each((i, el) => {
    observer.observe(el);
  });
}

//Анимация для  Ремота квартир в разновидностях строительных работ
function showRemontType() {
  let options = { threshold: [0.1] };
  let observer = new IntersectionObserver(getAnimatioRemontType, options);
  let elements = $('.remont-type');
  elements.each((i, el) => {
    observer.observe(el);
  });
}

//Анимация для монтажа оборудования в разновидностях строительных работ
function showMontType() {
  let options = { threshold: [0.1] };
  let observer = new IntersectionObserver(getAnimatioMontType, options);
  let elements = $('.montaj-type ');
  elements.each((i, el) => {
    observer.observe(el);
  });
}

//Анимация для благоустройства в разновидностях строительных работ
function showBlag() {
  let options = { threshold: [0.1] };
  let observer = new IntersectionObserver(getAnimatioBlag, options);
  let elements = $('.blag-type ');
  elements.each((i, el) => {
    observer.observe(el);
  });
}

  // Отобразить  анимации
  showImgBlockInSlyder();
  showBlockInSlyder();
  showNameCompany();
  showPhoneCompany();
  showAdressCompany();
  showZemlWorks();
  showStroitlWorks();
  showStroitBasslWorks();
  showFassadlWorks();
  showDescriptionlWorks();
  showServeses();
  showStroitType();
  showRemontType();
  showMontType();
  showBlag();

});



//Получить анимацию  для "Домика" внутри слайдера
function getAnimationImgBlockInSlyder(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('black-img_animation');
    }
  });
}

//Получить анимацию  для "Чёрного блока" внутри слайдера
function getAnimationBlockInSlyder(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('black_animation');
    }
  });
}

//Получить анимацию  для названия компании и текста в шапке
function getAnimationNameCompany(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('name-company_animation');
    }
  });
}

//Получить анимацию  для номеров компании в шапке
function getAnimationPhoneCompany(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('phone-company_animation');
    }
  });
}


//Получить анимацию  для адресов компании в шапке
function getAnimationAdressCompany(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('addr-company_animation');
    }
  });
}

//Получить анимацию  для земляных работ в видах работ
function getAnimationZemlWorks(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('zeml-works_animation');
    }
  });
}

//Получить анимацию  для строительных работ в видах работ
function getAnimationStroitWorks(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('stroit-works_animation');
    }
  });
}

//Получить анимацию  для строительства бассейнов  в видах работ
function getAnimationStroitBassWorks(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('stroit-bass_animation');
    }
  });
}

//Получить анимацию  для фассадных работ в видах работ
function getAnimationFassadWorks(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('fassd-works_animation');
    }
  });
}

//Получить анимацию  для описания копании
function getAnimationDescriptionWorks(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('description-works_animation');
    }
  });
}

//Получить анимацию  для Списка услуг
function getAnimatioSersises(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('serveses_animation');
    }
  });
}

//Получить анимацию  для строительства в разновидностях строительных работ
function getAnimatioStroitType(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('stoit-type_animation');
    }
  });
}

//Получить анимацию  для Ремонта квартир в разновидностях строительных работ
function getAnimatioRemontType(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('remont-type_animation');
    }
  });
}

//Получить анимацию  для монтажа оборудования в разновидностях строительных работ
function getAnimatioMontType(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('montaj-type_animation');
    }
  });
}

//Получить анимацию  для благоустройствая в разновидностях строительных работ
function getAnimatioBlag(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('blag-type_animation');
    }
  });
}