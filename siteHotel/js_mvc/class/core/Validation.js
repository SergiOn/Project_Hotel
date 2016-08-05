/**
 * Created by Sergio on 04.08.2016.
 */

function Validation() {
}

Validation.prototype.validForm = function (name, data) {
    var validObj = {
        'email': /^[\w\-.\+0-9]+@\w+\..{1,7}$/i,
        'pass': /^[a-z0-9]+$/
    };
    return validObj[name].test(data);
};
