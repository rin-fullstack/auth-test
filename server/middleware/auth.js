const { User } = require('./../models/user');

let auth = (res, req, next) => {
	let token = req.cookies.auth;
	User.findByToken(token, (err, user) => {
		if (err) throw err;
		if (!user) return res.status(401).send('You have no access!'); // 401 - no auth

		req.token = token;
		next();
	});
};

module.exports = { auth };
