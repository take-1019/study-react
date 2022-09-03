import Head from 'next/head';
import CommetnList from 'src/components/comment/CommetnList';
import { SWRConfig } from 'swr';
import { API_URL } from 'src/utils/const';

export const getStaticProps = async () => {
	const COMMENTS_API_URL = `${API_URL}/comments`;
	const comments = await fetch(COMMENTS_API_URL);
	const commentsData = await comments.json();

	return {
		props: {
			fallback: {
				[COMMENTS_API_URL]: commentsData,
			},
		},
		revalidate: 1,
	};
};

const Comments = (props) => {
	const { fallback } = props;
	return (
		<div>
			<Head>
				<title>Comments page</title>
			</Head>
			<SWRConfig value={{ fallback }}>
				<CommetnList />
			</SWRConfig>
		</div>
	);
};

export default Comments;
