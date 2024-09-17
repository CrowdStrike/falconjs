/**
 * contains all method definitions for API: ioc
 * consumed and interpreted by Falcon.command(...)
 */
export var _ioc_endpoints: Array<any> = [
    ["indicator_aggregate_v1", "POST", "/iocs/aggregates/indicators/v1", "Get Indicators aggregates as specified via json in the request body.", "ioc", [{
        "type": "string",
        "description": "The filter to narrow down the aggregation data",
        "name": "filter",
        "in": "query"
    }, {
        "type": "boolean",
        "description": "The filter for returning either only indicators for the request customer or its MSSP parents",
        "name": "from_parent",
        "in": "query"
    }, {
        "name": "body",
        "in": "body",
        "required": 1
    }]],
    ["indicator_combined_v1", "GET", "/iocs/combined/indicator/v1", "Get Combined for Indicators.", "ioc", [{
        "type": "string",
        "description": "The filter expression that should be used to limit the results.",
        "name": "filter",
        "in": "query"
    }, {
        "type": "integer",
        "description": "The offset to start retrieving records from. Offset and After params are mutually exclusive. If none provided then scrolling will be used by default.",
        "name": "offset",
        "in": "query"
    }, {
        "type": "integer",
        "description": "The maximum records to return.",
        "name": "limit",
        "in": "query"
    }, {
        "enum": ["action", "applied_globally", "metadata.av_hits", "metadata.company_name.raw", "created_by", "created_on", "expiration", "expired", "metadata.filename.raw", "modified_by", "modified_on", "metadata.original_filename.raw", "metadata.product_name.raw", "metadata.product_version", "severity_number", "source", "type", "value"],
        "type": "string",
        "description": "The sort expression that should be used to sort the results.",
        "name": "sort",
        "in": "query"
    }, {
        "type": "string",
        "description": "A pagination token used with the `limit` parameter to manage pagination of results. On your first request, don't provide an 'after' token. On subsequent requests, provide the 'after' token from the previous response to continue from that place in the results. To access more than 10k indicators, use the 'after' parameter instead of 'offset'.",
        "name": "after",
        "in": "query"
    }, {
        "type": "boolean",
        "description": "The filter for returning either only indicators for the request customer or its MSSP parents",
        "name": "from_parent",
        "in": "query"
    }]],
    ["action_get_v1", "GET", "/iocs/entities/actions/v1", "Get Actions by ids.", "ioc", [{
        "type": "array",
        "items": {
            "type": "string"
        },
        "collectionFormat": "multi",
        "description": "The ids of the Actions to retrieve",
        "name": "ids",
        "in": "query"
    }]],
    ["GetIndicatorsReport", "POST", "/iocs/entities/indicators-reports/v1", "Launch an indicators report creation job", "ioc", [{
        "name": "body",
        "in": "body",
        "required": 1
    }]],
    ["indicator_get_v1", "GET", "/iocs/entities/indicators/v1", "Get Indicators by ids.", "ioc", [{
        "type": "array",
        "items": {
            "type": "string"
        },
        "collectionFormat": "multi",
        "description": "The ids of the Indicators to retrieve",
        "name": "ids",
        "in": "query",
        "required": 1
    }]],
    ["indicator_create_v1", "POST", "/iocs/entities/indicators/v1", "Create Indicators.", "ioc", [{
        "type": "boolean",
        "description": "Whether to submit to retrodetects",
        "name": "retrodetects",
        "in": "query"
    }, {
        "type": "boolean",
        "default": 0,
        "description": "Set to true to ignore warnings and add all IOCs",
        "name": "ignore_warnings",
        "in": "query"
    }, {
        "name": "body",
        "in": "body",
        "required": 1
    }]],
    ["indicator_update_v1", "PATCH", "/iocs/entities/indicators/v1", "Update Indicators.", "ioc", [{
        "type": "boolean",
        "description": "Whether to submit to retrodetects",
        "name": "retrodetects",
        "in": "query"
    }, {
        "type": "boolean",
        "default": 0,
        "description": "Set to true to ignore warnings and add all IOCs",
        "name": "ignore_warnings",
        "in": "query"
    }, {
        "name": "body",
        "in": "body",
        "required": 1
    }]],
    ["indicator_delete_v1", "DELETE", "/iocs/entities/indicators/v1", "Delete Indicators by ids.", "ioc", [{
        "type": "string",
        "description": "The FQL expression to delete Indicators in bulk. If both 'filter' and 'ids' are provided, then filter takes precedence and ignores ids.",
        "name": "filter",
        "in": "query"
    }, {
        "type": "array",
        "items": {
            "type": "string"
        },
        "collectionFormat": "multi",
        "description": "The ids of the Indicators to delete. If both 'filter' and 'ids' are provided, then filter takes precedence and ignores ids",
        "name": "ids",
        "in": "query"
    }, {
        "type": "string",
        "description": "The comment why these indicators were deleted",
        "name": "comment",
        "in": "query"
    }, {
        "type": "boolean",
        "description": "The filter for returning either only indicators for the request customer or its MSSP parents",
        "name": "from_parent",
        "in": "query"
    }]],
    ["action_query_v1", "GET", "/iocs/queries/actions/v1", "Query Actions.", "ioc", [{
        "type": "string",
        "description": "Starting index of overall result set from which to return ids.",
        "name": "offset",
        "in": "query"
    }, {
        "type": "integer",
        "description": "Number of ids to return.",
        "name": "limit",
        "in": "query"
    }]],
    ["indicator_search_v1", "GET", "/iocs/queries/indicators/v1", "Search for Indicators.", "ioc", [{
        "type": "string",
        "description": "The filter expression that should be used to limit the results.",
        "name": "filter",
        "in": "query"
    }, {
        "type": "integer",
        "description": "The offset to start retrieving records from. Offset and After params are mutually exclusive. If none provided then scrolling will be used by default.",
        "name": "offset",
        "in": "query"
    }, {
        "type": "integer",
        "description": "The maximum records to return.",
        "name": "limit",
        "in": "query"
    }, {
        "enum": ["action", "applied_globally", "metadata.av_hits", "metadata.company_name.raw", "created_by", "created_on", "expiration", "expired", "metadata.filename.raw", "modified_by", "modified_on", "metadata.original_filename.raw", "metadata.product_name.raw", "metadata.product_version", "severity_number", "source", "type", "value"],
        "type": "string",
        "description": "The sort expression that should be used to sort the results.",
        "name": "sort",
        "in": "query"
    }, {
        "type": "string",
        "description": "A pagination token used with the `limit` parameter to manage pagination of results. On your first request, don't provide an 'after' token. On subsequent requests, provide the 'after' token from the previous response to continue from that place in the results. To access more than 10k indicators, use the 'after' parameter instead of 'offset'.",
        "name": "after",
        "in": "query"
    }, {
        "type": "boolean",
        "description": "The filter for returning either only indicators for the request customer or its MSSP parents",
        "name": "from_parent",
        "in": "query"
    }]],
    ["ioc_type_query_v1", "GET", "/iocs/queries/ioc-types/v1", "Query IOC Types.", "ioc", [{
        "type": "string",
        "description": "Starting index of overall result set from which to return ids.",
        "name": "offset",
        "in": "query"
    }, {
        "type": "integer",
        "description": "Number of ids to return.",
        "name": "limit",
        "in": "query"
    }]],
    ["platform_query_v1", "GET", "/iocs/queries/platforms/v1", "Query Platforms.", "ioc", [{
        "type": "string",
        "description": "Starting index of overall result set from which to return ids.",
        "name": "offset",
        "in": "query"
    }, {
        "type": "integer",
        "description": "Number of ids to return.",
        "name": "limit",
        "in": "query"
    }]],
    ["severity_query_v1", "GET", "/iocs/queries/severities/v1", "Query Severities.", "ioc", [{
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