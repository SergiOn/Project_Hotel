/**
 * Created by Sergio on 03.08.2016.
 */

function controllerUserPage() {
    this.model = new modelUserPage();
    this.view = new viewUserPage();
    Validation.call(this);
}
controllerUserPage.prototype = Object.create(Validation.prototype);
controllerUserPage.prototype.constructor = controllerUserPage;


controllerUserPage.prototype.controllerInit = function (methodName) {
    if (methodName === 'login') {
        this.loginUser();
    }
    if (methodName === 'registration') {
        this.registrationUser();
    }
    if (methodName === 'log-out') {
        this.logoutUser();
    }
};

controllerUserPage.prototype.loginUser = function () {
    var self = this;
    document.getElementById('login-close').addEventListener('click', function () {
        console.log('back');
        history.back();
    });
    var form = document.querySelector('form');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
    });

    var parentClass,
        formObjJson,
        eventValue,
        eventName,
        formObj = {};

    form.addEventListener('focus', function (event) {
        parentClass = event.target.parentElement.classList;
        if (parentClass.contains("novalid") ) {
            parentClass.remove('novalid');
        }
    }, true);

    form.addEventListener('change', function (event) {
        parentClass = event.target.parentElement.classList;
        eventValue = event.target.value;
        eventName = event.target.name;
        if (event.target.type === 'submit') return;
        if (self.validForm(eventName, eventValue)) {
            formObj[eventName] = eventValue;
        } else {
            parentClass.add('novalid');
        }
    });

    document.getElementById('login-submit').addEventListener('click', function () {
        console.log('click');
        // if (form.querySelector('div.novalid')) return;
        // formObjJson = JSON.stringify(formObj);
        // console.log(formObj);
        // self.model.loginUser('api/user/login', 'userLogin='+formObjJson, self.loginUserAnswer.bind(self));
    });
};

controllerUserPage.prototype.loginUserAnswer = function (answer) {
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
    this.view.loginUser(answer[0]);
};


controllerUserPage.prototype.logoutUser = function () {
    this.model.logoutUser('api/user/logout');
    this.view.logoutUser();
};


controllerUserPage.prototype.registrationUser = function () {
    var self = this;
    document.getElementById('reg-close').addEventListener('click', function () {
        history.back();
    });
    var form = document.querySelector('form');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
    });

    var parentClass,
        formObjJson,
        eventValue,
        eventName,
        formObj = {};

    form.addEventListener('focus', function (event) {
        if (event.target.type === 'submit') return;
        parentClass = event.target.parentElement.classList;
        if (parentClass.contains("novalid") ) {
            parentClass.remove('novalid');
        }
    }, true);

    form.addEventListener('change', function (event) {
        if (event.target.type === 'submit') return;
        parentClass = event.target.parentElement.classList;
        eventValue = event.target.value;
        eventName = event.target.name;
        if (self.validForm(eventName, eventValue)) {
            if (eventName === 'tel') {
                formObj[eventName] = self.validReplace(eventName, eventValue)
            } else {
                formObj[eventName] = eventValue;
            }
        } else {
            parentClass.add('novalid');
        }
    });

    document.getElementById('reg-submit').addEventListener('click', function () {
        if (form.querySelector('div.novalid')) return;
        console.log(formObj);
        formObjJson = encodeURIComponent(JSON.stringify(formObj));
        self.model.registrationUser('api/user/registration', 'userRegistration='+formObjJson, self.registrationUserAnswer.bind(self));
    });
};

controllerUserPage.prototype.registrationUserAnswer = function (answer) {

    console.log(answer);

    // var formDiv = document.body.querySelectorAll('form > div');
    // if (!answer[0]) {
    //     for (var i = 0; i < formDiv.length; i++) {
    //         formDiv[i].classList.add('novalid');
    //         (function (i) {
    //             setTimeout(function () {
    //                 formDiv[i].classList.remove('novalid');
    //             }, 2000);
    //         })(i);
    //     }
    //     return;
    // }
    // this.view.registrationUser(answer[0]);
};