/**
 * Created by Sergio on 09.08.2016.
 */

function controllerSearchPage() {
    this.view = new viewSearchPage();
}


controllerSearchPage.prototype.controllerInit = function () {
    console.log('init');
};

/*
*
* SELECT r.number, r.step, r.smoking, ri.name, ri.typeName, ri.price, ri.`price-br` FROM `rooms` AS `r` LEFT JOIN `roomsInfo` AS `ri` ON r.type = ri.type WHERE r.number LIKE '%делюкс%' OR r.step LIKE '%делюкс%' OR r.smoking LIKE '%делюкс%' OR ri.name LIKE '%делюкс%' OR ri.typeName LIKE '%делюкс%' OR ri.price LIKE '%делюкс%' OR ri.`price-br`  LIKE '%делюкс%'
* */