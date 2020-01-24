const knex = require("knex")({
  client: "pg",
  connection: {
    host: "127.0.0.1",
    user: "postgres",
    password: "",
    database: "bookshelf2",
    charset: "utf8"
  }
});

module.exports = knex;
