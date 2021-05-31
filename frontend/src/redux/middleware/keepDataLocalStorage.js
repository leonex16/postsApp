import { posts } from '../types/types';

const keepDataLocalStorage = store => next => action => {
	const postsLocalStorge = JSON.parse(localStorage.getItem('posts'));

	switch (action.type) {
		case posts.GET_ALL_POSTS:
			localStorage.setItem('posts', JSON.stringify(action.payload));
			return next(action);

		case posts.ADD_POST:
			localStorage.setItem(
				'posts',
				JSON.stringify([...postsLocalStorge, ...action.payload]),
			);
			return next(action);

		case posts.DELETE_POST:
			const newLocalStorage = postsLocalStorge.filter(
				post => +post.post_id !== +action.payload,
			);
			localStorage.setItem('posts', JSON.stringify(newLocalStorage));
			return next(action);

		default:
			return next(action);
	}
};

export default keepDataLocalStorage;
