// Data Model: habit_profile
module.exports = {
  "id": "habit_profile",
  "label": "Habit Profile",
  "description": "Inferred or user-confirmed habitual behaviors.",
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
      "id": "habit_profile.habit_id",
      "label": "Habit ID",
      "type": "text",
      "description": "Unique identifier for the habit.",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    },
    {
      "id": "habit_profile.user_id",
      "label": "User ID",
      "type": "text",
      "description": "Owner of the habit profile.",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    },
    {
      "id": "habit_profile.name",
      "label": "Habit name",
      "type": "text",
      "description": "Readable name for the habit (e.g., Morning run).",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    },
    {
      "id": "habit_profile.frequency_per_week",
      "label": "Frequency per week",
      "type": "number",
      "description": "Detected or desired frequency expressed as number per week.",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    },
    {
      "id": "habit_profile.detection_confidence",
      "label": "Detection confidence",
      "type": "number",
      "description": "System confidence score (0–100) for the inferred habit.",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    },
    {
      "id": "habit_profile.typical_time",
      "label": "Typical time",
      "type": "text",
      "description": "Typical time of day the habit occurs (e.g., 07:00-08:00).",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    },
    {
      "id": "habit_profile.discovered_on",
      "label": "Discovered on",
      "type": "date",
      "description": "Date the habit was first inferred.",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    }
  ],
  "extends": null,
  "isProtected": false
};