module.exports = function(client){
  return {
    info: (id) => {
      return client.get({
        path: '/'+ client.options.api_version +'/apps/'+ id +'/settings',
      })
    },

    enable: (id) => {
      return client.post(
        {
          path: "/v2/apps/" + id + "/settings"
        },
        { routable: true }
      )
    },

    disable: (id) => {
      return client.post(
        {
          path: "/v2/apps/" + id + "/settings"
        },
        { routable: false }
      )
    },
  }
}
