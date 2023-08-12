import Link from "next/link";
import { Container } from "../ui/Container";
import Image from "next/image";
import HeroImage from "../../../public/img.png";

export function Hero() {
	return (
		<div className=" bg-zinc-100 w-full">
			<Container>
				<section className="h-[335px] md:h-[850px] flex items-center justify-between w-full">
					<div className="flex flex-col justify-center items-center h-full w-[31.125rem]">
						<h1 className="text-2xl md:text-4xl font-semibold text-left text-zinc-900 mb-6">
							Ajudar você a encontrar o melhor conforto, é nossa prioridade.
						</h1>
						<p className="text-sm md:text-lg text-left text-zinc-400 mb-6">
							Encontre uma variedade de propriedades que combinam com você.
							Esqueça todas as dificuldades em encontrar uma residência
						</p>

						<div className="flex justify-between w-full items-center">
							<button className="bg-zinc-900 border border-transparent text-white text-xs md:text-xl px-5 py-1 md:px-6 md:py-2 transition-all hover:border hover:border-zinc-900 hover:text-zinc-900 hover:bg-zinc-100">
								Entre em contato
							</button>
							<Link
								href="#"
								className="underline w-[50%] text-xs md:text-xl font-semibold"
							>
								Mais sobre nós
							</Link>
						</div>
					</div>
					<div className="hidden lg:flex items-center justify-center">
						<Image src={HeroImage} alt="Hero image" width={660} height={850} />
					</div>
				</section>
			</Container>
		</div>
	);
}
