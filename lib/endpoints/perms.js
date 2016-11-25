module.exports = function(client){
  return {
    list: (id) => {
      return client.get({
        path: `/${client.options.api_version}/apps/${id}/perms`,
      })
    },

    create: (id, username) => {
      return client.post(
        {
          path: `/${client.options.api_version}/apps/${id}/perms`
        },
        {
          username: username
        }
      )
    },

    delete: (id, username) => {
      return client.delete({
        path: `/${client.options.api_version}/apps/${id}/perms/${username}`
      })
    }
  }
}
