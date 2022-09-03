import 'tailwindcss/tailwind.css';
import Head from 'next/head';
import { AppLayout } from 'src/layouts/AppLayout';

const MyApp = ({ Component, pageProps }) => {
	return (
		<>
			<Head>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<AppLayout>
				<Component {...pageProps} />;
			</AppLayout>
		</>
	);
};

export default MyApp;
