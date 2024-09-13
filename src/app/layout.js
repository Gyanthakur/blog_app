import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
// 	title: "Next Blog App Title",
// 	description: "Next.js Blog app description",
// };
export const metadata = {

	// in place of next blog app we are create my own template 
	title: {
		default:"Next.js 14 HomePage",
		template:"%s | Next.js 14",
	},
	description: "Next.js Blog app description",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<div className="container">
					<Navbar />
					{children}
					<Footer />
				</div>
			</body>
		</html>
	);
}
