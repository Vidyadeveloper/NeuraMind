// Data Model: automation_rule
module.exports = {
  "id": "automation_rule",
  "label": "Automation Rule",
  "description": "User-defined automation that triggers actions based on events or habits.",
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
      "id": "automation_rule.rule_id",
      "label": "Rule ID",
      "type": "text",
      "description": "Unique identifier for the automation rule.",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    },
    {
      "id": "automation_rule.user_id",
      "label": "User ID",
      "type": "text",
      "description": "Owner of the rule.",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    },
    {
      "id": "automation_rule.name",
      "label": "Rule name",
      "type": "text",
      "description": "Descriptive name for the automation.",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    },
    {
      "id": "automation_rule.trigger_type",
      "label": "Trigger type",
      "type": "text",
      "description": "Trigger category (e.g., time, habit_detected, external_event).",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    },
    {
      "id": "automation_rule.trigger_spec",
      "label": "Trigger specification",
      "type": "text",
      "description": "Structured/serialized trigger details (e.g., cron, habit id).",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    },
    {
      "id": "automation_rule.action_type",
      "label": "Action type",
      "type": "text",
      "description": "Action category (e.g., send_message, toggle_device, start_routine).",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    },
    {
      "id": "automation_rule.action_spec",
      "label": "Action specification",
      "type": "text",
      "description": "Structured/serialized action details (destination, message, parameters).",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    },
    {
      "id": "automation_rule.is_active",
      "label": "Is active",
      "type": "text",
      "description": "Whether the rule is active. Stored as 'true' or 'false'.",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    }
  ],
  "extends": null,
  "isProtected": false
};