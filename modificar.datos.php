<?php
	require("inc/mysql.php");

	$sSQL	=	"SELECT u.* "
			.	"FROM usuarios u "
			.	"WHERE u.usuario_id = {$_POST['id']}";
	$oResponse = array();
	$tmpUsuarios = array();
	if ($oUsuarios = mysqli($sSQL)) {
		$oResponse['success'] = TRUE;
		$aUsuario = $oUsuarios->fetch_assoc();
		$oResponse['data'] = $aUsuario;
	}
	else
	{
		$oResponse['success'] = FALSE;
		$oResponse['mensaje'] = "No se pudo obtener Usuarios";
	}

	echo json_encode($oResponse);		
?>