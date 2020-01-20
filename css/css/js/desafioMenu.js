'use strict';

window.onhashchange = function(e) {
    const oldHash = e.oldURL.split('#')[1];
    const newHash = e.newURL.split('#')[1];
    console.log(oldHash, newHash);
    const oldMenu = document.querySelector(`.menu a[href='#${oldHash}']`);
    const newMenu = document.querySelector(`.menu a[href='#${newHash}']`);

    oldMenu && oldMenu.classList.remove('selected');
    newMenu && newMenu.classList.add('selected'); 
}