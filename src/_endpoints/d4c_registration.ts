/**
 * contains all method definitions for API: d4c registration
 * consumed and interpreted by Falcon.command(...)
 */
export var _d4c_registration_endpoints: Array<any> = [
    ["GetD4CAwsAccount", "GET", "/cloud-connect-aws/entities/account/v2", "Returns information about the current status of an AWS account.", "d4c_registration", [{
        "maxLength": 4,
        "minLength": 3,
        "pattern": "^(full|dry)$",
        "type": "string",
        "description": "Type of scan, dry or full, to perform on selected accounts",
        "name": "scan-type",
        "in": "query"
    }, {
        "type": "array",
        "items": {
            "type": "string"
        },
        "collectionFormat": "multi",
        "description": "AWS account IDs",
        "name": "ids",
        "in": "query"
    }, {
        "type": "array",
        "items": {
            "type": "string"
        },
        "collectionFormat": "multi",
        "description": "AWS organization IDs",
        "name": "organization-ids",
        "in": "query"
    }, {
        "pattern": "^(provisioned|operational)$",
        "type": "string",
        "description": "Account status to filter results by.",
        "name": "status",
        "in": "query"
    }, {
        "maxLength": 3,
        "minLength": 1,
        "type": "integer",
        "default": 100,
        "description": "The maximum records to return. Defaults to 100.",
        "name": "limit",
        "in": "query"
    }, {
        "type": "integer",
        "description": "The offset to start retrieving records from",
        "name": "offset",
        "in": "query"
    }, {
        "pattern": "^(true|false)$",
        "enum": ["false", "true"],
        "type": "string",
        "description": "Only return migrated d4c accounts",
        "name": "migrated",
        "in": "query"
    }]],
    ["CreateD4CAwsAccount", "POST", "/cloud-connect-aws/entities/account/v2", "Creates a new account in our system for a customer and generates a script for them to run in their AWS cloud environment to grant us access.", "d4c_registration", [{
        "name": "body",
        "in": "body",
        "required": 1
    }]],
    ["DeleteD4CAwsAccount", "DELETE", "/cloud-connect-aws/entities/account/v2", "Deletes an existing AWS account or organization in our system.", "d4c_registration", [{
        "type": "array",
        "items": {
            "type": "string"
        },
        "collectionFormat": "multi",
        "description": "AWS account IDs to remove",
        "name": "ids",
        "in": "query"
    }, {
        "type": "array",
        "items": {
            "type": "string"
        },
        "collectionFormat": "multi",
        "description": "AWS organization IDs to remove",
        "name": "organization-ids",
        "in": "query"
    }]],
    ["GetD4CAwsConsoleSetupURLs", "GET", "/cloud-connect-aws/entities/console-setup-urls/v1", "Return a URL for customer to visit in their cloud environment to grant us access to their AWS environment.", "d4c_registration", [{
        "pattern": "^[0-9a-z-]{2,}$",
        "type": "string",
        "description": "Region",
        "name": "region",
        "in": "query"
    }]],
    ["GetD4CAWSAccountScriptsAttachment", "GET", "/cloud-connect-aws/entities/user-scripts-download/v1", "Return a script for customer to run in their cloud environment to grant us access to their AWS environment as a downloadable attachment.", "d4c_registration", [{
        "type": "array",
        "items": {
            "type": "string"
        },
        "collectionFormat": "multi",
        "description": "AWS account IDs",
        "name": "ids",
        "in": "query"
    }]],
    ["GetDiscoverCloudAzureAccount", "GET", "/cloud-connect-azure/entities/account/v1", "Return information about Azure account registration", "d4c_registration", [{
        "type": "array",
        "items": {
            "type": "string"
        },
        "collectionFormat": "multi",
        "description": "SubscriptionIDs of accounts to select for this status operation. If this is empty then all accounts are returned.",
        "name": "ids",
        "in": "query"
    }, {
        "type": "array",
        "items": {
            "type": "string"
        },
        "collectionFormat": "multi",
        "description": "Tenant ids to filter azure accounts",
        "name": "tenant_ids",
        "in": "query"
    }, {
        "maxLength": 4,
        "minLength": 3,
        "pattern": "^(full|dry)$",
        "type": "string",
        "description": "Type of scan, dry or full, to perform on selected accounts",
        "name": "scan-type",
        "in": "query"
    }, {
        "pattern": "^(provisioned|operational)$",
        "type": "string",
        "description": "Account status to filter results by.",
        "name": "status",
        "in": "query"
    }, {
        "maxLength": 3,
        "minLength": 1,
        "type": "integer",
        "default": 100,
        "description": "The maximum records to return. Defaults to 100.",
        "name": "limit",
        "in": "query"
    }, {
        "type": "integer",
        "description": "The offset to start retrieving records from",
        "name": "offset",
        "in": "query"
    }]],
    ["CreateDiscoverCloudAzureAccount", "POST", "/cloud-connect-azure/entities/account/v1", "Creates a new account in our system for a customer and generates a script for them to run in their cloud environment to grant us access.", "d4c_registration", [{
        "name": "body",
        "in": "body",
        "required": 1
    }]],
    ["UpdateDiscoverCloudAzureAccountClientID", "PATCH", "/cloud-connect-azure/entities/client-id/v1", "Update an Azure service account in our system by with the user-created client_id created with the public key we've provided", "d4c_registration", [{
        "maxLength": 36,
        "minLength": 36,
        "pattern": "^[0-9a-z-]{36}$",
        "type": "string",
        "description": "ClientID to use for the Service Principal associated with the customer's Azure account",
        "name": "id",
        "in": "query",
        "required": 1
    }, {
        "maxLength": 36,
        "minLength": 36,
        "pattern": "^[0-9a-z-]{36}$",
        "type": "string",
        "description": "Object ID to use for the Service Principal associated with the customer's Azure account",
        "name": "object_id",
        "in": "query"
    }, {
        "maxLength": 36,
        "minLength": 36,
        "pattern": "^[0-9a-z-]{36}$",
        "type": "string",
        "description": "Tenant ID to update client ID for. Required if multiple tenants are registered.",
        "name": "tenant-id",
        "in": "query"
    }]],
    ["DiscoverCloudAzureDownloadCertificate", "GET", "/cloud-connect-azure/entities/download-certificate/v1", "Returns JSON object(s) that contain the base64 encoded certificate for a service principal.", "d4c_registration", [{
        "type": "array",
        "items": {
            "maxLength": 36,
            "minLength": 36,
            "pattern": "^[0-9a-z-]{36}$",
            "type": "string"
        },
        "collectionFormat": "multi",
        "description": "Azure Tenant ID",
        "name": "tenant_id",
        "in": "query",
        "required": 1
    }, {
        "type": "boolean",
        "default": 0,
        "description": "Setting to true will invalidate the current certificate and generate a new certificate",
        "name": "refresh",
        "in": "query"
    }, {
        "maxLength": 2,
        "minLength": 1,
        "pattern": "^[0-9]{1,2}$",
        "type": "string",
        "description": "Years the certificate should be valid (only used when refresh=true)",
        "name": "years_valid",
        "in": "query"
    }]],
    ["GetDiscoverCloudAzureTenantIDs", "GET", "/cloud-connect-azure/entities/tenant-id/v1", "Return available tenant ids for discover for cloud", "d4c_registration", []],
    ["GetDiscoverCloudAzureUserScriptsAttachment", "GET", "/cloud-connect-azure/entities/user-scripts-download/v1", "Return a script for customer to run in their cloud environment to grant us access to their Azure environment as a downloadable attachment", "d4c_registration", [{
        "type": "array",
        "items": {
            "type": "string"
        },
        "collectionFormat": "csv",
        "description": "Azure Tenant ID",
        "name": "tenant-id",
        "in": "query",
        "required": 1
    }, {
        "type": "array",
        "items": {
            "type": "string"
        },
        "collectionFormat": "csv",
        "description": "Azure Subscription ID",
        "name": "subscription_ids",
        "in": "query"
    }, {
        "type": "string",
        "description": "Template to be rendered",
        "name": "template",
        "in": "query"
    }]],
    ["GetDiscoverCloudAzureUserScripts", "GET", "/cloud-connect-azure/entities/user-scripts/v1", "Return a script for customer to run in their cloud environment to grant us access to their Azure environment", "d4c_registration", []],
    ["GetD4CCGPAccount", "GET", "/cloud-connect-gcp/entities/account/v1", "Returns information about the current status of an GCP account.", "d4c_registration", [{
        "enum": ["Folder", "Organization", "Project"],
        "type": "string",
        "description": "GCP Hierarchy Parent Type, organization/folder/project",
        "name": "parent_type",
        "in": "query"
    }, {
        "type": "array",
        "items": {
            "type": "string"
        },
        "collectionFormat": "multi",
        "description": "Hierarchical Resource IDs of accounts",
        "name": "ids",
        "in": "query"
    }, {
        "enum": ["dry", "full"],
        "type": "string",
        "description": "Type of scan, dry or full, to perform on selected accounts",
        "name": "scan-type",
        "in": "query"
    }, {
        "enum": ["operational", "provisioned"],
        "type": "string",
        "description": "Account status to filter results by.",
        "name": "status",
        "in": "query"
    }, {
        "maxLength": 3,
        "minLength": 1,
        "type": "integer",
        "default": 100,
        "description": "The maximum records to return. Defaults to 100.",
        "name": "limit",
        "in": "query"
    }, {
        "type": "integer",
        "description": "The offset to start retrieving records from",
        "name": "offset",
        "in": "query"
    }, {
        "type": "string",
        "description": "Order fields in ascending or descending order. Ex: parent_type|asc.",
        "name": "sort",
        "in": "query"
    }]],
    ["CreateD4CGCPAccount", "POST", "/cloud-connect-gcp/entities/account/v1", "Creates a new account in our system for a customer and generates a new service account for them to add access to in their GCP environment to grant us access.", "d4c_registration", [{
        "name": "body",
        "in": "body",
        "required": 1
    }]],
    ["GetCSPMGCPUserScriptsAttachment", "GET", "/cloud-connect-gcp/entities/user-scripts-download/v1", "Return a script for customer to run in their cloud environment to grant us access to their GCP environment as a downloadable attachment", "d4c_registration", []],
    ["GetD4CGCPUserScripts", "GET", "/cloud-connect-gcp/entities/user-scripts/v1", "Return a script for customer to run in their cloud environment to grant us access to their GCP environment", "d4c_registration", [{
        "enum": ["Folder", "Organization", "Project"],
        "type": "string",
        "description": "GCP Hierarchy Parent Type, organization/folder/project",
        "name": "parent_type",
        "in": "query"
    }]],
    ["GetHorizonD4CScripts", "GET", "/settings-discover/entities/gen/scripts/v1", "Returns static install scripts for Horizon.", "d4c_registration", [{
        "pattern": "^(true|false)$",
        "enum": ["false", "true"],
        "type": "string",
        "description": "Get static script for single account",
        "name": "single_account",
        "in": "query"
    }, {
        "pattern": "^o-[0-9a-z]{10,32}$",
        "type": "string",
        "description": "AWS organization ID",
        "name": "organization-id",
        "in": "query"
    }, {
        "pattern": "^(true|false)$",
        "enum": ["false", "true"],
        "type": "string",
        "name": "delete",
        "in": "query"
    }, {
        "pattern": "^(commercial|gov)$",
        "enum": ["commercial", "gov"],
        "type": "string",
        "description": "Account type (e.g.: commercial,gov) Only applicable when registering AWS commercial account in a Gov environment",
        "name": "account_type",
        "in": "query"
    }]]
];