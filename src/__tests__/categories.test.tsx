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
				name: '숙박/서비스',
				total: 1,
			},
			{
				id: '2',
				name: '관람/티켓',
				total: 2,
			},
		];
	});
	it('renders members props', () => {
		render(<Categories items={categoryItems} />);
		expect(screen.getByText('숙박/서비스')).toBeInTheDocument();
		expect(screen.getByText('관람/티켓')).toBeInTheDocument();
	});
});
