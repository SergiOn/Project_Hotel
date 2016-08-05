/**
 * Created by Sergio on 30.07.2016.
 */


function Routing() {
    this.page = new controllerPages();
}

Routing.prototype.startController = function (nameController, servicesMiniPage) {
    this._controller = null;
    var self = this;
    var contentId = 'content_' + nameController;

    var controllerNameObj = {
        'login': controllerLoginPage
    };

    document.getElementById('content').addEventListener('DOMNodeInserted', function () {
        if (!document.getElementById(contentId)) return;

        if (controllerNameObj[nameController] !== controllerLoginPage) return;

        self._controller = new controllerNameObj[nameController]();
        self._controller.controllerInit(servicesMiniPage);
    });
    /* ***  нужно раскоментировать. контроллер для home  *** */
    // if (!this._controller) {
    //     this._controller = new controllerNameObj[nameController]();
    //     this._controller.controllerInit();
    // }
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
    this.page.startPage(namePage);
    this.startController(namePage);
};

Routing.prototype.thePages = function () {
    var self = this;
    var menuEl = document.getElementById('menu');
    menuEl.addEventListener('click', function (event) {
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
            var servicesMiniPage = id;
        } else {
            namePage = id;
        }

        /*
        * var App = {};
        * App['home'] = function Home() {};
        * new App[id]()
        * */
        self.page.thePage(namePage);
        self.startController(namePage, servicesMiniPage);
    });
};

Routing.prototype.userPages = function () {
    var self = this;
    var userMenuEl = document.getElementById('user-menu');

    userMenuEl.addEventListener('click', function (event) {
        event.preventDefault();

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
        self.page.thePage(namePage);
        self.startController(namePage);
    });
};

Routing.prototype.siteHistory = function () {
    var self = this;
    window.addEventListener('popstate', function () {
        self.page.pageWalkHistory();
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