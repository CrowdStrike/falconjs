/**
 * contains all method definitions for API: event streams
 * consumed and interpreted by Falcon.command(...)
 */
export var _event_streams_endpoints: Array<any> = [
    ["refreshActiveStreamSession", "POST", "/sensors/entities/datafeed-actions/v1/{}", "Refresh an active event stream. Use the URL shown in a GET /sensors/entities/datafeed/v2 response.", "event_streams", [{
        "type": "string",
        "description": "Action name. Allowed value is refresh_active_stream_session.",
        "name": "action_name",
        "in": "query",
        "required": 1
    }, {
        "type": "string",
        "description": "Label that identifies your connection. Max: 32 alphanumeric characters (a-z, A-Z, 0-9).",
        "name": "appId",
        "in": "query",
        "required": 1
    }, {
        "type": "integer",
        "description": "Partition to request data for.",
        "name": "partition",
        "in": "path",
        "required": 1
    }]],
    ["listAvailableStreamsOAuth2", "GET", "/sensors/entities/datafeed/v2", "Discover all event streams in your environment", "event_streams", [{
        "type": "string",
        "description": "Label that identifies your connection. Max: 32 alphanumeric characters (a-z, A-Z, 0-9).",
        "name": "appId",
        "in": "query",
        "required": 1
    }, {
        "type": "string",
        "description": "Format for streaming events. Valid values: json, flatjson",
        "name": "format",
        "in": "query"
    }]]
];