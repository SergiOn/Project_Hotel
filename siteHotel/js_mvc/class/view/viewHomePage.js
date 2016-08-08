/**
 * Created by Sergio on 08.08.2016.
 */

function viewHomePage () {

}


viewHomePage.prototype.block1_Slider = function (backgroundUrl) {
    var bl1_home = document.querySelector('.block-1_home');
    bl1_home.style.backgroundImage = backgroundUrl;

};

viewHomePage.prototype.block1_Slider_changeBanner = function (active, hidden) {
    hidden.classList.add('hidden');
    active.classList.remove('hidden');
};

viewHomePage.prototype.block1_Slider_changeBannerImg = function (parentEl, remove, insertBefore) {
    parentEl.insertBefore(remove, insertBefore);
};


viewHomePage.prototype.block2_Home_hotel_Key = function (elAddCl, elRemCl, block, status) {
    if (!elAddCl.classList.contains('hotel_key-active')) {
        elAddCl.classList.add('hotel_key-active');
    }
    if (elRemCl.classList.contains('hotel_key-active')) {
        elRemCl.classList.remove('hotel_key-active');
    }
    if (status && block.classList.contains('hidden')) {
        block.classList.remove('hidden');
    } else {
        block.classList.add('hidden');
    }
};

viewHomePage.prototype.block2_Home_hotel_Rooms = function (parent, className, aActive, imgActive, divActive) {
    if (!aActive.classList.contains('active')) {
        parent.querySelector('a.active').classList.remove('active');
        aActive.classList.add('active');
    }
    if (!imgActive.classList.contains('active')) {
        parent.querySelector('img.active').classList.remove('active');
        imgActive.classList.add('active');
    }
    if (!divActive.classList.contains('active')) {
        parent.querySelector('div.active').classList.remove('active');
        divActive.classList.add('active');
    }
};
viewHomePage.prototype.block2_Home_hotel_Halls = function (parent, className, aActive, imgActive, divActive) {
    this.block2_Home_hotel_Rooms(parent, className, aActive, imgActive, divActive);
};

