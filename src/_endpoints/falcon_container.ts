/**
 * contains all method definitions for API: falcon container
 * consumed and interpreted by Falcon.command(...)
 */
export var _falcon_container_endpoints: Array<any> = [
    ["GetCredentials", "GET", "/container-security/entities/image-registry-credentials/v1", "Gets the registry credentials", "falcon_container", []],
    ["GetCombinedImages", "GET", "/container-security/combined/image-assessment/images/v1", "Get image assessment results by providing an FQL filter and paging details", "falcon_container_image", [{
        "type": "string",
        "description": "Filter images using a query in Falcon Query Language (FQL). Supported filters:  container_running_status, cve_id, first_seen, registry, repository, tag, vulnerability_severity",
        "name": "filter",
        "in": "query"
    }, {
        "type": "integer",
        "description": "The upper-bound on the number of records to retrieve [1-100]",
        "name": "limit",
        "in": "query"
    }, {
        "type": "integer",
        "description": "The offset from where to begin.",
        "name": "offset",
        "in": "query"
    }, {
        "type": "string",
        "description": "The fields to sort the records on. Supported columns:  [first_seen registry repository tag vulnerability_severity]",
        "name": "sort",
        "in": "query"
    }]],
    ["ReadImageVulnerabilities", "POST", "/image-assessment/combined/vulnerability-lookups/v1", "Retrieve known vulnerabilities for the provided image", "falcon_container_cli", [{
        "name": "body",
        "in": "body",
        "required": 1
    }]],
    ["GetImageAssessmentReport", "GET", "/reports", "Retrieves the Assessment report for the Image ID provided.", "falcon_container", [{
        "type": "string",
        "description": "The hash digest for the image.",
        "name": "digest",
        "in": "query",
        "required": 0
    }, {
        "type": "string",
        "description": "The image ID.",
        "name": "image_id",
        "in": "query",
        "required": 0
    }, {
        "type": "string",
        "description": "The repository the image resides within.",
        "name": "repository",
        "in": "query",
        "required": 0
    }, {
        "type": "string",
        "description": "The image tag.",
        "name": "tag",
        "in": "query",
        "required": 0
    }]],
    ["DeleteImageDetails", "DELETE", "/images/{}", "Delete Images by ids.", "falcon_container", [{
        "type": "string",
        "description": "The ID of the image to be deleted.",
        "name": "image_id",
        "in": "path",
        "required": 1
    }]],
    ["ImageMatchesPolicy", "GET", "/policy-checks", "After an image scan, use this operation to see if any images match a policy. If deny is true, the policy suggestion is that you do not deploy the image in your environment.", "falcon_container", [{
        "type": "string",
        "description": "The repository the image resides within.",
        "name": "repository",
        "in": "query",
        "required": 1
    }, {
        "type": "string",
        "description": "The image tag.",
        "name": "tag",
        "in": "query",
        "required": 1
    }]],
    ["ReadRegistryEntities", "GET", "/container-security/queries/registries/v1", "Retrieve registry entities identified by the customer ID.", "falcon_container_image", [{
        "type": "string",
        "description": "Starting index of result set from which to return IDs.",
        "name": "offset",
        "in": "query"
    }, {
        "type": "integer",
        "description": "Number of IDs to return.",
        "name": "limit",
        "in": "query"
    }, {
        "type": "string",
        "description": "Order by fields.",
        "name": "sort",
        "in": "query"
    }]],
    ["CreateRegistryEntities", "POST", "/container-security/entities/registries/v1", "Create a registry entity using the provided details.", "falcon_container_image", [{
        "name": "body",
        "in": "body",
        "required": 1
    }]],
    ["DeleteRegistryEntities", "DELETE", "/container-security/entities/registries/v1", "Delete the registry entity identified by the entity UUID.", "falcon_container_image", [{
        "type": "string",
        "description": "Registry entity UUID.",
        "name": "ids",
        "in": "query",
        "required": 1
    }]],
    ["UpdateRegistryEntities", "PATCH", "/container-security/entities/registries/v1", "Update the registry entity, as identified by the entity UUID, using the provided details.", "falcon_container_image", [{
        "type": "string",
        "description": "Registry entity UUID.",
        "name": "id",
        "in": "query",
        "required": 1
    }, {
        "name": "body",
        "in": "body",
        "required": 1
    }]],
    ["ReadRegistryEntitiesByUUID", "GET", "/container-security/entities/registries/v1", "Retrieve the registry entity identified by the entity UUID.", "falcon_container_image", [{
        "type": "string",
        "description": "Registry entity UUID.",
        "name": "ids",
        "in": "query",
        "required": 1
    }]]
];