/**
 * Created by Sergio on 30.07.2016.
 */


function Routing() {
    this.page = new controllerPages();
}

Routing.prototype.startPage = function () {
    this.page.startPage();
};

Routing.prototype.thePages = function () {
    var self = this;
    var menuEl = document.getElementById('menu');
    menuEl.addEventListener('click', function (event) {
        if (!event.target.matches('a[href^="tel:"]')) event.preventDefault();
        var tagName = event.target.tagName,
            tagNameParent = event.target.parentElement.tagName,
            id = event.target.id,
            idParent = event.target.parentElement.id,
            namePage;
        if(tagName != 'A' && tagNameParent != 'A') {
            return;
        }
        switch (true) {
               case id === 'home':
                namePage = id;
                break;
            case idParent === 'home':
                namePage = idParent;
                break;
            case id === 'rooms':
                namePage = id;
                break;
            case id === 'services':
                namePage = id;
                break;
            case id === 'services-overview':
                namePage = 'services';
                break;
            case id === 'services-comfort':
                namePage = 'services';
                break;
            case id === 'services-rules':
                namePage = 'services';
                break;
            case id === 'contact':
                namePage = id;
                break;
            case id === 'search':
                namePage = id;
                break;
            case idParent === 'search':
                namePage = idParent;
                break;
            default:
                return;
        }

        /*
        * var App = {};
        * App['home'] = function Home() {};
        * new App[id]()
        * */
        self.page.thePage(namePage);
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

        switch (true) {
            case id === 'home-logo':
                namePage = 'home';
                break;
            case id === 'login':
                namePage = id;
                break;
            case id === 'registration':
                namePage = id;
                break;
            case id === 'my-reserve':
                namePage = id;
                break;
            default:
                return;
        }
        self.page.thePage(namePage);
    });
};

Routing.prototype.siteHistory = function () {
    var self = this;
    window.addEventListener('popstate', function () {
        self.page.walkPage();
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