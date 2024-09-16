// import { getPosts } from "@/lib/data";
// import styles from "./adminPosts.module.css";
// import Image from "next/image";
// import { deletePost } from "@/lib/action";

// const AdminPosts = async (id) => {
// 	const posts = await getPosts(id);

// 	// const deletePostWithId = async (id ) => {
// 	// 	"use server";
// 	// 	return deletePost.bind(null, id);
// 	// };
// 	return (
// 		<div className={styles.container}>
// 			{posts.map((post) => {
// 				<div key={post.id} className={styles.post}>
// 					<div className={styles.details}>
// 						<Image
// 							src={post.img || "noAvatar.png"}
// 							alt="admin post image alt"
// 							width={50}
// 							height={50}
// 						/>

// 						<span className={styles.postTitle}>{post.title}</span>
// 					</div>

// 					{/* <form action={() => deletePostWithId(post.id)}> */}
// 						<form action={deletePost}>
//                         <input type="hidden" name="id" value={post.id} />
// 						{/* <input type="hidden" name="id" value={post.id} /> */}
// 						<button className={styles.postButton}>Delete</button>
// 					</form>
// 				</div>;
// 			})}
// 		</div>
// 	);
// };

// export default AdminPosts;


import { getPosts } from "@/lib/data";
import styles from "./adminPosts.module.css";
import Image from "next/image";
import { deletePost } from "@/lib/action";

const AdminPosts = async () => {
  const posts = await getPosts();

  return (
    <div className={styles.container}>
      <h1>Posts</h1>
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <div className={styles.detail}>
            <Image
              src={post.img || "/noAvatar.png"}
              alt=""
              width={50}
              height={50}
            />
            <span className={styles.postTitle}>{post.title}</span>
          </div>
          <form action={deletePost}>
            <input type="hidden" name="id" value={post.id} />
            <button className={styles.postButton}>Delete</button>
          </form>
        </div>
      ))}
    </div>
  );
};

export default AdminPosts;