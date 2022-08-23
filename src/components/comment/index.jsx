import Head from 'next/head';
import { PostByCommentsId } from 'src/components/Post/PostBycommentsId';
import { useComment } from 'src/hooks/useComment';

export const Comment = () => {
	const { data, error, isLoading } = useComment();

	if (isLoading) {
		return <div>ローディング中</div>;
	}

	if (error) {
		return <div>{error.message}</div>;
	}

	return (
		<div>
			<div className="text-lg">
				{data.name} ({data.email})
			</div>
			<h1 className="text-3xl font-bold">{data.body}</h1>
			<h2 className="text-xl font-bold mt-10">元の記事</h2>
			<div className="mt-2">
				<PostByCommentsId id={data.postId} />
			</div>
		</div>
	);
};

export default Comment;
