import { useDispatch } from "react-redux";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { Field, FieldGroup } from "@/components/ui/field";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { useAppSelector } from "../store/hooks";
import { setRewardField } from "../store/reward-event-slice";

type TierUpgradeModalProps = {
	open: boolean;
	onOpenChange: (open: boolean) => void;
};

export function TierUpgradeModal({
	open,
	onOpenChange,
}: TierUpgradeModalProps) {
	const dispatch = useDispatch();
	const rewardFields = useAppSelector(
		(state) => state.rewards.reward.fields.TIER_UPGRADE,
	);
	const selectedTier = rewardFields?.tier;

	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent className="sm:max-w-sm">
				<DialogHeader>
					<DialogTitle>Upgrade Commission Tier</DialogTitle>
				</DialogHeader>
				<FieldGroup>
					<Field>
						<Label>Select Tier</Label>
						<Select
							value={selectedTier}
							onValueChange={(value) =>
								dispatch(setRewardField({ variable: "tier", value }))
							}
						>
							<SelectTrigger>
								<SelectValue placeholder="Select a tier" />
							</SelectTrigger>
							<SelectContent>
								<SelectGroup>
									<SelectItem value="tier-1">Tier 1</SelectItem>
									<SelectItem value="tier-2">Tier 2</SelectItem>
									<SelectItem value="tier-3">Tier 3</SelectItem>
								</SelectGroup>
							</SelectContent>
						</Select>
					</Field>
				</FieldGroup>
				<DialogFooter className="">
					<Button
						type="button"
						variant="outline"
						className="flex-1"
						onClick={() => onOpenChange(false)}
					>
						Go Back
					</Button>
					<Button
						type="button"
						className="flex-1"
						onClick={() => onOpenChange(false)}
						disabled={!selectedTier}
					>
						Save
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
