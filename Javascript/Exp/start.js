const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.use(bodyParser.json())

app.get("/meowmeow", (req, res) => {
    console.log(req.body)
    res.send('Hello World')})





app.get("/meow", (req, res) => {
    res.json({
        name:"Hello",
        age:"31"
    })
    })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})