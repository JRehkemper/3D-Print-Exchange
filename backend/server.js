const express = require('express');
const morgan = require('morgan')
const app = express();
const cors = require('cors')
require('dotenv').config()
const mysql = require('mysql2')
const axios = require('axios')
const multer = require('multer')
const upload = multer({dest: 'uploads/'})

app.use(morgan('combined'))
app.use(express.json())
app.use(cors({
    origin: '*'
}))

var conn = mysql.createConnection({
    host: '10.0.0.19',
    user: process.env.DB_USER,
    password: process.env.DBPassword,
    database: "3d_print_exchange",
})

conn.connect(function(err) {
    if (err) throw err;
    console.log("Database Connected")
})
  
app.get('/', (req , res) => {
    res.send("Hello Backend");
})
  
app.listen(3000, () => {
    console.log("server is running on port 3000");
    //console.log("DB Credentials "+process.env.DB_USER+" - "+process.env.DBPassword)
})

app.post('/getUsername', (req, res) => {
    //console.log(req.body)
    var userID = req.body["userID"]
    conn.query('SELECT userName from users WHERE userID = ?', [userID], 
    function(err, results) {
        //console.log(results[0]["userName"])
        if (results.length == 0)
        {
            axios.post(process.env.API_URL+"/createUser", {
                userID: userID,
            })
        }
        else {
            res.json({userName: results[0]["userName"]})
        }

    })
})

app.post('/setUsername', (req, res) => {
    var userID = req.body["userID"]
    var userName = req.body["userName"]
    //console.log(req.body)
    conn.query('UPDATE users SET userName = ? WHERE UserID = ?', [userName, userID],
    function(err, results) {
        //console.log(results)
    })
    res.json({ username: userName})
})

app.post('/createUser', (req, res) => {
    var userID = req.body["userID"]
    //console.log(req.body)
    conn.query('INSERT INTO users(userID, userName) VALUES(?, ?)', [userID, "New User"],
    function(err, results) {
        //console.log(results)
    })
    res.send("done")
})

app.post('/uploadItem', upload.single('stl'), (req, res, next) => {
    console.log(req.body)
    console.log(req.file)
    var lastItemID = null
    var title = req.body["title"]
    var description = req.body["description"]
    var tags = req.body["tags"]
    conn.query('SELECT itemID FROM items ORDER BY itemID DESC LIMIT 1', [], 
    function(err, results) {
        lastItemID = results[0]["itemID"]
    })
    //conn.query('INSERT INTO items')
    res.send("done")
})