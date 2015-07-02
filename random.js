// Math.random() devuelve número aleatorio entre 0 y 1.
var numero = Math.random();

var str =' MAYOR que 0,5';

if (numero <= 0.5){
	str = ' MENOR que 0,5';
} else if (numero === 5) {
	str = ' IGUAL que 0,5'; //OPCIÓN CON PROBABILIDAD PRÁCTICAMENTE NULA
}

console.log('\n' + numero + str + '\n');
