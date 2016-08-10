/**
 * Created by Sergio on 11.08.2016.
 */

function modelRoomsPage() {
    Ajax.call(this);
}
modelRoomsPage.prototype = Object.create(Ajax.prototype);
modelRoomsPage.prototype.constructor = modelRoomsPage;


// modelRoomsPage.prototype.rooms = function (url, data, toContrroller) {
//     this.ajaxSendGet(url, data, function (answer) {
//         var answer = JSON.parse(answer);
//         toContrroller(answer);
//     });
//
// };