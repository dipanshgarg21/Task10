const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const base = `${__dirname}/public`;

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.sendFile(`${base}/iot_applications.html`);
});  

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});
