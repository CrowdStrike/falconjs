export const _host_group_endpoints: Array<any> = [
    [
      "queryCombinedGroupMembers",
      "GET",
      "/devices/combined/host-group-members/v1",
      "Search for members of a Host Group in your environment by providing an FQL filter " +
      "and paging details. Returns a set of host details which match the filter criteria",
      "host_group",
      [
        {
          "type": "string",
          "description": "The ID of the Host Group to search for members of",
          "name": "id",
          "in": "query"
        },
        {
          "type": "string",
          "description": "The filter expression that should be used to limit the results",
          "name": "filter",
          "in": "query"
        },
        {
          "minimum": 0,
          "type": "integer",
          "description": "The offset to start retrieving records from",
          "name": "offset",
          "in": "query"
        },
        {
          "maximum": 5000,
          "minimum": 1,
          "type": "integer",
          "description": "The maximum records to return. [1-5000]",
          "name": "limit",
          "in": "query"
        },
        {
          "type": "string",
          "description": "The property to sort by",
          "name": "sort",
          "in": "query"
        }
      ]
    ],
    [
      "queryCombinedHostGroups",
      "GET",
      "/devices/combined/host-groups/v1",
      "Search for Host Groups in your environment by providing an FQL filter and paging details. " +
      "Returns a set of Host Groups which match the filter criteria",
      "host_group",
      [
        {
          "type": "string",
          "description": "The filter expression that should be used to limit the results",
          "name": "filter",
          "in": "query"
        },
        {
          "minimum": 0,
          "type": "integer",
          "description": "The offset to start retrieving records from",
          "name": "offset",
          "in": "query"
        },
        {
          "maximum": 5000,
          "minimum": 1,
          "type": "integer",
          "description": "The maximum records to return. [1-5000]",
          "name": "limit",
          "in": "query"
        },
        {
          "enum": [
            "created_by.asc",
            "created_by.desc",
            "created_timestamp.asc",
            "created_timestamp.desc",
            "group_type.asc",
            "group_type.desc",
            "modified_by.asc",
            "modified_by.desc",
            "modified_timestamp.asc",
            "modified_timestamp.desc",
            "name.asc",
            "name.desc"
          ],
          "type": "string",
          "description": "The property to sort by",
          "name": "sort",
          "in": "query"
        }
      ]
    ],
    [
      "performGroupAction",
      "POST",
      "/devices/entities/host-group-actions/v1",
      "Perform the specified action on the Host Groups specified in the request",
      "host_group",
      [
        {
          "enum": [
            "add-hosts",
            "remove-hosts"
          ],
          "type": "string",
          "description": "The action to perform",
          "name": "action_name",
          "in": "query",
          "required": 1
        },
        {
          "type": "boolean",
          "default": 0,
          "description": "Bool to disable hostname check on add-member",
          "name": "disable_hostname_check",
          "in": "query"
        },
        {
          "name": "body",
          "in": "body",
          "required": 1
        }
      ]
    ],
    [
      "getHostGroups",
      "GET",
      "/devices/entities/host-groups/v1",
      "Retrieve a set of Host Groups by specifying their IDs",
      "host_group",
      [
        {
          "type": "array",
          "items": {
            "type": "string"
          },
          "collectionFormat": "multi",
          "description": "The IDs of the Host Groups to return",
          "name": "ids",
          "in": "query",
          "required": 1
        }
      ]
    ],
    [
      "createHostGroups",
      "POST",
      "/devices/entities/host-groups/v1",
      "Create Host Groups by specifying details about the group to create",
      "host_group",
      [
        {
          "name": "body",
          "in": "body",
          "required": 1
        }
      ]
    ],
    [
      "updateHostGroups",
      "PATCH",
      "/devices/entities/host-groups/v1",
      "Update Host Groups by specifying the ID of the group and details to update",
      "host_group",
      [
        {
          "name": "body",
          "in": "body",
          "required": 1
        }
      ]
    ],
    [
      "deleteHostGroups",
      "DELETE",
      "/devices/entities/host-groups/v1",
      "Delete a set of Host Groups by specifying their IDs",
      "host_group",
      [
        {
          "type": "array",
          "items": {
            "type": "string"
          },
          "collectionFormat": "multi",
          "description": "The IDs of the Host Groups to delete",
          "name": "ids",
          "in": "query",
          "required": 1
        }
      ]
    ],
    [
      "queryGroupMembers",
      "GET",
      "/devices/queries/host-group-members/v1",
      "Search for members of a Host Group in your environment by providing an FQL filter and paging details. " +
      "Returns a set of Agent IDs which match the filter criteria",
      "host_group",
      [
        {
          "type": "string",
          "description": "The ID of the Host Group to search for members of",
          "name": "id",
          "in": "query"
        },
        {
          "type": "string",
          "description": "The filter expression that should be used to limit the results",
          "name": "filter",
          "in": "query"
        },
        {
          "minimum": 0,
          "type": "integer",
          "description": "The offset to start retrieving records from",
          "name": "offset",
          "in": "query"
        },
        {
          "maximum": 5000,
          "minimum": 1,
          "type": "integer",
          "description": "The maximum records to return. [1-5000]",
          "name": "limit",
          "in": "query"
        },
        {
          "type": "string",
          "description": "The property to sort by",
          "name": "sort",
          "in": "query"
        }
      ]
    ],
    [
      "queryHostGroups",
      "GET",
      "/devices/queries/host-groups/v1",
      "Search for Host Groups in your environment by providing an FQL filter and paging details. " +
      "Returns a set of Host Group IDs which match the filter criteria",
      "host_group",
      [
        {
          "type": "string",
          "description": "The filter expression that should be used to limit the results",
          "name": "filter",
          "in": "query"
        },
        {
          "minimum": 0,
          "type": "integer",
          "description": "The offset to start retrieving records from",
          "name": "offset",
          "in": "query"
        },
        {
          "maximum": 5000,
          "minimum": 1,
          "type": "integer",
          "description": "The maximum records to return. [1-5000]",
          "name": "limit",
          "in": "query"
        },
        {
          "enum": [
            "created_by.asc",
            "created_by.desc",
            "created_timestamp.asc",
            "created_timestamp.desc",
            "group_type.asc",
            "group_type.desc",
            "modified_by.asc",
            "modified_by.desc",
            "modified_timestamp.asc",
            "modified_timestamp.desc",
            "name.asc",
            "name.desc"
          ],
          "type": "string",
          "description": "The property to sort by",
          "name": "sort",
          "in": "query"
        }
      ]
    ]
  ]