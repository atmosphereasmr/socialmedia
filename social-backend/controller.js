module.exports = {
  getUsers: (req, res, next) => {
    const dbInstance = req.app.get('db');

    dbInstance.get_users()
      .then(users => res.status(200).send(users))
      .catch(error => console.log('error', error))
  },
  addUsers: (req, res, next) => {
    console.log(req.body)
    const dbInstance = req.app.get('db');

    dbInstance.add_users(req.body)
      .then(users => res.status(200).send(users))
      .catch(error => console.log('error', error))
  },

  editUsers: (req, res, next) => {
    console.log('I am running!')
    var id = req.params.id
    req.body.id = id
    console.log(req.body)
    const dbInstance = req.app.get('db');

    dbInstance.edit_users(req.body)
      .then(users => res.status(200).send(users))
      .catch(error => console.log('error', error))
  },
}
