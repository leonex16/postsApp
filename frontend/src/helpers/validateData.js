import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import statusCodeError from './statusCodeErrors';

const validateData = statusCode => {
	let isValid = true;
	const MySwal = withReactContent(Swal);
	const MySwalOpt = statusCodeError.posts[statusCode];
	MySwalOpt.customClass = {
		confirmButton: 'buttonSweetAlert2',
	};

	if (statusCode !== 200) isValid = false;

	MySwal.fire(MySwalOpt);
	return isValid;
};

export default validateData;
