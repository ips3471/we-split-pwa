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
				name: 'test1',
				total: 1,
			},
			{
				id: '2',
				name: 'test2',
				total: 2,
			},
		];
	});
	it('renders members props', () => {
		render(<Categories items={categoryItems} />);
		expect(screen.getByText('test1')).toBeInTheDocument();
		expect(screen.getByText('test2')).toBeInTheDocument();
	});
});
