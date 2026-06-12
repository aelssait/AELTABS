const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Хранилище команд в оперативной памяти сервера
let teamsData = []; 

// Отдать данные всем пользователям
app.get('/get-teams', (req, res) => {
    res.json(teamsData);
});

// Принять новые данные при добавлении/удалении
app.post('/save-teams', (req, res) => {
    teamsData = req.body;
    res.json({ success: true, message: "Данные обновлены у всех!" });
});

app.listen(PORT, () => {
    console.log("Сервер работает на порту" , ${PORT});
});
