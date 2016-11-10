module.exports = function(client) {
  return {
    login: (payload) => {
      return new Promise((resolve, reject) => {
        client.post(
          {
            path: `/${client.options.api_version}/auth/login/`
          }, payload
        )
        .then((data) => {
          client.options.token = JSON.parse(data).token
          resolve(data)
        }).catch((error) => {
          resolve(error)
        })
      })
    },

    register: (payload) => {
      return client.post(
        {
          path: `/${client.options.api_version}/auth/register/`
        }, payload
      )
    },

    passwd: (payload) => {
      return client.post(
        {
          path: `/${client.options.api_version}/auth/passwd/`
        }, payload
      )
    },

    cancel: () => {
      return client.delete(
        {
          path: `/${client.options.api_version}/auth/cancel/`
        }
      )
    },

    tokens: (payload) => {
      return client.post(
        {
          path: `/${client.options.api_version}/auth/tokens/`
        }, payload
      )
    },

    whoami: () => {
      return client.get({
        path: `/${client.options.api_version}/auth/whoami`
      })
    }

  }
}
