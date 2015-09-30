
$(
	function () {

		/**************************************************************************************************
		 *	Implementamos el evento Click de la opción de Menú Nuevo
		 **************************************************************************************************/
		$("#a-nuevo").on("click", function(){
			$("#divPrincipal").load("nuevo.php", function (e) {


				$("#fregistro").on('submit', function (e) {

					$.ajax(
						{
							type: 'post',
							url: 'nuevo.guarda.php',
							data: $(this).serialize(),
							dataType: 'json',
							success: function(response){
								if (response.success) 
								{
									$("#a-listado").click();
								}
								else
								{
									alert("Error al insertar Nuevo Usuario");
								}
							}
						}                           
					);					

					e.preventDefault();
				});

				/*
				$("#btnGuardarNuevo").on("click", function (e) {
					alert("Guardar Nuevo Usuario");
					e.preventDefault();
				})
				*/
			});
		});

		/**************************************************************************************************
		 *	Implementamos el evento Click de la opción de Menú Listado
		 **************************************************************************************************/
		$("#a-listado").on("click", function(){
			$("#divPrincipal").load("listado.php", function () {

				$.ajax(
					{
						method: "post",
						url: "listado.datos.php",
						dataType: "json"
					}
				).done(function( response ) {

					var table = $('<table></table>').addClass('table table-striped table-bordered table-condensed');
					var row = $('<tr></tr>');
					var data = $('<th></th>').text("Paterno");
					table.append(row);
					row.append(data);

					data = $('<th></th>').text("Materno");
					table.append(row);
					row.append(data);

					data = $('<th></th>').text("Nombres");
					table.append(row);
					row.append(data);

					data = $('<th></th>').text("Usuario");
					table.append(row);
					row.append(data);

					data = $('<th></th>').text("Clave");
					table.append(row);
					row.append(data);

					
					$.each(response.data, function(id, fila){
						var row = $('<tr></tr>');
						var data = $('<td></td>').text(fila.paterno);
						table.append(row);
						row.append(data);

						data = $('<td></td>').text(fila.materno);
						table.append(row);
						row.append(data);

						data = $('<td></td>').text(fila.nombres);
						table.append(row);
						row.append(data);

						data = $('<td></td>').text(fila.usuario);
						table.append(row);
						row.append(data);

						data = $('<td></td>').text(fila.clave);
						table.append(row);
						row.append(data);
					});

					$('#divPrincipal').append(table);
				});

			});
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
