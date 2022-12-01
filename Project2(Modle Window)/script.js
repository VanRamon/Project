'use strict';

const modalWindow = document.querySelector('.modal-window');
const overlay = document.querySelector('.overlay');
const btnCloseModalWindow = document.querySelector('.close-modal-window');
const btnShoweModleWindoW = document.querySelectorAll ('.show-modal-window');

const closeModalWindow = function(){
    modalWindow.classList.add('hidden');
        overlay.classList.add('hidden');
};

const ShoweModleWindoW = function(){
    modalWindow.classList.remove('hidden');
    overlay.classList.remove('hidden'); 
};


for (let i = 0; i < btnShoweModleWindoW.length; i++) {
    btnShoweModleWindoW[i].addEventListener('click', ShoweModleWindoW);   
};

btnCloseModalWindow.addEventListener('click', closeModalWindow);

overlay.addEventListener('click', closeModalWindow);

document.addEventListener('keydown', function(e){
    if (e.key === 'Escape' && !modalWindow.classList.contains('hdden')){
        closeModalWindow()
     };
});

