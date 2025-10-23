$(document).ready(function () {
    $(".phone").mask('+7 (999)-999-99-99');
});
$(document).ready(function() {

    $('.js-example-basic-single').select2();


});
$(document).ready(function () {
    $('select').styler();
})


$(document).ready(function () {
    $('.open-menu').on('click', function () {
        $(this).toggleClass('close-menu');
        if ($(this).hasClass('close-menu')) {
            $('.header__menu').addClass('transition-menu');
            $('body').addClass('body_fix');
        } else {
            $('body').removeClass('body_fix');
            $('.header__menu').removeClass('transition-menu');
        }
    });
    $('.open-catalog').on('click', function () {
        $('body').removeClass('body_fix');
        $('.open-menu').removeClass('close-menu');
        $('.header__menu').removeClass('transition-menu');
    })
});


$('.open_modal').on('click', function () {
    let attr = $(this).attr('data-val');
    let modal = $('#' + attr);
    let isCopyText = $(this).attr('data-is-copy-text');
    if (isCopyText) {
        $('.add-text-btn')[0].innerText = $(this)[0].innerText;
    }
    modal.removeClass('out');
    modal.fadeIn();
});
$('.close').on('click', function () {
    let prt = $(this).parents('.modal');
    prt.addClass('out')
    setTimeout(function () {
        prt.fadeOut();
    }, 100);
});
$('.close-mod-text').on('click', function () {
    let prt = $(this).parents('.modal');
    prt.addClass('out')
    setTimeout(function () {
        prt.fadeOut();
    }, 100);
});
$('.modal-mob__info ul li').on('click', function () {
    let prt = $(this).parents('.modal');
    prt.addClass('out')
    setTimeout(function () {
        prt.fadeOut();
    }, 100);
});
$(window).on('click', function (event) {
    $('.modal').each(function () {
        let gtattr = $(this).attr('id');
        let new_mod = $('#' + gtattr);
        let md_cnt = $(new_mod).find('.modal-content');
        if (event.target === $(md_cnt)[0]) {
            setTimeout(function () {
                $(new_mod).addClass('out');
                $(new_mod).fadeOut()
            }, 100)
        }
        if (event.target === this) {
            setTimeout(function () {
                $(new_mod).addClass('out');
                $(new_mod).fadeOut()
            }, 100)
        }
    })
});


$(document).ready(function () {
    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        disableOn: 300,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });
});

$('.technical-specific__box').on('click', function () {
    $(this).toggleClass('specific__act')
});


