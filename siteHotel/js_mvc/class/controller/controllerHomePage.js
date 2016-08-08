/**
 * Created by Sergio on 07.08.2016.
 */

function controllerHomePage(controllerPage) {
    this.controllerPage = controllerPage;
    this.view = new viewHomePage();
}


controllerHomePage.prototype.controllerInit = function () {
    this.block1_ArrowSlider();
    this.block1_Slider_changeBanner();
    this.block1_Slider_changeBannerImg();
};


controllerHomePage.prototype.block1_ArrowSlider = function () {
    var self = this,
        figureActive,
        figurePrev,
        figureNext,
        figureImg,
        parentFigure,
        remove,
        insertBefore;

    document.getElementById('block-1_home_arrow-slider-l').addEventListener('click', function () {
        figureActive = document.querySelector('figure.active');
        figureActive.classList.remove('active');

        if (figureActive.previousElementSibling !== null) {
            figurePrev = figureActive.previousElementSibling;
        } else {
            figurePrev = figureActive.parentElement.lastElementChild;
        }
        figurePrev.classList.add('active');
        figureImg = figurePrev.getElementsByTagName('img')[0].src;
        self.block1_Slider(figureImg);

        if (figurePrev.getBoundingClientRect().bottom > figurePrev.parentElement.getBoundingClientRect().bottom + 10) {
            parentFigure = document.querySelector('.block-1_home_banner-slider_img');
            remove = parentFigure.lastElementChild;
            insertBefore = parentFigure.firstElementChild;
            self.view.block1_Slider_changeBannerImg(parentFigure, remove, insertBefore);
        }
    });
    document.getElementById('block-1_home_arrow-slider-r').addEventListener('click', function () {
        figureActive = document.querySelector('figure.active');
        figureActive.classList.remove('active');

        if (figureActive.nextElementSibling !== null) {
            figureNext = figureActive.nextElementSibling;
        } else {
            figureNext = figureActive.parentElement.firstElementChild;
        }
        figureNext.classList.add('active');
        figureImg = figureNext.getElementsByTagName('img')[0].src;
        self.block1_Slider(figureImg);

        if (figureNext.getBoundingClientRect().bottom > figureNext.parentElement.getBoundingClientRect().bottom + 10) {
            parentFigure = document.querySelector('.block-1_home_banner-slider_img');
            remove = parentFigure.firstElementChild;
            insertBefore = parentFigure.lastElementChild;
            self.view.block1_Slider_changeBannerImg(parentFigure, remove, insertBefore);
        }
    });
    document.querySelector('.block-1_home_banner-slider_img').addEventListener('click', function (event) {
        if (event.target.tagName !== 'IMG') return;
        figureActive = document.querySelector('figure.active');
        figureActive.classList.remove('active');
        parentFigure = event.target.closest('figure');
        parentFigure.classList.add('active');
        figureImg = event.target.src;
        self.block1_Slider(figureImg);
    });
};

controllerHomePage.prototype.block1_Slider = function (figureImg) {
    var bl1_home = document.querySelector('.block-1_home'),
        bl1_homeStyle = getComputedStyle(bl1_home),
        figureImgSrc,
        imgFirstPath,
        imgLastPath,
        backgroundUrl;

    figureImgSrc = figureImg.replace(/(.+)(?:-small)(.+)$/, "$1$2");
    imgFirstPath = bl1_homeStyle.backgroundImage.match(/(.*url\()(?:.*)(.+)/)[1];
    imgLastPath = bl1_homeStyle.backgroundImage.match(/(.*url\()(?:.*)(.+)/)[2];
    backgroundUrl = imgFirstPath + figureImgSrc + imgLastPath;
    this.view.block1_Slider(backgroundUrl);
};

controllerHomePage.prototype.block1_Slider_changeBanner = function () {
    var self = this,
        active,
        hidden;
    document.getElementById('banner-slider-active').addEventListener('click', function () {
        active = document.querySelector('.block-1_home_banner-slider-active');
        hidden = document.querySelector('.block-1_home_banner-slider-noactive');
        self.view.block1_Slider_changeBanner(active, hidden);
    });

    document.getElementById('block-1_home_banner-slider-close').addEventListener('click', function () {
        active = document.querySelector('.block-1_home_banner-slider-noactive');
        hidden = document.querySelector('.block-1_home_banner-slider-active');
        self.view.block1_Slider_changeBanner(active, hidden);
    });
};

controllerHomePage.prototype.block1_Slider_changeBannerImg = function () {
    var self = this,
        parentFigure,
        remove,
        insertBefore,
        buttonEl;

    document.querySelector('.block-1_home_banner-slider-active').addEventListener('click', function (event) {
        buttonEl = event.target.closest('button');

        if (!buttonEl || buttonEl.tagName !== 'BUTTON') return;
        parentFigure = document.querySelector('.block-1_home_banner-slider_img');

        if (buttonEl.id === 'block-1_home_banner-slider-l') {
            remove = parentFigure.lastElementChild;
            insertBefore = parentFigure.firstElementChild;
            self.view.block1_Slider_changeBannerImg(parentFigure, remove, insertBefore);
        }
        if (event.target.closest('button').id === 'block-1_home_banner-slider-r') {
            remove = parentFigure.firstElementChild;
            insertBefore = parentFigure.lastElementChild;
            self.view.block1_Slider_changeBannerImg(parentFigure, remove, insertBefore);
        }
    });
};












