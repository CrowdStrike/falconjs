/**
 * contains all method definitions for API: identity protection
 * consumed and interpreted by Falcon.command(...)
 */
export const _identity_protection_endpoints: Array<any> = [
    ["api_preempt_proxy_post_graphql", "POST", "/identity-protection/combined/graphql/v1", "Identity Protection GraphQL API. Allows to retrieve entities, timeline activities, identity-based incidents and security assessment. Allows to perform actions on entities and identity-based incidents.", "identity_protection", [{
        "type": "string",
        "description": "Authorization Header",
        "name": "Authorization",
        "in": "header",
        "required": 1
    }]],
    ["GetSensorAggregates", "POST", "/identity-protection/aggregates/devices/GET/v1", "Get sensor aggregates as specified via json in request body.", "identity_entities", [{
        "name": "body",
        "in": "body",
        "required": 1
    }]],
    ["GetSensorDetails", "POST", "/identity-protection/entities/devices/GET/v1", "Get details on one or more sensors by providing device IDs in a POST body. Supports up to a maximum of 5000 IDs.", "identity_entities", [{
        "name": "body",
        "in": "body",
        "required": 1
    }]],
    ["QuerySensorsByFilter", "GET", "/identity-protection/queries/devices/v1", "Search for sensors in your environment by hostname, IP, and other criteria.", "identity_entities", [{
        "type": "integer",
        "description": "The offset to start retrieving records from",
        "name": "offset",
        "in": "query"
    }, {
        "type": "integer",
        "description": "The maximum records to return. [1-200]",
        "name": "limit",
        "in": "query"
    }, {
        "type": "string",
        "description": "The property to sort by (e.g. status.desc or hostname.asc)",
        "name": "sort",
        "in": "query"
    }, {
        "type": "string",
        "description": "The filter expression that should be used to limit the results",
        "name": "filter",
        "in": "query"
    }]]
];