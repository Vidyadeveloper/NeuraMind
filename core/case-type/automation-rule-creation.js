const BlazeCase = require("@blaze-case-ai/blaze-engine/core/case-type/blaze-case");

class AutomationRuleCreationCase extends BlazeCase {
  constructor() {
    super(
      "automation-rule-creation",
      "Automation Rule Creation",
      [
        {
          id: "Define_Trigger",
          label: "Define Trigger",
          steps: [
            {
              id: "start",
              label: "Start",
              type: "start",
              status: "pending",
              view: "automation-rule-creation-define-trigger-start",
              dataModelReference: { models: [] }
            },
            {
              id: "select-trigger",
              label: "Select trigger source and parameters",
              type: "manual",
              status: "pending",
              view: "automation-rule-creation-define-trigger-select-trigger-source-and-parameters",
              dataModelReference: { models: ["automation_rule.trigger_type", "automation_rule.trigger_spec", "habit_profile.habit_id", "automation_rule.user_id"] }
            },
            {
              id: "end",
              label: "End",
              type: "end",
              status: "pending",
              view: "automation-rule-creation-define-trigger-end",
              dataModelReference: { models: [] }
            }
          ]
        },
        {
          id: "Define_Action",
          label: "Define Action",
          steps: [
            {
              id: "start",
              label: "Start",
              type: "start",
              status: "pending",
              view: "automation-rule-creation-define-action-start",
              dataModelReference: { models: [] }
            },
            {
              id: "configure-action",
              label: "Configure action to perform",
              type: "manual",
              status: "pending",
              view: "automation-rule-creation-define-action-configure-action-to-perform",
              dataModelReference: { models: ["automation_rule.action_type", "automation_rule.action_spec"] }
            },
            {
              id: "end",
              label: "End",
              type: "end",
              status: "pending",
              view: "automation-rule-creation-define-action-end",
              dataModelReference: { models: [] }
            }
          ]
        },
        {
          id: "Review_&_Activate",
          label: "Review & Activate",
          steps: [
            {
              id: "start",
              label: "Start",
              type: "start",
              status: "pending",
              view: "automation-rule-creation-review-&-activate-start",
              dataModelReference: { models: [] }
            },
            {
              id: "review-and-activate",
              label: "Review details and activate rule",
              type: "manual",
              status: "pending",
              view: "automation-rule-creation-review-&-activate-review-details-and-activate-rule",
              dataModelReference: { models: ["automation_rule.rule_id", "automation_rule.name", "automation_rule.is_active"] }
            },
            {
              id: "end",
              label: "End",
              type: "end",
              status: "pending",
              view: "automation-rule-creation-review-&-activate-end",
              dataModelReference: { models: [] }
            }
          ]
        }
      ]
    );
  }
}

module.exports = new AutomationRuleCreationCase();