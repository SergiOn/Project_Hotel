/**
 * Created by Sergio on 30.07.2016.
 */

function controllerHome() {

}
controllerHome.prototype._arrowSlide = function () {
    var arrow_slider = document.querySelector('.block-1_home_arrow-slider');

    console.log(arrow_slider);

    var banner_slider_img_active = document.querySelector('.block-1_home_banner-slider_img figure.active');

    var banner_slider_img_prew;
    if (banner_slider_img_active.previousElementSibling === null) {
        banner_slider_img_prew = banner_slider_img_active.parentElement.lastElementChild;
    } else {
        banner_slider_img_prew = banner_slider_img_active.previousElementSibling;
    }
    banner_slider_img_prew = banner_slider_img_prew.children[1];

    var banner_slider_img_next;
    if (banner_slider_img_active.nextElementSibling === null) {
        banner_slider_img_next = banner_slider_img_active.parentElement.firstElementChild;
    } else {
        banner_slider_img_next = banner_slider_img_active.nextElementSibling;
    }
    banner_slider_img_next = banner_slider_img_next.children[1];




    console.log(banner_slider_img_active);
    console.log(banner_slider_img_prew);
    console.log(banner_slider_img_next);
};
controllerHome.prototype.init = function () {
    this._arrowSlide();
};

