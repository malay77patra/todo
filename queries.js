const Pool = require('pg').Pool
const pool = new Pool({
  user: 'cxxzaoysyqunzf',
  host: 'ec2-52-71-23-11.compute-1.amazonaws.com',
  database: 'd4279nbdqbq5to',
  password: '20a1e0d208f7e076f515ccaccba2351e6d44bfd4afdbfc8277887e5c311f361f',
  port: 5432,
})
const getUsers = (request, response) => {
  pool.query('SELECT * FROM pd ORDER BY id ASC', (error, results) => {
    if (error) {
      response.send(error)
     // throw error
    }
    response.status(200).json(results.rows)
  })
}
/*
const createUser = (request, response) => {
  const { name, email } = request.body

  pool.query('INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *', [name, email], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`User added with ID: ${results.rows[0].id}`)
  })
}
const updateUser = (request, response) => {
  const id = parseInt(request.params.id)
  const { name, email } = request.body

  pool.query(
    'UPDATE users SET name = $1, email = $2 WHERE id = $3',
    [name, email, id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User modified with ID: ${id}`)
    }
  )
}
const deleteUser = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`User deleted with ID: ${id}`)
  })
}
*/
module.exports = {
  getUsers,
//  createUser,
//  updateUser,
//  deleteUser, 
}
