const bcrypt = require("bcryptjs");

const hashPass = (password) => bcrypt.hashSync(password, 5);
const comparePass = (password, hash) => bcrypt.compareSync(password, hash);

module.exports = { hashPass, comparePass };
