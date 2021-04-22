function modalCalc() {
    function bindModal(btnSelector, tabSelector, btnCloseSelector, closeClickOverlay = true) {

        const triggerBtn = document.querySelectorAll(btnSelector),
            modalWind = document.querySelector(tabSelector),
            closeModal = document.querySelector(btnCloseSelector),
            windows = document.querySelectorAll('[data-calc]');

        triggerBtn.forEach(item => {

             //закрытие окон
             windows.forEach(item => {
                item.style.display = 'none';
            });


            item.addEventListener('click', () => {
                modalWind.style.display = 'block';
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






export default modalCalc;