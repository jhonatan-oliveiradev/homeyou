import Image from "next/image";
import { Container } from "../ui/Container";
import IconLogo from "../../../public/favicon.svg";
import Link from "next/link";

export function Footer() {
	return (
		<div className="h-[321px] bg-zinc-100">
			<Container>
				<div className="grid grid-cols-2 md:flex items-start justify-center gap-16 h-full pt-[400px] md:pt-24">
					<div className="hidden md:block md:bg-zinc-900">
						<Link href="#hero">
							<Image src={IconLogo} alt="logo" width={40} height={40} />
						</Link>
					</div>
					<div>
						<h3 className="text-md font-bold text-zinc-900 mb-5">Produtos</h3>
						<ul className="">
							<li className="md:mb-4">
								<Link href="#">Mobilia</Link>
							</li>
							<li className="md:mb-4">
								<Link href="#">Segurança</Link>
							</li>
							<li className="md:mb-4">
								<Link href="#">Design Interior</Link>
							</li>
						</ul>
					</div>

					<div>
						<h3 className="text-md font-bold text-zinc-900 mb-5">
							Mais Informações
						</h3>
						<ul>
							<li className="md:mb-4">
								<Link href="#">Contrato</Link>
							</li>
							<li className="md:mb-4">
								<Link href="#">Sobre nós</Link>
							</li>
							<li className="md:mb-4">
								<Link href="#">Termos e Condições</Link>
							</li>
						</ul>
					</div>

					<div>
						<h3 className="text-md font-bold text-zinc-900 mb-5">
							Redes Sociais
						</h3>
						<ul className="mb-4">
							<li className="md:mb-4">
								<Link href="#">Pinterest</Link>
							</li>
							<li className="md:mb-4">
								<Link href="#">Facebook</Link>
							</li>
							<li className="md:mb-4">
								<Link href="#">Instagram</Link>
							</li>
						</ul>
					</div>
				</div>
				<div className="hidden md:flex items-start justify-center">
					<p>
						© {new Date().getFullYear()}{" "}
						<span className="font-bold">HomeYou</span> - Todos os direitos
						reservados.
					</p>
				</div>
			</Container>
		</div>
	);
}
