import Image from "next/image";
import styles from "./home.module.css";

const Home = () => {
	return (
		<div className={styles.container}>
			<div className={styles.textContainer}>
				<h1 className={styles.title}>Creative Thoughts Agency.</h1>
				<p className={styles.desc}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
					recusandae velit quos, libero vitae blanditiis sed impedit ex aperiam
					voluptatem mollitia voluptates ab aspernatur, culpa nemo repellat
					quidem, error cupiditate.
				</p>

				<div>
					<button className={styles.button}>Learn More</button>
					<button className={styles.button}>Contact</button>
				</div>

				<div className={styles.brands}>
					<Image className={styles.brandImg} src="/brands.png" alt="brands img" fill />
				</div>
			</div>
			<div className={styles.imgContainer}>
        <Image src="/hero.gif" alt="hero gif error" className={styles.heroImg} fill/>
      </div>
		</div>
	);
};

export default Home;
