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

const SinglePostPage = async ({ params }) => {
	const { slug } = params;
	// feth data with an API 
	// const post = await getData(slug);

	// feth data without an API 
	const post = await getPost(slug);
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
