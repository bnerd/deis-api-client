module.exports = function(client){
  return {
    list: (id) => {
      return client.get({
        path: '/'+ client.options.api_version +'/apps/'+ id +'/builds',
      })
    },

    create: (id, payload) => {
      return client.post(
        {
          path: "/v2/apps/" + id + "/builds"
        },
        payload
      )
    }
  }
}
