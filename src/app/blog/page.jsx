import PostCard from "@/components/postCard/postCard";
import styles from "./blog.module.css"
import { getPosts } from "@/lib/data";
// feth data with an API 


// const getData =  async () => {
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts",{next: {revalidate: 10 }})

//     if(!res.ok){
//         throw new Error("Something went wrong")
//     }
//     return res.json();
// }


const BlogPage = async () => {

// feth data withoout an API 
  const posts = await getPosts();

  // feth data with an API 
    // const posts = await getData();
    return (
      <div className={styles.container}>
        {posts.map((post)=>(

            <div className={styles.post} key={post.id}>
            <PostCard post={post}/>
        </div>
        
        ))}
       
      </div>
    );
  };
  export default BlogPage;