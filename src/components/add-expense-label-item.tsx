type Props = {
	readonly labelName: string;
	readonly value: string | number;
	readonly isFocused: boolean;
	onClick: () => void;
};

function LabelItem({ labelName, value, isFocused, onClick }: Props) {
	return (
		<div onClick={onClick} className='flex'>
			<span className='w-12'>{labelName}</span>
			<span
				className={`flex-1 text-left  border-b ${
					isFocused ? 'border-brand' : 'border-black'
				}`}
			>
				{value}
			</span>
		</div>
	);
}

export default LabelItem;
