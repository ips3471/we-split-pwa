import { render, fireEvent, getByText, screen } from '@testing-library/react';
import NumPad from '../components/num-pad';

describe('num-pad', () => {
	let currentValue: number;
	let button: HTMLButtonElement;
	const __undefinedButtonValue = '';
	const __clearButtonValue = 'C';
	const __submitButtonValue = '다음';
	const __backspaceButtonValue = '<';
	let mockOnChange: any;
	let mockOnSubmit: any;

	beforeEach(() => {
		mockOnChange = jest.fn();
		mockOnSubmit = jest.fn();
	});

	it('returns nothing when a unknown key was clicked', () => {
		currentValue = 1;

		render(
			<NumPad
				currentValue={currentValue}
				onChange={mockOnChange}
				onSubmit={mockOnSubmit}
			/>,
		);

		button = screen.getByRole('button', { name: __undefinedButtonValue });
		fireEvent.click(button);
		expect(mockOnChange).not.toBeCalled();
		expect(mockOnSubmit).not.toBeCalled();
	});

	it('returns nothing when backspace button was clicked with current value 0', () => {
		currentValue = 0;

		render(
			<NumPad
				currentValue={currentValue}
				onChange={mockOnChange}
				onSubmit={mockOnSubmit}
			/>,
		);

		button = screen.getByRole('button', { name: __backspaceButtonValue });
		fireEvent.click(button);
		expect(mockOnChange).not.toBeCalled();
		expect(mockOnSubmit).not.toBeCalled();
	});

	it('returns nothing when submit button was clicked with current value 0', () => {
		currentValue = 0;

		render(
			<NumPad
				currentValue={currentValue}
				onChange={mockOnChange}
				onSubmit={mockOnSubmit}
			/>,
		);

		button = screen.getByRole('button', { name: __submitButtonValue });
		fireEvent.click(button);
		expect(mockOnChange).not.toBeCalled();
		expect(mockOnSubmit).not.toBeCalled();
	});

	it('returns nothing when clear button was clicked with current value 0', () => {
		currentValue = 0;

		render(
			<NumPad
				currentValue={currentValue}
				onChange={mockOnChange}
				onSubmit={mockOnSubmit}
			/>,
		);

		button = screen.getByRole('button', { name: __clearButtonValue });
		fireEvent.click(button);
		expect(mockOnChange).not.toBeCalled();
		expect(mockOnSubmit).not.toBeCalled();
	});

	it('returns 0 when clear button was clicked', () => {
		currentValue = 1;

		render(
			<NumPad
				currentValue={currentValue}
				onChange={mockOnChange}
				onSubmit={mockOnSubmit}
			/>,
		);

		button = screen.getByRole('button', { name: __clearButtonValue });
		fireEvent.click(button);
		expect(mockOnChange).toBeCalledWith(0);
		expect(mockOnSubmit).not.toBeCalled();
	});

	it('returns value which last number is removed when backspace button was clicked', () => {
		currentValue = 12;

		render(
			<NumPad
				currentValue={currentValue}
				onChange={mockOnChange}
				onSubmit={mockOnSubmit}
			/>,
		);

		button = screen.getByRole('button', { name: __backspaceButtonValue });
		fireEvent.click(button);
		expect(mockOnChange).toBeCalledWith(1);
		expect(mockOnSubmit).not.toBeCalled();
	});

	it('calls function received by props when submit button was clicked', () => {
		currentValue = 1;

		render(
			<NumPad
				currentValue={currentValue}
				onChange={mockOnChange}
				onSubmit={mockOnSubmit}
			/>,
		);

		button = screen.getByRole('button', { name: __submitButtonValue });
		fireEvent.click(button);
		expect(mockOnChange).not.toBeCalled();
		expect(mockOnSubmit).toBeCalled();
	});
});
