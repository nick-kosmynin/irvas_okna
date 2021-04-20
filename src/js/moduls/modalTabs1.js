const modalTabs1 = (headerselector, tabSelector, contentSelector,active, display = 'block') => {
    // modal tabs 1

    const gzSlider = document.querySelector(headerselector),
        gzBlock = document.querySelectorAll(tabSelector),
        gzContent = document.querySelectorAll(contentSelector);



    function hideTabContent() {
        gzContent.forEach(item => {
            item.style.display = 'none';
        });

        gzBlock.forEach(item => {
            item.classList.remove(active);
        });
    }

    function showTabsContent(i = 0) {
        gzContent[i].style.display = display;
          gzBlock[i].classList.add(active);

    }

    hideTabContent();
    showTabsContent();

    gzSlider.addEventListener('click', (event) => {
        const target = event.target;
        if (target && (target.classList.contains(tabSelector.replace(/\./, "")) ||
                target.parentNode.classList.contains(tabSelector.replace(/\./, "")))) {
            gzBlock.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabsContent(i);
                }
            });
        }
    });
};
export default modalTabs1;