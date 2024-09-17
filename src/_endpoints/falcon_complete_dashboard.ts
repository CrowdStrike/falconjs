/**
 * contains all method definitions for API: falcon complete dashboard
 * consumed and interpreted by Falcon.command(...)
 */
export var _falcon_complete_dashboard_endpoints: Array<any> = [
    ["AggregateAlerts", "POST", "/falcon-complete-dashboards/aggregates/alerts/GET/v1", "Retrieve aggregate alerts values based on the matched filter", "falcon_complete_dashboard", [{
        "name": "body",
        "in": "body",
        "required": 1
    }]],
    ["AggregateAllowList", "POST", "/falcon-complete-dashboards/aggregates/allowlist/GET/v1", "Retrieve aggregate allowlist ticket values based on the matched filter", "falcon_complete_dashboard", [{
        "name": "body",
        "in": "body",
        "required": 1
    }]],
    ["AggregateBlockList", "POST", "/falcon-complete-dashboards/aggregates/blocklist/GET/v1", "Retrieve aggregate blocklist ticket values based on the matched filter", "falcon_complete_dashboard", [{
        "name": "body",
        "in": "body",
        "required": 1
    }]],
    ["AggregateDetections", "POST", "/falcon-complete-dashboards/aggregates/detects/GET/v1", "Retrieve aggregate detection values based on the matched filter", "falcon_complete_dashboard", [{
        "name": "body",
        "in": "body",
        "required": 1
    }]],
    ["AggregateDeviceCountCollection", "POST", "/falcon-complete-dashboards/aggregates/devicecount-collections/GET/v1", "Retrieve aggregate host/devices count based on the matched filter", "falcon_complete_dashboard", [{
        "name": "body",
        "in": "body",
        "required": 1
    }]],
    ["AggregateEscalations", "POST", "/falcon-complete-dashboards/aggregates/escalations/GET/v1", "Retrieve aggregate escalation ticket values based on the matched filter", "falcon_complete_dashboard", [{
        "name": "body",
        "in": "body",
        "required": 1
    }]],
    ["AggregateFCIncidents", "POST", "/falcon-complete-dashboards/aggregates/incidents/GET/v1", "Retrieve aggregate incident values based on the matched filter", "falcon_complete_dashboard", [{
        "name": "body",
        "in": "body",
        "required": 1
    }]],
    ["AggregateRemediations", "POST", "/falcon-complete-dashboards/aggregates/remediations/GET/v1", "Retrieve aggregate remediation ticket values based on the matched filter", "falcon_complete_dashboard", [{
        "name": "body",
        "in": "body",
        "required": 1
    }]],
    ["QueryAlertIdsByFilter", "GET", "/falcon-complete-dashboards/queries/alerts/v1", "Retrieve Alerts Ids that match the provided FQL filter criteria with scrolling enabled", "falcon_complete_dashboard", [{
        "type": "integer",
        "description": "The maximum records to return. [1-500]",
        "name": "limit",
        "in": "query"
    }, {
        "type": "string",
        "description": "The property to sort on, followed by a dot (.), followed by the sort direction, either \"asc\" or \"desc\".",
        "name": "sort",
        "in": "query"
    }, {
        "type": "string",
        "description": "Optional filter and sort criteria in the form of an FQL query. For more information about FQL queries, see [our FQL documentation](https://falconpy.io/Usage/Falcon-Query-Language).",
        "name": "filter",
        "in": "query"
    }, {
        "type": "string",
        "description": "Starting index of overall result set from which to return ids.",
        "name": "offset",
        "in": "query"
    }]],
    ["QueryAllowListFilter", "GET", "/falcon-complete-dashboards/queries/allowlist/v1", "Retrieve allowlist tickets that match the provided filter criteria with scrolling enabled", "falcon_complete_dashboard", [{
        "type": "integer",
        "description": "The maximum records to return. [1-500]",
        "name": "limit",
        "in": "query"
    }, {
        "type": "string",
        "description": "The property to sort on, followed by a dot (.), followed by the sort direction, either \"asc\" or \"desc\".",
        "name": "sort",
        "in": "query"
    }, {
        "type": "string",
        "description": "Optional filter and sort criteria in the form of an FQL query. For more information about FQL queries, see [our FQL documentation in Falcon](https://falcon.crowdstrike.com/support/documentation/45/falcon-query-language-feature-guide).",
        "name": "filter",
        "in": "query"
    }, {
        "type": "string",
        "description": "Starting index of overall result set from which to return ids.",
        "name": "offset",
        "in": "query"
    }]],
    ["QueryBlockListFilter", "GET", "/falcon-complete-dashboards/queries/blocklist/v1", "Retrieve block listtickets that match the provided filter criteria with scrolling enabled", "falcon_complete_dashboard", [{
        "type": "integer",
        "description": "The maximum records to return. [1-500]",
        "name": "limit",
        "in": "query"
    }, {
        "type": "string",
        "description": "The property to sort on, followed by a dot (.), followed by the sort direction, either \"asc\" or \"desc\".",
        "name": "sort",
        "in": "query"
    }, {
        "type": "string",
        "description": "Optional filter and sort criteria in the form of an FQL query. For more information about FQL queries, see [our FQL documentation in Falcon](https://falcon.crowdstrike.com/support/documentation/45/falcon-query-language-feature-guide).",
        "name": "filter",
        "in": "query"
    }, {
        "type": "string",
        "description": "Starting index of overall result set from which to return ids.",
        "name": "offset",
        "in": "query"
    }]],
    ["QueryDetectionIdsByFilter", "GET", "/falcon-complete-dashboards/queries/detects/v1", "Retrieve DetectionsIds that match the provided FQL filter, criteria with scrolling enabled", "falcon_complete_dashboard", [{
        "type": "integer",
        "description": "The maximum records to return. [1-500]",
        "name": "limit",
        "in": "query"
    }, {
        "type": "string",
        "description": "The property to sort on, followed by a dot (.), followed by the sort direction, either \"asc\" or \"desc\".",
        "name": "sort",
        "in": "query"
    }, {
        "type": "string",
        "description": "Optional filter and sort criteria in the form of an FQL query. For more information about FQL queries, see [our FQL documentation in Falcon](https://falcon.crowdstrike.com/support/documentation/45/falcon-query-language-feature-guide).",
        "name": "filter",
        "in": "query"
    }, {
        "type": "string",
        "description": "Starting index of overall result set from which to return ids.",
        "name": "offset",
        "in": "query"
    }]],
    ["GetDeviceCountCollectionQueriesByFilter", "GET", "/falcon-complete-dashboards/queries/devicecount-collections/v1", "Retrieve device count collection Ids that match the provided FQL filter, criteria with scrolling enabled", "falcon_complete_dashboard", [{
        "type": "integer",
        "description": "The maximum records to return. [1-500]",
        "name": "limit",
        "in": "query"
    }, {
        "type": "string",
        "description": "The property to sort on, followed by a dot (.), followed by the sort direction, either \"asc\" or \"desc\".",
        "name": "sort",
        "in": "query"
    }, {
        "type": "string",
        "description": "Optional filter and sort criteria in the form of an FQL query. For more information about FQL queries, see [our FQL documentation in Falcon](https://falcon.crowdstrike.com/support/documentation/45/falcon-query-language-feature-guide).",
        "name": "filter",
        "in": "query"
    }, {
        "type": "string",
        "description": "Starting index of overall result set from which to return ids.",
        "name": "offset",
        "in": "query"
    }]],
    ["QueryEscalationsFilter", "GET", "/falcon-complete-dashboards/queries/escalations/v1", "Retrieve escalation tickets that match the provided filter criteria with scrolling enabled", "falcon_complete_dashboard", [{
        "type": "integer",
        "description": "The maximum records to return. [1-500]",
        "name": "limit",
        "in": "query"
    }, {
        "type": "string",
        "description": "The property to sort on, followed by a dot (.), followed by the sort direction, either \"asc\" or \"desc\".",
        "name": "sort",
        "in": "query"
    }, {
        "type": "string",
        "description": "Optional filter and sort criteria in the form of an FQL query. For more information about FQL queries, see [our FQL documentation in Falcon](https://falcon.crowdstrike.com/support/documentation/45/falcon-query-language-feature-guide).",
        "name": "filter",
        "in": "query"
    }, {
        "type": "string",
        "description": "Starting index of overall result set from which to return ids.",
        "name": "offset",
        "in": "query"
    }]],
    ["QueryIncidentIdsByFilter", "GET", "/falcon-complete-dashboards/queries/incidents/v1", "Retrieve incidents that match the provided filter criteria with scrolling enabled", "falcon_complete_dashboard", [{
        "type": "integer",
        "description": "The maximum records to return. [1-500]",
        "name": "limit",
        "in": "query"
    }, {
        "type": "string",
        "description": "The property to sort on, followed by a dot (.), followed by the sort direction, either \"asc\" or \"desc\".",
        "name": "sort",
        "in": "query"
    }, {
        "type": "string",
        "description": "Optional filter and sort criteria in the form of an FQL query. For more information about FQL queries, see [our FQL documentation in Falcon](https://falcon.crowdstrike.com/support/documentation/45/falcon-query-language-feature-guide).",
        "name": "filter",
        "in": "query"
    }, {
        "type": "string",
        "description": "Starting index of overall result set from which to return ids.",
        "name": "offset",
        "in": "query"
    }]],
    ["QueryRemediationsFilter", "GET", "/falcon-complete-dashboards/queries/remediations/v1", "Retrieve remediation tickets that match the provided filter criteria with scrolling enabled", "falcon_complete_dashboard", [{
        "type": "integer",
        "description": "The maximum records to return. [1-500]",
        "name": "limit",
        "in": "query"
    }, {
        "type": "string",
        "description": "The property to sort on, followed by a dot (.), followed by the sort direction, either \"asc\" or \"desc\".",
        "name": "sort",
        "in": "query"
    }, {
        "type": "string",
        "description": "Optional filter and sort criteria in the form of an FQL query. For more information about FQL queries, see [our FQL documentation in Falcon](https://falcon.crowdstrike.com/support/documentation/45/falcon-query-language-feature-guide).",
        "name": "filter",
        "in": "query"
    }, {
        "type": "string",
        "description": "Starting index of overall result set from which to return ids.",
        "name": "offset",
        "in": "query"
    }]]
];