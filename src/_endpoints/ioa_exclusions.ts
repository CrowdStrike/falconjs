/**
 * contains all method definitions for API: ioa exclusions
 * consumed and interpreted by Falcon.command(...)
 */
export const _ioa_exclusions_endpoints: Array<any> = [
    [
        "getIOAExclusionsV1",
        "GET",
        "/policy/entities/ioa-exclusions/v1",
        "Get a set of IOA Exclusions by specifying their IDs",
        "ioa_exclusions",
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
        "createIOAExclusionsV1",
        "POST",
        "/policy/entities/ioa-exclusions/v1",
        "Create the IOA exclusions",
        "ioa_exclusions",
        [
            {
                name: "body",
                in: "body",
                required: 1,
            },
        ],
    ],
    [
        "updateIOAExclusionsV1",
        "PATCH",
        "/policy/entities/ioa-exclusions/v1",
        "Update the IOA exclusions",
        "ioa_exclusions",
        [
            {
                name: "body",
                in: "body",
                required: 1,
            },
        ],
    ],
    [
        "deleteIOAExclusionsV1",
        "DELETE",
        "/policy/entities/ioa-exclusions/v1",
        "Delete the IOA exclusions by id",
        "ioa_exclusions",
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
        "queryIOAExclusionsV1",
        "GET",
        "/policy/queries/ioa-exclusions/v1",
        "Search for IOA exclusions.",
        "ioa_exclusions",
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
                    "name.asc",
                    "name.desc",
                    "pattern_id.asc",
                    "pattern_id.desc",
                    "pattern_name.asc",
                    "pattern_name.desc",
                ],
                type: "string",
                description: "The sort expression that should be used to sort the results.",
                name: "sort",
                in: "query",
            },
        ],
    ],
];
