import Head from 'next/head';
import { Header } from 'src/components/Header';
import { Users as Userscomponent } from 'src/components/users';

const Users = () => {
	return (
		<div>
			<Head>
				<title>Users page</title>
			</Head>
			<Header />
			<Userscomponent />
		</div>
	);
};

export default Users;
