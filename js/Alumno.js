/**
* Pseudoclase Alumno
* @author Nieves Borrero
* @version 1.0
*/

{
/**
* Función constructora
* @param nombre (String)
* @param apellido1 (String)
* @param fecha (Date)
*/
function Alumno(nombre, apellido1, apellido2, fecha){
	this.nombre = nombre;
	this.apellido1 = apellido1;
	this.apellido2 = apellido2;
	this.fecha = fecha;
}

/**
* Muestra los datos del alumno
* @return datos (String)
*/
Alumno.prototype.mostrarDatos = function(){
	let datos = 'Nombre: '+this.nombre+'<br> Apellidos: '+this.apellido1+' '+this.apellido2+'<br>'
		+ this.calcularEdad();
	return datos;
}

/**
 * Comprueba si la fecha es futura y en tal caso lanza una excepción.
 */
Alumno.prototype.comprobarFechaFutura = function(){
	let hoy = new Date();
	if(this.fecha > hoy)
		throw "La fecha es futura. Imposible calcular la edad.";
}

/**
* Calcula la edad del alumno, en caso de no poner porque la fecha sea futura, lanza una excepción
* @return edad (String)
*/
Alumno.prototype.calcularEdad = function(){
	let hoy = new Date();
	let mil = hoy.getTime()-this.fecha.getTime();
	edad = Math.trunc(mil/(365 * 24 * 60 * 60 * 1000));
	try {
		this.comprobarFechaFutura();
		return 'Edad: '+ edad + ' años';
	} catch(e) {
		return e;
	}		
}
}
