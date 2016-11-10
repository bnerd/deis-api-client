# Deis Workflow API Client

Node.js client for [Deis Worklow](https://deis.com/docs/workflow/).

# Installation

```bash
npm install deis-api-client
```

# Available methods

* auth ✔
* apps ✔
* autoscale -> settings
* builds ✔
* certs
* config (partial)
* domains ✔
* git
* healthchecks
* keys ✔
* limits
* perms
* ps ✔
* registry
* releases ✔
* routing ✔
* maintenance ✔
* tags
* tls
* users ✔
* whitelist -> settings

# Usage

Pretty straightforward.

## Initialize client

```javascript
// require the library
var Deis = require('deis-api-client')


/* Initialize with token */
var deis = new Deis({
  token: <TOKEN>,
  endpoint: <ENDPOINT>
})

/* or initialize with username and password */

var deis = new Deis({
  username: <USERNAME>,
  password: <PASSWORD>,
  endpoint: <ENDPOINT>
}, function(result) {
  console.log("callback", result)
}).then((result) => {
  console.log("resolve", result)
})

/*
or initialize the client via Environment Variables

(A)
DEIS_TOKEN=DEIS_TOKEN DEIS_ENDPOINT=DEIS_ENDPOINT node app.js

(B)
Create a .env file in your root directory

# .env
DEIS_TOKEN=DEIS_TOKEN
DEIS_ENDPOINT=DEIS_ENDPOINT

and initialize the client
*/

var deis = new Deis()
```

## Apps

### List all apps

```javascript
deis.apps.list("example-app").then((results) => {
  console.log(results)
})
```

# Run the tests

Configure the Deis Client with environment variables, e.g.

```bash
# .env
DEIS_ENDPOINT=<ENDPOINT>
DEIS_TOKEN=<TOKEN>
```

then run

```bash
$ npm test
```

# Copyright

Copyright (c) 2016 Bernd Suenkel. See LICENSE.txt for further details.
