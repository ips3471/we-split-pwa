import { useEffect, useRef } from 'react';

type Props = {
	readonly labelName: string;
	readonly value: string | number;
	readonly isFocused: boolean;
	onClick: () => void;
	onChange: (text: string) => void;
	type: 'text' | 'date' | 'time';
};

function InputItem({
	labelName,
	value,
	isFocused,
	onClick,
	onChange,
	type,
}: Props) {
	const inputRef = useRef<HTMLInputElement>(null);
	useEffect(() => {
		if (isFocused) {
			inputRef.current?.focus();
		}
	}, [isFocused]);
	return (
		<div onClick={onClick} className='flex'>
			<span className='w-12'>{labelName}</span>
			<input
				ref={inputRef}
				onChange={e => onChange(e.currentTarget.value)}
				spellCheck={false}
				className={`flex-1 outline-none text-left bg-transparent border-b ${
					isFocused ? 'border-brand' : 'border-black'
				}`}
				type={type}
				value={value}
			/>
		</div>
	);
}

export default InputItem;
4;
