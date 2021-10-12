import Link from 'next/link';
import styles from './style/A.module.scss';

export const A = ({ text, href }) => {
	return (
		<Link href={href}>
			<span className={styles.link}>
				{text}
			</span>
		</Link>
	)
};
