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
    var domEl = 'content_' + nameController;
    if (controller && document.getElementById(domEl)) return;

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
    if (this.historyHasPage(domEl)) {
        this.view.thePage(this.historyOpenPage(domEl), 'left');
        console.log('historyPage');
        return;
    }

    var url = '/api/pages/' + namePage;
    this.model.thePage(url, this.view.thePage.bind(this.view));
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


controllerPages.prototype.calendarRooms = function (day, mon, year, countMonth) {
    var month = mon - 1 + countMonth;

    console.log(day);
    console.log(month);
    console.log(year);
    console.log(countMonth);
    console.log('-------------');


    var date = new Date(year, month);
    console.log(date.getDay());
    console.log(date.getDate());
    console.log(date.getMonth());
    console.log(date.getFullYear());

};

// var cal = new controllerPages();
// cal.calendarRooms(09, 08, 2016, 1);