"use server";

import { revalidatePath } from "next/cache";
import { Post, User } from "./models";
import { connectToDb } from "./utils";
import { signIn, signOut } from "./auth";
import bcrypt from "bcryptjs";

export const addPost = async (formData) => {
	// const title = formData.get( "title");
	// const desc = formData.get("desc");
	// const slug = formData.get("slug");
	// const userId = formData.get("userId");
	// console.log("title : " , title,
	//     "desc : ", desc,
	//     "slug : ",slug,
	//     "user Id : ", userId
	// );

	// const {title, desc, slug, userId} = formData; //undefined because we are not get
	const { title, desc, slug, userId } = Object.fromEntries(formData); //get the value

	// console.log("title : " , title,
	//     "desc : ", desc,
	//     "slug : ",slug,
	//     "user Id : ", userId
	// );
	try {
		connectToDb();

		const newpost = new Post({
			title,
			desc,
			slug,
			userId,
		});

		await newpost.save();

		console.log("Post added successfully ! And saved to db");

		revalidatePath("/blog");
	} catch (error) {
		console.log(error);
		return { error: "Failed to add post ! or something went wrong" };
	}
};

export const deletePost = async (formData) => {
	const { id } = Object.fromEntries(formData); //get the value

	//
	try {
		connectToDb();

		await Post.findByIdAndDelete(id);

		console.log("Post deleted successfully !");

		revalidatePath("/blog");
	} catch (error) {
		console.log(error);
		return { error: "Failed to add post ! or something went wrong" };
	}
};

export const handleGithubLogin = async () => {
	"use server";
	await signIn("github");
};
export const handleLogout = async () => {
	"use server";
	await signOut();
};

export const register = async (previousState,formData) => {
	const { username, email, password, img, passwordRepeat } =
		Object.fromEntries(formData);

	if (password !== passwordRepeat) {
		return {error : "Password do not match !"}
		
	}
	try {
		connectToDb();

		const user = await User.findOne({ username });
		if (user) {
			return {error:"userName alredy exist"};
		}

		const salt = await bcrypt.genSalt(10);

		const hashedPassword = await bcrypt.hash(password, salt);
		const newUser = new User({
			username,
			email,
			password: hashedPassword,
			img,
		});
		await newUser.save();
		console.log("saved to db")
		return {success : true};
	} catch (error) {
		console.log(error);
		return { error: "Failed to register ! or something went wrong" };
	}
};

export const login = async (prevState, formData) => {
	const { username, password } = Object.fromEntries(formData);

	
	try {
		// connectToDb();
		await signIn("credentials", {
			username,
			password,
		});

		
	} catch (err) {
		console.log(err);

		// if(error.message.includes("NEXT_REDIRECT"))
		// {
		// 	return {error: "Invalid username or password"}
		// }
		
		
		return { error: "Failed to Login ! Or user not found!" };
		// throw err;
	}
};
