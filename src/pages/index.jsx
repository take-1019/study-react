import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Main } from '../components/Main';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { useEffect } from 'react';
import { useState } from 'react';
import { useCallback } from 'react';

export default function Home() {
	const [count, setCount] = useState(1);

	const handleClick = useCallback(
		() => {
			if (count < 10) {
				setCount((count) => count + 1);
			}
		},
		[count]
	);
	useEffect(() => {
		document.body.style.backgroundColor = 'lightblue';
		return () => {
			document.body.style.backgroundColor = '';
		};
	}, []);

	return (
		<div className={styles.container}>
			<Head>
				<title>Index page</title>
			</Head>
			<Header />
			<h1>{count}</h1>
			<button href="/about" onClick={handleClick}>
				ボタン
			</button>
			<Main page="index" />
			<Footer />
		</div>
	);
}
