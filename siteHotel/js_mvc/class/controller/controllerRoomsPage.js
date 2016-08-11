/**
 * Created by Sergio on 10.08.2016.
 */

function controllerRoomsPage(controllerPage) {
    this.controllerPage = controllerPage;
    this.model = new modelRoomsPage();
    this.view = new viewRoomsPage();
}


controllerRoomsPage.prototype.controllerInit = function () {
    this.start();
    this.startCalendar();
};

controllerRoomsPage.prototype.start = function () {
    var dateNow = new Date(),
        dayIn,
        monthIn,
        yearIn,
        dayOut,
        monthOut,
        yearOut,
        objData;

    if (!this.controllerPage.calendarRoomsData()) {
        dayIn = dateNow.getDate();
        monthIn = dateNow.getMonth()+1;
        yearIn = dateNow.getFullYear();
        dayOut = dateNow.getDate()+1;
        monthOut = dateNow.getMonth()+1;
        yearOut = dateNow.getFullYear();
    } else {
        objData = this.controllerPage.calendarRoomsData();
        dayIn = objData['dayIn'];
        monthIn = objData['monthIn'];
        yearIn = objData['yearIn'];
        dayOut = objData['dayOut'];
        monthOut = objData['monthOut'];
        yearOut = objData['yearOut'];
    }
    var monthNameObj = ['Января', 'Февраля', 'Марта', 'Апреля', 'Майя', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'],
        monthNameIn = monthNameObj[monthIn-1],
        monthNameOut = monthNameObj[monthOut-1],
        monIn = String(monthIn).length > 1 ? monthIn : ''+0+monthIn,
        monOut = String(monthOut).length > 1 ? monthOut : ''+0+monthOut;

    var innerIn = dayIn+' '+monthNameIn+' '+yearIn,
        innerOut = dayOut+' '+monthNameOut+' '+yearOut,
        dataIn = dayIn+'-'+monIn+'-'+yearIn,
        dataOut = dayOut+'-'+monOut+'-'+yearOut;

    this.view.start(innerIn, innerOut, dataIn, dataOut);
};

controllerRoomsPage.prototype.startCalendar = function () {
    var dayIn,
        monthIn,
        yearIn,
        countMoIn = 0,
        dayOut,
        monthOut,
        yearOut,
        countMoOut = 0,
        objData;





};