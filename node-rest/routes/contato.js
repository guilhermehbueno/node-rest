
module.exports = function(app) {
	var contato = app.controllers.contato;
	app.get('/contatos', contato.index);
	app.get('/contatos/:id', contato.show);
	app.get('/contato/new', contato.new);
	app.post('/contatos', contato.create);
	app.get('/contatos/:id/edit', contato.edit);
	app.put('/contatos/:id', contato.update);
	app.del('/contatos/:id', contato.destroy);
}