$(document).ready(function () {



    addActiveClass('completed-hrefs', 'active-href');
    changeCaseBlock(this, 'completed-hrefs', 'completed-min-info', 'active-href', 'click-completed');
    $('.click-completed').on('click', function () {
        changeActiveClassWithClick(this, 'completed-hrefs', 'active-href')
        changeCaseBlock(this, 'completed-hrefs', 'completed-min-info', 'active-href', 'click-completed');
    });




    addActiveClass('technical-hrefs', 'technical-active');
    changeCaseBlock(this, 'technical-hrefs', 'technical-main-info', 'technical-active', 'technical-click');
    $('.technical-click').on('click', function () {
        changeActiveClassWithClick(this, 'technical-hrefs', 'technical-active')
        changeCaseBlock(this, 'technical-hrefs', 'technical-main-info', 'technical-active', 'technical-click');
    });



    addActiveClass('specificat-descr__href', 'specificat-active');
    changeCaseBlock(this, 'specificat-descr__href', 'specificat-min', 'specificat-active', 'specificat-click');
    $('.specificat-click').on('click', function () {
        changeActiveClassWithClick(this, 'specificat-descr__href', 'specificat-active')
        changeCaseBlock(this, 'specificat-descr__href', 'specificat-min', 'tspecificat-active', 'specificat-click');
    });



    addActiveClass('terms-contract__href', 'terms-contract-active');
    changeCaseBlock(this, 'terms-contract__href', 'terms-contract-block', 'terms-contract-active', 'terms-contract-click');
    $('.terms-contract-click').on('click', function () {
        changeActiveClassWithClick(this, 'terms-contract__href', 'terms-contract-active')
        changeCaseBlock(this, 'terms-contract__href', 'terms-contract-block', 'terms-contract-active', 'terms-contract-click');
    });


    addActiveClass('turnkey-taxi__cnt', 'turnkey-active');
    changeCaseBlock(this, 'turnkey-taxi__cnt', 'turnkey-taxi-min', 'turnkey-active', 'turnkey-click');
    $('.turnkey-click').on('click', function () {
        changeActiveClassWithClick(this, 'turnkey-taxi__cnt', 'turnkey-active')
        changeCaseBlock(this, 'turnkey-taxi__cnt', 'turnkey-taxi-min', 'turnkey-active', 'turnkey-click');
    });



    function addActiveClass(parent_menu, active_class) {
        let prt = $('.' + parent_menu);
        let prt_childrens = $(prt).children();
        let prt_child_li = $(prt_childrens).children();
        let first_child = $(prt_child_li)[0]
        if (!$(first_child).hasClass(active_class)) {
            !$(first_child).addClass(active_class)
        }
    }
    function changeActiveClassWithClick($this, parent_block, active_class) {
        let prt = $($this).parents('.' + parent_block);
        let prt_child = $(prt).find('li');
        $(prt_child).each(function () {
            $(this).removeClass(active_class);
        })
        $($this).addClass(active_class);
    }
    function changeCaseBlock($this, case_menu, case_block, active_class, menu_link) {
        let case_menu_block = $('.' + case_menu);
        let case_block_sub = $('.' + case_block);
        let case_block_child = $(case_block_sub).children();
        $(case_block_child).each(function () {
            $(this).css({display: 'none', height: 0});
        })
        if ($($this).hasClass(menu_link)) {
            let this_attr = $($this).attr('data-catalog');
            $(case_block_child).each(function () {
                if ($(this).attr('data-catalog') === this_attr) {
                    $(this).css({display: 'block', height: '100%'});
                }
            })
        } else {
            let active_find = $(case_menu_block).find('.' + active_class);
            let active_find_attr = $(active_find).attr('data-catalog');
            $(case_block_child).each(function () {
                if ($(this).attr('data-catalog') === active_find_attr) {
                    $(this).css({display: 'block', height: '100%'});
                }
            })
        }
    }
});



$(function () {
    let Accordion = function (el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;
        let links = this.el.find('.link');
        links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown);
    };
    Accordion.prototype.dropdown = function (e) {
        let $el = e.data.el;
        $this = $(this), $next = $this.next();
        $next.slideToggle();
        if (!e.data.multiple) {
           $el.parents('.accordion').find('.submenu').not($next).slideUp();
        }
        if (!$this.hasClass('open')) {
            $('.link').each(function () {
                $(this).addClass('open');
            })
            // $this.addClass('open');
        } else {
            $this.removeClass('open');
        }
    }
    $('.accordion').each(function (){
        new Accordion($(this), false);
    })

});











$('.popular-brands__letter').on('click', function (e) {
    $('.popular-brands__box').removeClass('popular-brands__active');
    $(this).parent().toggleClass('popular-brands__active');
    e.stopPropagation();
});

$('.popular-brands__fix').on('click', function (e) {
    e.stopPropagation();
});


$(window).on('click', function (e) {
    let brandsSort = $('.popular-brands__box');
    if (e.target !== brandsSort) {
        brandsSort.removeClass('popular-brands__active')
    }
});


$('.open-catalog').on('click', function (e) {
    $(this).toggleClass('open-catalog__active');
    $('body').toggleClass('body-fixed');
    $('.catalog-fixed').toggleClass('catalog-fixed__active');
});


$('.fixed-call-modal').on('click', function (e) {
    e.stopPropagation();
    $('.within-few__fixed').toggleClass('within-few__active');
});


$('.within-few__mod').on('click', function (e) {
    e.stopPropagation();
});


$('.close-modal').on('click', function (e) {
    $('.within-few__fixed').removeClass('within-few__active');
    e.stopPropagation();
});

