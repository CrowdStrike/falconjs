import { FetchParams, RequestContext } from "../runtime";

const DEFAULT_USER_AGENT = "falconjs/0.7.0";

export class UserAgent {
    constructor(private userAgentOverride?: string) {}

    async pre(context: RequestContext): Promise<FetchParams> {
        const userAgent = this.userAgentOverride
            ? `${this.userAgentOverride} ${DEFAULT_USER_AGENT}`
            : DEFAULT_USER_AGENT;

        return {
            url: context.url,
            init: {
                ...context.init,
                headers: {
                    ...context.init.headers,
                    "User-Agent": userAgent,
                },
            },
        };
    }
}
