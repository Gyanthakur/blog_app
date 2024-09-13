"use server";

import { revalidatePath } from "next/cache";
import { Post } from "./models";
import { connectToDb } from "./utils";
import { signIn, signOut } from "./auth";

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



