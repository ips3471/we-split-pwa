import { useRef, useState } from 'react';
import PageHeader from '../../components/page-header';
import DatePresenter from '../../utils/date-presenter';
import { validateForm } from '../../utils/validate-form';

type Props = {};
type FormData = {
	title: string;
	date: string;
	members: string[];
};

function CreateGroupSectionsContainer({}: Props) {
	const [form, setForm] = useState<FormData>({
		title: '',
		date: DatePresenter(new Date()).formattedDate,
		members: [],
	});
	const [memberInput, setMemberInput] = useState('');
	const memberInputRef = useRef<HTMLInputElement>(null);

	function handleUpdateForm<K extends keyof FormData>(
		label: K,
		value: FormData[K],
	) {
		setForm({ ...form, [label]: value });
	}

	function handleRemoveMember(name: string) {
		setForm(prev => {
			const updatedMembers = prev.members.filter(member => member !== name);
			return { ...prev, members: updatedMembers };
		});
	}

	function handleMemberInput() {
		if (memberInput === '') return;
		setMemberInput('');
		if (form.members.includes(memberInput)) {
			return alert('멤버 이름은 중복되지 않아야 합니다');
		}
		handleUpdateForm('members', [...form.members, memberInput]);
		memberInputRef.current?.focus();
	}

	function handleSubmit() {
		const isValid = validateForm(form);
		if (!isValid) {
			return alert('check for inputs');
		}

		console.log('submitted', form);
	}

	return (
		<div className='flex flex-col h-full'>
			<PageHeader />
			<form className='w-full flex-1'>
				<div className='flex'>
					<label className='mr-2'>모임 이름</label>
					<input
						onKeyDown={e => {
							if (e.key === 'Enter') {
								e.preventDefault();
								return memberInputRef.current?.focus();
							}
						}}
						autoFocus
						className=' rounded-sm'
						type='text'
						value={form.title}
						onChange={e => handleUpdateForm('title', e.currentTarget.value)}
						required
						placeholder='Title'
						autoComplete='off'
					/>
				</div>
				<div className='flex'>
					<label className='mr-2'>모임 날짜</label>
					<input
						className=' rounded-sm'
						type='date'
						value={form.date}
						onChange={e => handleUpdateForm('date', e.currentTarget.value)}
						required
						placeholder='Title'
						autoComplete='off'
					/>
				</div>
				<>
					<div className='flex'>
						<label className='mr-2'>멤버 입력</label>
						<input
							ref={memberInputRef}
							className=' rounded-sm'
							type='text'
							value={memberInput}
							onChange={e => setMemberInput(e.currentTarget.value)}
							onKeyDown={e => e.key === 'Enter' && handleMemberInput()}
							placeholder='Name'
							autoComplete='off'
						/>
						<button onClick={handleMemberInput} type='button'>
							추가
						</button>
					</div>
					<div>
						<h3>등록된 멤버</h3>
						{form.members.map(name => (
							<div className='flex p-4 justify-between' key={name}>
								<p>{name}</p>
								<button type='button' onClick={() => handleRemoveMember(name)}>
									X
								</button>
							</div>
						))}
					</div>
				</>
				<button
					onClick={handleSubmit}
					type='button'
					className='p-5 text-white absolute top-0 right-0'
				>
					제출
				</button>
			</form>
			<button className='w-full text-right text-white h-16 p-4 bg-brand-deep'>
				다음
			</button>
		</div>
	);
}

export default CreateGroupSectionsContainer;
