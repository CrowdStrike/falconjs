/**
 * contains all method definitions for API: custom ioa
 * consumed and interpreted by Falcon.command(...)
 */
export const _custom_ioa_endpoints: Array<any> = [
    ["get_patterns", "GET", "/ioarules/entities/pattern-severities/v1", "Get pattern severities by ID.", "custom_ioa", [{
        "type": "array",
        "items": {
            "type": "string"
        },
        "collectionFormat": "multi",
        "description": "The IDs of the entities",
        "name": "ids",
        "in": "query",
        "required": 1
    }]],
    ["get_platformsMixin0", "GET", "/ioarules/entities/platforms/v1", "Get platforms by ID.", "custom_ioa", [{
        "type": "array",
        "items": {
            "type": "string"
        },
        "collectionFormat": "multi",
        "description": "The IDs of the entities",
        "name": "ids",
        "in": "query",
        "required": 1
    }]],
    ["get_rule_groupsMixin0", "GET", "/ioarules/entities/rule-groups/v1", "Get rule groups by ID.", "custom_ioa", [{
        "type": "array",
        "items": {
            "type": "string"
        },
        "collectionFormat": "multi",
        "description": "The IDs of the entities",
        "name": "ids",
        "in": "query",
        "required": 1
    }]],
    ["create_rule_groupMixin0", "POST", "/ioarules/entities/rule-groups/v1", "Create a rule group for a platform with a name and an optional description. Returns the rule group.", "custom_ioa", [{
        "name": "body",
        "in": "body",
        "required": 1
    }]],
    ["update_rule_groupMixin0", "PATCH", "/ioarules/entities/rule-groups/v1", "Update a rule group. The following properties can be modified: name, description, enabled.", "custom_ioa", [{
        "name": "body",
        "in": "body",
        "required": 1
    }]],
    ["delete_rule_groupsMixin0", "DELETE", "/ioarules/entities/rule-groups/v1", "Delete rule groups by ID.", "custom_ioa", [{
        "type": "string",
        "description": "Explains why the entity is being deleted",
        "name": "comment",
        "in": "query"
    }, {
        "type": "array",
        "items": {
            "type": "string"
        },
        "collectionFormat": "multi",
        "description": "The IDs of the entities",
        "name": "ids",
        "in": "query",
        "required": 1
    }]],
    ["get_rule_types", "GET", "/ioarules/entities/rule-types/v1", "Get rule types by ID.", "custom_ioa", [{
        "type": "array",
        "items": {
            "type": "string"
        },
        "collectionFormat": "multi",
        "description": "The IDs of the entities",
        "name": "ids",
        "in": "query",
        "required": 1
    }]],
    ["get_rules_get", "POST", "/ioarules/entities/rules/GET/v1", "Get rules by ID and optionally version in the following format: `ID[:version]`.", "custom_ioa", [{
        "description": "The \"ids\" field contains a list of the rules to retrieve.",
        "name": "body",
        "in": "body",
        "required": 1
    }]],
    ["get_rulesMixin0", "GET", "/ioarules/entities/rules/v1", "Get rules by ID and optionally version in the following format: `ID[:version]`. The max number of IDs is constrained by URL size.", "custom_ioa", [{
        "type": "array",
        "items": {
            "type": "string"
        },
        "collectionFormat": "multi",
        "description": "The IDs of the entities",
        "name": "ids",
        "in": "query",
        "required": 1
    }]],
    ["create_rule", "POST", "/ioarules/entities/rules/v1", "Create a rule within a rule group. Returns the rule.", "custom_ioa", [{
        "name": "body",
        "in": "body",
        "required": 1
    }]],
    ["update_rules", "PATCH", "/ioarules/entities/rules/v1", "Update rules within a rule group. Return the updated rules.", "custom_ioa", [{
        "name": "body",
        "in": "body",
        "required": 1
    }]],
    ["delete_rules", "DELETE", "/ioarules/entities/rules/v1", "Delete rules from a rule group by ID.", "custom_ioa", [{
        "type": "string",
        "description": "The parent rule group",
        "name": "rule_group_id",
        "in": "query",
        "required": 1
    }, {
        "type": "string",
        "description": "Explains why the entity is being deleted",
        "name": "comment",
        "in": "query"
    }, {
        "type": "array",
        "items": {
            "type": "string"
        },
        "collectionFormat": "multi",
        "description": "The IDs of the entities",
        "name": "ids",
        "in": "query",
        "required": 1
    }]],
    ["validate", "POST", "/ioarules/entities/rules/validate/v1", "Validates field values and checks for matches if a test string is provided.", "custom_ioa", [{
        "name": "body",
        "in": "body",
        "required": 1
    }]],
    ["query_patterns", "GET", "/ioarules/queries/pattern-severities/v1", "Get all pattern severity IDs.", "custom_ioa", [{
        "type": "string",
        "description": "Starting index of overall result set from which to return IDs",
        "name": "offset",
        "in": "query"
    }, {
        "type": "integer",
        "description": "Number of IDs to return",
        "name": "limit",
        "in": "query"
    }]],
    ["query_platformsMixin0", "GET", "/ioarules/queries/platforms/v1", "Get all platform IDs.", "custom_ioa", [{
        "type": "string",
        "description": "Starting index of overall result set from which to return IDs",
        "name": "offset",
        "in": "query"
    }, {
        "type": "integer",
        "description": "Number of IDs to return",
        "name": "limit",
        "in": "query"
    }]],
    ["query_rule_groups_full", "GET", "/ioarules/queries/rule-groups-full/v1", "Find all rule groups matching the query with optional filter.", "custom_ioa", [{
        "enum": ["created_by", "created_on", "enabled", "modified_by", "modified_on", "name"],
        "type": "string",
        "description": "Possible order by fields: {created_by, created_on, modified_by, modified_on, enabled, name}",
        "name": "sort",
        "in": "query"
    }, {
        "type": "string",
        "description": "FQL query specifying the filter parameters. Filter term criteria: [enabled platform name description rules.action_label rules.name rules.description rules.pattern_severity rules.ruletype_name rules.enabled]. Filter range criteria: created_on, modified_on; use any common date format, such as '2010-05-15T14:55:21.892315096Z'.",
        "name": "filter",
        "in": "query"
    }, {
        "type": "string",
        "description": "Match query criteria, which includes all the filter string fields",
        "name": "q",
        "in": "query"
    }, {
        "type": "string",
        "description": "Starting index of overall result set from which to return IDs",
        "name": "offset",
        "in": "query"
    }, {
        "type": "integer",
        "description": "Number of IDs to return",
        "name": "limit",
        "in": "query"
    }]],
    ["query_rule_groupsMixin0", "GET", "/ioarules/queries/rule-groups/v1", "Finds all rule group IDs matching the query with optional filter.", "custom_ioa", [{
        "enum": ["created_by", "created_on", "enabled", "modified_by", "modified_on", "name"],
        "type": "string",
        "description": "Possible order by fields: {created_by, created_on, modified_by, modified_on, enabled, name}",
        "name": "sort",
        "in": "query"
    }, {
        "type": "string",
        "description": "FQL query specifying the filter parameters. Filter term criteria: [enabled platform name description rules.action_label rules.name rules.description rules.pattern_severity rules.ruletype_name rules.enabled]. Filter range criteria: created_on, modified_on; use any common date format, such as '2010-05-15T14:55:21.892315096Z'.",
        "name": "filter",
        "in": "query"
    }, {
        "type": "string",
        "description": "Match query criteria, which includes all the filter string fields",
        "name": "q",
        "in": "query"
    }, {
        "type": "string",
        "description": "Starting index of overall result set from which to return IDs",
        "name": "offset",
        "in": "query"
    }, {
        "type": "integer",
        "description": "Number of IDs to return",
        "name": "limit",
        "in": "query"
    }]],
    ["query_rule_types", "GET", "/ioarules/queries/rule-types/v1", "Get all rule type IDs.", "custom_ioa", [{
        "type": "string",
        "description": "Starting index of overall result set from which to return IDs",
        "name": "offset",
        "in": "query"
    }, {
        "type": "integer",
        "description": "Number of IDs to return",
        "name": "limit",
        "in": "query"
    }]],
    ["query_rulesMixin0", "GET", "/ioarules/queries/rules/v1", "Finds all rule IDs matching the query with optional filter.", "custom_ioa", [{
        "enum": ["rules.created_by", "rules.created_on", "rules.current_version.action_label", "rules.current_version.description", "rules.current_version.modified_by", "rules.current_version.modified_on", "rules.current_version.name", "rules.current_version.pattern_severity", "rules.enabled", "rules.ruletype_name"],
        "type": "string",
        "description": "Possible order by fields: {rules.ruletype_name, rules.enabled, rules.created_by, rules.current_version.name, rules.current_version.modified_by, rules.created_on, rules.current_version.description, rules.current_version.pattern_severity, rules.current_version.action_label, rules.current_version.modified_on}",
        "name": "sort",
        "in": "query"
    }, {
        "type": "string",
        "description": "FQL query specifying the filter parameters. Filter term criteria: [enabled platform name description rules.action_label rules.name rules.description rules.pattern_severity rules.ruletype_name rules.enabled]. Filter range criteria: created_on, modified_on; use any common date format, such as '2010-05-15T14:55:21.892315096Z'.",
        "name": "filter",
        "in": "query"
    }, {
        "type": "string",
        "description": "Match query criteria, which includes all the filter string fields",
        "name": "q",
        "in": "query"
    }, {
        "type": "string",
        "description": "Starting index of overall result set from which to return IDs",
        "name": "offset",
        "in": "query"
    }, {
        "type": "integer",
        "description": "Number of IDs to return",
        "name": "limit",
        "in": "query"
    }]]
];