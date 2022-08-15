import { useState } from 'react';
import { useCallback } from 'react';
import classes from 'src/components/Links/Links.module.css';

const ITEMS = [
	{ href: 'https://nextjs.org/docs', title: 'Documentation →', description: 'Find in-depth information about Next.js features and API.' },
	{ href: 'https://nextjs.org/learn', title: 'Learn →', description: 'Learn about Next.js in an interactive course with quizzes!' },
	{ href: 'https://github.com/vercel/next.js/tree/canary/examples', title: 'Examples →', description: 'Discover and deploy boilerplate example Next.js projects.' },
	{
		href: 'https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app',
		title: 'Deploy →',
		description: 'Instantly deploy your Next.js site to a public URL with Vercel.',
	},
];

export function Links({ items, handleReduce }) {
	return (
		<div className={classes.grid}>
			<button onClick={handleReduce}>減らす</button>
			{items.map((item) => {
				return (
					<a key={item.href} href={item.href} className={classes.card}>
						<h2>{item.title}</h2>
						<p>{item.description}</p>
					</a>
				);
			})}
		</div>
	);
}
