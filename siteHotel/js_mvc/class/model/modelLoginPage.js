/**
 * Created by Sergio on 03.08.2016.
 */

function modelLoginPage() {
    Ajax.call(this);
}
modelLoginPage.prototype = Object.create(Ajax.prototype);
modelLoginPage.prototype.constructor = modelLoginPage;


modelLoginPage.prototype.loginUser = function (url, data, toContrroller) {
    this.ajaxSendPost(url, data, function (answer) {
        var dataFile = JSON.parse(answer);
        var wrapper = document.createElement("div");
        wrapper.innerHTML = dataFile;
        var element = wrapper.children[0];
        toContrroller(element);
    });
};