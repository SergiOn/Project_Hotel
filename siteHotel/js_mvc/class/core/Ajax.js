/**
 * Created by Sergio on 30.07.2016.
 */

function Ajax() {
}

Ajax.prototype._ajaxInit = function () {
    var XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;
    return new XHR;
};

Ajax.prototype.ajaxSendGet = function (url, data, func) {
    var xhr = this._ajaxInit();
    var link = data ? url+'?'+data : url;
    xhr.open('GET', link, true);
    xhr.send(null);
    xhr.onreadystatechange = function() {
        if (this.readyState != 4) return;
        if (this.status != 200) {
            console.log(this.status + ': ' + this.statusText);
        } else {
            return func(this.responseText);
        }
    };
};

Ajax.prototype.ajaxSendPost = function (url, data, func) {
    var xhr = this._ajaxInit();
    xhr.open('POST', url, true);
    xhr.send(data);
    xhr.onreadystatechange = function() {
        if (this.readyState != 4) return;
        if (this.status != 200) {
            console.log(this.status + ': ' + this.statusText);
        } else {
            return func(this.responseText);
        }
    }
};
