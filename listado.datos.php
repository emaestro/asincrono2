<?php
	require("inc/mysql.php");

	$sSQL	=	"SELECT u.* "
			.	"FROM usuarios u "
			.	"ORDER BY u.paterno, u.materno, u.nombres";
	$oResponse = array();
	$tmpUsuarios = array();
	if ($oUsuarios = mysqli($sSQL)) {
		$oResponse['success'] = TRUE;
		while ($aUsuario = $oUsuarios->fetch_assoc())
		{
			$tmpUsuarios[] = $aUsuario;
		}
		$oResponse['data'] = $tmpUsuarios;
	}
	else
	{
		$oResponse['success'] = FALSE;
		$oResponse['mensaje'] = "No se pudo obtener Usuarios";
	}

	echo json_encode($oResponse);		
?>