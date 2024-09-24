/**
 * contains all method definitions for API: alerts
 * consumed and interpreted by Falcon.command(...)
 */
export const _alerts_endpoints: Array<any> = [
    ["PostAggregatesAlertsV1", "POST", "/alerts/aggregates/alerts/v1", "retrieves aggregates for Alerts across all CIDs", "alerts", [{
        "description": "request body takes a list of aggregation query requests",
        "name": "body",
        "in": "body",
        "required": 1
    }]],
    ["PostEntitiesAlertsV1", "POST", "/alerts/entities/alerts/v1", "retrieves all Alerts given their ids", "alerts", [{
        "name": "body",
        "in": "body",
        "required": 1
    }]],
    ["PatchEntitiesAlertsV1", "PATCH", "/alerts/entities/alerts/v1", "Perform actions on detections identified by detection ID(s) in request.\nEach action has a name and a description which describes what the action does.\n\nremove_tag - remove a tag from 1 or more detection(s)\nassign_to_user_id - assign 1 or more detection(s) to a user identified by user id (eg: user1@example.com)\nunassign - unassign an previously assigned user from 1 or more detection(s). The value passed to this action is ignored.\nnew_behavior_processed - adds a newly processed behavior to 1 or more detection(s)\nupdate_status - update status for 1 or more detection(s)\nassign_to_uuid - assign 1 or more detection(s) to a user identified by UUID\nadd_tag - add a tag to 1 or more detection(s)\nremove_tags_by_prefix - remove tags with given prefix from 1 or more detection(s)\nappend_comment - appends new comment to existing comments\nassign_to_name - assign 1 or more detection(s) to a user identified by user name\nshow_in_ui - shows 1 or more detection(s) on UI if set to true, hides otherwise. an empty/nil value is also valid\nskip_side_effects - internal only command to skip side effects during Beta phase\n", "alerts", [{
        "description": "request body takes a list of action parameter request that is applied against all \"ids\" provided",
        "name": "body",
        "in": "body",
        "required": 1
    }]],
    ["PatchEntitiesAlertsV2", "PATCH", "/alerts/entities/alerts/v2", "Perform actions on detections identified by detection ID(s) in request.\nEach action has a name and a description which describes what the action does.\n\nremove_tag - remove a tag from 1 or more detection(s)\nassign_to_user_id - assign 1 or more detection(s) to a user identified by user id (eg: user1@example.com)\nunassign - unassign an previously assigned user from 1 or more detection(s). The value passed to this action is ignored.\nnew_behavior_processed - adds a newly processed behavior to 1 or more detection(s)\nupdate_status - update status for 1 or more detection(s)\nassign_to_uuid - assign 1 or more detection(s) to a user identified by UUID\nadd_tag - add a tag to 1 or more detection(s)\nremove_tags_by_prefix - remove tags with given prefix from 1 or more detection(s)\nappend_comment - appends new comment to existing comments\nassign_to_name - assign 1 or more detection(s) to a user identified by user name\nshow_in_ui - shows 1 or more detection(s) on UI if set to true, hides otherwise. an empty/nil value is also valid\nskip_side_effects - internal only command to skip side effects during Beta phase\n", "alerts", [{
        "description": "request body takes a list of action parameter request that is applied against all \"ids\" provided",
        "name": "body",
        "in": "body",
        "required": 1
    }]],
    ["GetQueriesAlertsV1", "GET", "/alerts/queries/alerts/v1", "retrieves all Alerts ids that match a given query", "alerts", [{
        "type": "integer",
        "description": "The first detection to return, where `0` is the latest detection. Use with the `offset` parameter to manage pagination of results.",
        "name": "offset",
        "in": "query"
    }, {
        "maximum": 10000,
        "minimum": 0,
        "type": "integer",
        "description": "The maximum number of detections to return in this response (default: 100; max: 10000). Use with the `offset` parameter to manage pagination of results.",
        "name": "limit",
        "in": "query"
    }, {
        "type": "string",
        "description": "Sort detections in either `asc` (ascending) or `desc` (descending) order. For example: `status|asc` or `status|desc`.",
        "name": "sort",
        "in": "query"
    }, {
        "type": "string",
        "description": "Filter detections using a query in Falcon Query Language (FQL). An asterisk wildcard `*` includes all results. \n\nThe full list of valid filter options is extensive. Review it in our [documentation inside the Falcon console](https://falcon.crowdstrike.com/documentation/45/falcon-query-language-fql).",
        "name": "filter",
        "in": "query"
    }, {
        "type": "string",
        "description": "Search all detection metadata for the provided string",
        "name": "q",
        "in": "query"
    }]]
];