/**
 * contains all method definitions for API: real time response
 * consumed and interpreted by Falcon.command(...)
 */
export const _real_time_response_endpoints: Array<any> = [
    [
        "RTR_AggregateSessions",
        "POST",
        "/real-time-response/aggregates/sessions/GET/v1",
        "Get aggregates on session data.",
        "real_time_response",
        [
            {
                description:
                    "Supported aggregations: \n- `term`\n- `date_range`\n\nSupported aggregation members:\n\n**`date_ranges`** If peforming a date range query specify the **`from`** and **`to`** date ranges.  These can be in common date formats like `2019-07-18` or `now`\n**`field`** Term you want to aggregate on.  If doing a `date_range` query, this is the date field you want to apply the date ranges to\n**`filter`** Optional filter criteria in the form of an FQL query. For more information about FQL queries, see our [FQL documentation in Falcon](https://falcon.crowdstrike.com/support/documentation/45/falcon-query-language-feature-guide).\n**`name`** Name of the aggregation\n**`size`** Size limit to apply to the queries.",
                name: "body",
                in: "body",
                required: 1,
            },
        ],
    ],
    [
        "BatchActiveResponderCmd",
        "POST",
        "/real-time-response/combined/batch-active-responder-command/v1",
        "Batch executes a RTR active-responder command across the hosts mapped to the given batch ID.",
        "real_time_response",
        [
            {
                type: "integer",
                default: 30,
                description: "Timeout for how long to wait for the request in seconds, default timeout is 30 seconds. Maximum is 10 minutes.",
                name: "timeout",
                in: "query",
            },
            {
                type: "string",
                default: "30s",
                description: "Timeout duration for for how long to wait for the request in duration syntax. Example, `10s`. Valid units: `ns, us, ms, s, m, h`. Maximum is 10 minutes.",
                name: "timeout_duration",
                in: "query",
            },
            {
                type: "string",
                default: "tiny bit less than overall request timeout",
                description:
                    "Timeout duration for how long a host has time to complete processing. Default value is a bit less than the overall timeout value. It cannot be greater than the overall request timeout. Maximum is < 10 minutes. Example, `10s`. Valid units: `ns, us, ms, s, m, h`. ",
                name: "host_timeout_duration",
                in: "query",
            },
            {
                description:
                    "Use this endpoint to run these [real time response commands](https://falcon.crowdstrike.com/support/documentation/11/getting-started-guide#rtr_commands):\n- `cat`\n- `cd`\n- `clear`\n- `cp`\n- `encrypt`\n- `env`\n- `eventlog`\n- `filehash`\n- `get`\n- `getsid`\n- `help`\n- `history`\n- `ipconfig`\n- `kill`\n- `ls`\n- `map`\n- `memdump`\n- `mkdir`\n- `mount`\n- `mv`\n- `netstat`\n- `ps`\n- `reg query`\n- `reg set`\n- `reg delete`\n- `reg load`\n- `reg unload`\n- `restart`\n- `rm`\n- `runscript`\n- `shutdown`\n- `unmap`\n- `update history`\n- `update install`\n- `update list`\n- `update query`\n- `xmemdump`\n- `zip`\n\n**`base_command`** Active-Responder command type we are going to execute, for example: `get` or `cp`.  Refer to the RTR documentation for the full list of commands.\n**`batch_id`** Batch ID to execute the command on.  Received from `/real-time-response/combined/init-sessions/v1`.\n**`command_string`** Full command string for the command. For example  `get some_file.txt`\n**`optional_hosts`** List of a subset of hosts we want to run the command on.  If this list is supplied, only these hosts will receive the command.",
                name: "body",
                in: "body",
                required: 1,
            },
        ],
    ],
    [
        "BatchCmd",
        "POST",
        "/real-time-response/combined/batch-command/v1",
        "Batch executes a RTR read-only command across the hosts mapped to the given batch ID.",
        "real_time_response",
        [
            {
                type: "integer",
                default: 30,
                description: "Timeout for how long to wait for the request in seconds, default timeout is 30 seconds. Maximum is 10 minutes.",
                name: "timeout",
                in: "query",
            },
            {
                type: "string",
                default: "30s",
                description: "Timeout duration for for how long to wait for the request in duration syntax. Example, `10s`. Valid units: `ns, us, ms, s, m, h`. Maximum is 10 minutes.",
                name: "timeout_duration",
                in: "query",
            },
            {
                type: "string",
                default: "tiny bit less than overall request timeout",
                description:
                    "Timeout duration for how long a host has time to complete processing. Default value is a bit less than the overall timeout value. It cannot be greater than the overall request timeout. Maximum is < 10 minutes. Example, `10s`. Valid units: `ns, us, ms, s, m, h`. ",
                name: "host_timeout_duration",
                in: "query",
            },
            {
                description:
                    "Use this endpoint to run these [real time response commands](https://falcon.crowdstrike.com/support/documentation/11/getting-started-guide#rtr_commands):\n- `cat`\n- `cd`\n- `clear`\n- `env`\n- `eventlog`\n- `filehash`\n- `getsid`\n- `help`\n- `history`\n- `ipconfig`\n- `ls`\n- `mount`\n- `netstat`\n- `ps`\n- `reg query`\n\n**`base_command`** read-only command type we are going to execute, for example: `ls` or `cd`.  Refer to the RTR documentation for the full list of commands.\n**`batch_id`** Batch ID to execute the command on.  Received from `/real-time-response/combined/init-sessions/v1`.\n**`command_string`** Full command string for the command. For example  `cd C:\\some_directory`\n**`optional_hosts`** List of a subset of hosts we want to run the command on.  If this list is supplied, only these hosts will receive the command.",
                name: "body",
                in: "body",
                required: 1,
            },
        ],
    ],
    [
        "BatchGetCmdStatus",
        "GET",
        "/real-time-response/combined/batch-get-command/v1",
        "Retrieves the status of the specified batch get command.  Will return successful files when they are finished processing.",
        "real_time_response",
        [
            {
                type: "integer",
                default: 30,
                description: "Timeout for how long to wait for the request in seconds, default timeout is 30 seconds. Maximum is 10 minutes.",
                name: "timeout",
                in: "query",
            },
            {
                type: "string",
                default: "30s",
                description: "Timeout duration for for how long to wait for the request in duration syntax. Example, `10s`. Valid units: `ns, us, ms, s, m, h`. Maximum is 10 minutes.",
                name: "timeout_duration",
                in: "query",
            },
            {
                type: "string",
                description: "Batch Get Command Request ID received from `/real-time-response/combined/get-command/v1`",
                name: "batch_get_cmd_req_id",
                in: "query",
                required: 1,
            },
        ],
    ],
    [
        "BatchGetCmd",
        "POST",
        "/real-time-response/combined/batch-get-command/v1",
        "Batch executes `get` command across hosts to retrieve files. After this call is made `GET /real-time-response/combined/batch-get-command/v1` is used to query for the results.",
        "real_time_response",
        [
            {
                type: "integer",
                default: 30,
                description: "Timeout for how long to wait for the request in seconds, default timeout is 30 seconds. Maximum is 10 minutes.",
                name: "timeout",
                in: "query",
            },
            {
                type: "string",
                default: "30s",
                description: "Timeout duration for for how long to wait for the request in duration syntax. Example, `10s`. Valid units: `ns, us, ms, s, m, h`. Maximum is 10 minutes.",
                name: "timeout_duration",
                in: "query",
            },
            {
                type: "string",
                default: "tiny bit less than overall request timeout",
                description:
                    "Timeout duration for how long a host has time to complete processing. Default value is a bit less than the overall timeout value. It cannot be greater than the overall request timeout. Maximum is < 10 minutes. Example, `10s`. Valid units: `ns, us, ms, s, m, h`. ",
                name: "host_timeout_duration",
                in: "query",
            },
            {
                description:
                    "**`batch_id`** Batch ID to execute the command on.  Received from `/real-time-response/combined/init-sessions/v1`.\n**`file_path`** Full path to the file that is to be retrieved from each host in the batch.\n**`optional_hosts`** List of a subset of hosts we want to run the command on.  If this list is supplied, only these hosts will receive the command.",
                name: "body",
                in: "body",
                required: 1,
            },
        ],
    ],
    [
        "BatchInitSessions",
        "POST",
        "/real-time-response/combined/batch-init-session/v1",
        "Batch initialize a RTR session on multiple hosts.  Before any RTR commands can be used, an active session is needed on the host.",
        "real_time_response",
        [
            {
                type: "integer",
                default: 30,
                description: "Timeout for how long to wait for the request in seconds, default timeout is 30 seconds. Maximum is 10 minutes.",
                name: "timeout",
                in: "query",
            },
            {
                type: "string",
                default: "30s",
                description: "Timeout duration for for how long to wait for the request in duration syntax. Example, `10s`. Valid units: `ns, us, ms, s, m, h`. Maximum is 10 minutes.",
                name: "timeout_duration",
                in: "query",
            },
            {
                type: "string",
                default: "tiny bit less than overall request timeout",
                description:
                    "Timeout duration for how long a host has time to complete processing. Default value is a bit less than the overall timeout value. It cannot be greater than the overall request timeout. Maximum is < 10 minutes. Example, `10s`. Valid units: `ns, us, ms, s, m, h`. ",
                name: "host_timeout_duration",
                in: "query",
            },
            {
                description:
                    "**`host_ids`** List of host agent ID's to initialize a RTR session on\n**`existing_batch_id`** Optional batch ID. Use an existing batch ID if you want to initialize new hosts and add them to the existing batch",
                name: "body",
                in: "body",
                required: 1,
            },
        ],
    ],
    [
        "BatchRefreshSessions",
        "POST",
        "/real-time-response/combined/batch-refresh-session/v1",
        "Batch refresh a RTR session on multiple hosts. RTR sessions will expire after 10 minutes unless refreshed.",
        "real_time_response",
        [
            {
                type: "integer",
                default: 30,
                description: "Timeout for how long to wait for the request in seconds, default timeout is 30 seconds. Maximum is 10 minutes.",
                name: "timeout",
                in: "query",
            },
            {
                type: "string",
                default: "30s",
                description: "Timeout duration for for how long to wait for the request in duration syntax. Example, `10s`. Valid units: `ns, us, ms, s, m, h`. Maximum is 10 minutes.",
                name: "timeout_duration",
                in: "query",
            },
            {
                description:
                    "**`batch_id`** Batch ID to execute the command on.  Received from `/real-time-response/combined/init-sessions/v1`.\n**`hosts_to_remove`** Hosts to remove from the batch session.  Heartbeats will no longer happen on these hosts and the sessions will expire.",
                name: "body",
                in: "body",
                required: 1,
            },
        ],
    ],
    [
        "RTR_CheckActiveResponderCommandStatus",
        "GET",
        "/real-time-response/entities/active-responder-command/v1",
        "Get status of an executed active-responder command on a single host.",
        "real_time_response",
        [
            {
                type: "string",
                description: "Cloud Request ID of the executed command to query",
                name: "cloud_request_id",
                in: "query",
                required: 1,
            },
            {
                type: "integer",
                default: 0,
                description: "Sequence ID that we want to retrieve. Command responses are chunked across sequences",
                name: "sequence_id",
                in: "query",
                required: 1,
            },
        ],
    ],
    [
        "RTR_ExecuteActiveResponderCommand",
        "POST",
        "/real-time-response/entities/active-responder-command/v1",
        "Execute an active responder command on a single host.",
        "real_time_response",
        [
            {
                description:
                    "Use this endpoint to run these [real time response commands](https://falcon.crowdstrike.com/support/documentation/11/getting-started-guide#rtr_commands):\n- `cat`\n- `cd`\n- `clear`\n- `cp`\n- `encrypt`\n- `env`\n- `eventlog`\n- `filehash`\n- `get`\n- `getsid`\n- `help`\n- `history`\n- `ipconfig`\n- `kill`\n- `ls`\n- `map`\n- `memdump`\n- `mkdir`\n- `mount`\n- `mv`\n- `netstat`\n- `ps`\n- `reg query`\n- `reg set`\n- `reg delete`\n- `reg load`\n- `reg unload`\n- `restart`\n- `rm`\n- `runscript`\n- `shutdown`\n- `unmap`\n- `update history`\n- `update install`\n- `update list`\n- `update query`\n- `xmemdump`\n- `zip`\n\nRequired values.  The rest of the fields are unused.\n**`base_command`** Active-Responder command type we are going to execute, for example: `get` or `cp`.  Refer to the RTR documentation for the full list of commands.\n**`command_string`** Full command string for the command. For example  `get some_file.txt`\n**`session_id`** RTR session ID to run the command on",
                name: "body",
                in: "body",
                required: 1,
            },
        ],
    ],
    [
        "RTR_CheckCommandStatus",
        "GET",
        "/real-time-response/entities/command/v1",
        "Get status of an executed command on a single host.",
        "real_time_response",
        [
            {
                type: "string",
                description: "Cloud Request ID of the executed command to query",
                name: "cloud_request_id",
                in: "query",
                required: 1,
            },
            {
                type: "integer",
                default: 0,
                description: "Sequence ID that we want to retrieve. Command responses are chunked across sequences",
                name: "sequence_id",
                in: "query",
                required: 1,
            },
        ],
    ],
    [
        "RTR_ExecuteCommand",
        "POST",
        "/real-time-response/entities/command/v1",
        "Execute a command on a single host.",
        "real_time_response",
        [
            {
                description:
                    "Use this endpoint to run these [real time response commands](https://falcon.crowdstrike.com/support/documentation/11/getting-started-guide#rtr_commands):\n- `cat`\n- `cd`\n- `clear`\n- `env`\n- `eventlog`\n- `filehash`\n- `getsid`\n- `help`\n- `history`\n- `ipconfig`\n- `ls`\n- `mount`\n- `netstat`\n- `ps`\n- `reg query`\n\nRequired values.  The rest of the fields are unused.\n**`base_command`** read-only command type we are going to execute, for example: `ls` or `cd`.  Refer to the RTR documentation for the full list of commands.\n**`command_string`** Full command string for the command. For example  `cd C:\\some_directory`\n**`session_id`** RTR session ID to run the command on",
                name: "body",
                in: "body",
                required: 1,
            },
        ],
    ],
    [
        "RTR_GetExtractedFileContents",
        "GET",
        "/real-time-response/entities/extracted-file-contents/v1",
        "Get RTR extracted file contents for specified session and sha256.",
        "real_time_response",
        [
            {
                type: "string",
                description: "RTR Session id",
                name: "session_id",
                in: "query",
                required: 1,
            },
            {
                type: "string",
                description: "Extracted SHA256 (e.g. 'efa256a96af3b556cd3fc9d8b1cf587d72807d7805ced441e8149fc279db422b')",
                name: "sha256",
                in: "query",
                required: 1,
            },
            {
                type: "string",
                description: "Filename to use for the archive name and the file within the archive.",
                name: "filename",
                in: "query",
            },
        ],
    ],
    [
        "RTR_ListFiles",
        "GET",
        "/real-time-response/entities/file/v1",
        "Get a list of files for the specified RTR session.",
        "real_time_response",
        [
            {
                type: "string",
                description: "RTR Session id",
                name: "session_id",
                in: "query",
                required: 1,
            },
        ],
    ],
    [
        "RTR_DeleteFile",
        "DELETE",
        "/real-time-response/entities/file/v1",
        "Delete a RTR session file.",
        "real_time_response",
        [
            {
                type: "string",
                description: "RTR Session file id",
                name: "ids",
                in: "query",
                required: 1,
            },
            {
                type: "string",
                description: "RTR Session id",
                name: "session_id",
                in: "query",
                required: 1,
            },
        ],
    ],
    [
        "RTR_ListFilesV2",
        "GET",
        "/real-time-response/entities/file/v2",
        "Get a list of files for the specified RTR session.",
        "real_time_response",
        [
            {
                type: "string",
                description: "RTR Session id",
                name: "session_id",
                in: "query",
                required: 1,
            },
        ],
    ],
    [
        "RTR_DeleteFileV2",
        "DELETE",
        "/real-time-response/entities/file/v2",
        "Delete a RTR session file.",
        "real_time_response",
        [
            {
                type: "string",
                description: "RTR Session file id",
                name: "ids",
                in: "query",
                required: 1,
            },
            {
                type: "string",
                description: "RTR Session id",
                name: "session_id",
                in: "query",
                required: 1,
            },
        ],
    ],
    [
        "RTR_ListQueuedSessions",
        "POST",
        "/real-time-response/entities/queued-sessions/GET/v1",
        "Get queued session metadata by session ID.",
        "real_time_response",
        [
            {
                description: "**`ids`** List of RTR sessions to retrieve.  RTR will only return the sessions that were created by the calling user",
                name: "body",
                in: "body",
                required: 1,
            },
        ],
    ],
    [
        "RTR_DeleteQueuedSession",
        "DELETE",
        "/real-time-response/entities/queued-sessions/command/v1",
        "Delete a queued session command",
        "real_time_response",
        [
            {
                type: "string",
                description: "RTR Session id",
                name: "session_id",
                in: "query",
                required: 1,
            },
            {
                type: "string",
                description: "Cloud Request ID of the executed command to query",
                name: "cloud_request_id",
                in: "query",
                required: 1,
            },
        ],
    ],
    [
        "RTR_PulseSession",
        "POST",
        "/real-time-response/entities/refresh-session/v1",
        "Refresh a session timeout on a single host.",
        "real_time_response",
        [
            {
                description: "**`device_id`** The host agent ID to refresh the RTR session on.  RTR will retrieve an existing session for the calling user on this host",
                name: "body",
                in: "body",
                required: 1,
            },
        ],
    ],
    [
        "RTR_ListSessions",
        "POST",
        "/real-time-response/entities/sessions/GET/v1",
        "Get session metadata by session id.",
        "real_time_response",
        [
            {
                description: "**`ids`** List of RTR sessions to retrieve.  RTR will only return the sessions that were created by the calling user",
                name: "body",
                in: "body",
                required: 1,
            },
        ],
    ],
    [
        "RTR_InitSession",
        "POST",
        "/real-time-response/entities/sessions/v1",
        "Initialize a new session with the RTR cloud.",
        "real_time_response",
        [
            {
                type: "integer",
                default: 30,
                description: "Timeout for how long to wait for the request in seconds, default timeout is 30 seconds. Maximum is 10 minutes.",
                name: "timeout",
                in: "query",
            },
            {
                type: "string",
                default: "30s",
                description: "Timeout duration for how long to wait for the request in duration syntax. Example, `10s`. Valid units: `ns, us, ms, s, m, h`. Maximum is 10 minutes.",
                name: "timeout_duration",
                in: "query",
            },
            {
                description:
                    "**`device_id`** The host agent ID to initialize the RTR session on. RTR will retrieve an existing session for the calling user on this host\n**`queue_offline`** If we should queue this session if the host is offline. Any commands run against an offline-queued session will be queued up and executed when the host comes online.",
                name: "body",
                in: "body",
                required: 1,
            },
        ],
    ],
    [
        "RTR_DeleteSession",
        "DELETE",
        "/real-time-response/entities/sessions/v1",
        "Delete a session.",
        "real_time_response",
        [
            {
                type: "string",
                description: "RTR Session id",
                name: "session_id",
                in: "query",
                required: 1,
            },
        ],
    ],
    [
        "RTR_ListAllSessions",
        "GET",
        "/real-time-response/queries/sessions/v1",
        "Get a list of session_ids.",
        "real_time_response",
        [
            {
                type: "string",
                description: "Starting index of overall result set from which to return ids.",
                name: "offset",
                in: "query",
            },
            {
                type: "integer",
                description: "Number of ids to return.",
                name: "limit",
                in: "query",
            },
            {
                type: "string",
                description: "Sort by spec. Ex: 'date_created|asc'.",
                name: "sort",
                in: "query",
            },
            {
                type: "string",
                description:
                    "Optional filter criteria in the form of an FQL query. For more information about FQL queries, see our [FQL documentation in Falcon](https://falcon.crowdstrike.com/support/documentation/45/falcon-query-language-feature-guide).\u00a0\u201cuser_id\u201d can accept a special value \u2018@me\u2019 which will restrict results to records with current user\u2019s ID.",
                name: "filter",
                in: "query",
            },
        ],
    ],
];
