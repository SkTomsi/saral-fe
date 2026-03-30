import type { DynamicConfig } from "./types";

export function formatLabel<T>(
	config: DynamicConfig<T> | undefined,
	values: Record<string, string>,
) {
	if (!config) return "";

	let label = config.label;

	if (config.value === "TIER_UPGRADE") {
		return `Upgrade to ${values.tier}`;
	}

	config.fields?.forEach((field) => {
		if (!field.variable) return;

		const value = values[field.name] || values[field.variable];

		if (value) {
			label = label.replace(field.variable, value);
		}
	});

	return label;
}
