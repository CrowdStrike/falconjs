/**
 * contains all method definitions for API: real time response audit
 * consumed and interpreted by Falcon.command(...)
 */
export var _real_time_response_audit_endpoints: Array<any> = [
    ["RTRAuditSessions", "GET", "/real-time-response-audit/combined/sessions/v1", "Get all the RTR sessions created for a customer in a specified duration", "real_time_response_audit", [{
        "type": "string",
        "description": "Optional filter criteria in the form of an FQL query. For more information about FQL queries, see our [FQL documentation in Falcon](https://falcon.crowdstrike.com/support/documentation/45/falcon-query-language-feature-guide).",
        "name": "filter",
        "in": "query"
    }, {
        "enum": ["created_at", "updated_at", "deleted_at"],
        "type": "string",
        "description": "how to sort the session IDs. e.g. sort=created_at|desc will sort the results based on createdAt in descending order",
        "name": "sort",
        "in": "query"
    }, {
        "maximum": 1000,
        "minimum": 1,
        "type": "string",
        "description": "number of sessions to be returned",
        "name": "limit",
        "in": "query"
    }, {
        "type": "string",
        "description": "offset value to be used for paginated results",
        "name": "offset",
        "in": "query"
    }, {
        "type": "boolean",
        "default": 0,
        "description": "get sessions with command info included; by default sessions are returned without command info which include cloud_request_ids and logs fields",
        "name": "with_command_info",
        "in": "query"
    }]]
];