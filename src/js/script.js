import forms from './moduls/forms';
import modal from './moduls/modal';
import modalCalc from './moduls/modalCalc';
import modalTabs1 from './moduls/modalTabs1';
import timer from './moduls/timer';
import images from './moduls/images';

window.addEventListener('DOMContentLoaded', () => {



    forms();
    modal();

    modalCalc();
    



    modalTabs1('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
    modalTabs1('.decoration_slider', '.no_click', '.decoration_content >div >div', 'after_click');
    modalTabs1('.balcon_icons', '.balcon_icons_img', '.big_img >img', 'do_image_more', 'inline-block');

    timer();
    images();

});