import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";
const PostCard = ({ post }) => {
	return (
		<div className={styles.container}>
			<div className={styles.top}>
				{post.img && <div className={styles.imgConatiner}>
					<Image
						className={styles.img}
						src={post.img}
						alt="img err post"
						fill
					/>
				</div>}
				<span className={styles.date}>01.01.2024</span>
			</div>

			<div className={styles.button}>
				<h1 className={styles.title}>{post.title}</h1>
				<p className={styles.desc}>{post.body}</p>
				<Link className={styles.link} href={`/blog/${post.slug}`}>
					Read More
				</Link>
			</div>
		</div>
	);
};
export default PostCard;
