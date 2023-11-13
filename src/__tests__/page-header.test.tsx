import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import PageHeader from '../components/page-header';

describe('page header', () => {
	describe('when handleOptions is not provided', () => {
		beforeEach(() => {
			render(<PageHeader handleOptionButton={undefined} />);
		});

		it('renders with back button', () => {
			expect(screen.getByTestId('backBtn')).toBeInTheDocument();
		});
		it('hides options icon', () => {
			expect(screen.queryByTestId('optionsBtn')).toBeNull();
		});
	});

	describe('when handleOptions is provided', () => {
		const handleOption = jest.fn();

		beforeEach(() => {
			render(<PageHeader handleOptionButton={handleOption} />);
		});

		it('renders with back button', () => {
			expect(screen.getByTestId('backBtn')).toBeInTheDocument();
		});
		it('shows options icon', () => {
			expect(screen.getByTestId('optionsBtn')).toBeInTheDocument();
		});
		it('calls provided handleOption on OptionsIcon button click', () => {
			fireEvent.click(screen.getByTestId('optionsBtn'));

			expect(handleOption).toHaveBeenCalled();
		});
	});
});
