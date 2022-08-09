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
	const [text, setText] = useState('');
	const [isShow, setisShow] = useState(true);

	const handleClick = useCallback(() => {
		if (count < 10) {
			setCount((prevCount) => prevCount + 1);
		}
	}, [count]);

	const handleDisplay = useCallback(() => {
		setisShow((prevIsShow) => !prevIsShow);
	}, []);

	useEffect(() => {
		document.body.style.backgroundColor = 'lightblue';
		return () => {
			document.body.style.backgroundColor = '';
		};
	}, []);

	const handleChange = useCallback((e) => {
		if (e.target.value.length > 5) {
			alert('5文字以内にして下さい');
			return;
		}
		setText(e.target.value.trim());
	}, []);

	return (
		<div className={styles.container}>
			<Head>
				<title>Index page</title>
			</Head>
			<Header />
			{isShow ? <h1>{count}</h1> : null}
			<button href="/about" onClick={handleClick}>
				ボタン
			</button>
			<button onClick={handleDisplay}>{isShow ? '非表示' : '表示'}</button>
			<input type="text" value={text} onChange={handleChange} />
			<Main page="index" />
			<Footer />
		</div>
	);
}
