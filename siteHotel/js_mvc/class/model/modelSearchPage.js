/**
 * Created by Sergio on 09.08.2016.
 */

function modelSearchPage() {
    Ajax.call(this);
}
modelSearchPage.prototype = Object.create(Ajax.prototype);
modelSearchPage.prototype.constructor = modelSearchPage;


modelSearchPage.prototype.searchPage = function (url, data, toContrroller) {
    this.ajaxSendGet(url, data, function (answer) {
        var answer = JSON.parse(answer);
        toContrroller(answer);
    });

};