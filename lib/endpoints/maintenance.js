module.exports = function(client){
  return {
    info: (id) => {
      return client.get({
        path: '/'+ client.options.api_version +'/apps/'+ id +'/settings',
      })
    },

    enable: (id, payload) => {
      return client.post(
        {
          path: "/v2/apps/" + id + "/settings"
        },
        { maintenance: true }
      )
    },

    disable: (id, payload) => {
      return client.post(
        {
          path: "/v2/apps/" + id + "/settings"
        },
        { maintenance: false }
      )
    },
  }
}
