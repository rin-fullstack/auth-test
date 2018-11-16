const bcrypt = require('bcrypt');
const { MD5 } = require('crypto-js');
const jwt = require('jsonwebtoken');

// bcrypt.genSalt(10, (err, salt) => {
// 	if (err) return next(err);
// 	bcrypt.hash('password123', salt, (err, hash) => {
// 		if (err) return next(err);
// 		console.log(hash);
// 	});
// });

// const secret = 'mysecretpassword';
// const secretSalt = 'potato';
// const user = {
// 	id: 1,
// 	token: MD5(secret).toString() + secretSalt
// };

// const receivedToken = '4cab2a2db6a3c31b01d804def28276e6potato';

// if (receivedToken === user.token) {
// 	console.log('Passwort ist richtig');
// }
// console.log(user);

const id = 1000;
const secret = 'ilikecake';
const receivedToken = 'eyJhbGciOiJIUzI1NiJ9.MTAwMA.6tz1Ry_1nRDdHyFn0XCXCOkV8Rul0yWWVf0cfyuZpsI';
const token = jwt.sign(id, secret);
const decodeToken = jwt.verify(receivedToken, secret);

console.log(token);
console.log(decodeToken);
