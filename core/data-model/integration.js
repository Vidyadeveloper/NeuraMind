// Data Model: integration
module.exports = {
  "id": "integration",
  "label": "Integration",
  "description": "Connected third-party services and connection metadata.",
  "isEditable": true,
  "attributes": [
    {
      "id": "id",
      "type": "string",
      "label": "ID",
      "required": true,
      "unique": true,
      "indexed": true
    },
    {
      "id": "description",
      "type": "string",
      "label": "Description",
      "defaultValue": ""
    },
    {
      "id": "startDate",
      "type": "date",
      "label": "Start Date",
      "required": true
    },
    {
      "id": "endDate",
      "type": "date",
      "label": "End Date"
    },
    {
      "id": "createdBy",
      "type": "string",
      "label": "Created By",
      "accessControl": {
        "read": [
          "admin"
        ],
        "write": [
          "admin"
        ]
      }
    },
    {
      "id": "createdAt",
      "type": "datetime",
      "label": "Created At"
    },
    {
      "id": "status",
      "type": "string",
      "label": "Status",
      "defaultValue": "draft",
      "allowedValues": [
        "draft",
        "active",
        "inactive",
        "archived"
      ]
    },
    {
      "id": "version",
      "type": "number",
      "label": "Version",
      "defaultValue": 1
    },
    {
      "id": "createdAge",
      "type": "computed",
      "label": "Age (days)",
      "dependencies": [
        "createdAt"
      ]
    },
    {
      "id": "integration.integration_id",
      "label": "Integration ID",
      "type": "text",
      "description": "Unique identifier for the integration connection.",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    },
    {
      "id": "integration.user_id",
      "label": "User ID",
      "type": "text",
      "description": "Owner of the integration.",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    },
    {
      "id": "integration.service_name",
      "label": "Service name",
      "type": "text",
      "description": "Third-party service name (e.g., Google Calendar).",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    },
    {
      "id": "integration.connected_on",
      "label": "Connected on",
      "type": "date",
      "description": "Date the service was connected.",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    },
    {
      "id": "integration.auth_email",
      "label": "Auth email",
      "type": "email",
      "description": "Email used to authenticate with the service.",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    },
    {
      "id": "integration.auth_token",
      "label": "Auth token",
      "type": "text",
      "description": "OAuth token or API key (stored securely).",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    },
    {
      "id": "integration.sync_frequency_minutes",
      "label": "Sync frequency (minutes)",
      "type": "number",
      "description": "Preferred automatic sync interval in minutes.",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    }
  ],
  "extends": null,
  "isProtected": false
};