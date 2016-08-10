/**
 * Created by Sergio on 07.08.2016.
 */

function controllerHomePage(controllerPage) {
    this.controllerPage = controllerPage;
    this.view = new viewHomePage();
}


controllerHomePage.prototype.controllerInit = function () {
    this.block1_ArrowSlider();
    this.block1_Slider_changeBanner();
    this.block1_Slider_changeBannerImg();
    this.block1_Banner_Reserve();
    this.block1_Banner_Reserve_calendar();
    this.block2_Hotel_Key();
    this.block2_Hotel_Rooms();
    this.block2_Hotel_Halls();
};


controllerHomePage.prototype.block1_ArrowSlider = function () {
    var self = this,
        figureActive,
        figurePrev,
        figureNext,
        figureImg,
        parentFigure,
        remove,
        insertBefore;

    document.getElementById('block-1_home_arrow-slider-l').addEventListener('click', function () {
        figureActive = document.querySelector('figure.active');
        figureActive.classList.remove('active');

        if (figureActive.previousElementSibling !== null) {
            figurePrev = figureActive.previousElementSibling;
        } else {
            figurePrev = figureActive.parentElement.lastElementChild;
        }
        figurePrev.classList.add('active');
        figureImg = figurePrev.getElementsByTagName('img')[0].src;

        self.block1_Slider(figureImg);

        if (figurePrev.getBoundingClientRect().bottom > figurePrev.parentElement.getBoundingClientRect().bottom + 10) {
            parentFigure = document.querySelector('.block-1_home_banner-slider_img');
            remove = parentFigure.lastElementChild;
            insertBefore = parentFigure.firstElementChild;

            self.view.block1_Slider_changeBannerImg(parentFigure, remove, insertBefore);
        }
    });
    document.getElementById('block-1_home_arrow-slider-r').addEventListener('click', function () {
        figureActive = document.querySelector('figure.active');
        figureActive.classList.remove('active');

        if (figureActive.nextElementSibling !== null) {
            figureNext = figureActive.nextElementSibling;
        } else {
            figureNext = figureActive.parentElement.firstElementChild;
        }
        figureNext.classList.add('active');
        figureImg = figureNext.getElementsByTagName('img')[0].src;

        self.block1_Slider(figureImg);

        if (figureNext.getBoundingClientRect().bottom > figureNext.parentElement.getBoundingClientRect().bottom + 10) {
            parentFigure = document.querySelector('.block-1_home_banner-slider_img');
            remove = parentFigure.firstElementChild;
            insertBefore = parentFigure.lastElementChild;

            self.view.block1_Slider_changeBannerImg(parentFigure, remove, insertBefore);
        }
    });
    document.querySelector('.block-1_home_banner-slider_img').addEventListener('click', function (event) {
        if (event.target.tagName !== 'IMG') return;
        figureActive = document.querySelector('figure.active');
        figureActive.classList.remove('active');
        parentFigure = event.target.closest('figure');
        parentFigure.classList.add('active');
        figureImg = event.target.src;

        self.block1_Slider(figureImg);
    });
};

