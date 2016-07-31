/**
 * Created by Sergio on 31.07.2016.
 */

function modelPages() {
    Ajax.call(this);
}
modelPages.prototype = Object.create(Ajax.prototype);
modelPages.prototype.constructor = modelPages;


modelPages.prototype.thePage = function (url, toView) {
    this.ajaxSendGet(url, null, function (answer) {
        var dataFile = JSON.parse(answer);
        var wrapper = document.createElement("div");
        wrapper.innerHTML = dataFile;
        var element = wrapper.children[0];
        toView(element);
    });
};


