/* в этот файл добавляет скрипты*/

// Меню
const navToggle = document.querySelector('.main-nav__item--burger');
const menu = document.querySelector('.site-list');

const menuActive = function () {
  menu.classList.add('site-list--active');
  menu.classList.add('site-list--close');
  navToggle.classList.add('main-nav__item--visible');
}

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('main-nav__item--active');
  menu.classList.toggle('site-list--close');
});

menuActive();



// Состояния инпутов
styleInput();
window.addEventListener('resize', styleInput);

function styleInput(){
  const inputMax = document.querySelector('.inputs__range--max');
  const priceRangeBar = document.querySelector('.price__range-bar');

  if (document.documentElement.clientWidth >= 320 && document.documentElement.clientWidth < 768) {
    inputMax.value = '123';
    priceRangeBar.style.width = '245px';
  }

  if (document.documentElement.clientWidth >= 768 && document.documentElement.clientWidth < 1440) {
    inputMax.value = '900';
    priceRangeBar.style.width = '185px';
  }

  if (document.documentElement.clientWidth >= 1440) {
    inputMax.value = '900';
    priceRangeBar.style.width = '275px';
  }
}



// Карта
const mapOptions = {
  center: [59.96843, 30.31749],
  zoom: 18
}

const map = new L.map('map', mapOptions);
const layer = new L.TileLayer('https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=StFld3NCrvag1TMtL9m1');

map.addLayer(layer);

const iconOptions = {
  iconUrl: '/img/map-marker.svg',
  iconSize: [38, 50],
  iconAnchor: [18, 50]
}

const customIcon = L.icon(iconOptions);

const markerOptions = {
  clickable: true,
  draggable: true,
  icon: customIcon
}

const marker = L.marker({lat: 59.96836, lng: 30.31757}, markerOptions);

marker.addTo(map);



const swiper = new Swiper('.swiper', {
  loop: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
