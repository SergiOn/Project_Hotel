/**
 * Created by Sergio on 31.07.2016.
 */

function controllerPages() {
    this.model = new modelPages();
    this.view = new viewPages();
    History.call(this);
}
controllerPages.prototype = Object.create(History.prototype);
controllerPages.prototype.constructor = controllerPages;


controllerPages.prototype.startController = function (controllerPages, nameController, methodName) {
    var controller,
        controllerNameObj = {
            'login': controllerUserPage,
            'registration': controllerUserPage,
            'log-out': controllerUserPage,
            'my_reserve': controllerUserPage,
            'home': controllerHomePage,
            'rooms': controllerRoomsPage,
            'services': controllerServicesPage,
            'search': controllerSearchPage
        };
    if (!(nameController in controllerNameObj)) return;

    if (nameController === 'log-out') {
        var controllerLogOut = new controllerNameObj[nameController]();
        controllerLogOut.controllerInit(methodName);
        return;
    }

    /* хотел очистить память от прошлого значения переменной */
    // controller = null;

    setTimeout(function () {
        // /* передаю controllerPages = self.page чтобы можно было вызывать методы controllerPages */
        controller = new controllerNameObj[nameController](controllerPages);
        controller.controllerInit(methodName);
    }, 1700);

    /*       *** mutation observe ***
     var target = document.getElementById('content');
     // создаем экземпляр MutationObserver
     var observer = new MutationObserver(function(mutations) {
     mutations.forEach(function(mutation) {
     console.log(mutation.type);
     });
     });
     // конфигурация нашего observer:
     var config = {childList: true};
     // передаем в качестве аргументов целевой элемент и его конфигурацию
     observer.observe(target, config);
     */
};

controllerPages.prototype.getTrueUser = function () {
    this.model.getTrueUser('api/user/getTrueUser', this.getTrueUserAnswer.bind(this));
};
controllerPages.prototype.getTrueUserAnswer = function (answer) {
    if (!answer) return;
    this.view.getTrueUser(answer[0]);
};

controllerPages.prototype.startPage = function (namePage) {
    this.getTrueUser();

    var aLink = document.querySelectorAll('header a[id]');
    for (var i = 0; i < aLink.length; i++) {
        aLink[i].href = aLink[i].href.replace(/(\/pages)|(\.html)/ig, "");
    }
    if (!namePage || namePage === 'home') {
        return;
    }
    var aId = 'a[id='+ namePage +']',
        aPageLink = document.getElementsByTagName('header')[0].querySelector(aId);
    if (!aPageLink || namePage === 'login' || namePage === 'registration' || namePage === 'my-reserve') {
        location.pathname = '/';
        return;
    }

    /*
    * Выключил, потому что не срабатывает контроллер home
    * усли открываю не главную страницу
    * */
    // var contentChildren = document.getElementById('content').children[0];
    // this.historyAddPage(contentChildren);

    this.changeMenu(namePage);

    var url = '/api/pages/' + namePage;
    this.model.startPage(url, this.view.startPage.bind(this.view));
};

controllerPages.prototype.thePage = function (namePage) {
    var contentChildren = document.getElementById('content').children[0];
    this.historyAddPage(contentChildren);

    var domEl = 'content_' + namePage;
    if (document.getElementById(domEl)) return;

    this.changeMenu(namePage);
    this.historyChangeUrl(namePage);

    /* открываю страницу с истории, а не делаю запросс к базе */
    /*
    * Не работает. Перенес проверку в роутинг.
    * Не работает, потому что страница не загружаеться,
    * зато startController стартует!!!!!
    * */
    // if (this.historyHasPage(domEl)) {
    //     this.view.thePage(this.historyOpenPage(domEl), 'left');
    //     console.log('historyPage');
    //     return;
    // }

    var url = '/api/pages/' + namePage;
    this.model.thePage(url, this.view.thePage.bind(this.view));
};

controllerPages.prototype.thePageHistory = function (idPage, namePage) {
    if (document.getElementById(idPage)) return;
    this.view.thePageHistory(this.historyOpenPage(idPage), 'left');
    this.changeMenu(namePage);
    this.historyChangeUrl(namePage);
    console.log('historyPage');
};

