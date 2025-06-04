const express = require('express');
const app = express();

app.use('tasks/', require('./routes/task.routes'));
app.listen(3000, () => console.log('Run at port 3000'));