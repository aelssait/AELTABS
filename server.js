const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

let teamsData = []; 

app.get('/get-teams', (req, res) => {
    res.json(teamsData);
});

app.post('/save-teams', (req, res) => {
    teamsData = req.body;
    res.json({ success: true });
});

app.listen(PORT, () => {
    console.log("Server is running on port", PORT);
});
