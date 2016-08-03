/**
 * Created by Sergio on 03.08.2016.
 */

function controllerLoginPage() {
    this.model = new modelLoginPage();
    this.view = new viewLoginPage();
}


controllerLoginPage.prototype.loginUser = function () {
    console.log('controller login user');
};








// var contrU = new controllerLoginPage();
// contrU.loginUser();
// contrU.model.loginUser();
// contrU.view.loginUser();