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


controllerPages.prototype.startPage = function (namePage) {
    this.changeMenu(namePage);

    var url = '/api/pages/' + namePage;
    this.model.startPage(url, this.view.startPage);
};

controllerPages.prototype.getTrueUser = function () {

};

controllerPages.prototype.thePage = function (namePage) {
    var el = 'content_' + namePage;
    if (document.getElementById(el)) return;

    var page = document.getElementById('content').children[0];
    this.historyAdd(page);

    this.changeMenu(namePage);

    var url = '/api/pages/' + namePage;
    this.model.thePage(url, this.view.thePage.bind(this.view));

    var nameUrl = namePage === 'home' ? '/' : namePage;
    this.changeUrl(nameUrl);
};

controllerPages.prototype.walkPage = function () {
    this.historyWalk();
    var page,
        namePage;

    if (this._historyPosition in this._historyArrey) {
        page = this._historyArrey[this._historyPosition];
    } else {
        page = this._lastPage;
    }
    namePage = page.id.slice(8);

    this.changeMenu(namePage);

    var direction = this._historyDirection;
    this.view.walkPage(page, direction);
};

controllerPages.prototype.changeMenu = function (namePage) {
    if (document.querySelector('li.menu-active')) {
        document.querySelector('li.menu-active').classList.remove('menu-active');
    }
    if (document.getElementById(namePage).closest('li')) {
        document.getElementById(namePage).closest('li').classList.add('menu-active');
    }
};

