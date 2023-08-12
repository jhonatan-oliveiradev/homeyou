import { About } from "@/components/About";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import "./globals.css";
import { Gallery } from "@/components/Gallery";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
	return (
		<div>
			<Header />
			<main>
				<Hero />
				<About />
				<Gallery />
				<Contact />
				<Footer />
			</main>
		</div>
	);
}
