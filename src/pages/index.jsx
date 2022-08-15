import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Main } from '../components/Main';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { useCounter } from '../hooks/useCounter';
import { useInputArray } from '../hooks/useInputArray';
import { useBgLightBlue } from '../hooks/useBgLightBlue';

export default function Home(props) {
	const { count, isShow, handleClick, handleDisplay, text, array, handleChange, handleAdd } = props;

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
			<button onClick={handleAdd}>追加</button>
			<ul>
				{array.map((item) => {
					return <li key={item}>{item}</li>;
				})}
			</ul>

			<Main page="index" />
			<Footer />
		</div>
	);
}
