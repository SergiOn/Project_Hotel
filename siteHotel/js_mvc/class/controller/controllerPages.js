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
    var namePage

    var ie89 = /(MSIE\s8\.0)|(MSIE\s9\.0)/.test(navigator.userAgent);
    var ie = /Microsoft\sInternet\sExplorer/.test(navigator.appName);

    if (locationPathname) {
        namePage = locationPathname;
        if (ie89 && ie) location.pathname = '/';
    } else if (locationHash) {
        namePage = locationHash;
    } else {
        return;
    }
    document.querySelector('li.menu-active').classList.remove('menu-active');
    document.getElementById(namePage).closest('li').classList.add('menu-active');

    var url = '/api/pages/' + namePage;
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

    document.querySelector('li.menu-active').classList.remove('menu-active');
    document.getElementById(namePage).closest('li').classList.add('menu-active');

    var direction = this._historyDirection;
    this.view.walkPage(page, direction);
};



