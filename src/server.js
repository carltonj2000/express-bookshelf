const app = require("express")();
const bodyParser = require("body-parser");
const knex = require("./config/db");
const bookshelf = require("bookshelf")(knex);

app.use(bodyParser.urlencoded({ extended: true }));

const Users = bookshelf.Model.extend({ tableName: "users" });

app.get("/users", async (req, res) => {
  const users = await new Users().fetchAll();
  res.json(users);
});

app.get("/users/:email", async (req, res) => {
  const email = req.params;
  const user = await Users.forge({ email }).fetch();
  res.json(user);
});

const PORT = process.env.PORT || 7000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}.`));
