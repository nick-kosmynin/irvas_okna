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
/*! no static exports found */
/***/ (function(module, exports) {

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
module.exports = forms;


/***/ }),

/***/ "./src/js/moduls/modal.js":
/*!********************************!*\
  !*** ./src/js/moduls/modal.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

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
module.exports = modal;

/***/ }),

/***/ "./src/js/moduls/modalCalc.js":
/*!************************************!*\
  !*** ./src/js/moduls/modalCalc.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function modalCalc (){
    
    //modal calc

    const btnCalc = document.querySelector('.glazing_price_btn'),
        modalCalc = document.querySelector('.popup_calc'),
        btnCalcCloze = document.querySelector('.popup_calc_close');

    btnCalc.addEventListener('click', () => {
        modalCalc.classList.add('show');
        modalCalc.classList.remove('hide');
        document.body.style.overflow = 'hidden';
    });

    function clozeModalCalc() {
        btnCalcCloze.addEventListener('click', () => {
            modalCalc.classList.add('hide');
            modalCalc.classList.remove('show');
            document.body.style.overflow = '';
        });
    }
    clozeModalCalc();

    modalCalc.addEventListener('click', (e) => {
        if (e.target === modalCalc) {
            modalCalc.classList.add('hide');
            modalCalc.classList.remove('show');
        }
    });

    //actions of window 1

    const balcIcons = document.querySelector('.balcon_icons'),
        balcImg = document.querySelectorAll('.balcon_icons_img'),
        balcBigImg = document.querySelectorAll('.big_img.text-center > img');
        

    function hideBigImg() {
        balcBigImg.forEach(item => {
            item.style.display = 'none';
        });
    }


    

    hideBigImg();
    




    //modal calc part 2

    //   const btnCalc2 = document.querySelector('.popup_calc_button'),
    //         modalCalc2 = document.querySelector('.popup_calc_profile'),
    //         btnCalcCloze2 = document.querySelector('.popup_calc_profile_close');
    //
    //         btnCalc2.addEventListener('click', () =>{
    //             modalCalc2.classList.add('show');
    //             modalCalc2.classList.remove('hide');
    //         });
    //
    //         function clozeModalCalc2 () {
    //           btnCalcCloze2.addEventListener('click', () =>{
    //               modalCalc2.classList.add('hide');
    //               modalCalc2.classList.remove('show');
    //           });
    //         }
    //         clozeModalCalc2();
    //
    //         //modal calc part 3
    //
    //         const btnCalc3 = document.querySelector('.popup_calc_profile_button'),
    //               modalCalc3 = document.querySelector('.popup_calc_end'),
    //               btnCalcCloze3 = document.querySelector('.popup_calc_end_close');
    //
    //               btnCalc3.addEventListener('click', () =>{
    //                   modalCalc3.classList.add('show');
    //                   modalCalc3.classList.remove('hide');
    //               });
    //     
    //               function clozeModalCalc3 () {
    //                 btnCalcCloze3.addEventListener('click', () =>{
    //                     modalCalc3.classList.add('hide');
    //                     modalCalc3.classList.remove('show');
    //                 });
    //               }
    //               clozeModalCalc3();  
}
module.exports =  modalCalc;

/***/ }),

/***/ "./src/js/moduls/modalTabs1.js":
/*!*************************************!*\
  !*** ./src/js/moduls/modalTabs1.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function modalTabs1 () {
        // modal tabs 1

        const gzSlider = document.querySelector('.glazing_slider'),
        gzBlock = document.querySelectorAll('.glazing_block'),
        gzContent = document.querySelectorAll('.glazing_content');


    function hideTabContent() {
        gzContent.forEach(item => {
            item.style.display = 'none';
        });


    }

    function showTabsContent(i = 0) {
        gzContent[i].style.display = 'block';

    }

    hideTabContent();
    showTabsContent();

    gzSlider.addEventListener('click', (event) => {
        const target = event.target;
        if (target && target.classList.contains('glazing_block')) {
            gzBlock.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabsContent(i);
                }
            });
        }
    });
}
module.exports = modalTabs1;

/***/ }),

/***/ "./src/js/moduls/modalTabs2.js":
/*!*************************************!*\
  !*** ./src/js/moduls/modalTabs2.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function modalTabs2 (){
    
    // modal tabs 2

    const decSlider = document.querySelector('.decoration_slider'),
        decItem = document.querySelectorAll('.no_click'),
        decor = document.querySelectorAll('.decoration_content >div >div');


    function hideDecSlider() {
        decor.forEach(item => {
            item.style.display = 'none';
        });


    }

    function showDecSlider(i = 0) {

        decor[i].style.display = 'block';

    }

    hideDecSlider();
    showDecSlider();

    decSlider.addEventListener('click', (event) => {
        const target = event.target;
        if (target && target.classList.contains('no_click')) {
            decItem.forEach((item, i) => {
                if (target == item) {
                    hideDecSlider();
                    showDecSlider(i);
                }
            });
        }
    });
}
module.exports = modalTabs2;

/***/ }),

/***/ "./src/js/moduls/timer.js":
/*!********************************!*\
  !*** ./src/js/moduls/timer.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

module.exports = timer;

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

window.addEventListener('DOMContentLoaded', () => {

    const forms = __webpack_require__(/*! ./moduls/forms */ "./src/js/moduls/forms.js"),
        modal = __webpack_require__(/*! ./moduls/modal */ "./src/js/moduls/modal.js"),
        modalCalc = __webpack_require__(/*! ./moduls/modalCalc */ "./src/js/moduls/modalCalc.js"),
        modalTabs1 = __webpack_require__(/*! ./moduls/modalTabs1 */ "./src/js/moduls/modalTabs1.js"),
        modalTabs2 = __webpack_require__(/*! ./moduls/modalTabs2 */ "./src/js/moduls/modalTabs2.js"),
        timer = __webpack_require__(/*! ./moduls/timer */ "./src/js/moduls/timer.js");

forms();
modal();
modalCalc();
modalTabs1();
modalTabs2();
timer();

});

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map