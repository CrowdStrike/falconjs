/**
 * contains all method definitions for API: device control policies
 * consumed and interpreted by Falcon.command(...)
 */
export const _device_control_policies_endpoints: Array<any> = [
    [
        "queryCombinedDeviceControlPolicyMembers",
        "GET",
        "/policy/combined/device-control-members/v1",
        "Search for members of a Device Control Policy in your environment by providing an FQL filter and paging details. Returns a set of host details which match the filter criteria",
        "device_control_policies",
        [
            {
                type: "string",
                description: "The ID of the Device Control Policy to search for members of",
                name: "id",
                in: "query",
            },
            {
                type: "string",
                description: "The filter expression that should be used to limit the results",
                name: "filter",
                in: "query",
            },
            {
                minimum: 0,
                type: "integer",
                description: "The offset to start retrieving records from",
                name: "offset",
                in: "query",
            },
            {
                maximum: 5000,
                minimum: 1,
                type: "integer",
                description: "The maximum records to return. [1-5000]",
                name: "limit",
                in: "query",
            },
            {
                type: "string",
                description: "The property to sort by",
                name: "sort",
                in: "query",
            },
        ],
    ],
    [
        "queryCombinedDeviceControlPolicies",
        "GET",
        "/policy/combined/device-control/v1",
        "Search for Device Control Policies in your environment by providing an FQL filter and paging details. Returns a set of Device Control Policies which match the filter criteria",
        "device_control_policies",
        [
            {
                type: "string",
                description: "The filter expression that should be used to limit the results",
                name: "filter",
                in: "query",
            },
            {
                minimum: 0,
                type: "integer",
                description: "The offset to start retrieving records from",
                name: "offset",
                in: "query",
            },
            {
                maximum: 5000,
                minimum: 1,
                type: "integer",
                description: "The maximum records to return. [1-5000]",
                name: "limit",
                in: "query",
            },
            {
                enum: [
                    "created_by.asc",
                    "created_by.desc",
                    "created_timestamp.asc",
                    "created_timestamp.desc",
                    "enabled.asc",
                    "enabled.desc",
                    "modified_by.asc",
                    "modified_by.desc",
                    "modified_timestamp.asc",
                    "modified_timestamp.desc",
                    "name.asc",
                    "name.desc",
                    "platform_name.asc",
                    "platform_name.desc",
                    "precedence.asc",
                    "precedence.desc",
                ],
                type: "string",
                description: "The property to sort by",
                name: "sort",
                in: "query",
            },
        ],
    ],
    ["getDefaultDeviceControlPolicies", "GET", "/policy/entities/default-device-control/v1", "Retrieve the configuration for a Default Device Control Policy", "device_control_policies", []],
    [
        "updateDefaultDeviceControlPolicies",
        "PATCH",
        "/policy/entities/default-device-control/v1",
        "Update the configuration for a Default Device Control Policy",
        "device_control_policies",
        [
            {
                name: "body",
                in: "body",
                required: 1,
            },
        ],
    ],
    [
        "performDeviceControlPoliciesAction",
        "POST",
        "/policy/entities/device-control-actions/v1",
        "Perform the specified action on the Device Control Policies specified in the request",
        "device_control_policies",
        [
            {
                enum: ["add-host-group", "add-rule-group", "disable", "enable", "remove-host-group", "remove-rule-group"],
                type: "string",
                description: "The action to perform",
                name: "action_name",
                in: "query",
                required: 1,
            },
            {
                name: "body",
                in: "body",
                required: 1,
            },
        ],
    ],
    [
        "setDeviceControlPoliciesPrecedence",
        "POST",
        "/policy/entities/device-control-precedence/v1",
        "Sets the precedence of Device Control Policies based on the order of IDs specified in the request. The first ID specified will have the highest precedence and the last ID specified will have the lowest. You must specify all non-Default Policies for a platform when updating precedence",
        "device_control_policies",
        [
            {
                name: "body",
                in: "body",
                required: 1,
            },
        ],
    ],
    [
        "getDeviceControlPolicies",
        "GET",
        "/policy/entities/device-control/v1",
        "Retrieve a set of Device Control Policies by specifying their IDs",
        "device_control_policies",
        [
            {
                type: "array",
                items: {
                    type: "string",
                },
                collectionFormat: "multi",
                description: "The IDs of the Device Control Policies to return",
                name: "ids",
                in: "query",
                required: 1,
            },
        ],
    ],
    [
        "createDeviceControlPolicies",
        "POST",
        "/policy/entities/device-control/v1",
        "Create Device Control Policies by specifying details about the policy to create",
        "device_control_policies",
        [
            {
                name: "body",
                in: "body",
                required: 1,
            },
        ],
    ],
    [
        "updateDeviceControlPolicies",
        "PATCH",
        "/policy/entities/device-control/v1",
        "Update Device Control Policies by specifying the ID of the policy and details to update",
        "device_control_policies",
        [
            {
                name: "body",
                in: "body",
                required: 1,
            },
        ],
    ],
    [
        "deleteDeviceControlPolicies",
        "DELETE",
        "/policy/entities/device-control/v1",
        "Delete a set of Device Control Policies by specifying their IDs",
        "device_control_policies",
        [
            {
                type: "array",
                items: {
                    type: "string",
                },
                collectionFormat: "multi",
                description: "The IDs of the Device Control Policies to delete",
                name: "ids",
                in: "query",
                required: 1,
            },
        ],
    ],
    [
        "queryDeviceControlPolicyMembers",
        "GET",
        "/policy/queries/device-control-members/v1",
        "Search for members of a Device Control Policy in your environment by providing an FQL filter and paging details. Returns a set of Agent IDs which match the filter criteria",
        "device_control_policies",
        [
            {
                type: "string",
                description: "The ID of the Device Control Policy to search for members of",
                name: "id",
                in: "query",
            },
            {
                type: "string",
                description: "The filter expression that should be used to limit the results",
                name: "filter",
                in: "query",
            },
            {
                minimum: 0,
                type: "integer",
                description: "The offset to start retrieving records from",
                name: "offset",
                in: "query",
            },
            {
                maximum: 5000,
                minimum: 1,
                type: "integer",
                description: "The maximum records to return. [1-5000]",
                name: "limit",
                in: "query",
            },
            {
                type: "string",
                description: "The property to sort by",
                name: "sort",
                in: "query",
            },
        ],
    ],
    [
        "queryDeviceControlPolicies",
        "GET",
        "/policy/queries/device-control/v1",
        "Search for Device Control Policies in your environment by providing an FQL filter and paging details. Returns a set of Device Control Policy IDs which match the filter criteria",
        "device_control_policies",
        [
            {
                type: "string",
                description: "The filter expression that should be used to limit the results",
                name: "filter",
                in: "query",
            },
            {
                minimum: 0,
                type: "integer",
                description: "The offset to start retrieving records from",
                name: "offset",
                in: "query",
            },
            {
                maximum: 5000,
                minimum: 1,
                type: "integer",
                description: "The maximum records to return. [1-5000]",
                name: "limit",
                in: "query",
            },
            {
                enum: [
                    "created_by.asc",
                    "created_by.desc",
                    "created_timestamp.asc",
                    "created_timestamp.desc",
                    "enabled.asc",
                    "enabled.desc",
                    "modified_by.asc",
                    "modified_by.desc",
                    "modified_timestamp.asc",
                    "modified_timestamp.desc",
                    "name.asc",
                    "name.desc",
                    "platform_name.asc",
                    "platform_name.desc",
                    "precedence.asc",
                    "precedence.desc",
                ],
                type: "string",
                description: "The property to sort by",
                name: "sort",
                in: "query",
            },
        ],
    ],
];
