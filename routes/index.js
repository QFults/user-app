const users = require('../data')

module.exports = app => {
// GET all users
  app.get('/users', (req, res) => {
    res.json(users)
  })

  // GET one user
  app.get('/users/:id', (req, res) => {
    users.forEach(user => {
      if (user.id === parseInt(req.params.id)) {
        res.json(user)
      }
    })
  })

  // POST one user
  app.post('/users', (req, res) => {
    let newUser = req.body
    newUser.id = users.length + 1
    users.push(newUser)
    res.send('User was added! Congratulations!')
  })
}
