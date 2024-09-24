/**
 * contains all method definitions for API: mssp
 * consumed and interpreted by Falcon.command(...)
 */
export const _mssp_endpoints: Array<any> = [
    ["getChildrenV2", "POST", "/mssp/entities/children/GET/v2", "Get link to child customer by child CID(s)", "mssp", [{
        "name": "body",
        "in": "body",
        "required": 1
    }]],
    ["getChildren", "GET", "/mssp/entities/children/v1", "Get link to child customer by child CID(s)", "mssp", [{
        "type": "array",
        "items": {
            "type": "string"
        },
        "collectionFormat": "multi",
        "description": "CID of a child customer",
        "name": "ids",
        "in": "query",
        "required": 1
    }]],
    ["getCIDGroupMembersByV1", "GET", "/mssp/entities/cid-group-members/v1", "Deprecated: Please use getCIDGroupMembersBy. Get CID group members by CID group ID.", "mssp", [{
        "type": "array",
        "items": {
            "type": "string"
        },
        "collectionFormat": "multi",
        "description": "CID group IDs to search for",
        "name": "cid_group_ids",
        "in": "query",
        "required": 1
    }]],
    ["addCIDGroupMembers", "POST", "/mssp/entities/cid-group-members/v1", "Add new CID group member.", "mssp", [{
        "description": "Both 'cid_group_id' and 'cids' fields are required.",
        "name": "body",
        "in": "body",
        "required": 1
    }]],
    ["deleteCIDGroupMembersV1", "DELETE", "/mssp/entities/cid-group-members/v1", "Deprecated: Please use deleteCIDGroupMembersV2.", "mssp", [{
        "description": "Both 'cid_group_id' and 'cids' fields are required.",
        "name": "body",
        "in": "body",
        "required": 1
    }]],
    ["getCIDGroupMembersBy", "GET", "/mssp/entities/cid-group-members/v2", "Get CID group members by CID Group ID.", "mssp", [{
        "type": "array",
        "items": {
            "type": "string"
        },
        "collectionFormat": "multi",
        "description": "CID group IDs search for",
        "name": "ids",
        "in": "query",
        "required": 1
    }]],
    ["getCIDGroupMembersByV2", "GET", "/mssp/entities/cid-group-members/v2", "Get CID group members by CID Group ID.", "mssp", [{
        "type": "array",
        "items": {
            "type": "string"
        },
        "collectionFormat": "multi",
        "description": "CID group IDs search for",
        "name": "ids",
        "in": "query",
        "required": 1
    }]],
    ["deleteCIDGroupMembers", "DELETE", "/mssp/entities/cid-group-members/v2", "Delete CID group members. Prevents removal of a cid group a cid group if it is only part of one cid group.", "mssp", [{
        "description": "Both 'cid_group_id' and 'cids' fields are required.",
        "name": "body",
        "in": "body",
        "required": 1
    }]],
    ["deleteCIDGroupMembersV2", "DELETE", "/mssp/entities/cid-group-members/v2", "Delete CID group members. Prevents removal of a cid group a cid group if it is only part of one cid group.", "mssp", [{
        "description": "Both 'cid_group_id' and 'cids' fields are required.",
        "name": "body",
        "in": "body",
        "required": 1
    }]],
    ["getCIDGroupByIdV1", "GET", "/mssp/entities/cid-groups/v1", "Deprecated: Please use getCIDGroupById. Get CID groups by ID.", "mssp", [{
        "type": "array",
        "items": {
            "type": "string"
        },
        "collectionFormat": "multi",
        "description": "CID group IDs to be searched on",
        "name": "cid_group_ids",
        "in": "query",
        "required": 1
    }]],
    ["createCIDGroups", "POST", "/mssp/entities/cid-groups/v1", "Create new CID groups. Name is a required field but description is an optional field. Maximum 500 CID groups allowed.", "mssp", [{
        "description": "Only 'name' and/or 'description' fields are required. Remaining are assigned by the system.",
        "name": "body",
        "in": "body",
        "required": 1
    }]],
    ["updateCIDGroups", "PATCH", "/mssp/entities/cid-groups/v1", "Update existing CID Group(s). CID Group ID is expected for each CID Group definition provided in request body. Name is a required field but description is an optional field. Empty description will override existing value. CID Group member(s) remain unaffected.", "mssp", [{
        "description": "'cid_group_id' field is required to identify the CID group to update along with 'name' and/or 'description' fields to be updated.",
        "name": "body",
        "in": "body",
        "required": 1
    }]],
    ["deleteCIDGroups", "DELETE", "/mssp/entities/cid-groups/v1", "Delete CID groups by ID.", "mssp", [{
        "type": "array",
        "items": {
            "type": "string"
        },
        "collectionFormat": "multi",
        "description": "CID group ids to delete",
        "name": "cid_group_ids",
        "in": "query",
        "required": 1
    }]],
    ["getCIDGroupById", "GET", "/mssp/entities/cid-groups/v2", "Get CID Groups by ID.", "mssp", [{
        "type": "array",
        "items": {
            "type": "string"
        },
        "collectionFormat": "multi",
        "description": "CID group IDs to search for",
        "name": "ids",
        "in": "query",
        "required": 1
    }]],
    ["getCIDGroupByIdV2", "GET", "/mssp/entities/cid-groups/v2", "Get CID Groups by ID.", "mssp", [{
        "type": "array",
        "items": {
            "type": "string"
        },
        "collectionFormat": "multi",
        "description": "CID group IDs to search for",
        "name": "ids",
        "in": "query",
        "required": 1
    }]],
    ["getRolesByID", "GET", "/mssp/entities/mssp-roles/v1", "Get link between user group and CID group by ID. Link ID is a string consisting of multiple components, but should be treated as opaque. MSSP Role assignment is of the format <user_group_id>:<cid_group_id>.", "mssp", [{
        "type": "array",
        "items": {
            "type": "string"
        },
        "collectionFormat": "multi",
        "description": "Link ID is a string consisting of multiple components, but should be treated as opaque. MSSP Role assignment is of the format <user_group_id>:<cid_group_id>",
        "name": "ids",
        "in": "query",
        "required": 1
    }]],
    ["addRole", "POST", "/mssp/entities/mssp-roles/v1", "Create a link between user group and CID group, with zero or more additional roles. The call does not replace any existing link between them. User group ID and CID group ID have to be specified in request. ", "mssp", [{
        "description": "'user_group_id', 'cid_group_id' and 'role_ids' fields are required. Remaining are populated by system.",
        "name": "body",
        "in": "body",
        "required": 1
    }]],
    ["deletedRoles", "DELETE", "/mssp/entities/mssp-roles/v1", "Delete links or additional roles between user groups and CID groups. User group ID and CID group ID have to be specified in request. Only specified roles are removed if specified in request payload, else association between User Group and CID group is dissolved completely (if no roles specified).", "mssp", [{
        "description": "'user_group_id' and 'cid_group_id' fields are required. 'role_ids' field is optional. Remaining fields are ignored.",
        "name": "body",
        "in": "body",
        "required": 1
    }]],
    ["getUserGroupMembersByIDV1", "GET", "/mssp/entities/user-group-members/v1", "Deprecated: Please use getUserGroupMembersByID. Get user group members by user group ID.", "mssp", [{
        "type": "array",
        "items": {
            "type": "string"
        },
        "collectionFormat": "multi",
        "description": "User group IDs to search for",
        "name": "user_group_ids",
        "in": "query",
        "required": 1
    }]],
    ["addUserGroupMembers", "POST", "/mssp/entities/user-group-members/v1", "Add new user group member. Maximum 500 members allowed per user group.", "mssp", [{
        "description": "Both 'user_group_id' and 'user_uuids' fields are required.",
        "name": "body",
        "in": "body",
        "required": 1
    }]],
    ["deleteUserGroupMembers", "DELETE", "/mssp/entities/user-group-members/v1", "Delete user group members entry.", "mssp", [{
        "description": "Both 'user_group_id' and 'user_uuids' fields are required.",
        "name": "body",
        "in": "body",
        "required": 1
    }]],
    ["getUserGroupMembersByID", "GET", "/mssp/entities/user-group-members/v2", "Get user group members by user group ID.", "mssp", [{
        "type": "array",
        "items": {
            "type": "string"
        },
        "collectionFormat": "multi",
        "description": "User group IDs to search for",
        "name": "ids",
        "in": "query",
        "required": 1
    }]],
    ["getUserGroupMembersByIDV2", "GET", "/mssp/entities/user-group-members/v2", "Get user group members by user group ID.", "mssp", [{
        "type": "array",
        "items": {
            "type": "string"
        },
        "collectionFormat": "multi",
        "description": "User group IDs to search for",
        "name": "ids",
        "in": "query",
        "required": 1
    }]],
    ["getUserGroupsByIDV1", "GET", "/mssp/entities/user-groups/v1", "Deprecated: Please use getUserGroupsByID. Get user groups by ID.", "mssp", [{
        "type": "array",
        "items": {
            "type": "string"
        },
        "collectionFormat": "multi",
        "description": "User Group IDs to search for",
        "name": "user_group_ids",
        "in": "query",
        "required": 1
    }]],
    ["createUserGroups", "POST", "/mssp/entities/user-groups/v1", "Create new user groups. Name is a required field but description is an optional field. Maximum 500 user groups allowed per customer.", "mssp", [{
        "description": "Only 'name' and/or 'description' fields are required. Remaining are assigned by the system.",
        "name": "body",
        "in": "body",
        "required": 1
    }]],
    ["updateUserGroups", "PATCH", "/mssp/entities/user-groups/v1", "Update existing user group(s). User group ID is expected for each user group definition provided in request body. Name is a required field but description is an optional field. Empty description will override existing value. User group member(s) remain unaffected.", "mssp", [{
        "description": "'user_group_id' field is required to identify the user group to update along with 'name' and/or 'description' fields to be updated.",
        "name": "body",
        "in": "body",
        "required": 1
    }]],
    ["deleteUserGroups", "DELETE", "/mssp/entities/user-groups/v1", "Delete user groups by ID.", "mssp", [{
        "type": "array",
        "items": {
            "type": "string"
        },
        "collectionFormat": "multi",
        "description": "User group IDs to delete",
        "name": "user_group_ids",
        "in": "query",
        "required": 1
    }]],
    ["getUserGroupsByID", "GET", "/mssp/entities/user-groups/v2", "Get user groups by ID.", "mssp", [{
        "type": "array",
        "items": {
            "type": "string"
        },
        "collectionFormat": "multi",
        "description": "User group IDs to search for",
        "name": "ids",
        "in": "query",
        "required": 1
    }]],
    ["getUserGroupsByIDV2", "GET", "/mssp/entities/user-groups/v2", "Get user groups by ID.", "mssp", [{
        "type": "array",
        "items": {
            "type": "string"
        },
        "collectionFormat": "multi",
        "description": "User group IDs to search for",
        "name": "ids",
        "in": "query",
        "required": 1
    }]],
    ["queryChildren", "GET", "/mssp/queries/children/v1", "Query for customers linked as children", "mssp", [{
        "type": "string",
        "description": "Filter using a query in Falcon Query Language (FQL). Supported filters: cid",
        "name": "filter",
        "in": "query"
    }, {
        "enum": ["last_modified_timestamp|asc", "last_modified_timestamp|desc"],
        "type": "string",
        "default": "last_modified_timestamp|desc",
        "description": "The sort expression used to sort the results",
        "name": "sort",
        "in": "query"
    }, {
        "type": "integer",
        "default": 0,
        "description": "Starting index of overall result set from which to return ids",
        "name": "offset",
        "in": "query"
    }, {
        "type": "integer",
        "default": 10,
        "description": "Number of ids to return",
        "name": "limit",
        "in": "query"
    }]],
    ["queryCIDGroupMembers", "GET", "/mssp/queries/cid-group-members/v1", "Query a CID groups members by associated CID.", "mssp", [{
        "type": "string",
        "description": "CID to lookup associated CID group ID",
        "name": "cid",
        "in": "query",
        "required": 1
    }, {
        "enum": ["last_modified_timestamp|asc", "last_modified_timestamp|desc"],
        "type": "string",
        "default": "last_modified_timestamp|desc",
        "description": "The sort expression used to sort the results",
        "name": "sort",
        "in": "query"
    }, {
        "type": "integer",
        "default": 0,
        "description": "Starting index of overall result set from which to return id",
        "name": "offset",
        "in": "query"
    }, {
        "type": "integer",
        "default": 10,
        "description": "Maximum number of results to return",
        "name": "limit",
        "in": "query"
    }]],
    ["queryCIDGroups", "GET", "/mssp/queries/cid-groups/v1", "Query CID groups.", "mssp", [{
        "type": "string",
        "description": "Name to lookup groups for",
        "name": "name",
        "in": "query"
    }, {
        "enum": ["last_modified_timestamp|asc", "last_modified_timestamp|desc", "name|asc", "name|desc"],
        "type": "string",
        "default": "name|asc",
        "description": "The sort expression used to sort the results",
        "name": "sort",
        "in": "query"
    }, {
        "type": "integer",
        "default": 0,
        "description": "Starting index of overall result set from which to return ids",
        "name": "offset",
        "in": "query"
    }, {
        "type": "integer",
        "default": 10,
        "description": "Maximum number of results to return",
        "name": "limit",
        "in": "query"
    }]],
    ["queryRoles", "GET", "/mssp/queries/mssp-roles/v1", "Query links between user groups and CID groups. At least one of CID group ID or user group ID should also be provided. Role ID is optional.", "mssp", [{
        "type": "string",
        "description": "User group ID to fetch MSSP role for",
        "name": "user_group_id",
        "in": "query"
    }, {
        "type": "string",
        "description": "CID group ID to fetch MSSP role for",
        "name": "cid_group_id",
        "in": "query"
    }, {
        "type": "string",
        "description": "Role ID to fetch MSSP role for",
        "name": "role_id",
        "in": "query"
    }, {
        "enum": ["last_modified_timestamp|asc", "last_modified_timestamp|desc"],
        "type": "string",
        "default": "last_modified_timestamp|desc",
        "description": "The sort expression used to sort the results",
        "name": "sort",
        "in": "query"
    }, {
        "type": "integer",
        "default": 0,
        "description": "Starting index of overall result set from which to return ids",
        "name": "offset",
        "in": "query"
    }, {
        "type": "integer",
        "default": 10,
        "description": "Maximum number of results to return",
        "name": "limit",
        "in": "query"
    }]],
    ["queryUserGroupMembers", "GET", "/mssp/queries/user-group-members/v1", "Query user group member by user UUID.", "mssp", [{
        "type": "string",
        "description": "User UUID to lookup associated user group ID",
        "name": "user_uuid",
        "in": "query",
        "required": 1
    }, {
        "enum": ["last_modified_timestamp|asc", "last_modified_timestamp|desc"],
        "type": "string",
        "default": "last_modified_timestamp|desc",
        "description": "The sort expression used to sort the results",
        "name": "sort",
        "in": "query"
    }, {
        "type": "integer",
        "default": 0,
        "description": "Starting index of overall result set from which to return ids",
        "name": "offset",
        "in": "query"
    }, {
        "type": "integer",
        "default": 10,
        "description": "Number of ids to return",
        "name": "limit",
        "in": "query"
    }]],
    ["queryUserGroups", "GET", "/mssp/queries/user-groups/v1", "Query user groups.", "mssp", [{
        "type": "string",
        "description": "Name to lookup groups for",
        "name": "name",
        "in": "query"
    }, {
        "enum": ["last_modified_timestamp|asc", "last_modified_timestamp|desc", "name|asc", "name|desc"],
        "type": "string",
        "default": "name|asc",
        "description": "The sort expression used to sort the results",
        "name": "sort",
        "in": "query"
    }, {
        "type": "integer",
        "default": 0,
        "description": "Starting index of overall result set from which to return ids",
        "name": "offset",
        "in": "query"
    }, {
        "type": "integer",
        "default": 10,
        "description": "Maximum number of results to return",
        "name": "limit",
        "in": "query"
    }]]
];