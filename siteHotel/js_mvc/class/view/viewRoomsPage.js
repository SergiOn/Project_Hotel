/**
 * Created by Sergio on 11.08.2016.
 */

function viewRoomsPage() {

}

viewRoomsPage.prototype.start = function (innerIn, innerOut, dataIn, dataOut) {
    if (innerIn && dataIn) {
        document.querySelector('#room_cal-in span').innerHTML = innerIn;
        document.querySelector('#room_cal-in span').dataset.timeIn = dataIn;
    }
    if (innerOut && dataOut) {
        document.querySelector('#room_cal-out span').innerHTML = innerOut;
        document.querySelector('#room_cal-out span').dataset.timeOut = dataOut;
    }

};

viewRoomsPage.prototype.startCalendar = function (innerIn, innerOut, dataIn, dataOut) {
    this.start(innerIn, innerOut, dataIn, dataOut);
};

viewRoomsPage.prototype.showRooms = function (arrRooms) {
    var section = document.getElementById('rooms_content-block'),
        div, divInside;
    while (section.firstChild) {
        section.removeChild(section.firstChild);
    }
    console.log(arrRooms);

    for (var i = 0; i < arrRooms.length; i++) {
        div = document.createElement('div');
        div.classList.add('the-room');
        div.dataset.room_number=arrRooms[i]['number'];

        divInside = '<h3 class="room-name">'+arrRooms[i]['name']+'</h3>' +
            '<span class="room-info">'+arrRooms[i]['typeName']+', '+arrRooms[i]['smoking']+', '+arrRooms[i]['step']+' этаж'+'</span>' +
            '<img src="'+arrRooms[i]['image']+'" alt="">' +
            '<table><tr><th>Тарифный план</th><th>Цена за ночь (eur)</th><th></th></tr>' +
            '<tr><td><span>Гибкий тариф</span><br><small>Подлежит изменению и возврату.</small></td><td>'+
            '<span class="room-price">'+arrRooms[i]['price']+'</span> €</td><td><button class="room-reserve">Заказать</button></td></tr>' +
            '<tr><td><span>«Завтрак включен»</span><br><small>Тариф включает завтрак.</small><br><small>Подлежит изменению и возврату.</small></td>' +
            '<td><span class="room-price-br">'+arrRooms[i]['price-br']+'</span> €</td><td><button class="room-reserve-br">Заказать</button></td></tr>' +
            '</table><hr></div>';

        div.innerHTML = divInside;
        section.appendChild(div);
    }

};

/*





*/