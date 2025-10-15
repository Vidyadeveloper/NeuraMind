const BlazeCase = require("@blaze-case-ai/blaze-engine/core/case-type/blaze-case");

class Privacy&DataRequestCase extends BlazeCase {
  constructor() {
    super(
      "privacy-data-request",
      "Privacy & Data Request",
      [
        {
          id: "Request_Submitted",
          label: "Request Submitted",
          steps: [
            {
              id: "start",
              label: "Start",
              type: "start",
              status: "pending",
              view: "privacy-&-data-request-request-submitted-start",
              dataModelReference: { models: [] }
            },
            {
              id: "submit-request",
              label: "Submit data request",
              type: "manual",
              status: "pending",
              view: "privacy-&-data-request-request-submitted-submit-data-request",
              dataModelReference: { models: ["data_request.request_id", "data_request.request_type", "data_request.submitted_on", "data_request.user_id"] }
            },
            {
              id: "end",
              label: "End",
              type: "end",
              status: "pending",
              view: "privacy-&-data-request-request-submitted-end",
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
              view: "privacy-&-data-request-verification-start",
              dataModelReference: { models: [] }
            },
            {
              id: "verify-identity",
              label: "Verify requester's identity",
              type: "manual",
              status: "pending",
              view: "privacy-&-data-request-verification-verify-requester's-identity",
              dataModelReference: { models: ["user_profile.email", "data_request.user_id"] }
            },
            {
              id: "end",
              label: "End",
              type: "end",
              status: "pending",
              view: "privacy-&-data-request-verification-end",
              dataModelReference: { models: [] }
            }
          ]
        },
        {
          id: "Fulfillment",
          label: "Fulfillment",
          steps: [
            {
              id: "start",
              label: "Start",
              type: "start",
              status: "pending",
              view: "privacy-&-data-request-fulfillment-start",
              dataModelReference: { models: [] }
            },
            {
              id: "process-request",
              label: "Process and complete the request",
              type: "manual",
              status: "pending",
              view: "privacy-&-data-request-fulfillment-process-and-complete-the-request",
              dataModelReference: { models: ["data_request.status", "data_request.processed_on", "data_request.admin_notes"] }
            },
            {
              id: "end",
              label: "End",
              type: "end",
              status: "pending",
              view: "privacy-&-data-request-fulfillment-end",
              dataModelReference: { models: [] }
            }
          ]
        }
      ]
    );
  }
}

module.exports = new Privacy&DataRequestCase();