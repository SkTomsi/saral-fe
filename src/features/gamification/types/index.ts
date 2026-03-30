type EventType = "SALES" | "POSTS" | "ONBOARDED";
type RewardType = "BONUS" | "TIER_UPGRADE";

type DynamicField = {
	type: "input" | "select" | "modal";
	name: string;
	placeholder?: string;
	variable?: string;
	icon?: string;
	required?: boolean;
	tooltipMessage?: string;
};

type DynamicConfig<T> = {
	label: string;
	value: T;
	fields?: DynamicField[];
};

export type { DynamicConfig, DynamicField, EventType, RewardType };
