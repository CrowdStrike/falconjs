import axios, { Axios } from "axios";
import { api_endpoints } from "./endpoints"

/**
 * defines and enforces formatting arguments for Falcon.command(...)
 * 
 * @interface CommandArguments
 * @member {string} commandName 
 * @member {object} params
 * @member {object} body
 * @member {any} [propName]
 * @member {string} header
 */
interface CommandArguments {
    commandName: string,
    params?: object,
    body?: object,
    header?: string,
    [propName: string]: any
}

/**
 * allows user to interact with Falcon API
 * modeled after FalconPy's Uber-Class/API Harness
 * https://github.com/CrowdStrike/falconpy/wiki/Basic-Uber-Class-usage
 */
export class Falcon {
    baseUrl: string;
    clientId: string;
    clientSecret: string;
    userAgent: string;
    token: string;
    endpoints: Array<Array<any>>;

    /**
     * instantiates an instance of the Falcon class
     * 
     * @constructor
     * @memberof Falcon
     * @param  {string} baseUrl         base URL of user's Falcon API client
     * @param  {string} clientId        client ID of user's Falcon API client
     * @param  {string} clientSecret    client Secret of user's Falcon API client
     * @param  {string} userAgent       value to be used for outgoing requests' HTTP header: User-Agent
     */
    constructor(baseUrl: string, clientId: string, clientSecret: string, userAgent: string) {
        userAgent = "FalconJS" + userAgent;
        this.baseUrl = baseUrl;
        this.clientId = clientId;
        this.clientSecret = clientSecret;
        this.userAgent = userAgent;
        this.token = "";
        this.endpoints = Array.from(api_endpoints[0]);
    }

    /**
    * handles procedures necessary for initializing Falcon class
    * GETs OAuth2 token from Falcon API authentication endpoint
    * 
    * @memberof Falcon
    */
    async init() {
        const authUrl = this.baseUrl + "/oauth2/token"
        const requestData = {
            client_id: this.clientId,
            client_secret: this.clientSecret
        }
        const response = await axios.post(authUrl, requestData, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
        console.log(response.data["access_token"])
        this.token = response.data["access_token"]
    }

    /**
    * used to initialize an instance of the Falcon class
    * aggregates helper function execution and
    * initiates factory pattern to build properly configured API client
    * 
    * @memberof Falcon
    * @param  {string} baseUrl        base URL of user's Falcon API client
    * @param  {string} clientId       client ID of user's Falcon API client
    * @param  {string} clientSecret   client Secret of user's Falcon API client
    * @param  {string} userAgent      value to be used for outgoing requests' HTTP header: User-Agent
    * @return {Promise<Falcon>}       new instance of the Falcon class
    */
    static async build(baseUrl: string, clientId: string, clientSecret: string, userAgent: string): Promise<Falcon> {
        const f = new Falcon(baseUrl, clientId, clientSecret, userAgent);
        await f.init();
        return f;
    }

    /** helper function for printing Token @memberof Falcon */
    public printToken() {
        console.log(this.token)
    }

    /**
    * performs an arbitrary request to the Falcon API
    * 
    * @memberof Falcon
    * @param  {CommandArguments} args   arguments for API method - request params or body
    * @return {Promise<any>}            response data
    */
    public async command(args: CommandArguments): Promise<any> {
        let cmd = args["commandName"]
        let params = args["params"]
        let body = args["body"]
        for (let i of this.endpoints) {
            if (i[0] == cmd) {
                let url = this.baseUrl + i[2]
                let method = i[1].toLowerCase()
                let p = params ? params : null
                let b = body ? body : null
                var headers: { [key: string]: string }
                headers = {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + this.token,
                }
                let response = await axios({
                    method: method,
                    url: url,
                    data: b,
                    params: p,
                    headers: headers,
                    paramsSerializer: { indexes: null }

                });
                if (cmd=="getAssessmentV1")console.log(response)
                return response["data"]["resources"]
                
            }
        }
    }
}