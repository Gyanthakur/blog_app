import { handleGithubLogin } from "@/lib/action";
// import { auth, signIn } from "@/lib/auth";
import styles from "./login.module.css";
import LoginForm from "@/components/loginForm/loginForm";

const LoginPage = () => {
	// const session = await auth();

	// console.log(session);

	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<form className={styles.formGithub} action={handleGithubLogin}>
					<button>Login with Github</button>
				</form>

				<LoginForm />
			</div>
		</div>
	);
};
export default LoginPage;
