/* eslint-disable @typescript-eslint/no-var-requires */
const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const morgan = require("morgan")

const app = express()
const port = process.env.PORT || 8080

app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(morgan("combined"))

let myArr = [
  "Eric Nyaga",
  "Ellon Musk",
  "Bill Gates",
  "Kobe Bryant",
  "Jordan Peterson",
  "Tyson Fury",
]
app.get("/", (req, res) => {
  res.send(myArr)
})
app.post("/", (req, res) => {
  myArr.push(req.body["name"])
  res.send(myArr)
})

app.listen(port, ()=>{
  console.log("listening on port ", port)
})
