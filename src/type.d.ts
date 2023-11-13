export type MembersData = {
	id: string;
	members: MemberData[];
};

export type MemberData = {
	id: string;
	name: string;
};

export type CategoryItem = {
	id: string;
	name: Category;
	total: number;
};

export type ExpenseData = {
	amount: number;
	by: string;
	category: Category;
	date: {
		day: string;
		time: string;
	};
	for: string[];
	name: string;
	id: string;
};

export type Category =
	| 'accomodation'
	| 'entertainment'
	| 'groceries'
	| 'restaurants'
	| 'transport'
	| 'none';
