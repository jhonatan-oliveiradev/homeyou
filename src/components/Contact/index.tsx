import { Container } from "../ui/Container";

export function Contact() {
	return (
		<Container>
			<section className="flex flex-col items-center justify-center h-[242px] md:h-80 mx-auto">
				<h2 className="text-2xl md:text-3xl font-semibold mb-5 mt-[500px] md:mt-0">
					Orçamento
				</h2>
				<p className="text-sm md:text-lg text-center text-zinc-400 mb-5">
					Interessado em entrar em contato com um de nossos profissionais?
				</p>
				<button className="py-2 md:py-3 w-full md:w-auto px-8 border border-zinc-900 transition-all hover:bg-zinc-900 hover:text-white">
					Entre em contato
				</button>
			</section>
		</Container>
	);
}
