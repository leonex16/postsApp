const { ModelsPosts } = require('../models/models');

const modelsPosts = new ModelsPosts();

const ControllersPosts = {};

ControllersPosts.getAll = async (req, res) => {
	const response = await modelsPosts.getAll();

	res.json(response);
};

ControllersPosts.create = async (req, res) => {
	const response = await modelsPosts.create(req.body);

	res.json(response);
};

ControllersPosts.delete = async (req, res) => {
	const response = await modelsPosts.delete(req.params.postId);

	res.json(response);
};

ControllersPosts.notFound = async (req, res) =>
	res.json({ statusCode: 404, statusText: 'Not found' });

module.exports = { ControllersPosts };
