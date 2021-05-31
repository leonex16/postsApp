import React, { memo } from 'react';
import { useDispatch } from 'react-redux';
import { deletePost } from '../redux/actions/postsAction.js';

import IconButton from './UI/IconButton.js';

const PostRowItem = memo(({ post_id, name, description, create_date }) => {
	const dispatch = useDispatch();

	const handleClick = ({ target }) => dispatch(deletePost(target.id));

	return (
		<tr className='border-t-2 border-b-2'>
			<th className='font-medium text-gray-50 py-2'>{name}</th>
			<th className='font-medium text-gray-50 py-2'>{description}</th>
			<th className='hidden italic text-sm font-medium text-gray-50 py-2 lg:table-cell'>
				{create_date ?? 'Unos instates'}
			</th>
			<th className='flex justify-center items-center font-medium text-gray-50 py-2'>
				<IconButton
					id={post_id}
					iconName='delete'
					bgColorButton='red'
					onClick={handleClick}
				/>
			</th>
		</tr>
	);
});

export default PostRowItem;
