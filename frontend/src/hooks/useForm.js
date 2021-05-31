import { useState } from 'react';

const useForm = initState => {
	const [state, setState] = useState(initState);

	const resetState = () => setState(initState);

	const onChange = ({ target }) => {
		setState({ ...state, [target.name]: target.value });
	};

	return [state, onChange, resetState];
};

export default useForm;
