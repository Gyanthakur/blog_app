

import Image from "next/image";
import styles from "./postCard.module.css"
import Link from "next/link";
const PostCard = () => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.imgConatiner}>
                    <Image className={styles.img} src="/contact.png" alt="img err post" fill/>
                </div>
                <span className={styles.date}>01.01.2024</span>
            </div>

            <div className={styles.button}>
                <h1 className={styles.title}>Title</h1>
                <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque laudantium quod ad similique tempora ab facere eveniet odit amet consequuntur eum a nulla, repudiandae aut tempore, sunt culpa voluptates aliquid.</p>
                <Link className={styles.link} href="/blog/post">Read More</Link>
            </div>
        </div>
    )
}
export default PostCard;