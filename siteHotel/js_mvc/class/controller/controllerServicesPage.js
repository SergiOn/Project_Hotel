/**
 * Created by Sergio on 09.08.2016.
 */

function controllerServicesPage(controllerPage) {
    this.controllerPage = controllerPage;
    this.view = new viewServicesPage();
}

controllerServicesPage.prototype.controllerInit = function (methodName) {
    this.change_Banner_Reserve();
    this.block2_Services(methodName);
    this.block2_Services_Overview();
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

controllerServicesPage.prototype.block2_Services_Overview = function () {

};
