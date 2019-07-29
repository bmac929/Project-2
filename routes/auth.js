var authController = require('../controllers/authcontroller.js');

module.exports = function(app, passport) {
	app.get('/signup', authController.signup);

	app.get('/signin', authController.signin);

	app.get('/hub', isLoggedIn, authController.hub);

	app.get('/collector', isLoggedIn, authController.collector)

	app.get('/rps', isLoggedIn, authController.rps)

	app.get('/store', isLoggedIn, authController.store)

	app.get('/home', isLoggedIn, authController.home)

	app.get('/logout', authController.logout);

	app.post(
		'/signup',
		passport.authenticate('local-signup', {
			successRedirect: '/hub',
			failureRedirect: '/signup'
		})
	);

	app.post(
		'/signin',
		passport.authenticate('local-signin', {
			successRedirect: '/hub',

			failureRedirect: '/signin'
		})
	);

	function isLoggedIn(req, res, next) {
		if (req.isAuthenticated()) return next();

		res.redirect('/signin');
	}
};
