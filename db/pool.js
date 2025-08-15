const { Pool } = require("pg");

module.exports = new Pool({
  user: process.env.POOLUSER,
  password: process.env.POOLPASSWORD,
  host: process.env.POOLHOST,
  port: process.env.POOLPORT,
  database: process.env.POOLDATABASE,
});
 