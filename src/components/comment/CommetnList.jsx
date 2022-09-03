import Link from 'next/link';
import { useFetchArray } from 'src/hooks/useFetchArray';
import { API_URL } from 'src/utils/const';
import { fetcher } from 'src/utils/fetcher';

export const CommetnList = () => {
	const { data, error, isLoading, isEmpty } = useFetchArray(`${API_URL}/comments`, fetcher);

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
			<ul className="space-y-2">
				{data.map((comment) => {
					return (
						<li key={comment.id} className="border-b pb-2">
							<Link href={`/comments/${comment.id}`} prefetch={false}>
								<a className="block hover:text-blue-500">{comment.body}</a>
							</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default CommetnList;
