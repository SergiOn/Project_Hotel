/**
 * Created by Sergio on 07.08.2016.
 */

function controllerHomePage(controllerPage) {
    this.controllerPage = controllerPage;
    // this.model = new modelHomePage();
    // this.view = new viewHomePage();
    Validation.call(this);
}
controllerHomePage.prototype = Object.create(Validation.prototype);
controllerHomePage.prototype.constructor = controllerHomePage;


controllerHomePage.prototype.controllerInit = function (methodName) {
    console.log(this.controllerPage._historyPosition);
    console.log(methodName);

};

controllerHomePage.prototype.controllerInit = function (methodName) {
    this.block1_Slider();


    // console.log(this.controllerPage._historyPosition);
    // console.log(methodName);

    /*
    * var str = '1-slider-small.jpg';

     var pattern = /.*(\d-slider)(?:-small)(\..+)$/;
     //result = str.match(pattern);
     //pattern.test(str);
     str.replace(pattern, "$1$2");
    *
    * "1-slider.jpg"
    * */

};

controllerHomePage.prototype.block1_Slider = function () {
    var bl1_home = document.querySelector('.block-1_home'),
        bl1_homeStyle = getComputedStyle(bl1_home),
        figureAll,
        figureActive,
        figurePrev,
        figureNext,
        figureImg,
        figureImgSrc,
        imgFirstPath,
        imgLastPath,
        parentFigure;

    document.getElementById('banner-slider-active').addEventListener('click', function () {
        document.querySelector('.block-1_home_banner-slider-active').classList.remove('hidden');
        document.querySelector('.block-1_home_banner-slider-noactive').classList.add('hidden');
    });
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
        changeImg(figureImg);

        if (figurePrev.getBoundingClientRect().bottom > figurePrev.parentElement.getBoundingClientRect().bottom + 10) {
            parentFigure = document.querySelector('.block-1_home_banner-slider_img');
            parentFigure.insertBefore(parentFigure.lastElementChild, parentFigure.firstElementChild);
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
        changeImg(figureImg);

        if (figureNext.getBoundingClientRect().bottom > figureNext.parentElement.getBoundingClientRect().bottom + 10) {
            parentFigure = document.querySelector('.block-1_home_banner-slider_img');
            parentFigure.insertBefore(parentFigure.firstElementChild, parentFigure.lastElementChild);
        }
    });
    document.querySelector('.block-1_home_banner-slider_img').addEventListener('click', function (event) {
        if (event.target.tagName !== 'IMG') return;
        figureActive = document.querySelector('figure.active');
        figureActive.classList.remove('active');
        parentFigure = event.target.closest('figure');
        parentFigure.classList.add('active');
        figureImg = event.target.src;
        changeImg(figureImg);
    });
    function changeImg(figureImg) {
        figureImgSrc = figureImg.replace(/(.+)(?:-small)(.+)$/, "$1$2");
        imgFirstPath = bl1_homeStyle.backgroundImage.match(/(.*url\()(?:.*)(.+)/)[1];
        imgLastPath = bl1_homeStyle.backgroundImage.match(/(.*url\()(?:.*)(.+)/)[2];
        bl1_home.style.backgroundImage = imgFirstPath + figureImgSrc + imgLastPath;
    }
    document.querySelector('.block-1_home_banner-slider-active').addEventListener('click', function (event) {
        if (!event.target.closest('button') || event.target.closest('button').tagName !== 'BUTTON') return;

        if (event.target.closest('button').id === 'block-1_home_banner-slider-close') {
            document.querySelector('.block-1_home_banner-slider-active').classList.add('hidden');
            document.querySelector('.block-1_home_banner-slider-noactive').classList.remove('hidden');
        }

        if (event.target.closest('button').id === 'block-1_home_banner-slider-l') {
            parentFigure = document.querySelector('.block-1_home_banner-slider_img');
            parentFigure.insertBefore(parentFigure.lastElementChild, parentFigure.firstElementChild);
        }
        if (event.target.closest('button').id === 'block-1_home_banner-slider-r') {
            parentFigure = document.querySelector('.block-1_home_banner-slider_img');
            parentFigure.insertBefore(parentFigure.firstElementChild, parentFigure.lastElementChild);
        }
    });
};



