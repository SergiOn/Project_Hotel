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
    this.changeMenu(namePage);

    var url = '/api/pages/' + namePage;
    this.model.startPage(url, this.view.startPage.bind(this.view));
};

controllerPages.prototype.getTrueUser = function () {
    this.model.getTrueUser('api/user/getTrueUser', this.getTrueUserAnswer.bind(this));
};
controllerPages.prototype.getTrueUserAnswer = function (answer) {
    if (!answer) return;
    this.view.getTrueUser(answer[0]);
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