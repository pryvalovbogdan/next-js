import { Container } from "../../components";
import { useRouter } from "next/router";

function User({ user }) {
	const { query } = useRouter();

	return (
		<Container pageName={user.name}>
			User with id {query.id}
			<div className="user-wrapper">
				<span>
					Name: {user.name}
				</span>
				<span>
					Phone: {user.phone}
				</span>
			</div>
			<style jsx>
				{`.user-wrapper {
					display: flex;
					flex-direction: column;
					align-items: center;
				}`}
			</style>
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