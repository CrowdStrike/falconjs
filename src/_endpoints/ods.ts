/**
 * contains all method definitions for API: ods
 * consumed and interpreted by Falcon.command(...)
 */
export const _ods_endpoints: Array<any> = [
    ["aggregate_query_scan_host_metadata", "POST", "/ods/aggregates/scan-hosts/v1", "Get aggregates on ODS scan-hosts data.", "ods", [{
        "name": "body",
        "in": "body",
        "required": 1
    }]],
    ["aggregate_scans", "POST", "/ods/aggregates/scans/v1", "Get aggregates on ODS scan data.", "ods", [{
        "name": "body",
        "in": "body",
        "required": 1
    }]],
    ["aggregate_scheduled_scans", "POST", "/ods/aggregates/scheduled-scans/v1", "Get aggregates on ODS scheduled-scan data.", "ods", [{
        "name": "body",
        "in": "body",
        "required": 1
    }]],
    ["get_malicious_files_by_ids", "GET", "/ods/entities/malicious-files/v1", "Get malicious files by ids.", "ods", [{
        "type": "array",
        "items": {
            "type": "string"
        },
        "collectionFormat": "multi",
        "description": "The scan IDs to retrieve the scan entities",
        "name": "ids",
        "in": "query",
        "required": 1
    }]],
    ["cancel_scans", "POST", "/ods/entities/scan-control-actions/cancel/v1", "Cancel ODS scans for the given scan ids.", "ods", [{
        "name": "body",
        "in": "body",
        "required": 1
    }]],
    ["get_scan_host_metadata_by_ids", "GET", "/ods/entities/scan-hosts/v1", "Get scan hosts by ids.", "ods", [{
        "type": "array",
        "items": {
            "type": "string"
        },
        "collectionFormat": "multi",
        "description": "The scan IDs to retrieve the scan entities",
        "name": "ids",
        "in": "query",
        "required": 1
    }]],
    ["get_scans_by_scan_ids", "GET", "/ods/entities/scans/v1", "Get Scans by IDs.", "ods", [{
        "type": "array",
        "items": {
            "type": "string"
        },
        "collectionFormat": "multi",
        "description": "The scan IDs to retrieve the scan entities",
        "name": "ids",
        "in": "query",
        "required": 1
    }]],
    ["create_scan", "POST", "/ods/entities/scans/v1", "Create ODS scan and start or schedule scan for the given scan request.", "ods", [{
        "name": "body",
        "in": "body",
        "required": 1
    }]],
    ["get_scheduled_scans_by_scan_ids", "GET", "/ods/entities/scheduled-scans/v1", "Get ScheduledScans by IDs.", "ods", [{
        "type": "array",
        "items": {
            "type": "string"
        },
        "collectionFormat": "multi",
        "description": "The scan IDs to retrieve the scan entities",
        "name": "ids",
        "in": "query",
        "required": 1
    }]],
    ["schedule_scan", "POST", "/ods/entities/scheduled-scans/v1", "Create ODS scan and start or schedule scan for the given scan request.", "ods", [{
        "name": "body",
        "in": "body",
        "required": 1
    }]],
    ["delete_scheduled_scans", "DELETE", "/ods/entities/scheduled-scans/v1", "Delete ODS scheduled-scans for the given scheduled-scan ids.", "ods", [{
        "type": "array",
        "items": {
            "type": "string"
        },
        "collectionFormat": "multi",
        "description": "The scan IDs to retrieve the scan entities",
        "name": "ids",
        "in": "query",
        "required": 1
    }, {
        "type": "string",
        "description": "A FQL compatible query string.",
        "name": "filter",
        "in": "query"
    }]],
    ["query_malicious_files", "GET", "/ods/queries/malicious-files/v1", "Query malicious files.", "ods", [{
        "type": "string",
        "description": "A FQL compatible query string. Terms: [id cid scan_id host_id host_scan_id filepath filename hash pattern_id severity quarantined last_updated]",
        "name": "filter",
        "in": "query",
        "allowEmptyValue": 1
    }, {
        "type": "integer",
        "default": 0,
        "description": "Index of the starting resource",
        "name": "offset",
        "in": "query"
    }, {
        "type": "integer",
        "default": 500,
        "description": "The max number of resources to return",
        "name": "limit",
        "in": "query"
    }, {
        "enum": ["id|asc", "id|desc", "scan_id|asc", "scan_id|desc", "host_id|asc", "host_id|desc", "host_scan_id|asc", "host_scan_id|desc", "filename|asc", "filename|desc", "hash|asc", "hash|desc", "pattern_id|asc", "pattern_id|desc", "severity|asc", "severity|desc", "last_updated|asc", "last_updated|desc"],
        "type": "string",
        "default": "last_updated|desc",
        "description": "The property to sort on, followed by a |, followed by the sort direction, either \"asc\" or \"desc\"",
        "name": "sort",
        "in": "query",
        "allowEmptyValue": 1
    }]],
    ["query_scan_host_metadata", "GET", "/ods/queries/scan-hosts/v1", "Query scan hosts.", "ods", [{
        "type": "string",
        "description": "A FQL compatible query string. Terms: [id cid profile_id host_id scan_id host_scan_id filecount.scanned filecount.malicious filecount.quarantined filecount.skipped affected_hosts_count status severity completed_on started_on last_updated]",
        "name": "filter",
        "in": "query",
        "allowEmptyValue": 1
    }, {
        "type": "integer",
        "default": 0,
        "description": "Index of the starting resource",
        "name": "offset",
        "in": "query"
    }, {
        "type": "integer",
        "default": 500,
        "description": "The max number of resources to return",
        "name": "limit",
        "in": "query"
    }, {
        "enum": ["id|asc", "id|desc", "scan_id|asc", "scan_id|desc", "host_id|asc", "host_id|desc", "filecount.scanned|asc", "filecount.scanned|desc", "filecount.malicious|asc", "filecount.malicious|desc", "filecount.quarantined|asc", "filecount.quarantined|desc", "filecount.skipped|asc", "filecount.skipped|desc", "status|asc", "status|desc", "severity|asc", "severity|desc", "started_on|asc", "started_on|desc", "completed_on|asc", "completed_on|desc", "last_updated|asc", "last_updated|desc"],
        "type": "string",
        "default": "last_updated|desc",
        "description": "The property to sort on, followed by a |, followed by the sort direction, either \"asc\" or \"desc\"",
        "name": "sort",
        "in": "query",
        "allowEmptyValue": 1
    }]],
    ["query_scans", "GET", "/ods/queries/scans/v1", "Query Scans.", "ods", [{
        "type": "string",
        "description": "A FQL compatible query string. Terms: [id cid profile_id description.keyword initiated_from filecount.scanned filecount.malicious filecount.quarantined filecount.skipped affected_hosts_count status severity scan_started_on scan_completed_on created_on created_by last_updated]",
        "name": "filter",
        "in": "query",
        "allowEmptyValue": 1
    }, {
        "type": "integer",
        "default": 0,
        "description": "Index of the starting resource",
        "name": "offset",
        "in": "query"
    }, {
        "type": "integer",
        "default": 500,
        "description": "The max number of resources to return",
        "name": "limit",
        "in": "query"
    }, {
        "enum": ["id|asc", "id|desc", "initiated_from|asc", "initiated_from|desc", "description.keyword|asc", "description.keyword|desc", "filecount.scanned|asc", "filecount.scanned|desc", "filecount.malicious|asc", "filecount.malicious|desc", "filecount.quarantined|asc", "filecount.quarantined|desc", "filecount.skipped|asc", "filecount.skipped|desc", "affected_hosts_count|asc", "affected_hosts_count|desc", "status|asc", "status|desc", "severity|asc", "severity|desc", "scan_started_on|asc", "scan_started_on|desc", "scan_completed_on|asc", "scan_completed_on|desc", "created_on|asc", "created_on|desc", "created_by|asc", "created_by|desc", "last_updated|asc", "last_updated|desc"],
        "type": "string",
        "default": "created_on|desc",
        "description": "The property to sort on, followed by a |, followed by the sort direction, either \"asc\" or \"desc\"",
        "name": "sort",
        "in": "query",
        "allowEmptyValue": 1
    }]],
    ["query_scheduled_scans", "GET", "/ods/queries/scheduled-scans/v1", "Query ScheduledScans.", "ods", [{
        "type": "string",
        "description": "A FQL compatible query string. Terms: [id cid description initiated_from status schedule.start_timestamp schedule.Interval created_on created_by last_updated deleted]",
        "name": "filter",
        "in": "query",
        "allowEmptyValue": 1
    }, {
        "type": "integer",
        "default": 0,
        "description": "Index of the starting resource",
        "name": "offset",
        "in": "query"
    }, {
        "type": "integer",
        "default": 500,
        "description": "The max number of resources to return",
        "name": "limit",
        "in": "query"
    }, {
        "enum": ["id|asc", "id|desc", "description.keyword|asc", "description.keyword|desc", "status|asc", "status|desc", "schedule.start_timestamp|asc", "schedule.start_timestamp|desc", "schedule.interval|asc", "schedule.interval|desc", "created_on|asc", "created_on|desc", "created_by|asc", "created_by|desc", "last_updated|asc", "last_updated|desc"],
        "type": "string",
        "default": "schedule.start_timestamp|desc",
        "description": "The property to sort on, followed by a |, followed by the sort direction, either \"asc\" or \"desc\"",
        "name": "sort",
        "in": "query",
        "allowEmptyValue": 1
    }]]
];