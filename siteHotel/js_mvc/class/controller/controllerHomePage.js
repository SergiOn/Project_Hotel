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


controllerHomePage.prototype.controllerInit = function () {

    // console.log(this.controllerPage);

};
