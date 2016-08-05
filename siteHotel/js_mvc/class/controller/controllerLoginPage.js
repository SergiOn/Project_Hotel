/**
 * Created by Sergio on 03.08.2016.
 */

function controllerLoginPage() {
    this.model = new modelLoginPage();
    this.view = new viewLoginPage();
    Validation.call(this);
}
controllerLoginPage.prototype = Object.create(Validation.prototype);
controllerLoginPage.prototype.constructor = controllerLoginPage;

controllerLoginPage.prototype.controllerInit = function () {
    this.loginUser();
};

controllerLoginPage.prototype.loginUser = function () {
    var self = this;
    document.getElementById('login-close').addEventListener('click', function () {
        history.back();
    });
    var form = document.querySelector('form');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
    });

    var email = document.getElementById('login-email'),
        pass = document.getElementById('login-pass'),
        parentClass,
        formObjJson,
        eventValue,
        eventName;
    var formObj = {};

    form.addEventListener('focus', function (event) {
        parentClass = event.target.parentElement.classList;
        if (event.target.name === 'email' && parentClass.contains("novalid") ) {
            parentClass.remove('novalid');
        }
        if (event.target.name === 'pass' && parentClass.contains("novalid") ) {
            parentClass.remove('novalid');
        }
    }, true);

    form.addEventListener('blur', function (event) {
        parentClass = event.target.parentElement.classList;
        eventValue = event.target.value;
        eventName = event.target.name;
        if (event.target.type === 'submit') return;
        if (self.validForm(eventName, eventValue)) {
            formObj[eventName] = event.target.value;
        } else {
            parentClass.add('novalid');
        }
    }, true);

    document.getElementById('login-submit').addEventListener('click', function () {
        if (form.querySelector('div.novalid')) return;
        formObjJson = JSON.stringify(formObj);
        self.model.loginUser('api/user/login', 'userLogin='+formObjJson, self.loginUserAnswer.bind(self));
    });
};

controllerLoginPage.prototype.loginUserAnswer = function (answer) {
    var formDiv = document.body.querySelectorAll('form > div');
    if (!answer[0]) {
        for (var i = 0; i < formDiv.length; i++) {
            formDiv[i].classList.add('novalid');
            (function (i) {
                setTimeout(function () {
                    formDiv[i].classList.remove('novalid');
                }, 2000);
            })(i);
        }
        return;
    }
    console.log(answer[0]);
};