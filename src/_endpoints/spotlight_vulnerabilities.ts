/**
 * contains all method definitions for API: spotlight vulnerabilities
 * consumed and interpreted by Falcon.command(...)
 */
export var _spotlight_vulnerabilities_endpoints: Array<any> = [
    ["combinedQueryVulnerabilities", "GET", "/spotlight/combined/vulnerabilities/v1", "Search for Vulnerabilities in your environment by providing an FQL filter and paging details. Returns a set of Vulnerability entities which match the filter criteria", "spotlight_vulnerabilities", [{
        "type": "string",
        "description": "A pagination token used with the `limit` parameter to manage pagination of results. On your first request, don't provide an `after` token. On subsequent requests, provide the `after` token from the previous response to continue from that place in the results.",
        "name": "after",
        "in": "query"
    }, {
        "maximum": 5000,
        "minimum": 1,
        "type": "integer",
        "description": "The number of items to return in this response (default: 100, max: 5000). Use with the after parameter to manage pagination of results.",
        "name": "limit",
        "in": "query"
    }, {
        "type": "string",
        "description": "Sort vulnerabilities by their properties. Common sort options include:\n\n<ul><li>created_timestamp|desc</li><li>closed_timestamp|asc</li></ul>",
        "name": "sort",
        "in": "query"
    }, {
        "type": "string",
        "description": "Filter items using a query in Falcon Query Language (FQL). Wildcards * are unsupported. \n\nCommon filter options include:\n\n<ul><li>created_timestamp:>'2019-11-25T22:36:12Z'</li><li>closed_timestamp:>'2019-11-25T22:36:12Z'</li><li>aid:'8e7656b27d8c49a34a1af416424d6231'</li></ul>",
        "name": "filter",
        "in": "query",
        "required": 1
    }, {
        "type": "array",
        "items": {
            "type": "string"
        },
        "collectionFormat": "multi",
        "description": "Select various details blocks to be returned for each vulnerability entity. Supported values:\n\n<ul><li>host_info</li><li>remediation</li><li>cve</li><li>evaluation_logic</li></ul>",
        "name": "facet",
        "in": "query"
    }]],
    ["getRemediationsV2", "GET", "/spotlight/entities/remediations/v2", "Get details on remediation by providing one or more IDs", "spotlight_vulnerabilities", [{
        "type": "array",
        "items": {
            "type": "string"
        },
        "collectionFormat": "multi",
        "description": "One or more remediation IDs",
        "name": "ids",
        "in": "query",
        "required": 1
    }]],
    ["getVulnerabilities", "GET", "/spotlight/entities/vulnerabilities/v2", "Get details on vulnerabilities by providing one or more IDs", "spotlight_vulnerabilities", [{
        "type": "array",
        "items": {
            "type": "string"
        },
        "collectionFormat": "multi",
        "description": "One or more vulnerability IDs (max: 400). Find vulnerability IDs with GET /spotlight/queries/vulnerabilities/v1",
        "name": "ids",
        "in": "query",
        "required": 1
    }]],
    ["queryVulnerabilities", "GET", "/spotlight/queries/vulnerabilities/v1", "Search for Vulnerabilities in your environment by providing an FQL filter and paging details. Returns a set of Vulnerability IDs which match the filter criteria", "spotlight_vulnerabilities", [{
        "type": "string",
        "description": "A pagination token used with the `limit` parameter to manage pagination of results. On your first request, don't provide an `after` token. On subsequent requests, provide the `after` token from the previous response to continue from that place in the results.",
        "name": "after",
        "in": "query"
    }, {
        "maximum": 400,
        "minimum": 1,
        "type": "integer",
        "description": "The number of items to return in this response (default: 100, max: 400). Use with the after parameter to manage pagination of results.",
        "name": "limit",
        "in": "query"
    }, {
        "type": "string",
        "description": "Sort vulnerabilities by their properties. Common sort options include:\n\n<ul><li>created_timestamp|desc</li><li>closed_timestamp|asc</li></ul>",
        "name": "sort",
        "in": "query"
    }, {
        "type": "string",
        "description": "Filter items using a query in Falcon Query Language (FQL). Wildcards * are unsupported. \n\nCommon filter options include:\n\n<ul><li>created_timestamp:>'2019-11-25T22:36:12Z'</li><li>closed_timestamp:>'2019-11-25T22:36:12Z'</li><li>aid:'8e7656b27d8c49a34a1af416424d6231'</li></ul>",
        "name": "filter",
        "in": "query",
        "required": 1
    }]],
    ["getRemediations", "GET", "/spotlight/entities/remediations/v2", "Get details on remediations by providing one or more IDs", "spotlight_vulnerabilities", [{
        "type": "array",
        "items": {
            "type": "string"
        },
        "collectionFormat": "multi",
        "description": "One or more remediation IDs (max: 400).",
        "name": "ids",
        "in": "query",
        "required": 1
    }]]
];