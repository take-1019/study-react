import Head from 'next/head';
import { Header } from 'src/components/Header';
import { Users as Userscomponent } from 'src/components/users';
import { API_URL } from 'src/utils/const';
import { SWRConfig } from 'swr';

export const getServerSideProps = async () => {
	const USERS_API_URL = `${API_URL}/users`;
	const users = await fetch(USERS_API_URL);
	const usersData = await users.json();

	return {
		props: {
			fallback: {
				[USERS_API_URL]: usersData,
			},
		},
	};
};

const Users = (props) => {
	const { fallback } = props;
	return (
		<div>
			<Head>
				<title>Users page</title>
			</Head>
			<SWRConfig value={{ fallback }}>
				<Header />
				<Userscomponent />
			</SWRConfig>
		</div>
	);
};

export default Users;
