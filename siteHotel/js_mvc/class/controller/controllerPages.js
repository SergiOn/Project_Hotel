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
    var contentChildren = document.getElementById('content').children[0];
    this.historyAddPage(contentChildren);

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


controllerPages.prototype.calendarRooms = function (day, month, year) {
    var dayRes, monthRes, yearRes;
    var dateNow = new Date(),
        dayNow = dateNow.getDate(),
        monthNow = dateNow.getMonth(),
        yearNow = dateNow.getFullYear();
    if (day === undefined || month === undefined || year === undefined || year < yearNow || (year === yearNow && month-1 < monthNow)) {
        monthRes = monthNow;
        yearRes = yearNow;
    } else {
        dayRes = day;
        monthRes = month - 1;
        yearRes = year;
    }
    var monthResult = monthRes + 1;
    var monthNameObj = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
    var monthName = monthNameObj[monthRes];

    // console.log(dayRes);
    // console.log(monthRes);
    // console.log(yearRes);

    // устанавливаю нужный месяц
    var theMonth = new Date(yearRes, monthRes);
    // console.log(theMonth);

    function getDay(date) {
        // получить номер дня недели, от 1(пн) до 7(вс)
        var day = date.getDay();
        if (day == 0) day = 7;
        return day;
    }

    var tableInside = '<thead><tr><td class="prev_cal"><i class="fa fa-chevron-left" aria-hidden="true"></i></td><td class="month_cal" colspan="5" data-year="' + yearRes + '" data-month="' + monthResult + '">' + monthName + '</td><td class="next_cal"><i class="fa fa-chevron-right" aria-hidden="true"></i></td></tr><tr><th>Пн</th><th>Вт</th><th>Ср</th><th>Чт</th><th>Пт</th><th>Сб</th><th>Вс</th></tr></thead><tbody><tr>';

    // заполнить первый ряд от понедельника
    // и до дня, с которого начинается месяц
    // * * * | 1  2  3  4
    for (var i = 1; i < getDay(theMonth); i++) {
        tableInside += '<td class="no"></td>';
    }

    // ячейки календаря с датами
    while (theMonth.getMonth() === monthRes) {
        if (theMonth.getDate() < dayNow && yearNow === yearRes && monthNow === monthRes) {
            tableInside += '<td class="no">'+ theMonth.getDate() + '</td>';
        } else if (theMonth.getDate() >= dayNow && dayRes !== undefined && theMonth.getDate() === dayRes) {
            tableInside += '<td class="active">'+ theMonth.getDate() + '</td>';
        } else {
            tableInside += '<td>'+ theMonth.getDate() + '</td>';
        }
        // вс, последний день - перевод строки
        if (getDay(theMonth) === 7) {
            tableInside += '</tr><tr>';
        }

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

// var cal = new controllerPages();
// var a = cal.calendarRooms(11, 8, 2016);
// console.log(a);



/*
*  <table class="calendar">


 <td class="no">1</td>
 <td class="no">2</td>
 <td class="no">3</td>
 <td class="no">4</td>
 <td class="no">5</td>
 <td class="no">6</td>
 <td class="no">7</td>
 </tr>
 <tr>
 <td class="no">8</td>
 <td class="active">9</td>
 <td>10</td>
 <td>11</td>
 <td>12</td>
 <td>13</td>
 <td>14</td>
 </tr>
 <tr>
 <td>15</td>
 <td>16</td>
 <td>17</td>
 <td>18</td>
 <td>19</td>
 <td>20</td>
 <td>21</td>
 </tr>
 <tr>
 <td>22</td>
 <td>23</td>
 <td>24</td>
 <td>25</td>
 <td>26</td>
 <td>27</td>
 <td>28</td>
 </tr>
 <tr>
 <td>29</td>
 <td>30</td>
 <td>31</td>
 <td class="no"></td>
 <td class="no"></td>
 <td class="no"></td>
 <td class="no"></td>
 </tr>
 </tbody>
 </table>
* */






