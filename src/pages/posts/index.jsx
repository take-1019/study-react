import Head from 'next/head';
import { PostList } from 'src/components/Post/PostList';

const Posts = () => {
	return (
		<div>
			<Head>
				<title>Posts page</title>
			</Head>
			<PostList />
		</div>
	);
};

export default Posts;
