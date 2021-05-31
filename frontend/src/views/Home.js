import React, { useEffect, useState } from 'react';
import { useStore } from 'react-redux';

import useForm from '../hooks/useForm.js';
import {
	createNewPost,
	getAllPosts,
	findPostByName,
} from '../redux/actions/postsAction.js';

import PostRowItem from '../components/PostRowItem.js';
import Button from '../components/UI/Button.js';

const Home = () => {
	const initStateFormCreate = { name: '', description: '' };
	const initStateFormFilter = { name: '' };
	const [createForm, createOnChg, createReset] = useForm(initStateFormCreate);
	const [filterForm, filterOnChg] = useForm(initStateFormFilter);
	const { dispatch, getState, subscribe } = useStore();
	const [postRecords, setPostRecords] = useState([]);

	const handleSubmitCreate = evt => {
		evt.preventDefault();
		const postNew = {
			name: evt.target.name.value.trim(),
			description: evt.target.description.value.trim(),
		};

		dispatch(createNewPost(postNew));
		createReset();
	};

	const handleSubmitFilter = evt => {
		evt.preventDefault();
		const name = evt.target.name.value.trim();

		dispatch(findPostByName(name));
	};

	const unsubscribe = subscribe(() => {
		const currentStateStore = getState().postsReducer;

		setPostRecords(currentStateStore);
	});

	useEffect(() => {
		dispatch(getAllPosts());

		return () => unsubscribe();
	}, []);

	return (
		<div className='h-full-16 flex flex-col m-2 overflow-hidden overflow-y-auto lg:overflow-x-hidden'>
			<header className='text-center mb-2 lg:mb-4'>
				<h1 className='text-4xl font-medium text-white'>Posts App</h1>
			</header>
			<article className='h-full flex flex-col'>
				<section className='mb-4'>
					<form
						className='block lg:grid lg:grid-cols-8 lg:gap-2'
						onSubmit={handleSubmitCreate}>
						<input
							className='block w-full-16 rounded-md mb-2 p-2 outline-none lg:col-span-2 lg:h-6'
							name='name'
							type='text'
							placeholder='Nombre'
							autoComplete='off'
							value={createForm.name}
							onChange={createOnChg}
							autoFocus
						/>
						<textarea
							className='block w-full-16 rounded-md mb-2 p-2 resize-none outline-none lg:col-span-5 lg:h-6'
							name='description'
							placeholder='Descripción'
							autoComplete='off'
							rows='3'
							value={createForm.description}
							onChange={createOnChg}></textarea>
						<Button bgColor='blue' value='Crear Post' />
					</form>
				</section>
				<hr className='mb-4' />
				<section className='relative mb-4'>
					<form onSubmit={handleSubmitFilter}>
						<input
							className='block w-full-16 rounded-md p-2 outline-none'
							name='name'
							type='text'
							placeholder='Buscar nombre de post...'
							autoComplete='off'
							onChange={filterOnChg}
							value={filterForm.name}
						/>
						<button
							className='absolute top-0 right-0 mt-2 mr-3 bg-white'
							type='submit'>
							<span className='material-icons text-gray-500'>search</span>
						</button>
					</form>
				</section>
				<section className='flex-grow overflow-auto animate__animated animate__fadeIn overscroll-contain'>
					{postRecords?.length > 0 ? (
						<table className='table-fixed m-auto' style={{ minWidth: '800px' }}>
							<thead className='sticky'>
								<tr className='text-center'>
									<th className='w-2/12 font-bold text-gray-50 py-2'>Nombre</th>
									<th className='w-6/12 font-bold text-gray-50 py-2'>
										Descripción
									</th>
									<th className='hidden w-3/12 font-bold text-gray-50 py-2 lg:table-cell'>
										Publicado hace ...
									</th>
									<th className='w-1/12 font-bold text-gray-50 py-2'>Acción</th>
								</tr>
							</thead>
							<tbody id='tbodyPost' className=''>
								{postRecords.map((post, indx) => (
									<PostRowItem key={indx} {...post} />
								))}
							</tbody>
						</table>
					) : (
						<div class='text-center'>
							<span class='material-icons text-6xl text-white'>post_add</span>
							<h3 class='text-xl leading-8 text-white font-medium'>
								No existen publicaciones por el momento.
								<br />
								Puedes crear una en el formulario de arriba :)
							</h3>
						</div>
					)}
				</section>
			</article>
		</div>
	);
};

export default Home;
