import Image from "next/image";
import { Container } from "../ui/Container";
import GalleryImage1 from "../../../public/img-gallery-1.png";
import GalleryImage2 from "../../../public/img-gallery-2.png";
import GalleryImage3 from "../../../public/img-gallery-3.png";

const images = [
	{
		src: GalleryImage1,
		alt: "Imagem 1"
	},
	{
		src: GalleryImage2,
		alt: "Imagem 2"
	},
	{
		src: GalleryImage3,
		alt: "Imagem 3"
	}
];

export function Gallery() {
	return (
		<div className=" bg-zinc-100 w-full">
			<Container>
				<section className="h-[1335px] md:h-[850px] flex flex-col items-center justify-center w-full mx-auto">
					<div className="flex flex-col items-center justify-center mb-8">
						<h1 className="text-2xl mt-56 md:-mt-0 md:text-3xl font-semibold text-zinc-900 mb-5">
							Galeria
						</h1>
						<p className="max-w-[768px] text-sm md:text-lg text-center text-zinc-400 leading-relaxed">
							Se você está entediado com a aparência da decoração de interiores
							de casa comuns, trabalhamos com designs diferentes e inovadores.
						</p>
					</div>
					<div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
						{images.map((image) => (
							<Image
								key={image.alt}
								src={image.src}
								alt={image.alt}
								width={396}
								height={550}
							/>
						))}
					</div>
				</section>
			</Container>
		</div>
	);
}
