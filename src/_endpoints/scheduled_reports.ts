/**
 * contains all method definitions for API: scheduled reports
 * consumed and interpreted by Falcon.command(...)
 */
export var _scheduled_reports_endpoints: Array<any> = [
    ["scheduled_reports_launch", "POST", "/reports/entities/scheduled-reports/execution/v1", "Launch scheduled reports executions for the provided report IDs.", "scheduled_reports", [{
        "name": "body",
        "in": "body",
        "required": 1
    }]],
    ["scheduled_reports_get", "GET", "/reports/entities/scheduled-reports/v1", "Retrieve scheduled reports for the provided report IDs.", "scheduled_reports", [{
        "type": "array",
        "items": {
            "type": "string"
        },
        "collectionFormat": "multi",
        "description": "The scheduled_report id to get details about.",
        "name": "ids",
        "in": "query",
        "required": 1
    }]],
    ["scheduled_reports_query", "GET", "/reports/queries/scheduled-reports/v1", "Find all report IDs matching the query with filter", "scheduled_reports", [{
        "type": "string",
        "description": "Possible order by fields: created_on, last_updated_on, last_execution_on, next_execution_on",
        "name": "sort",
        "in": "query"
    }, {
        "type": "string",
        "description": "FQL query specifying the filter parameters. Filter term criteria: type,trigger_reference, recipients, user_uuid, cid, trigger_params.metadata.Filter range criteria: created_on, modified_on; use any common date format,such as '2010-05-15T14:55:21.892315096Z'.",
        "name": "filter",
        "in": "query"
    }, {
        "type": "string",
        "description": "Match query criteria, which includes all the filter string fields",
        "name": "q",
        "in": "query"
    }, {
        "type": "string",
        "description": "Starting index of overall result set from which to return ids.",
        "name": "offset",
        "in": "query"
    }, {
        "type": "integer",
        "description": "Number of ids to return.",
        "name": "limit",
        "in": "query"
    }]]
];