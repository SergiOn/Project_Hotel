/**
 * Created by Sergio on 30.07.2016.
 */


function Routing() {
    this.controllerPages = new controllerPages();
}

Routing.prototype.startController = function (nameController, methodName) {
    var self = this,
        controller,
        controllerNameObj = {
        'login': controllerUserPage,
        'registration': controllerUserPage,
        'log-out': controllerUserPage,
        'my_reserve': controllerUserPage,
        'home': controllerHomePage

    };

    if (nameController === 'log-out') {
        var controllerLogOut = new controllerNameObj[nameController]();
        controllerLogOut.controllerInit(methodName);
        return;
    }

    if (nameController !== 'login' && nameController !== 'registration' && nameController !== 'my_reserve' && nameController !== 'home') return;

    setTimeout(function () {
        if (nameController !== 'login' && nameController !== 'registration' && nameController !== 'my_reserve' && nameController !== 'home') return;

        // /* передаю controllerPages = self.page чтобы можно было вызывать методы controllerPages */
        controller = new controllerNameObj[nameController](self.controllerPages);
        controller.controllerInit(methodName);
    }, 2000);

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

Routing.prototype.startPage = function () {
    var locationPathname = location.pathname.slice(1),
        locationHash = location.hash.slice(1),
        namePage;

    var ie89 = /(MSIE\s8\.0)|(MSIE\s9\.0)/.test(navigator.userAgent);
    var ie = /Microsoft\sInternet\sExplorer/.test(navigator.appName);

    if (locationPathname) {
        namePage = locationPathname;
        if (ie89 && ie) location.pathname = ' ';
    } else if (locationHash) {
        namePage = locationHash;
    }
    namePage = namePage ? namePage : 'home';

    this.controllerPages.startPage(namePage);
    this.startController(namePage, namePage);
};

Routing.prototype.thePages = function () {
    var self = this;
    var menuEl = document.getElementById('menu');
    menuEl.addEventListener('click', function (event) {
        if (!event.target.closest('a')) return;
        var tagName = event.target.closest('a').tagName,
            id = event.target.closest('a').id,
            namePage;
        if (tagName === 'A' && !event.target.matches('a[href^="tel:"]')) {
            event.preventDefault();
        } else {
            return;
        }

        if (id === 'services-overview'
            || id === 'services-comfort'
            || id === 'services-rules' ) {
            namePage = 'services';
        } else {
            namePage = id;
        }
        self.controllerPages.thePage(namePage);
        self.startController(namePage, id);
    });
};

Routing.prototype.userPages = function () {
    var self = this;
    var userMenuEl = document.getElementById('user-menu');

    userMenuEl.addEventListener('click', function (event) {
        event.preventDefault();
        if (!event.target.closest('a')) return;

        var tagName = event.target.closest('a').tagName,
            id = event.target.closest('a').id,
            namePage;
        if(tagName != 'A') {
            return;
        }

        if (id === 'home-logo') {
            namePage = 'home';
        } else {
            namePage = id;
        }
        self.startController(namePage, id);
        if(id !== 'log-out') {
            self.controllerPages.thePage(namePage);
        }
    });
};

Routing.prototype.siteHistory = function () {
    var self = this;
    window.addEventListener('popstate', function () {
        self.controllerPages.pageWalkHistory();
    });
};



var routing = new Routing();
routing.startPage();
routing.thePages();
routing.userPages();
routing.siteHistory();



//console.log(routing.pages._historyArrey);


// Routing.prototype.home = function () {
//     var home = new controllerHome();
//     home.init();
// };
//
// var routing = new Routing();
// //routing.home();