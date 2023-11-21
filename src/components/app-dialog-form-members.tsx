import { useState } from 'react';
import { GroupData } from '../type';

type Props = {
	placeholder: string;
	onChange: <K extends keyof GroupData>(value: GroupData[K]) => void;
	members: GroupData['members'];
};

function DialogMembersForm({ onChange, placeholder, members }: Props) {
	const [input, setInput] = useState('');

	function handleAdd() {
		if (!input) return;
		const updated = [...members, input];
		onChange(updated);
		setInput('');
	}

	function handleRemove(name: string) {
		const updated = members.filter(member => member !== name);
		onChange(updated);
	}

	return (
		<>
			<div className='flex w-full'>
				<input
					spellCheck='false'
					autoFocus
					placeholder={placeholder}
					className='bg-transparent flex-1 outline-none border-b'
					onChange={e => setInput(e.currentTarget.value)}
					value={input}
					onKeyDown={e => e.key === 'Enter' && handleAdd()}
				/>
				<button
					type='button'
					onClick={handleAdd}
					className='p-2 border rounded-lg'
				>
					확인
				</button>
			</div>
			<div className='text-left my-2 w-full '>
				<h3 className='text-left text-lg p-2'>멤버목록</h3>
				<ul className='px-9 space-y-2'>
					{members.map(member => (
						<li
							className='flex border-b border-slate-700 justify-between items-center'
							key={member}
						>
							<span>{member}</span>
							<button
								name={member}
								onClick={e => handleRemove(e.currentTarget.name)}
								className='p-1 border rounded-lg bg-slate-700'
							>
								삭제
							</button>
						</li>
					))}
				</ul>
			</div>
		</>
	);
}

export default DialogMembersForm;
