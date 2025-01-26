import Image from "next/image";

export default function Quixote() {
	return (
		<div className="relative min-h-screen before:absolute before:inset-0 before:bg-white/90 before:z-0">
			<Image
				src="/daumier_quixote2.jpg"
				alt="Don Quixote background"
				fill
				className="object-cover -z-10"
				quality={100}
				priority
			/>
			<div className="relative z-10 px-8 py-6">
				<h1 className="text-2xl text-center pb-4 font-medium">
					<div className="italic">Parable of Cervantes</div>
					<div>
						{" "}
						<span className="italic">and the</span> Quixote
					</div>
				</h1>
				<div className="space-y-4 border-b border-gray-500 pb-4">
					<div>
						Tired of his Spanish land, an old soldier of the king
						sought solace in the vast geographies of Ariosto, in
						that valley of the moon where the time wasted by dreams
						is contained and in the golden idol of Mohammed stolen
						by Montalbán.
					</div>
					<div>
						In gentle mockery of himself, he imagined a credulous
						man who, perturbed by his reading of marvels, decided to
						seek prowess and enchantment in prosaic places called El
						Toboso or Montiel.
					</div>
					<div>
						Vanquished by reality, by Spain, Don Quixote died in his
						native village in the year 1614. He was survived but a
						short time by Miguel de Cervantes. For both of them, for
						the dreamer and the dreamed one, the whole scheme of the
						work consisted in the opposition of two worlds: the
						unreal world of the books of chivalry, the ordinary
						everyday world of the seventeenth century.
					</div>
					<div>
						They did not suspect that the years would finally smooth
						away that discord, they did not suspect that La Mancha
						and Montiel and the knight's lean figure would be, for
						posterity, no less poetic than the episodes of Sinbad or
						the vast geographies of Ariosto.
					</div>
					<div>
						For in the beginning of literature is myth, and in the
						end as well.
					</div>
					<div>Translated by J.E.I.</div>
				</div>
			</div>
		</div>
	);
}
