/**
 * contains all method definitions for API: fdr
 * consumed and interpreted by Falcon.command(...)
 */
export const _fdr_endpoints: Array<any> = [
    ["fdrschema_combined_event_get", "GET", "/fdr/combined/schema-members/v1", "Fetch combined schema", "event_schema", []],
    ["fdrschema_entities_event_get", "GET", "/fdr/entities/schema-events/v1", "Fetch event schema by ID", "event_schema", [{
        "type": "array",
        "items": {
            "type": "string"
        },
        "collectionFormat": "multi",
        "description": "Specify feed IDs to fetch",
        "name": "ids",
        "in": "query"
    }]],
    ["fdrschema_queries_event_get", "GET", "/fdr/queries/schema-events/v1", "Get list of event IDs given a particular query.", "event_schema", [{
        "type": "integer",
        "description": "Limit of the data",
        "name": "limit",
        "in": "query"
    }, {
        "type": "integer",
        "description": "Offset into the data",
        "name": "offset",
        "in": "query"
    }, {
        "type": "string",
        "description": "FQL filter of the data",
        "name": "filter",
        "in": "query"
    }, {
        "type": "string",
        "description": "Sort the data",
        "name": "sort",
        "in": "query"
    }]],
    ["fdrschema_entities_field_get", "GET", "/fdr/entities/schema-fields/v1", "Fetch field schema by ID", "field_schema", [{
        "type": "array",
        "items": {
            "type": "string"
        },
        "collectionFormat": "multi",
        "description": "Specify feed IDs to fetch",
        "name": "ids",
        "in": "query"
    }]],
    ["fdrschema_queries_field_get", "GET", "/fdr/queries/schema-fields/v1", "Get list of field IDs given a particular query.", "field_schema", [{
        "type": "integer",
        "description": "Limit of the data",
        "name": "limit",
        "in": "query"
    }, {
        "type": "integer",
        "description": "Offset into the data",
        "name": "offset",
        "in": "query"
    }, {
        "type": "string",
        "description": "FQL filter of the data",
        "name": "filter",
        "in": "query"
    }, {
        "type": "string",
        "description": "Sort the data",
        "name": "sort",
        "in": "query"
    }]]
];