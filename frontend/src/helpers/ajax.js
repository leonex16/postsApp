const domain = 'http://localhost:3001';
const ajax = {};

ajax.GET = async () => {
	try {
		const url = `${domain}/v1/posts`;

		const res = await fetch(url);
		const json = await res.json();

		return json;
	} catch (err) {
		// console.log(err);
		return { statusCode: 51 };
	}
};

ajax.POST = async postNew => {
	const { name, description } = postNew;

	try {
		if (name.length <= 3 || description.length <= 3) throw Error();

		const fetchOpt = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(postNew),
		};

		const res = await fetch(`${domain}/v1/posts/create`, fetchOpt);
		const json = await res.json();

		return json;
	} catch {
		return { statusCode: 50 };
	}
};

ajax.PATCH = async postId => {
	const fetchOpt = {
		method: 'PATCH',
	};

	try {
		const res = await fetch(`${domain}/v1/posts/delete/${postId}`, fetchOpt);
		const json = await res.json();

		return json;
	} catch (err) {
		console.log(err);
		return { statusCode: 50 };
	}
};

ajax.checkAPI = async () => {
	let error = false;
	try {
		error = await fetch(`${domain}/v1/posts/endpoint/not/exist`);
	} catch {}
	return error;
};

export default ajax;
