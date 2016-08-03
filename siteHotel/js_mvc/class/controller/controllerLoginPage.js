/**
 * Created by Sergio on 03.08.2016.
 */

function controllerLoginPage() {
    this.model = new modelLoginPage();
    this.view = new viewLoginPage();
}

controllerLoginPage.prototype.controllerInit = function () {
    this.loginUser();
};

controllerLoginPage.prototype.loginUser = function () {
    var self = this;
    document.getElementById('login-close').addEventListener('click', function () {
        history.back();
    });
    document.querySelector('form').addEventListener('submit', function (event) {
        event.preventDefault();
    });

    var email = document.getElementById('login-email'),
        pass = document.getElementById('login-pass'),
        form = {
        'email': email.value,
        'pass': pass.value
    };

    document.getElementById('login-submit').addEventListener('click', function () {
        console.log(form);
    });

  //  api/user/login
};
// controllerLoginPage.prototype.loginUserAnswer = function (answer) {
//
// };







// var contrU = new controllerLoginPage();
// contrU.loginUser();
// contrU.model.loginUser();
// contrU.view.loginUser();