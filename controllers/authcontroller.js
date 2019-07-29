var exports = (module.exports = {});

exports.signup = function(req, res) {
	res.render('signup');
};

exports.signin = function(req, res) {
	res.render('signin');
};

exports.hub = function(req, res) {
	res.render('hub', req.user);
};

exports.collector = function(req, res) {
	res.render('collector', req.user);
};

exports.rps = function(req, res) {
	res.render('rps', req.user);
};

exports.home = function(req, res) {
	res.render('home', req.user);
};

exports.store = function(req, res) {
	res.render('store', req.user);
};

exports.logout = function(req, res) {
	req.session.destroy(function(err) {
		res.redirect('/');
	});
};
