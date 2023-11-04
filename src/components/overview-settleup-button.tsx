import React from 'react';

type Props = {};

function SettleupButton({}: Props) {
	return (
		<div className='text-center'>
			<button className='p-3 my-4 w-28 mx-auto rounded-3xl shadow-lg bg-white text-orange-600'>
				settle up
			</button>
		</div>
	);
}

export default SettleupButton;
