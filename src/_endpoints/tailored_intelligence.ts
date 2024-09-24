/**
 * contains all method definitions for API: tailored intelligence
 * consumed and interpreted by Falcon.command(...)
 */
export const _tailored_intelligence_endpoints: Array<any> = [
    ["GetEventsBody", "GET", "/ti/events/entities/events-full-body/v2", "Get event body for the provided event ID", "tailored_intelligence", [{
        "type": "string",
        "description": "Return the event body for event id.",
        "name": "id",
        "in": "query",
        "required": 1
    }]],
    ["GetEventsEntities", "POST", "/ti/events/entities/events/GET/v2", "Get events entities for specified ids.", "tailored_intelligence", [{
        "name": "body",
        "in": "body",
        "required": 1
    }]],
    ["QueryEvents", "GET", "/ti/events/queries/events/v2", "Get events ids that match the provided filter criteria.", "tailored_intelligence", [{
        "type": "string",
        "description": "Starting index of overall result set from which to return ids.",
        "name": "offset",
        "in": "query"
    }, {
        "type": "integer",
        "description": "Number of ids to return.",
        "name": "limit",
        "in": "query"
    }, {
        "type": "string",
        "description": "Possible order by fields: source_type, created_date, updated_date. Ex: 'updated_date|desc'.",
        "name": "sort",
        "in": "query"
    }, {
        "type": "string",
        "description": "FQL query specifying the filter parameters. Special value '*' means to not filter on anything.",
        "name": "filter",
        "in": "query"
    }, {
        "type": "string",
        "description": "Match phrase_prefix query criteria; included fields: _all (all filter string fields indexed).",
        "name": "q",
        "in": "query"
    }]],
    ["GetRulesEntities", "POST", "/ti/rules/entities/rules/GET/v2", "Get rules entities for specified ids.", "tailored_intelligence", [{
        "name": "body",
        "in": "body",
        "required": 1
    }]],
    ["QueryRules", "GET", "/ti/rules/queries/rules/v2", "Get rules ids that match the provided filter criteria.", "tailored_intelligence", [{
        "type": "string",
        "description": "Starting index of overall result set from which to return ids.",
        "name": "offset",
        "in": "query"
    }, {
        "type": "integer",
        "description": "Number of ids to return.",
        "name": "limit",
        "in": "query"
    }, {
        "type": "string",
        "description": "Possible order by fields: name, value, rule_type, customer_id, created_date, updated_date. Ex: 'updated_date|asc'.",
        "name": "sort",
        "in": "query"
    }, {
        "type": "string",
        "description": "FQL query specifying the filter parameters. Special value '*' means to not filter on anything.",
        "name": "filter",
        "in": "query"
    }, {
        "type": "string",
        "description": "Match phrase_prefix query criteria; included fields: _all (all filter string fields indexed).",
        "name": "q",
        "in": "query"
    }]]
];