import React from 'react';
import useLocation from 'wouter/use-location';

type Props = {};

function SettleupButton({}: Props) {
	const [location, setLocation] = useLocation();
	const navigate = () => setLocation('/settleup');

	return (
		<div className='text-center'>
			<button
				onClick={navigate}
				className='p-3 my-4 w-28 mx-auto rounded-3xl shadow-lg bg-white text-orange-600'
			>
				settle up
			</button>
		</div>
	);
}

export default SettleupButton;
