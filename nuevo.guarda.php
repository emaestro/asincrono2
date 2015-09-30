<?php

	//print_r($_POST);

	//Por aqui hacer el require de db.php

	$sSQL	=	"INSERT INTO usuarios SET "
			.	"paterno = '{$_POST['txt-paterno']}', "
			.	"materno = '{$_POST['txt-materno']}' "

	//Luego que tenemos $sSQL ejecutamos con $conexion->query($sSQL)
?>