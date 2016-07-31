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



