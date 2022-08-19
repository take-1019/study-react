import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Header } from '../components/Header';
import { useCallback, useEffect, useState } from 'react';

const Home = (props) => {
	const [posts, setPosts] = useState([]);

	const getPosts = useCallback(async () => {
		const res = await fetch('https://jsonplaceholder.typicode.com/posts');
		const json = await res.json();
		setPosts(json);
	}, []);

	useEffect(() => {
		getPosts();
	}, [getPosts]);

	return (
		<div className={styles.container}>
			<Head>
				<title>Index page</title>
			</Head>
			<Header />
			{posts.length > 0 ? (
				<ol>
					{posts.map((post) => {
						return <li key={post.id}>{post.title}</li>;
					})}
				</ol>
			) : null}
		</div>
	);
};

export default Home;
