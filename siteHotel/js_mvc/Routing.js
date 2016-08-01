/**
 * Created by Sergio on 30.07.2016.
 */


function Routing() {
    this.page = new controllerPages();
}

Routing.prototype.startPage = function () {
    this.page.startPage();
};

Routing.prototype.menu = function () {
    var self = this;
    var menuEl = document.getElementById('menu');
    menuEl.addEventListener('click', function (event) {
        if (!event.target.matches('a[href^="tel:"]')) event.preventDefault();
        var tagName = event.target.tagName,
            tagNameParent = event.target.parentElement.tagName,
            id = event.target.id,
            idParent = event.target.parentElement.id,
            namePage;
        switch (true) {
               case tagName === 'A' && id === 'home':
                namePage = id;
                break;
            case tagNameParent === 'A' && idParent === 'home':
                namePage = idParent;
                break;
            case tagName === 'A' && id === 'rooms':
                namePage = id;
                break;
            case tagName === 'A' && id === 'services':
                namePage = id;
                break;
            case tagName === 'A' && id === 'services-overview':
                namePage = 'services';
                break;
            case tagName === 'A' && id === 'services-comfort':
                namePage = 'services';
                break;
            case tagName === 'A' && id === 'services-rules':
                namePage = 'services';
                break;
            case tagName === 'A' && id === 'contact':
                namePage = id;
                break;
            case tagName === 'A' && id === 'search':
                namePage = id;
                break;
            case tagNameParent === 'A' && idParent === 'search':
                namePage = idParent;
                break;
            default:
                return;
        }
        self.page.thePage(namePage);
    });
};

Routing.prototype.userMenu = function () {
};
Routing.prototype.siteHistory = function () {
};



var routing = new Routing();
routing.startPage();
routing.menu();
// routing.siteHistory();



//console.log(routing.pages._historyArrey);


// Routing.prototype.home = function () {
//     var home = new controllerHome();
//     home.init();
// };
//
// var routing = new Routing();
// //routing.home();