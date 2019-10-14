const ferrari = {
  name : 'f40',
  max  : 400
};

const volvo = {
  name : 'scania',
  max  : 100
};

console.log(ferrari.__proto__);
console.log(volvo.__proto__);

console.log(ferrari.__proto__ === Object.prototype);
