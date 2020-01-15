'use strict';

let hash = window.location.hash.slice(1);

document.querySelectorAll('[data-js="menu-item"]').forEach(item => {
    item.classList.add(item.textContent);
    if(item.classList.contains(hash)){
        item.style.backgroundColor = 'red';
    }
})



