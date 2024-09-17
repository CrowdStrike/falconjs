/**
 * contains all method definitions for API: sensor download
 * consumed and interpreted by Falcon.command(...)
 */
export var _sensor_download_endpoints: Array<any> = [
    ["GetCombinedSensorInstallersByQuery", "GET", "/sensors/combined/installers/v1", "Get sensor installer details by provided query", "sensor_download", [{
        "type": "integer",
        "description": "The first item to return, where 0 is the latest item. Use with the limit parameter to manage pagination of results.",
        "name": "offset",
        "in": "query"
    }, {
        "type": "integer",
        "description": "The number of items to return in this response (default: 100, max: 500). Use with the offset parameter to manage pagination of results.",
        "name": "limit",
        "in": "query"
    }, {
        "type": "string",
        "description": "Sort items using their properties. Common sort options include:\n\n<ul><li>version|asc</li><li>release_date|desc</li></ul>",
        "name": "sort",
        "in": "query"
    }, {
        "type": "string",
        "description": "Filter items using a query in Falcon Query Language (FQL). An asterisk wildcard * includes all results.\n\nCommon filter options include:\n<ul><li>platform:\"windows\"</li><li>version:>\"5.2\"</li></ul>",
        "name": "filter",
        "in": "query"
    }]],
    ["DownloadSensorInstallerById", "GET", "/sensors/entities/download-installer/v1", "Download sensor installer by SHA256 ID", "sensor_download", [{
        "type": "string",
        "description": "SHA256 of the installer to download",
        "name": "id",
        "in": "query",
        "required": 1
    }]],
    ["GetSensorInstallersEntities", "GET", "/sensors/entities/installers/v1", "Get sensor installer details by provided SHA256 IDs", "sensor_download", [{
        "type": "array",
        "items": {
            "type": "string"
        },
        "collectionFormat": "multi",
        "description": "The IDs of the installers",
        "name": "ids",
        "in": "query",
        "required": 1
    }]],
    ["GetSensorInstallersCCIDByQuery", "GET", "/sensors/queries/installers/ccid/v1", "Get CCID to use with sensor installers", "sensor_download", []],
    ["GetSensorInstallersByQuery", "GET", "/sensors/queries/installers/v1", "Get sensor installer IDs by provided query", "sensor_download", [{
        "type": "integer",
        "description": "The first item to return, where 0 is the latest item. Use with the limit parameter to manage pagination of results.",
        "name": "offset",
        "in": "query"
    }, {
        "type": "integer",
        "description": "The number of items to return in this response (default: 100, max: 500). Use with the offset parameter to manage pagination of results.",
        "name": "limit",
        "in": "query"
    }, {
        "type": "string",
        "description": "Sort items using their properties. Common sort options include:\n\n<ul><li>version|asc</li><li>release_date|desc</li></ul>",
        "name": "sort",
        "in": "query"
    }, {
        "type": "string",
        "description": "Filter items using a query in Falcon Query Language (FQL). An asterisk wildcard * includes all results.\n\nCommon filter options include:\n<ul><li>platform:\"windows\"</li><li>version:>\"5.2\"</li></ul>",
        "name": "filter",
        "in": "query"
    }]]
];