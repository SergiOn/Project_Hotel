/**
 * Created by Sergio on 03.08.2016.
 */

function modelUserPage() {
    Ajax.call(this);
}
modelUserPage.prototype = Object.create(Ajax.prototype);
modelUserPage.prototype.constructor = modelUserPage;


modelUserPage.prototype.loginUser = function (url, data, toContrroller) {
    this.ajaxSendPost(url, data, function (answer) {
        var answer = JSON.parse(answer);
        toContrroller(answer);
    });
};

modelUserPage.prototype.logoutUser = function (url, data) {
    this.ajaxSendPost(url, data, function () {
    });
};