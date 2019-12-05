'use strict';

function showHide() {
  document.querySelectorAll('[data-js="folder"]').forEach(folder => {
    folder.addEventListener('click', function () {
      const ul = folder.nextElementSibling;
      const elementDisplay = ul.style.display;
      if (elementDisplay === 'none') {
        ul.style.display = 'block';
      } else {
        ul.style.display = 'none';
      }
    })
  })
}

showHide();
