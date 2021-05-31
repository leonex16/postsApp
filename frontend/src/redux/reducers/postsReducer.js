import { posts, ERR_CONNECTION_REFUSED } from '../types/types';
import matchStr from '../../helpers/matchSrt';

const postsReducer = (state = [], action) => {
	const stateLocalStorage = JSON.parse(localStorage.getItem('posts'));

	switch (action.type) {
		case posts.GET_ALL_POSTS:
			return action.payload;

		case posts.FIND_POST_BY_NAME:
			return action.payload === ''
				? stateLocalStorage
				: state.filter(post => matchStr(post.name, action.payload));

		case posts.ADD_POST:
			return action.payload.length !== 0
				? [...state, ...action.payload]
				: state;

		case posts.DELETE_POST:
			return state.filter(post => +post.post_id !== +action.payload);

		case ERR_CONNECTION_REFUSED:
			return stateLocalStorage;

		default:
			return state;
	}
};

export default postsReducer;
