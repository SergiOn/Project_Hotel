/**
 * Created by Sergio on 30.07.2016.
 */

function Ajax() {
}
Ajax.prototype._init = function () {
    var XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;
    this._xhr = new XHR;
};
Ajax.prototype.sendGet = function (url, data) {
    this._init();
    var link = data ? url+'?'+data : url;
    this._xhr.open('GET', link, true);
    this._xhr.send(null);
    this._xhr.onreadystatechange = function() {
        if (this.readyState != 4) return;
        if (this.status != 200) {
            console.log(this.status + ': ' + this.statusText);
        } else {

            // console.log(self._xhr.responseText);
        }
    };
};
Ajax.prototype.sendPost = function (url, data) {
    this._init();
    this._xhr.open('POST', url, true);
    this._xhr.send(data);
    this._xhr.onreadystatechange = function() {
        if (this.readyState != 4) return;
        if (this.status != 200) {
            console.log(this.status + ': ' + this.statusText);
        } else {
            console.log(this.responseText);
        }
    }
};

var ajax = new Ajax();
var one = ajax.sendGet('/api/pages/services');
console.log(one);

