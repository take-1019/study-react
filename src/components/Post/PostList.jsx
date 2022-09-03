import Link from 'next/link';
import { useFetchArray } from 'src/hooks/useFetchArray';
import { API_URL } from 'src/utils/const';
import { fetcher } from 'src/utils/fetcher';

export const PostList = () => {
	const { data, error, isLoading, isEmpty } = useFetchArray(`${API_URL}/posts`, fetcher);

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
			<ul className="space-y-4">
				{data.map((post) => {
					return (
						<li key={post.id}>
							<Link href={`/posts/${post.id}`}>
								<a className="block group">
									<h1 className="text-xl font-bold group-hover:text-blue-500">{post.title}</h1>
									<p className="text-lg text-gray-500 group-hover:text-blue-400">{post.body}</p>
								</a>
							</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default PostList;
