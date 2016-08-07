/**
 * Created by Sergio on 04.08.2016.
 */

function Validation() {
}

Validation.prototype.validForm = function (name, value) {
    var validObj = {
        'email': /^[\w\-.0-9]+@[\w\-.0-9]+\.[\w\-.0-9]{1,7}$/i,
        'pass': /^[a-z0-9]+$/i,
        'name': /[a-zа-яЁё0-9]/i,
        'l_name': /[a-zа-яЁё\-\s_0-9]/i,
        'tel': /^\+?[\-_\s]?\d?[\-_\s]?\d?[\-_\s]?\(?(\d{3})\)?[\-_\s]?(\d{3})[\-_\s]?(\d{2})[\-_\s]?(\d{2})$/
    };
    return validObj[name].test(value);
};

Validation.prototype.validReplace = function (name, value) {
    var validObj = {
        'tel': /^\+?[\-_\s]?\d?[\-_\s]?\d?[\-_\s]?\(?(\d{3})\)?[\-_\s]?(\d{3})[\-_\s]?(\d{2})[\-_\s]?(\d{2})$/
    };
    var replaceObj = {
        'tel': "+38 ($1) $2 $3 $4"
    };
    return value.replace(validObj[name], replaceObj[name]);
};

