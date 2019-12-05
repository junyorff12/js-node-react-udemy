'use strict';

document.querySelectorAll('a').forEach(link => {
  document.querySelector('#conteudo');
  link.addEventListener('click', (e) => {
    e.preventDefault();
    fetch(link.href)
      .then(link => link.text())
      .then(data => conteudo.innerHTML = data);
  });
});