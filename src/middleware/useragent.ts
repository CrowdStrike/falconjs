import { FetchParams, RequestContext } from "../runtime";

const DEFAULT_USER_AGENT = "falconjs/0.7.0";

// RFC 9110 §5.6.2 tchar. A User-Agent product is token["/"token] (§10.1.5),
// and multiple products are separated by a single space.
const TCHAR = "[-!#$%&'*+.^_`|~0-9A-Za-z]";
const TOKEN = `${TCHAR}+`;
const PRODUCT = `${TOKEN}(?:/${TOKEN})?`;
const PRODUCT_LIST = new RegExp(`^${PRODUCT}(?: ${PRODUCT})*$`);

export class UserAgent {
    private readonly userAgentOverride?: string;

    constructor(userAgentOverride?: string) {
        const trimmed = userAgentOverride?.trim();
        if (trimmed) {
            if (!PRODUCT_LIST.test(trimmed)) {
                throw new Error(
                    `Invalid userAgentOverride ${JSON.stringify(userAgentOverride)}: expected one or more RFC 9110 product tokens (e.g. "my-integration/1.0.0") separated by single spaces.`,
                );
            }
            this.userAgentOverride = trimmed;
        }
    }

    async pre(context: RequestContext): Promise<FetchParams> {
        const userAgent = this.userAgentOverride ? `${this.userAgentOverride} ${DEFAULT_USER_AGENT}` : DEFAULT_USER_AGENT;

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
