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
import type { DynamicConfig } from "../types";
import { formatLabel } from "../utils";

type DynamicSelectProps<T> = {
	config: DynamicConfig<T>[];
	value?: T;
	fields: Record<string, string>;
	onSelect: (val: T) => void;
	onFieldChange: (key: string, value: string) => void;
	placeholder?: string;
	open: boolean;
	onOpenChange: (open: boolean) => void;
	onSave: () => void;
	disabledValues?: T[];
};

export function DynamicSelect<T>({
	config,
	value,
	fields: values,
	onSelect,
	onFieldChange,
	placeholder = "Select",
	open,
	onOpenChange,
	onSave,
	disabledValues = [],
}: DynamicSelectProps<T>) {
	const selected = config.find((c) => c.value === value);

	return (
		<Popover open={open} onOpenChange={onOpenChange}>
			<PopoverTrigger asChild className="w-full">
				<Button
					variant="select"
					className="text-base font-normal text-brand-text"
				>
					{value ? formatLabel(selected, values) : placeholder}
					<ChevronDown />
				</Button>
			</PopoverTrigger>

			<PopoverContent className="w-(--radix-popover-trigger-width) p-1 shadow-2xl">
				{config.map((item) => {
					const itemDisabled = disabledValues.includes(item.value as T);
					return (
						<div
							key={String(item.value)}
							className="flex w-full flex-col gap-0"
						>
							<div
								role="none"
								onClick={() => !itemDisabled && onSelect(item.value)}
								className={clsx(
									"flex cursor-pointer items-center justify-between rounded-md p-2 hover:bg-brand-border/30",
									value === item.value && "bg-magenta-2 text-magenta-12",
									itemDisabled && "pointer-events-none text-brand-disabled",
								)}
							>
								{item.label}
								{selected?.value === item.value && (
									<Check className="size-4 text-magenta-12" />
								)}
							</div>
							<div className="mt-1 flex w-full items-center gap-2">
								{value === item.value &&
									item.fields?.map((field) => {
										return (
											<>
												{field.type === "input" && (
													<div className="relative w-full">
														<p className="absolute top-1/2 left-4 -translate-y-1/2 text-base text-brand-secondary">
															{field.icon}
														</p>
														<Input
															key={field.name}
															autoFocus={
																value === item.value &&
																!values[field.variable || field.name]
															}
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
																<SelectItem value="2 months">
																	2 Months
																</SelectItem>
																<SelectItem value="3 months">
																	3 Months
																</SelectItem>
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
					);
				})}
				<div className="mt-2 flex w-full gap-2">
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
