/**
 * Created by Sergio on 31.07.2016.
 */

function viewPages() {
}
viewPages.prototype.thePage = function (page) {
    var wrapper = document.getElementById('content');
    var children = wrapper.children[0];
    children.classList.add('animation_out_center-left');

    var styleChildren = getComputedStyle(children);
    var timeOut = parseInt(styleChildren.animationDuration) + parseInt(styleChildren.animationDelay);
    setTimeout(function() {
        page.classList.add('animation_in_right-center');
        wrapper.replaceChild(page, children);

        setTimeout(function() {
            page.classList.remove('animation_in_right-center');
        }, timeOut * 1000 + 1000);
    }, timeOut * 1000);

    console.log(page);
};