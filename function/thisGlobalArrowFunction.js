function comparaComThis(param) {
  console.log(this === param);
}

comparaComThis(global);

let obj = {};
comparaComThis = comparaComThis.bind(obj);
comparaComThis(obj);

//this arrow

let comparaComThisArrow = param => console.log(this === param);
comparaComThisArrow(global); //false
comparaComThisArrow(module.exports); //true

comparaComThisArrow = comparaComThisArrow.bind(obj);
comparaComThisArrow(obj); //false, o contexto do this não muda na Arrow Function
comparaComThisArrow(module.exports); //true
