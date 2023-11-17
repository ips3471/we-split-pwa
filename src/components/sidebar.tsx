import React from 'react';
import { Link } from 'wouter';
import PlusIcon from '../assets/plus.svg?react';

type Props = {
	isOpen: boolean;
};

function Sidebar({ isOpen }: Props) {
	return (
		<div
			className={` h-full bg-red-100 border flex z-40 flex-col w-2/3 transition-all duration-300 fixed ${
				isOpen ? '' : '-translate-x-full'
			} left-0 top-0 `}
			onClick={() => console.log('sidebar')}
		>
			<section className='flex-1 basis-1/3 text-white bg-orange-500'>
				<h1 className='text-4xl p-6'>Groups</h1>
				<nav>
					{[
						{ id: '1', name: 'link1' },
						{ id: '2', name: 'link2' },
					].map(list => (
						<Link
							onClick={() => {}}
							className={`block bg-brand/80 w-full`}
							key={list.id}
							to={list.id}
						>
							{list.name}
						</Link>
					))}
				</nav>
			</section>

			<section className='bg-white p-4 flex-shrink basis-2/3 relative'>
				<Link href={'./create'}>
					<div className='absolute w-14 h-14 right-4 top-0 -translate-y-1/2 p-4 rounded-full bg-white shadow-lg'>
						<PlusIcon fill='#E07C00' />
					</div>
				</Link>

				<nav className='space-y-6 mt-4 text-black'>
					<ul className='space-y-3 text-lg'>
						<li>
							<a>Feedback</a>
						</li>
						<li>
							<a>About We-Account</a>
						</li>
					</ul>
				</nav>
			</section>
		</div>
	);
}

export default Sidebar;
