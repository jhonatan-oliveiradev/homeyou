"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Logo from "../../../public/logo.svg";
import { Heart, Search, User2 } from "lucide-react";

const routes = [
	{
		label: "User",
		icon: User2,
		href: "/account",
		color: "text-zinc-900"
	},
	{
		label: "Favorites",
		icon: Heart,
		href: "/favorites",
		color: "text-zinc-900"
	},
	{
		label: "Search",
		icon: Search,
		href: "/search",
		color: "text-zinc-900"
	}
];

export function Header() {
	const [isNavOpen, setIsNavOpen] = useState(false);

	return (
		<header className="w-full h-24 mx-auto max-w-7xl flex items-center justify-between px-4">
			<Link href="/">
				<Image src={Logo} alt="logo" width={189} height={40} />
			</Link>
			<section className="flex lg:hidden">
				<div
					className="space-y-2"
					onClick={() => setIsNavOpen((prev) => !prev)}
				>
					<span className="block h-0.5 w-8 animate-pulse bg-zinc-900"></span>
					<span className="block h-0.5 w-8 animate-pulse bg-zinc-900"></span>
					<span className="block h-0.5 w-4 animate-pulse bg-zinc-900"></span>
				</div>

				<div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
					<div
						className="absolute top-0 right-0 px-8 py-8"
						onClick={() => setIsNavOpen(false)}
					>
						<svg
							className="h-8 w-8 text-zinc-900"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<line x1="18" y1="6" x2="6" y2="18" />
							<line x1="6" y1="6" x2="18" y2="18" />
						</svg>
					</div>
					<ul className="flex flex-col items-center justify-between min-h-[250px]">
						<li className="mb-8 transition-all hover:underline">
							<Link href="#">Início</Link>
						</li>
						<li className="mb-8 transition-all hover:underline">
							<Link href="#">Galeria</Link>
						</li>
						<li className="transition-all hover:underline">
							<Link href="#">Contato</Link>
						</li>
					</ul>
					<nav>
						<ul className="flex items-center gap-8">
							{routes.map((route) => (
								<li key={route.href}>
									<Link href={route.href}>
										<route.icon size={18} />
									</Link>
								</li>
							))}
						</ul>
					</nav>
				</div>
			</section>
			<div className="hidden lg:flex items-center justify-between">
				<nav>
					<ul className="flex items-center">
						<li className="mr-8">
							<Link href="#">Início</Link>
						</li>
						<li className="mr-8">
							<Link href="#">Galeria</Link>
						</li>
						<li className="mr-8">
							<Link href="#">Contato</Link>
						</li>
					</ul>
				</nav>
				<nav>
					<ul className="flex items-center gap-8">
						{routes.map((route) => (
							<li key={route.href}>
								<Link href={route.href}>
									<route.icon size={18} />
								</Link>
							</li>
						))}
					</ul>
				</nav>
				<style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
			</div>
		</header>
	);
}
