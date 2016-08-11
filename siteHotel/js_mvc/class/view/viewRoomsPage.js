/**
 * Created by Sergio on 11.08.2016.
 */

function viewRoomsPage() {

}

viewRoomsPage.prototype.start = function (innerIn, innerOut, dataIn, dataOut) {
    document.querySelector('#room_cal-in span').innerHTML = innerIn;
    document.querySelector('#room_cal-out span').innerHTML = innerOut;
    document.querySelector('#room_cal-in span').dataset.timeIn = dataIn;
    document.querySelector('#room_cal-out span').dataset.timeOut = dataOut;
};
