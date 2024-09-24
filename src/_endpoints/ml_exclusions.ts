/**
 * contains all method definitions for API: ml exclusions
 * consumed and interpreted by Falcon.command(...)
 */
export const _ml_exclusions_endpoints: Array<any> = [
    [
        "getMLExclusionsV1",
        "GET",
        "/policy/entities/ml-exclusions/v1",
        "Get a set of ML Exclusions by specifying their IDs",
        "ml_exclusions",
        [
            {
                type: "array",
                items: {
                    type: "string",
                },
                collectionFormat: "multi",
                description: "The ids of the exclusions to retrieve",
                name: "ids",
                in: "query",
                required: 1,
            },
        ],
    ],
    [
        "createMLExclusionsV1",
        "POST",
        "/policy/entities/ml-exclusions/v1",
        "Create the ML exclusions",
        "ml_exclusions",
        [
            {
                name: "body",
                in: "body",
                required: 1,
            },
        ],
    ],
    [
        "updateMLExclusionsV1",
        "PATCH",
        "/policy/entities/ml-exclusions/v1",
        "Update the ML exclusions",
        "ml_exclusions",
        [
            {
                name: "body",
                in: "body",
                required: 1,
            },
        ],
    ],
    [
        "deleteMLExclusionsV1",
        "DELETE",
        "/policy/entities/ml-exclusions/v1",
        "Delete the ML exclusions by id",
        "ml_exclusions",
        [
            {
                type: "array",
                items: {
                    type: "string",
                },
                collectionFormat: "multi",
                description: "The ids of the exclusions to delete",
                name: "ids",
                in: "query",
                required: 1,
            },
            {
                type: "string",
                description: "Explains why this exclusions was deleted",
                name: "comment",
                in: "query",
            },
        ],
    ],
    [
        "queryMLExclusionsV1",
        "GET",
        "/policy/queries/ml-exclusions/v1",
        "Search for ML exclusions.",
        "ml_exclusions",
        [
            {
                type: "string",
                description: "The filter expression that should be used to limit the results.",
                name: "filter",
                in: "query",
            },
            {
                type: "integer",
                description: "The offset to start retrieving records from",
                name: "offset",
                in: "query",
            },
            {
                type: "integer",
                description: "The maximum records to return. [1-500]",
                name: "limit",
                in: "query",
            },
            {
                enum: [
                    "applied_globally.asc",
                    "applied_globally.desc",
                    "created_by.asc",
                    "created_by.desc",
                    "created_on.asc",
                    "created_on.desc",
                    "last_modified.asc",
                    "last_modified.desc",
                    "modified_by.asc",
                    "modified_by.desc",
                    "value.asc",
                    "value.desc",
                ],
                type: "string",
                description: "The sort expression that should be used to sort the results.",
                name: "sort",
                in: "query",
            },
        ],
    ],
];
