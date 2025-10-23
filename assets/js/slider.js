let greatSwiper = new Swiper(".great-offer-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
        el: ".great-offer-pagination",
        clickable: true,
    },

});



let liquidationSwiper = new Swiper(".liquidation__slider", {
    slidesPerView: 1,
    spaceBetween: 50,
    pagination: {
        el: ".liquidation-pagination",
        clickable: true,
    },

});



let salonSwiper = new Swiper(".car-salon__slider", {
    slidesPerView: 8,
    spaceBetween: 40,
    loop: true,
    breakpoints: {
        '1800': {
            slidesPerView: 8,
            slidesPerGroup: 1,
        },
        '1299': {
            slidesPerView: 6,
            slidesPerGroup: 1,
        },
        '1020': {
            slidesPerView: 6,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        '760': {
            slidesPerView: 5,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        '570': {
            slidesPerView: 4,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        '320': {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
    }

});



let countrySwiper = new Swiper(".cars-country__slider", {
    slidesPerView: 8,
    spaceBetween: 40,
    loop: true,
    breakpoints: {
        '1800': {
            slidesPerView: 8,
            slidesPerGroup: 1,
        },
        '1600': {
            slidesPerView: 6,
            slidesPerGroup: 1,
        },
        '1020': {
            slidesPerView: 6,
            slidesPerGroup: 1,
            spaceBetween: 20,

        },
        '760': {
            slidesPerView: 5,
            slidesPerGroup: 1,
            spaceBetween: 20,

        },
        '520': {
            slidesPerView: 4,
            slidesPerGroup: 1,
            spaceBetween: 20,

        },
        '320': {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
    }

});




let salonInfoSwiper = new Swiper(".salon-info__slider", {
    slidesPerView: 10,
    spaceBetween: 24,
    loop: true,
    breakpoints: {
        '1299': {
            slidesPerView: 10,
            slidesPerGroup: 1,
        },
        '1199': {
            slidesPerView: 6,
            slidesPerGroup: 1,
        },
        '760': {
            slidesPerView: 5,
            slidesPerGroup: 1,
        },
        '570': {
            slidesPerView: 4,
            slidesPerGroup: 1,
        },
        '320': {
            slidesPerView: 3,
            slidesPerGroup: 1,
        }
    }
});

let slidCarSwiper = new Swiper(".slid-car__slider", {
    slidesPerView: 8,
    spaceBetween: 40,
    loop: true,
    breakpoints: {
        '1799': {
            slidesPerView: 8,
            slidesPerGroup: 1,
        },
        '1299': {
            slidesPerView: 6,
            slidesPerGroup: 1,
        },
        '1020': {
            slidesPerView: 5,
            slidesPerGroup: 1,
        },
        '760': {
            slidesPerView: 4,
            slidesPerGroup: 1,
        },
        '570': {
            slidesPerView: 3,
            slidesPerGroup: 1,
        },
        '320': {
            slidesPerView: 2,
            slidesPerGroup: 1,
        }
    }
});

let selectionsSwiper = new Swiper(".selections-car__slider", {
    slidesPerView: 4,
    spaceBetween: 40,
    loop: true,
    breakpoints: {
        '1199': {
            slidesPerView: 4,
            slidesPerGroup: 1,
        },
        '1020': {
            slidesPerView: 5,
            slidesPerGroup: 1,
        },
        '760': {
            slidesPerView: 4,
            slidesPerGroup: 1,
            spaceBetween: 20,

        },
        '320': {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 20,

        }
    }
});



let bestsellersSwiper = new Swiper(".bestsellers__slider", {
    slidesPerView: 2,
    spaceBetween: 40,
    loop: true,
    speed: 1500,
    pagination: {
        el: ".bestsellers-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".bestsellers-button-next",
        prevEl: ".bestsellers-button-prev",
    },
    breakpoints: {
        '760': {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        '570': {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        '320': {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 20,
            centeredSlides: false,
        }
    }
});





let programsSwiper = new Swiper(".programs-state__slider", {
    slidesPerView: 4,
    spaceBetween: 40,
    breakpoints: {
        '1299': {
            slidesPerView: 4,
            slidesPerGroup: 1,
        },
        '1199': {
            slidesPerView: 4,
            slidesPerGroup: 1,
        },
        '1020': {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        '760': {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 20,
            loop: true,
        },
        '320': {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 20,
            loop: true,

        }
    }
});



let partnersSwiper = new Swiper(".our-partners__slider", {
    slidesPerView: 6,
    spaceBetween: 40,
    loop: true,
    pagination: {
        el: ".partners-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".partners-button-next",
        prevEl: ".partners-button-prev",
    },
    breakpoints: {
        '1199': {
            slidesPerView: 6,
            slidesPerGroup: 1,
        },
        '1020': {
            slidesPerView: 4,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        '768': {
            slidesPerView: 4,
            slidesPerGroup: 1,
            spaceBetween: 20,

        },
        '320': {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 20,

        }
    }
});






let reviewsSwiper = new Swiper(".reviews-clients__slider", {
    slidesPerView: 4,
    spaceBetween: 40,
    loop: true,
    breakpoints: {
        '1199': {
            slidesPerView: 4,
            slidesPerGroup: 1,
        },
        '1020': {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        '760': {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        '320': {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 20,
        }
    }
});





let newsreviewsSwiper = new Swiper(".news-reviews__slider", {
    slidesPerView: 1,
    spaceBetween: 40,
    loop: true,
    centeredSlides: true,
    pagination: {
        el: ".reviews-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".reviews-button-next",
        prevEl: ".reviews-button-prev",
    },
    breakpoints: {
        '1020': {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 40,
        },
        '760': {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 20,
            centeredSlides: false,

        },
        '320': {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 20,
            centeredSlides: false,

        }
    }
});





let equipmentSwiper = new Swiper(".config-equipment__slider", {
    slidesPerView: 3,
    spaceBetween: 24,
    loop: true,
    breakpoints: {
        '1020': {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 24,
        },
        '760': {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        '570': {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        '320': {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 5,
        },
    },
});




let packagesCompaSwiper = new Swiper(".packages-compa__slider", {
    slidesPerView: 3,
    spaceBetween: 40,
    loop: true,
    pagination: {
        el: ".reviews-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".reviews-button-next",
        prevEl: ".reviews-button-prev",
    },
    breakpoints: {
        '1020': {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 40,
        },
        '760': {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        '570': {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        '320': {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 5,
        },
    },
});



let crossoverSwiper = new Swiper(".crossover-models__slider", {
    slidesPerView: 3,
    spaceBetween: 40,
    centeredSlides: true,
    loop: true,
    pagination: {
        el: ".crossover-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".crossover-button-next",
        prevEl: ".crossover-button-prev",
    },
    breakpoints: {

        '1399': {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 40,
        },
        '1020': {
            slidesPerView: 4,
            slidesPerGroup: 1,
            spaceBetween: 20,
            centeredSlides: false,

        },
        '760': {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 20,
            centeredSlides: false,

        },
        '570': {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 20,
            centeredSlides: false,

        },
        '320': {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 5,
            centeredSlides: false,

        },
    },
});




let photoCarsSwiper = new Swiper(".photo-cars__slider", {
    slidesPerView: 4,
    spaceBetween: 40,
    loop: true,
    pagination: {
        el: ".photo-cars-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".photo-cars-button-next",
        prevEl: ".photo-cars-button-prev",
    },
    breakpoints: {
        '1399': {
            slidesPerView: 4,
            slidesPerGroup: 1,
            spaceBetween: 40,
        },
        '1020': {
            slidesPerView: 4,
            slidesPerGroup: 1,
            spaceBetween: 40,
        },
        '760': {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        '570': {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        '320': {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 5,
        },
    },
});


let interiorSwiper = new Swiper(".interior__slider", {
    slidesPerView: 4,
    spaceBetween: 40,
    loop: true,
    pagination: {
        el: ".interior-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".interior-button-next",
        prevEl: ".interior-button-prev",
    },
    breakpoints: {
        '1399': {
            slidesPerView: 4,
            slidesPerGroup: 1,
            spaceBetween: 40,
        },
        '1020': {
            slidesPerView: 4,
            slidesPerGroup: 1,
            spaceBetween: 40,
        },
        '760': {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        '570': {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        '320': {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 5,
        },
    },
});

let descriptSwiper = new Swiper(".descript-chan__slid", {
    slidesPerView: 1,
    spaceBetween: 4,
    loop: true,
    navigation: {
        nextEl: ".descript-button-next",
        prevEl: ".descript-button-prev",
    },
});





let availableSwiper = new Swiper(".config-available__slid", {
    slidesPerView: 1,
    spaceBetween: 4,
    loop: true,
    navigation: {
        nextEl: ".config-available-next",
        prevEl: ".config-available-prev",
    },
});



let otherSwiper = new Swiper(".other-models__slider", {
    slidesPerView: 3,
    spaceBetween: 40,
    loop: true,
    centeredSlides: true,
    pagination: {
        el: ".other-models-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".other-models-button-next",
        prevEl: ".other-models-button-prev",
    },
    breakpoints: {
        '1399': {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 40,
        },
        '1020': {
            slidesPerView: 4,
            slidesPerGroup: 1,
            spaceBetween: 20,
            centeredSlides: false,

        },
        '760': {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 20,
            centeredSlides: false,

        },
        '570': {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 20,
            centeredSlides: false,

        },
        '320': {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 5,
            centeredSlides: false,
        },
    },
});



let baicCarSwiper = new Swiper(".baic-cars__slider", {
    slidesPerView: 10,
    spaceBetween: 24,
    breakpoints: {
        '1299': {
            slidesPerView: 10,
            slidesPerGroup: 1,
            spaceBetween: 24,
        },
        '1020': {
            slidesPerView: 7,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        '760': {
            slidesPerView: 5,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        '420': {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        '320': {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 5,
        },
    },
});




let belgeeSwiper = new Swiper(".belgee-models__slider", {
    slidesPerView: 3,
    spaceBetween: 40,
    pagination: {
        el: ".belgee-models-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".belgee-models-button-next",
        prevEl: ".belgee-models-button-prev",
    },
    breakpoints: {
        '1399': {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 40,
        },
        '1020': {
            slidesPerView: 4,
            slidesPerGroup: 1,
            spaceBetween: 20,
            centeredSlides: false,

        },
        '760': {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 20,
            centeredSlides: false,

        },
        '570': {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 20,
            centeredSlides: false,

        },
        '320': {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 5,
            centeredSlides: false,
        },
    },
});




let belgeeCarSwiper = new Swiper(".belgee-cars__slider", {
    slidesPerView: 10,
    spaceBetween: 24,
    breakpoints: {
        '1299': {
            slidesPerView: 10,
            slidesPerGroup: 1,
            spaceBetween: 24,
        },
        '1020': {
            slidesPerView: 7,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        '760': {
            slidesPerView: 5,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        '420': {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        '320': {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 5,
        },
    },
});






let bydSwiper = new Swiper(".byd-models__slider", {
    slidesPerView: 3,
    spaceBetween: 40,
    pagination: {
        el: ".byd-models-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".byd-models-button-next",
        prevEl: ".byd-models-button-prev",
    },
    breakpoints: {
        '1399': {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 40,
        },
        '1020': {
            slidesPerView: 4,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        '760': {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        '570': {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        '320': {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 5,
        },
    },
});



let bydCarSwiper = new Swiper(".byd-cars__slider", {
    slidesPerView: 10,
    spaceBetween: 24,
    breakpoints: {
        '1299': {
            slidesPerView: 10,
            slidesPerGroup: 1,
            spaceBetween: 24,
        },
        '1020': {
            slidesPerView: 7,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        '760': {
            slidesPerView: 5,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        '420': {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        '320': {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 5,
        },
    },
});







let changanSwiper = new Swiper(".changan-models__slider", {
    slidesPerView: 3,
    spaceBetween: 40,
    loop: true,
    centeredSlides: true,
    pagination: {
        el: ".changan-models-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".changan-models-button-next",
        prevEl: ".changan-models-button-prev",
    },
    breakpoints: {
        '1399': {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 40,
        },
        '1020': {
            slidesPerView: 4,
            slidesPerGroup: 1,
            spaceBetween: 20,
            centeredSlides: false,

        },
        '760': {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 20,
            centeredSlides: false,

        },
        '570': {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 20,
            centeredSlides: false,

        },
        '320': {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 5,
            centeredSlides: false,
        },
    },
});



let changanCarSwiper = new Swiper(".changan-cars__slider", {
    slidesPerView: 10,
    spaceBetween: 24,
    breakpoints: {
        '1299': {
            slidesPerView: 10,
            slidesPerGroup: 1,
            spaceBetween: 24,
        },
        '1020': {
            slidesPerView: 7,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        '760': {
            slidesPerView: 5,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        '420': {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        '320': {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 5,
        },
    },
});

let rangeCarSwiper = new Swiper(".model-range__slider", {
    slidesPerView: 6,
    spaceBetween: 24,
    breakpoints: {
        '1299': {
            slidesPerView: 6,
            slidesPerGroup: 1,
            spaceBetween: 24,
        },
        '1020': {
            slidesPerView: 5,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        '760': {
            slidesPerView: 5,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        '420': {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        '320': {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 5,
        },
    },
});






let crossSwiper = new Swiper(".cross-models__slider", {
    slidesPerView: 3,
    spaceBetween: 40,
    loop: true,
    centeredSlides: true,
    pagination: {
        el: ".cross-models-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".cross-models-button-next",
        prevEl: ".cross-models-button-prev",
    },
    breakpoints: {
        '1399': {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 40,
        },
        '1020': {
            slidesPerView: 4,
            slidesPerGroup: 1,
            spaceBetween: 20,
            centeredSlides: false,

        },
        '760': {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 20,
            centeredSlides: false,

        },
        '570': {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 20,
            centeredSlides: false,

        },
        '320': {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 5,
            centeredSlides: false,
        },
    },
});


let minivansSwiper = new Swiper(".minivans-models__slider", {
    slidesPerView: 3,
    spaceBetween: 40,
    loop: true,
    centeredSlides: true,
    pagination: {
        el: ".minivans-models-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".minivans-models-button-next",
        prevEl: ".minivans-models-button-prev",
    },
    breakpoints: {
        '1399': {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 40,
        },
        '1020': {
            slidesPerView: 4,
            slidesPerGroup: 1,
            spaceBetween: 20,
            centeredSlides: false,

        },
        '760': {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 20,
            centeredSlides: false,

        },
        '570': {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 20,
            centeredSlides: false,

        },
        '320': {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 5,
            centeredSlides: false,
        },
    },
});




let suvsSwiper = new Swiper(".suvs-models__slider", {
    slidesPerView: 3,
    spaceBetween: 40,
    loop: true,
    centeredSlides: true,
    pagination: {
        el: ".suvs-models-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".suvs-models-button-next",
        prevEl: ".suvs-models-button-prev",
    },
    breakpoints: {
        '1399': {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 40,
        },
        '1020': {
            slidesPerView: 4,
            slidesPerGroup: 1,
            spaceBetween: 20,
            centeredSlides: false,

        },
        '760': {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 20,
            centeredSlides: false,

        },
        '570': {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 20,
            centeredSlides: false,

        },
        '320': {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 5,
            centeredSlides: false,
        },
    },
});


let archivedModelsSwiper = new Swiper(".archived-models__slider", {
    slidesPerView: 3,
    spaceBetween: 40,
    loop: true,
    centeredSlides: true,
    breakpoints: {
        '1399': {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 40,
        },
        '1020': {
            slidesPerView: 4,
            slidesPerGroup: 1,
            spaceBetween: 20,
            centeredSlides: false,

        },
        '760': {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 20,
            centeredSlides: false,

        },
        '570': {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 20,
            centeredSlides: false,

        },
        '320': {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 5,
            centeredSlides: false,
        },
    },
});



let popularModelsSwiper = new Swiper(".popular-models__slider", {
    slidesPerView: 3,
    spaceBetween: 40,
    loop: true,
    centeredSlides: true,
    pagination: {
        el: ".popular-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".popular-button-next",
        prevEl: ".popular-button-prev",
    },
    breakpoints: {
        '1399': {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 40,
        },
        '1020': {
            slidesPerView: 4,
            slidesPerGroup: 1,
            spaceBetween: 20,
            centeredSlides: false,

        },
        '760': {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 20,
            centeredSlides: false,

        },
        '570': {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 20,
            centeredSlides: false,

        },
        '320': {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 5,
            centeredSlides: false,
        },
    },
});


let brandNewsSwiper = new Swiper(".brand-news-slider", {
    slidesPerView: 3,
    spaceBetween: 40,
    loop: true,
    centeredSlides: true,
    pagination: {
        el: ".brand-news-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".brand-news-button-next",
        prevEl: ".brand-news-button-prev",
    },
    breakpoints: {
        '1399': {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 40,
        },
        '1020': {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 20,
            centeredSlides: false,

        },
        '760': {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 20,
            centeredSlides: false,

        },
        '570': {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 20,
            centeredSlides: false,

        },
        '320': {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 20,
            centeredSlides: false,
        },
    },
});











let usedSwiper = new Swiper(".used-car-slider", {
    slidesPerView: 1,
    spaceBetween: 4,
    loop: true,
    navigation: {
        nextEl: ".config-available-next",
        prevEl: ".config-available-prev",
    },
});


let reasonsSwiper = new Swiper(".main-reasons-slider", {
    slidesPerView: 2,
    spaceBetween: 20,
});









let sliderss = document.querySelectorAll('.best-vin-checked-slid'),
    prevArrow = document.querySelectorAll('.best-vin-pagination');
sliderss.forEach((slider, idx) => {
    let asswiper = new Swiper(slider, {
        slidesPerView: 1,
        spaceBetween: 4,
        pagination: {
            el: prevArrow[idx],
            clickable: true,
        },
    })
})

