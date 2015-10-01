<?php

	//print_r($_POST);

	//Por aqui hacer el require de db.php

	require("inc/mysql.php");

	$sSQL	=	"DELETE FROM usuarios "
			.	"WHERE usuario_id = '{$_POST['id']}' ";
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