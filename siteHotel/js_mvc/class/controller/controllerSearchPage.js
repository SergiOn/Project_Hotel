/**
 * Created by Sergio on 09.08.2016.
 */

function controllerSearchPage() {
    this.model = new modelSearchPage();
    this.view = new viewSearchPage();
}


controllerSearchPage.prototype.controllerInit = function () {
    this.searchPage();
};

controllerSearchPage.prototype.searchPage = function () {
    document.getElementById('search-close').addEventListener('click', function () {
        history.back();
    });

    var self = this,
        sectionAnswer = document.getElementById('search-result'),
        textResult = document.getElementById('search-value'),
        inputValue,
        stdText1,
        stdText2;
    document.getElementById('input-search').addEventListener('input', function (event) {
        inputValue = event.currentTarget.value;
        if (inputValue.length > 0) {
            textResult.innerHTML = inputValue;
        } else {
            textResult.innerHTML = 'поиска';
        }

        if (inputValue.length = 1) {
            if (sectionAnswer.children[1] && sectionAnswer.children[0] && sectionAnswer.children[0].tagName === 'P') {
                stdText2 = sectionAnswer.removeChild(sectionAnswer.children[1]);
                stdText1 = sectionAnswer.removeChild(sectionAnswer.children[0]);
            }
            if (!sectionAnswer.children[1] && !sectionAnswer.children[0]) {
                sectionAnswer.appendChild(stdText1);
                sectionAnswer.appendChild(stdText2);
            }
        }

        if (inputValue.length > 2) {

            inputValue = JSON.stringify(inputValue);
            self.model.searchPage('api/user/search', 'searchValue='+inputValue, self.searchPageAnswer.bind(self));
        } else if (inputValue.length <= 2 && inputValue.length > 0) {
            while (sectionAnswer.firstChild) {
                sectionAnswer.removeChild(sectionAnswer.firstChild);
            }
        }
    });
};
controllerSearchPage.prototype.searchPageAnswer = function (answer) {
    this.view.searchPage(answer);
};