/**
 * Created by Sergio on 30.07.2016.
 */

function Ajax() {
}
Ajax.prototype._ajaxInit = function () {
    var XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;
    this._xhr = new XHR;
};
Ajax.prototype.ajaxSendGet = function (url, data, func) {
    this._ajaxInit();
    var link = data ? url+'?'+data : url;
    this._xhr.open('GET', link, true);
    this._xhr.send(null);
    this._xhr.onreadystatechange = function() {
        if (this.readyState != 4) return;
        if (this.status != 200) {
            console.log(this.status + ': ' + this.statusText);
        } else {
            return func(this.responseText);
        }
    };

};
Ajax.prototype.ajaxSendPost = function (url, data) {
    this._ajaxInit();
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