$(window).on('click', function (e) {
    let menuSort = $('.within-few__fixed');
    if (e.target !== menuSort) {
        menuSort.removeClass('within-few__active')
    }
});

$('.dealership-expand').on('click', function () {
    $(this).toggleClass('dealership-expand__act');
    $('.dealership-text__none').toggleClass('dealership-text__act');
    $('.perfect-cross-text__none').toggleClass('perfect-cross-text__act');
});

$('.all-mark-cars-open').on('click', function () {
    $('.go-to-catalog').toggleClass('go-to-catalog__active');
    $('.catalog-model__cnt').toggleClass('catalog-model__active');
});


$('.by-body-type-open').on('click', function () {
    $('.go-to-catalog').toggleClass('go-to-catalog__active');
    $('.catalog-body-type').toggleClass('body-type-open__active');
});

$('.by-country-open').on('click', function () {
    $('.go-to-catalog').toggleClass('go-to-catalog__active');
    $('.by-country-catalog').toggleClass('country-catalog__active');
});

$('.go-to-catalog').on('click', function () {
    $(this).removeClass('go-to-catalog__active');
    $('.catalog-model__cnt').removeClass('catalog-model__active');
    $('.catalog-body-type').removeClass('body-type-open__active');
    $('.by-country-catalog').removeClass('country-catalog__active');

});


$('.modal-mob__info ul li').on('click', function () {
    let selected_text = $(this).html();
    $('.modal-mob__name').html(selected_text);
    $('.elections-mob span').html(selected_text);
});





// Конфигуратор


let activeTab = 0
let maxValidationStep = 0
const quizBox = $('.quiz-js');
const prevButton = $('.button-prev-js')
const nextButton = $('.button-next-js')
const markListItems = $('.config-model__letter li')
const modelList = $('.model-js')
const modificationList = $('.modification-js')
const equipmentList = $('.equipment-js')
const colorList = $('.color-js')
const giftList = $('.gift-js')
const menuList = $('.configur__menu li')
const selectedConfigs = $('.selected_config')
const configMainPrice = $('.config-all-price')
const configImage = $('.configurator__photo img');
const closeConfiguration = $('.close-tabs');
const configMountPrice = $('.config-mount-price');

const quizForm = document.getElementById('quiz-form');

if (quizBox.length) {
    setConfiguratorTab(0)
    validation()
    updateMenuTabs()
    // Prev Button Click
    $(prevButton).on('click', function () {
        if (activeTab > 0) {
            --activeTab
            handleChangeTab()
        }
    })

    // Next Button Click
    $(nextButton).on('click', function () {

        if (activeTab === maxValidationStep) {
            ++maxValidationStep
        }
        ++activeTab
        handleChangeTab()
    })

    // mark list items handle click
    $(markListItems).on('click', function () {
        $(markListItems).each(function () {
            $(this).removeClass('active-mark')
        })
        $(this).addClass('active-mark')
        quizForm.brand.value = $(this).attr('data-brand')
        $(selectedConfigs[activeTab]).find('span').html($(this).attr('data-brand'))
        validation()
    })

    // model List items handle click
    $(modelList).on('change', function () {
        quizForm.model.value = this.value
        $(selectedConfigs[activeTab]).find('span').html(this.value)
        validation()
    })

    // model List items handle click
    $(modificationList).on('change', function () {
        quizForm.model.value = this.value
        $(selectedConfigs[activeTab]).find('span').html(`${this.dataset.volume} | ${this.dataset.checkpoint} | ${this.dataset.power}`)
        configMainPrice.html(this.dataset.price)
        $(configImage).attr('src',this.dataset.image)
        validation()
    })

    // equipment List items handle click
    $(equipmentList).on('change', function () {
        quizForm.equipment.value = this.value
        $(selectedConfigs[activeTab]).find('span').html(this.value)

        validation()
    })
    // color List items handle click
    $(colorList).on('change', function () {
        quizForm.equipment.value = this.value
        $(selectedConfigs[activeTab]).find('span').html(this.value)
        validation()
    })

    // present List items handle click
    $(giftList).on('change', function () {
        quizForm.present.value = this.value
        $(selectedConfigs[activeTab]).find('span').html(this.value)
        validation()
    })

    $(menuList).each(function (index) {
        $(this).on('click', function () {
            if (index <= maxValidationStep) {
                activeTab = index
                handleChangeTab()
            }
        })
    })
    $(selectedConfigs).each(function (index) {
        $(this).on('click', function () {
            if (index <= maxValidationStep) {
                activeTab = index
                handleChangeTab()
            }
        })
    })

    $(closeConfiguration).on('click', clearFormData)
}

