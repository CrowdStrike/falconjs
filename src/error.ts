import { MsaAPIError, MsaMetaInfo } from "../src/models";

interface errorJson {
    errors: Array<MsaAPIError>;
    meta: MsaMetaInfo;
    resources?: Array<any>;
}

class FalconError {
    json: Promise<errorJson>;

    private body: errorJson | null = null;

    constructor(public response: Response) {
        this.json = this.response.json();
    }

    async text(): Promise<string> {
        return this.json
            .then((j) => {
                return j.errors[0].message;
            })
            .catch((e) => {
                return "Cannot parse json from Falcon API response: " + e + " " + this.fallbackText();
            });
    }

    private fallbackText(): string {
        return "Falcon API returned: " + this.response.status + " " + this.response.statusText + " on " + this.response.url;
    }
}

export async function FalconErrorExplain(err: Response): Promise<string> {
    return await new FalconError(err).text();
}
