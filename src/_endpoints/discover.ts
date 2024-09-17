/**
 * contains all method definitions for API: discover
 * consumed and interpreted by Falcon.command(...)
 */
export var _discover_endpoints: Array<any> = [
    ["get_accounts", "GET", "/discover/entities/accounts/v1", "Get details on accounts by providing one or more IDs.", "discover", [{
        "type": "array",
        "items": {
            "type": "string"
        },
        "collectionFormat": "multi",
        "description": "One or more account IDs (max: 100). Find account IDs with GET `/discover/queries/accounts/v1`",
        "name": "ids",
        "in": "query",
        "required": 1
    }]],
    ["get_applications", "GET", "/discover/entities/applications/v1", "Get details on applications by providing one or more IDs.", "discover", [{
        "type": "array",
        "items": {
            "type": "string"
        },
        "collectionFormat": "multi",
        "description": "The IDs of applications to retrieve. (Min: 1, Max: 100)",
        "name": "ids",
        "in": "query",
        "required": 1
    }]],
    ["get_hosts", "GET", "/discover/entities/hosts/v1", "Get details on assets by providing one or more IDs.", "discover", [{
        "type": "array",
        "items": {
            "type": "string"
        },
        "collectionFormat": "multi",
        "description": "One or more asset IDs (max: 100). Find asset IDs with GET `/discover/queries/hosts/v1`",
        "name": "ids",
        "in": "query",
        "required": 1
    }]],
    ["get_logins", "GET", "/discover/entities/logins/v1", "Get details on logins by providing one or more IDs.", "discover", [{
        "type": "array",
        "items": {
            "type": "string"
        },
        "collectionFormat": "multi",
        "description": "One or more login IDs (max: 100). Find login IDs with GET `/discover/queries/logins/v1`",
        "name": "ids",
        "in": "query",
        "required": 1
    }]],
    ["query_accounts", "GET", "/discover/queries/accounts/v1", "Search for accounts in your environment by providing an FQL (Falcon Query Language) filter and paging details. Returns a set of account IDs which match the filter criteria.", "discover", [{
        "minimum": 0,
        "type": "integer",
        "description": "An offset used with the `limit` parameter to manage pagination of results. On your first request, don\u2019t provide an `offset`. On subsequent requests, provide the `offset` from the previous response to continue from that place in the results.",
        "name": "offset",
        "in": "query"
    }, {
        "maximum": 100,
        "minimum": 1,
        "type": "integer",
        "description": "The number of account IDs to return in this response (min: 1, max: 100, default: 100). Use with the `offset` parameter to manage pagination of results.",
        "name": "limit",
        "in": "query"
    }, {
        "type": "string",
        "description": "Sort accounts by their properties. A single sort field is allowed. Common sort options include:\n\n<ul><li>username|asc</li><li>last_failed_login_timestamp|desc</li></ul>",
        "name": "sort",
        "in": "query"
    }, {
        "type": "string",
        "description": "Filter accounts using an FQL query. Common filter options include:\n\n<ul><li>account_type:'Local'</li><li>admin_privileges:'Yes'</li><li>first_seen_timestamp:<'now-7d'</li><li>last_successful_login_type:'Terminal server'</li></ul>",
        "name": "filter",
        "in": "query"
    }]],
    ["query_applications", "GET", "/discover/queries/applications/v1", "Search for applications in your environment by providing an FQL filter and paging details. returns a set of application IDs which match the filter criteria.", "discover", [{
        "minimum": 0,
        "type": "integer",
        "description": "The index of the starting resource.",
        "name": "offset",
        "in": "query"
    }, {
        "maximum": 100,
        "minimum": 1,
        "type": "integer",
        "description": "The number of account IDs to return in this response (min: 1, max: 100, default: 100). Use with the `offset` parameter to manage pagination of results.",
        "name": "limit",
        "in": "query"
    }, {
        "type": "string",
        "description": "Sort accounts by their properties. A single sort field is allowed. Common sort options include:\n\n<ul><li>username|asc</li><li>last_failed_login_timestamp|desc</li></ul>",
        "name": "sort",
        "in": "query"
    }, {
        "type": "string",
        "description": "Filter accounts using an FQL query. Common filter options include:\n\n<ul><li>account_type:'Local'</li><li>admin_privileges:'Yes'</li><li>first_seen_timestamp:<'now-7d'</li><li>last_successful_login_type:'Terminal server'</li></ul>",
        "name": "filter",
        "in": "query"
    }]],
    ["query_hosts", "GET", "/discover/queries/hosts/v1", "Search for assets in your environment by providing an FQL (Falcon Query Language) filter and paging details. Returns a set of asset IDs which match the filter criteria.", "discover", [{
        "minimum": 0,
        "type": "integer",
        "description": "An offset used with the `limit` parameter to manage pagination of results. On your first request, don\u2019t provide an `offset`. On subsequent requests, provide the `offset` from the previous response to continue from that place in the results.",
        "name": "offset",
        "in": "query"
    }, {
        "maximum": 100,
        "minimum": 1,
        "type": "integer",
        "description": "The number of asset IDs to return in this response (min: 1, max: 100, default: 100). Use with the `offset` parameter to manage pagination of results.",
        "name": "limit",
        "in": "query"
    }, {
        "type": "string",
        "description": "Sort assets by their properties. A single sort field is allowed. Common sort options include:\n\n<ul><li>hostname|asc</li><li>product_type_desc|desc</li></ul>",
        "name": "sort",
        "in": "query"
    }, {
        "type": "string",
        "description": "Filter assets using an FQL query. Common filter options include:\n\n<ul><li>entity_type:'managed'</li><li>product_type_desc:'Workstation'</li><li>platform_name:'Windows'</li><li>last_seen_timestamp:>'now-7d'</li></ul>",
        "name": "filter",
        "in": "query"
    }]],
    ["query_logins", "GET", "/discover/queries/logins/v1", "Search for logins in your environment by providing an FQL (Falcon Query Language) filter and paging details. Returns a set of login IDs which match the filter criteria.", "discover", [{
        "minimum": 0,
        "type": "integer",
        "description": "An offset used with the `limit` parameter to manage pagination of results. On your first request, don\u2019t provide an `offset`. On subsequent requests, provide the `offset` from the previous response to continue from that place in the results.",
        "name": "offset",
        "in": "query"
    }, {
        "maximum": 100,
        "minimum": 1,
        "type": "integer",
        "description": "The number of asset IDs to return in this response (min: 1, max: 100, default: 100). Use with the `offset` parameter to manage pagination of results.",
        "name": "limit",
        "in": "query"
    }, {
        "type": "string",
        "description": "Sort assets by their properties. A single sort field is allowed. Common sort options include:\n\n<ul><li>hostname|asc</li><li>product_type_desc|desc</li></ul>",
        "name": "sort",
        "in": "query"
    }, {
        "type": "string",
        "description": "Filter assets using an FQL query. Common filter options include:\n\n<ul><li>entity_type:'managed'</li><li>product_type_desc:'Workstation'</li><li>platform_name:'Windows'</li><li>last_seen_timestamp:>'now-7d'</li></ul>",
        "name": "filter",
        "in": "query"
    }]],
    ["get_iot_hosts", "GET", "/discover/entities/iot-hosts/v1", "Get details on IoT assets by providing one or more IDs.", "discover_iot", [{
        "type": "array",
        "items": {
            "type": "string"
        },
        "collectionFormat": "multi",
        "description": "One or more asset IDs (max: 100). Find asset IDs with GET `/discover/queries/iot-hosts/v1`",
        "name": "ids",
        "in": "query",
        "required": 1
    }]],
    ["query_iot_hosts", "GET", "/discover/queries/iot-hosts/v1", "Search for IoT assets in your environment by providing an FQL (Falcon Query Language) filter and paging details. Returns a set of asset IDs which match the filter criteria.", "discover_iot", [{
        "minimum": 0,
        "type": "integer",
        "description": "An offset used with the `limit` parameter to manage pagination of results. On your first request, don\u2019t provide an `offset`. On subsequent requests, provide the `offset` from the previous response to continue from that place in the results.",
        "name": "offset",
        "in": "query"
    }, {
        "maximum": 100,
        "minimum": 1,
        "type": "integer",
        "description": "The number of asset IDs to return in this response (min: 1, max: 100, default: 100). Use with the `offset` parameter to manage pagination of results.",
        "name": "limit",
        "in": "query"
    }, {
        "type": "string",
        "description": "Sort assets by their properties. A single sort field is allowed. Common sort options include:\n\n<ul><li>hostname|asc</li><li>product_type_desc|desc</li></ul>",
        "name": "sort",
        "in": "query"
    }, {
        "type": "string",
        "description": "Filter assets using an FQL query. Common filter options include:\n\n<ul><li>entity_type:'managed'</li><li>product_type_desc:'Workstation'</li><li>platform_name:'Windows'</li><li>last_seen_timestamp:>'now-7d'</li></ul>",
        "name": "filter",
        "in": "query"
    }]]
];