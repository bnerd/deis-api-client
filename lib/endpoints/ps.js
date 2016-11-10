module.exports = function(client){
  return {
    list: (id, process_type) => {
      let path = '/'+ client.options.api_version +'/apps/'+ id +'/pods'

      if(process_type){
        path += '/'+ process_type
      }

      return client.get({
        path: path
      })
    },

    restart: (id, process_type) => {
      let path = '/'+ client.options.api_version +'/apps/'+ id + '/pods' + '/restart'

      if(process_type){
        path = '/'+ client.options.api_version +'/apps/'+ id + '/pods'+ '/'+ process_type +'/restart'
      }

      return client.post(
        {
          path: path
        },
        {}
      )
    },

    scale: (id, payload) => {
      return client.post(
        {
          path: '/'+ client.options.api_version +'/apps/'+ id +'/scale'
        },
        payload
      )
    }
  }
}
