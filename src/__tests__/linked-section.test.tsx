import { render, fireEvent } from '@testing-library/react';
import LinkedSection from '../components/linked-section';

test('clicking on LinkedSection triggers onNavigate', () => {
	const mockOnNavigate = jest.fn();
	const toPath = '/test-path';

	const { getByText } = render(
		<LinkedSection to={toPath} onNavigate={mockOnNavigate}>
			Children Component
		</LinkedSection>,
	);

	const sectionElement = getByText('Children Component');
	fireEvent.click(sectionElement);
	expect(mockOnNavigate).toHaveBeenCalledWith(toPath);
});
