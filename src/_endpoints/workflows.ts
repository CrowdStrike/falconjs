/**
 * contains all method definitions for API: workflows
 * consumed and interpreted by Falcon.command(...)
 */
export const _workflows_endpoints: Array<any> = [
    ["WorkflowExecute", "POST", "/workflows/entities/execute/v1", "Executes an on-demand Workflow, the body is JSON used to trigger the execution, the response the execution ID(s)", "workflows", [{
        "type": "array",
        "items": {
            "type": "string"
        },
        "collectionFormat": "csv",
        "description": "Definition ID to execute, either a name or an ID can be specified.",
        "name": "definition_id",
        "in": "query"
    }, {
        "type": "string",
        "description": "Workflow name to execute, either a name or an ID can be specified.",
        "name": "name",
        "in": "query"
    }, {
        "type": "string",
        "description": "Key used to help deduplicate executions, if unset a new UUID is used",
        "name": "key",
        "in": "query"
    }, {
        "type": "integer",
        "description": "Used to record the execution depth to help limit execution loops when a workflow triggers another. The maximum depth is 4.",
        "name": "depth",
        "in": "query"
    }, {
        "name": "body",
        "in": "body",
        "required": 1
    }]],
    ["WorkflowExecutionsAction", "POST", "/workflows/entities/execution-actions/v1", "Allows a user to resume/retry a failed workflow execution.", "workflows", [{
        "enum": ["resume"],
        "type": "string",
        "description": "Specify one of these actions:\n\n- `resume`: resume/retry the workflow execution(s) specified in ids",
        "name": "action_name",
        "in": "query",
        "required": 1
    }, {
        "name": "body",
        "in": "body",
        "required": 1
    }]],
    ["WorkflowExecutionResults", "GET", "/workflows/entities/execution-results/v1", "Get execution result of a given execution", "workflows", [{
        "maxItems": 500,
        "minItems": 1,
        "type": "array",
        "items": {
            "type": "string"
        },
        "collectionFormat": "csv",
        "description": "workflow execution id to return results for.",
        "name": "ids",
        "in": "query",
        "required": 1
    }]],
    ["WorkflowSystemDefinitionsDeProvision", "POST", "/workflows/system-definitions/deprovision/v1", "Deprovisions a system definition that was previously provisioned on the target CID", "workflows", [{
        "name": "body",
        "in": "body",
        "required": 1
    }]],
    ["WorkflowSystemDefinitionsPromote", "POST", "/workflows/system-definitions/promote/v1", "Promotes a version of a system definition on a customer. The customer must already have been provisioned. This allows the callerto apply an updated template version to a specific cid and expects all parameters to be supplied. If the template supports multi-instancethe customer scope definition ID must be supplied to determine which customer workflow should be updated.", "workflows", [{
        "name": "body",
        "in": "body",
        "required": 1
    }]],
    ["WorkflowSystemDefinitionsProvision", "POST", "/workflows/system-definitions/provision/v1", "Provisions a system definition onto the target CID by using the template and provided parameters", "workflows", [{
        "name": "body",
        "in": "body",
        "required": 1
    }]]
];