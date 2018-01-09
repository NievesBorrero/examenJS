/** 
* Comportamiento del ejercicio 2
* @author Nieves Borrero
* @version 1.0
*/

{

let nombre, ap1, ap2, fecha, errNombre, errAp1, errAp2, errFecha;

/**
* Objeto para comprobar mediante funciones que los datos introducidos en el formulario sean correctos
*/
let tester = {
	/**
	* Comprueba que la fecha introducida sea la correcta, devolviendo un mensaje.
	* @param texto (String)
	* @return Cadena 
	*/
	testFecha: function(texto){
		let pattern = [/^(0?[1-9]|[12][0-9]|3[01])[-/](0?[1-9]|1[012])[-/]\d{4}$/, 'Formato de fecha erróneo'];
		if(pattern[0].test(texto))
			return this.testNewDate(texto);
		return pattern[1];
	},
	/**
	* Comprueba que la fecha sea una fecha válida, devolviendo un mensaje.
	* @param texto (String)
	* @return cadena vacia si la fecha es correcta, si no mensaje de error.
	*/
	testNewDate: function(texto){ 
		let aTrocitos = this.troceaCadena(texto);
		if(this.dameFecha(texto).getMonth()!=aTrocitos[1]-1) // Si introduce 12 no lo va a aceptar porque va del 0 al 11, así que restamos 1
			return 'Fecha no existe';
		return '';
	},
	/**
	* Comprueba que una cadena no esté vacia y contenga solo letras de la a a la z.
	*/
	testCadena: function(texto){
		let pattern = [/[A-Za-z]+/, 'No puede estar vacio']
		if(pattern[0].test(texto))
			return '';
		return pattern[1];
	},
	/**
	* Devuelve una nueva fecha a partir de la cadena introducida como parámetro.
	* @param texto (String)
	* @return nuevaFecha (Date)
	*/
	dameFecha: function(texto){
		let aTrocitos = this.troceaCadena(texto);
		let nuevaFecha = new Date(aTrocitos[2], aTrocitos[1]-1, aTrocitos[0]);
		return nuevaFecha;
	},
	/**
	* Devuelve un array con las partes de la cadena (día, mes, año)
	* @param texto (String)
	* @return aTrocitos (Array)
	*/
	troceaCadena: function(texto){
		let fecha = texto.replace(/[-]/g, '/');
		let aTrocitos = fecha.split('/');
		return aTrocitos;
	}
}

/**
* Extrae el valor de un input, quitándole los espacios en blanco a principio y al final
* @param campo (Elemento del árbol DOM)
* @return valor de ese elemento
*/

let extractValue = function(campo){
	return campo.value.trim();
}

/**
* Comprueba que el input introducido en el formulario sea el correcto, añadiendo la cadena 
* vacia o el mensaje de error correspondiente
* @param input (Elemento del árbol DOM, input)
* @param error (Elemento del árbol DOM, span)
*/
let comprobarInput = function(input, error){
	error.innerHTML = tester.testCadena(extractValue(input));
}


/**
* Comprueba que la fecha introducida en el formulario sea el correcto, añadiendo la cadena vacia o 
* el mensaje de error correspondiente
* @param fecha (Elemento del árbol DOM, input)
* @param errFecha (Elemento del árbol DOM, span)
*/
let comprobarFecha = function(){
	errFecha.innerHTML = tester.testFecha(extractValue(fecha));
}

/**
* Comprueba todos los inputs del formulario
*/
let comprobarTodo = function (){
	comprobarFecha();
	comprobarInput(nombre, errNombre);
	comprobarInput(ap1, errAp1);
	comprobarInput(ap2, errAp2);
	if(!hayError())
		crearAlumno();
}

/**
* Comprueba si hay error
* @return true o false 
*/
let hayError = function (){
	return errNombre.innerHTML!=''||errAp1.innerHTML!=''||errAp2.innerHTML!=''||errFecha.innerHTML!='';
}

/**
* Crea un alumno y lo muestra 
*/
let crearAlumno = function(){
	let fechaNacimiento = tester.dameFecha(extractValue(fecha));
	let alumno = new Alumno(extractValue(nombre), extractValue(ap1), extractValue(ap2), fechaNacimiento);
	mostrar(alumno);
}
/**
* Muestra un alumno en una nueva ventana
* @param alumno (Object)
*/
let mostrar = function(alumno){
	let ventana = window.open('','','width = 300 height = 200');
	ventana.document.write('<html><head><title>Nieves Borrero Barea</title></head><body></body></html>');
	ventana.document.close();
	ventana.document.body.innerHTML = '<h1>Alumno/a</h1>'+alumno.mostrarDatos();
	
}

/**
* Limpia los inputs del formulario.
*/
let limpiar = function(){
	nombre.value='';
	ap1.value='';
	ap2.value='';
	fecha.value='';
}

/**
* Inicializa todos los elementos y eventos.
*/
let init = function(){
	let crear = document.getElementById('crear');
	let borrar = document.getElementById('limpiar');

	nombre = document.getElementById('nombre');
	ap1 = document.getElementById('ap1');
	ap2 = document.getElementById('ap2');
	fecha = document.getElementById('fecha');
	errNombre = document.getElementById('errNombre');
	errAp1 = document.getElementById('errAp1');
	errAp2 = document.getElementById('errAp2');
	errFecha = document.getElementById('errFecha');	

	nombre.addEventListener('blur', comprobarInput.bind(null, nombre, errNombre));
	ap1.addEventListener('blur', comprobarInput.bind(null, ap1, errAp1));
	ap2.addEventListener('blur', comprobarInput.bind(null, ap2, errAp2));
	fecha.addEventListener('blur', comprobarFecha);
	crear.addEventListener('click', comprobarTodo);
	borrar.addEventListener('click', limpiar);
}

window.onload = init;

}
