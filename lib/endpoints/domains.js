module.exports = function(client){
  return {
    list: (id) => {
      return client.get({
        path: '/'+ client.options.api_version +'/apps/'+ id +'/domains'
      })
    },

    add: (id, domain) => {
      return client.post(
        {
          path: '/'+ client.options.api_version +'/apps/'+ id +'/domains'
        },
        {
          domain: domain
        }
      )
    },

    remove: (id, domain) => {
      return client.delete({
        path: '/'+ client.options.api_version +'/apps/'+ id +'/domains/'+ domain
      })
    }
  }
}
