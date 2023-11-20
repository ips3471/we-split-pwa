import React from 'react';

type Props = {};

function HeaderOptions({}: Props) {
	return (
		<ul className='flex flex-col gap-3'>
			<li>option1</li>
			<li>option2</li>
			<li>option3-long</li>
		</ul>
	);
}

export default HeaderOptions;
