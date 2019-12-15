const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();

//Port
const PORT = process.env.PORT || 5000;



// Allow cross-origin
app.use(cors());


// Server startup
app.listen(PORT, console.log(`Server started on port ${PORT}`));

//Axios config
axios.defaults.baseURL = process.env.RAPID_API_URL;
axios.defaults.headers.common['x-rapidapi-host'] = process.env.RAPID_API_HOST;
axios.defaults.headers.common['x-rapidapi-key'] = process.env.RAPID_API_KEY;


app.get('/scores', (req, res) => {

    axios.get(`/games/date/${req.query.date}`).then(apiRes => {
        res.send(apiRes.data.api.games);
    })
})

app.get('/gameDetail', (req, res) => {

    axios.get(`/gameDetails/${req.query.gameId}`).then(apiRes => {
        res.send(apiRes.data.api.game[0]);
    })
})