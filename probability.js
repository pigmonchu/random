var numero, menor=0, mayor=0, igual=0;
for (var i=0; i<1e6; i++) {
	numero = Math.random();
	if (numero < 0.5)
		menor++;
	else if (numero === 0.5)
		igual++;
	else
		mayor ++;
}

console.log("\nTotal elecciones: "+i+"\nMenor que 0,5: "+menor+"\nIgual a 0,5: "+igual+"\nMayor que 0,5: "+mayor);