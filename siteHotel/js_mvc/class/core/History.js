/**
 * Created by Sergio on 30.07.2016.
 */

function History() {
    this._historyArrey = [];
    this._historyPosition = 0;
}

History.prototype.historyAdd = function (page) {
    if (this._historyArrey.length > this._historyPosition) {
        this._historyArrey.splice(this._historyPosition);
    }
    this._historyArrey.push(page);
    this._historyPosition = this._historyPosition + 1;
};

History.prototype.historyWalk = function (page) {

};

History.prototype.changeUrl = function (namePage) {
    var ie89 = /(MSIE\s8\.0)|(MSIE\s9\.0)/.test(navigator.userAgent);
    var ie = /Microsoft\sInternet\sExplorer/.test(navigator.appName);

    if (ie89 && ie) {
        location.hash = namePage;
    } else {
        history.pushState(null, '', namePage);
    }
};







/*
* navigator.userAgent
* chrome:
*"Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.106 Safari/537.36"
*
* firefox:
* "Mozilla/5.0 (Windows NT 6.1; WOW64; rv:37.0) Gecko/20100101 Firefox/37.0"
*
* opera:
* "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.106 Safari/537.36 OPR/38.0.2220.41"
*
* ie edge:
* "Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; .NET4.0E; .NET4.0C; GWX:RESERVED; rv:11.0) like Gecko"
*
* ie 10:
* "Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; WOW64; Trident/7.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; .NET4.0E; .NET4.0C; GWX:RESERVED)"
*
* appName: "Microsoft Internet Explorer"
*
* ie 9:
* "Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; WOW64; Trident/7.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; .NET4.0E; .NET4.0C; GWX:RESERVED)"
*
* appName: "Microsoft Internet Explorer"
*
* ie 8:
* "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; WOW64; Trident/7.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; .NET4.0E; .NET4.0C; GWX:RESERVED)"
*
* appName: "Microsoft Internet Explorer"
*/
