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
	name: string;
	total: number;
};
