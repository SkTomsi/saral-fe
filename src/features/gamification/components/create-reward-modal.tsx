import clsx from "clsx";
import { CalendarIcon } from "lucide-react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
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
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { Switch } from "@/components/ui/switch";
import { BodyLRegular, TagSRegular } from "../../../components/typography";
import { useAppSelector } from "../store/hooks";
import {
	setEventField,
	setEventType,
	setRewardField,
	setRewardType,
	setTimeBoundEndDate,
	toggleTimeBound,
} from "../store/reward-event-slice";
import { EVENT_CONFIG, REWARD_CONFIG, type RewardType } from "../types";
import { DynamicSelect } from "./dynamic-select";

export default function CreateRewardModal() {
	const dispatch = useDispatch();
	const eventType = useAppSelector((state) => state.rewards.eventType);
	const eventFields = useAppSelector((state) => state.rewards.eventFields);
	const rewardType = useAppSelector((state) => state.rewards.rewardType);
	const rewardFields = useAppSelector((state) => state.rewards.rewardFields);
	const storeData = useAppSelector((state) => state.rewards);
	const isTimeBound = useAppSelector((state) => state.rewards.isTimeBound);
	const timeBoundEndDate = useAppSelector(
		(state) => state.rewards.timeBoundEndDate,
	);

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
								fields={eventFields}
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
								fields={rewardFields}
								onSelect={(val) => dispatch(setRewardType(val))}
								onFieldChange={(key, value) =>
									dispatch(setRewardField({ variable: key, value }))
								}
								placeholder="Select a reward"
								onSave={() => setActiveSelect(null)}
								disabledValues={
									eventType === "ONBOARDED"
										? (["TIER_UPGRADE"] as RewardType[])
										: []
								}
							/>
						</Field>
						<div className="flex w-full flex-col justify-between">
							<div className="flex w-full justify-between py-1">
								<Label className="font-medium text-brand-text">
									Make the reward time bound
								</Label>
								<Switch
									checked={isTimeBound}
									onCheckedChange={() => dispatch(toggleTimeBound())}
								/>
							</div>
							<TagSRegular>
								Choose an end date to stop this reward automatically.
							</TagSRegular>
							{isTimeBound && (
								<div className="mt-2">
									<Popover>
										<PopoverTrigger asChild>
											<Button
												variant="outline"
												className={clsx(
													"w-full justify-start text-base font-normal text-brand-disabled",
													timeBoundEndDate && "text-brand-text",
												)}
											>
												<CalendarIcon className="size-6" />
												{timeBoundEndDate
													? timeBoundEndDate.toLocaleString("en-us", {
															day: "numeric",
															month: "short",
															year: "numeric",
														})
													: "Select end date"}
											</Button>
										</PopoverTrigger>
										<PopoverContent className="w-auto p-0" align="start">
											<Calendar
												mode="single"
												selected={timeBoundEndDate}
												onSelect={(date) => dispatch(setTimeBoundEndDate(date))}
												disabled={(date) => date <= new Date()}
												initialFocus
											/>
										</PopoverContent>
									</Popover>
								</div>
							)}
						</div>
					</FieldGroup>
					<DialogFooter className="" showCloseButton>
						<Button
							type="submit"
							className="flex-1"
							onClick={() =>
								toast(() => (
									<div>
										<pre className="text-wrap">
											data: {JSON.stringify(storeData, null, 2)}
										</pre>
									</div>
								))
							}
							disabled={
								!storeData.eventType ||
								!storeData.rewardType ||
								(isTimeBound && !timeBoundEndDate)
							}
						>
							Create Reward
						</Button>
					</DialogFooter>
				</DialogContent>
			</form>
		</Dialog>
	);
}
