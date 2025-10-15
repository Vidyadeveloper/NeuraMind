const BlazeCase = require("@blaze-case-ai/blaze-engine/core/case-type/blaze-case");

class HabitLearningCase extends BlazeCase {
  constructor() {
    super(
      "habit-learning",
      "Habit Learning",
      [
        {
          id: "Data_Collection",
          label: "Data Collection",
          steps: [
            {
              id: "start",
              label: "Start",
              type: "start",
              status: "pending",
              view: "habit-learning-data-collection-start",
              dataModelReference: { models: [] }
            },
            {
              id: "ingest-activity",
              label: "Ingest activity logs",
              type: "manual",
              status: "pending",
              view: "habit-learning-data-collection-ingest-activity-logs",
              dataModelReference: { models: ["activity_log.log_id", "activity_log.activity_type", "activity_log.timestamp", "activity_log.metadata", "activity_log.user_id"] }
            },
            {
              id: "end",
              label: "End",
              type: "end",
              status: "pending",
              view: "habit-learning-data-collection-end",
              dataModelReference: { models: [] }
            }
          ]
        },
        {
          id: "Analysis",
          label: "Analysis",
          steps: [
            {
              id: "start",
              label: "Start",
              type: "start",
              status: "pending",
              view: "habit-learning-analysis-start",
              dataModelReference: { models: [] }
            },
            {
              id: "infer-habits",
              label: "Infer habits from logs",
              type: "manual",
              status: "pending",
              view: "habit-learning-analysis-infer-habits-from-logs",
              dataModelReference: { models: ["activity_log.activity_type", "activity_log.metadata"] }
            },
            {
              id: "end",
              label: "End",
              type: "end",
              status: "pending",
              view: "habit-learning-analysis-end",
              dataModelReference: { models: [] }
            }
          ]
        },
        {
          id: "Confirmation",
          label: "Confirmation",
          steps: [
            {
              id: "start",
              label: "Start",
              type: "start",
              status: "pending",
              view: "habit-learning-confirmation-start",
              dataModelReference: { models: [] }
            },
            {
              id: "confirm-habit",
              label: "User confirm or modify inferred habit",
              type: "manual",
              status: "pending",
              view: "habit-learning-confirmation-user-confirm-or-modify-inferred-habit",
              dataModelReference: { models: ["habit_profile.habit_id", "habit_profile.name", "habit_profile.frequency_per_week", "habit_profile.detection_confidence", "habit_profile.discovered_on", "habit_profile.user_id"] }
            },
            {
              id: "end",
              label: "End",
              type: "end",
              status: "pending",
              view: "habit-learning-confirmation-end",
              dataModelReference: { models: [] }
            }
          ]
        }
      ]
    );
  }
}

module.exports = new HabitLearningCase();