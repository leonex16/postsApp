import React from 'react';

const Button = ({ bgColor, value }) => {
	const buttonClass = `
	flex
	justify-center
	items-center
	font-bold
	text-white
	text-center
	border
	border-white
	border-opacity-60
	rounded-md
	w-full-16
	p-2
	bg-${bgColor}-400
	hover:bg-${bgColor}-500
	md:h-6
	`;
	return <button className={buttonClass}>{value}</button>;
};

export default Button;
