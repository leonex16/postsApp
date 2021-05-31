const dateFormat = require('./dateFormat');

const response = async (command, rows, rowCount, postData) => {
	let response;

	switch (command) {
		case 'SELECT':
			if (rowCount === 0) {
				response = { statusCode: 404, statusText: 'Not found', data: [] };
			} else {
				response = {
					statusCode: 200,
					statusText: 'OK',
					data: dateFormat(rows),
				};
			}
			break;

		case 'INSERT':
			if (rowCount === 0) {
				response = {
					statusCode: 400,
					statusText: 'Data sended with errors',
					data: null,
				};
			} else {
				response = {
					statusCode: 200,
					statusText: 'OK',
					data: dateFormat(postData),
				};
			}
			break;

		case 'UPDATE':
			if (rowCount === 0) {
				response = {
					statusCode: 400,
					statusText: 'Data sended with errors',
					data: null,
				};
			} else {
				response = { statusCode: 200, statusText: 'OK', data: postData };
			}
			break;

		default:
			response = { statusCode: 500, statusText: 'Server error' };
	}

	return response;
};

module.exports = response;
