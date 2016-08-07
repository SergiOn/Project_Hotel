/**
 * Created by Sergio on 03.08.2016.
 */

function viewUserPage() {
}


viewUserPage.prototype.loginUser = function (userData) {
    document.querySelector('.auth-in').classList.add('hidden');
    document.querySelector('.auth-out').classList.remove('hidden');

    document.getElementById('user-name').innerHTML = userData['name'];
    document.getElementById('user-l_name').innerHTML = userData['l_name'];
    document.getElementById('user-tel').innerHTML = userData['phone'];
    document.getElementById('my_reserve').dataset.userId = userData['id'];
    document.getElementById('my_reserve').dataset.reg = userData['regDate'];

    history.back();

    console.log(userData);
};

viewUserPage.prototype.logoutUser = function () {
    document.querySelector('.auth-out').classList.add('hidden');
    document.querySelector('.auth-in').classList.remove('hidden');

    document.getElementById('user-name').innerHTML = '';
    document.getElementById('user-l_name').innerHTML = '';
    document.getElementById('user-tel').innerHTML = '';
    document.getElementById('my_reserve').dataset.userId = '';
    document.getElementById('my_reserve').dataset.reg = '';
};

viewUserPage.prototype.registrationUser = function (userData) {
    this.loginUser(userData);
};