type EventType = "SALES" | "POSTS" | "ONBOARDED"
type RewardType = "BONUS" | "TIER_UPGRADE"

const EVENT_CONFIG: DynamicConfig<EventType>[] = [
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
      },
      {
        type: "select",
        name: "duration",
        placeholder: "Select duration",
        variable: "Y period",
      },
    ],
  },
  {
    label: "Is Onboarded",
    value: "ONBOARDED",
  },
]

const REWARD_CONFIG: DynamicConfig<RewardType>[] = [
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
      },
    ],
  },
  {
    label: "Upgrade to {tier name}",
    value: "TIER_UPGRADE",
    fields: [
      {
        type: "modal",
        name: "tier",
        variable: "tier name",
      },
    ],
  },
]
type DynamicField = {
  type: "input" | "select" | "modal"
  name: string
  placeholder?: string
  variable?: string
  icon?: string
}

type DynamicConfig<T> = {
  label: string
  value: T
  fields?: DynamicField[]
}

export {
  EVENT_CONFIG,
  REWARD_CONFIG,
  type EventType,
  type RewardType,
  type DynamicConfig,
  type DynamicField,
}
