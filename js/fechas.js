/**
* Comportamiento ejercicio 1
* @author Nieves Borrero
* @version 1.0
*/
{
	let btn; 
	let hoy = new Date();
	let finTrimestre = new Date(2017,12-1,22);

	/**
	* Devuelve un día de la semana según el número introducido por parámetro.
	* @param number (int)
	* @return día de la semana (String)
	*/
	let dameDia = function(number){
		let weekDays = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
		return weekDays[number];
	}

	/**
	* Devuelve un mes según el número introducido por parámetro.
	* @param number (int)
	* @return mes (String)
	*/
	let dameMes = function(number){
		let months = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
		return months[number];
	}

	/**
	* Devuelve un mensaje con la fecha actual
	* @return cadena con la fecha actual
	*/
	let mostrarFechaActual = function(){
		let day = hoy.getDate();
		let month = hoy.getMonth();
		let year = hoy.getFullYear();
		let weekDay = hoy.getDay();
		return 'Hoy es '+dameDia(weekDay)+', '+day+' de '+dameMes(month)+' de '+year;
	}


	/**
	* Devuelve un mensaje con la fecha de fin de trimestre
	* @return cadena con la fecha de fin de trimestre
	*/
	let mostrarFinTrimestre = function(){
		let day = finTrimestre.getDate();
		let month = finTrimestre.getMonth();
		let year = finTrimestre.getFullYear();
		let weekDay = finTrimestre.getDay();
		return 'El fin de trimestre será '+dameDia(weekDay)+', '+day+' de '+dameMes(month)+' de '+year;
	}

	/**
	* Calcula los días entre la fecha actual y fin de trimestre
	*/
	let calcularDias = function(){
		let mHoy = hoy.getTime();
		let mFinTrimestre = finTrimestre.getTime();
		let total = mFinTrimestre - mHoy;
		let dias = Math.trunc(total/ (24 * 60 * 60 *1000));
		return 'Y sólo quedan '+dias+' días';
	}

	/**
	* Cierra la ventana comunicando a la ventana padre que ha sido cerrada
	*/
	let cerrarVentana = function(){
		window.opener.document.getElementById('cerrada').innerHTML= 'Ventana cerrada';
		window.close();
	}

	/**
	* Genera los elementos del árbol DOM 
	*/
	let generarDocumentoEjercicio1 = function(){
		let nombre = document.createTextNode('Nieves Borrero Barea');
		let h1 = document.createElement('h1');
		let textos = [mostrarFechaActual(), mostrarFinTrimestre(), calcularDias()];
		// Creamos un documentFragment para evitar accesos innecesarios al árbol DOM.
		let docFrag = document.createDocumentFragment();

		h1.appendChild(nombre);
		docFrag.appendChild(h1);

		textos.forEach(function(texto){
			let text = document.createTextNode(texto);
			let p = document.createElement("p");
			p.appendChild(text);
			docFrag.appendChild(p);
		});

		btn = document.createElement("input");
		btn.setAttribute('id', 'button');
		btn.setAttribute('type', 'button');
		btn.setAttribute('value', 'cerrar');
		docFrag.appendChild(btn);
		// Añadimos el documentFragment al body.
		document.body.appendChild(docFrag); 

	}

	generarDocumentoEjercicio1();

	btn = document.getElementById('button');

	btn.addEventListener('click', cerrarVentana);
}