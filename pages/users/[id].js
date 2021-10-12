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

export async function getStaticProps({ params }) {
	// params contains the post `id`.
	// If the route is like /posts/1, then params.id is 1
	const user = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
		.then(res => res.json());

	return {
		props: { user }
	}
}

// This function gets called at build time
export async function getStaticPaths(params) {
	// Call an external API endpoint to get posts
	const user = await fetch(`https://jsonplaceholder.typicode.com/users`)
		.then(res => res.json());

	// Get the paths we want to pre-render based on posts
	const paths = user.map((user) => ({
		params: { id: user.id.toString() },
	}));

	// We'll pre-render only these paths at build time.
	// { fallback: false } means other routes should 404.
	return { paths, fallback: false }
}
