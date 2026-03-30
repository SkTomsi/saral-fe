import { BodyLRegular, HeaderPrimarySemibold } from "@/components/typography";
import CreateRewardModal from "@/features/gamification/components/create-reward-modal";
import bgImg from "../assets/bg.png";

export default function GamificationPage() {
	return (
		<div className="flex flex-col w-full h-full justify-start ">
			<div className="max-w-4xl mx-auto w-full relative h-fit z-0 mt-8 ">
				<img
					src={bgImg}
					alt="bg"
					className="absolute top-0 left-0 w-full h-fit object-contain -z-1"
				/>
				<div className="flex flex-col space-y-6 mt-10 w-full max-w-[354px] text-center mx-auto ">
					<div className="space-y-2">
						<HeaderPrimarySemibold>Gamify your Campaign</HeaderPrimarySemibold>
						<BodyLRegular>
							Enable gamification to start crafting <br /> your custom reward
							system.
						</BodyLRegular>
					</div>
					<div className="w-full px-6">
						<CreateRewardModal />
					</div>
				</div>
			</div>
		</div>
	);
}
