function HandleRegister() {
            api.get(Prefix.replace(/[\\"]/g, '')+'/clientes')
                .then(response => console.log(response.data)
                )
                .catch((err) => {
                  console.log(err.response.data.errors)
                });

    }
