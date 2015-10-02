<?php

	//print_r($_POST);

	//Por aqui hacer el require de db.php

	require("inc/mysql.php");

	$sSQL	=	"UPDATE usuarios SET "
			.	"paterno = '{$_POST['txt-paterno']}', "
			.	"materno = '{$_POST['txt-materno']}', "
			.	"nombres = '{$_POST['txt-nombres']}', "
			.	"usuario = '{$_POST['txt-usuario']}', "
			.	"clave = '{$_POST['txt-clave']}' "
			.	"WHERE usuario_id = {$_POST['txt-id']}";
	$oResponse = array();
	if ($oResultado = mysqli($sSQL))
	{
		$oResponse['success'] = TRUE;
	}
	else
	{
		$oResponse['success'] = FALSE;

	}
	
	echo json_encode($oResponse);
?>