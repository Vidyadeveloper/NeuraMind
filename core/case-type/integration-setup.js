const BlazeCase = require("@blaze-case-ai/blaze-engine/core/case-type/blaze-case");

class IntegrationSetupCase extends BlazeCase {
  constructor() {
    super(
      "integration-setup",
      "Integration Setup",
      [
        {
          id: "Select_Service",
          label: "Select Service",
          steps: [
            {
              id: "start",
              label: "Start",
              type: "start",
              status: "pending",
              view: "integration-setup-select-service-start",
              dataModelReference: { models: [] }
            },
            {
              id: "choose-service",
              label: "Choose service to connect",
              type: "manual",
              status: "pending",
              view: "integration-setup-select-service-choose-service-to-connect",
              dataModelReference: { models: ["integration.service_name"] }
            },
            {
              id: "end",
              label: "End",
              type: "end",
              status: "pending",
              view: "integration-setup-select-service-end",
              dataModelReference: { models: [] }
            }
          ]
        },
        {
          id: "Authenticate",
          label: "Authenticate",
          steps: [
            {
              id: "start",
              label: "Start",
              type: "start",
              status: "pending",
              view: "integration-setup-authenticate-start",
              dataModelReference: { models: [] }
            },
            {
              id: "authenticate-service",
              label: "Authenticate with service",
              type: "manual",
              status: "pending",
              view: "integration-setup-authenticate-authenticate-with-service",
              dataModelReference: { models: ["integration.auth_email", "integration.auth_token", "integration.user_id"] }
            },
            {
              id: "end",
              label: "End",
              type: "end",
              status: "pending",
              view: "integration-setup-authenticate-end",
              dataModelReference: { models: [] }
            }
          ]
        },
        {
          id: "Configure_Sync",
          label: "Configure Sync",
          steps: [
            {
              id: "start",
              label: "Start",
              type: "start",
              status: "pending",
              view: "integration-setup-configure-sync-start",
              dataModelReference: { models: [] }
            },
            {
              id: "set-sync-preferences",
              label: "Set sync preferences and finalize",
              type: "manual",
              status: "pending",
              view: "integration-setup-configure-sync-set-sync-preferences-and-finalize",
              dataModelReference: { models: ["integration.sync_frequency_minutes", "integration.connected_on"] }
            },
            {
              id: "end",
              label: "End",
              type: "end",
              status: "pending",
              view: "integration-setup-configure-sync-end",
              dataModelReference: { models: [] }
            }
          ]
        }
      ]
    );
  }
}

module.exports = new IntegrationSetupCase();