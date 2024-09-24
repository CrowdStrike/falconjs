/**
 * contains all method definitions for API: spotlight evaluation logic
 * consumed and interpreted by Falcon.command(...)
 */
export const _spotlight_evaluation_logic_endpoints: Array<any> = [
    ["combinedQueryEvaluationLogic", "GET", "/spotlight/combined/evaluation-logic/v1", "Search for evaluation logic in your environment by providing a FQL filter and paging details. Returns a set of evaluation logic entities which match the filter criteria.", "spotlight_evaluation_logic", [{
        "type": "string",
        "description": "A pagination token used with the `limit` parameter to manage pagination of results. On your first request, don't provide an `after` token. On subsequent requests, provide the `after` token from the previous response to continue from that place in the results.",
        "name": "after",
        "in": "query"
    }, {
        "type": "integer",
        "description": "Maximum number of entities to return.",
        "name": "limit",
        "in": "query"
    }, {
        "type": "string",
        "description": "FQL query specifying the filter parameters.",
        "name": "filter",
        "in": "query",
        "required": 1
    }, {
        "type": "string",
        "description": "Sort evaluation logic by their properties.",
        "name": "sort",
        "in": "query"
    }]],
    ["getEvaluationLogic", "GET", "/spotlight/entities/evaluation-logic/v1", "Get details on evaluation logic items by providing one or more IDs.", "spotlight_evaluation_logic", [{
        "type": "array",
        "items": {
            "type": "string"
        },
        "collectionFormat": "multi",
        "description": "One or more evaluation logic IDs.",
        "name": "ids",
        "in": "query",
        "required": 1
    }]],
    ["queryEvaluationLogic", "GET", "/spotlight/queries/evaluation-logic/v1", "Search for evaluation logic in your environment by providing a FQL filter and paging details. Returns a set of evaluation logic IDs which match the filter criteria.", "spotlight_evaluation_logic", [{
        "type": "string",
        "description": "A pagination token used with the `limit` parameter to manage pagination of results. On your first request, don't provide an `after` token. On subsequent requests, provide the `after` token from the previous response to continue from that place in the results.",
        "name": "after",
        "in": "query"
    }, {
        "type": "integer",
        "description": "Maximum number of entities to return.",
        "name": "limit",
        "in": "query"
    }, {
        "type": "string",
        "description": "FQL query specifying the filter parameters.",
        "name": "filter",
        "in": "query",
        "required": 1
    }, {
        "type": "string",
        "description": "Sort evaluation logic by their properties.",
        "name": "sort",
        "in": "query"
    }]]
];