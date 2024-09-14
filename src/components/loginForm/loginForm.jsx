"use client";

import { login } from "@/lib/action";
import styles from "./loginForm.module.css";

import { useFormState } from "react-dom";
import { useEffect } from "react";
// import { useRouter } from "next/router";
import Link from "next/link";
import { useRouter } from "next/navigation";

const LoginForm = () => {
	const [state, formAction] = useFormState(login, undefined);
	const router = useRouter();
	useEffect(() => {
		state?.success && router.push("/");
	}, [state?.success, router]);
	return (
		<form className={styles.form} action={formAction}>
			<input type="text" placeholder="Username" name="username" />
			
			<input type="password" placeholder="Password" name="password" />
			
			<button>Login</button>

			{state?.error}

			<Link href="/register">
                    {"Don't Have an account? "}<b>Register</b>{" "}
			</Link>
		</form>
	);
};

export default LoginForm;
