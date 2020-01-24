# Express Bookshelf Knex Postgres

The code in this repository is based on the
[A crash course to Bookshelf.js](https://dev.to/projectescape/a-crash-course-to-bookshelf-js-2ejb)
article.

```
bookshelf2-# ;
   name   |       email
----------+--------------------
 carlton  | carlton@gmail.com
 carlton1 | carlton1@gmail.com
(2 rows)
```

# Setup

- `createdb bookshelf1` in terminal
- `psql -d bookshelf1 -a -f cities_postgresql.sql` to setup cities

# Postgres Commands

- dbeaver for db management via a GUI
- brew install postgres
- pg_ctl -D /usr/local/var/postgres stop/start
- createuser -s postgres
- createdb tester
- psql tester # open cli with database
- psql -c "\du"
- psql -c "\l"
- `psql -U carltonjoseph -c "drop database postgres"`
- `psql -c "drop user postgress"`
- psql -l
- psql
  - '\d' List of relations
  - `\du` display users
  - `\l` list databases
  - create user postgres superuser
  - create database postgres with owner postgres
  - 'd user' describe a user table in the db
  - `drop database <name>`
