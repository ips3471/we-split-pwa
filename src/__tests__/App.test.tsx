import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('demo', () => {
	expect(true).toBe(true);
});

describe('App page', () => {
	it('renders dashboard page when pageId is provided', () => {
		render(
			<App
				pageId='test'
				pageComponentWithProvided={<div>Dashboard Component</div>}
				pageComponentWithNull={<div>Welcome Component</div>}
			/>,
		);
		expect(screen.getByText('Dashboard Component')).toBeInTheDocument();
	});

	it('renders welcome page when pageId is null', () => {
		render(
			<App
				pageId={null}
				pageComponentWithProvided={<div>Dashboard Component</div>}
				pageComponentWithNull={<div>Welcome Component</div>}
			/>,
		);
		expect(screen.getByText('Welcome Component')).toBeInTheDocument();
	});
});
