import Link from 'next/link';
import { useCommetns } from 'src/hooks/useFetchArray';

export const Commetns = () => {
	const { data, error, isLoading, isEmpty } = useCommetns();

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
				{data.map((comment) => {
					return (
						<li key={comment.id}>
							<Link href={`/comments/${comment.id}`}>
								<a>{comment.body}</a>
							</Link>
						</li>
					);
				})}
			</ol>
		</div>
	);
};

export default Commetns;
