import clsx from "clsx";
import { CalendarIcon, CheckIcon } from "lucide-react";
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
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { BodyLRegular, TagSRegular } from "../../../components/typography";
import { EVENT_CONFIG, REWARD_CONFIG } from "../config";
import { useAppSelector } from "../store/hooks";
import {
	setEventField,
	setEventType,
	setRewardField,
	setRewardType,
	setTimeBoundEndDate,
	toggleTimeBound,
} from "../store/reward-event-slice";
import type { RewardType } from "../types";
import { DynamicSelect } from "./dynamic-select";
import { TierUpgradeModal } from "./tier-upgrade-modal";

export default function CreateRewardModal() {
	const dispatch = useDispatch();
	const eventType = useAppSelector((state) => state.rewards.event.selectedType);
	const eventFields = useAppSelector((state) => {
		const selectedType = state.rewards.event.selectedType;
		return selectedType ? state.rewards.event.fields[selectedType] || {} : {};
	});
	const rewardType = useAppSelector(
		(state) => state.rewards.reward.selectedType,
	);
	const rewardFields = useAppSelector((state) => {
		const selectedType = state.rewards.reward.selectedType;
		return selectedType ? state.rewards.reward.fields[selectedType] || {} : {};
	});
	const storeData = useAppSelector((state) => state.rewards);
	const isTimeBound = useAppSelector((state) => state.rewards.isTimeBound);
	const timeBoundEndDate = useAppSelector(
		(state) => state.rewards.timeBoundEndDate,
	);

	const [activeSelect, setActiveSelect] = useState<"event" | "reward" | null>(
		null,
	);
	const [tierModalOpen, setTierModalOpen] = useState(false);
	const [dialogOpen, setDialogOpen] = useState(false);

	return (
		<>
			<TierUpgradeModal open={tierModalOpen} onOpenChange={setTierModalOpen} />
			<Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
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
									onOpenChange={(open) =>
										setActiveSelect(open ? "event" : null)
									}
									config={EVENT_CONFIG}
									value={eventType}
									fields={eventFields}
									onSelect={(val) => {
										dispatch(setEventType(val));
										if (val === "ONBOARDED" && rewardType === "TIER_UPGRADE") {
											dispatch(
												setRewardType(undefined as unknown as RewardType),
											);
										}
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
									onOpenChange={(open) =>
										setActiveSelect(open ? "reward" : null)
									}
									config={REWARD_CONFIG}
									value={rewardType}
									fields={rewardFields}
									onSelect={(val) => {
										dispatch(setRewardType(val));
										if (val === "TIER_UPGRADE") {
											setTierModalOpen(true);
										}
									}}
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
													defaultMonth={new Date()}
													onSelect={(date) =>
														dispatch(setTimeBoundEndDate(date))
													}
													disabled={(date) => date <= new Date()}
												/>
											</PopoverContent>
										</Popover>
									</div>
								)}
							</div>
						</FieldGroup>
						<DialogFooter className="" showCloseButton>
							<TooltipProvider>
								<Tooltip>
									<TooltipTrigger asChild>
										<div className="flex-1">
											<Button
												type="button"
												className="w-full"
												onClick={() => {
													toast(() => (
														<div className="w-full space-y-5">
															<p className="mx-auto flex w-fit items-center gap-2 rounded-xl bg-brand-text px-3 py-2 text-[#FCFDFF]">
																<div className="size-fit rounded-full bg-[#2ED389] p-1">
																	<CheckIcon
																		className="size-4 text-brand-text"
																		strokeWidth={4}
																	/>
																</div>
																Reward Created!
															</p>
															<pre className="rounded-md bg-brand-border p-4 text-wrap">
																data: {JSON.stringify(storeData, null, 2)}
															</pre>
														</div>
													));
													setDialogOpen(false);
												}}
												disabled={
													!storeData.event.selectedType ||
													!storeData.reward.selectedType ||
													(isTimeBound && !timeBoundEndDate)
												}
											>
												Create Reward
											</Button>
										</div>
									</TooltipTrigger>
									{!storeData.event.selectedType ||
									!storeData.reward.selectedType ? (
										<TooltipContent side="bottom">
											Choose a reward trigger and a reward to continue
										</TooltipContent>
									) : isTimeBound && !timeBoundEndDate ? (
										<TooltipContent>
											Choose reward end date to continue
										</TooltipContent>
									) : null}
								</Tooltip>
							</TooltipProvider>
						</DialogFooter>
					</DialogContent>
				</form>
			</Dialog>
		</>
	);
}
