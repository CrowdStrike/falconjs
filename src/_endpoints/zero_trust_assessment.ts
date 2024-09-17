export var _zero_trust_assessment_endpoints: Array<any> = [
  [
    "getAssessmentV1",
    "GET",
    "/zero-trust-assessment/entities/assessments/v1",
    "Get Zero Trust Assessment data for one or more hosts by providing agent IDs (AID) and a customer ID (CID).",
    "zero_trust_assessment",
    [
      {
        "type": "array",
        "items": {
          "type": "string"
        },
        "collectionFormat": "multi",
        "description": "One or more agent IDs, which you can find in the data.zta file, or the Falcon console.",
        "name": "ids",
        "in": "query",
        "required": 1,
      }
    ],
  ],
  [
    "getAuditV1",
    "GET",
    "/zero-trust-assessment/entities/audit/v1",
    "Get the Zero Trust Assessment audit report for one customer ID (CID).",
    "zero_trust_assessment",
    []
  ],
  [
    "getAssessmentsByScoreV1",
    "GET",
    "/zero-trust-assessment/queries/assessments/v1",
    "Get Zero Trust Assessment data for one or more hosts by providing a customer ID (CID) and a range of scores.",
    "zero_trust_assessment",
    [
      {
        "type": "string",
        "description": "FQL query specifying the filter score.",
        "name": "filter",
        "in": "query",
        "required": 1
      },
      {
        "type": "integer",
        "description": "The number of scores to return in this response (min: 1, max: 1000, default: 100). " +
        "Use with the `after` parameter to manage pagination of results.",
        "name": "limit",
        "in": "query"
      },
      {
        "type": "string",
        "description": "A pagination token used with the `limit` parameter to manage pagination of results. " +
        "On your first request, don't provide an `after` token. On subsequent requests, provide the `after` " +
        "token from the previous response to continue from that place in the results.",
        "name": "after",
        "in": "query"
      },
      {
        "type": "string",
        "default": "score",
        "description": "Sort accounts by their properties. A single sort field is allowed. " +
        "Defaults to ascending. Supported sort option include:\n\n<ul><li>score|desc</li><li>score|asc</li></ul>",
        "name": "sort",
        "in": "query"
      }
    ]
  ],
  [
    "getCombinedAssessmentsQuery",
    "GET",
    "/configuration-assessment/combined/assessments/v1",
    "Search for assessments in your environment by providing an FQL filter and paging details. " +
    "Returns a set of HostFinding entities which match the filter criteria",
    "public_assessments",
    [
      {
        "type": "string",
        "description": "A pagination token used with the `limit` parameter to manage pagination of results. " +
        "On your first request, don't provide an `after` token. On subsequent requests, provide the `after` " +
        "token from the previous response to continue from that place in the results.",
        "name": "after",
        "in": "query"
      },
      {
        "maximum": 5000,
        "minimum": 1,
        "type": "integer",
        "description": "The number of items to return in this response (default: 100, max: 5000). " +
        "Use with the after parameter to manage pagination of results.",
        "name": "limit",
        "in": "query"
      },
      {
        "type": "string",
        "description": "Sort assessment by their properties. Common sort options include:\n\n" +
        "<ul><li>created_timestamp|desc</li><li>updated_timestamp|asc</li></ul>",
        "name": "sort",
        "in": "query"
      },
      {
        "type": "string",
        "description": "Filter items using a query in Falcon Query Language (FQL). Wildcards * are unsupported. " +
        "\n\nCommon filter options include:\n\n<ul><li>created_timestamp:>'2019-11-25T22:36:12Z'</li>" +
        "<li>updated_timestamp:>'2019-11-25T22:36:12Z'</li><li>aid:'8e7656b27d8c49a34a1af416424d6231'</li></ul>",
        "name": "filter",
        "in": "query",
        "required": 1
      },
      {
        "type": "array",
        "items": {
          "type": "string"
        },
        "collectionFormat": "multi",
        "description": "Select various details blocks to be returned for each assessment entity. " +
        "Supported values:\n\n<ul><li>host</li><li>finding.rule</li></ul>",
        "name": "facet",
        "in": "query"
      }
    ]
  ]
]