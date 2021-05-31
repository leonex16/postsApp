const statusCodeError = {
	posts: {
		50: {
			titleText: 'Ha ocurrido un error',
			text: 'El largo de la información del post no es válida (debe ser mayor a tres caracteres)',
			icon: 'error',
			iconColor: '#f37070',
		},
		51: {
			titleText: 'Ha ocurrido un error',
			text: 'Error al obtener los posts',
			icon: 'error',
			iconColor: '#f37070',
		},
		52: {
			titleText: 'Ha ocurrido un error',
			text: 'Error al borrar el post',
			icon: 'error',
			iconColor: '#f37070',
		},
		53: {
			titleText: '¡Advertencia!',
			html: `Estas trabajando fuera de línea,</br>por lo que sólo podrás ver y buscar posts.</br>Estamos trabajando para restablecer la conexión`,
			icon: 'warning',
			iconColor: '#fcd34d',
		},
		200: {
			titleText: 'Operación realizada exitosamente',
			icon: 'success',
			iconColor: '#10b981',
		},
		400: {
			titleText: 'Ha ocurrido un error',
			text: 'La informacíon enviada es incorrecta, favor intentarlo nuevamente',
			icon: 'error',
			iconColor: '#f37070',
		},
		404: {
			titleText: 'Ha ocurrido un error',
			text: 'Post no encontrado',
			icon: 'error',
			iconColor: '#f37070',
		},
		500: {
			titleText: 'Ha ocurrido un error',
			text: 'Error del servidor. Favor de intentarlo en un par de minutos',
			icon: 'error',
			iconColor: '#f37070',
		},
	},
};

export default statusCodeError;
