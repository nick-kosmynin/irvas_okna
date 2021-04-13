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