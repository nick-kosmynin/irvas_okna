

window.addEventListener('DOMContentLoaded', () => {

    // MODAL

const modalTrigger = document.querySelector('[data-modal]'),
modal = document.querySelector('.popup_engineer'),
modalCloseBtn = document.querySelector('[data-close]');

modalTrigger.addEventListener('click', ()=>{
modal.classList.add('show');
modal.classList.remove('hide');
document.body.style.overflow = 'hidden';
});  

function closeModal(){
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';
}

modalCloseBtn.addEventListener('click', closeModal ); 

modal.addEventListener('click', (e)=>{
     if(e.target === modal){
        closeModal();
     }
});

document.addEventListener('keydown', (e) => {
    if(e.code === "Escape"){
        closeModal();
    }
});



});
      