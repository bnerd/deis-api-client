module.exports = function(client){
  return {
    list: (id) => {
      return client.get({
        path: '/'+ client.options.api_version +'/users'
      })
    }
  }
}
