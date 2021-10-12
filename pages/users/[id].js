import { Container } from "../../components";
import { useRouter } from "next/router";
import style from './style/users.module.scss';

function User({ user }) {
	const { query } = useRouter();

	return (
		<Container pageName={user.name}>
			User with id {query.id}
			<div className={style.userWrapper}>
				<span>
					Name: {user.name}
				</span>
				<span>
					Phone: {user.phone}
				</span>
			</div>
		</Container>
	)
}

export default User;

export async function getServerSideProps({ params }) {
	const user = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
		.then(res => res.json());

	return {
		props: { user }
	}
}