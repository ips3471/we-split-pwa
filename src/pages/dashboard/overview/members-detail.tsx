import React from 'react';
import ProfileHolder from '../../../assets/profile-holder.svg?react';
import { MemberData } from '../../../type';
import ArrowIcon from '../../../assets/arrow-left.svg?react';

type Props = {
	members: MemberData[];
};

function MembersDetail({ members }: Props) {
	return (
		<div className='w-screen flex z-40 relative flex-col h-screen overflow-x-hidden bg-brand '>
			<nav className='flex justify-between h-16 items-centers w-screen  '>
				<button
					className='w-14 p-4 h-full'
					onClick={() => {
						history.back();
					}}
				>
					<ArrowIcon />
				</button>
			</nav>

			<main>
				<ul>
					{members.map(member => (
						<div
							key={member.id}
							className='p-2 border-b shadow-md  w-full flex '
						>
							<div className='flex items-center flex-1 gap-3 '>
								<div className='w-14 h-14'>
									<ProfileHolder />
								</div>
								<h2 className='text-left text-lg text-white'>{member.name}</h2>
							</div>

							<main className='flex-1 space-y-6 my-6 '>
								<div>
									<dl className='flex text-red-400 justify-between p-4'>
										<dt>지출</dt>
										<dd>value</dd>
									</dl>
									<dl className='flex text-green-400 justify-between p-4'>
										<dt>지불</dt>
										<dd>value</dd>
									</dl>
								</div>
							</main>
						</div>
					))}
				</ul>
			</main>
		</div>
	);
}

export default MembersDetail;
