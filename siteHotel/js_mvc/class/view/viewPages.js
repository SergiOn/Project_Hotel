/**
 * Created by Sergio on 31.07.2016.
 */

function viewPages() {
}
viewPages.prototype.thePage = function (page) {
    var wrapper = document.getElementById('content');
    wrapper.replaceChild(page, wrapper.children[0]);

    console.log(page);
};