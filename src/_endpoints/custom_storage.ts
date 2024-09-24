/**
 * contains all method definitions for API: custom storage
 * consumed and interpreted by Falcon.command(...)
 */
export const _custom_storage_endpoints: Array<any> = [
    ["ListObjects", "GET", "/customobjects/v1/collections/{collection_name}/objects", "List the object keys in the specified collection in alphabetical order", "custom_storage", [{
        "maxLength": 32,
        "minLength": 32,
        "type": "string",
        "description": "The id of the app the collection belongs to. This will map to the namespace of the collection",
        "name": "X-CS-APP-ID",
        "in": "header"
    }, {
        "maxLength": 255,
        "minLength": 1,
        "type": "string",
        "description": "The name of the collection",
        "name": "collection_name",
        "in": "path",
        "required": 1
    }, {
        "maxLength": 1000,
        "minLength": 1,
        "type": "string",
        "description": "The end key to end listing to",
        "name": "end",
        "in": "query",
        "allowEmptyValue": 1
    }, {
        "type": "integer",
        "description": "The limit of results to return",
        "name": "limit",
        "in": "query",
        "allowEmptyValue": 1
    }, {
        "maxLength": 255,
        "minLength": 1,
        "type": "string",
        "description": "The name of the namespace the collection belongs to",
        "name": "X-CS-ADB-NAMESPACE",
        "in": "header",
        "required": 1
    }, {
        "maxLength": 1000,
        "minLength": 1,
        "type": "string",
        "description": "The start key to start listing from",
        "name": "start",
        "in": "query",
        "allowEmptyValue": 1
    }]],
    ["SearchObjects", "POST", "/customobjects/v1/collections/{collection_name}/objects", "Search for objects that match the specified filter criteria (returns metadata, not actual objects)", "custom_storage", [{
        "maxLength": 32,
        "minLength": 32,
        "type": "string",
        "description": "The id of the app the collection belongs to. This will map to the namespace of the collection",
        "name": "X-CS-APP-ID",
        "in": "header"
    }, {
        "maxLength": 255,
        "minLength": 1,
        "type": "string",
        "description": "The name of the collection",
        "name": "collection_name",
        "in": "path",
        "required": 1
    }, {
        "maxLength": 255,
        "minLength": 1,
        "type": "string",
        "description": "The filter to limit the returned results.",
        "name": "filter",
        "in": "query",
        "required": 1
    }, {
        "type": "integer",
        "description": "The limit of results to return",
        "name": "limit",
        "in": "query",
        "allowEmptyValue": 1
    }, {
        "maxLength": 255,
        "minLength": 1,
        "type": "string",
        "description": "The name of the namespace the collection belongs to",
        "name": "X-CS-ADB-NAMESPACE",
        "in": "header",
        "required": 1
    }, {
        "type": "integer",
        "description": "The offset of results to return",
        "name": "offset",
        "in": "query",
        "allowEmptyValue": 1
    }, {
        "maxLength": 255,
        "minLength": 1,
        "type": "string",
        "description": "The sort order for the returned results.",
        "name": "sort",
        "in": "query"
    }]],
    ["GetObject", "GET", "/customobjects/v1/collections/{collection_name}/objects/{object_key}", "Get the bytes for the specified object", "custom_storage", [{
        "maxLength": 32,
        "minLength": 32,
        "type": "string",
        "description": "The id of the app the collection belongs to. This will map to the namespace of the collection",
        "name": "X-CS-APP-ID",
        "in": "header"
    }, {
        "maxLength": 255,
        "minLength": 1,
        "type": "string",
        "description": "The name of the collection",
        "name": "collection_name",
        "in": "path",
        "required": 1
    }, {
        "maxLength": 255,
        "minLength": 1,
        "type": "string",
        "description": "The name of the namespace the collection belongs to",
        "name": "X-CS-ADB-NAMESPACE",
        "in": "header",
        "required": 1
    }, {
        "maxLength": 1000,
        "minLength": 1,
        "type": "string",
        "description": "The object key",
        "name": "object_key",
        "in": "path",
        "required": 1
    }]],
    ["PutObject", "PUT", "/customobjects/v1/collections/{collection_name}/objects/{object_key}", "Put the specified new object at the given key or overwrite an existing object at the given key", "custom_storage", [{
        "name": "body",
        "in": "body",
        "required": 1
    }, {
        "maxLength": 32,
        "minLength": 32,
        "type": "string",
        "description": "The id of the app the collection belongs to. This will map to the namespace of the collection",
        "name": "X-CS-APP-ID",
        "in": "header"
    }, {
        "maxLength": 255,
        "minLength": 1,
        "type": "string",
        "description": "The name of the collection",
        "name": "collection_name",
        "in": "path",
        "required": 1
    }, {
        "type": "boolean",
        "description": "If false, run the operation as normal.  If true, validate that the request *would* succeed, but don't execute it.",
        "name": "dry_run",
        "in": "query",
        "allowEmptyValue": 1
    }, {
        "maxLength": 255,
        "minLength": 1,
        "type": "string",
        "description": "The name of the namespace the collection belongs to",
        "name": "X-CS-ADB-NAMESPACE",
        "in": "header",
        "required": 1
    }, {
        "maxLength": 1000,
        "minLength": 1,
        "type": "string",
        "description": "The object key",
        "name": "object_key",
        "in": "path",
        "required": 1
    }, {
        "minLength": 1,
        "type": "string",
        "description": "The version of the collection schema",
        "name": "schema_version",
        "in": "query",
        "required": 1
    }]],
    ["DeleteObject", "DELETE", "/customobjects/v1/collections/{collection_name}/objects/{object_key}", "Delete the specified object", "custom_storage", [{
        "maxLength": 32,
        "minLength": 32,
        "type": "string",
        "description": "The id of the app the collection belongs to. This will map to the namespace of the collection",
        "name": "X-CS-APP-ID",
        "in": "header"
    }, {
        "maxLength": 255,
        "minLength": 1,
        "type": "string",
        "description": "The name of the collection",
        "name": "collection_name",
        "in": "path",
        "required": 1
    }, {
        "type": "boolean",
        "description": "If false, run the operation as normal.  If true, validate that the request *would* succeed, but don't execute it.",
        "name": "dry_run",
        "in": "query",
        "allowEmptyValue": 1
    }, {
        "maxLength": 255,
        "minLength": 1,
        "type": "string",
        "description": "The name of the namespace the collection belongs to",
        "name": "X-CS-ADB-NAMESPACE",
        "in": "header",
        "required": 1
    }, {
        "maxLength": 1000,
        "minLength": 1,
        "type": "string",
        "description": "The object key",
        "name": "object_key",
        "in": "path",
        "required": 1
    }]],
    ["GetObjectMetadata", "GET", "/customobjects/v1/collections/{collection_name}/objects/{object_key}/metadata", "Get the metadata for the specified object", "custom_storage", [{
        "maxLength": 32,
        "minLength": 32,
        "type": "string",
        "description": "The id of the app the collection belongs to. This will map to the namespace of the collection",
        "name": "X-CS-APP-ID",
        "in": "header"
    }, {
        "maxLength": 255,
        "minLength": 1,
        "type": "string",
        "description": "The name of the collection",
        "name": "collection_name",
        "in": "path",
        "required": 1
    }, {
        "maxLength": 255,
        "minLength": 1,
        "type": "string",
        "description": "The name of the namespace the collection belongs to",
        "name": "X-CS-ADB-NAMESPACE",
        "in": "header",
        "required": 1
    }, {
        "maxLength": 1000,
        "minLength": 1,
        "type": "string",
        "description": "The object key",
        "name": "object_key",
        "in": "path",
        "required": 1
    }]]
];