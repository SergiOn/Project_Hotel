/**
 * Created by Sergio on 09.08.2016.
 */

function controllerServicesPage(controllerPage) {
    this.controllerPage = controllerPage;
}

controllerServicesPage.prototype.controllerInit = function (methodName) {
    this.change_Banner_Reserve();
    this.block2_Services(methodName);
    this.block2_Services_Overview_Spa();
    this.block2_Services_Overview_Restaurant();
};

controllerServicesPage.prototype.change_Banner_Reserve = function () {
    var bannerReserve = document.querySelector('.block-1_services_banner-reserve');
    document.getElementById('reserve-show').addEventListener('click', function () {
        bannerReserve.classList.toggle("active");
    });
};

controllerServicesPage.prototype.block2_Services = function (methodName) {
    var aEl,
        addId;

    if (methodName === 'services' || methodName === 'services-overview') {
        aEl = document.querySelector('a[href="#overview"]');
        document.querySelector('.block-2_services_wrapper').id = 'overview';
    } else if (methodName === 'services-comfort') {
        aEl = document.querySelector('a[href="#comfort"]');
        document.querySelector('.block-2_services_wrapper').id = 'comfort';
    } else if (methodName === 'services-rules') {
        aEl = document.querySelector('a[href="#rules"]');
        document.querySelector('.block-2_services_wrapper').id = 'rules';
    }
    if (!aEl.classList.contains('services_key-active')) {
        document.querySelector('a.services_key-active').classList.remove('services_key-active');
        aEl.classList.add('services_key-active');
    }
    document.getElementById('block-2_services_key').addEventListener('click', function (event) {
        event.preventDefault();
        aEl = event.target;
        if (aEl.classList.contains('services_key-active')) return;

        document.querySelector('a.services_key-active').classList.remove('services_key-active');
        aEl.classList.add('services_key-active');
        addId = event.target.getAttribute('href').slice(1);
        document.querySelector('.block-2_services_wrapper').id = addId;
    });

};

controllerServicesPage.prototype.block2_Services_Overview_Spa = function () {
    document.querySelector('.block-2_services-1_spa').addEventListener('click', function (event) {
        if (!event.currentTarget.classList.contains('active')) {
            event.currentTarget.classList.add('active');
        }
    });
    document.querySelector('.spa-active_close').addEventListener('click', function () {
        document.querySelector('.block-2_services-1_spa').classList.remove('active');
    });
    var figure = document.querySelector('.block-2_services-1_spa-active figure'),
        imgActive;
    document.querySelector('.spa-img_next').addEventListener('click', function () {
        if ( event.currentTarget.classList.contains('no-key_bg')) return;

        imgActive = figure.querySelector('img.active');
        if (imgActive.nextElementSibling) {
            document.querySelector('.spa-img_prev').classList.remove('no-key_bg');
            imgActive.classList.remove('active');
            imgActive.nextElementSibling.classList.add('active');
        }
        imgActive = figure.querySelector('img.active');
        if (!imgActive.nextElementSibling) {
            event.currentTarget.classList.add('no-key_bg');
        }
    });
    document.querySelector('.spa-img_prev').addEventListener('click', function () {
        if ( event.currentTarget.classList.contains('no-key_bg')) return;

        imgActive = figure.querySelector('img.active');
        if (imgActive.previousElementSibling) {
            document.querySelector('.spa-img_next').classList.remove('no-key_bg');
            imgActive.classList.remove('active');
            imgActive.previousElementSibling.classList.add('active');
        }
        imgActive = figure.querySelector('img.active');
        if (!imgActive.previousElementSibling) {
            event.currentTarget.classList.add('no-key_bg');
        }
    });
};

controllerServicesPage.prototype.block2_Services_Overview_Restaurant = function () {
    document.querySelector('.block-2_services-1_restaurant').addEventListener('click', function (event) {
        if (!event.currentTarget.classList.contains('active')) {
            event.currentTarget.classList.add('active');
        }
    });
    document.querySelector('.restaurant-active_close').addEventListener('click', function () {
        document.querySelector('.block-2_services-1_restaurant').classList.remove('active');
    });
    var button,
        numberBlock;
    function changeBlock(event) {
        button = event.target.closest('button');
        if (button && !button.matches('.no-key_bg')) {
            numberBlock = button.dataset.restaurantBlock;
            document.querySelector('.block-2_services-1_restaurant-active').dataset.restaurantBlock = numberBlock;
        }
    }
    Array.prototype.forEach.call(document.querySelectorAll('.restaurant-active_l_key'), function(element) {
        element.addEventListener('click', changeBlock);
    });
    // document.querySelector('.restaurant_block-1 .restaurant-active_l_key').addEventListener('click', changeBlock);
    // document.querySelector('.restaurant_block-2 .restaurant-active_l_key').addEventListener('click', changeBlock);
    // document.querySelector('.restaurant_block-3 .restaurant-active_l_key').addEventListener('click', changeBlock);

    var figure = document.querySelector('.restaurant_block-1 figure'),
        imgActive;
    document.querySelector('.restaurant-img_next').addEventListener('click', function () {
        if ( event.currentTarget.classList.contains('no-key_bg')) return;

        imgActive = figure.querySelector('img.active');
        if (imgActive.nextElementSibling) {
            document.querySelector('.restaurant-img_prev').classList.remove('no-key_bg');
            imgActive.classList.remove('active');
            imgActive.nextElementSibling.classList.add('active');
        }
        imgActive = figure.querySelector('img.active');
        if (!imgActive.nextElementSibling) {
            event.currentTarget.classList.add('no-key_bg');
        }
    });
    document.querySelector('.restaurant-img_prev').addEventListener('click', function () {
        if ( event.currentTarget.classList.contains('no-key_bg')) return;

        imgActive = figure.querySelector('img.active');
        if (imgActive.previousElementSibling) {
            document.querySelector('.restaurant-img_next').classList.remove('no-key_bg');
            imgActive.classList.remove('active');
            imgActive.previousElementSibling.classList.add('active');
        }
        imgActive = figure.querySelector('img.active');
        if (!imgActive.previousElementSibling) {
            event.currentTarget.classList.add('no-key_bg');
        }
    });
};