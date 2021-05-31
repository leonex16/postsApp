import validateData from './validateData';
import ajax from './ajax';
import '../assets/styles.css';

const { GET, POST, PATCH, checkAPI } = ajax;
const endpointApiPost = {};

endpointApiPost.getAll = async () => {
	const { data } = await GET();

	return data;
};

endpointApiPost.create = async postNew => {
	const { statusCode, data } = await POST(postNew);

	return validateData(statusCode) ? data : false;
};

endpointApiPost.delete = async postId => {
	const { statusCode } = await PATCH(postId);

	const isDelete = validateData(statusCode);

	return isDelete;
};

endpointApiPost.checkAPI = async () =>
	(await checkAPI()) ? {} : validateData(53);
export default endpointApiPost;
