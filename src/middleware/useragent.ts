import { FetchParams, RequestContext } from "../runtime";

export class UserAgent {
    async pre(context: RequestContext): Promise<FetchParams> {
        return {
            url: context.url,
            init: {
                ...context.init,
                headers: {
                    ...context.init.headers,
                    "User-Agent": "falconjs/0.2.4",
                },
            },
        };
    }
}
