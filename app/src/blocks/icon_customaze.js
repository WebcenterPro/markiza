$(document).ready(function () {

    ymaps.ready(function () {
        var myMap = new ymaps.Map('map', {
                center: [59.917623, 30.342638],
                zoom: 15
            }, {
                searchControlProvider: 'yandex#search'
            }),
            myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                hintContent: 'Собственный значок метки',
                balloonContent: 'Это красивая метка'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: 'img/map_icon.png',
                // Размеры метки.
                iconImageSize: [65,50],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-5,0]
            });

        myMap.geoObjects.add(myPlacemark);
    });
});