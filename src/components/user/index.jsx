import Head from 'next/head';
import { useUser } from 'src/hooks/useUser';

export const User = () => {
	const { data, error, isLoading } = useUser();

	if (isLoading) {
		return <div>ローディング中</div>;
	}

	if (error) {
		return <div>{error.message}</div>;
	}

	return (
		<div>
			<Head>
				<title>{data.name}</title>
			</Head>
			<h1>{data.name}</h1>
			<ul>
				<li>{data.email}</li>
				<li>{data.username}</li>
				<li>{data.address.city}</li>
				<li>{data.phone}</li>
			</ul>
		</div>
	);
};

export default User;
