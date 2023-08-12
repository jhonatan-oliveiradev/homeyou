import { Container } from "../ui/Container";
import AboutImage from "../../../public/img-design.png";
import Image from "next/image";
import Link from "next/link";

export function About() {
	return (
		<Container>
			<section className="h-[300px] md:h-[718px] flex flex-col md:flex-row items-center justify-between w-full">
				<div className="hidden md:flex items-center justify-center">
					<div className="bg-zinc-900 w-[487px] h-[457px] relative"></div>
					<Image
						className="absolute mt-14 ml-14 shadow-sm"
						src={AboutImage}
						alt="About image"
						width={487}
						height={457}
					/>
				</div>
				<div>
					<div className="flex flex-col justify-center items-center h-full w-full">
						<div className="mt-12 md:mt-0 bg-zinc-900 w-[312px] h-[177px] md:w-[585px] md:h-[182px]">
							<h2 className="text-2xl font-semibold leading-tight text-left text-white my-5 mx-8">
								Design Minimalista
							</h2>
							<p className="text-sm md:text-lg text-left text-zinc-400 mb-5 mx-8">
								Móveis apenas essenciais e com design moderno, além de
								revestimentos bonitos e em cores neutras para manter a casa
								sempre com um estilo clean e suave.
							</p>
						</div>
						<Link
							className="text-sm font-semibold justify-center md:justify-start md:text-lg underline w-full flex mt-6"
							href="#"
						>
							Quero saber mais sobre os designs
						</Link>
					</div>
				</div>
			</section>
		</Container>
	);
}
