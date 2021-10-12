import { Container } from "../components/CointainerWithNav";
import { useEffect } from "react";
import { useRouter } from "next/router";

function Custom404() {
	const router = useRouter();

	useEffect(() => {
		router.push('/')
	}, []);

	return <Container />
}

export default Custom404;
