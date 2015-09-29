
$(
	function () {

		/**************************************************************************************************
		 *	Implementamos el evento Click de la opción de Menú Nuevo
		 **************************************************************************************************/
		$("#a-nuevo").on("click", function(){
			$("#divPrincipal").load("nuevo.php", function (e) {
				$("#btnGuardarNuevo").on("click", function (e) {
					alert("Guardar Nuevo Usuario");
					e.preventDefault();
				})
			});
		});

		/**************************************************************************************************
		 *	Implementamos el evento Click de la opción de Menú Listado
		 **************************************************************************************************/
		$("#a-listado").on("click", function(){
			$("#divPrincipal").load("listado.php");
		});
		/**************************************************************************************************
		 *	Implementamos el evento Click de la opción de Menú Listado
		 **************************************************************************************************/
		$("#a-acercade").on("click", function(){
			$("#divPrincipal").load("acercade.php");
		});
		/**************************************************************************************************
		 *	Implementamos el evento Click de la opción de Menú Contacto
		 **************************************************************************************************/
		$("#a-contacto").on("click", function(){
			$("#divPrincipal").load("contacto.php");
		});
		/**************************************************************************************************
		 *	Implementamos el evento Click de la opción de Menú Salir
		 **************************************************************************************************/
		$("#a-salir").on("click", function(){
			$("#divPrincipal").load("salir.php");
		});
	}
);
