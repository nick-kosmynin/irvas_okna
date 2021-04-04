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
        form.addEventListener('submit', (e) =>{
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
            formData.forEach(function(value,key){
                object[key] = value;
            });

            const json = JSON.stringify(object);
            
            request.send(json);

            request.addEventListener('load', () => {
                if (request.status === 200){
                    console.log(request.response);
                    statusMessage.textContent = message.succes;
                    form.reset();
                    setTimeout(() => {
                        statusMessage.remove();
                    }, 3000);
                }else{
                    statusMessage.textContent = message.failure;
                }
            });
        });
    }

    //TABS

    

    const tabs = document.querySelectorAll('.glazing_block'),
          tabscontent = document.querySelectorAll('.glazing_content'),
          tabsParent  = document.querySelector('.glazing_slider');

          function HidetabsContent(){
            tabscontent.forEach(item =>{
                item.style.display = 'none';
            });
        }
          
          function ShowtabsContent(){
            tabscontent.forEach(item =>{
                item.style.display = 'block';
            });
        }

        HidetabsContent();
        ShowtabsContent();





        //TIMER

        const deadline = '2021-04-30';

        function getTimeRemaining(endtime) {
            const t = Date.parse(endtime) - Date.parse(new Date()),
                  days = Math.floor(t/ (1000*60*60*24)),
                  hours = Math.floor((t/(1000*60*60)%24)),
                  minutes = Math.floor((t/1000/60)%60),
                  seconds = Math.floor((t/1000)%60);

                  return{
                      'total': t,
                      'days': days,
                      'hours': hours,
                      'minutes':minutes,
                      'seconds':seconds
                  };
                  
        }

        function getZero(num){

            if(num >=0 && num <10){
                return '0'+num;
            }else{
                return num;
            }
        }

        function setClock (selector,endtime){
            const timer = document.querySelector(selector),
                  days = timer.querySelector('#days'),
                  hours = timer.querySelector('#hours'),
                  minutes = timer.querySelector('#minutes'),
                  seconds = timer.querySelector('#seconds'),
                  timeInterval = setInterval(updateClock,1000);

                  updateClock();

                  function updateClock() {

                    const t = getTimeRemaining(endtime);
                    days.innerHTML =getZero(t.days);
                    hours.innerHTML =getZero(t.hours);
                    minutes.innerHTML =getZero(t.minutes);
                    seconds.innerHTML =getZero(t.seconds);
                    
                    if(t.total <=0){
                        clearInterval(timeInterval);
                    }
                }
        }

      setClock('.timer1', deadline);  
        
        
        
});