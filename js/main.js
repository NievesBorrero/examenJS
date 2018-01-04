/**
* Funcionalidad del index
* @author Nieves Borrero
* @version 1.0
*/

{
	let botones = document.getElementsByTagName("input");

	/*
	* Abre una nueva ventana con el primer ejercicio
	*/
	let abrirEjercicio1 = function(){
		let ventana = window.open('','','width = 600 height = 300');
		ventana.document.write('<html><head><title>Nieves Borrero Barea</title><style type="text/css"> body{ text-align: center;} </style>'
			+'<script src="./js/fechas.js" type="text/javascript" charset="utf-8" async defer></script></head><body></body></html>');
		ventana.document.close();
	}

	/**
	* Abre el html donde se encuentra el segundo ejercicio
	*/
	let abrirEjercicio2 = function(){
		window.open('./ejercicio2.html','');
	}

	botones[0].addEventListener('click', abrirEjercicio1);
	botones[1].addEventListener('click', abrirEjercicio2);
}

