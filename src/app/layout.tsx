import type { Metadata } from "next";
import "./globals.css";
import { Lora } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Parables by Jorge Luis Borges",
	description: "materials for the book club",
};

const lora = Lora({ subsets: ["latin"] });

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${lora.className} antialiased sm:w-3/5 mx-auto`}>
				<header className="relative border-b-2 items-center border-gray-950 flex text-3xl font-medium text-center h-24 text-gray-950 before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/90 before:to-transparent before:z-0">
					<Image
						src="/header.jpg"
						alt="Header background"
						fill
						className="object-cover -z-10"
						quality={100}
						priority
					/>
					<Link className="block w-1/2 z-10 border-r border-gray-800" href="/quixote">
						<span className="shadow-2xl">Quixote</span>
					</Link>

					<Link className="block w-1/2 z-10 border-l border-gray-800" href="/inferno">
						<span className="shadow-2xl">Inferno</span>
					</Link>
				</header>
				<main>{children}</main>
			</body>
		</html>
	);
}
