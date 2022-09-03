import Link from 'next/link';
import { useFetchArray } from 'src/hooks/useFetchArray';
import { API_URL } from 'src/utils/const';
import { fetcher } from 'src/utils/fetcher';

export const CommentListByPostId = (props) => {
	const { data, error, isLoading, isEmpty } = useFetchArray(props.id ? `${API_URL}/posts/${props.id}/comments` : null, fetcher);

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
							<Link href={`/comments/${comment.id}`}>
								<a className="block hover:text-blue-500">{comment.body}</a>
							</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
};
