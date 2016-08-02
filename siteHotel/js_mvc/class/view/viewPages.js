/**
 * Created by Sergio on 31.07.2016.
 */

function viewPages() {
}

viewPages.prototype.startPage = function (page) {
    var wrapper = document.getElementById('content');
    var children = wrapper.children[0];
    wrapper.replaceChild(page, children);
};

viewPages.prototype.thePage = function (page, direction) {
    var animationOutName = 'animation_out_center-' + direction;
    var animationInName = 'animation_in_center';
    document.body.style.overflowX = 'hidden';
    var wrapper = document.getElementById('content');
    var children = wrapper.children[0];
    children.classList.add(animationOutName);

    var styleChildren = getComputedStyle(children);
    var timeOut = parseInt(styleChildren.animationDuration) + parseInt(styleChildren.animationDelay);
    setTimeout(function() {
        children.classList.remove(animationOutName);
        page.classList.add(animationInName);
        wrapper.replaceChild(page, children);

        setTimeout(function() {
            page.classList.remove(animationInName);
            document.body.style.overflowX = '';
        }, timeOut * 1000 + 50);
    }, timeOut * 1000 + 500);
};

viewPages.prototype.walkPage = function (page, direction) {
    this.thePage(page, direction);
};