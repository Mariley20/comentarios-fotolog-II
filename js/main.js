/*aquí va tu código*/
const aplicacion = {
	item :{ 
		nombre : undefined,
		comentario : undefined
	},
	inicio : function(){
		aplicacion.item.nombre = $('#clave');
		aplicacion.item.comentario = $('#valor');
		console.log(localStorage)
		aplicacion.imprimirHTML();
		aplicacion.setup();
	},
	setup : function(){
		$('#guardarDatos').click(aplicacion.guardarComentario);
		$('#limpiarDatos').click(aplicacion.vaciarComentarios);
	},
	guardarComentario : function(){
		if (aplicacion.item.nombre.val() != "" && aplicacion.item.comentario.val() != "") {
			localStorage.setItem(aplicacion.item.nombre.val(), aplicacion.item.comentario.val());
			$('#comentarios').append(`<div><label>${aplicacion.item.nombre.val()}</label>\
				<p>${aplicacion.item.comentario.val()}</p></div>`);
		}else{
			$('#datos').text("No has introducido tu nombre y tu comentario");
		}
		aplicacion.limpiarCeldas();
	},
	vaciarComentarios : function(){
		localStorage.clear();
	},
	imprimirHTML : function(){
		if (localStorage.length >= 1) {
			for (var i = 0; i < localStorage.length; i++) {
				let nombre = localStorage.key(i);
				let comentario = localStorage.getItem(nombre);
				$('#comentarios').append(`<div><label>${nombre}</label>\
				<p>${comentario}</p></div>`);
			}
		}
	},
	limpiarCeldas : function(){
		$('#clave').val("").focus();
		$('#valor').val("");
	},
}
$(document).ready(aplicacion.inicio);