const images = () => {
    const imgPopup = document.createElement('div'), //создание модального окна
        workSection = document.querySelector('.works'), //получение общего блока для изображения
        bigImage = document.createElement('img'); // создание изображения


    imgPopup.classList.add('popup'); //добавление готового класса(существует внутри java script)

    workSection.appendChild(imgPopup); // помещение класса в секцию

    imgPopup.style.justifyContent = 'center';
    imgPopup.style.alignItems = 'center';
    imgPopup.style.display = 'none';

    imgPopup.appendChild(bigImage); // помещение в модальное окно изображения

    workSection.addEventListener('click', (e) => { // при делег соб всегда создаем обьект события(е) 
        e.preventDefault(); //действие не должно выполняться 

        let target = e.target;

        if (target && target.classList.contains('preview')) {
            imgPopup.style.display = 'flex';
            const path = target.parentNode.getAttribute('href');
            bigImage.setAttribute('src', path); // устанавливаем src в позицию path
        }

        if (target && target.matches('div.popup')) { // mathes - совпадение
            imgPopup.style.display = 'none';
        }
    });
};



export default images;