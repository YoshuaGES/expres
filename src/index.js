const express = require('express')
const app = express()
const port = 3000

app.get('/user', function (req, res) {
    res.send('Hello user')
})

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});