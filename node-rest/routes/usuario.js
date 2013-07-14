module.exports = function(app) {
	var usuario = app.controllers.usuario;
	app.get('/usuarios', usuario.index);
	app.get('/usuarios/:id', usuario.show);
	app.get('/usuario/new', usuario.new);
	app.post('/usuario', usuario.create);
	app.get('/usuarios/:id/edit', usuario.edit);
	app.put('/usuarios/:id', usuario.update);
	app.del('/usuario/:id', usuario.destroy);
}