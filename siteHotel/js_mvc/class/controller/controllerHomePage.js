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
    var bl1_home = document.querySelector('.block-1_home');
    console.log(bl1_home);
    var bl1_homeStyle = getComputedStyle(bl1_home);
    console.log(bl1_homeStyle.background);
    console.log(bl1_homeStyle.backgroundImage);

    var figureActive = document.querySelector('figure.active');
    var figureActiveImg = document.querySelector('figure.active img');
    console.log(figureActive);
    console.log(figureActive.previousElementSibling);
    console.log(figureActiveImg.src);

    var pattern = /(.+)(?:-small)(.+)$/;
    //var result = figureActiveImg.src.match(pattern);
    //pattern.test(str);
    var result = figureActiveImg.src.replace(pattern, "$1$2");
    console.log(result);

};



