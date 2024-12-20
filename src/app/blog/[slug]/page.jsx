import Image from "next/image";
import styles from "./singlePost.module.css";
import PostUser from "@/components/postUser/postUser";
import { Suspense } from "react";
import { getPost } from "@/lib/data";


// feth data with an API 
// const getData = async (slug) => {
// 	const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);

// 	if (!res.ok) {
// 		throw new Error("Something went wrong");
// 	}
// 	return res.json();
// };





// const getData = async (slug) => {
// 	const res = await fetch(`http://localhost:3000/api/blog/${slug}`);

// 	if (!res.ok) {
// 		throw new Error("Something went wrong");
// 	}
// 	return res.json();
// };


const getData = async (slug) => {
	const res = await fetch(`https://blog-app-53.vercel.app/api/blog/${slug}`);

	if (!res.ok) {
		throw new Error("Something went wrong");
	}
	return res.json();
};



export const generateMetadata = async({params}) => {
	const {slug}	= params;
	const post = await getPost(slug);

	return{
		title: post.title,
		description: post.desc,
		// img:"https://images.pexels.com/photos/19589485/pexels-photo-19589485/free-photo-of-a-woman-sitting-on-a-chair-in-front-of-a-restaurant.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
	};
};

const SinglePostPage = async ({ params }) => {
	const { slug } = params;
	// feth data with an API 
	const post = await getData(slug);

	// feth data without an API 
	// const post = await getPost(slug);
	console.log(post)
	return (
		<div className={styles.container}>
			{post.img && <div className={styles.imgContainer}>
				<Image
					className={styles.img}
					src={post.img}
					alt="img err post"
					fill
				/>
			</div>}

			<div className={styles.textContainer}>
				<h1 className={styles.title}>{post?.title}</h1>
				<div className={styles.detail}>
					
					{post && (<Suspense fallback={<div>Loading...</div>}>
						<PostUser userId={post.userId} />
					</Suspense>)}

					<div className={styles.detailText}>
						<span className={styles.detailTitle}>Published</span>
						{/* <span className={styles.detailValue}>{post.createdAt.toString()}</span> */}
						<span className={styles.detailValue}>{post.createdAt.toString().slice(0,16)}</span>
						{/* <span className={styles.detailValue}>{post.createdAt.toString().slice(4,16)}</span> */}
					</div>
				</div>

				<div className={styles.content}>{post?.desc}</div>
			</div>
		</div>
	);
};
export default SinglePostPage;
