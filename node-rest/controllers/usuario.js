var mongojs = require('mongojs');
var ObjectId = require('mongodb').ObjectID;
var db = mongojs('test', ['users']);

module.exports = function(app){
	var UsuarioController = {
		index: function(req, res){
		  db.users.find(function (err, users) {
		 	var params = {
		 		users: users
		 	};
		 	res.render('usuarios/index', params); 	
		  });
		},
		show: function(req, res){
			var id = req.params.id;
			console.log('Searching for user: '+id);
			db.users.findOne({_id : new ObjectId(id)}, function(err, users){
				var params = {
					usuario: users
				};
				console.log('Enviando user => '+users);
				console.log('Enviando params => '+params.usuario);
				res.render('usuarios/show',params);
			});
		},
		new: function(req, res){
			res.render('usuarios/create');
		},
		create: function(req, res){
			var usuario = req.body.usuario;
			db.users.save(usuario);
			res.redirect('/usuarios');
		},
		edit: function(req, res){
			var id = req.params.id;
			db.users.findOne({_id : id}, function(err, users){
				var params = {
					usuario: users
				};
				res.render('usuarios/edit',params);
			});
		},
		update: function(req, res){

		}, 
		destroy: function(req, res){

		}
	}
	return UsuarioController;
};