import {useEffect, useState} from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

import { A } from '../A/A';
import {Loader} from '../Loader';
import { paths } from './constants';
import style from './style/ContainerWithNav.module.scss';

export const Container = ({ children, keywords = '', pageName = 'Next Kenny' }) => {
	const router = useRouter();
	
	const [pageLoading, setPageLoading] = useState(false);

	useEffect(() => {
		const handleStart = () => { setPageLoading(true); };
		const handleComplete = () => { setPageLoading(false); };

		router.events.on('routeChangeStart', handleStart);
		router.events.on('routeChangeComplete', handleComplete);
		router.events.on('routeChangeError', handleComplete);

		// If the component is unmounted, unsubscribe
		// from the event with the `off` method:
		return () => {
			router.events.off('routeChangeStart', handleStart);
			router.events.off('routeChangeStart', handleComplete);
			router.events.off('routeChangeStart', handleComplete);
			setPageLoading(false);
		}
	}, []);

	return (
		<div className={style.wrapper}>
			<Head>
				<title>{pageName}</title>
				<meta keywords={'nextjs, kenny, ' + keywords}></meta>
				<link rel='icon' href='/icon.jpeg' />
			</Head>

			<div className={style.nav}>
				{paths.map(item => <A href={item.href} text={item.text} key={item.href} />)}
			</div>
			{pageLoading ? <Loader /> : children}
		</div>
	)
};
