import type { DynamicConfig } from "./types";

export function formatLabel<T>(
	config: DynamicConfig<T> | undefined,
	values: Record<string, string>,
) {
	if (!config) return "";

	let label = config.label;

	config.fields?.forEach((field) => {
		if (!field.variable) return;

		const value = values[field.variable];

		label = label.replace(field.variable, value || field.variable);
	});

	return label;
}
