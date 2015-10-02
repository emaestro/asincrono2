<div class="row">
	<div class="col-md-8">
		<h1>Modificar Usuario</h1>

		<form class="form-horizontal" name='fregistro' id='fregistro' role='form'>

			<input type="hidden" id="txt-id" name="txt-id">
	
			<div class="form-group">
				<label for="txt-paterno" class="col-sm-3 control-label">Paterno :</label>
				<div class="col-sm-3">
					<input type="text" class="form-control" id="txt-paterno" name="txt-paterno"  placeholder="Apellido Paterno" maxlength="25" autofocus>
				</div>
			</div>

			<div class="form-group">
				<label for="txt-materno" class="col-sm-3 control-label">Materno :</label>
				<div class="col-sm-3">
					<input type="text" class="form-control" id="txt-materno" name="txt-materno" placeholder="Apellido Materno" maxlength="25">
				</div>
			</div>

			<div class="form-group">
				<label for="txt-nombres" class="col-sm-3 control-label">Nombres :</label>
				<div class="col-sm-3">
					<input type="text" class="form-control" id="txt-nombres" name="txt-nombres" placeholder="Nombres" maxlength="35">
				</div>
			</div>

			<div class="form-group">
				<label for="txt-usuario" class="col-sm-3 control-label">Usuario :</label>
				<div class="col-sm-3">
					<input type="text" class="form-control" id="txt-usuario" name="txt-usuario" placeholder="Usuario" maxlength="26">
				</div>
			</div>

			<div class="form-group">
				<label for="txt-clave" class="col-sm-3 control-label">Clave :</label>
				<div class="col-sm-3">
					<input type="password" class="form-control" id="txt-clave" name="txt-clave"  placeholder="Clave" maxlength="16">
				</div>
			</div>

			<div class="form-group">
				<label for="txt-clave" class="col-sm-3 control-label">Repetir Clave :</label>
				<div class="col-sm-3">
					<input type="password" class="form-control" id="txt-clave-2" name="txt-clave-2"  placeholder="Repetir Clave" maxlength="16">
				</div>
			</div>

			<div class="form-group">
				<div class="col-sm-offset-3 col-sm-6 ">
					<button type="submit" class="btn btn-primary" id="btnGuardarNuevo">Guardar cambios</button>
				</div>
			</div>


		</form>
	</div>
	<div class="col-md-4">
		<div class="alert alert-success">
			<h1 class="text-primary" id="h1Resultado"></h1>
		</div>
	</div>
</div>
