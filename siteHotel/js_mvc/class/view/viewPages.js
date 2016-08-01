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

viewPages.prototype.thePage = function (page) {
    document.body.style.overflowX = 'hidden';
    var wrapper = document.getElementById('content');
    var children = wrapper.children[0];
    children.classList.add('animation_out_center-left');

    var styleChildren = getComputedStyle(children);
    var timeOut = parseInt(styleChildren.animationDuration) + parseInt(styleChildren.animationDelay);
    setTimeout(function() {
        children.classList.remove('animation_out_center-left');
        page.classList.add('animation_in_right-center');
        wrapper.replaceChild(page, children);

        setTimeout(function() {
            page.classList.remove('animation_in_right-center');
            document.body.style.overflowX = '';
        }, timeOut * 1000 + 1000);
    }, timeOut * 1000);

    //console.log(page);
};