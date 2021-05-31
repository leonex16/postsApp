import React from 'react';

const IconButton = ({ id, iconName, bgColorButton, onClick }) => {
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
    p-2
    bg-${bgColorButton}-400
    hover:bg-${bgColorButton}-500
  `;
	return (
		<button id={id} className={buttonClass} onClick={onClick}>
			<span id={id} className='material-icons'>
				{iconName}
			</span>
		</button>
	);
};

export default IconButton;
