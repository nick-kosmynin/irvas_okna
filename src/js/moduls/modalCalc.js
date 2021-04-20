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
export default modalCalc;