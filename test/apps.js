require('dotenv').config();

var assert = require('assert');
var Deis = require('./../lib/deis.js'),
  deis = new Deis({
    secure: false
  })

describe('Apps', function() {
  describe('list', function() {
    it('should list all applications', function(){
      return deis.apps.list()
        .then((data) => {
          assert(JSON.parse(data).results)
        })
    })
  })
})
