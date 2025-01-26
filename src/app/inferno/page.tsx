import Image from "next/image";

export default function Inferno() {
	return (
		<div className="relative min-h-screen before:absolute before:inset-0 before:bg-white/90 before:z-0">
			<Image
				src="/dore_leopard.png"
				alt="Inferno background"
				fill
				className="object-cover -z-10"
				quality={100}
				priority
			/>

			<div className="relative z-10 px-8 py-6">
				<h1 className="text-2xl text-center pb-4 italic font-medium">
					Inferno, 1, 32
				</h1>
				<div className="space-y-4 border-b border-gray-500 pb-4">
					<div>
						From the twilight of day till the twilight of evening, a
						leopard, in the last years of the thirteenth century,
						would see some wooden planks, some vertical iron bars,
						men and women who changed, a wall and perhaps a stone
						gutter filled with dry leaves. He did not know, could
						not know, that he longed for love and cruelty and the
						hot pleasure of tearing things to pieces and the wind
						carrying the scent of a deer, but something suffocated
						and rebelled within him and God spoke to him in a dream:
						"You live and will die in this prison so that a man I
						know of may see you a certain number of times and not
						forget you and place your figure and symbol in a poem
						which has its precise place in the scheme of the
						universe. You suffer captivity, but you will have given
						a word to the poem." God, in the dream, illumined the
						animal's brutishness and the animal understood these
						reasons and accepted his destiny, but, when he awoke,
						there was in him only an obscure resignation, a valorous
						ignorance, for the machinery of the world is much too
						complex for the simplicity of a beast.
					</div>
					<div>
						Years later, Dante was dying in Ravenna, as unjustified
						and as lonely as any other man. In a dream, God declared
						to him the secret purpose of his life and work; Dante,
						in wonderment, knew at last who and what he was and
						blessed the bitterness of his life. Tradition relates
						that, upon waking, he felt that he had received and lost
						an infinite thing, something he would not be able to
						recuperate or even glimpse, for the machinery of the
						world is much too complex for the simplicity of men.{" "}
					</div>
					<div>Translated by J. E. I.</div>
				</div>
			</div>
		</div>
	);
}
