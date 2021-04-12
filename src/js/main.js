window.addEventListener('DOMContentLoaded', () => {

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
});