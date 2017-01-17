$(document).ready(function () {

//map  initialization


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
                iconImageSize: [55, 50],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-5, 0]
            });

        myMap.geoObjects.add(myPlacemark);


//change map for diff tabs

        $('.cities .card').click(function () {


            if ($('.cities #spb').hasClass('active')) {

                console.log('spb');

                myMap.geoObjects.removeAll();

                myMap.setCenter([59.917623, 30.342638], 15);

                myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                    hintContent: 'Собственный значок метки',
                    balloonContent: 'Это красивая метка'
                }, {

                    iconLayout: 'default#image',

                    iconImageHref: 'img/map_icon.png',

                    iconImageSize: [65, 50],

                    iconImageOffset: [-5, 0]
                });

                myMap.geoObjects.add(myPlacemark);


            }

            else if ($('.cities #msc').hasClass('active')) {


                myMap.geoObjects.removeAll();

                myMap.setCenter([55.768279, 37.602966], 15);


                myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                    hintContent: 'Собственный значок метки',
                    balloonContent: 'Это красивая метка'
                }, {
                    iconLayout: 'default#image',
                    iconImageHref: 'img/map_icon.png',
                    iconImageSize: [65, 50],
                });

                myMap.geoObjects.add(myPlacemark);


            }

            else {

                myMap.geoObjects
                    .add(new ymaps.Placemark([46.336832, 48.026558], {
                        balloonContent: `Астраханские маркизы.
                                            ИП Чеботарев А.Н.
                                            г. Астрахань, ул. Ахшарумова, 54
                                            т.: (8512) 764-111
                                            т.: +7 927 55 38 205
www.астраханские-маркизы.рф`
                    }, {
                        iconLayout: 'default#image',
                        iconImageHref: 'img/map_icon.png',
                        iconImageSize: [65, 50],
                    }))

                    .add(new ymaps.Placemark([53.259649, 34.427709], {
                        balloonContent: `ООО «Империя Жалюзи»
ул.Красный Маяк 53
www.ij32.ru`
                    }, {
                        iconLayout: 'default#image',
                        iconImageHref: 'img/map_icon.png',
                        iconImageSize: [65, 50],
                    }))
                    .add(new ymaps.Placemark([53.245588, 34.337105], {
                        balloonContent: `«Седьмое небо»
г. Брянск, ул. Красноармейская 97
тел.: +7 (4832) 300-688, 300-668
www.потолки-7небо.рф
www.markiza.es`
                    }, {
                        iconLayout: 'default#image',
                        iconImageHref: 'img/map_icon.png',
                        iconImageSize: [65, 50],
                    }))
                    .add(new ymaps.Placemark([53.244957, 34.340024], {
                        balloonContent: `ООО «Решения для окон»
241019 Брянск пер.Гаражный д.2
тел. 8-(4832)-41-83-72, 41-17-07
www.jaluzi-bryansk.ru`
                    }, {
                        iconLayout: 'default#image',
                        iconImageHref: 'img/map_icon.png',
                        iconImageSize: [65, 50],
                    }))

                    .add(new ymaps.Placemark([58.524755, 31.239300], {
                        balloonContent: `ИП Гребенщиков Петр Викторович
«Экоклимат»
г. Великий Новгород, ул.Нехинская, 12, оф.304, ТСЦ «Тетрис»
Тел. 8 (816-2) 68-90-95
Тел. моб. 8-960-209-00-99`
                    }, {
                        iconLayout: 'default#image',
                        iconImageHref: 'img/map_icon.png',
                        iconImageSize: [65, 50],
                    }))
                    .add(new ymaps.Placemark([56.126739, 40.360560], {
                        balloonContent: `ООО «Гамма — солнцезащитные системы»
ул.Чайковского д.21
www.gamma33.ru`
                    }, {
                        iconLayout: 'default#image',
                        iconImageHref: 'img/map_icon.png',
                        iconImageSize: [65, 50],
                    }))
                    .add(new ymaps.Placemark([48.699605, 44.505710], {
                        balloonContent: `«Л-Сит»
г. Волгоград, ул. Калинина, д.13, офис 208
www.el-sit.ru`
                    }, {
                        iconLayout: 'default#image',
                        iconImageHref: 'img/map_icon.png',
                        iconImageSize: [65, 50],
                    }))
                    .add(new ymaps.Placemark([56.839966, 60.621954], {
                        balloonContent: `Екатеринбург, Пр. Ленина, 50, литер Д, офис 1К
e-mail: markiza@twoboos.ru
тел.+7 (343) 222-05-20
www.twoboos.ru`
                    }, {
                        iconLayout: 'default#image',
                        iconImageHref: 'img/map_icon.png',
                        iconImageSize: [65, 50],
                    }))
                    .add(new ymaps.Placemark([56.985927, 41.039480], {
                        balloonContent: `«Маркиза 37»
г.Иваново,
ул. 11-проезд д.2 офис 107
Тел.: 8 (4932) 344416
Тел.: 8 (910) 6862020
e-mail: markiza-ivanovo@mail.ru
www.markiza37.ru`
                    }, {
                        iconLayout: 'default#image',
                        iconImageHref: 'img/map_icon.png',
                        iconImageSize: [65, 50],
                    }))
                    .add(new ymaps.Placemark([52.268308, 104.311149], {
                        balloonContent: `ООО «Адекта»
664047, Иркутск,
ул. Партизанская, д. 102, оф. 5
т.(3952) 225-963, 600-698`
                    }, {
                        iconLayout: 'default#image',
                        iconImageHref: 'img/map_icon.png',
                        iconImageSize: [65, 50],
                    }))
                    .add(new ymaps.Placemark([55.790509, 49.126806], {
                        balloonContent: `ООО «Атланта»
420012, г. Казань,
ул. Щапова д. 9`
                    }, {
                        iconLayout: 'default#image',
                        iconImageHref: 'img/map_icon.png',
                        iconImageSize: [65, 50],
                    }))
                    .add(new ymaps.Placemark([55.346886, 86.073373], {
                        balloonContent: `ООО «Точка»
г. Кемерово
ул. Дзержинского, 23Б
Тел.: +7 (3842) 452-258, 750-383
e-mail: for-tochka@mail.ru
tochka42.ru`
                    }, {
                        iconLayout: 'default#image',
                        iconImageHref: 'img/map_icon.png',
                        iconImageSize: [65, 50],
                    }))

                    .add(new ymaps.Placemark([45.039069, 39.079832], {
                        balloonContent: `ООО «Еврогейт-ЮГ»
ул.Уральская 95, ТР 23
www.eurogate.su`
                    }, {
                        iconLayout: 'default#image',
                        iconImageHref: 'img/map_icon.png',
                        iconImageSize: [65, 50],
                    }))

                myMap.setCenter([56.626013, 51.467765], 5);

            }

        });

    });


});