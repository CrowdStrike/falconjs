/**
 * contains all method definitions for API: installation tokens
 * consumed and interpreted by Falcon.command(...)
 */
export const _installation_tokens_endpoints: Array<any> = [
    [
        "audit_events_read",
        "GET",
        "/installation-tokens/entities/audit-events/v1",
        "Gets the details of one or more audit events by id.",
        "installation_tokens",
        [
            {
                type: "array",
                items: {
                    type: "string",
                },
                collectionFormat: "multi",
                description: "IDs of audit events to retrieve details for",
                name: "ids",
                in: "query",
            },
        ],
    ],
    ["customer_settings_read", "GET", "/installation-tokens/entities/customer-settings/v1", "Check current installation token settings.", "installation_tokens", []],
    [
        "tokens_read",
        "GET",
        "/installation-tokens/entities/tokens/v1",
        "Gets the details of one or more tokens by id.",
        "installation_tokens",
        [
            {
                type: "array",
                items: {
                    type: "string",
                },
                collectionFormat: "multi",
                description: "IDs of tokens to retrieve details for",
                name: "ids",
                in: "query",
            },
        ],
    ],
    [
        "tokens_create",
        "POST",
        "/installation-tokens/entities/tokens/v1",
        "Creates a token.",
        "installation_tokens",
        [
            {
                name: "body",
                in: "body",
                required: 1,
            },
        ],
    ],
    [
        "tokens_update",
        "PATCH",
        "/installation-tokens/entities/tokens/v1",
        "Updates one or more tokens. Use this endpoint to edit labels, change expiration, revoke, or restore.",
        "installation_tokens",
        [
            {
                type: "array",
                items: {
                    type: "string",
                },
                collectionFormat: "csv",
                description: "The token ids to update.",
                name: "ids",
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
        "tokens_delete",
        "DELETE",
        "/installation-tokens/entities/tokens/v1",
        "Deletes a token immediately. To revoke a token, use PATCH /installation-tokens/entities/tokens/v1 instead.",
        "installation_tokens",
        [
            {
                type: "array",
                items: {
                    type: "string",
                },
                collectionFormat: "csv",
                description: "The token ids to delete.",
                name: "ids",
                in: "query",
                required: 1,
            },
        ],
    ],
    [
        "audit_events_query",
        "GET",
        "/installation-tokens/queries/audit-events/v1",
        "Search for audit events by providing an FQL filter and paging details.",
        "installation_tokens",
        [
            {
                type: "integer",
                description: "The offset to start retrieving records from.",
                name: "offset",
                in: "query",
            },
            {
                type: "integer",
                description: "The maximum records to return. [1-1000]. Defaults to 50.",
                name: "limit",
                in: "query",
            },
            {
                type: "string",
                description: "The property to sort by (e.g. timestamp.desc).",
                name: "sort",
                in: "query",
            },
            {
                type: "string",
                description: "The filter expression that should be used to limit the results (e.g., `action:'token_create'`).",
                name: "filter",
                in: "query",
            },
        ],
    ],
    [
        "tokens_query",
        "GET",
        "/installation-tokens/queries/tokens/v1",
        "Search for tokens by providing an FQL filter and paging details.",
        "installation_tokens",
        [
            {
                type: "integer",
                description: "The offset to start retrieving records from.",
                name: "offset",
                in: "query",
            },
            {
                type: "integer",
                description: "The maximum records to return. [1-1000]. Defaults to 50.",
                name: "limit",
                in: "query",
            },
            {
                type: "string",
                description: "The property to sort by (e.g. created_timestamp.desc).",
                name: "sort",
                in: "query",
            },
            {
                type: "string",
                description: "The filter expression that should be used to limit the results (e.g., `status:'valid'`).",
                name: "filter",
                in: "query",
            },
        ],
    ],
    [
        "customer_settings_update",
        "PATCH",
        "/installation-tokens/entities/customer-settings/v1",
        "Update installation token settings.",
        "installation_tokens_settings",
        [
            {
                name: "body",
                in: "body",
                required: 1,
            },
        ],
    ],
];
