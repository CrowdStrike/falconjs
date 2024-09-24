/**
 * contains all method definitions for API: detects
 * consumed and interpreted by Falcon.command(...)
 */
export const _detects_endpoints: Array<any> = [
    [
        "GetAggregateDetects",
        "POST",
        "/detects/aggregates/detects/GET/v1",
        "Get detect aggregates as specified via json in request body.",
        "detects",
        [
            {
                description: "Query criteria and settings",
                name: "body",
                in: "body",
                required: 1,
            },
        ],
    ],
    [
        "UpdateDetectsByIdsV2",
        "PATCH",
        "/detects/entities/detects/v2",
        "Modify the state, assignee, and visibility of detections",
        "detects",
        [
            {
                description:
                    "This endpoint modifies attributes (state and assignee) of detections. \n\n" +
                    "This endpoint accepts a query formatted as a JSON array of key-value pairs. " +
                    "You can update one or more attributes one or more detections with a single request.\n\n" +
                    "**`assigned_to_uuid` values**\n\nA user ID, such as `1234567891234567891`\n\n**`ids` values**\n\n" +
                    "One or more detection IDs, which you can find with the `/detects/queries/detects/v1` endpoint, " +
                    "the Falcon console, or the Streaming API.\n\n**`show_in_ui` values**\n\n- `true`: " +
                    "This detection is displayed in Falcon\n- `false`: This detection is not displayed in Falcon. " +
                    "Most commonly used together with the `status` key's `false_positive` value.\n\n**`status` " +
                    "values**\n\n- `new`\n- `in_progress`\n- `true_positive`\n- `false_positive`\n- `ignored`\n\n**`comment` " +
                    "values**\nOptional comment to add to the detection. Comments are displayed with the detection in " +
                    "Falcon and usually used to provide context or notes for other Falcon users. " +
                    "A detection can have multiple comments over time.",
                name: "body",
                in: "body",
                required: 1,
            },
        ],
    ],
    [
        "GetDetectSummaries",
        "POST",
        "/detects/entities/summaries/GET/v1",
        "View information about detections",
        "detects",
        [
            {
                description:
                    "View key attributes of detections, including the associated host, " +
                    "[disposition](https://falcon.crowdstrike.com/support/documentation/2/query-api-reference#patterndispositionvalue), " +
                    "objective/tactic/technique, adversary, and more. Specify one or more detection IDs (max 1000 per request). " +
                    "Find detection IDs with the `/detects/queries/detects/v1` endpoint, the Falcon console, or the Streaming API.",
                name: "body",
                in: "body",
                required: 1,
            },
        ],
    ],
    [
        "QueryDetects",
        "GET",
        "/detects/queries/detects/v1",
        "Search for detection IDs that match a given query",
        "detects",
        [
            {
                type: "integer",
                description: "The first detection to return, where `0` is the latest detection. Use with the `limit` " + "parameter to manage pagination of results.",
                name: "offset",
                in: "query",
            },
            {
                maximum: 9999,
                minimum: 0,
                type: "integer",
                description: "The maximum number of detections to return in this response (default: 9999; max: 9999). " + "Use with the `offset` parameter to manage pagination of results.",
                name: "limit",
                in: "query",
            },
            {
                type: "string",
                description:
                    "Sort detections using these options:\n\n- `first_behavior`: Timestamp of the first " +
                    "behavior associated with this detection\n- `last_behavior`: Timestamp of the last behavior associated " +
                    "with this detection\n- `max_severity`: Highest severity of the behaviors associated with this detection\n" +
                    "- `max_confidence`: Highest confidence of the behaviors associated with this detection\n- `adversary_id`: " +
                    "ID of the adversary associated with this detection, if any\n- `devices.hostname`: Hostname of the host " +
                    "where this detection was detected\n\nSort either `asc` (ascending) or `desc` (descending). " +
                    "For example: `last_behavior|asc`",
                name: "sort",
                in: "query",
            },
            {
                type: "string",
                description:
                    "Filter detections using a query in Falcon Query Language (FQL) An asterisk wildcard `*` " +
                    "includes all results. \n\nCommon filter options include:\n\n- `status`\n- `device.device_id`\n" +
                    "- `max_severity`\n\nThe full list of valid filter options is extensive. " +
                    "Review it in our [documentation inside the Falcon console]" +
                    "(https://falcon.crowdstrike.com/documentation/45/falcon-query-language-fql).",
                name: "filter",
                in: "query",
            },
            {
                type: "string",
                description: "Search all detection metadata for the provided string",
                name: "q",
                in: "query",
            },
        ],
    ],
];
