import {
	BodyLRegular,
	BodyMRegular,
	HeaderPrimarySemibold,
	HeaderSMedium,
} from "@/components/typography";
import { Card } from "@/components/ui/card";
import CreateRewardModal from "@/features/gamification/components/create-reward-modal";
import bgImg from "../assets/bg.png";
import crownSvg from "../assets/Crown.svg";
import giftSvg from "../assets/Gift.svg";
import ticketSvg from "../assets/Ticket Sale.svg";

export default function GamificationPage() {
	const CARD_CONFIG = [
		{
			title: "Reward Your Ambassadors",
			subText:
				"Boost campaign performance by setting up rewards for ambassadors",
			icon: giftSvg,
		},
		{
			title: "Set Milestones",
			subText:
				"Set up custom goals for sales, posts, or time-based achievements",
			icon: crownSvg,
		},
		{
			title: "Customise Incentives",
			subText:
				"Create custom incentives like flat fees, free products, or special commissions.",
			icon: ticketSvg,
		},
	];

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
				<div className="grid grid-cols-3 max-sm:grid-cols-1 gap-4 mt-12 max-sm:px-5">
					{CARD_CONFIG.map((card) => (
						<Card
							key={card.title}
							className="flex flex-col justify-center items-center px-4 py-5"
						>
							<div className="size-[70px] bg-magenta-7 rounded-2xl p-2">
								<div className="w-full h-full flex justify-center items-center bg-white rounded-xl">
									<img src={card.icon} alt="gift" className="h-8 w-8" />
								</div>
							</div>
							<div className="space-y-2 text-center">
								<HeaderSMedium>{card.title}</HeaderSMedium>
								<BodyMRegular>{card.subText}</BodyMRegular>
							</div>
						</Card>
					))}
				</div>
			</div>
		</div>
	);
}