controllerPages.prototype.changeMenu = function (namePage) {
    var namePageEl = document.getElementById(namePage);
    if (document.querySelector('li.menu-active')) {
        document.querySelector('li.menu-active').classList.remove('menu-active');
    }
    if (namePageEl && namePageEl.closest('li')) {
        namePageEl.closest('li').classList.add('menu-active');
    }
};

controllerPages.prototype.pageWalkHistory = function () {
    var historyPage = this.historyWalk();
    this.changeMenu(historyPage['namePage']);
    this.view.walkPage(historyPage['page'], historyPage['direction']);
};


controllerPages.prototype.calendarRooms = function (day, month, year, countMonth) {
    var dayRes, monthRes, yearRes;
    var dateNow = new Date(),
        dayNow = dateNow.getDate(),
        monthNow = dateNow.getMonth(),
        yearNow = dateNow.getFullYear();
    if (month === undefined || year === undefined || year < yearNow || (year === yearNow && month-1 < monthNow)) {
        monthRes = monthNow + countMonth;
        yearRes = yearNow;
    } else {
        dayRes = day;
        monthRes = month - 1 + countMonth;
        yearRes = year;
    }
    var monthCountRes = monthRes;
    while (monthCountRes >= 12) monthCountRes -= 12;
    while (monthCountRes < 0) monthCountRes += 12;
    var monthNameObj = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
    var monthName = monthNameObj[monthCountRes];

    // console.log(monthRes);
    // console.log(monthName);
    // console.log(dayRes);
    // console.log(monthRes);
    // console.log(yearRes);

    // устанавливаю нужный месяц
    var theMonth = new Date(yearRes, monthRes),
        theYearResult = theMonth.getFullYear(),
        thrMonthResult = theMonth.getMonth() + 1;

    // console.log(theMonth);

    function getDay(date) {
        // получить номер дня недели, от 1(пн) до 7(вс)
        var day = date.getDay();
        if (day == 0) day = 7;
        return day;
    }

    var tableInside = '<thead><tr><td class="prev_cal"><i class="fa fa-chevron-left" aria-hidden="true"></i></td><td class="month_cal" colspan="5" data-year="' + theYearResult + '" data-month="' + thrMonthResult + '">' + monthName + ' ' + theYearResult +'</td><td class="next_cal"><i class="fa fa-chevron-right" aria-hidden="true"></i></td></tr><tr><th>Пн</th><th>Вт</th><th>Ср</th><th>Чт</th><th>Пт</th><th>Сб</th><th>Вс</th></tr></thead><tbody><tr>';

    // заполнить первый ряд от понедельника
    // и до дня, с которого начинается месяц
    // * * * | 1  2  3  4
    for (var i = 1; i < getDay(theMonth); i++) {
        tableInside += '<td class="no"></td>';
    }

    // ячейки календаря с датами
    while (theMonth.getMonth() === monthCountRes) {
        if (theMonth.getMonth() < monthNow && yearNow === theYearResult || yearNow > theYearResult) {
            tableInside += '<td class="no">'+ theMonth.getDate() + '</td>';
        } else if (theMonth.getDate() < dayNow && yearNow === theYearResult && monthNow === monthCountRes) {
            tableInside += '<td class="no">'+ theMonth.getDate() + '</td>';
        } else if (theMonth.getDate() >= dayNow && dayRes !== undefined && theMonth.getDate() === dayRes && !countMonth) {
            tableInside += '<td class="active">'+ theMonth.getDate() + '</td>';
        } else {
            tableInside += '<td>'+ theMonth.getDate() + '</td>';
        }
        // вс, последний день - перевод строки
        if (getDay(theMonth) === 7) {
            tableInside += '</tr><tr>';
        }
        // приплюсовать день
        theMonth.setDate(theMonth.getDate() + 1);
    }

    // добить таблицу пустыми ячейками, если нужно
    if (getDay(theMonth) != 7) {
        for (var j = getDay(theMonth); j < 8; j++) {
            tableInside += '<td class="no"></td>';
        }
    }

    // закрыть таблицу
    tableInside += '</tr></tbody>';

    var table = document.createElement('table');
    table.classList.add('calendar');
    table.innerHTML = tableInside;
    // console.log(table);
    return table;
};

controllerPages.prototype.calendarRoomsData = function (objData) {
    if (objData) {
        this._calendarObjectData = objData;
    } else {
        return this._calendarObjectData;
    }
};