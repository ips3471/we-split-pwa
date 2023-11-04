import { render, fireEvent } from '@testing-library/react';
import LinkedSection from '../components/linked-section';

test('clicking on LinkedSection triggers provided function', () => {
	const mockOnNavigate = jest.fn();

	const { getByText } = render(
		<LinkedSection onClick={mockOnNavigate}>Children Component</LinkedSection>,
	);

	const sectionElement = getByText('Children Component');
	fireEvent.click(sectionElement);
	expect(mockOnNavigate).toHaveBeenCalled();
});
