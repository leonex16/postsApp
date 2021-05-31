require('dotenv').config();
const express = require('express');
const cors = require('cors');

const { ControllersPosts } = require('./src/controllers/controllers');
const app = express();

const corsOpt = {
	origin: 'http://localhost:3000',
};

app
	.use(cors(corsOpt))
	.use(express.urlencoded({ extended: true }))
	.use(express.json())
	.get('/v1/posts/', ControllersPosts.getAll)
	.post('/v1/posts/create', ControllersPosts.create)
	.patch('/v1/posts/delete/:postId', ControllersPosts.delete)
	.use(ControllersPosts.notFound);

module.exports = app;
