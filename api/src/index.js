const express = require('express')
const cors = require('cors')
const { Pool } = require('pg')
const port = process.env.PORT
const app = express()
app.use(cors())
const pool = new Pool()
// Routes
app.get('/now', async (req, res) => {
    console.log("request received")
 try {
  const { rows } = await pool.query('SELECT NOW()')
  res.status(200).send(rows[0].now)

 } 
 catch (err) {
  console.log(err)
 }
})
app.listen(port, () => {
 console.log(`api listening at http://192.168.32.134:${port}`)
})