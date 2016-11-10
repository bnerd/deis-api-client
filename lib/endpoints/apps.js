module.exports = function(client){
  return {
    list: () => {
      return client.get({
        path: '/'+ client.options.api_version +'/apps'
      })
    },

    info: (id) => {
      return client.get({
        path: '/'+ client.options.api_version +'/apps/'+ id
      })
    },

    logs: (id) => {
      return client.get({
        path: '/'+ client.options.api_version +'/apps/'+ id + '/logs'
      })
    },

    create: (id) => {
      return client.post(
        {
          path: '/'+ client.options.api_version +'/apps'
        },
        {
          id: id
        }
      )
    },

    destroy: (id) => {
      return client.delete(
        {
          path: '/'+ client.options.api_version +'/apps/'+ id
        }
      )
    },

    run: (id, command) => {
      return client.post(
        {
          path: "/v2/apps/" + id + "/run"
        },
        {
          "command": command
        }
      )
    }
  }
}
