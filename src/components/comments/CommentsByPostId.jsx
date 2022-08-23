import Link from 'next/link';
import { useCommetnsByPostId } from 'src/hooks/useFetchArray';

export const CommentsByPostId = (props) => {
	const { data, error, isLoading, isEmpty } = useCommetnsByPostId(props.id);

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
