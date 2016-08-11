/**
 * Created by Sergio on 10.08.2016.
 */

function controllerRoomsPage(controllerPage) {
    this.controllerPage = controllerPage;
    this.model = new modelRoomsPage();
    this.view = new viewRoomsPage();

    this.reservObject = {};
}


controllerRoomsPage.prototype.controllerInit = function () {
    this.start();
    this.startCalendar();
    this.changeSearch();
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
        dataIn = yearIn+'-'+monIn+'-'+dayIn,
        dataOut = yearOut+'-'+monOut+'-'+dayOut;

    this.view.start(innerIn, innerOut, dataIn, dataOut);
};

controllerRoomsPage.prototype.startCalendar = function () {
    var self = this,
        monthNameObj = ['Января', 'Февраля', 'Марта', 'Апреля', 'Майя', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'],
        monthNameIn, monthNameOut,
        div, elTarg, mon, day, calendar,
        dayIn, monthIn, yearIn, countMoIn = 0, innerIn, dataIn,
        dayOut, monthOut, yearOut, countMoOut = 0, innerOut, dataOut;

    document.querySelector('.room_cal-in').addEventListener('click', function (event) {
        div = event.currentTarget;
        elTarg = event.target;

        if (!div.querySelector('table.calendar')) {
            calendar = self.controllerPage.calendarRooms(dayIn, monthIn, yearIn, countMoIn);
            div.appendChild(calendar);
        } else if (div.querySelector('table.calendar') && elTarg.closest('button')) {
            div.removeChild(calendar);
            return;
        }

        if (elTarg.matches('td:not(.no)') && !elTarg.closest('thead')) {
            dayIn = parseInt(elTarg.innerHTML);
            monthIn = parseInt(div.querySelector('.month_cal').dataset.month);
            yearIn = parseInt(div.querySelector('.month_cal').dataset.year);
            countMoIn = 0;
            day = String(dayIn).length > 1 ? dayIn : '0'+dayIn;
            mon = String(monthIn).length > 1 ? monthIn : '0'+monthIn;

            monthNameIn = monthNameObj[monthIn-1];
            innerIn = day+' '+monthNameIn+' '+yearIn;
            dataIn = yearIn+'-'+mon+'-'+day;

            self.view.startCalendar(innerIn, false, dataIn, false);
            div.removeChild(calendar);
        } else if (elTarg.closest('.prev_cal')) {
            countMoIn -= 1;
            div.removeChild(calendar);
            calendar = self.controllerPage.calendarRooms(dayIn, monthIn, yearIn, countMoIn);
            div.appendChild(calendar);
        } else if (elTarg.closest('.next_cal')) {
            countMoIn += 1;
            div.removeChild(calendar);
            calendar = self.controllerPage.calendarRooms(dayIn, monthIn, yearIn, countMoIn);
            div.appendChild(calendar);
        }
    });

    document.querySelector('.room_cal-out').addEventListener('click', function (event) {
        div = event.currentTarget;
        elTarg = event.target;

        if (!div.querySelector('table.calendar')) {
            calendar = self.controllerPage.calendarRooms(dayOut, monthOut, yearOut, countMoOut);
            div.appendChild(calendar);
        } else if (div.querySelector('table.calendar') && elTarg.closest('button')) {
            div.removeChild(calendar);
            return;
        }

        if (elTarg.matches('td:not(.no)') && !elTarg.closest('thead')) {
            dayOut = parseInt(elTarg.innerHTML);
            monthOut = parseInt(div.querySelector('.month_cal').dataset.month);
            yearOut = parseInt(div.querySelector('.month_cal').dataset.year);
            countMoOut = 0;
            day = String(dayOut).length > 1 ? dayOut : '0'+dayOut;
            mon = String(monthOut).length > 1 ? monthOut : '0'+monthOut;

            monthNameOut = monthNameObj[monthOut-1];
            innerOut = day+' '+monthNameOut+' '+yearOut;
            dataOut = yearOut+'-'+mon+'-'+day;

            self.view.startCalendar(false, innerOut, false, dataOut);
            div.removeChild(calendar);
        } else if (elTarg.closest('.prev_cal')) {
            countMoOut -= 1;
            div.removeChild(calendar);
            calendar = self.controllerPage.calendarRooms(dayOut, monthOut, yearOut, countMoOut);
            div.appendChild(calendar);
        } else if (elTarg.closest('.next_cal')) {
            countMoOut += 1;
            div.removeChild(calendar);
            calendar = self.controllerPage.calendarRooms(dayOut, monthOut, yearOut, countMoOut);
            div.appendChild(calendar);
        }
    });
};


controllerRoomsPage.prototype.changeSearch = function () {
    var self = this,
        el,
        calendar,
        section = document.querySelector('.block-1_rooms_top'),
        timeIn = document.querySelector('#room_cal-in span').dataset.timeIn,
        timeOut = document.querySelector('#room_cal-out span').dataset.timeOut,
        input = document.querySelectorAll('#rooms_sort-block input'),
        selectSteps = document.querySelector('#rooms_sort-block select[name="steps"]'),
        selectCount = document.querySelector('#rooms_sort-block select[name="count"]');

    this.reservObject['page'] = 1;
    this.reservObject['timeIn'] = timeIn;
    this.reservObject['timeOut'] = timeOut;

    for (var key in input) if (input.hasOwnProperty(key)) {
        this.reservObject[input[key].name] = Number(input[key].checked);
    }
    this.reservObject[selectSteps.name] = selectSteps.value;
    this.reservObject[selectCount.name] = selectCount.value;

    // запустить ajax
    console.log(this.reservObject);


    document.getElementById('rooms_sort-block').addEventListener('change', function (event) {
        el = event.target;

        if (el.tagName === 'INPUT') {
            self.reservObject[el.name] = Number(el.checked);
        } else if (el.tagName === 'SELECT') {
            self.reservObject[el.name] = el.value;
        }
        self.reservObject['page'] = 1;

        // запустить ajax
        console.log(self.reservObject);
    });


    section.addEventListener('click', function (event) {
        calendar = this.querySelector('table.calendar');
        if (calendar) return;

        timeIn = document.querySelector('#room_cal-in span').dataset.timeIn;
        timeOut = document.querySelector('#room_cal-out span').dataset.timeOut;

        if (timeIn < timeOut) {
            self.reservObject['timeIn'] = timeIn;
            self.reservObject['timeOut'] = timeOut;
            self.reservObject['page'] = 1;

            // запустить ajax
            console.log(self.reservObject);
        }
    });
};


















