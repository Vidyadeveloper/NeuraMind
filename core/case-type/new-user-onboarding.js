const BlazeCase = require("@blaze-case-ai/blaze-engine/core/case-type/blaze-case");

class NewUserOnboardingCase extends BlazeCase {
  constructor() {
    super(
      "new-user-onboarding",
      "New User Onboarding",
      [
        {
          id: "Initiation",
          label: "Initiation",
          steps: [
            {
              id: "start",
              label: "Start",
              type: "start",
              status: "pending",
              view: "new-user-onboarding-initiation-start",
              dataModelReference: { models: [] }
            },
            {
              id: "collect-basic-info",
              label: "Collect basic info",
              type: "manual",
              status: "pending",
              view: "new-user-onboarding-initiation-collect-basic-info",
              dataModelReference: { models: ["user_profile.full_name", "user_profile.email", "user_profile.timezone"] }
            },
            {
              id: "end",
              label: "End",
              type: "end",
              status: "pending",
              view: "new-user-onboarding-initiation-end",
              dataModelReference: { models: [] }
            }
          ]
        },
        {
          id: "Verification",
          label: "Verification",
          steps: [
            {
              id: "start",
              label: "Start",
              type: "start",
              status: "pending",
              view: "new-user-onboarding-verification-start",
              dataModelReference: { models: [] }
            },
            {
              id: "verify-email",
              label: "Verify email",
              type: "manual",
              status: "pending",
              view: "new-user-onboarding-verification-verify-email",
              dataModelReference: { models: ["user_profile.email"] }
            },
            {
              id: "end",
              label: "End",
              type: "end",
              status: "pending",
              view: "new-user-onboarding-verification-end",
              dataModelReference: { models: [] }
            }
          ]
        },
        {
          id: "Personalization",
          label: "Personalization",
          steps: [
            {
              id: "start",
              label: "Start",
              type: "start",
              status: "pending",
              view: "new-user-onboarding-personalization-start",
              dataModelReference: { models: [] }
            },
            {
              id: "set-preferences",
              label: "Set notification preferences",
              type: "manual",
              status: "pending",
              view: "new-user-onboarding-personalization-set-notification-preferences",
              dataModelReference: { models: ["user_profile.preferred_channels"] }
            },
            {
              id: "end",
              label: "End",
              type: "end",
              status: "pending",
              view: "new-user-onboarding-personalization-end",
              dataModelReference: { models: [] }
            }
          ]
        },
        {
          id: "Complete",
          label: "Complete",
          steps: [
            {
              id: "start",
              label: "Start",
              type: "start",
              status: "pending",
              view: "new-user-onboarding-complete-start",
              dataModelReference: { models: [] }
            },
            {
              id: "finish-onboarding",
              label: "Complete onboarding",
              type: "manual",
              status: "pending",
              view: "new-user-onboarding-complete-complete-onboarding",
              dataModelReference: { models: ["user_profile.onboarding_date", "user_profile.user_id"] }
            },
            {
              id: "end",
              label: "End",
              type: "end",
              status: "pending",
              view: "new-user-onboarding-complete-end",
              dataModelReference: { models: [] }
            }
          ]
        }
      ]
    );
  }
}

module.exports = new NewUserOnboardingCase();