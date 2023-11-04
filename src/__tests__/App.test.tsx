import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from '../App';

jest.mock('../pages/dashboard/Dashboard', () => ({
	__esModule: true,
	default: () => <div>Dashboard Component</div>,
}));

test('demo', () => {
	expect(true).toBe(true);
});

describe('App page', () => {
	it('renders dashboard page when pageId is provided', () => {
		const pageId = 'testId';

		render(<App pageId={pageId} />);

		expect(screen.getByText('Dashboard Component')).toBeInTheDocument();
	});

	it('renders welcome page when pageId is not provided', () => {
		const pageId = undefined;

		render(<App pageId={pageId} />);
		expect(screen.getByText('Welcome Component')).toBeInTheDocument();
	});
});
