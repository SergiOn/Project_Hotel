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

