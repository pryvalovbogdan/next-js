import { A } from '../A/A';
import Head from "next/head";
import style from './style/ContainerWithNav.module.scss';
import { paths } from "./constants";

export const Container = ({ children, keywords = '', pageName = 'Next Kenny' }) => {
	return (
		<div className={style.wrapper}>
			<Head>
				<title>{pageName}</title>
				<meta keywords={'nextjs, kenny, ' + keywords}></meta>
				<link rel="icon" href="/icon.jpeg" />
			</Head>

			<div className={style.nav}>
				{paths.map(item => <A href={item.href} text={item.text} key={item.href} />)}
			</div>
			{children}
		</div>
	)
};