controllerHomePage.prototype.block1_Slider = function (figureImg) {
    var bl1_home = document.querySelector('.block-1_home'),
        bl1_homeStyle = getComputedStyle(bl1_home),
        imgNumber,
        figureImgSrc,
        imgFirstPath,
        imgLastPath,
        backgroundUrl;

    imgNumber = figureImg.match(/.*\/(\d*)-slider-.*/)[1];

    figureImgSrc = figureImg.replace(/(.+)(?:-small)(.+)$/, "$1$2");
    imgFirstPath = bl1_homeStyle.backgroundImage.match(/(.*url\()(?:.*)(.+)/)[1];
    imgLastPath = bl1_homeStyle.backgroundImage.match(/(.*url\()(?:.*)(.+)/)[2];
    backgroundUrl = imgFirstPath + figureImgSrc + imgLastPath;

    this.view.block1_Slider(backgroundUrl, imgNumber);
};

controllerHomePage.prototype.block1_Slider_changeBanner = function () {
    var self = this,
        active,
        hidden;
    document.getElementById('banner-slider-active').addEventListener('click', function () {
        active = document.querySelector('.block-1_home_banner-slider-active');
        hidden = document.querySelector('.block-1_home_banner-slider-noactive');

        self.view.block1_Slider_changeBanner(active, hidden);
    });

    document.getElementById('block-1_home_banner-slider-close').addEventListener('click', function () {
        active = document.querySelector('.block-1_home_banner-slider-noactive');
        hidden = document.querySelector('.block-1_home_banner-slider-active');

        self.view.block1_Slider_changeBanner(active, hidden);
    });
};

controllerHomePage.prototype.block1_Slider_changeBannerImg = function () {
    var self = this,
        parentFigure,
        remove,
        insertBefore,
        buttonEl;

    document.querySelector('.block-1_home_banner-slider-active').addEventListener('click', function (event) {
        buttonEl = event.target.closest('button');

        if (!buttonEl || buttonEl.tagName !== 'BUTTON') return;
        parentFigure = document.querySelector('.block-1_home_banner-slider_img');

        if (buttonEl.id === 'block-1_home_banner-slider-l') {
            remove = parentFigure.lastElementChild;
            insertBefore = parentFigure.firstElementChild;

            self.view.block1_Slider_changeBannerImg(parentFigure, remove, insertBefore);
        }
        if (event.target.closest('button').id === 'block-1_home_banner-slider-r') {
            remove = parentFigure.firstElementChild;
            insertBefore = parentFigure.lastElementChild;

            self.view.block1_Slider_changeBannerImg(parentFigure, remove, insertBefore);
        }
    });
};


controllerHomePage.prototype.block1_Banner_Reserve = function () {
    var elUp = document.querySelector('.block-1_home_banner-top'),
        el = document.querySelector('.block-1_home_banner-reserve'),
        elUpCoordTop;
    window.addEventListener('scroll', function () {
        elUpCoordTop = elUp.getBoundingClientRect().bottom;
        if (elUpCoordTop < 0) {
            el.classList.add('fixed');
        } else {
            el.classList.remove('fixed');
        }
    });
};

controllerHomePage.prototype.block1_Banner_Reserve_calendar = function () {
    var self = this,
        div,
        elTarg,
        m,
        d,
        calendar,
        dayIn,
        monthIn,
        yearIn,
        countMoIn = 0,
        dayOut,
        monthOut,
        yearOut,
        countMoOut = 0;

    document.querySelector('.room-in').addEventListener('click', function (event) {
        event.preventDefault();
        div = event.currentTarget;
        elTarg = event.target;

        if (!div.querySelector('table.calendar')) {
            calendar = self.controllerPage.calendarRooms(dayIn, monthIn, yearIn, countMoIn);
            div.appendChild(calendar);
        } else if (div.querySelector('table.calendar') && elTarg.closest('label')) {
            div.removeChild(calendar);
            return;
        }

        if (elTarg.matches('td:not(.no)') && !elTarg.closest('thead')) {
            dayIn = parseInt(elTarg.innerHTML);
            monthIn = parseInt(div.querySelector('.month_cal').dataset.month);
            yearIn = parseInt(div.querySelector('.month_cal').dataset.year);
            countMoIn = 0;
            d = String(dayIn).length > 1 ? dayIn : '0'+dayIn;
            m = String(monthIn).length > 1 ? monthIn : '0'+monthIn;
            document.getElementById('room-in').value = d+'.'+m+'.'+yearIn;
            div.removeChild(calendar);
        } else if (elTarg.closest('.prev_cal')) {
            countMoIn -= 1;
            div.removeChild(calendar);
            calendar = self.controllerPage.calendarRooms(dayIn, monthIn, yearIn, countMoIn);
            div.appendChild(calendar);
        } else if (elTarg.closest('.next_cal')) {
            countMoIn += 1;
            div.removeChild(calendar);
            calendar = self.controllerPage.calendarRooms(dayIn, monthIn, yearIn, countMoIn);
            div.appendChild(calendar);
        }
    });

    document.querySelector('.room-out').addEventListener('click', function (event) {
        event.preventDefault();
        div = event.currentTarget;
        elTarg = event.target;

        if (!div.querySelector('table.calendar')) {
            calendar = self.controllerPage.calendarRooms(dayOut, monthOut, yearOut, countMoOut);
            div.appendChild(calendar);
        } else if (div.querySelector('table.calendar') && elTarg.closest('label')) {
            div.removeChild(calendar);
            return;
        }

        if (elTarg.matches('td:not(.no)') && !elTarg.closest('thead')) {
            dayOut = parseInt(elTarg.innerHTML);
            monthOut = parseInt(div.querySelector('.month_cal').dataset.month);
            yearOut = parseInt(div.querySelector('.month_cal').dataset.year);
            countMoOut = 0;
            d = String(dayOut).length > 1 ? dayOut : '0'+dayOut;
            m = String(monthOut).length > 1 ? monthOut : '0'+monthOut;
            document.getElementById('room-out').value = d+'.'+m+'.'+yearOut;
            div.removeChild(calendar);
        } else if (elTarg.closest('.prev_cal')) {
            countMoOut -= 1;
            div.removeChild(calendar);
            calendar = self.controllerPage.calendarRooms(dayOut, monthOut, yearOut, countMoOut);
            div.appendChild(calendar);
        } else if (elTarg.closest('.next_cal')) {
            countMoOut += 1;
            div.removeChild(calendar);
            calendar = self.controllerPage.calendarRooms(dayOut, monthOut, yearOut, countMoOut);
            div.appendChild(calendar);
        }
    });

    var objData;
    document.getElementById('reserve').addEventListener('click', function () {
        if (!dayIn || !monthIn || !yearIn || !dayOut || !monthOut || !yearOut) return;

        objData = {
            'dayIn': dayIn,
            'monthIn': monthIn,
            'yearIn': yearIn,
            'dayOut': dayOut,
            'monthOut': monthOut,
            'yearOut': yearOut
        };
        self.controllerPage.calendarRoomsData(objData);
        self.controllerPage.thePage('rooms');
        self.controllerPage.startController(self.controllerPage, 'rooms', 'rooms');
    });
};


controllerHomePage.prototype.block2_Hotel_Key = function () {
    var self = this,
        aEl,
        block;
    document.getElementById('block-2_home_hotel_key').addEventListener('click', function (event) {
        event.preventDefault();
        aEl = event.target;
        block = document.getElementById('block-2_home_hotel-rooms');

        if (aEl === aEl.parentElement.children[0]) {
            self.view.block2_Hotel_Key(aEl, aEl.nextElementSibling, block, true);
        } else {
            self.view.block2_Hotel_Key(aEl, aEl.previousElementSibling, block, false);
        }
    });
};

controllerHomePage.prototype.block2_Hotel_Rooms = function () {
    var self = this,
        parent,
        className,
        aActive,
        imgActive,
        divActive;
    document.getElementById('block-2_home_hotel-rooms').addEventListener('click', function (event) {
        event.preventDefault();
        if (event.target.tagName !== 'A') return;
        parent = event.currentTarget;
        aActive = event.target;
        className = aActive.getAttribute('href').slice(1);
        imgActive = parent.querySelector('img.' + className);
        divActive = parent.querySelector('div.' + className);

        self.view.block2_Hotel_Rooms(parent, className, aActive, imgActive, divActive);
    });

};

controllerHomePage.prototype.block2_Hotel_Halls = function () {
    var self = this,
        parent,
        className,
        aActive,
        imgActive,
        divActive;
    document.getElementById('block-2_home_hotel-halls').addEventListener('click', function (event) {
        event.preventDefault();
        if (event.target.tagName !== 'A') return;
        parent = event.currentTarget;
        aActive = event.target;
        className = aActive.getAttribute('href').slice(1);
        imgActive = parent.querySelector('img.' + className);
        divActive = parent.querySelector('div.' + className);

        self.view.block2_Hotel_Halls(parent, className, aActive, imgActive, divActive);
    });
};






