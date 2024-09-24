/**
 * contains all method definitions for API: quarantine
 * consumed and interpreted by Falcon.command(...)
 */
export const _quarantine_endpoints: Array<any> = [
    ["ActionUpdateCount", "GET", "/quarantine/aggregates/action-update-count/v1", "Returns count of potentially affected quarantined files for each action.", "quarantine", [{
        "type": "string",
        "description": "FQL specifying filter parameters.",
        "name": "filter",
        "in": "query",
        "required": 1
    }]],
    ["GetAggregateFiles", "POST", "/quarantine/aggregates/quarantined-files/GET/v1", "Get quarantine file aggregates as specified via json in request body.", "quarantine", [{
        "name": "body",
        "in": "body",
        "required": 1
    }]],
    ["GetQuarantineFiles", "POST", "/quarantine/entities/quarantined-files/GET/v1", "Get quarantine file metadata for specified ids.", "quarantine", [{
        "name": "body",
        "in": "body",
        "required": 1
    }]],
    ["UpdateQuarantinedDetectsByIds", "PATCH", "/quarantine/entities/quarantined-files/v1", "Apply action by quarantine file ids", "quarantine", [{
        "name": "body",
        "in": "body",
        "required": 1
    }]],
    ["QueryQuarantineFiles", "GET", "/quarantine/queries/quarantined-files/v1", "Get quarantine file ids that match the provided filter criteria.", "quarantine", [{
        "type": "string",
        "description": "Starting index of overall result set from which to return ids.",
        "name": "offset",
        "in": "query"
    }, {
        "type": "integer",
        "description": "Number of ids to return.",
        "name": "limit",
        "in": "query"
    }, {
        "type": "string",
        "description": "Possible order by fields: hostname, username, date_updated, date_created, paths.path, state, paths.state. Ex: 'date_created|asc'.",
        "name": "sort",
        "in": "query"
    }, {
        "type": "string",
        "description": "FQL query specifying the filter parameters. Special value '*' means to not filter on anything. Filter term criteria: status, adversary_id, device.device_id, device.country, device.hostname, behaviors.behavior_id, behaviors.ioc_type, behaviors.ioc_value, behaviors.username, behaviors.tree_root_hash. Filter range criteria:, max_severity, max_confidence, first_behavior, last_behavior.",
        "name": "filter",
        "in": "query"
    }, {
        "type": "string",
        "description": "Match phrase_prefix query criteria; included fields: _all (all filter string fields), sha256, state, paths.path, paths.state, hostname, username, date_updated, date_created.",
        "name": "q",
        "in": "query"
    }]],
    ["UpdateQfByQuery", "PATCH", "/quarantine/queries/quarantined-files/v1", "Apply quarantine file actions by query.", "quarantine", [{
        "name": "body",
        "in": "body",
        "required": 1
    }]]
];