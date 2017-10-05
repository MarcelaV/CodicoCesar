

var answer = prompt("Escribe tu nombre por favor"); //Preguntar al usuario su nombre

var result =answer; //Variable para almacenar respuesta

function cipher(){ FUNCIÓN QUE PIDE EL ENUNCIADO DEL EJERCICIO
for (var i = 0; i < answer.length; i++) { //FOR PARA RECORRER RESPUESTA
	 answer.charCodeAt(i);
console.log(i); 
	 //result = (i - 65 + 33) % 26 + 65; FUNCIÓN QUE CIFRA
	//var result = answer;

	//String.fromCharCode(97 + (answer.charCodeAt(i) + 33)) % 26; // % 26 + 65; FUNCIÓN QUE CIFRA

	 //result = answer.charCodeAt(i); //obtiene el código ASCII de una letra
	// (result - 65 + 33) % 26 + 65; //fórmula para obtener número de letra de un código ASCII
// (answer + 33) % 26;
}

 //String.fromCharCode(result);//obtiene letra desde un código ASCII

 
 
}