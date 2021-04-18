function modalTabs2() {

    // modal tabs 2

    const decSlider = document.querySelector('.decoration_slider'),
        decItem = document.querySelectorAll('.no_click'),
        decor = document.querySelectorAll('.decoration_content >div >div');


    function hideDecSlider() {
        decor.forEach(item => {
            item.style.display = 'none';
        });

        decItem.forEach(item => {
            item.classList.remove('after_click');
        });

        //decItem.forEach(item => {
         //   item.classList.remove('');
       // });
    }

    function showDecSlider(i = 0) {

        decor[i].style.display = 'block';
        decItem[i].classList.add('after_click');
       // decItem[i].classList.add('');
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
export default modalTabs2;