import PostCard from "@/components/postCard/postCard";
import styles from "./blog.module.css";
// import AdminPostForm from "@/components/adminPostForm/adminPostForm";
import AddPostByUser from "@/components/addPostbyUser/addPostByUser";
import { Suspense } from "react";
import { auth } from "@/lib/auth";
// import { getPosts } from "@/lib/data";
// feth data with an API

// const getData =  async () => {
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts",{next: {revalidate: 10 }})

//     if(!res.ok){
//         throw new Error("Something went wrong")
//     }
//     return res.json();
// }
const getData = async () => {
	const res = await fetch("http://localhost:3000/api/blog", {
		next: { revalidate: 10 },
	});

	if (!res.ok) {
		throw new Error("Something went wrong");
	}
	return res.json();
};

const BlogPage = async () => {
	// feth data withoout an API
	// const posts = await getPosts();

	// feth data with an API
	const posts = await getData();
	const session = await auth();
	return (
		<div className={styles.container}>
			{posts.map((post) => (
				<div className={styles.post} key={post.id}>
					<PostCard post={post} />
				</div>
			))}
      <Suspense fallback={<div>Loading...</div>}>
					<AddPostByUser userId={session.user.id} />
				</Suspense>
		</div>
	);
};
export default BlogPage;
