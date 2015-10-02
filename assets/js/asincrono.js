function eliminar(id)
{
	$.ajax(
		{
			type: 'post',
			url: 'eliminar.php',
			data: {id:id},
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
}


function modificar(id)
{
	$("#divPrincipal").load("modificar.formulario.php", function () {
		$.ajax(
			{
				type: 'post',
				url: 'modificar.datos.php',
				data: {id:id},
				dataType: 'json',
				success: function(response){
					if (response.success) 
					{
						$("#txt-id").val(response.data.persona_id);
						$("#txt-paterno").val(response.data.paterno);
						$("#txt-materno").val(response.data.materno);
						$("#txt-nombres").val(response.data.nombres);
						$("#txt-clave").val(response.data.clave);
						$("#txt-clave-2").val(response.data.clave);
					}
					else
					{
						alert("Error al insertar Nuevo Usuario");
					}
				}
			}                           
		);					

	});
}

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

					data = $('<th></th>').text("");
					table.append(row);
					row.append(data);

					
					$.each(response.data, function(id, fila){
						var row = $('<tr></tr>').attr("id", "tr"+fila.usuario_id);
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

						data = $("<td><a href='javascript:void(0);' onclick='modificar("+fila.usuario_id+")'><span class='glyphicon glyphicon-edit'></span></a> <a href='javascript:void(0);' onclick='eliminar("+fila.usuario_id+")'><span class='glyphicon glyphicon-remove'></span></a> </td>");
						table.append(row);
						row.append(data);

					});

					$('#divPrincipal').append(table);
					$( "#tr"+response.ultimo).fadeTo(1000, 0.1).fadeTo(1000, 1.0);
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
