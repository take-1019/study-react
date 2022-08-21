import Head from 'next/head';
import { Header } from 'src/components/Header';
import { Commetns as Commentscomponent } from 'src/components/comments';

const Comments = () => {
	return (
		<div>
			<Head>
				<title>Comments page</title>
			</Head>
			<Header />
			<Commentscomponent />
		</div>
	);
};

export default Comments;
