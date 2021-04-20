import forms from './moduls/forms';
    import modal from './moduls/modal';
    import modalCalc from './moduls/modalCalc';
    import modalTabs1 from './moduls/modalTabs1';
    import modalTabs2 from './moduls/modalTabs2';
    import timer from './moduls/timer';
    import images from './moduls/images';

window.addEventListener('DOMContentLoaded', () => {

    

    forms();
    modal();

    modalCalc('.glazing_price_btn','.popup_calc','.popup_calc_close');
    modalCalc('.popup_calc_button','.popup_calc_profile','.popup_calc_profile_close');
    modalCalc('.popup_calc_profile_button','.popup_calc_end','.popup_calc_end_close');
    
    

    modalTabs1('.glazing_slider','.glazing_block','.glazing_content');
    modalTabs1('.balcon_icons','.balcon_icons_img ','.big_img >img','do_image_more','inline-block');

    modalTabs2();
    timer();
    images();

});