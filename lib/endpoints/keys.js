var fs = require('fs')
var uuid = require('uuid')

module.exports = function(client) {
  return {
    list: () => {
      return client.get({
        path: '/'+ client.options.api_version +'/keys'
      })
    },

    add: (args) => {
      let keyFile = args
      let keyString

      try {
        keyString = fs.readFileSync(keyFile, "utf8")
      } catch(error) {
        return new Promise((resolve, reject) => {
          reject("File not found.")
        })
      }

      let payload = {
        id: uuid.v4(),
        public: keyString
      }

      return client.post(
        {
          path: '/'+ client.options.api_version +'/keys'
        }, payload
      )
    },

    remove: (id) => {
      return client.delete({
        path: '/'+ client.options.api_version +'/keys/'+ id
      })
    }
  }
}
