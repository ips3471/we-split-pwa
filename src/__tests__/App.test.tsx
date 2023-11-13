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
	let initId;

	it('renders Welcome Component when initId is not provided', () => {
		initId = undefined;

		render(<App initId={initId} />);

		expect(screen.getByText('Welcome Component')).toBeInTheDocument();
	});

	it('renders Dashboard page when initId is provided', () => {
		initId = 'testId';

		render(<App initId={initId} />);

		expect(screen.getByText('Dashboard Component')).toBeInTheDocument();
	});
});
