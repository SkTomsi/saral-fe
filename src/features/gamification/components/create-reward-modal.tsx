import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Field, FieldGroup } from "@/components/ui/field";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { BodyLRegular, TagSRegular } from "../../../components/typography";
import { useAppSelector } from "../store/hooks";
import {
	setEventField,
	setEventType,
	setRewardField,
	setRewardType,
	toggleTimeBound,
} from "../store/reward-event-slice";
import { EVENT_CONFIG, REWARD_CONFIG } from "../types";
import { DynamicSelect } from "./dynamic-select";

export default function CreateRewardModal() {
	const dispatch = useDispatch();
	const eventType = useAppSelector((state) => state.rewards.eventType);
	const eventFields = useAppSelector((state) => state.rewards.eventFields);
	const rewardType = useAppSelector((state) => state.rewards.rewardType);
	const rewardFields = useAppSelector((state) => state.rewards.rewardFields);
	const storeData = useAppSelector((state) => state.rewards);

	const [activeSelect, setActiveSelect] = useState<"event" | "reward" | null>(
		null,
	);

	console.log(storeData);

	return (
		<Dialog>
			<form>
				<DialogTrigger asChild>
					<Button className="w-full">
						<BodyLRegular className="text-white">
							Enable Gamification
						</BodyLRegular>
					</Button>
				</DialogTrigger>
				<DialogContent className="sm:max-w-sm">
					<DialogHeader>
						<DialogTitle>Create your reward system</DialogTitle>
					</DialogHeader>
					<FieldGroup>
						<Field>
							<Label>
								Reward event
								<span className="text-brand-red-12"> *</span>
							</Label>
							<DynamicSelect
								open={activeSelect === "event"}
								onOpenChange={(open) => setActiveSelect(open ? "event" : null)}
								config={EVENT_CONFIG}
								value={eventType}
								values={eventFields}
								onSelect={(val) => {
									dispatch(setEventType(val));
								}}
								onFieldChange={(key, value) =>
									dispatch(setEventField({ variable: key, value }))
								}
								placeholder="Select an event"
								onSave={() => {
									setActiveSelect("reward");
								}}
							/>
						</Field>
						<Field>
							<Label>
								Reward with<span className="text-brand-red-12"> *</span>
							</Label>
							<DynamicSelect
								open={activeSelect === "reward"}
								onOpenChange={(open) => setActiveSelect(open ? "reward" : null)}
								config={REWARD_CONFIG}
								value={rewardType}
								values={rewardFields}
								onSelect={(val) => dispatch(setRewardType(val))}
								onFieldChange={(key, value) =>
									dispatch(setRewardField({ variable: key, value }))
								}
								placeholder="Select a reward"
								onSave={() => setActiveSelect(null)}
							/>
						</Field>
						<div className="flex flex-col w-full  justify-between">
							<div className="w-full flex justify-between py-1">
								<Label className="font-medium text-brand-text">
									Make the reward time bound
								</Label>
								<Switch onCheckedChange={() => dispatch(toggleTimeBound())} />
							</div>
							<TagSRegular>
								Choose an end date to stop this reward automatically.
							</TagSRegular>
						</div>
					</FieldGroup>
					<DialogFooter className="" showCloseButton>
						<Button
							type="submit"
							className="flex-1"
							onClick={() =>
								toast(() => (
									<div>
										<pre>data: {JSON.stringify(storeData, null, 2)}</pre>
									</div>
								))
							}
							disabled={!storeData.eventType || !storeData.rewardType}
						>
							Save changes
						</Button>
					</DialogFooter>
				</DialogContent>
			</form>
		</Dialog>
	);
}
