import Head from 'next/head';
import Image from 'next/image';
import styles from 'src/styles/Home.module.css';
import { Main } from 'src/components/Main';
import { Footer } from 'src/components/Footer';
import { Header } from 'src/components/Header';

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>about page</title>
			</Head>
			<Header />
			<Main page="about" />
			<Footer />
		</div>
	);
}
