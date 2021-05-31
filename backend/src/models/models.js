const { Pool } = require('pg');

const configDB = require('../database/config');
const response = require('../helpers/response');

const pool = new Pool(configDB);

class ModelsPosts {
	async #makeQuery({ queryStr, queryValues, methodName }) {
		const client = await pool.connect();

		try {
			const res = await client.query(queryStr, queryValues);
			return res;
		} catch (err) {
			console.log(`Error in the method ${methodName.toUpperCase()}: ${err}`);
		} finally {
			client.release();
		}
	}

	async #getLastPostCreated() {
		const makeQueryOpt = {
			queryStr: 'SELECT * FROM posts ORDER BY post_id DESC LIMIT 1',
			queryValues: [],
			methodName: 'getLastPostCreated',
		};
		const { rows } = await this.#makeQuery(makeQueryOpt);

		return rows;
	}

	async #getPostDeleted(postId) {
		const makeQueryOpt = {
			queryStr: "SELECT * FROM posts WHERE post_id = $1 AND active = '0'",
			queryValues: [postId],
			methodName: 'getPostDeleted',
		};
		const { rows } = await this.#makeQuery(makeQueryOpt);

		return rows[0];
	}

	async getAll() {
		const makeQueryOpt = {
			queryStr: `SELECT * FROM posts WHERE active = '1'`,
			queryValues: [],
			methodName: 'getAll',
		};
		const { command, rows, rowCount } = await this.#makeQuery(makeQueryOpt);

		return response(command, rows, rowCount);
	}

	async create(postNew) {
		const makeQueryOpt = {
			queryStr: `INSERT INTO posts ("name", "description", "create_date") VALUES ($1 ,$2 ,NOW())`,
			queryValues: Object.values(postNew),
			methodName: 'create',
		};

		const { command, rows, rowCount } = await this.#makeQuery(makeQueryOpt);
		const postCreated = await this.#getLastPostCreated();

		return response(command, rows, rowCount, postCreated);
	}

	async delete(postId) {
		const makeQueryOpt = {
			queryStr: `UPDATE posts SET active = '0', delete_date = NOW() WHERE post_id = $1 AND active = '1'`,
			queryValues: [postId],
			methodName: 'delete',
		};
		const { command, rows, rowCount } = await this.#makeQuery(makeQueryOpt);
		const postDeleted = await this.#getPostDeleted(postId);

		return response(command, rows, rowCount, postDeleted);
	}
}

module.exports = { ModelsPosts };
