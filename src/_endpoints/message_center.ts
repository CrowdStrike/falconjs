/**
 * contains all method definitions for API: message center
 * consumed and interpreted by Falcon.command(...)
 */
export var _message_center_endpoints: Array<any> = [
    ["AggregateCases", "POST", "/message-center/aggregates/cases/GET/v1", "Retrieve aggregate case values based on the matched filter", "message_center", [{
        "name": "body",
        "in": "body",
        "required": 1
    }]],
    ["GetCaseActivityByIds", "POST", "/message-center/entities/case-activities/GET/v1", "Retrieve activities for given id's", "message_center", [{
        "name": "body",
        "in": "body",
        "required": 1
    }]],
    ["CaseAddActivity", "POST", "/message-center/entities/case-activity/v1", "Add an activity to case. Only activities of type comment are allowed via API", "message_center", [{
        "name": "body",
        "in": "body",
        "required": 1
    }]],
    ["CaseDownloadAttachment", "GET", "/message-center/entities/case-attachment/v1", "retrieves an attachment for the case, given the attachment id", "message_center", [{
        "type": "string",
        "description": "attachment ID",
        "name": "id",
        "in": "query",
        "required": 1
    }]],
    ["CaseAddAttachment", "POST", "/message-center/entities/case-attachment/v1", "Upload an attachment for the case.", "message_center", [{
        "type": "string",
        "description": "Case ID",
        "name": "case_id",
        "in": "formData",
        "required": 1
    }, {
        "type": "string",
        "description": "User UUID",
        "name": "user_uuid",
        "in": "formData",
        "required": 1
    }, {
        "type": "file",
        "description": "File Body",
        "name": "file",
        "in": "formData",
        "required": 1
    }]],
    ["CreateCase", "POST", "/message-center/entities/case/v1", "create a new case", "message_center", [{
        "name": "body",
        "in": "body",
        "required": 1
    }]],
    ["UpdateCase", "PATCH", "/message-center/entities/case/v1", "update an existing case", "message_center", [{
        "name": "body",
        "in": "body",
        "required": 1
    }]],
    ["CreateCaseV2", "POST", "/message-center/entities/case/v2", "create a new case", "message_center", [{
        "name": "body",
        "in": "body",
        "required": 1
    }]],
    ["GetCaseEntitiesByIDs", "POST", "/message-center/entities/cases/GET/v1", "Retrieve message center cases", "message_center", [{
        "name": "body",
        "in": "body",
        "required": 1
    }]],
    ["QueryActivityByCaseID", "GET", "/message-center/queries/case-activities/v1", "Retrieve activities id's for a case", "message_center", [{
        "type": "integer",
        "description": "The maximum records to return. [1-500]",
        "name": "limit",
        "in": "query"
    }, {
        "enum": ["activity.created_time.asc", "activity.created_time.desc", "activity.type.asc", "activity.type.desc"],
        "type": "string",
        "description": "The property to sort on, followed by a dot (.), followed by the sort direction, either \"asc\" or \"desc\".",
        "name": "sort",
        "in": "query"
    }, {
        "type": "string",
        "description": "Optional filter and sort criteria in the form of an FQL query.",
        "name": "filter",
        "in": "query"
    }, {
        "type": "string",
        "description": "Starting index of overall result set from which to return ids.",
        "name": "offset",
        "in": "query"
    }, {
        "type": "string",
        "description": "Case ID",
        "name": "case_id",
        "in": "query",
        "required": 1
    }]],
    ["QueryCasesIdsByFilter", "GET", "/message-center/queries/cases/v1", "Retrieve case id's that match the provided filter criteria", "message_center", [{
        "type": "integer",
        "description": "The maximum records to return. [1-500]",
        "name": "limit",
        "in": "query"
    }, {
        "enum": ["case.created_time.asc", "case.created_time.desc", "case.id.asc", "case.id.desc", "case.last_modified_time.asc", "case.last_modified_time.desc", "case.status.asc", "case.status.desc", "case.type.asc", "case.type.desc"],
        "type": "string",
        "description": "The property to sort on, followed by a dot (.), followed by the sort direction, either \"asc\" or \"desc\".",
        "name": "sort",
        "in": "query"
    }, {
        "type": "string",
        "description": "Optional filter and sort criteria in the form of an FQL query.",
        "name": "filter",
        "in": "query"
    }, {
        "type": "string",
        "description": "Starting index of overall result set from which to return ids.",
        "name": "offset",
        "in": "query"
    }]]
];