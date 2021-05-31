import endpointApiPost from '../../helpers/endpointApiPost';
import { posts, ERR_CONNECTION_REFUSED } from '../types/types';

const { getAll, create, delete: remove, checkAPI } = endpointApiPost;
const { GET_ALL_POSTS, FIND_POST_BY_NAME, ADD_POST, DELETE_POST } = posts;

export const getAllPosts = () => {
	return async dispatch => {
		if ((await checkAPI()) === false)
			return dispatch({ type: ERR_CONNECTION_REFUSED });

		const postsData = await getAll();
		const type = GET_ALL_POSTS;
		const payload = postsData ?? [];

		dispatch({ type, payload });
	};
};

export const findPostByName = postName => {
	return async dispatch => {
		const type = FIND_POST_BY_NAME;
		const payload = postName;

		dispatch({ type, payload });
	};
};

export const createNewPost = postDataObj => {
	return async dispatch => {
		if ((await checkAPI()) === false)
			return dispatch({ type: ERR_CONNECTION_REFUSED });

		const postNew = await create(postDataObj);
		const type = ADD_POST;
		const payload = postNew ? postNew : [];

		dispatch({ type, payload });
	};
};

export const deletePost = postId => {
	return async dispatch => {
		if ((await checkAPI()) === false)
			return dispatch({ type: ERR_CONNECTION_REFUSED });

		const isDelete = await remove(postId);
		const type = DELETE_POST;
		const payload = isDelete ? postId : 0;

		dispatch({ type, payload });
	};
};
