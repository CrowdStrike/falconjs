/**
 * contains all method definitions for API: report executions
 * consumed and interpreted by Falcon.command(...)
 */
export const _report_executions_endpoints: Array<any> = [
    ["report_executions_download_get", "GET", "/reports/entities/report-executions-download/v1", "Get report entity download", "report_executions", [{
        "type": "string",
        "description": "The report_execution id to download",
        "name": "ids",
        "in": "query",
        "required": 1
    }]],
    ["report_executions_retry", "POST", "/reports/entities/report-executions-retry/v1", "This endpoint will be used to retry report executions", "report_executions", [{
        "name": "body",
        "in": "body",
        "required": 1
    }]],
    ["report_executions_get", "GET", "/reports/entities/report-executions/v1", "Retrieve report details for the provided report IDs.", "report_executions", [{
        "type": "array",
        "items": {
            "type": "string"
        },
        "collectionFormat": "multi",
        "description": "The report_execution id to get details about.",
        "name": "ids",
        "in": "query",
        "required": 1
    }]],
    ["report_executions_query", "GET", "/reports/queries/report-executions/v1", "Find all report execution IDs matching the query with filter", "report_executions", [{
        "type": "string",
        "description": "Possible order by fields: created_on, last_updated_on",
        "name": "sort",
        "in": "query"
    }, {
        "type": "string",
        "description": "FQL query specifying the filter parameters. Filter term criteria: type, scheduled_report_id, status.Filter range criteria: created_on, last_updated_on, expiration_on; use any common date format,such as '2010-05-15T14:55:21.892315096Z'.",
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