import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { CategoryItem } from '../type';
import Categories from '../components/overview-categories';

describe('Categories component', () => {
	let categoryItems: CategoryItem[];

	beforeEach(() => {
		categoryItems = [
			{
				id: '1',
				name: 'accomodation',
				total: 1,
			},
			{
				id: '2',
				name: 'entertainment',
				total: 2,
			},
		];
	});
	it('renders members props', () => {
		render(<Categories items={categoryItems} />);
		expect(screen.getByText('accomodation')).toBeInTheDocument();
		expect(screen.getByText('entertainment')).toBeInTheDocument();
	});
});
