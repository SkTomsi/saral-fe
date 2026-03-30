import type { DynamicConfig, EventType, RewardType } from "../types";

export const EVENT_CONFIG: DynamicConfig<EventType>[] = [
	{
		label: "Cross $X in sales",
		value: "SALES",
		fields: [
			{
				type: "input",
				name: "amount",
				placeholder: "e.g. 100",
				variable: "X",
				icon: "$",
				required: true,
				tooltipMessage: "Enter the sales target amount to continue",
			},
		],
	},
	{
		label: "Posts X times every Y period",
		value: "POSTS",
		fields: [
			{
				type: "input",
				name: "count",
				placeholder: "e.g. 4",
				variable: "X",
				required: true,
				tooltipMessage: "Enter the number of posts to continue",
			},
			{
				type: "select",
				name: "duration",
				placeholder: "Select duration",
				variable: "Y period",
				required: true,
				tooltipMessage: "Select the duration to continue",
			},
		],
	},
	{
		label: "Is Onboarded",
		value: "ONBOARDED",
	},
];

export const REWARD_CONFIG: DynamicConfig<RewardType>[] = [
	{
		label: "Flat $X bonus",
		value: "BONUS",
		fields: [
			{
				type: "input",
				name: "amount",
				placeholder: "e.g. 100",
				variable: "X",
				icon: "$",
				required: true,
				tooltipMessage: "Enter the bonus amount to continue",
			},
		],
	},
	{
		label: "Upgrade Commission Tier",
		value: "TIER_UPGRADE",
		fields: [
			{
				type: "modal",
				name: "tier",
				variable: "tier name",
				required: true,
				tooltipMessage: "Select the tier to continue",
			},
		],
	},
];
