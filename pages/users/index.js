import { Container, A } from "../../components";
import style from './style/users.module.scss';

export default function Users ({ users }) {
	return <Container keywords={'users'} pageName={'Users'}>
		<h1>Users list</h1>
		<div className={style.usersWrapper}>
			{users.map(item => <A key={item.id} text={item.name} href={`users/${item.id}`}/>)}
		</div>
	</Container>
};

export async function getStaticProps(context) {
	const users = await fetch('https://jsonplaceholder.typicode.com/users')
		.then(res => res.json());

	return {
		props: { users }, // will be passed to the page component as props
	}
}