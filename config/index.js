const { PORT } = require("./environtment");
const connection = require("./connection");

module.exports = {
  PORT: PORT,
  connection: connection
};
