
const colors = {
    p: '#388e3c',
    div: '#1565c0',
    span: '#e53935',
    section: '#f67809',
    ul: '#5e35b1',
    ol: '#fbc02d',
    header: '#d81b60',
    nav: '#64dd17',
    main: '#00acc1',
    footer: '#034ffe',
    form: '#9f6581',
    body: '#25b6da',
    padrao: '#616161',
    getColor(tag){
        return this[tag] ? this[tag]: this.padrao;
    }
}
/* 
    Assim funciona em qualquer browser
*/
/* const elementos = document.getElementsByClassName('tag');
Array.prototype.forEach.call(elementos, function(el){
    const nameOfTag = el.tagName.toLowerCase();
    el.style.borderColor = colors.getColor(nameOfTag);
    if(!el.classList.contains('nolabel')){
        const label = document.createElement('label');
        label.innerHTML = nameOfTag;
        label.style.backgroundColor = colors.getColor(nameOfTag);
        el.insertBefore(label, el.childNodes[0]);
    }
})  */

/* 
Mas prefiro assim, (moderno)
 */
const elementos = document.getElementsByClassName('tag');
[...elementos].forEach(el => {
    const nameOfTag = el.tagName.toLowerCase();
    el.style.borderColor = colors.getColor(nameOfTag);
    if(!el.classList.contains('nolabel')){
        const label = document.createElement('label');
        label.innerHTML = nameOfTag;
        label.style.backgroundColor = colors.getColor(nameOfTag);
        el.insertBefore(label, el.childNodes[0]);
    }
})