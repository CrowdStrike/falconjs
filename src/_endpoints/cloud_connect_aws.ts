/**
 * contains all method definitions for API: cloud connect aws
 * consumed and interpreted by Falcon.command(...)
 */
export var _cloud_connect_aws_endpoints: Array<any> = [
    ["QueryAWSAccounts", "GET", "/cloud-connect-aws/combined/accounts/v1", "Search for provisioned AWS Accounts by providing an FQL filter and paging details. Returns a set of AWS accounts which match the filter criteria", "cloud_connect_aws", [{
        "maxLength": 1000,
        "minLength": 1,
        "type": "integer",
        "default": 100,
        "description": "The maximum records to return. [1-1000]. Defaults to 100.",
        "name": "limit",
        "in": "query"
    }, {
        "type": "integer",
        "description": "The offset to start retrieving records from",
        "name": "offset",
        "in": "query"
    }, {
        "type": "string",
        "description": "The property to sort by (e.g. alias.desc or state.asc)",
        "name": "sort",
        "in": "query"
    }, {
        "type": "string",
        "description": "The filter expression that should be used to limit the results",
        "name": "filter",
        "in": "query"
    }]],
    ["GetAWSSettings", "GET", "/cloud-connect-aws/combined/settings/v1", "Retrieve a set of Global Settings which are applicable to all provisioned AWS accounts", "cloud_connect_aws", []],
    ["GetAWSAccounts", "GET", "/cloud-connect-aws/entities/accounts/v1", "Retrieve a set of AWS Accounts by specifying their IDs", "cloud_connect_aws", [{
        "maxItems": 5000,
        "type": "array",
        "items": {
            "type": "string"
        },
        "collectionFormat": "multi",
        "description": "IDs of accounts to retrieve details",
        "name": "ids",
        "in": "query",
        "required": 1
    }]],
    ["ProvisionAWSAccounts", "POST", "/cloud-connect-aws/entities/accounts/v1", "Provision AWS Accounts by specifying details about the accounts to provision", "cloud_connect_aws", [{
        "enum": ["cloudformation", "manual"],
        "type": "string",
        "default": "manual",
        "description": "Mode for provisioning. Allowed values are `manual` or `cloudformation`. Defaults to manual if not defined.",
        "name": "mode",
        "in": "query"
    }, {
        "name": "body",
        "in": "body",
        "required": 1
    }]],
    ["UpdateAWSAccounts", "PATCH", "/cloud-connect-aws/entities/accounts/v1", "Update AWS Accounts by specifying the ID of the account and details to update", "cloud_connect_aws", [{
        "name": "body",
        "in": "body",
        "required": 1
    }]],
    ["DeleteAWSAccounts", "DELETE", "/cloud-connect-aws/entities/accounts/v1", "Delete a set of AWS Accounts by specifying their IDs", "cloud_connect_aws", [{
        "type": "array",
        "items": {
            "type": "string"
        },
        "collectionFormat": "multi",
        "description": "IDs of accounts to remove",
        "name": "ids",
        "in": "query",
        "required": 1
    }]],
    ["CreateOrUpdateAWSSettings", "POST", "/cloud-connect-aws/entities/settings/v1", "Create or update Global Settings which are applicable to all provisioned AWS accounts", "cloud_connect_aws", [{
        "name": "body",
        "in": "body",
        "required": 1
    }]],
    ["VerifyAWSAccountAccess", "POST", "/cloud-connect-aws/entities/verify-account-access/v1", "Performs an Access Verification check on the specified AWS Account IDs", "cloud_connect_aws", [{
        "type": "array",
        "items": {
            "type": "string"
        },
        "collectionFormat": "multi",
        "description": "IDs of accounts to verify access on",
        "name": "ids",
        "in": "query",
        "required": 1
    }]],
    ["QueryAWSAccountsForIDs", "GET", "/cloud-connect-aws/queries/accounts/v1", "Search for provisioned AWS Accounts by providing an FQL filter and paging details. Returns a set of AWS account IDs which match the filter criteria", "cloud_connect_aws", [{
        "maxLength": 1000,
        "minLength": 1,
        "type": "integer",
        "default": 100,
        "description": "The maximum records to return. [1-1000]. Defaults to 100.",
        "name": "limit",
        "in": "query"
    }, {
        "type": "integer",
        "description": "The offset to start retrieving records from",
        "name": "offset",
        "in": "query"
    }, {
        "type": "string",
        "description": "The property to sort by (e.g. alias.desc or state.asc)",
        "name": "sort",
        "in": "query"
    }, {
        "type": "string",
        "description": "The filter expression that should be used to limit the results",
        "name": "filter",
        "in": "query"
    }]]
];