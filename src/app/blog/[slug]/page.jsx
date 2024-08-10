
import Image from "next/image";
import styles from "./singlePost.module.css"

const SinglePostPage = () => {
    return (
      <div className={styles.container}>
        <div className={styles.imgContainer}>
        <Image className={styles.img} src="/contact.png" alt="img err post" fill/>
        </div>

        <div className={styles.textContainer}>
          <h1 className={styles.title}>Title</h1>
          <div className={styles.detail}>
          <Image className={styles.avatar} src="/gyanim.jpg" alt="img err post" height={50} width={50}/>

          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Gyan thakur</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
          </div>

          <div className={styles.content}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa quia nisi, quaerat provident exercitationem assumenda minus, saepe obcaecati voluptatem suscipit animi deleniti id aliquid quo possimus. Assumenda ex dolor dolores?
          </div>
        </div>
        
      </div>
    );
  };
  export default SinglePostPage;