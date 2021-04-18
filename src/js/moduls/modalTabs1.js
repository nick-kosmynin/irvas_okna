function modalTabs1 () {
        // modal tabs 1

        const gzSlider = document.querySelector('.glazing_slider'),
        gzBlock = document.querySelectorAll('.glazing_block'),
        gzContent = document.querySelectorAll('.glazing_content');
        


    function hideTabContent() {
        gzContent.forEach(item => {
            item.style.display = 'none';
        });

      //gzBlock.forEach(item => {
       //   item.classList.remove('');
     // });
    }

    function showTabsContent(i = 0) {
        gzContent[i].style.display = 'block';
       // gzBlock[i].classList.add('');

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
}
export default modalTabs1;