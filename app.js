

var answer = prompt("Escribe tu nombre por favor"); //Preguntar

var result =answer; //Almacenar respuesta

function cipher(){
for (var i = 0; i < answer.length; i++) { //Recorrer respuesta
	 answer.charCodeAt(i);

	 //result = (i - 65 + 33) % 26 + 65;
	//var result = answer;

	//String.fromCharCode(97 + (answer.charCodeAt(i) + 33)) % 26; // % 26 + 65;

	 //result = answer.charCodeAt(i); //obtiene el código ASCII de una letra
	// (result - 65 + 33) % 26 + 65; //fórmula para obtener número de letra de un código ASCII
// (answer + 33) % 26;
}

 //String.fromCharCode(result);//obtiene letra desde un código ASCII

 
 
}
console.log(i);

/*

Obtener respuesta


Obtener código ASCII de respuesta
Aplicar fórmula encriptación César (33 a la derecha) (x+n)%26
Retornar a letras números obtenidos con fórmula anterior
*/












//console.log(answer.charCodeAt(answer));

//console.log((result - 65 + 33) % 26 + 65);
// (i + 33) % 26;

//(answer - 65 + 33) % 26 + 25

//dónde se agrega la función
//cómo hago el return

	 //return i;
		 //answer[answer.charCodeAt()]; 
		 //return answer.charCodeAt();
		 //result(answer); */