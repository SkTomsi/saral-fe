import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { EventType, RewardType } from "../types"

export type RewardState = {
  eventType?: EventType
  eventFields: Record<string, string>
  rewardType?: RewardType
  rewardFields: Record<string, string>
  isTimeBound: boolean
  timeBoundEndDate?: Date
}

const initialState: RewardState = {
  eventFields: {},
  rewardFields: {},
  isTimeBound: false,
}

const rewardSlice = createSlice({
  name: "reward",
  initialState,
  reducers: {
    // EVENT
    setEventType(state, action: PayloadAction<EventType>) {
      state.eventType = action.payload
      state.eventFields = {}
    },

    setEventField(
      state,
      action: PayloadAction<{ variable: string; value: string }>
    ) {
      state.eventFields[action.payload.variable] = action.payload.value
    },

    // REWARD
    setRewardType(state, action: PayloadAction<RewardType>) {
      state.rewardType = action.payload
      state.rewardFields = {}
    },

    setRewardField(
      state,
      action: PayloadAction<{ variable: string; value: string }>
    ) {
      state.rewardFields[action.payload.variable] = action.payload.value
    },

    // COMMON
    toggleTimeBound(state) {
      state.isTimeBound = !state.isTimeBound
      if (!state.isTimeBound) {
        state.timeBoundEndDate = undefined
      }
    },

    setTimeBoundEndDate(state, action: PayloadAction<Date | undefined>) {
      state.timeBoundEndDate = action.payload
    },
  },
})

export const {
  setEventType,
  setEventField,
  toggleTimeBound,
  setRewardField,
  setRewardType,
  setTimeBoundEndDate,
} = rewardSlice.actions

export default rewardSlice.reducer
