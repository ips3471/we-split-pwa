import React from 'react';
import ZoomIcon from '../assets/more.svg?react';
import { MemberData } from '../type';
import useLocation from 'wouter/use-location';

type Props = {
	members: MemberData[];
};

function Members({ members }: Props) {
	const [location, setLocation] = useLocation();
	const navigate = () => setLocation('/members');
	return (
		<div onClick={navigate} className='m-4 p-2 relative bg-white rounded-lg'>
			<span className='w-4 h-4 opacity-70 absolute top-2 right-2'>
				<ZoomIcon />
			</span>
			<div>
				<h2 className=''>참여멤버</h2>
				{members?.map(m => (
					<span key={m.id} className='p-2'>
						{m.name}
					</span>
				))}
			</div>
		</div>
	);
}

export default Members;
