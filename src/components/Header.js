import React from 'react';

const Header = ({ handleToggleDarkMode }) => {
	return (
		<div className='header'>
			<h1>Notepad</h1>
			<button
				onClick={() =>
					handleToggleDarkMode(
						(previousDarkMode) => !previousDarkMode
					)
				}
				className='save'
			>
				Mudar Tema
			</button>
		</div>
	);
};

export default Header;
