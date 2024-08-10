import styles from "./contact.module.css";
import Image from "next/image";

const ContactPage = () => {
	return (
		<div className={styles.container}>
			<div className={styles.imgComtainer}>
				<Image
					className={styles.img}
					src="/contact.png"
					alt="contact image err"
					fill
				/>
			</div>

			<div className={styles.formContainer}>
				<form action="" className={styles.form}>
          <input type="text" placeholder="First name" required/>
          <input type="text" placeholder="Last Name" required/>
          <input type="email" placeholder="Email Address" required />
          <input type="number" placeholder="Phone Number" />

          <textarea name="" id="" cols={30}
          rows={10}></textarea>
           
          <button>Send</button>
        </form>
			</div>
		</div>
	);
};
export default ContactPage;
