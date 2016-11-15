module.exports = function(client){
  return {
    list: (id) => {
      return client.get({
        path: `/${client.options.api_version}/apps/${id}/config`
      })
    },

    set: (id, payload) => {
      return client.post(
        {
          path: `/${client.options.api_version}/apps/${id}/config`
        }, payload
      )
    }
  }
}
