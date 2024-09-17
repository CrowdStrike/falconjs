/**
 * contains all method definitions for API: oauth2
 * consumed and interpreted by Falcon.command(...)
 */
export var _oauth2_endpoints: Array<any> = [
    ["oauth2RevokeToken", "POST", "/oauth2/revoke", "Revoke a previously issued OAuth2 access token before the end of its standard 30-minute lifespan.", "oauth2", [{
        "type": "string",
        "description": "The OAuth2 client ID you are revoking the token for.",
        "name": "client_id",
        "in": "formData"
    }, {
        "type": "string",
        "description": "The OAuth2 access token you want to revoke.\n\nInclude your API client ID and secret in basic auth format (`Authorization: basic <encoded API client ID and secret>`) in your request header.",
        "name": "token",
        "in": "formData",
        "required": 1
    }]],
    ["oauth2AccessToken", "POST", "/oauth2/token", "Generate an OAuth2 access token", "oauth2", [{
        "type": "string",
        "description": "The API client ID to authenticate your API requests. For information on generating API clients, see [API documentation inside Falcon](https://falcon.crowdstrike.com/support/documentation/1/crowdstrike-api-introduction-for-developers).",
        "name": "client_id",
        "in": "formData",
        "required": 1
    }, {
        "type": "string",
        "description": "The API client secret to authenticate your API requests. For information on generating API clients, see [API documentation inside Falcon](https://falcon.crowdstrike.com/support/documentation/1/crowdstrike-api-introduction-for-developers).",
        "name": "client_secret",
        "in": "formData",
        "required": 1
    }, {
        "type": "string",
        "description": "For MSSP Master CIDs, optionally lock the token to act on behalf of this member CID",
        "name": "member_cid",
        "in": "formData"
    }]]
];