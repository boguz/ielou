import express from 'express';

const PORT = 8000;

const app = express();

app.get('/', (req, res) => {
	console.log('AAAA');
	res.send('Hello world!!!');
});

app.listen(PORT, () => {
	console.log(`⚡️ ielou app server running on http://localhost:${PORT}`);
});

