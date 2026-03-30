import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { EventType, RewardType } from "../types";

type EventFieldsMap = {
	[K in EventType]?: Record<string, string>;
};

type RewardFieldsMap = {
	[K in RewardType]?: Record<string, string>;
};

export type RewardState = {
	event: {
		selectedType?: EventType;
		fields: EventFieldsMap;
	};
	reward: {
		selectedType?: RewardType;
		fields: RewardFieldsMap;
	};
	isTimeBound: boolean;
	timeBoundEndDate?: Date;
};

const initialState: RewardState = {
	event: {
		selectedType: undefined,
		fields: {},
	},
	reward: {
		selectedType: undefined,
		fields: {},
	},
	isTimeBound: false,
};

const rewardSlice = createSlice({
	name: "reward",
	initialState,
	reducers: {
		// EVENT
		setEventType(state, action: PayloadAction<EventType>) {
			if (state.event.selectedType !== action.payload) {
				state.event.selectedType = action.payload;
				state.event.fields = {};
			}
		},

		setEventField(
			state,
			action: PayloadAction<{ variable: string; value: string }>,
		) {
			const selectedType = state.event.selectedType;
			if (selectedType) {
				if (!state.event.fields[selectedType]) {
					state.event.fields[selectedType] = {};
				}
				state.event.fields[selectedType][action.payload.variable] =
					action.payload.value;
			}
		},

		// REWARD
		setRewardType(state, action: PayloadAction<RewardType>) {
			if (state.reward.selectedType !== action.payload) {
				state.reward.selectedType = action.payload;
				state.reward.fields = {};
			}
		},

		setRewardField(
			state,
			action: PayloadAction<{ variable: string; value: string }>,
		) {
			const selectedType = state.reward.selectedType;
			if (selectedType) {
				if (!state.reward.fields[selectedType]) {
					state.reward.fields[selectedType] = {};
				}
				state.reward.fields[selectedType][action.payload.variable] =
					action.payload.value;
			}
		},

		// COMMON
		toggleTimeBound(state) {
			state.isTimeBound = !state.isTimeBound;
			if (!state.isTimeBound) {
				state.timeBoundEndDate = undefined;
			}
		},

		setTimeBoundEndDate(state, action: PayloadAction<Date | undefined>) {
			state.timeBoundEndDate = action.payload;
		},
	},
});

export const {
	setEventType,
	setEventField,
	toggleTimeBound,
	setRewardField,
	setRewardType,
	setTimeBoundEndDate,
} = rewardSlice.actions;

export default rewardSlice.reducer;
