import express from "express";
import mongoose, { Schema } from "mongoose";





const schemo = new Schema(
    {
        namePlayer1 : String,
        namePlayer2 : String,
        move : Array,
        isActive: Boolean

    }
)



const app = express()
app.set('view engine', 'ejs')

// ejs


// / 
// /game/3700/x 
// /game/8954/o

app.get('/', (req, res) => {
    res.render('index.ejs')

} )

app.get('/game/:idGame/:player', (req, res) => {
    let idGame = req.params.idGame
    let player = req.params.player
    if (player != 'o' && player != 'x') {
        res.redirect('/')

    }
    res.send('game started')

} )


app.listen(80)

console.log('http://localhost')




