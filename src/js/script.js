window.addEventListener('DOMContentLoaded', () => {

    const forms = require('./moduls/forms'),
        modal = require('./moduls/modal'),
        modalCalc = require('./moduls/modalCalc'),
        modalTabs1 = require('./moduls/modalTabs1'),
        modalTabs2 = require('./moduls/modalTabs2'),
        timer = require('./moduls/timer');

forms();
modal();
modalCalc();
modalTabs1();
modalTabs2();
timer();

});