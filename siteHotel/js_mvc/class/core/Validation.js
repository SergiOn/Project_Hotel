/**
 * Created by Sergio on 04.08.2016.
 */

function Validation() {
}

Validation.prototype.validForm = function (name, data) {
    var validObj = {
        'email': /^[\w\-.\+0-9]+@\w+\..{1,7}$/i,
        'pass': /^[a-z0-9]+$/,

        'tel': /^\+?[\-_\s]?\d?[\-_\s]?\d?[\-_\s]?\(?(\d{3})\)?[\-_\s]?(\d{3})[\-_\s]?(\d{2})[\-_\s]?(\d{2})$/
    };
    return validObj[name].test(data);
};

Validation.prototype.validReplace = function (name, data) {
    // var validObj = {
    //     'email': /^[\w\-.\+0-9]+@\w+\..{1,7}$/i,
    //     'pass': /^[a-z0-9]+$/
    // };
    // return validObj[name].test(data);



    /*
    * var str = '+380969774491';

     var pattern = /^\+?[\-_\s]?\d?[\-_\s]?\d?[\-_\s]?\(?(\d{3})\)?[\-_\s]?(\d{3})[\-_\s]?(\d{2})[\-_\s]?(\d{2})$/;
     //result = str.match(pattern);
     //pattern.test(str);
     str.replace(pattern, "+38 ($1) $2 $3 $4");

     */


};