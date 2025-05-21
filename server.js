const path = require('path');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const storeController = require('./src/store.controller');

app.use(express.json());
app.use(express.static(path.join(__dirname, '/public')));

app.get('/api', storeController.store);
app.get('/api/:prefecture', storeController.getPrefecture);

app.post('/api', storeController.save);

app.delete('/api', storeController.delete);

app.put('/api', storeController.put);


app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
