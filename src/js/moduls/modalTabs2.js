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