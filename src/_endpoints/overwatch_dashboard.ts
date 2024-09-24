/**
 * contains all method definitions for API: overwatch dashboard
 * consumed and interpreted by Falcon.command(...)
 */
export const _overwatch_dashboard_endpoints: Array<any> = [
    [
        "AggregatesDetectionsGlobalCounts",
        "GET",
        "/overwatch-dashboards/aggregates/detections-global-counts/v1",
        "Get the total number of detections pushed across all customers",
        "overwatch_dashboard",
        [
            {
                type: "string",
                description: "An FQL filter string",
                name: "filter",
                in: "query",
                required: 1,
            },
        ],
    ],
    [
        "AggregatesEventsCollections",
        "POST",
        "/overwatch-dashboards/aggregates/events-collections/GET/v1",
        "Get OverWatch detection event collection info by providing an aggregate query",
        "overwatch_dashboard",
        [
            {
                name: "body",
                in: "body",
                required: 1,
            },
        ],
    ],
    [
        "AggregatesEvents",
        "POST",
        "/overwatch-dashboards/aggregates/events/GET/v1",
        "Get aggregate OverWatch detection event info by providing an aggregate query",
        "overwatch_dashboard",
        [
            {
                name: "body",
                in: "body",
                required: 1,
            },
        ],
    ],
    [
        "AggregatesIncidentsGlobalCounts",
        "GET",
        "/overwatch-dashboards/aggregates/incidents-global-counts/v1",
        "Get the total number of incidents pushed across all customers",
        "overwatch_dashboard",
        [
            {
                type: "string",
                description: "An FQL filter string",
                name: "filter",
                in: "query",
                required: 1,
            },
        ],
    ],
    [
        "AggregatesOWEventsGlobalCounts",
        "GET",
        "/overwatch-dashboards/aggregates/ow-events-global-counts/v1",
        "Get the total number of OverWatch events across all customers",
        "overwatch_dashboard",
        [
            {
                type: "string",
                description: "An FQL filter string",
                name: "filter",
                in: "query",
                required: 1,
            },
        ],
    ],
];
