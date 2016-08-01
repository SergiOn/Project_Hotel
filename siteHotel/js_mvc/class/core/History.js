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
