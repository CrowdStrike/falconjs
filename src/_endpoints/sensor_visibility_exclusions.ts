/**
 * contains all method definitions for API: sensor visibility exclusions
 * consumed and interpreted by Falcon.command(...)
 */
export var _sensor_visibility_exclusions_endpoints: Array<any> = [
    ["getSensorVisibilityExclusionsV1", "GET", "/policy/entities/sv-exclusions/v1", "Get a set of Sensor Visibility Exclusions by specifying their IDs", "sensor_visibility_exclusions", [{
        "type": "array",
        "items": {
            "type": "string"
        },
        "collectionFormat": "multi",
        "description": "The ids of the exclusions to retrieve",
        "name": "ids",
        "in": "query",
        "required": 1
    }]],
    ["createSVExclusionsV1", "POST", "/policy/entities/sv-exclusions/v1", "Create the sensor visibility exclusions", "sensor_visibility_exclusions", [{
        "name": "body",
        "in": "body",
        "required": 1
    }]],
    ["updateSensorVisibilityExclusionsV1", "PATCH", "/policy/entities/sv-exclusions/v1", "Update the sensor visibility exclusions", "sensor_visibility_exclusions", [{
        "name": "body",
        "in": "body",
        "required": 1
    }]],
    ["deleteSensorVisibilityExclusionsV1", "DELETE", "/policy/entities/sv-exclusions/v1", "Delete the sensor visibility exclusions by id", "sensor_visibility_exclusions", [{
        "type": "array",
        "items": {
            "type": "string"
        },
        "collectionFormat": "multi",
        "description": "The ids of the exclusions to delete",
        "name": "ids",
        "in": "query",
        "required": 1
    }, {
        "type": "string",
        "description": "Explains why this exclusions was deleted",
        "name": "comment",
        "in": "query"
    }]],
    ["querySensorVisibilityExclusionsV1", "GET", "/policy/queries/sv-exclusions/v1", "Search for sensor visibility exclusions.", "sensor_visibility_exclusions", [{
        "type": "string",
        "description": "The filter expression that should be used to limit the results.",
        "name": "filter",
        "in": "query"
    }, {
        "type": "integer",
        "description": "The offset to start retrieving records from",
        "name": "offset",
        "in": "query"
    }, {
        "type": "integer",
        "description": "The maximum records to return. [1-500]",
        "name": "limit",
        "in": "query"
    }, {
        "enum": ["applied_globally.asc", "applied_globally.desc", "created_by.asc", "created_by.desc", "created_on.asc", "created_on.desc", "last_modified.asc", "last_modified.desc", "modified_by.asc", "modified_by.desc", "value.asc", "value.desc"],
        "type": "string",
        "description": "The sort expression that should be used to sort the results.",
        "name": "sort",
        "in": "query"
    }]]
];