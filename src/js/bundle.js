/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/moduls/forms.js":
/*!********************************!*\
  !*** ./src/js/moduls/forms.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function forms() {


    //FORMS

    const forms = document.querySelectorAll('form');

    const message = {
        loading: 'Загрузка',
        succes: 'Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так'
    };

    forms.forEach(item => {
        postData(item);
    });

    function postData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            statusMessage.textContent = message.loading;
            form.append(statusMessage);

            const request = new XMLHttpRequest();
            request.open('POST', 'server.php');

            request.setRequestHeader('content-type', 'application/json');
            const formData = new FormData(form);

            const object = {};
            formData.forEach(function (value, key) {
                object[key] = value;
            });

            const json = JSON.stringify(object);

            request.send(json);

            request.addEventListener('load', () => {
                if (request.status === 200) {
                    console.log(request.response);
                    statusMessage.textContent = message.succes;
                    form.reset();
                    setTimeout(() => {
                        statusMessage.remove();
                    }, 3000);
                } else {
                    statusMessage.textContent = message.failure;
                }
            });
        });
    }
}
/* harmony default export */ __webpack_exports__["default"] = (forms);


/***/ }),

/***/ "./src/js/moduls/images.js":
/*!*********************************!*\
  !*** ./src/js/moduls/images.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const images = () => {
    const imgPopup = document.createElement('div'), //создание модального окна
        workSection = document.querySelector('.works'), //получение общего блока для изображения
        bigImage = document.createElement('img'); // создание изображения


    imgPopup.classList.add('popup'); //добавление готового класса(существует внутри java script)

    workSection.appendChild(imgPopup); // помещение класса в секцию

    imgPopup.style.justifyContent = 'center';
    imgPopup.style.alignItems = 'center';
    imgPopup.style.display = 'none';

    imgPopup.appendChild(bigImage); // помещение в модальное окно изображения

    workSection.addEventListener('click', (e) => { // при делег соб всегда создаем обьект события(е) 
        e.preventDefault(); //действие не должно выполняться 

        let target = e.target;

        if (target && target.classList.contains('preview')) {
            imgPopup.style.display = 'flex';
            const path = target.parentNode.getAttribute('href');
            bigImage.setAttribute('src', path); // устанавливаем src в позицию path
        }

        if (target && target.matches('div.popup')) { // mathes - совпадение
            imgPopup.style.display = 'none';
        }
    });
};



/* harmony default export */ __webpack_exports__["default"] = (images);

/***/ }),

/***/ "./src/js/moduls/modal.js":
/*!********************************!*\
  !*** ./src/js/moduls/modal.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function modal() {
    // MODAL

    const modalTrigger = document.querySelector('[data-modal]'),
        modal = document.querySelector('.popup_engineer'),
        modalCloseBtn = document.querySelector('[data-close]');

    modalTrigger.addEventListener('click', () => {
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden';
    });

    function closeModal() {
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }

    modalCloseBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape") {
            closeModal();
        }
    });

    //MODAL 2

    const KnopkaZvonka = document.querySelector('[data-knopka]'),
        modal2 = document.querySelector('.popup'),
        ZakrKnopka = document.querySelector('[data-zakr]');

    KnopkaZvonka.addEventListener('click', () => {
        modal2.classList.add('show');
        modal2.classList.remove('hide');

    });

    ZakrKnopka.addEventListener('click', () => {
        modal2.classList.add('hide');
        modal2.classList.remove('show');
    });

    modal2.addEventListener('click', (e) => {
        if (e.target === modal2) {
            modal2.classList.add('hide');
            modal2.classList.remove('show');
        }
    });
}
/* harmony default export */ __webpack_exports__["default"] = (modal);

/***/ }),

/***/ "./src/js/moduls/modalCalc.js":
/*!************************************!*\
  !*** ./src/js/moduls/modalCalc.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function modalCalc (btnSelector, tabSelector, btnCloseSelector){
    
    //modal calc

    const btnCalc = document.querySelector(btnSelector,),
        modalCalc = document.querySelector(tabSelector),
        btnCalcCloze = document.querySelector(btnCloseSelector),
        windows = document.querySelectorAll('[data-calc]');

    btnCalc.addEventListener('click', () => {
        modalCalc.classList.add('show');
        modalCalc.classList.remove('hide');
        document.body.style.overflow = 'hidden';
    });

    function clozeModalCalc() {
        btnCalcCloze.addEventListener('click', () => {
            //закрытие всех окон
            windows.forEach(item =>{
                item.style.display = 'none';
            });

            modalCalc.classList.add('hide');
            modalCalc.classList.remove('show');
            document.body.style.overflow = '';
        });
    }
    clozeModalCalc();

    modalCalc.addEventListener('click', (e) => {
        if (e.target === modalCalc) {
            //закрытие всех окон
            windows.forEach(item =>{
                item.style.display = 'none';
            });


            modalCalc.classList.add('hide');
            modalCalc.classList.remove('show');
        }
    });

 
}
/* harmony default export */ __webpack_exports__["default"] = (modalCalc);

