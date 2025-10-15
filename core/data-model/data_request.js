// Data Model: data_request
module.exports = {
  "id": "data_request",
  "label": "Data Request",
  "description": "User-initiated privacy requests (export, deletion, access).",
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
      "id": "data_request.request_id",
      "label": "Request ID",
      "type": "text",
      "description": "Unique identifier for the privacy or data request.",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    },
    {
      "id": "data_request.user_id",
      "label": "User ID",
      "type": "text",
      "description": "Requesting user's identifier.",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    },
    {
      "id": "data_request.request_type",
      "label": "Request type",
      "type": "text",
      "description": "Type of request (export, delete, access).",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    },
    {
      "id": "data_request.submitted_on",
      "label": "Submitted on",
      "type": "date",
      "description": "Date/time the request was submitted.",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    },
    {
      "id": "data_request.status",
      "label": "Status",
      "type": "text",
      "description": "Current processing status (submitted, verified, completed).",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    },
    {
      "id": "data_request.processed_on",
      "label": "Processed on",
      "type": "date",
      "description": "Date/time the request was fulfilled.",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    },
    {
      "id": "data_request.admin_notes",
      "label": "Admin notes",
      "type": "text",
      "description": "Internal notes used during fulfillment.",
      "required": false,
      "unique": false,
      "indexed": false,
      "controlType": "text"
    }
  ],
  "extends": null,
  "isProtected": false
};