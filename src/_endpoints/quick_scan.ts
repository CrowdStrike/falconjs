/**
 * contains all method definitions for API: quick scan
 * consumed and interpreted by Falcon.command(...)
 */
export const _quick_scan_endpoints: Array<any> = [
    ["GetScansAggregates", "POST", "/scanner/aggregates/scans/GET/v1", "Get scans aggregations as specified via json in request body.", "quick_scan", [{
        "name": "body",
        "in": "body",
        "required": 1
    }]],
    ["GetScans", "GET", "/scanner/entities/scans/v1", "Check the status of a volume scan. Time required for analysis increases with the number of samples in a volume but usually it should take less than 1 minute", "quick_scan", [{
        "type": "array",
        "items": {
            "type": "string"
        },
        "collectionFormat": "csv",
        "description": "ID of a submitted scan",
        "name": "ids",
        "in": "query",
        "required": 1
    }]],
    ["ScanSamples", "POST", "/scanner/entities/scans/v1", "Submit a volume of files for ml scanning. Time required for analysis increases with the number of samples in a volume but usually it should take less than 1 minute", "quick_scan", [{
        "description": "Submit a batch of SHA256s for ml scanning. The samples must have been previously uploaded through `/samples/entities/samples/v3`",
        "name": "body",
        "in": "body",
        "required": 1
    }]],
    ["QuerySubmissionsMixin0", "GET", "/scanner/queries/scans/v1", "Find IDs for submitted scans by providing an FQL filter and paging details. Returns a set of volume IDs that match your criteria.", "quick_scan", [{
        "type": "string",
        "description": "Optional filter and sort criteria in the form of an FQL query. For more information about FQL queries, see [our FQL documentation in Falcon](https://falcon.crowdstrike.com/support/documentation/45/falcon-query-language-feature-guide).",
        "name": "filter",
        "in": "query"
    }, {
        "type": "string",
        "description": "The offset to start retrieving submissions from.",
        "name": "offset",
        "in": "query"
    }, {
        "type": "integer",
        "description": "Maximum number of volume IDs to return. Max: 5000.",
        "name": "limit",
        "in": "query"
    }, {
        "type": "string",
        "description": "Sort order: `asc` or `desc`.",
        "name": "sort",
        "in": "query"
    }]]
];