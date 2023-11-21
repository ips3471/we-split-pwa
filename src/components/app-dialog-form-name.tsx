import { GroupData } from '../type';

type Props = {
	prevName: string;
	onChange: <K extends keyof GroupData>(value: GroupData[K]) => void;
	value: string;
};

function DialogNameForm({ onChange, prevName, value }: Props) {
	return (
		<input
			spellCheck='false'
			autoFocus
			placeholder={prevName}
			className='bg-transparent w-full outline-none'
			onChange={e => onChange(e.currentTarget.value)}
			value={value}
			required
		/>
	);
}

export default DialogNameForm;
