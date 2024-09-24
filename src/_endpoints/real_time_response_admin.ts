/**
 * contains all method definitions for API: real time response admin
 * consumed and interpreted by Falcon.command(...)
 */
export const _real_time_response_admin_endpoints: Array<any> = [
    ["BatchAdminCmd", "POST", "/real-time-response/combined/batch-admin-command/v1", "Batch executes a RTR administrator command across the hosts mapped to the given batch ID.", "real_time_response_admin", [{
        "type": "integer",
        "default": 30,
        "description": "Timeout for how long to wait for the request in seconds, default timeout is 30 seconds. Maximum is 10 minutes.",
        "name": "timeout",
        "in": "query"
    }, {
        "type": "string",
        "default": "30s",
        "description": "Timeout duration for for how long to wait for the request in duration syntax. Example, `10s`. Valid units: `ns, us, ms, s, m, h`. Maximum is 10 minutes.",
        "name": "timeout_duration",
        "in": "query"
    }, {
        "type": "string",
        "default": "tiny bit less than overall request timeout",
        "description": "Timeout duration for how long a host has time to complete processing. Default value is a bit less than the overall timeout value. It cannot be greater than the overall request timeout. Maximum is < 10 minutes. Example, `10s`. Valid units: `ns, us, ms, s, m, h`. ",
        "name": "host_timeout_duration",
        "in": "query"
    }, {
        "description": "Use this endpoint to run these [real time response commands](https://falcon.crowdstrike.com/support/documentation/11/getting-started-guide#rtr_commands):\n- `cat`\n- `cd`\n- `clear`\n- `cp`\n- `encrypt`\n- `env`\n- `eventlog`\n- `filehash`\n- `get`\n- `getsid`\n- `help`\n- `history`\n- `ipconfig`\n- `kill`\n- `ls`\n- `map`\n- `memdump`\n- `mkdir`\n- `mount`\n- `mv`\n- `netstat`\n- `ps`\n- `put`\n- `reg query`\n- `reg set`\n- `reg delete`\n- `reg load`\n- `reg unload`\n- `restart`\n- `rm`\n- `run`\n- `runscript`\n- `shutdown`\n- `unmap`\n- `update history`\n- `update install`\n- `update list`\n- `update query`\n- `xmemdump`\n- `zip`\n\n**`base_command`** Active-Responder command type we are going to execute, for example: `get` or `cp`.  Refer to the RTR documentation for the full list of commands.\n**`batch_id`** Batch ID to execute the command on.  Received from `/real-time-response/combined/init-sessions/v1`.\n**`command_string`** Full command string for the command. For example  `get some_file.txt`\n**`optional_hosts`** List of a subset of hosts we want to run the command on.  If this list is supplied, only these hosts will receive the command.",
        "name": "body",
        "in": "body",
        "required": 1
    }]],
    ["RTR_CheckAdminCommandStatus", "GET", "/real-time-response/entities/admin-command/v1", "Get status of an executed RTR administrator command on a single host.", "real_time_response_admin", [{
        "type": "string",
        "description": "Cloud Request ID of the executed command to query",
        "name": "cloud_request_id",
        "in": "query",
        "required": 1
    }, {
        "type": "integer",
        "default": 0,
        "description": "Sequence ID that we want to retrieve. Command responses are chunked across sequences",
        "name": "sequence_id",
        "in": "query",
        "required": 1
    }]],
    ["RTR_ExecuteAdminCommand", "POST", "/real-time-response/entities/admin-command/v1", "Execute a RTR administrator command on a single host.", "real_time_response_admin", [{
        "description": "Use this endpoint to run these [real time response commands](https://falcon.crowdstrike.com/support/documentation/11/getting-started-guide#rtr_commands):\n- `cat`\n- `cd`\n- `clear`\n- `cp`\n- `encrypt`\n- `env`\n- `eventlog`\n- `filehash`\n- `get`\n- `getsid`\n- `help`\n- `history`\n- `ipconfig`\n- `kill`\n- `ls`\n- `map`\n- `memdump`\n- `mkdir`\n- `mount`\n- `mv`\n- `netstat`\n- `ps`\n- `put`\n- `reg query`\n- `reg set`\n- `reg delete`\n- `reg load`\n- `reg unload`\n- `restart`\n- `rm`\n- `run`\n- `runscript`\n- `shutdown`\n- `unmap`\n- `update history`\n- `update install`\n- `update list`\n- `update query`\n- `xmemdump`\n- `zip`\n\nRequired values.  The rest of the fields are unused.\n**`base_command`** Active-Responder command type we are going to execute, for example: `get` or `cp`.  Refer to the RTR documentation for the full list of commands.\n**`command_string`** Full command string for the command. For example  `get some_file.txt`\n**`session_id`** RTR session ID to run the command on",
        "name": "body",
        "in": "body",
        "required": 1
    }]],
    ["RTR_GetPut_Files", "GET", "/real-time-response/entities/put-files/v1", "Get put-files based on the ID's given. These are used for the RTR `put` command.", "real_time_response_admin", [{
        "type": "array",
        "items": {
            "type": "string"
        },
        "collectionFormat": "multi",
        "description": "File IDs",
        "name": "ids",
        "in": "query",
        "required": 1
    }]],
    ["RTR_CreatePut_Files", "POST", "/real-time-response/entities/put-files/v1", "Upload a new put-file to use for the RTR `put` command.", "real_time_response_admin", [{
        "type": "file",
        "description": "put-file to upload",
        "name": "file",
        "in": "formData",
        "required": 1
    }, {
        "type": "string",
        "description": "File description",
        "name": "description",
        "in": "formData",
        "required": 1
    }, {
        "type": "string",
        "description": "File name (if different than actual file name)",
        "name": "name",
        "in": "formData"
    }, {
        "maxLength": 4096,
        "type": "string",
        "description": "The audit log comment",
        "name": "comments_for_audit_log",
        "in": "formData"
    }]],
    ["RTR_DeletePut_Files", "DELETE", "/real-time-response/entities/put-files/v1", "Delete a put-file based on the ID given.  Can only delete one file at a time.", "real_time_response_admin", [{
        "type": "string",
        "description": "File id",
        "name": "ids",
        "in": "query",
        "required": 1
    }]],
    ["RTR_GetPut_FilesV2", "GET", "/real-time-response/entities/put-files/v2", "Get put-files based on the ID's given. These are used for the RTR `put` command.", "real_time_response_admin", [{
        "type": "array",
        "items": {
            "type": "string"
        },
        "collectionFormat": "multi",
        "description": "File IDs",
        "name": "ids",
        "in": "query",
        "required": 1
    }]],
    ["RTR_GetScripts", "GET", "/real-time-response/entities/scripts/v1", "Get custom-scripts based on the ID's given. These are used for the RTR `runscript` command.", "real_time_response_admin", [{
        "type": "array",
        "items": {
            "type": "string"
        },
        "collectionFormat": "multi",
        "description": "File IDs",
        "name": "ids",
        "in": "query",
        "required": 1
    }]],
    ["RTR_CreateScripts", "POST", "/real-time-response/entities/scripts/v1", "Upload a new custom-script to use for the RTR `runscript` command.", "real_time_response_admin", [{
        "type": "file",
        "description": "custom-script file to upload.  These should be powershell scripts.",
        "name": "file",
        "in": "formData"
    }, {
        "type": "string",
        "description": "File description",
        "name": "description",
        "in": "formData",
        "required": 1
    }, {
        "type": "string",
        "description": "File name (if different than actual file name)",
        "name": "name",
        "in": "formData"
    }, {
        "maxLength": 4096,
        "type": "string",
        "description": "The audit log comment",
        "name": "comments_for_audit_log",
        "in": "formData"
    }, {
        "type": "string",
        "default": "none",
        "description": "Permission for the custom-script. Valid permission values: \n - `private`, usable by only the user who uploaded it \n - `group`, usable by all RTR Admins \n - `public`, usable by all active-responders and RTR admins",
        "name": "permission_type",
        "in": "formData",
        "required": 1
    }, {
        "type": "string",
        "description": "The script text that you want to use to upload",
        "name": "content",
        "in": "formData"
    }, {
        "type": "array",
        "items": {
            "type": "string"
        },
        "collectionFormat": "multi",
        "x-cs-exposures": ["public"],
        "description": "Platforms for the file. Currently supports: windows, mac, linux, . If no platform is provided, it will default to 'windows'",
        "name": "platform",
        "in": "formData"
    }]],
    ["RTR_UpdateScripts", "PATCH", "/real-time-response/entities/scripts/v1", "Upload a new scripts to replace an existing one.", "real_time_response_admin", [{
        "type": "string",
        "description": "ID to update",
        "name": "id",
        "in": "formData",
        "required": 1
    }, {
        "type": "file",
        "description": "custom-script file to upload.  These should be powershell scripts.",
        "name": "file",
        "in": "formData"
    }, {
        "type": "string",
        "description": "File description",
        "name": "description",
        "in": "formData"
    }, {
        "type": "string",
        "description": "File name (if different than actual file name)",
        "name": "name",
        "in": "formData"
    }, {
        "maxLength": 4096,
        "type": "string",
        "description": "The audit log comment",
        "name": "comments_for_audit_log",
        "in": "formData"
    }, {
        "type": "string",
        "default": "none",
        "description": "Permission for the custom-script. Valid permission values: \n - `private`, usable by only the user who uploaded it \n - `group`, usable by all RTR Admins \n - `public`, usable by all active-responders and RTR admins",
        "name": "permission_type",
        "in": "formData"
    }, {
        "type": "string",
        "description": "The script text that you want to use to upload",
        "name": "content",
        "in": "formData"
    }, {
        "type": "array",
        "items": {
            "type": "string"
        },
        "collectionFormat": "multi",
        "x-cs-exposures": ["public"],
        "description": "Platforms for the file. Currently supports: windows, mac, ",
        "name": "platform",
        "in": "formData"
    }]],
    ["RTR_DeleteScripts", "DELETE", "/real-time-response/entities/scripts/v1", "Delete a custom-script based on the ID given.  Can only delete one script at a time.", "real_time_response_admin", [{
        "type": "string",
        "description": "File id",
        "name": "ids",
        "in": "query",
        "required": 1
    }]],
    ["RTR_GetScriptsV2", "GET", "/real-time-response/entities/scripts/v2", "Get custom-scripts based on the ID's given. These are used for the RTR `runscript` command.", "real_time_response_admin", [{
        "type": "array",
        "items": {
            "type": "string"
        },
        "collectionFormat": "multi",
        "description": "File IDs",
        "name": "ids",
        "in": "query",
        "required": 1
    }]],
    ["RTR_ListPut_Files", "GET", "/real-time-response/queries/put-files/v1", "Get a list of put-file ID's that are available to the user for the `put` command.", "real_time_response_admin", [{
        "type": "string",
        "description": "Optional filter criteria in the form of an FQL query. For more information about FQL queries, see our [FQL documentation in Falcon](https://falcon.crowdstrike.com/support/documentation/45/falcon-query-language-feature-guide).",
        "name": "filter",
        "in": "query"
    }, {
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
        "description": "Sort by spec. Ex: 'created_at|asc'.",
        "name": "sort",
        "in": "query"
    }]],
    ["RTR_ListScripts", "GET", "/real-time-response/queries/scripts/v1", "Get a list of custom-script ID's that are available to the user for the `runscript` command.", "real_time_response_admin", [{
        "type": "string",
        "description": "Optional filter criteria in the form of an FQL query. For more information about FQL queries, see our [FQL documentation in Falcon](https://falcon.crowdstrike.com/support/documentation/45/falcon-query-language-feature-guide).",
        "name": "filter",
        "in": "query"
    }, {
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
        "description": "Sort by spec. Ex: 'created_at|asc'.",
        "name": "sort",
        "in": "query"
    }]]
];