const { faker } = require('@faker-js/faker');
const mysql = require('mysql2')
const express = require('express')
const path = require('path');
const { count } = require('console');
const methodOverride = require('method-override')

const app = express()
const port = 8080;

app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: true }))

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, "/views"))

//style
app.use(express.static('public'))

let createRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password(),
  ];
}

let users = []
for (let i = 0; i < 100; i++) {
  users.push(createRandomUser())
}

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'list',
  password: 'theblues'
})

//home route
app.get('/', (req, res) => {
  let q = `select count(*) from user`
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;

      let count = result[0]['count(*)']
      console.log(result)
      res.render('home.ejs', { count })
    })
  }
  catch (err) {
    console.log(err)
    res.send('err')
  }
})

//users route
app.get('/user', (req, res) => {
  try {
    connection.query('select id, username, email from user', (err, result) => {
      if (err) throw err;
      let id = [], username = [], email = [];
      for (let i = 0; i < result.length; i++) {
        id.push(result[i]['id'])
        username.push(result[i]['username'])
        email.push(result[i]['email'])
      }
      res.render('user.ejs', { id, username, email })
    })
  }
  catch (err) {
    res.send(err)
  }
})

app.get("/user/:id/edit", (req, res) => {
  let { id } = req.params
  try {
    let q = `select * from user where id='${id}'`
    connection.query(q, (err, result) => {
      if (err) throw err;

      let user = result[0]
      res.render("edit.ejs", { user })
    })
  }
  catch (err) {
    console.log(err)
  }

})

//update route
app.patch("/user/:id", (req, res) => {
  let { id } = req.params
  let { username: userform, password: passform } = req.body
  let q = `select * from user where id='${id}'`
  connection.query(q, (err, result) => {
    if (err) throw err;
    else {
      let user = result[0]
      console.log(user)
      if (user.password != passform) {
        res.send('not correct password')
      }
      else {
        let q2 = `update user set username='${userform}' where id='${id}'`
        connection.query(q2, (err, result) => {
          if (err) throw err;
          res.send(result)
        })

      }
    }
  })

})

//new route
app.get('/user/new', (req, res) => {
  res.render('new.ejs')
})

app.post('/user', (req, res) => {
  let { newuser, newpassword, newemail, } = req.body;

  let id = faker.string.uuid()
  let q = `insert into user(id,username,password,email) values(?,?,?,?)`
  connection.query(q, [id, newuser, newpassword, newemail], (err, result) => {
    if (err) throw err;

    res.redirect('/user')
  })

})

//destroy all
app.delete('/user', (req, res) => {
  let q = `truncate table user`
  connection.query(q, (err, result) => {
    if (err) throw err;
    res.redirect('/user')
  })
})

//destroy with id
app.get('/user/:id/delete', (req, res) => {
  let { id } = req.params
  res.render('delete.ejs', { id })
})

app.delete('/user/:id/delete', (req, res) => {
  let { id } = req.params
  let { username, password } = req.body

  let q1 = `select * from user where id='${id}'`
  connection.query(q1, (err, result) => {
    if (err) throw err;
    let user = result[0]
    if (password != user.password) {
      res.send('incorrect password')
    }
    else {
      let q = `delete from user where id='${id}'`
      connection.query(q, (err, result) => {
        if (err) throw err;
        res.redirect('/user')
      })
    }
  })


})

app.listen(port, () => {
  console.log(`listening to port : ${port}`)
})