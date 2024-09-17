/**
 * contains all method definitions for API: prevention policies
 * consumed and interpreted by Falcon.command(...)
 */
export var _prevention_policies_endpoints: Array<any> = [
    ["queryCombinedPreventionPolicyMembers", "GET", "/policy/combined/prevention-members/v1", "Search for members of a Prevention Policy in your environment by providing an FQL filter and paging details. Returns a set of host details which match the filter criteria", "prevention_policies", [{
        "type": "string",
        "description": "The ID of the Prevention Policy to search for members of",
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
    ["queryCombinedPreventionPolicies", "GET", "/policy/combined/prevention/v1", "Search for Prevention Policies in your environment by providing an FQL filter and paging details. Returns a set of Prevention Policies which match the filter criteria", "prevention_policies", [{
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
    ["performPreventionPoliciesAction", "POST", "/policy/entities/prevention-actions/v1", "Perform the specified action on the Prevention Policies specified in the request", "prevention_policies", [{
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
    ["setPreventionPoliciesPrecedence", "POST", "/policy/entities/prevention-precedence/v1", "Sets the precedence of Prevention Policies based on the order of IDs specified in the request. The first ID specified will have the highest precedence and the last ID specified will have the lowest. You must specify all non-Default Policies for a platform when updating precedence", "prevention_policies", [{
        "name": "body",
        "in": "body",
        "required": 1
    }]],
    ["getPreventionPolicies", "GET", "/policy/entities/prevention/v1", "Retrieve a set of Prevention Policies by specifying their IDs", "prevention_policies", [{
        "type": "array",
        "items": {
            "type": "string"
        },
        "collectionFormat": "multi",
        "description": "The IDs of the Prevention Policies to return",
        "name": "ids",
        "in": "query",
        "required": 1
    }]],
    ["createPreventionPolicies", "POST", "/policy/entities/prevention/v1", "Create Prevention Policies by specifying details about the policy to create", "prevention_policies", [{
        "name": "body",
        "in": "body",
        "required": 1
    }]],
    ["updatePreventionPolicies", "PATCH", "/policy/entities/prevention/v1", "Update Prevention Policies by specifying the ID of the policy and details to update", "prevention_policies", [{
        "name": "body",
        "in": "body",
        "required": 1
    }]],
    ["deletePreventionPolicies", "DELETE", "/policy/entities/prevention/v1", "Delete a set of Prevention Policies by specifying their IDs", "prevention_policies", [{
        "type": "array",
        "items": {
            "type": "string"
        },
        "collectionFormat": "multi",
        "description": "The IDs of the Prevention Policies to delete",
        "name": "ids",
        "in": "query",
        "required": 1
    }]],
    ["queryPreventionPolicyMembers", "GET", "/policy/queries/prevention-members/v1", "Search for members of a Prevention Policy in your environment by providing an FQL filter and paging details. Returns a set of Agent IDs which match the filter criteria", "prevention_policies", [{
        "type": "string",
        "description": "The ID of the Prevention Policy to search for members of",
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
    ["queryPreventionPolicies", "GET", "/policy/queries/prevention/v1", "Search for Prevention Policies in your environment by providing an FQL filter and paging details. Returns a set of Prevention Policy IDs which match the filter criteria", "prevention_policies", [{
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
    }]]
];