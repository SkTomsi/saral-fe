// import clsx from "clsx";
// import { Check, ChevronDown } from "lucide-react";
// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import {
// 	Popover,
// 	PopoverContent,
// 	PopoverTrigger,
// } from "@/components/ui/popover";
// import { setEventField, setEventType } from "../store/event-slice";
// import { useAppSelector } from "../store/hooks";

// export default function EventSelect() {
// 	const [open, setIsOpen] = useState(false);
// 	const dispatch = useDispatch();
// 	const eventType = useAppSelector((state) => state.rewards.eventType);
// 	const eventFields = useAppSelector((state) => state.rewards.eventFields);
// 	const selectedEvent = REWARD_EVENT_CONFIG.find((e) => e.value === eventType);

// 	function formatLabel() {
// 		if (!selectedEvent) return "";

// 		let label = selectedEvent.label;

// 		selectedEvent.fields?.forEach((field) => {
// 			const value = eventFields[field.variable];

// 			label = label.replace(field.variable, value ? value : field.variable);
// 		});

// 		return label;
// 	}

// 	return (
// 		<Popover open={open} onOpenChange={setIsOpen}>
// 			<PopoverTrigger asChild className="w-full">
// 				<Button
// 					variant={"select"}
// 					className={clsx(eventType && "text-brand-text text-base font-normal")}
// 				>
// 					{eventType ? formatLabel() : "Select an event"}
// 					<ChevronDown className="text-muted" />
// 				</Button>
// 			</PopoverTrigger>
// 			<PopoverContent className="w-(--radix-popover-trigger-width) gap-0 p-1">
// 				{REWARD_EVENT_CONFIG.map((event) => {
// 					return (
// 						<div className="flex flex-col gap-1" key={event.value}>
// 							<div
// 								role="none"
// 								onClick={() => {
// 									dispatch(setEventType(event.value));
// 								}}
// 								className={clsx(
// 									"hover:bg-magenta-2 flex items-center justify-between p-2 cursor-pointer rounded-lg select-none",
// 									event.value === eventType && "bg-magenta-2 text-magenta-12",
// 								)}
// 							>
// 								{event.label}
// 								{event.value === eventType && (
// 									<Check className="text-magenta-12 size-4" />
// 								)}
// 							</div>
// 							{/* RENDER THE ADDITIONAL EVENT FIELDS OF THE SELECTED EVENT */}
// 							<div className="flex w-full items-center gap-2">
// 								{event.value === eventType &&
// 									event.fields?.map((field) => {
// 										return (
// 											<Input
// 												placeholder={field.placeholder}
// 												key={field.name}
// 												onChange={(e) => {
// 													dispatch(
// 														setEventField({
// 															variable: field.variable,
// 															value: e.target.value,
// 														}),
// 													);
// 												}}
// 											/>
// 										);
// 									})}
// 							</div>
// 						</div>
// 					);
// 				})}
// 				<div className="w-full flex gap-2 mt-2">
// 					<Button
// 						className="flex-1"
// 						variant={"outline"}
// 						onClick={() => setIsOpen(false)}
// 					>
// 						Cancel
// 					</Button>
// 					<Button className="flex-1" onClick={() => setIsOpen(false)}>
// 						Save
// 					</Button>
// 				</div>
// 			</PopoverContent>
// 		</Popover>
// 	);
// }
