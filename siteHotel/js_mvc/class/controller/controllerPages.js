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


controllerPages.prototype.startPage = function () {
    var locationPathname = location.pathname.slice(1);
    var locationHash = location.hash.slice(1);
    var namePage;
    var url;

    if (locationPathname) {
        namePage = locationPathname;
    } else if (locationHash) {
        namePage = locationHash;
    } else {
        return;
    }
    document.querySelector('li.menu-active').classList.remove('menu-active');
    document.getElementById(namePage).closest('li').classList.add('menu-active');
    url = '/api/pages/' + namePage;
    this.model.startPage(url, this.view.startPage);
};

controllerPages.prototype.thePage = function (namePage) {
    var page = document.getElementById('content').children[0];
    this.historyAdd(page);

    var el = 'content_' + namePage;
    if (document.getElementById(el)) return;

    document.querySelector('li.menu-active').classList.remove('menu-active');
    document.getElementById(namePage).closest('li').classList.add('menu-active');

    var url = '/api/pages/' + namePage;
    this.model.thePage(url, this.view.thePage);
};



