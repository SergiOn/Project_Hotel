/**
 * Created by Sergio on 30.07.2016.
 */



function Routing() {

}
Routing.prototype.home = function () {
    var home = new controllerHome();
    home.init();

};

var routing = new Routing();
//routing.home();