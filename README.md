# How to Install
Clone this repo :
```sh
    git clone https://github.com/brothergiez/express-rethinkdb.git
    cd express-rethinkdb && npm install
```

# How to Run
Make sure in your local machine already installed rethinkdb. (You can read this [documentation] for rethinkdb installation).

From your this project working directory, config your HTTP service and rethinkdb configuration:
```sh
  cp .env.example .env
```
adjust your configuration in the .env file, then you can run the server.

```sh
npm run dev
```

Run via curl:
**Create new record :**

```sh
curl --request POST \
  --url http://localhost:3010/user \
  --header 'content-type: application/json' \
  --data '{
	"username": "brothergiez",
	"password": "my-password-here"
}	'
```

**Get single Record :**

```sh
curl --request GET \
  --url http://localhost:3010/user/your-username
```

**Get all records :**

```sh
curl --request GET \
  --url http://localhost:3010/users
```

*So it's easier to use the [insomnia] rest client, and copy the curl into the url field.*

# Dependencies
express ==> [Express]
thinky ==> [thinky]
nodemon ==> [nodemon]

[documentation]: <https://rethinkdb.com/docs/install/>
[Express]: <https://expressjs.com/>
[thinky]: <http://justonepixel.com/thinky/>
[nodemon]: <https://nodemon.io/>
[insomnia]: <https://updates.insomnia.rest/downloads/mac/latest?app=com.insomnia.app&ref=https%3A%2F%2Fgithub.com%2Fbrothergiez%2F>