require('dotenv').config();

var Deis = require('./lib/deis.js')
var deis = new Deis({secure: false})
// var deis = new Deis({
//   username: 'foo',
//   password: 'bar',
//   secure: false
// }, function(data) {
//   console.log("callback", data)
// }).then((data) => {
//   console.log(data)
// })

deis.apps.list().then((result) => {
  console.log(result)
})
//
// deis.apps.logs("famous-buttress").then((result) => {
//   console.log(result)
// })

// deis.logs("famous-buttress").then((result) => {
//   console.log(result)
// })

// deis.apps.create("foo").then((result) => {
//   console.log(result)
// })

// deis.create("foo").then((result) => {
//   console.log(result)
// })

// deis.apps.destroy("foo").then((result) => {
//   console.log(result)
// }).catch((error) => {
//   console.log(error)
// })

// deis.run("editor", "ls")
//   .then((result) => {
//     console.log(result)
//   })

// deis.builds.list("famous-buttress").then((result) => {
//   console.log(result)
// })

// deis.builds.create("famous-buttress", {})
//   .then((result) => {
//     console.log(result)
//   })
//   .catch((error) => {
//     console.log(error)
//   })

// deis.domains.list("famous-buttress").then((result) => {
//   console.log(result)
// })

// deis.domains.add("famous-buttress", "example.com").then((result) => {
//   console.log(result)
// })
//
// deis.domains.remove("famous-buttress", "example.com").then((result) => {
//   console.log(result)
// })
//
// deis.ps.list("famous-buttress", "cmd").then((result) => {
//   console.log(result)
// })

// deis.ps.restart("editor", "cmd").then((result) => {
//   console.log(result)
// })

// deis.ps.scale("editor", { cmd: 3 }).then((result) => {
//   console.log(result)
// })

// deis.scale("editor", { cmd: 1 }).then((result) => {
//   console.log(result)
// })

// deis.users.list().then((result) => {
//   console.log(result)
// })

// deis.users().then((result) => {
//   console.log(result)
// })

// deis.releases.list("editor").then((result) => {
//   console.log(result)
// })

// deis.releases.info("editor", "v2").then((result) => {
//   console.log(result)
// })

// deis.releases.rollback("editor", "6").then((result) => {
//   console.log(result)
// })

// deis.maintenance.info("editor").then((result) => {
//   console.log(result)
// })
//
// deis.maintenance.disable("editor").then((result) => {
//   console.log(result)
// })

// deis.routing.info("editor").then((result) => {
//   console.log(result)
// })
//
// deis.routing.enable("editor").then((result) => {
//   console.log(result)
// })

// deis.keys.list().then((result) => {
//   console.log(result)
// })

// deis.keys.remove("xyz").then((result) => {
//   console.log(result)
// })

// deis.auth.whoami().then((result) => {
//   console.log(result)
// })
//
// deis.auth.login({ username: "foo", password: "bar"}, (data) => { console.log("callback")}).then((result) => {
//   console.log(result)
//   deis.auth.cancel().then((result) => {
//     console.log(result)
//   })
// })

// deis.auth.register({
//   username: 'foo',
//   password: 'bar',
//   email: 'foo@example.com'
// }).then((result) => {
//   console.log(result)
// })

// deis.keys.add("/home/besu/.ssh/id_deis.pub").then((result) => {
//   console.log(result)
// })
// .catch((error) => {
//   console.log(error)
// })
