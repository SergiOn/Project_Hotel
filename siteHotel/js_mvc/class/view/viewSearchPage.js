/**
 * Created by Sergio on 09.08.2016.
 */

function viewSearchPage() {

}

viewSearchPage.prototype.searchPage = function (searchAnswer) {
    console.log(searchAnswer);

    var sectionAnswer = document.getElementById('search-result'),
        div,
        h4;
    while (sectionAnswer.firstChild) {
        sectionAnswer.removeChild(sectionAnswer.firstChild);
    }

    for (var i = 0; i < searchAnswer.length; i++) {
        div = document.createElement('div');
        h4 = document.createElement('h4');
        h4.innerHTML = 'Название номера: ' + searchAnswer[i]['name'];
        div.appendChild(h4);
        h4 = document.createElement('h4');
        h4.innerHTML = 'Номер: ' + searchAnswer[i]['number'];
        div.appendChild(h4);
        h4 = document.createElement('h4');
        h4.innerHTML = 'Этаж: ' + searchAnswer[i]['step'];
        div.appendChild(h4);
        h4 = document.createElement('h4');
        h4.innerHTML = 'Тип номера: ' + searchAnswer[i]['typeName'] + ', ' + searchAnswer[i]['smoking'];
        div.appendChild(h4);
        h4 = document.createElement('h4');
        h4.innerHTML = 'Цена: ' + searchAnswer[i]['price'] + '€ без завтрака, ' + searchAnswer[i]['price-br'] + '€ с завтраком';
        div.appendChild(h4);
        sectionAnswer.appendChild(div);
    }

};
