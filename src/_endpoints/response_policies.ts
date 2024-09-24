/**
 * contains all method definitions for API: response policies
 * consumed and interpreted by Falcon.command(...)
 */
export const _response_policies_endpoints: Array<any> = [
    ["queryCombinedRTResponsePolicyMembers", "GET", "/policy/combined/response-members/v1", "Search for members of a Response policy in your environment by providing an FQL filter and paging details.Returns a set of host details which match the filter criteria", "response_policies", [{
        "type": "string",
        "description": "The ID of the Response policy to search for members of",
        "name": "id",
        "in": "query"
    }, {
        "type": "string",
        "description": "The filter expression that should be used to limit the results",
        "name": "filter",
        "in": "query"
    }, {
        "minimum": 0,
        "type": "integer",
        "description": "The offset to start retrieving records from",
        "name": "offset",
        "in": "query"
    }, {
        "maximum": 5000,
        "minimum": 1,
        "type": "integer",
        "description": "The maximum records to return. [1-5000]",
        "name": "limit",
        "in": "query"
    }, {
        "type": "string",
        "description": "The property to sort by",
        "name": "sort",
        "in": "query"
    }]],
    ["queryCombinedRTResponsePolicies", "GET", "/policy/combined/response/v1", "Search for Response Policies in your environment by providing an FQL filter and paging details.Returns a set of Response Policies which match the filter criteria", "response_policies", [{
        "type": "string",
        "description": "The filter expression that should be used to limit the results",
        "name": "filter",
        "in": "query"
    }, {
        "minimum": 0,
        "type": "integer",
        "description": "The offset to start retrieving records from",
        "name": "offset",
        "in": "query"
    }, {
        "maximum": 5000,
        "minimum": 1,
        "type": "integer",
        "description": "The maximum records to return. [1-5000]",
        "name": "limit",
        "in": "query"
    }, {
        "enum": ["created_by.asc", "created_by.desc", "created_timestamp.asc", "created_timestamp.desc", "enabled.asc", "enabled.desc", "modified_by.asc", "modified_by.desc", "modified_timestamp.asc", "modified_timestamp.desc", "name.asc", "name.desc", "platform_name.asc", "platform_name.desc", "precedence.asc", "precedence.desc"],
        "type": "string",
        "description": "The property to sort by",
        "name": "sort",
        "in": "query"
    }]],
    ["performRTResponsePoliciesAction", "POST", "/policy/entities/response-actions/v1", "Perform the specified action on the Response Policies specified in the request", "response_policies", [{
        "enum": ["add-host-group", "add-rule-group", "disable", "enable", "remove-host-group", "remove-rule-group"],
        "type": "string",
        "description": "The action to perform",
        "name": "action_name",
        "in": "query",
        "required": 1
    }, {
        "name": "body",
        "in": "body",
        "required": 1
    }]],
    ["setRTResponsePoliciesPrecedence", "POST", "/policy/entities/response-precedence/v1", "Sets the precedence of Response Policies based on the order of IDs specified in the request.The first ID specified will have the highest precedence and the last ID specified will have the lowest.You must specify all non-Default Policies for a platform when updating precedence", "response_policies", [{
        "name": "body",
        "in": "body",
        "required": 1
    }]],
    ["getRTResponsePolicies", "GET", "/policy/entities/response/v1", "Retrieve a set of Response Policies by specifying their IDs", "response_policies", [{
        "type": "array",
        "items": {
            "type": "string"
        },
        "collectionFormat": "multi",
        "description": "The IDs of the RTR Policies to return",
        "name": "ids",
        "in": "query",
        "required": 1
    }]],
    ["createRTResponsePolicies", "POST", "/policy/entities/response/v1", "Create Response Policies by specifying details about the policy to create", "response_policies", [{
        "name": "body",
        "in": "body",
        "required": 1
    }]],
    ["updateRTResponsePolicies", "PATCH", "/policy/entities/response/v1", "Update Response Policies by specifying the ID of the policy and details to update", "response_policies", [{
        "name": "body",
        "in": "body",
        "required": 1
    }]],
    ["deleteRTResponsePolicies", "DELETE", "/policy/entities/response/v1", "Delete a set of Response Policies by specifying their IDs", "response_policies", [{
        "type": "array",
        "items": {
            "type": "string"
        },
        "collectionFormat": "multi",
        "description": "The IDs of the Response Policies to delete",
        "name": "ids",
        "in": "query",
        "required": 1
    }]],
    ["queryRTResponsePolicyMembers", "GET", "/policy/queries/response-members/v1", "Search for members of a Response policy in your environment by providing an FQL filter and paging details.Returns a set of Agent IDs which match the filter criteria", "response_policies", [{
        "type": "string",
        "description": "The ID of the Response policy to search for members of",
        "name": "id",
        "in": "query"
    }, {
        "type": "string",
        "description": "The filter expression that should be used to limit the results",
        "name": "filter",
        "in": "query"
    }, {
        "minimum": 0,
        "type": "integer",
        "description": "The offset to start retrieving records from",
        "name": "offset",
        "in": "query"
    }, {
        "maximum": 5000,
        "minimum": 1,
        "type": "integer",
        "description": "The maximum records to return. [1-5000]",
        "name": "limit",
        "in": "query"
    }, {
        "type": "string",
        "description": "The property to sort by",
        "name": "sort",
        "in": "query"
    }]],
    ["queryRTResponsePolicies", "GET", "/policy/queries/response/v1", "Search for Response Policies in your environment by providing an FQL filter with sort and/or paging details.This returns a set of Response Policy IDs that match the given criteria.", "response_policies", [{
        "type": "string",
        "description": "The filter expression that should be used to determine the results.",
        "name": "filter",
        "in": "query"
    }, {
        "minimum": 0,
        "type": "integer",
        "description": "The offset of the first record to retrieve from",
        "name": "offset",
        "in": "query"
    }, {
        "maximum": 5000,
        "minimum": 1,
        "type": "integer",
        "description": "The maximum number of records to return [1-5000]",
        "name": "limit",
        "in": "query"
    }, {
        "enum": ["created_by.asc", "created_by.desc", "created_timestamp.asc", "created_timestamp.desc", "enabled.asc", "enabled.desc", "modified_by.asc", "modified_by.desc", "modified_timestamp.asc", "modified_timestamp.desc", "name.asc", "name.desc", "platform_name.asc", "platform_name.desc", "precedence.asc", "precedence.desc"],
        "type": "string",
        "description": "The property to sort results by",
        "name": "sort",
        "in": "query"
    }]]
];