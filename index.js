console.log("Hello world");
console.log(30);
console.log(true);
console.log(3.1419);

//Comentarios en JavaScript
//Formas de Comentarios
// 1.Agregando '//' para comentarios de una sola línea
// 2. Agregando '/* */para bloques de Comentarios
// con el teclado: teclado ctrl + ]}

//Tipos de variables
//Palabras reserva var
//1. Númericos: int, float
// 2. String: cadenas de caracteres
// 3. Boolean: true or false
// 4. Arraya: Colección de datos, conjuntos de datos
//5. Objetos: Colección de propiedades

var age = 18;
console.log(age);
var main = " Informática";
console.log(main);
var status = false;
console.log(status);
var pets = ("Dogs", "cats", "chickens");
console.log(pets);
var movie = {
  name: "Pollitos en Fuga",
  hours: 2,
  type: "A",
  status: true
};
console.log(movie);

var boy = 'Jesús';
var girl = 'Jimena';

console.log(boy);
// Concatenación 
console.log(boy + girl);
console.log(boy + ' y ' + girl + ' son mejores amigos')
var friends = boy + ' y ' + girl + 'son los mejores amigos';

var points = 200;
console.log(girl + ' tiene ' + points + ' en su tarjeta de regalo');

var a = 8;
var b = 20;
var c = 8 - 20;
console.log(c);

var food = {
  name: ' Pizza',
  type: 'hawaina',
  time: 0.30,
  cost: 150,
  stock: 10
}
console.log(food);
console.log(food.cost);
console.log(food.name);
food.stock = food.stock - 5;
console.log(food);

var top5 = ['Apple,', 'Huawei', 'Samsung','Google Pixel', 'OnePlus'];
console.log(top5);
console.log(top5[2]);
console.log(top5[4]);
console.log(top5.length);
top5[2] = 'Sony Ericson';
console.log(top5);

var array = [
  'Jimena',
  18,
  ['Qurétaro', 98],
  false
];
console.log(array[2][1]);
console.log('Welcome');