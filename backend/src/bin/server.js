const app = require('../../App');

app.listen(process.env.SERVER_PORT, () =>
	console.log('App listing at localhost:' + process.env.SERVER_PORT),
);
