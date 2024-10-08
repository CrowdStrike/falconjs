/**
 * contains all method definitions for API: firewall management
 * consumed and interpreted by Falcon.command(...)
 */
export const _firewall_management_endpoints: Array<any> = [
    [
        "aggregate_events",
        "POST",
        "/fwmgr/aggregates/events/GET/v1",
        "Aggregate events for customer",
        "firewall_management",
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
        "aggregate_policy_rules",
        "POST",
        "/fwmgr/aggregates/policy-rules/GET/v1",
        "Aggregate rules within a policy for customer",
        "firewall_management",
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
        "aggregate_rule_groups",
        "POST",
        "/fwmgr/aggregates/rule-groups/GET/v1",
        "Aggregate rule groups for customer",
        "firewall_management",
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
        "aggregate_rules",
        "POST",
        "/fwmgr/aggregates/rules/GET/v1",
        "Aggregate rules for customer",
        "firewall_management",
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
        "get_events",
        "GET",
        "/fwmgr/entities/events/v1",
        "Get events entities by ID and optionally version",
        "firewall_management",
        [
            {
                type: "array",
                items: {
                    type: "string",
                },
                collectionFormat: "multi",
                description: "The events to retrieve, identified by ID",
                name: "ids",
                in: "query",
                required: 1,
            },
        ],
    ],
    [
        "get_firewall_fields",
        "GET",
        "/fwmgr/entities/firewall-fields/v1",
        "Get the firewall field specifications by ID",
        "firewall_management",
        [
            {
                type: "array",
                items: {
                    type: "string",
                },
                collectionFormat: "multi",
                description: "The IDs of the rule types to retrieve",
                name: "ids",
                in: "query",
                required: 1,
            },
        ],
    ],
    [
        "get_network_locations_details",
        "GET",
        "/fwmgr/entities/network-locations-details/v1",
        "Get network locations entities by ID",
        "firewall_management",
        [
            {
                type: "array",
                items: {
                    type: "string",
                },
                collectionFormat: "multi",
                description: "The events to retrieve, identified by ID",
                name: "ids",
                in: "query",
                required: 1,
            },
        ],
    ],
    [
        "update_network_locations_metadata",
        "POST",
        "/fwmgr/entities/network-locations-metadata/v1",
        "Updates the network locations metadata such as polling_intervals for the cid",
        "firewall_management",
        [
            {
                type: "string",
                description: "Audit log comment for this action",
                name: "comment",
                in: "query",
            },
            {
                name: "body",
                in: "body",
                required: 1,
            },
        ],
    ],
    [
        "update_network_locations_precedence",
        "POST",
        "/fwmgr/entities/network-locations-precedence/v1",
        "Updates the network locations precedence according to the list of ids provided.",
        "firewall_management",
        [
            {
                type: "string",
                description: "Audit log comment for this action",
                name: "comment",
                in: "query",
            },
            {
                name: "body",
                in: "body",
                required: 1,
            },
        ],
    ],
    [
        "get_network_locations",
        "GET",
        "/fwmgr/entities/network-locations/v1",
        "Get a summary of network locations entities by ID",
        "firewall_management",
        [
            {
                type: "array",
                items: {
                    type: "string",
                },
                collectionFormat: "multi",
                description: "The events to retrieve, identified by ID",
                name: "ids",
                in: "query",
                required: 1,
            },
        ],
    ],
    [
        "create_network_locations",
        "POST",
        "/fwmgr/entities/network-locations/v1",
        "Create new network locations provided, and return the ID.",
        "firewall_management",
        [
            {
                type: "string",
                description: "A network location ID from which to copy location. If this is provided then the body of the request is ignored.",
                name: "clone_id",
                in: "query",
            },
            {
                type: "boolean",
                description: "A boolean to determine whether the cloned location needs to be added to the same firewall rules that original location is added to.",
                name: "add_fw_rules",
                in: "query",
            },
            {
                type: "string",
                description: "Audit log comment for this action",
                name: "comment",
                in: "query",
            },
            {
                name: "body",
                in: "body",
                required: 1,
            },
        ],
    ],
    [
        "update_network_locations",
        "PATCH",
        "/fwmgr/entities/network-locations/v1",
        "Updates the network locations provided, and return the ID.",
        "firewall_management",
        [
            {
                type: "string",
                description: "Audit log comment for this action",
                name: "comment",
                in: "query",
            },
            {
                name: "body",
                in: "body",
                required: 1,
            },
        ],
    ],
    [
        "upsert_network_locations",
        "PUT",
        "/fwmgr/entities/network-locations/v1",
        "Updates the network locations provided, and return the ID.",
        "firewall_management",
        [
            {
                type: "string",
                description: "Audit log comment for this action",
                name: "comment",
                in: "query",
            },
            {
                name: "body",
                in: "body",
                required: 1,
            },
        ],
    ],
    [
        "delete_network_locations",
        "DELETE",
        "/fwmgr/entities/network-locations/v1",
        "Delete network location entities by ID.",
        "firewall_management",
        [
            {
                type: "array",
                items: {
                    type: "string",
                },
                collectionFormat: "multi",
                description: "The IDs of the network locations to be deleted",
                name: "ids",
                in: "query",
                required: 1,
            },
        ],
    ],
    [
        "get_platforms",
        "GET",
        "/fwmgr/entities/platforms/v1",
        "Get platforms by ID, e.g., windows or mac or droid",
        "firewall_management",
        [
            {
                type: "array",
                items: {
                    type: "string",
                },
                collectionFormat: "multi",
                description: "The IDs of the platforms to retrieve",
                name: "ids",
                in: "query",
                required: 1,
            },
        ],
    ],
    [
        "get_policy_containers",
        "GET",
        "/fwmgr/entities/policies/v1",
        "Get policy container entities by policy ID",
        "firewall_management",
        [
            {
                type: "array",
                items: {
                    type: "string",
                },
                collectionFormat: "multi",
                description: "The policy container(s) to retrieve, identified by policy ID",
                name: "ids",
                in: "query",
                required: 1,
            },
        ],
    ],
    [
        "update_policy_container_v1",
        "PUT",
        "/fwmgr/entities/policies/v1",
        "Update an identified policy container. WARNING: This endpoint is deprecated in favor of v2, using this endpoint could disable your local logging setting.",
        "firewall_management",
        [
            {
                name: "body",
                in: "body",
                required: 1,
            },
        ],
    ],
    [
        "update_policy_container",
        "PUT",
        "/fwmgr/entities/policies/v2",
        "Update an identified policy container, including local logging functionality.",
        "firewall_management",
        [
            {
                name: "body",
                in: "body",
                required: 1,
            },
        ],
    ],
    [
        "get_rule_groups",
        "GET",
        "/fwmgr/entities/rule-groups/v1",
        "Get rule group entities by ID. These groups do not contain their rule entites, just the rule IDs in precedence order.",
        "firewall_management",
        [
            {
                type: "array",
                items: {
                    type: "string",
                },
                collectionFormat: "multi",
                description: "The IDs of the rule groups to retrieve",
                name: "ids",
                in: "query",
                required: 1,
            },
        ],
    ],
    [
        "create_rule_group",
        "POST",
        "/fwmgr/entities/rule-groups/v1",
        "Create new rule group on a platform for a customer with a name and description, and return the ID",
        "firewall_management",
        [
            {
                type: "string",
                description: "A rule group ID from which to copy rules. If this is provided then the 'rules' property of the body is ignored.",
                name: "clone_id",
                in: "query",
            },
            {
                type: "string",
                description: "If this flag is set to true then the rules will be cloned from the clone_id from the CrowdStrike Firewall Rule Groups Library.",
                name: "library",
                in: "query",
            },
            {
                type: "string",
                description: "Audit log comment for this action",
                name: "comment",
                in: "query",
            },
            {
                name: "body",
                in: "body",
                required: 1,
            },
        ],
    ],
    [
        "update_rule_group",
        "PATCH",
        "/fwmgr/entities/rule-groups/v1",
        "Update name, description, or enabled status of a rule group, or create, edit, delete, or reorder rules",
        "firewall_management",
        [
            {
                type: "string",
                description: "Audit log comment for this action",
                name: "comment",
                in: "query",
            },
            {
                name: "body",
                in: "body",
                required: 1,
            },
        ],
    ],
    [
        "delete_rule_groups",
        "DELETE",
        "/fwmgr/entities/rule-groups/v1",
        "Delete rule group entities by ID",
        "firewall_management",
        [
            {
                type: "array",
                items: {
                    type: "string",
                },
                collectionFormat: "multi",
                description: "The IDs of the rule groups to be deleted",
                name: "ids",
                in: "query",
                required: 1,
            },
            {
                type: "string",
                description: "Audit log comment for this action",
                name: "comment",
                in: "query",
            },
        ],
    ],
    [
        "create_rule_group_validation",
        "POST",
        "/fwmgr/entities/rule-groups/validation/v1",
        "Validates the request of creating a new rule group on a platform for a customer with a name and description",
        "firewall_management",
        [
            {
                type: "string",
                description: "A rule group ID from which to copy rules. If this is provided then the 'rules' property of the body is ignored.",
                name: "clone_id",
                in: "query",
            },
            {
                type: "string",
                description: "If this flag is set to true then the rules will be cloned from the clone_id from the CrowdStrike Firewall Rule Groups Library.",
                name: "library",
                in: "query",
            },
            {
                type: "string",
                description: "Audit log comment for this action",
                name: "comment",
                in: "query",
            },
            {
                name: "body",
                in: "body",
                required: 1,
            },
        ],
    ],
    [
        "update_rule_group_validation",
        "PATCH",
        "/fwmgr/entities/rule-groups/validation/v1",
        "Validates the request of updating name, description, or enabled status of a rule group, or create, edit, delete, or reorder rules",
        "firewall_management",
        [
            {
                type: "string",
                description: "Audit log comment for this action",
                name: "comment",
                in: "query",
            },
            {
                name: "body",
                in: "body",
                required: 1,
            },
        ],
    ],
    [
        "get_rules",
        "GET",
        "/fwmgr/entities/rules/v1",
        "Get rule entities by ID (64-bit unsigned int as decimal string) or Family ID (32-character hexadecimal string)",
        "firewall_management",
        [
            {
                type: "array",
                items: {
                    type: "string",
                },
                collectionFormat: "multi",
                description: "The rules to retrieve, identified by ID",
                name: "ids",
                in: "query",
                required: 1,
            },
        ],
    ],
    [
        "validate_filepath_pattern",
        "POST",
        "/fwmgr/entities/rules/validate-filepath/v1",
        "Validates that the test pattern matches the executable filepath glob pattern.",
        "firewall_management",
        [
            {
                name: "body",
                in: "body",
                required: 1,
            },
        ],
    ],
    [
        "query_events",
        "GET",
        "/fwmgr/queries/events/v1",
        "Find all event IDs matching the query with filter",
        "firewall_management",
        [
            {
                type: "string",
                description: "Possible order by fields: ",
                name: "sort",
                in: "query",
            },
            {
                type: "string",
                description:
                    "FQL query specifying the filter parameters. Filter term criteria: enabled, platform, name, description, etc TODO. Filter range criteria: created_on, modified_on; use any common date format, such as '2010-05-15T14:55:21.892315096Z'.",
                name: "filter",
                in: "query",
            },
            {
                type: "string",
                description: "Match query criteria, which includes all the filter string fields, plus TODO",
                name: "q",
                in: "query",
            },
            {
                type: "string",
                description: "Starting index of overall result set from which to return ids.",
                name: "offset",
                in: "query",
            },
            {
                type: "string",
                description:
                    "A pagination token used with the `limit` parameter to manage pagination of results. On your first request, don't provide an `after` token. On subsequent requests, provide the `after` token from the previous response to continue from that place in the results.",
                name: "after",
                in: "query",
            },
            {
                type: "integer",
                description: "Number of ids to return.",
                name: "limit",
                in: "query",
            },
        ],
    ],
    [
        "query_firewall_fields",
        "GET",
        "/fwmgr/queries/firewall-fields/v1",
        "Get the firewall field specification IDs for the provided platform",
        "firewall_management",
        [
            {
                type: "string",
                description: "Get fields configuration for this platform",
                name: "platform_id",
                in: "query",
            },
            {
                type: "string",
                description: "Starting index of overall result set from which to return ids.",
                name: "offset",
                in: "query",
            },
            {
                type: "integer",
                description: "Number of ids to return.",
                name: "limit",
                in: "query",
            },
        ],
    ],
    [
        "query_network_locations",
        "GET",
        "/fwmgr/queries/network-locations/v1",
        "Get a list of network location IDs",
        "firewall_management",
        [
            {
                type: "string",
                description: "Possible order by fields: ",
                name: "sort",
                in: "query",
            },
            {
                type: "string",
                description: "FQL query specifying the filter parameters. Filter term criteria: name",
                name: "filter",
                in: "query",
            },
            {
                type: "string",
                description: "Match query criteria, which includes all the filter string fields",
                name: "q",
                in: "query",
            },
            {
                type: "string",
                description: "Starting index of overall result set from which to return ids.",
                name: "offset",
                in: "query",
            },
            {
                type: "string",
                description:
                    "A pagination token used with the `limit` parameter to manage pagination of results. On your first request, don't provide an `after` token. On subsequent requests, provide the `after` token from the previous response to continue from that place in the results.",
                name: "after",
                in: "query",
            },
            {
                type: "integer",
                description: "Number of ids to return.",
                name: "limit",
                in: "query",
            },
        ],
    ],
    [
        "query_platforms",
        "GET",
        "/fwmgr/queries/platforms/v1",
        "Get the list of platform names",
        "firewall_management",
        [
            {
                type: "string",
                description: "Starting index of overall result set from which to return ids.",
                name: "offset",
                in: "query",
            },
            {
                type: "integer",
                description: "Number of ids to return.",
                name: "limit",
                in: "query",
            },
        ],
    ],
    [
        "query_policy_rules",
        "GET",
        "/fwmgr/queries/policy-rules/v1",
        "Find all firewall rule IDs matching the query with filter, and return them in precedence order",
        "firewall_management",
        [
            {
                type: "string",
                description: "The ID of the policy container within which to query",
                name: "id",
                in: "query",
            },
            {
                type: "string",
                description: "Possible order by fields: ",
                name: "sort",
                in: "query",
            },
            {
                type: "string",
                description:
                    "FQL query specifying the filter parameters. Filter term criteria: enabled, platform, name, description, etc TODO. Filter range criteria: created_on, modified_on; use any common date format, such as '2010-05-15T14:55:21.892315096Z'.",
                name: "filter",
                in: "query",
            },
            {
                type: "string",
                description: "Match query criteria, which includes all the filter string fields, plus TODO",
                name: "q",
                in: "query",
            },
            {
                type: "string",
                description: "Starting index of overall result set from which to return ids.",
                name: "offset",
                in: "query",
            },
            {
                type: "integer",
                description: "Number of ids to return.",
                name: "limit",
                in: "query",
            },
        ],
    ],
    [
        "query_rule_groups",
        "GET",
        "/fwmgr/queries/rule-groups/v1",
        "Find all rule group IDs matching the query with filter",
        "firewall_management",
        [
            {
                type: "string",
                description: "Possible order by fields: ",
                name: "sort",
                in: "query",
            },
            {
                type: "string",
                description:
                    "FQL query specifying the filter parameters. Filter term criteria: enabled, platform, name, description, etc TODO. Filter range criteria: created_on, modified_on; use any common date format, such as '2010-05-15T14:55:21.892315096Z'.",
                name: "filter",
                in: "query",
            },
            {
                type: "string",
                description: "Match query criteria, which includes all the filter string fields, plus TODO",
                name: "q",
                in: "query",
            },
            {
                type: "string",
                description: "Starting index of overall result set from which to return ids.",
                name: "offset",
                in: "query",
            },
            {
                type: "string",
                description:
                    "A pagination token used with the `limit` parameter to manage pagination of results. On your first request, don't provide an `after` token. On subsequent requests, provide the `after` token from the previous response to continue from that place in the results.",
                name: "after",
                in: "query",
            },
            {
                type: "integer",
                description: "Number of ids to return.",
                name: "limit",
                in: "query",
            },
        ],
    ],
    [
        "query_rules",
        "GET",
        "/fwmgr/queries/rules/v1",
        "Find all rule IDs matching the query with filter",
        "firewall_management",
        [
            {
                type: "string",
                description: "Possible order by fields: ",
                name: "sort",
                in: "query",
            },
            {
                type: "string",
                description:
                    "FQL query specifying the filter parameters. Filter term criteria: enabled, platform, name, description, etc TODO. Filter range criteria: created_on, modified_on; use any common date format, such as '2010-05-15T14:55:21.892315096Z'.",
                name: "filter",
                in: "query",
            },
            {
                type: "string",
                description: "Match query criteria, which includes all the filter string fields, plus TODO",
                name: "q",
                in: "query",
            },
            {
                type: "string",
                description: "Starting index of overall result set from which to return ids.",
                name: "offset",
                in: "query",
            },
            {
                type: "string",
                description:
                    "A pagination token used with the `limit` parameter to manage pagination of results. On your first request, don't provide an `after` token. On subsequent requests, provide the `after` token from the previous response to continue from that place in the results.",
                name: "after",
                in: "query",
            },
            {
                type: "integer",
                description: "Number of ids to return.",
                name: "limit",
                in: "query",
            },
        ],
    ],
];
