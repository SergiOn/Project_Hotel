/**
 * Created by Sergio on 03.08.2016.
 */

function modelLoginPage() {
    Ajax.call(this);
}
modelLoginPage.prototype = Object.create(Ajax.prototype);
modelLoginPage.prototype.constructor = modelLoginPage;


modelLoginPage.prototype.loginUser = function () {
    console.log('model login user');
};