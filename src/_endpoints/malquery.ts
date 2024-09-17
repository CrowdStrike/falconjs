/**
 * contains all method definitions for API: malquery
 * consumed and interpreted by Falcon.command(...)
 */
export var _malquery_endpoints: Array<any> = [
    ["GetMalQueryQuotasV1", "GET", "/malquery/aggregates/quotas/v1", "Get information about search and download quotas in your environment", "malquery", []],
    ["PostMalQueryFuzzySearchV1", "POST", "/malquery/combined/fuzzy-search/v1", "Search Falcon MalQuery quickly, but with more potential for false positives. Search for a combination of hex patterns and strings in order to identify samples based upon file content at byte level granularity.", "malquery", [{
        "description": "Fuzzy search parameters. See model for more details.",
        "name": "body",
        "in": "body",
        "required": 1
    }]],
    ["GetMalQueryDownloadV1", "GET", "/malquery/entities/download-files/v1", "Download a file indexed by MalQuery. Specify the file using its SHA256. Only one file is supported at this time", "malquery", [{
        "type": "array",
        "items": {
            "type": "string"
        },
        "collectionFormat": "csv",
        "description": "The file SHA256.",
        "name": "ids",
        "in": "query",
        "required": 1
    }]],
    ["GetMalQueryMetadataV1", "GET", "/malquery/entities/metadata/v1", "Retrieve indexed files metadata by their hash", "malquery", [{
        "type": "array",
        "items": {
            "type": "string"
        },
        "collectionFormat": "csv",
        "description": "The file SHA256.",
        "name": "ids",
        "in": "query",
        "required": 1
    }]],
    ["GetMalQueryRequestV1", "GET", "/malquery/entities/requests/v1", "Check the status and results of an asynchronous request, such as hunt or exact-search. Supports a single request id at this time.", "malquery", [{
        "type": "array",
        "items": {
            "type": "string"
        },
        "collectionFormat": "csv",
        "description": "Identifier of a MalQuery request",
        "name": "ids",
        "in": "query",
        "required": 1
    }]],
    ["GetMalQueryEntitiesSamplesFetchV1", "GET", "/malquery/entities/samples-fetch/v1", "Fetch a zip archive with password 'infected' containing the samples. Call this once the /entities/samples-multidownload request has finished processing", "malquery", [{
        "type": "string",
        "description": "Multidownload job id",
        "name": "ids",
        "in": "query",
        "required": 1
    }]],
    ["PostMalQueryEntitiesSamplesMultidownloadV1", "POST", "/malquery/entities/samples-multidownload/v1", "Schedule samples for download. Use the result id with the /request endpoint to check if the download is ready after which you can call the /entities/samples-fetch to get the zip", "malquery", [{
        "description": "Download request. See model for more details.",
        "name": "body",
        "in": "body",
        "required": 1
    }]],
    ["PostMalQueryExactSearchV1", "POST", "/malquery/queries/exact-search/v1", "Search Falcon MalQuery for a combination of hex patterns and strings in order to identify samples based upon file content at byte level granularity. You can filter results on criteria such as file type, file size and first seen date. Returns a request id which can be used with the /request endpoint", "malquery", [{
        "description": "Exact search parameters. See model for more details.",
        "name": "body",
        "in": "body",
        "required": 1
    }]],
    ["PostMalQueryHuntV1", "POST", "/malquery/queries/hunt/v1", "Schedule a YARA-based search for execution. Returns a request id which can be used with the /request endpoint", "malquery", [{
        "description": "Hunt parameters. See model for more details.",
        "name": "body",
        "in": "body",
        "required": 1
    }]]
];