/***/ }),

/***/ "./src/js/moduls/modalTabs1.js":
/*!*************************************!*\
  !*** ./src/js/moduls/modalTabs1.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const modalTabs1 = (headerselector, tabSelector, contentSelector, active, display = 'block') => {
    // modal tabs 1


    const gzSlider = document.querySelector(headerselector),
        gzBlock = document.querySelectorAll(tabSelector),
        gzContent = document.querySelectorAll(contentSelector);

    function hideTabContent() {
        gzContent.forEach(item => {
            item.style.display = 'none';
        });

        gzBlock.forEach(item => {
            item.classList.remove(active);
        });
    }

    function showTabContent(i =0) {
        gzContent[i].style.display = display;
        gzBlock[i].classList.add(active);
    }

    hideTabContent();
    showTabContent();

    gzSlider.addEventListener('click', (e) => {
           const target = e.target;
           if (target &&(target.classList.contains(tabSelector.replace(/\./,"")) ||
           target.parentNode.classList.contains(tabSelector.replace(/\./,"")))) {
               gzBlock.forEach((item,i) => {
                   if (target == item || target.parentNode == item)  {
                       hideTabContent();
                       showTabContent(i);
                   }
               });
           }
    });

};
/* harmony default export */ __webpack_exports__["default"] = (modalTabs1);

/***/ }),

/***/ "./src/js/moduls/timer.js":
/*!********************************!*\
  !*** ./src/js/moduls/timer.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function timer() {
    //timer
    const deadline = '2021-04-30';

    function getTimeRemaining(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()),
            days = Math.floor(t / (1000 * 60 * 60 * 24)),
            hours = Math.floor((t / (1000 * 60 * 60) % 24)),
            minutes = Math.floor((t / 1000 / 60) % 60),
            seconds = Math.floor((t / 1000) % 60);

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };

    }

    function getZero(num) {

        if (num >= 0 && num < 10) {
            return '0' + num;
        } else {
            return num;
        }
    }

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock() {

            const t = getTimeRemaining(endtime);
            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    setClock('.timer1', deadline);
}

/* harmony default export */ __webpack_exports__["default"] = (timer);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _moduls_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moduls/forms */ "./src/js/moduls/forms.js");
/* harmony import */ var _moduls_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moduls/modal */ "./src/js/moduls/modal.js");
/* harmony import */ var _moduls_modalCalc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./moduls/modalCalc */ "./src/js/moduls/modalCalc.js");
/* harmony import */ var _moduls_modalTabs1__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./moduls/modalTabs1 */ "./src/js/moduls/modalTabs1.js");
/* harmony import */ var _moduls_timer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./moduls/timer */ "./src/js/moduls/timer.js");
/* harmony import */ var _moduls_images__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./moduls/images */ "./src/js/moduls/images.js");







window.addEventListener('DOMContentLoaded', () => {



    (0,_moduls_forms__WEBPACK_IMPORTED_MODULE_0__.default)();
    (0,_moduls_modal__WEBPACK_IMPORTED_MODULE_1__.default)();

    (0,_moduls_modalCalc__WEBPACK_IMPORTED_MODULE_2__.default)('.glazing_price_btn', '.popup_calc', '.popup_calc_close');
    (0,_moduls_modalCalc__WEBPACK_IMPORTED_MODULE_2__.default)('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close');
    (0,_moduls_modalCalc__WEBPACK_IMPORTED_MODULE_2__.default)('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close');



    (0,_moduls_modalTabs1__WEBPACK_IMPORTED_MODULE_3__.default)('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
    (0,_moduls_modalTabs1__WEBPACK_IMPORTED_MODULE_3__.default)('.balcon_icons', '.balcon_icons_img ', '.big_img >img', 'do_image_more', 'inline-block');
    (0,_moduls_modalTabs1__WEBPACK_IMPORTED_MODULE_3__.default)('.decoration_slider', '.no_click', '.decoration_content >div >div', 'after_click');

    (0,_moduls_timer__WEBPACK_IMPORTED_MODULE_4__.default)();
    (0,_moduls_images__WEBPACK_IMPORTED_MODULE_5__.default)();

});
}();
/******/ })()
;
//# sourceMappingURL=bundle.js.map