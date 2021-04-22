/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/moduls/forms.js":
/*!********************************!*\
  !*** ./src/js/moduls/forms.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function modalCalc() {
    function bindModal(btnSelector, tabSelector, btnCloseSelector, closeClickOverlay = true) {

        const triggerBtn = document.querySelectorAll(btnSelector),
            modalWind = document.querySelector(tabSelector),
            closeModal = document.querySelector(btnCloseSelector),
            windows = document.querySelectorAll('[data-calc]');

            triggerBtn.forEach(item => {
                item.addEventListener('click', (e) => {
                    if (e.target) {
                        e.preventDefault();
                    }
    
                    windows.forEach(item => {
                        item.style.display = 'none';
                    });
        
                    modalWind.style.display = "block";
                   // document.body.style.overflow = "hidden";
                    // document.body.classList.add('modal-open');
                });
            });



        closeModal.addEventListener('click', () => {
            //закрытие окон
            windows.forEach(item => {
                item.style.display = 'none';
            });

            modalWind.style.display = 'none';
        });



        modalWind.addEventListener('click', (e) => {

            if (e.target === modalWind && closeClickOverlay) {
                //закрытие окон
                windows.forEach(item => {
                    item.style.display = 'none';
                });

                modalWind.style.display = 'none';
            }
        });
    }



    bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
    bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
    bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);




}






/* harmony default export */ __webpack_exports__["default"] = (modalCalc);

/***/ }),

/***/ "./src/js/moduls/modalTabs1.js":
/*!*************************************!*\
  !*** ./src/js/moduls/modalTabs1.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _moduls_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moduls/forms */ "./src/js/moduls/forms.js");
/* harmony import */ var _moduls_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moduls/modal */ "./src/js/moduls/modal.js");
/* harmony import */ var _moduls_modalCalc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./moduls/modalCalc */ "./src/js/moduls/modalCalc.js");
/* harmony import */ var _moduls_modalTabs1__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./moduls/modalTabs1 */ "./src/js/moduls/modalTabs1.js");
/* harmony import */ var _moduls_timer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./moduls/timer */ "./src/js/moduls/timer.js");
/* harmony import */ var _moduls_images__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./moduls/images */ "./src/js/moduls/images.js");







window.addEventListener('DOMContentLoaded', () => {



    Object(_moduls_forms__WEBPACK_IMPORTED_MODULE_0__["default"])();
    Object(_moduls_modal__WEBPACK_IMPORTED_MODULE_1__["default"])();

    Object(_moduls_modalCalc__WEBPACK_IMPORTED_MODULE_2__["default"])();
    



    Object(_moduls_modalTabs1__WEBPACK_IMPORTED_MODULE_3__["default"])('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
    Object(_moduls_modalTabs1__WEBPACK_IMPORTED_MODULE_3__["default"])('.decoration_slider', '.no_click', '.decoration_content >div >div', 'after_click');
    Object(_moduls_modalTabs1__WEBPACK_IMPORTED_MODULE_3__["default"])('.balcon_icons', '.balcon_icons_img', '.big_img >img', 'do_image_more', 'inline-block');

    Object(_moduls_timer__WEBPACK_IMPORTED_MODULE_4__["default"])();
    Object(_moduls_images__WEBPACK_IMPORTED_MODULE_5__["default"])();

});

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map