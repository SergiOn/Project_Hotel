/**
 * Created by Sergio on 04.08.2016.
 */

function Validation() {
}

Validation.prototype.validForm = function (name, data) {
    var validObj = {
        'email': /^[\w\-.\+0-9]+@\w+\..{1,7}$/i
    };
    return validObj[name].test(data);
};

var valM = new Validation();
console.log(valM.validForm('email', 'o-n@gmail.com'));