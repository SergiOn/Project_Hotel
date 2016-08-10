/**
 * Created by Sergio on 10.08.2016.
 */

function controllerRoomsPage(controllerPage) {
    this.controllerPage = controllerPage;
    this.model = new modelRoomsPage();
    this.view = new viewRoomsPage();
}


controllerRoomsPage.prototype.controllerInit = function () {
    console.log('rooms');

    document.getElementById('content_rooms').addEventListener('click', function () {
        console.log('aaAAAAaaaa');
    });

    console.log(this.controllerPage.calendarRoomsData());
};

// controllerRoomsPage.prototype.rooms = function () {
//
// };
