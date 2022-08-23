import Link from 'next/link';
import { usePost } from 'src/hooks/usePost';

export const PostByCommentsId = (props) => {
	const { data, error, isLoading } = usePost(props.id);

	if (isLoading) {
		return <div>ローディング中</div>;
	}

	if (error) {
		return <div>{error.message}</div>;
	}

	return (
		<Link href={`/posts/${data?.id}`}>
			<a>{data?.title}</a>
		</Link>
	);
};

export default PostByCommentsId;
