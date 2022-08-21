import Link from 'next/link';
import { useUsers } from 'src/hooks/useUsers';

export const Users = () => {
	const { data, error, isLoading, isEmpty } = useUsers();

	if (isLoading) {
		return <div>ローディング中</div>;
	}

	if (error) {
		return <div>{error.message}</div>;
	}

	if (isEmpty) {
		return <div>データは空です</div>;
	}

	return (
		<div>
			<ol>
				{data.map((user) => {
					return (
						<li key={user.id}>
							<Link href={`/users/${user.id}`}>
								<a>{user.name}</a>
							</Link>
						</li>
					);
				})}
			</ol>
		</div>
	);
};

export default Users;
