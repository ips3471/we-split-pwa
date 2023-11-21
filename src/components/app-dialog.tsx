import { useEffect, useState } from 'react';
import ArrowIcon from '../assets/arrow-left.svg?react';
import { GroupData } from '../type';
import DialogNameForm from './app-dialog-form-name';
import DialogMembersForm from './app-dialog-form-members';

type Props = {
	groupData: GroupData;
	target: keyof GroupData;
	onSubmit: (groupData: GroupData) => void;
	title: string;
	onCancel: () => void;
};

function Dialog({ groupData, target, onSubmit, title, onCancel }: Props) {
	const [data, setData] = useState(groupData);

	useEffect(() => {
		setData({
			...groupData,
			name: '',
		});
	}, []);

	function handleChange<K extends keyof GroupData>(value: GroupData[K]) {
		setData(data => ({ ...data, [target]: value }));
	}

	function handleSubmit() {
		onSubmit(data);
	}

	return (
		<div className='absolute shadow-lg top-1/2 -translate-y-[50%] scale-95  w-[100%] z-50  rounded-xl p-4  bg-gray-800 text-white'>
			<div className='flex items-center'>
				<button onClick={onCancel} className='w-8 p-1 mr-2 h-full'>
					<ArrowIcon stroke='#ffffff' />
				</button>
				<h2 className='text-xl'>{title}</h2>
			</div>

			<div className='px-2 text-center'>
				<div className='min-h-[5rem] py-2  flex flex-col justify-center items-center  border-gray-400 '>
					{target === 'name' && (
						<DialogNameForm
							onChange={handleChange}
							prevName={groupData.name}
							value={data.name}
						/>
					)}
					{target === 'members' && (
						<DialogMembersForm
							onChange={handleChange}
							placeholder={'추가할 멤버이름을 입력하세요'}
							members={data.members}
						/>
					)}
				</div>
				<button
					type='button'
					onClick={handleSubmit}
					className='bg-brand-deep w-full rounded-xl p-2'
				>
					확인
				</button>
			</div>
		</div>
	);
}

export default Dialog;
