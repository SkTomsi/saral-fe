import clsx from "clsx";
import { Check, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { useAppSelector } from "../store/hooks";
import type { DynamicConfig } from "../types";
import { formatLabel } from "../utils";

type DynamicSelectProps<T> = {
	config: DynamicConfig<T>[];
	value?: T;
	values: Record<string, string>;
	onSelect: (val: T) => void;
	onFieldChange: (key: string, value: string) => void;
	placeholder?: string;
	open: boolean;
	onOpenChange: (open: boolean) => void;
	onSave: () => void;
};

export function DynamicSelect<T>({
	config,
	value,
	values,
	onSelect,
	onFieldChange,
	placeholder = "Select",
	open,
	onOpenChange,
	onSave,
}: DynamicSelectProps<T>) {
	const selected = config.find((c) => c.value === value);
	const eventType = useAppSelector((state) => state.rewards.eventType);

	const isOnboarding = eventType === "ONBOARDED";

	return (
		<Popover open={open} onOpenChange={onOpenChange}>
			<PopoverTrigger asChild className="w-full">
				<Button
					variant="select"
					className="text-brand-text font-normal text-base"
				>
					{value ? formatLabel(selected, values) : placeholder}
					<ChevronDown />
				</Button>
			</PopoverTrigger>

			<PopoverContent className="w-(--radix-popover-trigger-width) p-1 shadow-2xl">
				{config.map((item) => (
					<div key={String(item.value)} className="flex flex-col w-full">
						<p>{JSON.stringify(item.fields)}</p>
						<div
							role="none"
							onClick={() => onSelect(item.value)}
							className={clsx(
								"p-2 rounded-md cursor-pointer hover:bg-magenta-2 flex justify-between items-center",
								value === item.value && "bg-magenta-2 text-magenta-12",
								isOnboarding && "opacity-50",
							)}
						>
							{item.label}
							{selected?.value === item.value && (
								<Check className="text-magenta-12 size-4" />
							)}
						</div>
						<div className="flex w-full items-center gap-2 mt-1">
							{value === item.value &&
								item.fields?.map((field) => {
									return (
										<>
											{field.type === "input" && (
												<div className="w-full relative">
													<p className="absolute -translate-y-1/2 top-1/2 left-4 text-brand-secondary text-base">
														{field.icon}
													</p>
													<Input
														key={field.name}
														className={clsx(field.icon && "pl-8")}
														placeholder={field.placeholder}
														onChange={(e) =>
															onFieldChange(
																field.variable || field.name,
																e.target.value,
															)
														}
													/>
												</div>
											)}
											{field.type === "select" && (
												<Select
													onValueChange={(value) =>
														onFieldChange(field.variable || field.name, value)
													}
												>
													<SelectTrigger className="w-full max-w-48">
														<SelectValue placeholder={field.placeholder} />
													</SelectTrigger>
													<SelectContent>
														<SelectGroup>
															<SelectItem value="14 days">14 Days</SelectItem>
															<SelectItem value="1 month">1 Month</SelectItem>
															<SelectItem value="2 months">2 Months</SelectItem>
															<SelectItem value="3 months">3 Months</SelectItem>
															<SelectItem value="1 year">1 Year</SelectItem>
														</SelectGroup>
													</SelectContent>
												</Select>
											)}
										</>
									);
								})}
						</div>
					</div>
				))}
				<div className="w-full flex gap-2 mt-2">
					<Button
						className="flex-1"
						variant={"outline"}
						onClick={() => onOpenChange?.(false)}
					>
						Cancel
					</Button>
					<Button className="flex-1" onClick={() => onSave?.()}>
						Save
					</Button>
				</div>
			</PopoverContent>
		</Popover>
	);
}
