module.exports = function(client){
  return {
    list: (id) => {
      return client.get({
        path: '/'+ client.options.api_version +'/apps/'+ id +'/releases',
      })
    },

    info: (id, release) => {
      return client.get(
        {
          path: "/v2/apps/" + id + "/releases"+ '/'+ release
        }
      )
    },

    rollback: (id, version) => {
      return client.post(
        {
          path: "/v2/apps/" + id + "/releases"+ '/rollback'
        },
        {
          version: version
        }
      )
    }
  }
}
