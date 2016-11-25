var _ = require("lodash")
var https = require('https')

class Deis{
  constructor(options = {}, callback) {
    let defaults = {
      api_version: 'v2',
      usernname: process.env.DEIS_USERNAME,
      password: process.env.DEIS_PASSWORD,
      token: process.env.DEIS_TOKEN,
      endpoint: process.env.DEIS_ENDPOINT,
      secure: true
    }

    this.options = _.merge(defaults, options)

    // Optionally skip SSL verfication
    if (!this.options.secure) {
      process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"
    }

    this.request_headers = {}

    /* Endpoint /apps */
    let apps  = require('./endpoints/apps.js')(this)
    this.apps = apps
    /* Endpoint /apps */

    /* Endpoint /apps */
    let perms  = require('./endpoints/perms.js')(this)
    this.perms = perms
    /* Endpoint /apps */

    /* Endpoint /builds */
    let builds  = require('./endpoints/builds.js')(this)
    this.builds = builds
    /* Endpoint /builds */

    /* Endpoint /config */
    let config  = require('./endpoints/config.js')(this)
    this.config = config
    /* Endpoint /config */

    /* Endpoint /domains */
    let domains  = require('./endpoints/domains.js')(this)
    this.domains = domains
    /* Endpoint /domains */

    /* Endpoint /ps */
    let ps  = require('./endpoints/ps.js')(this)
    this.ps = ps
    /* Endpoint /ps */

    /* Endpoint /users */
    let users  = require('./endpoints/users.js')(this)
    this.users = users
    /* Endpoint /users */

    /* Endpoint /releases */
    let releases  = require('./endpoints/releases.js')(this)
    this.releases = releases
    /* Endpoint /releases */

    /* Endpoint /maintenance */
    let maintenance  = require('./endpoints/maintenance.js')(this)
    this.maintenance = maintenance
    /* Endpoint /maintenenace */

    /* Endpoint /routing */
    let routing  = require('./endpoints/routing.js')(this)
    this.routing = routing
    /* Endpoint /routing */

    /* Endpoint /keys */
    let keys  = require('./endpoints/keys.js')(this)
    this.keys = keys
    /* Endpoint /keys */

    /* Endpoint /auth */
    let auth  = require('./endpoints/auth.js')(this)
    this.auth = auth
    /* Endpoint /keys */

    /* Shortcuts */
    this.create = apps.create
    this.logs   = apps.logs
    this.run    = apps.run
    this.scale  = ps.scale
    this.users  = users.list
    /* Shortcuts */

    /* Login User if credentials provided */
    if (this.options.username && this.options.password) {
      return new Promise((resolve, reject) => {
        this.auth.login({
          username: this.options.username,
          password: this.options.password
        })
        .then((data) => {
          if (callback) { callback(data) }
          resolve(data)
        })
      })
    }
  }

  /* GET Request */
  get(opts){
    let defaults = {
      method: 'GET',
      host: this.options.endpoint,
      headers: this.request_headers
    }
    opts = _.merge(defaults, opts)
    opts.headers = _.merge(opts.headers, this.authorizationHeader())

    return new Promise((resolve, reject) => {
      let req = https.request(opts, function(response){
        response.setEncoding('utf8')
        let responseData = ''

        response.on('data', function(data) {
          responseData += data
        });
        response.on('end', function() {
          resolve(responseData)
        })
      })
      req.end()
    })
  }

  /* POST Request */
  post(opts, body){
    let defaults = {
      method: 'POST',
      host: this.options.endpoint,
      headers: { "Content-Type": "application/json" }
    }
    opts = _.merge(defaults, opts)
    opts.headers = _.merge(opts.headers, this.authorizationHeader())

    return new Promise((resolve, reject) => {
      var payload = JSON.stringify(body)
      let req = https.request(opts, function(response){
        response.setEncoding('utf8')
        var responseData = ''

        response.on('error', function(error){
          reject(error)
        })

        response.on('data', function(data) {
          responseData += data
        })

        response.on('end', function() {
          resolve(responseData)
        })
      })

      req.write(payload)
      req.end()
    })
  }

  /* DELETE Request */
  delete(opts, body){
    let defaults = {
      method: 'DELETE',
      host: this.options.endpoint,
      headers: this.request_headers
    }
    opts = _.merge(defaults, opts)
    opts.headers = _.merge(opts.headers, this.authorizationHeader())

    return new Promise((resolve, reject) => {
      let req = https.request(opts, function(response){
        response.setEncoding('utf8')
        let responseData = ''

        response.on('data', function(data) {
          responseData += data
        });
        response.on('end', function() {
          resolve(responseData)
        })
      })
      req.end()
    })
  }

  authorizationHeader() {
    if(this.options.token) {
      return { 'Authorization': `token ${this.options.token}` }
    }

  }
}

module.exports = Deis
