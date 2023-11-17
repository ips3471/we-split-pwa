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
	| '숙박/서비스'
	| '관람/티켓'
	| '마트/편의점'
	| '식당/카페'
	| '카풀/주차'
	| '기타';

export type SettleUpExpenseProps = Pick<
	ExpenseData,
	'amount' | 'id' | 'name' | 'by' | 'for'
>[];