function setConfiguratorTab(active) {
    quizBox.each((index, item) => {
        $(item).hide()
        if (index === active) {
            $(item).fadeIn()
        }
    });
}

function handleChangeTab() {
    setConfiguratorTab(activeTab)
    validation()
    updateMenuTabs()
}

function updateMenuTabs() {
    $(menuList).each(function (index) {
        $(this).removeClass('already-asset-act')
        $(this).removeClass('configur-active__menu')
        if (activeTab === index) {
            $(this).addClass('already-asset-act')
        }
        if (index <= maxValidationStep) {
            $(this).addClass('configur-active__menu')
        }
    })
    $(selectedConfigs).each(function (index){
        $(this).removeClass('active-config')
        if (index <= maxValidationStep) {
            $(this).addClass('active-config')
        }
    })
}












function clearFormData(){
    activeTab = 0
    maxValidationStep = 0
    quizForm.brand.value = ''
    quizForm.model.value = ''
    quizForm.modification.value = ''
    quizForm.equipment.value = ''
    quizForm.color.value = ''
    quizForm.present.value = ''
    $(configImage).attr('src','./assets/img/config-photo.png')
    configMainPrice.html(0)
    $(selectedConfigs[0]).find('span').html('Выберите марку')
    $(selectedConfigs[1]).find('span').html('Выберите модель')
    $(selectedConfigs[2]).find('span').html('Выбрать модификацию')
    $(selectedConfigs[3]).find('span').html('Выберите комплектацию')
    $(selectedConfigs[4]).find('span').html('Выбрать цвет')
    $(selectedConfigs[5]).find('span').html('Выбрать подарок')
    updateMenuTabs()
}

function validation() {
    $(menuList).parents('.configur__menu').show()
    $(nextButton).each(function () {
        this.disabled = true
    })
    switch (activeTab) {
        case 0: {
            if (quizForm.brand.value.trim().length) {
                nextButton[activeTab].disabled = false
            }
            break
        }
        case 1: {
            if (quizForm.model.value.trim().length) {
                nextButton[activeTab].disabled = false
            }
            break
        }
        case 2: {
            if (quizForm.modification.value.trim().length) {
                nextButton[activeTab].disabled = false
            }
            break
        }
        case 3: {
            if (quizForm.equipment.value.trim().length) {
                nextButton[activeTab].disabled = false
            }
            break
        }
        case 4: {
            if (quizForm.color.value.trim().length) {
                nextButton[activeTab].disabled = false
            }
            break
        }
        case 5: {
            if (quizForm.present.value.trim().length) {
                nextButton[activeTab].disabled = false
            }
            break
        }
        case 6:{
            $(menuList).parents('.configur__menu').hide()
            break
        }

    }
}

















ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [51.142042, 71.448485],
            zoom: 9
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'улица Шарля де Голля, 1А',
            balloonContent: 'улица Шарля де Голля, 1А'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'assets/img/logo-map.png',
            // Размеры метки.
            iconImageSize: [125, 96],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-220, -70]
        }),

        myPlacemarkWithContent = new ymaps.Placemark([51.142042, 71.448485], {
            hintContent: 'улица Шарля де Голля, 1А',
            balloonContent: 'улица Шарля де Голля, 1А',
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: '',
            // Размеры метки.
            iconImageSize: [62, 85],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [15, 15],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        });

    myMap.geoObjects
        .add(myPlacemark)
        .add(myPlacemarkWithContent);
});


