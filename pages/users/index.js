import { Container, A } from "../../components";

export default function Users ({ users }) {
	return <Container keywords={'users'} pageName={'Users'}>
		<h1>Users list</h1>
		<div className="users-wrapper">
			{users.map(item => <A key={item.id} text={item.name} href={`users/${item.id}`}/>)}
		</div>
		<style jsx>
			{`.users-wrapper {
					display: flex;
					flex-direction: column;
					align-items: center;
				}`}
		</style>
	</Container>
};

export async function getStaticProps(context) {
	const users = await fetch('https://jsonplaceholder.typicode.com/users')
		.then(res => res.json());

	return {
		props: { users }, // will be passed to the page component as props
	}
}